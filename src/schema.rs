//! Pipe marking database schema.

use exonum_merkledb::{IndexAccess, ObjectHash, ProofListIndex, ProofMapIndex};

use exonum::crypto::{Hash, PublicKey};

use crate::pipe::Pipe;
use crate::employee::Employee;
use crate::company::Company;

/// Pipes table name
pub const PIPES_TABLE: &str = "pipe_marking.pipe";
/// Pipes history table name
pub const PIPES_HISTORY_TABLE: &str = "pipe_marking.pipe.history";
/// Employees table name
pub const EMPLOYEES_TABLE: &str = "pipe_marking.employee";
/// Employees history table name
pub const EMPLOYEES_HISTORY_TABLE: &str = "pipe_marking.employee.history";
/// Companies table name
pub const COMPANIES_TABLE: &str = "pipe_marking.companies";
/// Companies history table name
pub const COMPANIES_HISTORY_TABLE: &str = "pipe_marking.companies.history";

/// Database schema for the cryptocurrency.
#[derive(Debug)]
pub struct Schema<T> {
    view: T,
}

impl<T> AsMut<T> for Schema<T> {
    fn as_mut(&mut self) -> &mut T {
        &mut self.view
    }
}

impl<T> Schema<T>
where
    T: IndexAccess,
{
    /// Creates a new schema from the database view.
    pub fn new(view: T) -> Self {
        Schema { view }
    }

    /// Returns `ProofMapIndex` with pipes.
    pub fn pipes(&self) -> ProofMapIndex<T, PublicKey, Pipe> {
        ProofMapIndex::new(PIPES_TABLE, self.view.clone())
    }

    /// Returns history of the pipe with the given public key.
    pub fn pipe_history(&self, public_key: &PublicKey) -> ProofListIndex<T, Hash> {
        ProofListIndex::new_in_family(PIPES_HISTORY_TABLE, public_key, self.view.clone())
    }

    /// Returns pipe for the given public key.
    pub fn pipe(&self, pub_key: &PublicKey) -> Option<Pipe> {
        self.pipes().get(pub_key)
    }

    /// Returns `ProofMapIndex` with companies.
    pub fn companies(&self) -> ProofMapIndex<T, PublicKey, Company> {
        ProofMapIndex::new(COMPANIES_TABLE, self.view.clone())
    }

    /// Returns history of the company with the given public key.
    pub fn company_history(&self, public_key: &PublicKey) -> ProofListIndex<T, Hash> {
        ProofListIndex::new_in_family(COMPANIES_HISTORY_TABLE, public_key, self.view.clone())
    }

    /// Returns company for the given public key.
    pub fn company(&self, pub_key: &PublicKey) -> Option<Company> {
        self.companies().get(pub_key)
    }

    /// Returns true if inn company existed.
    pub fn exist_company_with_inn(&self, inn: &str) -> bool {
        let ds = self.companies();
        let result = ds.iter()
            .map(|x| x.1)
            .filter(|x| x.inn == inn)
            .collect::<Vec<_>>();

        let founded = result.first();
        
        founded.is_some()
    }

    /// Returns `ProofMapIndex` with employees.
    pub fn employees(&self) -> ProofMapIndex<T, PublicKey, Employee> {
        ProofMapIndex::new(EMPLOYEES_TABLE, self.view.clone())
    }

    /// Returns history of the employee with the given public key.
    pub fn employee_history(&self, public_key: &PublicKey) -> ProofListIndex<T, Hash> {
        ProofListIndex::new_in_family(EMPLOYEES_HISTORY_TABLE, public_key, self.view.clone())
    }

    /// Returns employee for the given public key.
    pub fn employee(&self, pub_key: &PublicKey) -> Option<Employee> {
        self.employees().get(pub_key)
    }

    /// Returns the state hash of service.
    pub fn state_hash(&self) -> Vec<Hash> {
        vec![self.pipes().object_hash()]
    }

    /// --------------------------------------------------------------------------

    /// Create new pipe and append first record to its history.
    pub fn create_pipe(
        &mut self,
        key: &PublicKey,
        producer: &PublicKey,
        number: u32,
        batch: u32,
        diameter: u32,
        thickness: u32,
        length: u32,
        properties: &str,
        transaction: &Hash) {
        let created_pipe = {
            let mut history = self.pipe_history(key);
            history.push(*transaction);
            let history_hash = history.object_hash();

            Pipe::new( key, producer, false, number, batch, diameter,
                thickness, length, properties,
                history.len(), &history_hash)
        };
        self.pipes().put(key, created_pipe);
    }

    /// Mark pipe.
    pub fn mark_pipe(
        &mut self,
        pipe: Pipe,
        transaction: &Hash) {
        let pipe = {
            let mut history = self.pipe_history(&pipe.key);
            history.push(*transaction);
            let history_hash = history.object_hash();

            pipe.mark(&history_hash)
        };
        self.pipes().put(&pipe.key, pipe.clone());
    }

    /// Sell pipe.
    pub fn change_owner_of_pipe(
        &mut self,
        pipe: Pipe,
        new_owner: &PublicKey,
        transaction: &Hash) {
        let pipe = {
            let mut history = self.pipe_history(&pipe.key);
            history.push(*transaction);
            let history_hash = history.object_hash();

            pipe.sell(new_owner, &history_hash)
        };
        self.pipes().put(&pipe.key, pipe.clone());
    }

    /// Create company.
    pub fn create_company(
        &mut self,
        key: &PublicKey,
        is_producer: bool,
        inn: &str,
        name: &str,
        properties: &str,
        transaction: &Hash) {
        let created_company = {
            let mut history = self.company_history(key);
            history.push(*transaction);
            let history_hash = history.object_hash();

            Company::new( key, is_producer, inn, name, properties,
                history.len(), &history_hash)
        };
        self.companies().put(key, created_company);
    }

    /// Create employee.
    pub fn create_employee(
        &mut self,
        key: &PublicKey,
        company: &PublicKey,
        name: &str,
        can_create: bool,
        can_mark: bool,
        can_sold: bool,
        transaction: &Hash) {
        let created_employee = {
            let mut history = self.employee_history(key);
            history.push(*transaction);
            let history_hash = history.object_hash();

            Employee::new( key, company, name, can_create, can_mark, can_sold, true,
                history.len(), &history_hash)
        };
        self.employees().put(key, created_employee);
    }
}
    // TODO:
    // get_companies()
    // get_company_pipes(producer: &PublicKey, marked: bool)
