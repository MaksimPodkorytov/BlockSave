use exonum::crypto::{Hash, PublicKey};
use super::proto;

/// Stores information about a pipe
#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Pipe", serde_pb_convert)]
pub struct Pipe {
    /// `PublicKey` трубы.
    pub key: PublicKey,
    /// Ключ организации-производителя трубы.
    pub producer: PublicKey,
    /// Промаркирована ли труба (NFC метка).
    pub marked: bool,
    /// Номер трубы.
    pub number: u32,
    /// Номер партии.
    pub batch: u32,
    /// Диаметр.
    pub diameter: u32,
    /// Толщина стенки.
    pub thickness: u32,
    /// Длина.
    pub length: u32,
    /// Доп. поля.
    pub properties: String,
    /// Length of the transactions history.
    pub history_len: u64,
    /// `Hash` of the transactions history.
    pub history_hash: Hash,
}

impl Pipe {
    /// Create new pipe
    pub fn new(
        &key: &PublicKey,
        &producer: &PublicKey,
        marked: bool,
        number: u32,
        batch: u32,
        diameter: u32,
        thickness: u32,
        length: u32,
        properties: &str,
        history_len: u64,
        &history_hash: &Hash,
    ) -> Self {
        Self {
            key,
            producer,
            marked,
            number,
            batch,
            diameter,
            thickness,
            length,
            properties: properties.to_owned(),
            history_len, history_hash
        }
    }

    /// Mark pipe
    pub fn mark(self, &history_hash: &Hash) -> Self {
        Self::new (
            &self.key,
            &self.producer,
            true,
            self.number,
            self.batch,
            self.diameter,
            self.thickness,
            self.length,
            &self.properties,
            self.history_len + 1,
            &history_hash
        )
    }

    /// Sell pipe
    pub fn sell(self, newOwner: &PublicKey, &history_hash: &Hash) -> Self {
        Self::new (
            &self.key,
            newOwner,
            self.marked,
            self.number,
            self.batch,
            self.diameter,
            self.thickness,
            self.length,
            &self.properties,
            self.history_len + 1,
            &history_hash
        )
    }
}