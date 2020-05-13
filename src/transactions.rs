#![allow(bare_trait_objects)]

use exonum::{
    blockchain::{ExecutionError, ExecutionResult, Transaction, TransactionContext},
    crypto::{ PublicKey, SecretKey },
    messages::{Message, RawTransaction, Signed},
};

use super::{ proto, schema::Schema, SERVICE_ID };

/// Error codes emitted by pipes transactions during execution.
#[derive(Debug, Fail)]
#[repr(u8)]
pub enum Error {
    /// Pipe type already exists.
    ///
    /// Can be emitted by `CreatePipe`.
    #[fail(display = "Pipe already exists")]
    PipeAlreadyExists = 0,
    /// 1
    #[fail(display = "Company already exists")]
    CompanyAlreadyExists = 1,
    /// 2
    #[fail(display = "Company with same INN already exists")]
    CompanyWithSameINNAlreadyExists = 2,
    /// 3
    #[fail(display = "Employee already exists")]
    EmployeeAlreadyExists = 3,
    /// 4
    #[fail(display = "Employee does not exist")]
    EmployeeDoesNotExist = 4,
    /// 5
    #[fail(display = "Employee has not permissions creating pipes")]
    EmployeeHasNotPermissions = 5,
    /// 6
    #[fail(display = "Pipe does not exist")]
    PipeDoesNotExist = 6,
    /// 7
    #[fail(display = "Pipe has already marked")]
    PipeHasAlreadyMarked = 7,
    /// 8
    #[fail(display = "Unmarked pipe cant be sold")]
    UnmarkedPipeCantBeSold = 8,
    /// 9
    #[fail(display = "Only owner can sell productions")]
    OnlyOwnerCanSellProductions = 9,

    // TODO add some errors
}

impl From<Error> for ExecutionError {
    fn from(value: Error) -> ExecutionError {
        let description = format!("{}", value);
        ExecutionError::with_description(value as u8, description)
    }
}

/// Transaction group.
#[derive(Serialize, Deserialize, Clone, Debug, TransactionSet)]
pub enum PipeMarkingTransactions {
    /// CreatePipe tx. 0
    CreatePipe(CreatePipe),
    /// MarkPipe tx. 1
    MarkPipe(MarkPipe),
    /// ChangePipeOwner tx. 2
    ChangePipeOwner(ChangePipeOwner),
    /// CreateCompany tx. 3
    CreateCompany(CreateCompany),
    /// CreateEmployee tx. 4
    CreateEmployee(CreateEmployee)
}

/// Create pipe.
#[derive(Serialize, Deserialize, Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::CreatePipe")]
pub struct CreatePipe {
    /// Номер трубы
    pub number: u32,
    /// Номер партии
    pub batch: u32,
    /// Диаметр
    pub diameter: u32,
    /// Толщина стенки
    pub thickness: u32,
    /// Длина
    pub length: u32,
    /// Доп. поля
    pub properties: String,
    /// Временная метка
    pub timestamp: u64,
}

/// Маркировка произведенной трубы.
#[derive(Serialize, Deserialize, Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::MarkPipe")]
pub struct MarkPipe {
    /// `PublicKey` трубы.
    pub pipe: PublicKey,
    /// Временная метка
    pub timestamp: u64,
}

/// Продажа трубы (передача владения трубой).
#[derive(Serialize, Deserialize, Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::ChangePipeOwner")]
pub struct ChangePipeOwner {
    /// `PublicKey` трубы.
    pub pipe: PublicKey,
    /// Новый владелец трубы.
    pub newOwner: PublicKey,
    /// Комментарий.
    pub comment: String,
    /// Временная метка
    pub timestamp: u64,
}

/// Создание организации.
#[derive(Serialize, Deserialize, Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::CreateCompany")]
pub struct CreateCompany {
    /// Является ли организация производителем.
    pub isProducer: bool,
    /// ИНН.
    pub inn: String,
    /// Название.
    pub name: String,
    /// Доп. поля.
    pub properties: String,
    /// Временная метка
    pub timestamp: u64,
}

impl CreatePipe {
    #[doc(hidden)]
    pub fn sign(
        pk: &PublicKey,
        number: u32,
        batch: u32,
        diameter: u32,
        thickness: u32,
        length: u32,
        properties: &str,
        timestamp: u64,
        sk: &SecretKey) -> Signed<RawTransaction> {

        Message::sign_transaction(
            Self { number, batch, diameter, thickness, length,
                properties: properties.to_owned(), timestamp },
            SERVICE_ID,
            *pk,
            sk,
        )
    }
}

/// Create company.
impl CreateCompany {
    #[doc(hidden)]
    pub fn sign(
        pk: &PublicKey,
        is_producer: bool,
        inn: &str,
        name: &str,
        properties: &str,
        timestamp: u64,
        sk: &SecretKey) -> Signed<RawTransaction> {
            
        Message::sign_transaction(
            Self { isProducer: is_producer, inn: inn.to_owned(), name: name.to_owned(),
                properties: properties.to_owned(), timestamp },
            SERVICE_ID,
            *pk,
            sk,
        )
    }
}

impl MarkPipe {
    #[doc(hidden)]
    pub fn sign(
        pk: &PublicKey,
        &pipe: &PublicKey,
        timestamp: u64,
        sk: &SecretKey) -> Signed<RawTransaction> {
            
        Message::sign_transaction(
            Self { pipe, timestamp },
            SERVICE_ID,
            *pk,
            sk,
        )
    }
}

impl ChangePipeOwner {
    #[doc(hidden)]
    pub fn sign(
        pk: &PublicKey,
        &pipe: &PublicKey,
        &new_owner: &PublicKey,
        comment: &str,
        timestamp: u64,
        sk: &SecretKey) -> Signed<RawTransaction> {
            
        Message::sign_transaction(
            Self { pipe, newOwner: new_owner.to_owned(), comment: comment.to_owned(), timestamp },
            SERVICE_ID,
            *pk,
            sk,
        )
    }
}

impl Transaction for CreatePipe {
    fn execute(&self, mut context: TransactionContext) -> ExecutionResult {
        let pub_key = &context.author();
        let hash = context.tx_hash();

        let mut schema = Schema::new(context.fork());

        let employee = schema.employee(pub_key);
        if employee.is_none() {
            Err(Error::EmployeeDoesNotExist)?
        }

        let can_create =  employee.unwrap().canCreate;
        if !can_create {
            Err(Error::EmployeeHasNotPermissions)?
        }
        
        let producer = schema.employee(pub_key).unwrap().company;
        let number = self.number;
        let batch = self.batch;
        let diameter = self.diameter;
        let thickness = self.thickness;
        let length = self.length;
        let properties = &self.properties;

        schema.create_pipe(&PublicKey::zero(), &producer, number, batch, diameter, thickness, length, properties, &hash);
        Ok(())
    }
}

impl Transaction for MarkPipe {
    fn execute(&self, mut context: TransactionContext) -> ExecutionResult {
        let pub_key = &context.author();
        let hash = context.tx_hash();

        let mut schema = Schema::new(context.fork());

        let employee = schema.employee(pub_key);
        if employee.is_none() {
            Err(Error::EmployeeDoesNotExist)?
        }

        let can_mark =  employee.unwrap().canMark;
        if !can_mark {
            Err(Error::EmployeeHasNotPermissions)?
        }

        let pipe = schema.pipe(&self.pipe);
        if pipe.is_none() {
            Err(Error::PipeDoesNotExist)?
        }

        let marked = pipe.unwrap().marked;
        if marked {
            Err(Error::PipeHasAlreadyMarked)?
        }

        schema.mark_pipe(schema.pipe(&self.pipe).unwrap(), &hash);
        Ok(())
    }
}

impl Transaction for ChangePipeOwner {
    fn execute(&self, mut context: TransactionContext) -> ExecutionResult {
        let pub_key = &context.author();
        let hash = context.tx_hash();

        let mut schema = Schema::new(context.fork());

        let employee = schema.employee(pub_key);
        if employee.is_none() {
            Err(Error::EmployeeDoesNotExist)?
        }

        let can_sold =  employee.unwrap().canSold;
        if !can_sold {
            Err(Error::EmployeeHasNotPermissions)?
        }

        let pipe = schema.pipe(&self.pipe);
        if pipe.is_none() {
            Err(Error::PipeDoesNotExist)?
        }

        let employee_company = schema.employee(pub_key).unwrap().company;
        let pipe_owner = pipe.clone().unwrap().producer;
        if employee_company != pipe_owner {
            Err(Error::OnlyOwnerCanSellProductions)?
        }

        let marked = pipe.unwrap().marked;
        if !marked {
            Err(Error::UnmarkedPipeCantBeSold)?
        }

        let new_owner = &self.newOwner;

        schema.change_owner_of_pipe(schema.pipe(&self.pipe).unwrap(), &new_owner, &hash);
        Ok(())
    }
}

impl Transaction for CreateCompany {
    fn execute(&self, mut context: TransactionContext) -> ExecutionResult {
        let pub_key = &context.author();
        let hash = context.tx_hash();

        let mut schema = Schema::new(context.fork());

        let is_producer = self.isProducer;
        let inn = &self.inn;
        let name = &self.name;
        let properties = &self.properties;

        if schema.exist_company_with_inn(inn) {
            Err(Error::CompanyWithSameINNAlreadyExists)?
        }

        match schema.company(pub_key) {
            None => {
                schema.create_company(pub_key, is_producer, inn, name, properties, &hash);
                schema.create_employee(pub_key, pub_key, "admin", true, true, true, &hash);
                Ok(())
            },
            Some(pub_key) => {
                Err(Error::CompanyAlreadyExists)?
            }
        }
    }
}

/// Создание сотрудника.
#[derive(Serialize, Deserialize, Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::CreateEmployee")]
pub struct CreateEmployee {
    /// `PublicKey` сотрудника.
    pub key: PublicKey,
    /// ФИО.
    pub name: String,
    /// Может ли создавать продукт.
    pub canCreate: bool,
    /// Может ли маркировать продукт.
    pub canMark: bool,
    /// Может ли продавать продукт.
    pub canSold: bool,
    /// Временная метка
    pub timestamp: u64,
}


impl CreateEmployee {
    #[doc(hidden)]
    pub fn sign(
        pk: &PublicKey,
        &key: &PublicKey,
        name: &str,
        canCreate: bool,
        canMark: bool,
        canSold: bool,
        timestamp: u64,
        sk: &SecretKey) -> Signed<RawTransaction> {
            
        Message::sign_transaction(
            Self { key, name: name.to_owned(), canCreate, canMark, canSold, timestamp },
            SERVICE_ID,
            *pk,
            sk,
        )
    }
}

impl Transaction for CreateEmployee {
    fn execute(&self, context: TransactionContext) -> ExecutionResult {
        let company = &context.author();
        let hash = context.tx_hash();

        let mut schema = Schema::new(context.fork());

        let pub_key = &self.key;
        let name = &self.name;
        let can_create = self.canCreate;
        let can_mark = self.canMark;
        let can_sold = self.canSold;

        match schema.employee(pub_key) {
            None => {
                schema.create_employee(pub_key, company, name, can_create, can_mark, can_sold, &hash);
                Ok(())
            },
            Some(pub_key) => {
                Err(Error::EmployeeAlreadyExists)?
            }
        }
    }
}