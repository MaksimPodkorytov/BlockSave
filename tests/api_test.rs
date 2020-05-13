#[macro_use]
extern crate serde_json;

use exonum::{
    api::node::public::explorer::{TransactionQuery, TransactionResponse},
    crypto::{self, Hash, PublicKey, SecretKey},
    messages::{self, RawTransaction, Signed},
};
use exonum_testkit::{ApiKind, TestKit, TestKitApi, TestKitBuilder};

// Import data types used in tests from the crate where the service is defined.
use pipes_marking::{
    api::{EmptyStruct, PipeQuery, CompanyQuery},
    company::Company,
    employee::Employee,
    pipe::Pipe,
    transactions::{ CreateCompany, CreateEmployee, CreatePipe, MarkPipe, ChangePipeOwner },
    Service,
};

/// create company test
#[test]
fn test_create_company() {
    let (mut testkit, api) = create_testkit();
    let (pk, sk) = crypto::gen_keypair();
    // Create and send a transaction via API
    let tx = api.create_company(&pk, &sk, true, "5649465", "test_name", "", 65498465);
    testkit.create_block();
    api.assert_tx_status(tx.hash(), &json!({ "type": "success" }));

    // Check that the user indeed is persisted by the service.
    let company = api.get_company(pk).unwrap();
    assert_eq!(company.key, pk);
    assert_eq!(company.name, "test_name");
    assert_eq!(company.inn, "5649465");
    assert_eq!(company.isProducer, true);
}

/// create employee test
#[test]
fn test_create_employee() {
    let (mut testkit, api) = create_testkit();
    let (company_pk, seckey_company) = crypto::gen_keypair();
    // Create and send a transaction via API
    let tx = api.create_company(&company_pk, &seckey_company, true, "5649465", "test_name", "", 65498465);
    testkit.create_block();
    api.assert_tx_status(tx.hash(), &json!({ "type": "success" }));
    let (employee_pk, _) = crypto::gen_keypair();
    // Create and send a transaction via API
    let (tx, _) = api.create_employee(company_pk, seckey_company, &employee_pk, "Test Employee", true, true, true, 65498456);
    testkit.create_block();
    api.assert_tx_status(tx.hash(), &json!({ "type": "success" }));

    // Check that the user indeed is persisted by the service.
    let p = api.get_company(company_pk).unwrap();
    assert_eq!(p.key, company_pk);
    assert_eq!(p.name, "test_name");
}

/// product cycle test
#[test]
fn test_product_cycle() {
    let (mut testkit, api) = create_testkit();
    let (company_pk, seckey_company) = crypto::gen_keypair();
    // Create and send a transaction via API
    let tx = api.create_company(&company_pk, &seckey_company, true, "5649465", "test_name", "", 65498465);
    testkit.create_block();
    api.assert_tx_status(tx.hash(), &json!({ "type": "success" }));
    let (employee_pk, seckey_employee) = crypto::gen_keypair();
    // Create and send a transaction via API
    let (tx, _) = api.create_employee(company_pk, seckey_company, &employee_pk, "Test Employee", true, true, true, 65498456);
    testkit.create_block();
    api.assert_tx_status(tx.hash(), &json!({ "type": "success" }));

    let (tx, _) = api.create_pipe(employee_pk, seckey_employee, 1, 2, 3, 4, 5, "", 546952);
    testkit.create_block();
    api.assert_tx_status(tx.hash(), &json!({ "type": "success" }));

    // Check that the user indeed is persisted by the service.
    /*let p = api.get_pipe(company_pk).unwrap();
    assert_eq!(p.key, company_pk);
    assert_eq!(p.name, "test_name");*/
}

/// Wrapper for the cryptocurrency service API allowing to easily use it
/// (compared to `TestKitApi` calls).
struct ParticipantsApi {
    pub inner: TestKitApi,
}

impl ParticipantsApi {
    /// comment
    fn create_company(
        &self,
        pk: &PublicKey,
        secret_key: &SecretKey,
        is_producer: bool,
        inn: &str,
        name: &str,
        properties: &str,
        timestamp: u64,
    ) -> Signed<RawTransaction> {
        //let (pubkey, key) = crypto::gen_keypair();
        // Create a pre-signed transaction
        let tx = CreateCompany::sign(&pk, is_producer, inn, name, properties, timestamp, &secret_key);

        let data = messages::to_hex_string(&tx);
        let tx_info: TransactionResponse = self
            .inner
            .public(ApiKind::Explorer)
            .query(&json!({ "tx_body": data }))
            .post("v1/transactions")
            .unwrap();
        assert_eq!(tx_info.tx_hash, tx.hash());
        tx
    }

    /// comment
    fn create_employee(
        &self,
        pubkey_company: PublicKey,
        seckey_company: SecretKey,
        key: &PublicKey,
        name: &str,
        can_create: bool,
        can_mark: bool,
        can_sold: bool,
        timestamp: u64,
    ) -> (Signed<RawTransaction>, SecretKey) {
        // Create a pre-signed transaction
        let tx = CreateEmployee::sign(&pubkey_company, key, name, can_create, can_mark, can_sold, timestamp, &seckey_company);

        let data = messages::to_hex_string(&tx);
        let tx_info: TransactionResponse = self
            .inner
            .public(ApiKind::Explorer)
            .query(&json!({ "tx_body": data }))
            .post("v1/transactions")
            .unwrap();
        assert_eq!(tx_info.tx_hash, tx.hash());
        (tx, seckey_company)
    }

    /// comment
    fn create_pipe(
        &self,
        pubkey_employee: PublicKey,
        seckey_employee: SecretKey,
        number: u32,
        batch: u32,
        diameter: u32,
        thickness: u32,
        length: u32,
        properties: &str,
        timestamp: u64,
    ) -> (Signed<RawTransaction>, SecretKey) {
        // Create a pre-signed transaction
        let tx = CreatePipe::sign(&pubkey_employee, number, batch, diameter, thickness, length, properties, timestamp, &seckey_employee);

        let data = messages::to_hex_string(&tx);
        let tx_info: TransactionResponse = self
            .inner
            .public(ApiKind::Explorer)
            .query(&json!({ "tx_body": data }))
            .post("v1/transactions")
            .unwrap();
        assert_eq!(tx_info.tx_hash, tx.hash());
        (tx, seckey_employee)
    }

    fn get_company(&self, pub_key: PublicKey) -> Option<Company> {
        let company_info = self
            .inner
            .public(ApiKind::Service("pipe_marking"))
            .query(&CompanyQuery { key: pub_key.to_owned() })
            .get::<Company>("v1/company/info")
            .unwrap();

        println!("{:?}", company_info);
        /*let (_, company) = to_participant
            .all_entries()
            .find(|(&key, _)| key == pub_key)?;*/
            Some(company_info)
    }

    /// Asserts that the transaction with the given hash has a specified status.
    fn assert_tx_status(&self, tx_hash: Hash, expected_status: &serde_json::Value) {
        let info: serde_json::Value = self
            .inner
            .public(ApiKind::Explorer)
            .query(&TransactionQuery::new(tx_hash))
            .get("v1/transactions")
            .unwrap();

        if let serde_json::Value::Object(mut info) = info {
            let tx_status = info.remove("status").unwrap();
            assert_eq!(tx_status, *expected_status);
        } else {
            panic!("Invalid transaction info format, object expected");
        }
    }
}

/// Creates a testkit together with the API wrapper defined above.
fn create_testkit() -> (TestKit, ParticipantsApi) {
    let testkit = TestKitBuilder::validator().with_service(Service).create();
    let api = ParticipantsApi {
        inner: testkit.api(),
    };
    (testkit, api)
}
