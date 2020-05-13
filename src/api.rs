use exonum::{
    api::{self, ServiceApiBuilder, ServiceApiState},
    blockchain::{self, BlockProof, TransactionMessage},
    crypto::{Hash, PublicKey},
    explorer::BlockchainExplorer,
    helpers::Height,
};

use exonum_merkledb::{ListProof, MapProof};

use crate::pipe::Pipe;
use crate::company::Company;
use crate::employee::Employee;
use super::{schema::Schema, SERVICE_ID};

/// Empty structure.
#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq)]
pub struct EmptyStruct {}

/// CompanyQuery structure.
#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq)]
pub struct CompanyQuery {
    /// Ключ производителя.
    pub key: PublicKey,
}

/// PipeQuery structure.
#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq)]
pub struct PipeQuery {
    /// Ключ производителя.
    pub producer: PublicKey,
    /// Фильтр по флагу marked.
    pub marked: bool
}

/// Public service API description.
#[derive(Debug, Clone, Copy)]
pub struct PublicApi;

impl PublicApi {
    /// Gets all companies.
    fn get_companies(state: &ServiceApiState, _: EmptyStruct) -> api::Result<Vec<Company>> {
        let snapshot = state.snapshot();
        let schema = Schema::new(&snapshot);
        let companies = schema.companies().iter()
            .map(|x| x.1)
            .collect();

        Ok(companies)
    }

    /// Get company.
    fn get_company_info(state: &ServiceApiState, query: CompanyQuery) -> api::Result<Company> {
        let snapshot = state.snapshot();
        let schema = Schema::new(&snapshot);
        let company = schema.company(&query.key);

        Ok(company.unwrap())
    }

    fn get_company_employee(state: &ServiceApiState, query: CompanyQuery) -> api::Result<Vec<Employee>> {
        let snapshot = state.snapshot();
        let schema = Schema::new(&snapshot);
        let employees = schema.employees().iter()
            .map(|x| x.1)
            .filter(|x| x.company == query.key)
            .collect();

        Ok(employees)
    }

    /// Gets pipes info.
    fn get_pipes(state: &ServiceApiState, query: CompanyQuery) -> api::Result<Vec<Pipe>> {
        let snapshot = state.snapshot();
        let schema = Schema::new(&snapshot);
        let pipes = schema.pipes().iter()
            .map(|x| x.1)
            .filter(|x| x.producer == query.key)
            .collect();

        Ok(pipes)
    }

    /// Get pipe tx history.
    fn get_pipe_info(state: &ServiceApiState, query: CompanyQuery) -> api::Result<Vec<TransactionMessage>> {
        let snapshot = state.snapshot();
        let schema = Schema::new(&snapshot);
        let pipe = schema.pipe(&query.key);

        let explorer = BlockchainExplorer::new(state.blockchain());

        let pipe_history = pipe.map(|_| {
            let history = schema.pipe_history(&query.key);
            let proof = history.get_range_proof(0..history.len());

            let transactions = history
                .iter()
                .map(|record| explorer.transaction_without_proof(&record).unwrap())
                .collect::<Vec<_>>();

            transactions
        });

        Ok(pipe_history.unwrap())
    }

    /// Wires the above endpoint to public scope of the given `ServiceApiBuilder`.
    pub fn wire(builder: &mut ServiceApiBuilder) {
        builder
            .public_scope()
            .endpoint("v1/company/get-all", Self::get_companies)
            .endpoint("v1/company/info", Self::get_company_info)
            .endpoint("v1/employee/get-by-company", Self::get_company_employee)
            .endpoint("v1/pipe/get-by-company", Self::get_pipes)
            .endpoint("v1/pipe/info", Self::get_pipe_info);
    }
}