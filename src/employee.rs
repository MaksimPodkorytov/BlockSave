use exonum::crypto::{Hash, PublicKey};
use super::proto;

/// Stores information about a employee
#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Employee", serde_pb_convert)]
pub struct Employee {
    /// `PublicKey` сотрудника.
    pub key: PublicKey,
    /// Ключ организации, в которой работает сотрудник.
    pub company: PublicKey,
    /// ФИО.
    pub name: String,
    /// Может ли создавать продукт.
    pub canCreate: bool,
    /// Может ли маркировать продукт.
    pub canMark: bool,
    /// Может ли продавать продукт.
    pub canSold: bool,
    /// Активен ли аккаунт.
    pub isActive: bool,
    /// Length of the transactions history.
    pub history_len: u64,
    /// `Hash` of the transactions history.
    pub history_hash: Hash,
}

impl Employee {
    /// Create new employee
    pub fn new(
        &key: &PublicKey,
        &company: &PublicKey,
        name: &str,
        canCreate: bool,
        canMark: bool,
        canSold: bool,
        isActive: bool,
        history_len: u64,
        &history_hash: &Hash,
    ) -> Self {
        Self {
            key,
            company,
            name: name.to_owned(),
            canCreate,
            canMark,
            canSold,
            isActive,
            history_len, history_hash
        }
    }
}