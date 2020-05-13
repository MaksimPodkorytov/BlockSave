import * as Exonum from 'exonum-client'
import bigInt from 'big-integer'
import axios from 'axios'
import * as proto from '../../proto/stubs.js'

const TRANSACTION_URL = '/api/explorer/v1/transactions'
const INFO_URL = 'api/services/pipe_marking/v1/'
const PROTOCOL_VERSION = 0
const SERVICE_ID = 10

const CreatePipe_TX_ID = 0;
const MarkPipe_TX_ID = 1;
const ChangePipeOwner_TX_ID = 2;
const CreateCompany_TX_ID = 3;
const CreateEmployee_TX_ID = 4;

const ATTEMPTS = 10
const ATTEMPT_TIMEOUT = 500


function CreateCompanyTransaction(publicKey) {
    return Exonum.newTransaction({
        author: publicKey,
        service_id: SERVICE_ID,
        message_id: CreateCompany_TX_ID,
        schema: proto.pipes_marking.CreateCompany
    })
}

function CreateEmployeeTransaction(publicKey) {
    return Exonum.newTransaction({
        author: publicKey,
        service_id: SERVICE_ID,
        message_id: CreateEmployee_TX_ID,
        schema: proto.pipes_marking.CreateEmployee
    })
}

function CreateProductTransaction(publicKey) {
    return Exonum.newTransaction({
        author: publicKey,
        service_id: SERVICE_ID,
        message_id: CreatePipe_TX_ID,
        schema: proto.pipes_marking.CreatePipe
    })
}

module.exports = {
    install(Vue) {
        Vue.prototype.$blockchain = {
            CreateCompany(name, inn, isProducer, timestamp, properties) {
                let keyPair = Exonum.keyPair();

                // Describe transaction
                const transaction = new CreateCompanyTransaction(keyPair.publicKey)

                // Transaction data
                const data = {
                    name: name,
                    inn: inn,
                    isProducer: isProducer,
                    timestamp: timestamp,
                    properties: properties
                }

                // Send transaction into blockchain
                return transaction.send(TRANSACTION_URL, data, keyPair.secretKey)
                    .then(() => { return keyPair; });
            },

            /// Создаем пользователя
            CreateEmployee(keyPair, name, canCreate, canMark, canSold, timestamp) {
                let newkeyPair = Exonum.keyPair();

                // Describe transaction
                const transaction = new CreateEmployeeTransaction(keyPair.publicKey)

                // Transaction data
                const data = {
                    key: { data: Exonum.hexadecimalToUint8Array(newkeyPair.publicKey) },
                    name: name,
                    canCreate: canCreate,
                    canMark: canMark,
                    canSold: canSold,
                    timestamp: timestamp,
                }

                // Send transaction into blockchain
                return transaction.send(TRANSACTION_URL, data, keyPair.secretKey)
                    .then(() => { return newkeyPair; });
            },

            CreateProduct(keyPair, number, batch, diameter, thickness, length, properties, timestamp) {

                let newkeyPair = Exonum.keyPair();

                // Describe transaction
                const transaction = new CreateProductTransaction(keyPair.publicKey)

                // Transaction data
                const data = {
                    key: newkeyPair.publicKey,
                    number: number,
                    batch: batch,
                    diameter: diameter,
                    thickness: thickness,
                    length: length,
                    properties: properties,
                    timestamp: timestamp,
                }

                // Send transaction into blockchain
                return transaction.send(TRANSACTION_URL, data, keyPair.secretKey)
                    .then(() => { return keyPair; });
            },

            getTransaction(hash) {
                return axios.get(`/api/explorer/v1/transactions?hash=${hash}`).then(response => response.data)
            },

            getCompanies: () => {
                return axios.get(INFO_URL + '/company/get-all').then(response => response.data)
            },

            getUser: publicKey => {
                return axios.get(`/api/services/cryptoowls/v1/user?pub_key=${publicKey}`).then(response => {
                    if (response.data === 'User not found') {
                        throw new Error(response.data)
                    }
                    return response.data
                })
            },

            getBlocks: latest => {
                let suffix = !isNaN(latest) ? '&latest=' + latest : ''

                return axios.get(`/api/explorer/v1/blocks?count=10${suffix}`).then(response => response.data.blocks)
            },

            getBlock: height => {
                return axios.get(`/api/explorer/v1/block?height=${height}`).then(response => response.data)
            },

            get_company_employee: publicKey => {
                return axios.get(`/api/services/pipe_marking/v1/employee/get-by-company?key=${publicKey}`).then(response => response.data)
            },

            get_organization: publicKey => {
                return axios.get(`/api/services/pipe_marking/v1/company/info?key=${publicKey}`).then(response => {
                    if (response.data === 'User not found') {
                        throw new Error(response.data)
                    }
                    return response.data
                })
            },

            get_products: publicKey => {
                return axios.get(`/api/services/pipe_marking/v1/pipe/get-by-company?key=${publicKey}`).then(response => response.data)

            }
        }
    }
}