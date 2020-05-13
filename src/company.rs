use exonum::crypto::{Hash, PublicKey};
use super::proto;

/// Stores information about a company
#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Company", serde_pb_convert)]
pub struct Company {
    /// `PublicKey` организации.
    pub key: PublicKey,
    /// Является ли организация производителем.
    pub isProducer: bool,
    /// ИНН.
    pub inn: String,
    /// Название.
    pub name: String,
    /// Доп. поля.
    pub properties: String,
    /// Length of the transactions history.
    pub history_len: u64,
    /// `Hash` of the transactions history.
    pub history_hash: Hash,
}

impl Company {
    /// Create new company
    pub fn new(
        &key: &PublicKey,
        isProducer: bool,
        inn: &str,
        name: &str,
        properties: &str,
        history_len: u64,
        &history_hash: &Hash,
    ) -> Self {
        Self {
            key,
            isProducer,
            inn: inn.to_owned(),
            name: name.to_owned(),
            properties: properties.to_owned(),
            history_len, history_hash
        }
    }
}