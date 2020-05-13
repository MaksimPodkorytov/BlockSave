/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.exonum = (function() {
    
        /**
         * Namespace exonum.
         * @exports exonum
         * @namespace
         */
        var exonum = {};
    
        exonum.consensus = (function() {
    
            /**
             * Namespace consensus.
             * @memberof exonum
             * @namespace
             */
            var consensus = {};
    
            consensus.Connect = (function() {
    
                /**
                 * Properties of a Connect.
                 * @memberof exonum.consensus
                 * @interface IConnect
                 * @property {string|null} [pub_addr] Connect pub_addr
                 * @property {google.protobuf.ITimestamp|null} [time] Connect time
                 * @property {string|null} [user_agent] Connect user_agent
                 */
    
                /**
                 * Constructs a new Connect.
                 * @memberof exonum.consensus
                 * @classdesc Represents a Connect.
                 * @implements IConnect
                 * @constructor
                 * @param {exonum.consensus.IConnect=} [properties] Properties to set
                 */
                function Connect(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Connect pub_addr.
                 * @member {string} pub_addr
                 * @memberof exonum.consensus.Connect
                 * @instance
                 */
                Connect.prototype.pub_addr = "";
    
                /**
                 * Connect time.
                 * @member {google.protobuf.ITimestamp|null|undefined} time
                 * @memberof exonum.consensus.Connect
                 * @instance
                 */
                Connect.prototype.time = null;
    
                /**
                 * Connect user_agent.
                 * @member {string} user_agent
                 * @memberof exonum.consensus.Connect
                 * @instance
                 */
                Connect.prototype.user_agent = "";
    
                /**
                 * Creates a new Connect instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {exonum.consensus.IConnect=} [properties] Properties to set
                 * @returns {exonum.consensus.Connect} Connect instance
                 */
                Connect.create = function create(properties) {
                    return new Connect(properties);
                };
    
                /**
                 * Encodes the specified Connect message. Does not implicitly {@link exonum.consensus.Connect.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {exonum.consensus.IConnect} message Connect message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Connect.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pub_addr != null && message.hasOwnProperty("pub_addr"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.pub_addr);
                    if (message.time != null && message.hasOwnProperty("time"))
                        $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.user_agent != null && message.hasOwnProperty("user_agent"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.user_agent);
                    return writer;
                };
    
                /**
                 * Encodes the specified Connect message, length delimited. Does not implicitly {@link exonum.consensus.Connect.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {exonum.consensus.IConnect} message Connect message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Connect.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Connect message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.Connect} Connect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Connect.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.Connect();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.pub_addr = reader.string();
                            break;
                        case 2:
                            message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.user_agent = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Connect message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.Connect} Connect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Connect.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Connect message.
                 * @function verify
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Connect.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.pub_addr != null && message.hasOwnProperty("pub_addr"))
                        if (!$util.isString(message.pub_addr))
                            return "pub_addr: string expected";
                    if (message.time != null && message.hasOwnProperty("time")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.time);
                        if (error)
                            return "time." + error;
                    }
                    if (message.user_agent != null && message.hasOwnProperty("user_agent"))
                        if (!$util.isString(message.user_agent))
                            return "user_agent: string expected";
                    return null;
                };
    
                /**
                 * Creates a Connect message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.Connect} Connect
                 */
                Connect.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.Connect)
                        return object;
                    var message = new $root.exonum.consensus.Connect();
                    if (object.pub_addr != null)
                        message.pub_addr = String(object.pub_addr);
                    if (object.time != null) {
                        if (typeof object.time !== "object")
                            throw TypeError(".exonum.consensus.Connect.time: object expected");
                        message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
                    }
                    if (object.user_agent != null)
                        message.user_agent = String(object.user_agent);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Connect message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.Connect
                 * @static
                 * @param {exonum.consensus.Connect} message Connect
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Connect.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.pub_addr = "";
                        object.time = null;
                        object.user_agent = "";
                    }
                    if (message.pub_addr != null && message.hasOwnProperty("pub_addr"))
                        object.pub_addr = message.pub_addr;
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
                    if (message.user_agent != null && message.hasOwnProperty("user_agent"))
                        object.user_agent = message.user_agent;
                    return object;
                };
    
                /**
                 * Converts this Connect to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.Connect
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Connect.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Connect;
            })();
    
            consensus.Status = (function() {
    
                /**
                 * Properties of a Status.
                 * @memberof exonum.consensus
                 * @interface IStatus
                 * @property {number|Long|null} [height] Status height
                 * @property {exonum.IHash|null} [last_hash] Status last_hash
                 * @property {number|Long|null} [pool_size] Status pool_size
                 */
    
                /**
                 * Constructs a new Status.
                 * @memberof exonum.consensus
                 * @classdesc Represents a Status.
                 * @implements IStatus
                 * @constructor
                 * @param {exonum.consensus.IStatus=} [properties] Properties to set
                 */
                function Status(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Status height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.Status
                 * @instance
                 */
                Status.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Status last_hash.
                 * @member {exonum.IHash|null|undefined} last_hash
                 * @memberof exonum.consensus.Status
                 * @instance
                 */
                Status.prototype.last_hash = null;
    
                /**
                 * Status pool_size.
                 * @member {number|Long} pool_size
                 * @memberof exonum.consensus.Status
                 * @instance
                 */
                Status.prototype.pool_size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new Status instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {exonum.consensus.IStatus=} [properties] Properties to set
                 * @returns {exonum.consensus.Status} Status instance
                 */
                Status.create = function create(properties) {
                    return new Status(properties);
                };
    
                /**
                 * Encodes the specified Status message. Does not implicitly {@link exonum.consensus.Status.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {exonum.consensus.IStatus} message Status message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Status.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.height);
                    if (message.last_hash != null && message.hasOwnProperty("last_hash"))
                        $root.exonum.Hash.encode(message.last_hash, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.pool_size != null && message.hasOwnProperty("pool_size"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pool_size);
                    return writer;
                };
    
                /**
                 * Encodes the specified Status message, length delimited. Does not implicitly {@link exonum.consensus.Status.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {exonum.consensus.IStatus} message Status message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Status.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Status message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.Status} Status
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Status.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.Status();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.height = reader.uint64();
                            break;
                        case 2:
                            message.last_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.pool_size = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Status message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.Status} Status
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Status.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Status message.
                 * @function verify
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Status.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    if (message.last_hash != null && message.hasOwnProperty("last_hash")) {
                        var error = $root.exonum.Hash.verify(message.last_hash);
                        if (error)
                            return "last_hash." + error;
                    }
                    if (message.pool_size != null && message.hasOwnProperty("pool_size"))
                        if (!$util.isInteger(message.pool_size) && !(message.pool_size && $util.isInteger(message.pool_size.low) && $util.isInteger(message.pool_size.high)))
                            return "pool_size: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a Status message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.Status} Status
                 */
                Status.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.Status)
                        return object;
                    var message = new $root.exonum.consensus.Status();
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    if (object.last_hash != null) {
                        if (typeof object.last_hash !== "object")
                            throw TypeError(".exonum.consensus.Status.last_hash: object expected");
                        message.last_hash = $root.exonum.Hash.fromObject(object.last_hash);
                    }
                    if (object.pool_size != null)
                        if ($util.Long)
                            (message.pool_size = $util.Long.fromValue(object.pool_size)).unsigned = true;
                        else if (typeof object.pool_size === "string")
                            message.pool_size = parseInt(object.pool_size, 10);
                        else if (typeof object.pool_size === "number")
                            message.pool_size = object.pool_size;
                        else if (typeof object.pool_size === "object")
                            message.pool_size = new $util.LongBits(object.pool_size.low >>> 0, object.pool_size.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Status message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.Status
                 * @static
                 * @param {exonum.consensus.Status} message Status
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Status.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                        object.last_hash = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.pool_size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.pool_size = options.longs === String ? "0" : 0;
                    }
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    if (message.last_hash != null && message.hasOwnProperty("last_hash"))
                        object.last_hash = $root.exonum.Hash.toObject(message.last_hash, options);
                    if (message.pool_size != null && message.hasOwnProperty("pool_size"))
                        if (typeof message.pool_size === "number")
                            object.pool_size = options.longs === String ? String(message.pool_size) : message.pool_size;
                        else
                            object.pool_size = options.longs === String ? $util.Long.prototype.toString.call(message.pool_size) : options.longs === Number ? new $util.LongBits(message.pool_size.low >>> 0, message.pool_size.high >>> 0).toNumber(true) : message.pool_size;
                    return object;
                };
    
                /**
                 * Converts this Status to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.Status
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Status.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Status;
            })();
    
            consensus.Propose = (function() {
    
                /**
                 * Properties of a Propose.
                 * @memberof exonum.consensus
                 * @interface IPropose
                 * @property {number|null} [validator] Propose validator
                 * @property {number|Long|null} [height] Propose height
                 * @property {number|null} [round] Propose round
                 * @property {exonum.IHash|null} [prev_hash] Propose prev_hash
                 * @property {Array.<exonum.IHash>|null} [transactions] Propose transactions
                 */
    
                /**
                 * Constructs a new Propose.
                 * @memberof exonum.consensus
                 * @classdesc Represents a Propose.
                 * @implements IPropose
                 * @constructor
                 * @param {exonum.consensus.IPropose=} [properties] Properties to set
                 */
                function Propose(properties) {
                    this.transactions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Propose validator.
                 * @member {number} validator
                 * @memberof exonum.consensus.Propose
                 * @instance
                 */
                Propose.prototype.validator = 0;
    
                /**
                 * Propose height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.Propose
                 * @instance
                 */
                Propose.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Propose round.
                 * @member {number} round
                 * @memberof exonum.consensus.Propose
                 * @instance
                 */
                Propose.prototype.round = 0;
    
                /**
                 * Propose prev_hash.
                 * @member {exonum.IHash|null|undefined} prev_hash
                 * @memberof exonum.consensus.Propose
                 * @instance
                 */
                Propose.prototype.prev_hash = null;
    
                /**
                 * Propose transactions.
                 * @member {Array.<exonum.IHash>} transactions
                 * @memberof exonum.consensus.Propose
                 * @instance
                 */
                Propose.prototype.transactions = $util.emptyArray;
    
                /**
                 * Creates a new Propose instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {exonum.consensus.IPropose=} [properties] Properties to set
                 * @returns {exonum.consensus.Propose} Propose instance
                 */
                Propose.create = function create(properties) {
                    return new Propose(properties);
                };
    
                /**
                 * Encodes the specified Propose message. Does not implicitly {@link exonum.consensus.Propose.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {exonum.consensus.IPropose} message Propose message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Propose.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.validator);
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                    if (message.round != null && message.hasOwnProperty("round"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.round);
                    if (message.prev_hash != null && message.hasOwnProperty("prev_hash"))
                        $root.exonum.Hash.encode(message.prev_hash, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.transactions != null && message.transactions.length)
                        for (var i = 0; i < message.transactions.length; ++i)
                            $root.exonum.Hash.encode(message.transactions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Propose message, length delimited. Does not implicitly {@link exonum.consensus.Propose.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {exonum.consensus.IPropose} message Propose message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Propose.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Propose message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.Propose} Propose
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Propose.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.Propose();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.validator = reader.uint32();
                            break;
                        case 2:
                            message.height = reader.uint64();
                            break;
                        case 3:
                            message.round = reader.uint32();
                            break;
                        case 4:
                            message.prev_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.transactions && message.transactions.length))
                                message.transactions = [];
                            message.transactions.push($root.exonum.Hash.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Propose message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.Propose} Propose
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Propose.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Propose message.
                 * @function verify
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Propose.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        if (!$util.isInteger(message.validator))
                            return "validator: integer expected";
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    if (message.round != null && message.hasOwnProperty("round"))
                        if (!$util.isInteger(message.round))
                            return "round: integer expected";
                    if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
                        var error = $root.exonum.Hash.verify(message.prev_hash);
                        if (error)
                            return "prev_hash." + error;
                    }
                    if (message.transactions != null && message.hasOwnProperty("transactions")) {
                        if (!Array.isArray(message.transactions))
                            return "transactions: array expected";
                        for (var i = 0; i < message.transactions.length; ++i) {
                            var error = $root.exonum.Hash.verify(message.transactions[i]);
                            if (error)
                                return "transactions." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Propose message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.Propose} Propose
                 */
                Propose.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.Propose)
                        return object;
                    var message = new $root.exonum.consensus.Propose();
                    if (object.validator != null)
                        message.validator = object.validator >>> 0;
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    if (object.round != null)
                        message.round = object.round >>> 0;
                    if (object.prev_hash != null) {
                        if (typeof object.prev_hash !== "object")
                            throw TypeError(".exonum.consensus.Propose.prev_hash: object expected");
                        message.prev_hash = $root.exonum.Hash.fromObject(object.prev_hash);
                    }
                    if (object.transactions) {
                        if (!Array.isArray(object.transactions))
                            throw TypeError(".exonum.consensus.Propose.transactions: array expected");
                        message.transactions = [];
                        for (var i = 0; i < object.transactions.length; ++i) {
                            if (typeof object.transactions[i] !== "object")
                                throw TypeError(".exonum.consensus.Propose.transactions: object expected");
                            message.transactions[i] = $root.exonum.Hash.fromObject(object.transactions[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Propose message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.Propose
                 * @static
                 * @param {exonum.consensus.Propose} message Propose
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Propose.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.transactions = [];
                    if (options.defaults) {
                        object.validator = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                        object.round = 0;
                        object.prev_hash = null;
                    }
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        object.validator = message.validator;
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    if (message.round != null && message.hasOwnProperty("round"))
                        object.round = message.round;
                    if (message.prev_hash != null && message.hasOwnProperty("prev_hash"))
                        object.prev_hash = $root.exonum.Hash.toObject(message.prev_hash, options);
                    if (message.transactions && message.transactions.length) {
                        object.transactions = [];
                        for (var j = 0; j < message.transactions.length; ++j)
                            object.transactions[j] = $root.exonum.Hash.toObject(message.transactions[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Propose to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.Propose
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Propose.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Propose;
            })();
    
            consensus.Prevote = (function() {
    
                /**
                 * Properties of a Prevote.
                 * @memberof exonum.consensus
                 * @interface IPrevote
                 * @property {number|null} [validator] Prevote validator
                 * @property {number|Long|null} [height] Prevote height
                 * @property {number|null} [round] Prevote round
                 * @property {exonum.IHash|null} [propose_hash] Prevote propose_hash
                 * @property {number|null} [locked_round] Prevote locked_round
                 */
    
                /**
                 * Constructs a new Prevote.
                 * @memberof exonum.consensus
                 * @classdesc Represents a Prevote.
                 * @implements IPrevote
                 * @constructor
                 * @param {exonum.consensus.IPrevote=} [properties] Properties to set
                 */
                function Prevote(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Prevote validator.
                 * @member {number} validator
                 * @memberof exonum.consensus.Prevote
                 * @instance
                 */
                Prevote.prototype.validator = 0;
    
                /**
                 * Prevote height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.Prevote
                 * @instance
                 */
                Prevote.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Prevote round.
                 * @member {number} round
                 * @memberof exonum.consensus.Prevote
                 * @instance
                 */
                Prevote.prototype.round = 0;
    
                /**
                 * Prevote propose_hash.
                 * @member {exonum.IHash|null|undefined} propose_hash
                 * @memberof exonum.consensus.Prevote
                 * @instance
                 */
                Prevote.prototype.propose_hash = null;
    
                /**
                 * Prevote locked_round.
                 * @member {number} locked_round
                 * @memberof exonum.consensus.Prevote
                 * @instance
                 */
                Prevote.prototype.locked_round = 0;
    
                /**
                 * Creates a new Prevote instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {exonum.consensus.IPrevote=} [properties] Properties to set
                 * @returns {exonum.consensus.Prevote} Prevote instance
                 */
                Prevote.create = function create(properties) {
                    return new Prevote(properties);
                };
    
                /**
                 * Encodes the specified Prevote message. Does not implicitly {@link exonum.consensus.Prevote.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {exonum.consensus.IPrevote} message Prevote message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Prevote.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.validator);
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                    if (message.round != null && message.hasOwnProperty("round"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.round);
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        $root.exonum.Hash.encode(message.propose_hash, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.locked_round != null && message.hasOwnProperty("locked_round"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.locked_round);
                    return writer;
                };
    
                /**
                 * Encodes the specified Prevote message, length delimited. Does not implicitly {@link exonum.consensus.Prevote.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {exonum.consensus.IPrevote} message Prevote message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Prevote.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Prevote message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.Prevote} Prevote
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Prevote.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.Prevote();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.validator = reader.uint32();
                            break;
                        case 2:
                            message.height = reader.uint64();
                            break;
                        case 3:
                            message.round = reader.uint32();
                            break;
                        case 4:
                            message.propose_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.locked_round = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Prevote message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.Prevote} Prevote
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Prevote.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Prevote message.
                 * @function verify
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Prevote.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        if (!$util.isInteger(message.validator))
                            return "validator: integer expected";
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    if (message.round != null && message.hasOwnProperty("round"))
                        if (!$util.isInteger(message.round))
                            return "round: integer expected";
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash")) {
                        var error = $root.exonum.Hash.verify(message.propose_hash);
                        if (error)
                            return "propose_hash." + error;
                    }
                    if (message.locked_round != null && message.hasOwnProperty("locked_round"))
                        if (!$util.isInteger(message.locked_round))
                            return "locked_round: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Prevote message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.Prevote} Prevote
                 */
                Prevote.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.Prevote)
                        return object;
                    var message = new $root.exonum.consensus.Prevote();
                    if (object.validator != null)
                        message.validator = object.validator >>> 0;
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    if (object.round != null)
                        message.round = object.round >>> 0;
                    if (object.propose_hash != null) {
                        if (typeof object.propose_hash !== "object")
                            throw TypeError(".exonum.consensus.Prevote.propose_hash: object expected");
                        message.propose_hash = $root.exonum.Hash.fromObject(object.propose_hash);
                    }
                    if (object.locked_round != null)
                        message.locked_round = object.locked_round >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Prevote message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.Prevote
                 * @static
                 * @param {exonum.consensus.Prevote} message Prevote
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Prevote.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.validator = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                        object.round = 0;
                        object.propose_hash = null;
                        object.locked_round = 0;
                    }
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        object.validator = message.validator;
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    if (message.round != null && message.hasOwnProperty("round"))
                        object.round = message.round;
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        object.propose_hash = $root.exonum.Hash.toObject(message.propose_hash, options);
                    if (message.locked_round != null && message.hasOwnProperty("locked_round"))
                        object.locked_round = message.locked_round;
                    return object;
                };
    
                /**
                 * Converts this Prevote to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.Prevote
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Prevote.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Prevote;
            })();
    
            consensus.Precommit = (function() {
    
                /**
                 * Properties of a Precommit.
                 * @memberof exonum.consensus
                 * @interface IPrecommit
                 * @property {number|null} [validator] Precommit validator
                 * @property {number|Long|null} [height] Precommit height
                 * @property {number|null} [round] Precommit round
                 * @property {exonum.IHash|null} [propose_hash] Precommit propose_hash
                 * @property {exonum.IHash|null} [block_hash] Precommit block_hash
                 * @property {google.protobuf.ITimestamp|null} [time] Precommit time
                 */
    
                /**
                 * Constructs a new Precommit.
                 * @memberof exonum.consensus
                 * @classdesc Represents a Precommit.
                 * @implements IPrecommit
                 * @constructor
                 * @param {exonum.consensus.IPrecommit=} [properties] Properties to set
                 */
                function Precommit(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Precommit validator.
                 * @member {number} validator
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 */
                Precommit.prototype.validator = 0;
    
                /**
                 * Precommit height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 */
                Precommit.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Precommit round.
                 * @member {number} round
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 */
                Precommit.prototype.round = 0;
    
                /**
                 * Precommit propose_hash.
                 * @member {exonum.IHash|null|undefined} propose_hash
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 */
                Precommit.prototype.propose_hash = null;
    
                /**
                 * Precommit block_hash.
                 * @member {exonum.IHash|null|undefined} block_hash
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 */
                Precommit.prototype.block_hash = null;
    
                /**
                 * Precommit time.
                 * @member {google.protobuf.ITimestamp|null|undefined} time
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 */
                Precommit.prototype.time = null;
    
                /**
                 * Creates a new Precommit instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {exonum.consensus.IPrecommit=} [properties] Properties to set
                 * @returns {exonum.consensus.Precommit} Precommit instance
                 */
                Precommit.create = function create(properties) {
                    return new Precommit(properties);
                };
    
                /**
                 * Encodes the specified Precommit message. Does not implicitly {@link exonum.consensus.Precommit.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {exonum.consensus.IPrecommit} message Precommit message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Precommit.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.validator);
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                    if (message.round != null && message.hasOwnProperty("round"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.round);
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        $root.exonum.Hash.encode(message.propose_hash, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.block_hash != null && message.hasOwnProperty("block_hash"))
                        $root.exonum.Hash.encode(message.block_hash, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.time != null && message.hasOwnProperty("time"))
                        $root.google.protobuf.Timestamp.encode(message.time, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Precommit message, length delimited. Does not implicitly {@link exonum.consensus.Precommit.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {exonum.consensus.IPrecommit} message Precommit message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Precommit.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Precommit message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.Precommit} Precommit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Precommit.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.Precommit();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.validator = reader.uint32();
                            break;
                        case 2:
                            message.height = reader.uint64();
                            break;
                        case 3:
                            message.round = reader.uint32();
                            break;
                        case 4:
                            message.propose_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.block_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.time = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Precommit message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.Precommit} Precommit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Precommit.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Precommit message.
                 * @function verify
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Precommit.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        if (!$util.isInteger(message.validator))
                            return "validator: integer expected";
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    if (message.round != null && message.hasOwnProperty("round"))
                        if (!$util.isInteger(message.round))
                            return "round: integer expected";
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash")) {
                        var error = $root.exonum.Hash.verify(message.propose_hash);
                        if (error)
                            return "propose_hash." + error;
                    }
                    if (message.block_hash != null && message.hasOwnProperty("block_hash")) {
                        var error = $root.exonum.Hash.verify(message.block_hash);
                        if (error)
                            return "block_hash." + error;
                    }
                    if (message.time != null && message.hasOwnProperty("time")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.time);
                        if (error)
                            return "time." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a Precommit message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.Precommit} Precommit
                 */
                Precommit.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.Precommit)
                        return object;
                    var message = new $root.exonum.consensus.Precommit();
                    if (object.validator != null)
                        message.validator = object.validator >>> 0;
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    if (object.round != null)
                        message.round = object.round >>> 0;
                    if (object.propose_hash != null) {
                        if (typeof object.propose_hash !== "object")
                            throw TypeError(".exonum.consensus.Precommit.propose_hash: object expected");
                        message.propose_hash = $root.exonum.Hash.fromObject(object.propose_hash);
                    }
                    if (object.block_hash != null) {
                        if (typeof object.block_hash !== "object")
                            throw TypeError(".exonum.consensus.Precommit.block_hash: object expected");
                        message.block_hash = $root.exonum.Hash.fromObject(object.block_hash);
                    }
                    if (object.time != null) {
                        if (typeof object.time !== "object")
                            throw TypeError(".exonum.consensus.Precommit.time: object expected");
                        message.time = $root.google.protobuf.Timestamp.fromObject(object.time);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Precommit message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.Precommit
                 * @static
                 * @param {exonum.consensus.Precommit} message Precommit
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Precommit.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.validator = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                        object.round = 0;
                        object.propose_hash = null;
                        object.block_hash = null;
                        object.time = null;
                    }
                    if (message.validator != null && message.hasOwnProperty("validator"))
                        object.validator = message.validator;
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    if (message.round != null && message.hasOwnProperty("round"))
                        object.round = message.round;
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        object.propose_hash = $root.exonum.Hash.toObject(message.propose_hash, options);
                    if (message.block_hash != null && message.hasOwnProperty("block_hash"))
                        object.block_hash = $root.exonum.Hash.toObject(message.block_hash, options);
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = $root.google.protobuf.Timestamp.toObject(message.time, options);
                    return object;
                };
    
                /**
                 * Converts this Precommit to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.Precommit
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Precommit.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Precommit;
            })();
    
            consensus.BlockResponse = (function() {
    
                /**
                 * Properties of a BlockResponse.
                 * @memberof exonum.consensus
                 * @interface IBlockResponse
                 * @property {exonum.IPublicKey|null} [to] BlockResponse to
                 * @property {exonum.IBlock|null} [block] BlockResponse block
                 * @property {Array.<Uint8Array>|null} [precommits] BlockResponse precommits
                 * @property {Array.<exonum.IHash>|null} [transactions] BlockResponse transactions
                 */
    
                /**
                 * Constructs a new BlockResponse.
                 * @memberof exonum.consensus
                 * @classdesc Represents a BlockResponse.
                 * @implements IBlockResponse
                 * @constructor
                 * @param {exonum.consensus.IBlockResponse=} [properties] Properties to set
                 */
                function BlockResponse(properties) {
                    this.precommits = [];
                    this.transactions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BlockResponse to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.BlockResponse
                 * @instance
                 */
                BlockResponse.prototype.to = null;
    
                /**
                 * BlockResponse block.
                 * @member {exonum.IBlock|null|undefined} block
                 * @memberof exonum.consensus.BlockResponse
                 * @instance
                 */
                BlockResponse.prototype.block = null;
    
                /**
                 * BlockResponse precommits.
                 * @member {Array.<Uint8Array>} precommits
                 * @memberof exonum.consensus.BlockResponse
                 * @instance
                 */
                BlockResponse.prototype.precommits = $util.emptyArray;
    
                /**
                 * BlockResponse transactions.
                 * @member {Array.<exonum.IHash>} transactions
                 * @memberof exonum.consensus.BlockResponse
                 * @instance
                 */
                BlockResponse.prototype.transactions = $util.emptyArray;
    
                /**
                 * Creates a new BlockResponse instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {exonum.consensus.IBlockResponse=} [properties] Properties to set
                 * @returns {exonum.consensus.BlockResponse} BlockResponse instance
                 */
                BlockResponse.create = function create(properties) {
                    return new BlockResponse(properties);
                };
    
                /**
                 * Encodes the specified BlockResponse message. Does not implicitly {@link exonum.consensus.BlockResponse.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {exonum.consensus.IBlockResponse} message BlockResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.block != null && message.hasOwnProperty("block"))
                        $root.exonum.Block.encode(message.block, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.precommits != null && message.precommits.length)
                        for (var i = 0; i < message.precommits.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.precommits[i]);
                    if (message.transactions != null && message.transactions.length)
                        for (var i = 0; i < message.transactions.length; ++i)
                            $root.exonum.Hash.encode(message.transactions[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified BlockResponse message, length delimited. Does not implicitly {@link exonum.consensus.BlockResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {exonum.consensus.IBlockResponse} message BlockResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BlockResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.BlockResponse} BlockResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.BlockResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.block = $root.exonum.Block.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.precommits && message.precommits.length))
                                message.precommits = [];
                            message.precommits.push(reader.bytes());
                            break;
                        case 4:
                            if (!(message.transactions && message.transactions.length))
                                message.transactions = [];
                            message.transactions.push($root.exonum.Hash.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BlockResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.BlockResponse} BlockResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BlockResponse message.
                 * @function verify
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BlockResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    if (message.block != null && message.hasOwnProperty("block")) {
                        var error = $root.exonum.Block.verify(message.block);
                        if (error)
                            return "block." + error;
                    }
                    if (message.precommits != null && message.hasOwnProperty("precommits")) {
                        if (!Array.isArray(message.precommits))
                            return "precommits: array expected";
                        for (var i = 0; i < message.precommits.length; ++i)
                            if (!(message.precommits[i] && typeof message.precommits[i].length === "number" || $util.isString(message.precommits[i])))
                                return "precommits: buffer[] expected";
                    }
                    if (message.transactions != null && message.hasOwnProperty("transactions")) {
                        if (!Array.isArray(message.transactions))
                            return "transactions: array expected";
                        for (var i = 0; i < message.transactions.length; ++i) {
                            var error = $root.exonum.Hash.verify(message.transactions[i]);
                            if (error)
                                return "transactions." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a BlockResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.BlockResponse} BlockResponse
                 */
                BlockResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.BlockResponse)
                        return object;
                    var message = new $root.exonum.consensus.BlockResponse();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.BlockResponse.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    if (object.block != null) {
                        if (typeof object.block !== "object")
                            throw TypeError(".exonum.consensus.BlockResponse.block: object expected");
                        message.block = $root.exonum.Block.fromObject(object.block);
                    }
                    if (object.precommits) {
                        if (!Array.isArray(object.precommits))
                            throw TypeError(".exonum.consensus.BlockResponse.precommits: array expected");
                        message.precommits = [];
                        for (var i = 0; i < object.precommits.length; ++i)
                            if (typeof object.precommits[i] === "string")
                                $util.base64.decode(object.precommits[i], message.precommits[i] = $util.newBuffer($util.base64.length(object.precommits[i])), 0);
                            else if (object.precommits[i].length)
                                message.precommits[i] = object.precommits[i];
                    }
                    if (object.transactions) {
                        if (!Array.isArray(object.transactions))
                            throw TypeError(".exonum.consensus.BlockResponse.transactions: array expected");
                        message.transactions = [];
                        for (var i = 0; i < object.transactions.length; ++i) {
                            if (typeof object.transactions[i] !== "object")
                                throw TypeError(".exonum.consensus.BlockResponse.transactions: object expected");
                            message.transactions[i] = $root.exonum.Hash.fromObject(object.transactions[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a BlockResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.BlockResponse
                 * @static
                 * @param {exonum.consensus.BlockResponse} message BlockResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BlockResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.precommits = [];
                        object.transactions = [];
                    }
                    if (options.defaults) {
                        object.to = null;
                        object.block = null;
                    }
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    if (message.block != null && message.hasOwnProperty("block"))
                        object.block = $root.exonum.Block.toObject(message.block, options);
                    if (message.precommits && message.precommits.length) {
                        object.precommits = [];
                        for (var j = 0; j < message.precommits.length; ++j)
                            object.precommits[j] = options.bytes === String ? $util.base64.encode(message.precommits[j], 0, message.precommits[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.precommits[j]) : message.precommits[j];
                    }
                    if (message.transactions && message.transactions.length) {
                        object.transactions = [];
                        for (var j = 0; j < message.transactions.length; ++j)
                            object.transactions[j] = $root.exonum.Hash.toObject(message.transactions[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this BlockResponse to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.BlockResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BlockResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BlockResponse;
            })();
    
            consensus.TransactionsResponse = (function() {
    
                /**
                 * Properties of a TransactionsResponse.
                 * @memberof exonum.consensus
                 * @interface ITransactionsResponse
                 * @property {exonum.IPublicKey|null} [to] TransactionsResponse to
                 * @property {Array.<Uint8Array>|null} [transactions] TransactionsResponse transactions
                 */
    
                /**
                 * Constructs a new TransactionsResponse.
                 * @memberof exonum.consensus
                 * @classdesc Represents a TransactionsResponse.
                 * @implements ITransactionsResponse
                 * @constructor
                 * @param {exonum.consensus.ITransactionsResponse=} [properties] Properties to set
                 */
                function TransactionsResponse(properties) {
                    this.transactions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * TransactionsResponse to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.TransactionsResponse
                 * @instance
                 */
                TransactionsResponse.prototype.to = null;
    
                /**
                 * TransactionsResponse transactions.
                 * @member {Array.<Uint8Array>} transactions
                 * @memberof exonum.consensus.TransactionsResponse
                 * @instance
                 */
                TransactionsResponse.prototype.transactions = $util.emptyArray;
    
                /**
                 * Creates a new TransactionsResponse instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {exonum.consensus.ITransactionsResponse=} [properties] Properties to set
                 * @returns {exonum.consensus.TransactionsResponse} TransactionsResponse instance
                 */
                TransactionsResponse.create = function create(properties) {
                    return new TransactionsResponse(properties);
                };
    
                /**
                 * Encodes the specified TransactionsResponse message. Does not implicitly {@link exonum.consensus.TransactionsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {exonum.consensus.ITransactionsResponse} message TransactionsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TransactionsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.transactions != null && message.transactions.length)
                        for (var i = 0; i < message.transactions.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactions[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified TransactionsResponse message, length delimited. Does not implicitly {@link exonum.consensus.TransactionsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {exonum.consensus.ITransactionsResponse} message TransactionsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TransactionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a TransactionsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.TransactionsResponse} TransactionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TransactionsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.TransactionsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.transactions && message.transactions.length))
                                message.transactions = [];
                            message.transactions.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a TransactionsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.TransactionsResponse} TransactionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TransactionsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a TransactionsResponse message.
                 * @function verify
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TransactionsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    if (message.transactions != null && message.hasOwnProperty("transactions")) {
                        if (!Array.isArray(message.transactions))
                            return "transactions: array expected";
                        for (var i = 0; i < message.transactions.length; ++i)
                            if (!(message.transactions[i] && typeof message.transactions[i].length === "number" || $util.isString(message.transactions[i])))
                                return "transactions: buffer[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a TransactionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.TransactionsResponse} TransactionsResponse
                 */
                TransactionsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.TransactionsResponse)
                        return object;
                    var message = new $root.exonum.consensus.TransactionsResponse();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.TransactionsResponse.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    if (object.transactions) {
                        if (!Array.isArray(object.transactions))
                            throw TypeError(".exonum.consensus.TransactionsResponse.transactions: array expected");
                        message.transactions = [];
                        for (var i = 0; i < object.transactions.length; ++i)
                            if (typeof object.transactions[i] === "string")
                                $util.base64.decode(object.transactions[i], message.transactions[i] = $util.newBuffer($util.base64.length(object.transactions[i])), 0);
                            else if (object.transactions[i].length)
                                message.transactions[i] = object.transactions[i];
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a TransactionsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.TransactionsResponse
                 * @static
                 * @param {exonum.consensus.TransactionsResponse} message TransactionsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TransactionsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.transactions = [];
                    if (options.defaults)
                        object.to = null;
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    if (message.transactions && message.transactions.length) {
                        object.transactions = [];
                        for (var j = 0; j < message.transactions.length; ++j)
                            object.transactions[j] = options.bytes === String ? $util.base64.encode(message.transactions[j], 0, message.transactions[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.transactions[j]) : message.transactions[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this TransactionsResponse to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.TransactionsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TransactionsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return TransactionsResponse;
            })();
    
            consensus.ProposeRequest = (function() {
    
                /**
                 * Properties of a ProposeRequest.
                 * @memberof exonum.consensus
                 * @interface IProposeRequest
                 * @property {exonum.IPublicKey|null} [to] ProposeRequest to
                 * @property {number|Long|null} [height] ProposeRequest height
                 * @property {exonum.IHash|null} [propose_hash] ProposeRequest propose_hash
                 */
    
                /**
                 * Constructs a new ProposeRequest.
                 * @memberof exonum.consensus
                 * @classdesc Represents a ProposeRequest.
                 * @implements IProposeRequest
                 * @constructor
                 * @param {exonum.consensus.IProposeRequest=} [properties] Properties to set
                 */
                function ProposeRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ProposeRequest to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.ProposeRequest
                 * @instance
                 */
                ProposeRequest.prototype.to = null;
    
                /**
                 * ProposeRequest height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.ProposeRequest
                 * @instance
                 */
                ProposeRequest.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * ProposeRequest propose_hash.
                 * @member {exonum.IHash|null|undefined} propose_hash
                 * @memberof exonum.consensus.ProposeRequest
                 * @instance
                 */
                ProposeRequest.prototype.propose_hash = null;
    
                /**
                 * Creates a new ProposeRequest instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {exonum.consensus.IProposeRequest=} [properties] Properties to set
                 * @returns {exonum.consensus.ProposeRequest} ProposeRequest instance
                 */
                ProposeRequest.create = function create(properties) {
                    return new ProposeRequest(properties);
                };
    
                /**
                 * Encodes the specified ProposeRequest message. Does not implicitly {@link exonum.consensus.ProposeRequest.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {exonum.consensus.IProposeRequest} message ProposeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProposeRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        $root.exonum.Hash.encode(message.propose_hash, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ProposeRequest message, length delimited. Does not implicitly {@link exonum.consensus.ProposeRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {exonum.consensus.IProposeRequest} message ProposeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProposeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ProposeRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.ProposeRequest} ProposeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProposeRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.ProposeRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.height = reader.uint64();
                            break;
                        case 3:
                            message.propose_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ProposeRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.ProposeRequest} ProposeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProposeRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ProposeRequest message.
                 * @function verify
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProposeRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash")) {
                        var error = $root.exonum.Hash.verify(message.propose_hash);
                        if (error)
                            return "propose_hash." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ProposeRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.ProposeRequest} ProposeRequest
                 */
                ProposeRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.ProposeRequest)
                        return object;
                    var message = new $root.exonum.consensus.ProposeRequest();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.ProposeRequest.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    if (object.propose_hash != null) {
                        if (typeof object.propose_hash !== "object")
                            throw TypeError(".exonum.consensus.ProposeRequest.propose_hash: object expected");
                        message.propose_hash = $root.exonum.Hash.fromObject(object.propose_hash);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ProposeRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.ProposeRequest
                 * @static
                 * @param {exonum.consensus.ProposeRequest} message ProposeRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProposeRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.to = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                        object.propose_hash = null;
                    }
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        object.propose_hash = $root.exonum.Hash.toObject(message.propose_hash, options);
                    return object;
                };
    
                /**
                 * Converts this ProposeRequest to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.ProposeRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProposeRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ProposeRequest;
            })();
    
            consensus.TransactionsRequest = (function() {
    
                /**
                 * Properties of a TransactionsRequest.
                 * @memberof exonum.consensus
                 * @interface ITransactionsRequest
                 * @property {exonum.IPublicKey|null} [to] TransactionsRequest to
                 * @property {Array.<exonum.IHash>|null} [txs] TransactionsRequest txs
                 */
    
                /**
                 * Constructs a new TransactionsRequest.
                 * @memberof exonum.consensus
                 * @classdesc Represents a TransactionsRequest.
                 * @implements ITransactionsRequest
                 * @constructor
                 * @param {exonum.consensus.ITransactionsRequest=} [properties] Properties to set
                 */
                function TransactionsRequest(properties) {
                    this.txs = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * TransactionsRequest to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.TransactionsRequest
                 * @instance
                 */
                TransactionsRequest.prototype.to = null;
    
                /**
                 * TransactionsRequest txs.
                 * @member {Array.<exonum.IHash>} txs
                 * @memberof exonum.consensus.TransactionsRequest
                 * @instance
                 */
                TransactionsRequest.prototype.txs = $util.emptyArray;
    
                /**
                 * Creates a new TransactionsRequest instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {exonum.consensus.ITransactionsRequest=} [properties] Properties to set
                 * @returns {exonum.consensus.TransactionsRequest} TransactionsRequest instance
                 */
                TransactionsRequest.create = function create(properties) {
                    return new TransactionsRequest(properties);
                };
    
                /**
                 * Encodes the specified TransactionsRequest message. Does not implicitly {@link exonum.consensus.TransactionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {exonum.consensus.ITransactionsRequest} message TransactionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TransactionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.txs != null && message.txs.length)
                        for (var i = 0; i < message.txs.length; ++i)
                            $root.exonum.Hash.encode(message.txs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified TransactionsRequest message, length delimited. Does not implicitly {@link exonum.consensus.TransactionsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {exonum.consensus.ITransactionsRequest} message TransactionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TransactionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a TransactionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.TransactionsRequest} TransactionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TransactionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.TransactionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.txs && message.txs.length))
                                message.txs = [];
                            message.txs.push($root.exonum.Hash.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a TransactionsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.TransactionsRequest} TransactionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TransactionsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a TransactionsRequest message.
                 * @function verify
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TransactionsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    if (message.txs != null && message.hasOwnProperty("txs")) {
                        if (!Array.isArray(message.txs))
                            return "txs: array expected";
                        for (var i = 0; i < message.txs.length; ++i) {
                            var error = $root.exonum.Hash.verify(message.txs[i]);
                            if (error)
                                return "txs." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a TransactionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.TransactionsRequest} TransactionsRequest
                 */
                TransactionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.TransactionsRequest)
                        return object;
                    var message = new $root.exonum.consensus.TransactionsRequest();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.TransactionsRequest.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    if (object.txs) {
                        if (!Array.isArray(object.txs))
                            throw TypeError(".exonum.consensus.TransactionsRequest.txs: array expected");
                        message.txs = [];
                        for (var i = 0; i < object.txs.length; ++i) {
                            if (typeof object.txs[i] !== "object")
                                throw TypeError(".exonum.consensus.TransactionsRequest.txs: object expected");
                            message.txs[i] = $root.exonum.Hash.fromObject(object.txs[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a TransactionsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.TransactionsRequest
                 * @static
                 * @param {exonum.consensus.TransactionsRequest} message TransactionsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TransactionsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.txs = [];
                    if (options.defaults)
                        object.to = null;
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    if (message.txs && message.txs.length) {
                        object.txs = [];
                        for (var j = 0; j < message.txs.length; ++j)
                            object.txs[j] = $root.exonum.Hash.toObject(message.txs[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this TransactionsRequest to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.TransactionsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TransactionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return TransactionsRequest;
            })();
    
            consensus.PrevotesRequest = (function() {
    
                /**
                 * Properties of a PrevotesRequest.
                 * @memberof exonum.consensus
                 * @interface IPrevotesRequest
                 * @property {exonum.IPublicKey|null} [to] PrevotesRequest to
                 * @property {number|Long|null} [height] PrevotesRequest height
                 * @property {number|null} [round] PrevotesRequest round
                 * @property {exonum.IHash|null} [propose_hash] PrevotesRequest propose_hash
                 * @property {exonum.IBitVec|null} [validators] PrevotesRequest validators
                 */
    
                /**
                 * Constructs a new PrevotesRequest.
                 * @memberof exonum.consensus
                 * @classdesc Represents a PrevotesRequest.
                 * @implements IPrevotesRequest
                 * @constructor
                 * @param {exonum.consensus.IPrevotesRequest=} [properties] Properties to set
                 */
                function PrevotesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PrevotesRequest to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.PrevotesRequest
                 * @instance
                 */
                PrevotesRequest.prototype.to = null;
    
                /**
                 * PrevotesRequest height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.PrevotesRequest
                 * @instance
                 */
                PrevotesRequest.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * PrevotesRequest round.
                 * @member {number} round
                 * @memberof exonum.consensus.PrevotesRequest
                 * @instance
                 */
                PrevotesRequest.prototype.round = 0;
    
                /**
                 * PrevotesRequest propose_hash.
                 * @member {exonum.IHash|null|undefined} propose_hash
                 * @memberof exonum.consensus.PrevotesRequest
                 * @instance
                 */
                PrevotesRequest.prototype.propose_hash = null;
    
                /**
                 * PrevotesRequest validators.
                 * @member {exonum.IBitVec|null|undefined} validators
                 * @memberof exonum.consensus.PrevotesRequest
                 * @instance
                 */
                PrevotesRequest.prototype.validators = null;
    
                /**
                 * Creates a new PrevotesRequest instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {exonum.consensus.IPrevotesRequest=} [properties] Properties to set
                 * @returns {exonum.consensus.PrevotesRequest} PrevotesRequest instance
                 */
                PrevotesRequest.create = function create(properties) {
                    return new PrevotesRequest(properties);
                };
    
                /**
                 * Encodes the specified PrevotesRequest message. Does not implicitly {@link exonum.consensus.PrevotesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {exonum.consensus.IPrevotesRequest} message PrevotesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrevotesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                    if (message.round != null && message.hasOwnProperty("round"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.round);
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        $root.exonum.Hash.encode(message.propose_hash, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.validators != null && message.hasOwnProperty("validators"))
                        $root.exonum.BitVec.encode(message.validators, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PrevotesRequest message, length delimited. Does not implicitly {@link exonum.consensus.PrevotesRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {exonum.consensus.IPrevotesRequest} message PrevotesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrevotesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PrevotesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.PrevotesRequest} PrevotesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrevotesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.PrevotesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.height = reader.uint64();
                            break;
                        case 3:
                            message.round = reader.uint32();
                            break;
                        case 4:
                            message.propose_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.validators = $root.exonum.BitVec.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PrevotesRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.PrevotesRequest} PrevotesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrevotesRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PrevotesRequest message.
                 * @function verify
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PrevotesRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    if (message.round != null && message.hasOwnProperty("round"))
                        if (!$util.isInteger(message.round))
                            return "round: integer expected";
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash")) {
                        var error = $root.exonum.Hash.verify(message.propose_hash);
                        if (error)
                            return "propose_hash." + error;
                    }
                    if (message.validators != null && message.hasOwnProperty("validators")) {
                        var error = $root.exonum.BitVec.verify(message.validators);
                        if (error)
                            return "validators." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PrevotesRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.PrevotesRequest} PrevotesRequest
                 */
                PrevotesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.PrevotesRequest)
                        return object;
                    var message = new $root.exonum.consensus.PrevotesRequest();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.PrevotesRequest.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    if (object.round != null)
                        message.round = object.round >>> 0;
                    if (object.propose_hash != null) {
                        if (typeof object.propose_hash !== "object")
                            throw TypeError(".exonum.consensus.PrevotesRequest.propose_hash: object expected");
                        message.propose_hash = $root.exonum.Hash.fromObject(object.propose_hash);
                    }
                    if (object.validators != null) {
                        if (typeof object.validators !== "object")
                            throw TypeError(".exonum.consensus.PrevotesRequest.validators: object expected");
                        message.validators = $root.exonum.BitVec.fromObject(object.validators);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PrevotesRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.PrevotesRequest
                 * @static
                 * @param {exonum.consensus.PrevotesRequest} message PrevotesRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PrevotesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.to = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                        object.round = 0;
                        object.propose_hash = null;
                        object.validators = null;
                    }
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    if (message.round != null && message.hasOwnProperty("round"))
                        object.round = message.round;
                    if (message.propose_hash != null && message.hasOwnProperty("propose_hash"))
                        object.propose_hash = $root.exonum.Hash.toObject(message.propose_hash, options);
                    if (message.validators != null && message.hasOwnProperty("validators"))
                        object.validators = $root.exonum.BitVec.toObject(message.validators, options);
                    return object;
                };
    
                /**
                 * Converts this PrevotesRequest to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.PrevotesRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PrevotesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PrevotesRequest;
            })();
    
            consensus.PeersRequest = (function() {
    
                /**
                 * Properties of a PeersRequest.
                 * @memberof exonum.consensus
                 * @interface IPeersRequest
                 * @property {exonum.IPublicKey|null} [to] PeersRequest to
                 */
    
                /**
                 * Constructs a new PeersRequest.
                 * @memberof exonum.consensus
                 * @classdesc Represents a PeersRequest.
                 * @implements IPeersRequest
                 * @constructor
                 * @param {exonum.consensus.IPeersRequest=} [properties] Properties to set
                 */
                function PeersRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PeersRequest to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.PeersRequest
                 * @instance
                 */
                PeersRequest.prototype.to = null;
    
                /**
                 * Creates a new PeersRequest instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {exonum.consensus.IPeersRequest=} [properties] Properties to set
                 * @returns {exonum.consensus.PeersRequest} PeersRequest instance
                 */
                PeersRequest.create = function create(properties) {
                    return new PeersRequest(properties);
                };
    
                /**
                 * Encodes the specified PeersRequest message. Does not implicitly {@link exonum.consensus.PeersRequest.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {exonum.consensus.IPeersRequest} message PeersRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PeersRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PeersRequest message, length delimited. Does not implicitly {@link exonum.consensus.PeersRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {exonum.consensus.IPeersRequest} message PeersRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PeersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PeersRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.PeersRequest} PeersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PeersRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.PeersRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PeersRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.PeersRequest} PeersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PeersRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PeersRequest message.
                 * @function verify
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PeersRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PeersRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.PeersRequest} PeersRequest
                 */
                PeersRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.PeersRequest)
                        return object;
                    var message = new $root.exonum.consensus.PeersRequest();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.PeersRequest.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PeersRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.PeersRequest
                 * @static
                 * @param {exonum.consensus.PeersRequest} message PeersRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PeersRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.to = null;
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    return object;
                };
    
                /**
                 * Converts this PeersRequest to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.PeersRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PeersRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PeersRequest;
            })();
    
            consensus.BlockRequest = (function() {
    
                /**
                 * Properties of a BlockRequest.
                 * @memberof exonum.consensus
                 * @interface IBlockRequest
                 * @property {exonum.IPublicKey|null} [to] BlockRequest to
                 * @property {number|Long|null} [height] BlockRequest height
                 */
    
                /**
                 * Constructs a new BlockRequest.
                 * @memberof exonum.consensus
                 * @classdesc Represents a BlockRequest.
                 * @implements IBlockRequest
                 * @constructor
                 * @param {exonum.consensus.IBlockRequest=} [properties] Properties to set
                 */
                function BlockRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BlockRequest to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.BlockRequest
                 * @instance
                 */
                BlockRequest.prototype.to = null;
    
                /**
                 * BlockRequest height.
                 * @member {number|Long} height
                 * @memberof exonum.consensus.BlockRequest
                 * @instance
                 */
                BlockRequest.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new BlockRequest instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {exonum.consensus.IBlockRequest=} [properties] Properties to set
                 * @returns {exonum.consensus.BlockRequest} BlockRequest instance
                 */
                BlockRequest.create = function create(properties) {
                    return new BlockRequest(properties);
                };
    
                /**
                 * Encodes the specified BlockRequest message. Does not implicitly {@link exonum.consensus.BlockRequest.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {exonum.consensus.IBlockRequest} message BlockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.height != null && message.hasOwnProperty("height"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                    return writer;
                };
    
                /**
                 * Encodes the specified BlockRequest message, length delimited. Does not implicitly {@link exonum.consensus.BlockRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {exonum.consensus.IBlockRequest} message BlockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BlockRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.BlockRequest} BlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.BlockRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.height = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BlockRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.BlockRequest} BlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BlockRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BlockRequest message.
                 * @function verify
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BlockRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                            return "height: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a BlockRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.BlockRequest} BlockRequest
                 */
                BlockRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.BlockRequest)
                        return object;
                    var message = new $root.exonum.consensus.BlockRequest();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.BlockRequest.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    if (object.height != null)
                        if ($util.Long)
                            (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a BlockRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.BlockRequest
                 * @static
                 * @param {exonum.consensus.BlockRequest} message BlockRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BlockRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.to = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.height = options.longs === String ? "0" : 0;
                    }
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (typeof message.height === "number")
                            object.height = options.longs === String ? String(message.height) : message.height;
                        else
                            object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                    return object;
                };
    
                /**
                 * Converts this BlockRequest to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.BlockRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BlockRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BlockRequest;
            })();
    
            consensus.PoolTransactionsRequest = (function() {
    
                /**
                 * Properties of a PoolTransactionsRequest.
                 * @memberof exonum.consensus
                 * @interface IPoolTransactionsRequest
                 * @property {exonum.IPublicKey|null} [to] PoolTransactionsRequest to
                 */
    
                /**
                 * Constructs a new PoolTransactionsRequest.
                 * @memberof exonum.consensus
                 * @classdesc Represents a PoolTransactionsRequest.
                 * @implements IPoolTransactionsRequest
                 * @constructor
                 * @param {exonum.consensus.IPoolTransactionsRequest=} [properties] Properties to set
                 */
                function PoolTransactionsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PoolTransactionsRequest to.
                 * @member {exonum.IPublicKey|null|undefined} to
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @instance
                 */
                PoolTransactionsRequest.prototype.to = null;
    
                /**
                 * Creates a new PoolTransactionsRequest instance using the specified properties.
                 * @function create
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {exonum.consensus.IPoolTransactionsRequest=} [properties] Properties to set
                 * @returns {exonum.consensus.PoolTransactionsRequest} PoolTransactionsRequest instance
                 */
                PoolTransactionsRequest.create = function create(properties) {
                    return new PoolTransactionsRequest(properties);
                };
    
                /**
                 * Encodes the specified PoolTransactionsRequest message. Does not implicitly {@link exonum.consensus.PoolTransactionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {exonum.consensus.IPoolTransactionsRequest} message PoolTransactionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PoolTransactionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.to != null && message.hasOwnProperty("to"))
                        $root.exonum.PublicKey.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PoolTransactionsRequest message, length delimited. Does not implicitly {@link exonum.consensus.PoolTransactionsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {exonum.consensus.IPoolTransactionsRequest} message PoolTransactionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PoolTransactionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PoolTransactionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {exonum.consensus.PoolTransactionsRequest} PoolTransactionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PoolTransactionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.consensus.PoolTransactionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.to = $root.exonum.PublicKey.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PoolTransactionsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {exonum.consensus.PoolTransactionsRequest} PoolTransactionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PoolTransactionsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PoolTransactionsRequest message.
                 * @function verify
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PoolTransactionsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        var error = $root.exonum.PublicKey.verify(message.to);
                        if (error)
                            return "to." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PoolTransactionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {exonum.consensus.PoolTransactionsRequest} PoolTransactionsRequest
                 */
                PoolTransactionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.exonum.consensus.PoolTransactionsRequest)
                        return object;
                    var message = new $root.exonum.consensus.PoolTransactionsRequest();
                    if (object.to != null) {
                        if (typeof object.to !== "object")
                            throw TypeError(".exonum.consensus.PoolTransactionsRequest.to: object expected");
                        message.to = $root.exonum.PublicKey.fromObject(object.to);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PoolTransactionsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @static
                 * @param {exonum.consensus.PoolTransactionsRequest} message PoolTransactionsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PoolTransactionsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.to = null;
                    if (message.to != null && message.hasOwnProperty("to"))
                        object.to = $root.exonum.PublicKey.toObject(message.to, options);
                    return object;
                };
    
                /**
                 * Converts this PoolTransactionsRequest to JSON.
                 * @function toJSON
                 * @memberof exonum.consensus.PoolTransactionsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PoolTransactionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PoolTransactionsRequest;
            })();
    
            return consensus;
        })();
    
        exonum.Hash = (function() {
    
            /**
             * Properties of a Hash.
             * @memberof exonum
             * @interface IHash
             * @property {Uint8Array|null} [data] Hash data
             */
    
            /**
             * Constructs a new Hash.
             * @memberof exonum
             * @classdesc Represents a Hash.
             * @implements IHash
             * @constructor
             * @param {exonum.IHash=} [properties] Properties to set
             */
            function Hash(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hash data.
             * @member {Uint8Array} data
             * @memberof exonum.Hash
             * @instance
             */
            Hash.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new Hash instance using the specified properties.
             * @function create
             * @memberof exonum.Hash
             * @static
             * @param {exonum.IHash=} [properties] Properties to set
             * @returns {exonum.Hash} Hash instance
             */
            Hash.create = function create(properties) {
                return new Hash(properties);
            };
    
            /**
             * Encodes the specified Hash message. Does not implicitly {@link exonum.Hash.verify|verify} messages.
             * @function encode
             * @memberof exonum.Hash
             * @static
             * @param {exonum.IHash} message Hash message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hash.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified Hash message, length delimited. Does not implicitly {@link exonum.Hash.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.Hash
             * @static
             * @param {exonum.IHash} message Hash message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hash.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hash message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.Hash
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.Hash} Hash
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hash.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.Hash();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Hash message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.Hash
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.Hash} Hash
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hash.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hash message.
             * @function verify
             * @memberof exonum.Hash
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hash.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a Hash message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.Hash
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.Hash} Hash
             */
            Hash.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.Hash)
                    return object;
                var message = new $root.exonum.Hash();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a Hash message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.Hash
             * @static
             * @param {exonum.Hash} message Hash
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hash.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this Hash to JSON.
             * @function toJSON
             * @memberof exonum.Hash
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hash.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Hash;
        })();
    
        exonum.PublicKey = (function() {
    
            /**
             * Properties of a PublicKey.
             * @memberof exonum
             * @interface IPublicKey
             * @property {Uint8Array|null} [data] PublicKey data
             */
    
            /**
             * Constructs a new PublicKey.
             * @memberof exonum
             * @classdesc Represents a PublicKey.
             * @implements IPublicKey
             * @constructor
             * @param {exonum.IPublicKey=} [properties] Properties to set
             */
            function PublicKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PublicKey data.
             * @member {Uint8Array} data
             * @memberof exonum.PublicKey
             * @instance
             */
            PublicKey.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new PublicKey instance using the specified properties.
             * @function create
             * @memberof exonum.PublicKey
             * @static
             * @param {exonum.IPublicKey=} [properties] Properties to set
             * @returns {exonum.PublicKey} PublicKey instance
             */
            PublicKey.create = function create(properties) {
                return new PublicKey(properties);
            };
    
            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link exonum.PublicKey.verify|verify} messages.
             * @function encode
             * @memberof exonum.PublicKey
             * @static
             * @param {exonum.IPublicKey} message PublicKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublicKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link exonum.PublicKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.PublicKey
             * @static
             * @param {exonum.IPublicKey} message PublicKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublicKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.PublicKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.PublicKey} PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublicKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.PublicKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PublicKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.PublicKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.PublicKey} PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublicKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PublicKey message.
             * @function verify
             * @memberof exonum.PublicKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublicKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.PublicKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.PublicKey} PublicKey
             */
            PublicKey.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.PublicKey)
                    return object;
                var message = new $root.exonum.PublicKey();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.PublicKey
             * @static
             * @param {exonum.PublicKey} message PublicKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublicKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this PublicKey to JSON.
             * @function toJSON
             * @memberof exonum.PublicKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublicKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PublicKey;
        })();
    
        exonum.Signature = (function() {
    
            /**
             * Properties of a Signature.
             * @memberof exonum
             * @interface ISignature
             * @property {Uint8Array|null} [data] Signature data
             */
    
            /**
             * Constructs a new Signature.
             * @memberof exonum
             * @classdesc Represents a Signature.
             * @implements ISignature
             * @constructor
             * @param {exonum.ISignature=} [properties] Properties to set
             */
            function Signature(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Signature data.
             * @member {Uint8Array} data
             * @memberof exonum.Signature
             * @instance
             */
            Signature.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new Signature instance using the specified properties.
             * @function create
             * @memberof exonum.Signature
             * @static
             * @param {exonum.ISignature=} [properties] Properties to set
             * @returns {exonum.Signature} Signature instance
             */
            Signature.create = function create(properties) {
                return new Signature(properties);
            };
    
            /**
             * Encodes the specified Signature message. Does not implicitly {@link exonum.Signature.verify|verify} messages.
             * @function encode
             * @memberof exonum.Signature
             * @static
             * @param {exonum.ISignature} message Signature message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Signature.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link exonum.Signature.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.Signature
             * @static
             * @param {exonum.ISignature} message Signature message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Signature.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.Signature
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.Signature} Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Signature.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.Signature();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.Signature
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.Signature} Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Signature.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Signature message.
             * @function verify
             * @memberof exonum.Signature
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Signature.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a Signature message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.Signature
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.Signature} Signature
             */
            Signature.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.Signature)
                    return object;
                var message = new $root.exonum.Signature();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.Signature
             * @static
             * @param {exonum.Signature} message Signature
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Signature.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this Signature to JSON.
             * @function toJSON
             * @memberof exonum.Signature
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Signature.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Signature;
        })();
    
        exonum.BitVec = (function() {
    
            /**
             * Properties of a BitVec.
             * @memberof exonum
             * @interface IBitVec
             * @property {Uint8Array|null} [data] BitVec data
             * @property {number|Long|null} [len] BitVec len
             */
    
            /**
             * Constructs a new BitVec.
             * @memberof exonum
             * @classdesc Represents a BitVec.
             * @implements IBitVec
             * @constructor
             * @param {exonum.IBitVec=} [properties] Properties to set
             */
            function BitVec(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BitVec data.
             * @member {Uint8Array} data
             * @memberof exonum.BitVec
             * @instance
             */
            BitVec.prototype.data = $util.newBuffer([]);
    
            /**
             * BitVec len.
             * @member {number|Long} len
             * @memberof exonum.BitVec
             * @instance
             */
            BitVec.prototype.len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new BitVec instance using the specified properties.
             * @function create
             * @memberof exonum.BitVec
             * @static
             * @param {exonum.IBitVec=} [properties] Properties to set
             * @returns {exonum.BitVec} BitVec instance
             */
            BitVec.create = function create(properties) {
                return new BitVec(properties);
            };
    
            /**
             * Encodes the specified BitVec message. Does not implicitly {@link exonum.BitVec.verify|verify} messages.
             * @function encode
             * @memberof exonum.BitVec
             * @static
             * @param {exonum.IBitVec} message BitVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BitVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                if (message.len != null && message.hasOwnProperty("len"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.len);
                return writer;
            };
    
            /**
             * Encodes the specified BitVec message, length delimited. Does not implicitly {@link exonum.BitVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.BitVec
             * @static
             * @param {exonum.IBitVec} message BitVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BitVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BitVec message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.BitVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.BitVec} BitVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BitVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.BitVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    case 2:
                        message.len = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BitVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.BitVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.BitVec} BitVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BitVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BitVec message.
             * @function verify
             * @memberof exonum.BitVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BitVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.len != null && message.hasOwnProperty("len"))
                    if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                        return "len: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a BitVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.BitVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.BitVec} BitVec
             */
            BitVec.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.BitVec)
                    return object;
                var message = new $root.exonum.BitVec();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.len != null)
                    if ($util.Long)
                        (message.len = $util.Long.fromValue(object.len)).unsigned = true;
                    else if (typeof object.len === "string")
                        message.len = parseInt(object.len, 10);
                    else if (typeof object.len === "number")
                        message.len = object.len;
                    else if (typeof object.len === "object")
                        message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a BitVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.BitVec
             * @static
             * @param {exonum.BitVec} message BitVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BitVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.len = options.longs === String ? "0" : 0;
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.len != null && message.hasOwnProperty("len"))
                    if (typeof message.len === "number")
                        object.len = options.longs === String ? String(message.len) : message.len;
                    else
                        object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber(true) : message.len;
                return object;
            };
    
            /**
             * Converts this BitVec to JSON.
             * @function toJSON
             * @memberof exonum.BitVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BitVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BitVec;
        })();
    
        exonum.Block = (function() {
    
            /**
             * Properties of a Block.
             * @memberof exonum
             * @interface IBlock
             * @property {number|null} [proposer_id] Block proposer_id
             * @property {number|Long|null} [height] Block height
             * @property {number|null} [tx_count] Block tx_count
             * @property {exonum.IHash|null} [prev_hash] Block prev_hash
             * @property {exonum.IHash|null} [tx_hash] Block tx_hash
             * @property {exonum.IHash|null} [state_hash] Block state_hash
             */
    
            /**
             * Constructs a new Block.
             * @memberof exonum
             * @classdesc Represents a Block.
             * @implements IBlock
             * @constructor
             * @param {exonum.IBlock=} [properties] Properties to set
             */
            function Block(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Block proposer_id.
             * @member {number} proposer_id
             * @memberof exonum.Block
             * @instance
             */
            Block.prototype.proposer_id = 0;
    
            /**
             * Block height.
             * @member {number|Long} height
             * @memberof exonum.Block
             * @instance
             */
            Block.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Block tx_count.
             * @member {number} tx_count
             * @memberof exonum.Block
             * @instance
             */
            Block.prototype.tx_count = 0;
    
            /**
             * Block prev_hash.
             * @member {exonum.IHash|null|undefined} prev_hash
             * @memberof exonum.Block
             * @instance
             */
            Block.prototype.prev_hash = null;
    
            /**
             * Block tx_hash.
             * @member {exonum.IHash|null|undefined} tx_hash
             * @memberof exonum.Block
             * @instance
             */
            Block.prototype.tx_hash = null;
    
            /**
             * Block state_hash.
             * @member {exonum.IHash|null|undefined} state_hash
             * @memberof exonum.Block
             * @instance
             */
            Block.prototype.state_hash = null;
    
            /**
             * Creates a new Block instance using the specified properties.
             * @function create
             * @memberof exonum.Block
             * @static
             * @param {exonum.IBlock=} [properties] Properties to set
             * @returns {exonum.Block} Block instance
             */
            Block.create = function create(properties) {
                return new Block(properties);
            };
    
            /**
             * Encodes the specified Block message. Does not implicitly {@link exonum.Block.verify|verify} messages.
             * @function encode
             * @memberof exonum.Block
             * @static
             * @param {exonum.IBlock} message Block message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Block.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.proposer_id != null && message.hasOwnProperty("proposer_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.proposer_id);
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.height);
                if (message.tx_count != null && message.hasOwnProperty("tx_count"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tx_count);
                if (message.prev_hash != null && message.hasOwnProperty("prev_hash"))
                    $root.exonum.Hash.encode(message.prev_hash, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.tx_hash != null && message.hasOwnProperty("tx_hash"))
                    $root.exonum.Hash.encode(message.tx_hash, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.state_hash != null && message.hasOwnProperty("state_hash"))
                    $root.exonum.Hash.encode(message.state_hash, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Block message, length delimited. Does not implicitly {@link exonum.Block.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.Block
             * @static
             * @param {exonum.IBlock} message Block message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Block.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Block message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.Block
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.Block} Block
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Block.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.Block();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.proposer_id = reader.uint32();
                        break;
                    case 2:
                        message.height = reader.uint64();
                        break;
                    case 3:
                        message.tx_count = reader.uint32();
                        break;
                    case 4:
                        message.prev_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.tx_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.state_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Block message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.Block
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.Block} Block
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Block.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Block message.
             * @function verify
             * @memberof exonum.Block
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Block.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.proposer_id != null && message.hasOwnProperty("proposer_id"))
                    if (!$util.isInteger(message.proposer_id))
                        return "proposer_id: integer expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.tx_count != null && message.hasOwnProperty("tx_count"))
                    if (!$util.isInteger(message.tx_count))
                        return "tx_count: integer expected";
                if (message.prev_hash != null && message.hasOwnProperty("prev_hash")) {
                    var error = $root.exonum.Hash.verify(message.prev_hash);
                    if (error)
                        return "prev_hash." + error;
                }
                if (message.tx_hash != null && message.hasOwnProperty("tx_hash")) {
                    var error = $root.exonum.Hash.verify(message.tx_hash);
                    if (error)
                        return "tx_hash." + error;
                }
                if (message.state_hash != null && message.hasOwnProperty("state_hash")) {
                    var error = $root.exonum.Hash.verify(message.state_hash);
                    if (error)
                        return "state_hash." + error;
                }
                return null;
            };
    
            /**
             * Creates a Block message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.Block
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.Block} Block
             */
            Block.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.Block)
                    return object;
                var message = new $root.exonum.Block();
                if (object.proposer_id != null)
                    message.proposer_id = object.proposer_id >>> 0;
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                if (object.tx_count != null)
                    message.tx_count = object.tx_count >>> 0;
                if (object.prev_hash != null) {
                    if (typeof object.prev_hash !== "object")
                        throw TypeError(".exonum.Block.prev_hash: object expected");
                    message.prev_hash = $root.exonum.Hash.fromObject(object.prev_hash);
                }
                if (object.tx_hash != null) {
                    if (typeof object.tx_hash !== "object")
                        throw TypeError(".exonum.Block.tx_hash: object expected");
                    message.tx_hash = $root.exonum.Hash.fromObject(object.tx_hash);
                }
                if (object.state_hash != null) {
                    if (typeof object.state_hash !== "object")
                        throw TypeError(".exonum.Block.state_hash: object expected");
                    message.state_hash = $root.exonum.Hash.fromObject(object.state_hash);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Block message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.Block
             * @static
             * @param {exonum.Block} message Block
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Block.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.proposer_id = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.tx_count = 0;
                    object.prev_hash = null;
                    object.tx_hash = null;
                    object.state_hash = null;
                }
                if (message.proposer_id != null && message.hasOwnProperty("proposer_id"))
                    object.proposer_id = message.proposer_id;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                if (message.tx_count != null && message.hasOwnProperty("tx_count"))
                    object.tx_count = message.tx_count;
                if (message.prev_hash != null && message.hasOwnProperty("prev_hash"))
                    object.prev_hash = $root.exonum.Hash.toObject(message.prev_hash, options);
                if (message.tx_hash != null && message.hasOwnProperty("tx_hash"))
                    object.tx_hash = $root.exonum.Hash.toObject(message.tx_hash, options);
                if (message.state_hash != null && message.hasOwnProperty("state_hash"))
                    object.state_hash = $root.exonum.Hash.toObject(message.state_hash, options);
                return object;
            };
    
            /**
             * Converts this Block to JSON.
             * @function toJSON
             * @memberof exonum.Block
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Block.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Block;
        })();
    
        exonum.ConfigReference = (function() {
    
            /**
             * Properties of a ConfigReference.
             * @memberof exonum
             * @interface IConfigReference
             * @property {number|Long|null} [actual_from] ConfigReference actual_from
             * @property {exonum.IHash|null} [cfg_hash] ConfigReference cfg_hash
             */
    
            /**
             * Constructs a new ConfigReference.
             * @memberof exonum
             * @classdesc Represents a ConfigReference.
             * @implements IConfigReference
             * @constructor
             * @param {exonum.IConfigReference=} [properties] Properties to set
             */
            function ConfigReference(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConfigReference actual_from.
             * @member {number|Long} actual_from
             * @memberof exonum.ConfigReference
             * @instance
             */
            ConfigReference.prototype.actual_from = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ConfigReference cfg_hash.
             * @member {exonum.IHash|null|undefined} cfg_hash
             * @memberof exonum.ConfigReference
             * @instance
             */
            ConfigReference.prototype.cfg_hash = null;
    
            /**
             * Creates a new ConfigReference instance using the specified properties.
             * @function create
             * @memberof exonum.ConfigReference
             * @static
             * @param {exonum.IConfigReference=} [properties] Properties to set
             * @returns {exonum.ConfigReference} ConfigReference instance
             */
            ConfigReference.create = function create(properties) {
                return new ConfigReference(properties);
            };
    
            /**
             * Encodes the specified ConfigReference message. Does not implicitly {@link exonum.ConfigReference.verify|verify} messages.
             * @function encode
             * @memberof exonum.ConfigReference
             * @static
             * @param {exonum.IConfigReference} message ConfigReference message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConfigReference.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actual_from != null && message.hasOwnProperty("actual_from"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.actual_from);
                if (message.cfg_hash != null && message.hasOwnProperty("cfg_hash"))
                    $root.exonum.Hash.encode(message.cfg_hash, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ConfigReference message, length delimited. Does not implicitly {@link exonum.ConfigReference.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.ConfigReference
             * @static
             * @param {exonum.IConfigReference} message ConfigReference message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConfigReference.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConfigReference message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.ConfigReference
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.ConfigReference} ConfigReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConfigReference.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.ConfigReference();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.actual_from = reader.uint64();
                        break;
                    case 2:
                        message.cfg_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ConfigReference message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.ConfigReference
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.ConfigReference} ConfigReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConfigReference.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConfigReference message.
             * @function verify
             * @memberof exonum.ConfigReference
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConfigReference.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actual_from != null && message.hasOwnProperty("actual_from"))
                    if (!$util.isInteger(message.actual_from) && !(message.actual_from && $util.isInteger(message.actual_from.low) && $util.isInteger(message.actual_from.high)))
                        return "actual_from: integer|Long expected";
                if (message.cfg_hash != null && message.hasOwnProperty("cfg_hash")) {
                    var error = $root.exonum.Hash.verify(message.cfg_hash);
                    if (error)
                        return "cfg_hash." + error;
                }
                return null;
            };
    
            /**
             * Creates a ConfigReference message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.ConfigReference
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.ConfigReference} ConfigReference
             */
            ConfigReference.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.ConfigReference)
                    return object;
                var message = new $root.exonum.ConfigReference();
                if (object.actual_from != null)
                    if ($util.Long)
                        (message.actual_from = $util.Long.fromValue(object.actual_from)).unsigned = true;
                    else if (typeof object.actual_from === "string")
                        message.actual_from = parseInt(object.actual_from, 10);
                    else if (typeof object.actual_from === "number")
                        message.actual_from = object.actual_from;
                    else if (typeof object.actual_from === "object")
                        message.actual_from = new $util.LongBits(object.actual_from.low >>> 0, object.actual_from.high >>> 0).toNumber(true);
                if (object.cfg_hash != null) {
                    if (typeof object.cfg_hash !== "object")
                        throw TypeError(".exonum.ConfigReference.cfg_hash: object expected");
                    message.cfg_hash = $root.exonum.Hash.fromObject(object.cfg_hash);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ConfigReference message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.ConfigReference
             * @static
             * @param {exonum.ConfigReference} message ConfigReference
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConfigReference.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.actual_from = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.actual_from = options.longs === String ? "0" : 0;
                    object.cfg_hash = null;
                }
                if (message.actual_from != null && message.hasOwnProperty("actual_from"))
                    if (typeof message.actual_from === "number")
                        object.actual_from = options.longs === String ? String(message.actual_from) : message.actual_from;
                    else
                        object.actual_from = options.longs === String ? $util.Long.prototype.toString.call(message.actual_from) : options.longs === Number ? new $util.LongBits(message.actual_from.low >>> 0, message.actual_from.high >>> 0).toNumber(true) : message.actual_from;
                if (message.cfg_hash != null && message.hasOwnProperty("cfg_hash"))
                    object.cfg_hash = $root.exonum.Hash.toObject(message.cfg_hash, options);
                return object;
            };
    
            /**
             * Converts this ConfigReference to JSON.
             * @function toJSON
             * @memberof exonum.ConfigReference
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConfigReference.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ConfigReference;
        })();
    
        exonum.TxLocation = (function() {
    
            /**
             * Properties of a TxLocation.
             * @memberof exonum
             * @interface ITxLocation
             * @property {number|Long|null} [block_height] TxLocation block_height
             * @property {number|Long|null} [position_in_block] TxLocation position_in_block
             */
    
            /**
             * Constructs a new TxLocation.
             * @memberof exonum
             * @classdesc Represents a TxLocation.
             * @implements ITxLocation
             * @constructor
             * @param {exonum.ITxLocation=} [properties] Properties to set
             */
            function TxLocation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TxLocation block_height.
             * @member {number|Long} block_height
             * @memberof exonum.TxLocation
             * @instance
             */
            TxLocation.prototype.block_height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TxLocation position_in_block.
             * @member {number|Long} position_in_block
             * @memberof exonum.TxLocation
             * @instance
             */
            TxLocation.prototype.position_in_block = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new TxLocation instance using the specified properties.
             * @function create
             * @memberof exonum.TxLocation
             * @static
             * @param {exonum.ITxLocation=} [properties] Properties to set
             * @returns {exonum.TxLocation} TxLocation instance
             */
            TxLocation.create = function create(properties) {
                return new TxLocation(properties);
            };
    
            /**
             * Encodes the specified TxLocation message. Does not implicitly {@link exonum.TxLocation.verify|verify} messages.
             * @function encode
             * @memberof exonum.TxLocation
             * @static
             * @param {exonum.ITxLocation} message TxLocation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxLocation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.block_height != null && message.hasOwnProperty("block_height"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.block_height);
                if (message.position_in_block != null && message.hasOwnProperty("position_in_block"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.position_in_block);
                return writer;
            };
    
            /**
             * Encodes the specified TxLocation message, length delimited. Does not implicitly {@link exonum.TxLocation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.TxLocation
             * @static
             * @param {exonum.ITxLocation} message TxLocation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxLocation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TxLocation message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.TxLocation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.TxLocation} TxLocation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxLocation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.TxLocation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.block_height = reader.uint64();
                        break;
                    case 2:
                        message.position_in_block = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TxLocation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.TxLocation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.TxLocation} TxLocation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxLocation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TxLocation message.
             * @function verify
             * @memberof exonum.TxLocation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxLocation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.block_height != null && message.hasOwnProperty("block_height"))
                    if (!$util.isInteger(message.block_height) && !(message.block_height && $util.isInteger(message.block_height.low) && $util.isInteger(message.block_height.high)))
                        return "block_height: integer|Long expected";
                if (message.position_in_block != null && message.hasOwnProperty("position_in_block"))
                    if (!$util.isInteger(message.position_in_block) && !(message.position_in_block && $util.isInteger(message.position_in_block.low) && $util.isInteger(message.position_in_block.high)))
                        return "position_in_block: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a TxLocation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.TxLocation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.TxLocation} TxLocation
             */
            TxLocation.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.TxLocation)
                    return object;
                var message = new $root.exonum.TxLocation();
                if (object.block_height != null)
                    if ($util.Long)
                        (message.block_height = $util.Long.fromValue(object.block_height)).unsigned = true;
                    else if (typeof object.block_height === "string")
                        message.block_height = parseInt(object.block_height, 10);
                    else if (typeof object.block_height === "number")
                        message.block_height = object.block_height;
                    else if (typeof object.block_height === "object")
                        message.block_height = new $util.LongBits(object.block_height.low >>> 0, object.block_height.high >>> 0).toNumber(true);
                if (object.position_in_block != null)
                    if ($util.Long)
                        (message.position_in_block = $util.Long.fromValue(object.position_in_block)).unsigned = true;
                    else if (typeof object.position_in_block === "string")
                        message.position_in_block = parseInt(object.position_in_block, 10);
                    else if (typeof object.position_in_block === "number")
                        message.position_in_block = object.position_in_block;
                    else if (typeof object.position_in_block === "object")
                        message.position_in_block = new $util.LongBits(object.position_in_block.low >>> 0, object.position_in_block.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a TxLocation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.TxLocation
             * @static
             * @param {exonum.TxLocation} message TxLocation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxLocation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.block_height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.block_height = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.position_in_block = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.position_in_block = options.longs === String ? "0" : 0;
                }
                if (message.block_height != null && message.hasOwnProperty("block_height"))
                    if (typeof message.block_height === "number")
                        object.block_height = options.longs === String ? String(message.block_height) : message.block_height;
                    else
                        object.block_height = options.longs === String ? $util.Long.prototype.toString.call(message.block_height) : options.longs === Number ? new $util.LongBits(message.block_height.low >>> 0, message.block_height.high >>> 0).toNumber(true) : message.block_height;
                if (message.position_in_block != null && message.hasOwnProperty("position_in_block"))
                    if (typeof message.position_in_block === "number")
                        object.position_in_block = options.longs === String ? String(message.position_in_block) : message.position_in_block;
                    else
                        object.position_in_block = options.longs === String ? $util.Long.prototype.toString.call(message.position_in_block) : options.longs === Number ? new $util.LongBits(message.position_in_block.low >>> 0, message.position_in_block.high >>> 0).toNumber(true) : message.position_in_block;
                return object;
            };
    
            /**
             * Converts this TxLocation to JSON.
             * @function toJSON
             * @memberof exonum.TxLocation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxLocation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TxLocation;
        })();
    
        exonum.TransactionResult = (function() {
    
            /**
             * Properties of a TransactionResult.
             * @memberof exonum
             * @interface ITransactionResult
             * @property {number|null} [status] TransactionResult status
             * @property {string|null} [description] TransactionResult description
             */
    
            /**
             * Constructs a new TransactionResult.
             * @memberof exonum
             * @classdesc Represents a TransactionResult.
             * @implements ITransactionResult
             * @constructor
             * @param {exonum.ITransactionResult=} [properties] Properties to set
             */
            function TransactionResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TransactionResult status.
             * @member {number} status
             * @memberof exonum.TransactionResult
             * @instance
             */
            TransactionResult.prototype.status = 0;
    
            /**
             * TransactionResult description.
             * @member {string} description
             * @memberof exonum.TransactionResult
             * @instance
             */
            TransactionResult.prototype.description = "";
    
            /**
             * Creates a new TransactionResult instance using the specified properties.
             * @function create
             * @memberof exonum.TransactionResult
             * @static
             * @param {exonum.ITransactionResult=} [properties] Properties to set
             * @returns {exonum.TransactionResult} TransactionResult instance
             */
            TransactionResult.create = function create(properties) {
                return new TransactionResult(properties);
            };
    
            /**
             * Encodes the specified TransactionResult message. Does not implicitly {@link exonum.TransactionResult.verify|verify} messages.
             * @function encode
             * @memberof exonum.TransactionResult
             * @static
             * @param {exonum.ITransactionResult} message TransactionResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                return writer;
            };
    
            /**
             * Encodes the specified TransactionResult message, length delimited. Does not implicitly {@link exonum.TransactionResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof exonum.TransactionResult
             * @static
             * @param {exonum.ITransactionResult} message TransactionResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransactionResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TransactionResult message from the specified reader or buffer.
             * @function decode
             * @memberof exonum.TransactionResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {exonum.TransactionResult} TransactionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.exonum.TransactionResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.uint32();
                        break;
                    case 2:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TransactionResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof exonum.TransactionResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {exonum.TransactionResult} TransactionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransactionResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TransactionResult message.
             * @function verify
             * @memberof exonum.TransactionResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TransactionResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };
    
            /**
             * Creates a TransactionResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof exonum.TransactionResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {exonum.TransactionResult} TransactionResult
             */
            TransactionResult.fromObject = function fromObject(object) {
                if (object instanceof $root.exonum.TransactionResult)
                    return object;
                var message = new $root.exonum.TransactionResult();
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };
    
            /**
             * Creates a plain object from a TransactionResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof exonum.TransactionResult
             * @static
             * @param {exonum.TransactionResult} message TransactionResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransactionResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.description = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };
    
            /**
             * Converts this TransactionResult to JSON.
             * @function toJSON
             * @memberof exonum.TransactionResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TransactionResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TransactionResult;
        })();
    
        return exonum;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.pipes_marking = (function() {
    
        /**
         * Namespace pipes_marking.
         * @exports pipes_marking
         * @namespace
         */
        var pipes_marking = {};
    
        pipes_marking.Pipe = (function() {
    
            /**
             * Properties of a Pipe.
             * @memberof pipes_marking
             * @interface IPipe
             * @property {exonum.IPublicKey|null} [key] Pipe key
             * @property {exonum.IPublicKey|null} [producer] Pipe producer
             * @property {boolean|null} [marked] Pipe marked
             * @property {number|null} [number] Pipe number
             * @property {number|null} [batch] Pipe batch
             * @property {number|null} [diameter] Pipe diameter
             * @property {number|null} [thickness] Pipe thickness
             * @property {number|null} [length] Pipe length
             * @property {string|null} [properties] Pipe properties
             * @property {number|Long|null} [history_len] Pipe history_len
             * @property {exonum.IHash|null} [history_hash] Pipe history_hash
             */
    
            /**
             * Constructs a new Pipe.
             * @memberof pipes_marking
             * @classdesc Represents a Pipe.
             * @implements IPipe
             * @constructor
             * @param {pipes_marking.IPipe=} [properties] Properties to set
             */
            function Pipe(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Pipe key.
             * @member {exonum.IPublicKey|null|undefined} key
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.key = null;
    
            /**
             * Pipe producer.
             * @member {exonum.IPublicKey|null|undefined} producer
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.producer = null;
    
            /**
             * Pipe marked.
             * @member {boolean} marked
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.marked = false;
    
            /**
             * Pipe number.
             * @member {number} number
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.number = 0;
    
            /**
             * Pipe batch.
             * @member {number} batch
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.batch = 0;
    
            /**
             * Pipe diameter.
             * @member {number} diameter
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.diameter = 0;
    
            /**
             * Pipe thickness.
             * @member {number} thickness
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.thickness = 0;
    
            /**
             * Pipe length.
             * @member {number} length
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.length = 0;
    
            /**
             * Pipe properties.
             * @member {string} properties
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.properties = "";
    
            /**
             * Pipe history_len.
             * @member {number|Long} history_len
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.history_len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Pipe history_hash.
             * @member {exonum.IHash|null|undefined} history_hash
             * @memberof pipes_marking.Pipe
             * @instance
             */
            Pipe.prototype.history_hash = null;
    
            /**
             * Creates a new Pipe instance using the specified properties.
             * @function create
             * @memberof pipes_marking.Pipe
             * @static
             * @param {pipes_marking.IPipe=} [properties] Properties to set
             * @returns {pipes_marking.Pipe} Pipe instance
             */
            Pipe.create = function create(properties) {
                return new Pipe(properties);
            };
    
            /**
             * Encodes the specified Pipe message. Does not implicitly {@link pipes_marking.Pipe.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.Pipe
             * @static
             * @param {pipes_marking.IPipe} message Pipe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pipe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    $root.exonum.PublicKey.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.producer != null && message.hasOwnProperty("producer"))
                    $root.exonum.PublicKey.encode(message.producer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.marked != null && message.hasOwnProperty("marked"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.marked);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.number);
                if (message.batch != null && message.hasOwnProperty("batch"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.batch);
                if (message.diameter != null && message.hasOwnProperty("diameter"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.diameter);
                if (message.thickness != null && message.hasOwnProperty("thickness"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.thickness);
                if (message.length != null && message.hasOwnProperty("length"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.length);
                if (message.properties != null && message.hasOwnProperty("properties"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.properties);
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.history_len);
                if (message.history_hash != null && message.hasOwnProperty("history_hash"))
                    $root.exonum.Hash.encode(message.history_hash, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Pipe message, length delimited. Does not implicitly {@link pipes_marking.Pipe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.Pipe
             * @static
             * @param {pipes_marking.IPipe} message Pipe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pipe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Pipe message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.Pipe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.Pipe} Pipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pipe.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.Pipe();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.producer = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.marked = reader.bool();
                        break;
                    case 4:
                        message.number = reader.uint32();
                        break;
                    case 5:
                        message.batch = reader.uint32();
                        break;
                    case 6:
                        message.diameter = reader.uint32();
                        break;
                    case 7:
                        message.thickness = reader.uint32();
                        break;
                    case 8:
                        message.length = reader.uint32();
                        break;
                    case 9:
                        message.properties = reader.string();
                        break;
                    case 14:
                        message.history_len = reader.uint64();
                        break;
                    case 15:
                        message.history_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Pipe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.Pipe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.Pipe} Pipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pipe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Pipe message.
             * @function verify
             * @memberof pipes_marking.Pipe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pipe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key")) {
                    var error = $root.exonum.PublicKey.verify(message.key);
                    if (error)
                        return "key." + error;
                }
                if (message.producer != null && message.hasOwnProperty("producer")) {
                    var error = $root.exonum.PublicKey.verify(message.producer);
                    if (error)
                        return "producer." + error;
                }
                if (message.marked != null && message.hasOwnProperty("marked"))
                    if (typeof message.marked !== "boolean")
                        return "marked: boolean expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.batch != null && message.hasOwnProperty("batch"))
                    if (!$util.isInteger(message.batch))
                        return "batch: integer expected";
                if (message.diameter != null && message.hasOwnProperty("diameter"))
                    if (!$util.isInteger(message.diameter))
                        return "diameter: integer expected";
                if (message.thickness != null && message.hasOwnProperty("thickness"))
                    if (!$util.isInteger(message.thickness))
                        return "thickness: integer expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (!$util.isInteger(message.length))
                        return "length: integer expected";
                if (message.properties != null && message.hasOwnProperty("properties"))
                    if (!$util.isString(message.properties))
                        return "properties: string expected";
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    if (!$util.isInteger(message.history_len) && !(message.history_len && $util.isInteger(message.history_len.low) && $util.isInteger(message.history_len.high)))
                        return "history_len: integer|Long expected";
                if (message.history_hash != null && message.hasOwnProperty("history_hash")) {
                    var error = $root.exonum.Hash.verify(message.history_hash);
                    if (error)
                        return "history_hash." + error;
                }
                return null;
            };
    
            /**
             * Creates a Pipe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.Pipe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.Pipe} Pipe
             */
            Pipe.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.Pipe)
                    return object;
                var message = new $root.pipes_marking.Pipe();
                if (object.key != null) {
                    if (typeof object.key !== "object")
                        throw TypeError(".pipes_marking.Pipe.key: object expected");
                    message.key = $root.exonum.PublicKey.fromObject(object.key);
                }
                if (object.producer != null) {
                    if (typeof object.producer !== "object")
                        throw TypeError(".pipes_marking.Pipe.producer: object expected");
                    message.producer = $root.exonum.PublicKey.fromObject(object.producer);
                }
                if (object.marked != null)
                    message.marked = Boolean(object.marked);
                if (object.number != null)
                    message.number = object.number >>> 0;
                if (object.batch != null)
                    message.batch = object.batch >>> 0;
                if (object.diameter != null)
                    message.diameter = object.diameter >>> 0;
                if (object.thickness != null)
                    message.thickness = object.thickness >>> 0;
                if (object.length != null)
                    message.length = object.length >>> 0;
                if (object.properties != null)
                    message.properties = String(object.properties);
                if (object.history_len != null)
                    if ($util.Long)
                        (message.history_len = $util.Long.fromValue(object.history_len)).unsigned = true;
                    else if (typeof object.history_len === "string")
                        message.history_len = parseInt(object.history_len, 10);
                    else if (typeof object.history_len === "number")
                        message.history_len = object.history_len;
                    else if (typeof object.history_len === "object")
                        message.history_len = new $util.LongBits(object.history_len.low >>> 0, object.history_len.high >>> 0).toNumber(true);
                if (object.history_hash != null) {
                    if (typeof object.history_hash !== "object")
                        throw TypeError(".pipes_marking.Pipe.history_hash: object expected");
                    message.history_hash = $root.exonum.Hash.fromObject(object.history_hash);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Pipe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.Pipe
             * @static
             * @param {pipes_marking.Pipe} message Pipe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pipe.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = null;
                    object.producer = null;
                    object.marked = false;
                    object.number = 0;
                    object.batch = 0;
                    object.diameter = 0;
                    object.thickness = 0;
                    object.length = 0;
                    object.properties = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.history_len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.history_len = options.longs === String ? "0" : 0;
                    object.history_hash = null;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = $root.exonum.PublicKey.toObject(message.key, options);
                if (message.producer != null && message.hasOwnProperty("producer"))
                    object.producer = $root.exonum.PublicKey.toObject(message.producer, options);
                if (message.marked != null && message.hasOwnProperty("marked"))
                    object.marked = message.marked;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.batch != null && message.hasOwnProperty("batch"))
                    object.batch = message.batch;
                if (message.diameter != null && message.hasOwnProperty("diameter"))
                    object.diameter = message.diameter;
                if (message.thickness != null && message.hasOwnProperty("thickness"))
                    object.thickness = message.thickness;
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = message.length;
                if (message.properties != null && message.hasOwnProperty("properties"))
                    object.properties = message.properties;
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    if (typeof message.history_len === "number")
                        object.history_len = options.longs === String ? String(message.history_len) : message.history_len;
                    else
                        object.history_len = options.longs === String ? $util.Long.prototype.toString.call(message.history_len) : options.longs === Number ? new $util.LongBits(message.history_len.low >>> 0, message.history_len.high >>> 0).toNumber(true) : message.history_len;
                if (message.history_hash != null && message.hasOwnProperty("history_hash"))
                    object.history_hash = $root.exonum.Hash.toObject(message.history_hash, options);
                return object;
            };
    
            /**
             * Converts this Pipe to JSON.
             * @function toJSON
             * @memberof pipes_marking.Pipe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pipe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Pipe;
        })();
    
        pipes_marking.Company = (function() {
    
            /**
             * Properties of a Company.
             * @memberof pipes_marking
             * @interface ICompany
             * @property {exonum.IPublicKey|null} [key] Company key
             * @property {boolean|null} [isProducer] Company isProducer
             * @property {string|null} [inn] Company inn
             * @property {string|null} [name] Company name
             * @property {string|null} [properties] Company properties
             * @property {number|Long|null} [history_len] Company history_len
             * @property {exonum.IHash|null} [history_hash] Company history_hash
             */
    
            /**
             * Constructs a new Company.
             * @memberof pipes_marking
             * @classdesc Represents a Company.
             * @implements ICompany
             * @constructor
             * @param {pipes_marking.ICompany=} [properties] Properties to set
             */
            function Company(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Company key.
             * @member {exonum.IPublicKey|null|undefined} key
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.key = null;
    
            /**
             * Company isProducer.
             * @member {boolean} isProducer
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.isProducer = false;
    
            /**
             * Company inn.
             * @member {string} inn
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.inn = "";
    
            /**
             * Company name.
             * @member {string} name
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.name = "";
    
            /**
             * Company properties.
             * @member {string} properties
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.properties = "";
    
            /**
             * Company history_len.
             * @member {number|Long} history_len
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.history_len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Company history_hash.
             * @member {exonum.IHash|null|undefined} history_hash
             * @memberof pipes_marking.Company
             * @instance
             */
            Company.prototype.history_hash = null;
    
            /**
             * Creates a new Company instance using the specified properties.
             * @function create
             * @memberof pipes_marking.Company
             * @static
             * @param {pipes_marking.ICompany=} [properties] Properties to set
             * @returns {pipes_marking.Company} Company instance
             */
            Company.create = function create(properties) {
                return new Company(properties);
            };
    
            /**
             * Encodes the specified Company message. Does not implicitly {@link pipes_marking.Company.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.Company
             * @static
             * @param {pipes_marking.ICompany} message Company message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Company.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    $root.exonum.PublicKey.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.isProducer != null && message.hasOwnProperty("isProducer"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isProducer);
                if (message.inn != null && message.hasOwnProperty("inn"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.inn);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                if (message.properties != null && message.hasOwnProperty("properties"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.properties);
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.history_len);
                if (message.history_hash != null && message.hasOwnProperty("history_hash"))
                    $root.exonum.Hash.encode(message.history_hash, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Company message, length delimited. Does not implicitly {@link pipes_marking.Company.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.Company
             * @static
             * @param {pipes_marking.ICompany} message Company message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Company.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Company message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.Company
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.Company} Company
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Company.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.Company();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.isProducer = reader.bool();
                        break;
                    case 3:
                        message.inn = reader.string();
                        break;
                    case 4:
                        message.name = reader.string();
                        break;
                    case 5:
                        message.properties = reader.string();
                        break;
                    case 6:
                        message.history_len = reader.uint64();
                        break;
                    case 7:
                        message.history_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Company message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.Company
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.Company} Company
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Company.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Company message.
             * @function verify
             * @memberof pipes_marking.Company
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Company.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key")) {
                    var error = $root.exonum.PublicKey.verify(message.key);
                    if (error)
                        return "key." + error;
                }
                if (message.isProducer != null && message.hasOwnProperty("isProducer"))
                    if (typeof message.isProducer !== "boolean")
                        return "isProducer: boolean expected";
                if (message.inn != null && message.hasOwnProperty("inn"))
                    if (!$util.isString(message.inn))
                        return "inn: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.properties != null && message.hasOwnProperty("properties"))
                    if (!$util.isString(message.properties))
                        return "properties: string expected";
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    if (!$util.isInteger(message.history_len) && !(message.history_len && $util.isInteger(message.history_len.low) && $util.isInteger(message.history_len.high)))
                        return "history_len: integer|Long expected";
                if (message.history_hash != null && message.hasOwnProperty("history_hash")) {
                    var error = $root.exonum.Hash.verify(message.history_hash);
                    if (error)
                        return "history_hash." + error;
                }
                return null;
            };
    
            /**
             * Creates a Company message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.Company
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.Company} Company
             */
            Company.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.Company)
                    return object;
                var message = new $root.pipes_marking.Company();
                if (object.key != null) {
                    if (typeof object.key !== "object")
                        throw TypeError(".pipes_marking.Company.key: object expected");
                    message.key = $root.exonum.PublicKey.fromObject(object.key);
                }
                if (object.isProducer != null)
                    message.isProducer = Boolean(object.isProducer);
                if (object.inn != null)
                    message.inn = String(object.inn);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.properties != null)
                    message.properties = String(object.properties);
                if (object.history_len != null)
                    if ($util.Long)
                        (message.history_len = $util.Long.fromValue(object.history_len)).unsigned = true;
                    else if (typeof object.history_len === "string")
                        message.history_len = parseInt(object.history_len, 10);
                    else if (typeof object.history_len === "number")
                        message.history_len = object.history_len;
                    else if (typeof object.history_len === "object")
                        message.history_len = new $util.LongBits(object.history_len.low >>> 0, object.history_len.high >>> 0).toNumber(true);
                if (object.history_hash != null) {
                    if (typeof object.history_hash !== "object")
                        throw TypeError(".pipes_marking.Company.history_hash: object expected");
                    message.history_hash = $root.exonum.Hash.fromObject(object.history_hash);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Company message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.Company
             * @static
             * @param {pipes_marking.Company} message Company
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Company.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = null;
                    object.isProducer = false;
                    object.inn = "";
                    object.name = "";
                    object.properties = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.history_len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.history_len = options.longs === String ? "0" : 0;
                    object.history_hash = null;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = $root.exonum.PublicKey.toObject(message.key, options);
                if (message.isProducer != null && message.hasOwnProperty("isProducer"))
                    object.isProducer = message.isProducer;
                if (message.inn != null && message.hasOwnProperty("inn"))
                    object.inn = message.inn;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.properties != null && message.hasOwnProperty("properties"))
                    object.properties = message.properties;
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    if (typeof message.history_len === "number")
                        object.history_len = options.longs === String ? String(message.history_len) : message.history_len;
                    else
                        object.history_len = options.longs === String ? $util.Long.prototype.toString.call(message.history_len) : options.longs === Number ? new $util.LongBits(message.history_len.low >>> 0, message.history_len.high >>> 0).toNumber(true) : message.history_len;
                if (message.history_hash != null && message.hasOwnProperty("history_hash"))
                    object.history_hash = $root.exonum.Hash.toObject(message.history_hash, options);
                return object;
            };
    
            /**
             * Converts this Company to JSON.
             * @function toJSON
             * @memberof pipes_marking.Company
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Company.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Company;
        })();
    
        pipes_marking.Employee = (function() {
    
            /**
             * Properties of an Employee.
             * @memberof pipes_marking
             * @interface IEmployee
             * @property {exonum.IPublicKey|null} [key] Employee key
             * @property {exonum.IPublicKey|null} [company] Employee company
             * @property {string|null} [name] Employee name
             * @property {boolean|null} [canCreate] Employee canCreate
             * @property {boolean|null} [canMark] Employee canMark
             * @property {boolean|null} [canSold] Employee canSold
             * @property {boolean|null} [isActive] Employee isActive
             * @property {number|Long|null} [history_len] Employee history_len
             * @property {exonum.IHash|null} [history_hash] Employee history_hash
             */
    
            /**
             * Constructs a new Employee.
             * @memberof pipes_marking
             * @classdesc Represents an Employee.
             * @implements IEmployee
             * @constructor
             * @param {pipes_marking.IEmployee=} [properties] Properties to set
             */
            function Employee(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Employee key.
             * @member {exonum.IPublicKey|null|undefined} key
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.key = null;
    
            /**
             * Employee company.
             * @member {exonum.IPublicKey|null|undefined} company
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.company = null;
    
            /**
             * Employee name.
             * @member {string} name
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.name = "";
    
            /**
             * Employee canCreate.
             * @member {boolean} canCreate
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.canCreate = false;
    
            /**
             * Employee canMark.
             * @member {boolean} canMark
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.canMark = false;
    
            /**
             * Employee canSold.
             * @member {boolean} canSold
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.canSold = false;
    
            /**
             * Employee isActive.
             * @member {boolean} isActive
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.isActive = false;
    
            /**
             * Employee history_len.
             * @member {number|Long} history_len
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.history_len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Employee history_hash.
             * @member {exonum.IHash|null|undefined} history_hash
             * @memberof pipes_marking.Employee
             * @instance
             */
            Employee.prototype.history_hash = null;
    
            /**
             * Creates a new Employee instance using the specified properties.
             * @function create
             * @memberof pipes_marking.Employee
             * @static
             * @param {pipes_marking.IEmployee=} [properties] Properties to set
             * @returns {pipes_marking.Employee} Employee instance
             */
            Employee.create = function create(properties) {
                return new Employee(properties);
            };
    
            /**
             * Encodes the specified Employee message. Does not implicitly {@link pipes_marking.Employee.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.Employee
             * @static
             * @param {pipes_marking.IEmployee} message Employee message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Employee.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    $root.exonum.PublicKey.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.company != null && message.hasOwnProperty("company"))
                    $root.exonum.PublicKey.encode(message.company, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.canCreate != null && message.hasOwnProperty("canCreate"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canCreate);
                if (message.canMark != null && message.hasOwnProperty("canMark"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.canMark);
                if (message.canSold != null && message.hasOwnProperty("canSold"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.canSold);
                if (message.isActive != null && message.hasOwnProperty("isActive"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isActive);
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.history_len);
                if (message.history_hash != null && message.hasOwnProperty("history_hash"))
                    $root.exonum.Hash.encode(message.history_hash, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Employee message, length delimited. Does not implicitly {@link pipes_marking.Employee.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.Employee
             * @static
             * @param {pipes_marking.IEmployee} message Employee message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Employee.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Employee message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.Employee
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.Employee} Employee
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Employee.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.Employee();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.company = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.canCreate = reader.bool();
                        break;
                    case 5:
                        message.canMark = reader.bool();
                        break;
                    case 6:
                        message.canSold = reader.bool();
                        break;
                    case 7:
                        message.isActive = reader.bool();
                        break;
                    case 8:
                        message.history_len = reader.uint64();
                        break;
                    case 9:
                        message.history_hash = $root.exonum.Hash.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Employee message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.Employee
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.Employee} Employee
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Employee.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Employee message.
             * @function verify
             * @memberof pipes_marking.Employee
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Employee.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key")) {
                    var error = $root.exonum.PublicKey.verify(message.key);
                    if (error)
                        return "key." + error;
                }
                if (message.company != null && message.hasOwnProperty("company")) {
                    var error = $root.exonum.PublicKey.verify(message.company);
                    if (error)
                        return "company." + error;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.canCreate != null && message.hasOwnProperty("canCreate"))
                    if (typeof message.canCreate !== "boolean")
                        return "canCreate: boolean expected";
                if (message.canMark != null && message.hasOwnProperty("canMark"))
                    if (typeof message.canMark !== "boolean")
                        return "canMark: boolean expected";
                if (message.canSold != null && message.hasOwnProperty("canSold"))
                    if (typeof message.canSold !== "boolean")
                        return "canSold: boolean expected";
                if (message.isActive != null && message.hasOwnProperty("isActive"))
                    if (typeof message.isActive !== "boolean")
                        return "isActive: boolean expected";
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    if (!$util.isInteger(message.history_len) && !(message.history_len && $util.isInteger(message.history_len.low) && $util.isInteger(message.history_len.high)))
                        return "history_len: integer|Long expected";
                if (message.history_hash != null && message.hasOwnProperty("history_hash")) {
                    var error = $root.exonum.Hash.verify(message.history_hash);
                    if (error)
                        return "history_hash." + error;
                }
                return null;
            };
    
            /**
             * Creates an Employee message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.Employee
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.Employee} Employee
             */
            Employee.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.Employee)
                    return object;
                var message = new $root.pipes_marking.Employee();
                if (object.key != null) {
                    if (typeof object.key !== "object")
                        throw TypeError(".pipes_marking.Employee.key: object expected");
                    message.key = $root.exonum.PublicKey.fromObject(object.key);
                }
                if (object.company != null) {
                    if (typeof object.company !== "object")
                        throw TypeError(".pipes_marking.Employee.company: object expected");
                    message.company = $root.exonum.PublicKey.fromObject(object.company);
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.canCreate != null)
                    message.canCreate = Boolean(object.canCreate);
                if (object.canMark != null)
                    message.canMark = Boolean(object.canMark);
                if (object.canSold != null)
                    message.canSold = Boolean(object.canSold);
                if (object.isActive != null)
                    message.isActive = Boolean(object.isActive);
                if (object.history_len != null)
                    if ($util.Long)
                        (message.history_len = $util.Long.fromValue(object.history_len)).unsigned = true;
                    else if (typeof object.history_len === "string")
                        message.history_len = parseInt(object.history_len, 10);
                    else if (typeof object.history_len === "number")
                        message.history_len = object.history_len;
                    else if (typeof object.history_len === "object")
                        message.history_len = new $util.LongBits(object.history_len.low >>> 0, object.history_len.high >>> 0).toNumber(true);
                if (object.history_hash != null) {
                    if (typeof object.history_hash !== "object")
                        throw TypeError(".pipes_marking.Employee.history_hash: object expected");
                    message.history_hash = $root.exonum.Hash.fromObject(object.history_hash);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Employee message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.Employee
             * @static
             * @param {pipes_marking.Employee} message Employee
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Employee.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = null;
                    object.company = null;
                    object.name = "";
                    object.canCreate = false;
                    object.canMark = false;
                    object.canSold = false;
                    object.isActive = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.history_len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.history_len = options.longs === String ? "0" : 0;
                    object.history_hash = null;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = $root.exonum.PublicKey.toObject(message.key, options);
                if (message.company != null && message.hasOwnProperty("company"))
                    object.company = $root.exonum.PublicKey.toObject(message.company, options);
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.canCreate != null && message.hasOwnProperty("canCreate"))
                    object.canCreate = message.canCreate;
                if (message.canMark != null && message.hasOwnProperty("canMark"))
                    object.canMark = message.canMark;
                if (message.canSold != null && message.hasOwnProperty("canSold"))
                    object.canSold = message.canSold;
                if (message.isActive != null && message.hasOwnProperty("isActive"))
                    object.isActive = message.isActive;
                if (message.history_len != null && message.hasOwnProperty("history_len"))
                    if (typeof message.history_len === "number")
                        object.history_len = options.longs === String ? String(message.history_len) : message.history_len;
                    else
                        object.history_len = options.longs === String ? $util.Long.prototype.toString.call(message.history_len) : options.longs === Number ? new $util.LongBits(message.history_len.low >>> 0, message.history_len.high >>> 0).toNumber(true) : message.history_len;
                if (message.history_hash != null && message.hasOwnProperty("history_hash"))
                    object.history_hash = $root.exonum.Hash.toObject(message.history_hash, options);
                return object;
            };
    
            /**
             * Converts this Employee to JSON.
             * @function toJSON
             * @memberof pipes_marking.Employee
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Employee.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Employee;
        })();
    
        pipes_marking.CreateCompany = (function() {
    
            /**
             * Properties of a CreateCompany.
             * @memberof pipes_marking
             * @interface ICreateCompany
             * @property {boolean|null} [isProducer] CreateCompany isProducer
             * @property {string|null} [inn] CreateCompany inn
             * @property {string|null} [name] CreateCompany name
             * @property {string|null} [properties] CreateCompany properties
             * @property {number|Long|null} [timestamp] CreateCompany timestamp
             */
    
            /**
             * Constructs a new CreateCompany.
             * @memberof pipes_marking
             * @classdesc Represents a CreateCompany.
             * @implements ICreateCompany
             * @constructor
             * @param {pipes_marking.ICreateCompany=} [properties] Properties to set
             */
            function CreateCompany(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CreateCompany isProducer.
             * @member {boolean} isProducer
             * @memberof pipes_marking.CreateCompany
             * @instance
             */
            CreateCompany.prototype.isProducer = false;
    
            /**
             * CreateCompany inn.
             * @member {string} inn
             * @memberof pipes_marking.CreateCompany
             * @instance
             */
            CreateCompany.prototype.inn = "";
    
            /**
             * CreateCompany name.
             * @member {string} name
             * @memberof pipes_marking.CreateCompany
             * @instance
             */
            CreateCompany.prototype.name = "";
    
            /**
             * CreateCompany properties.
             * @member {string} properties
             * @memberof pipes_marking.CreateCompany
             * @instance
             */
            CreateCompany.prototype.properties = "";
    
            /**
             * CreateCompany timestamp.
             * @member {number|Long} timestamp
             * @memberof pipes_marking.CreateCompany
             * @instance
             */
            CreateCompany.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new CreateCompany instance using the specified properties.
             * @function create
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {pipes_marking.ICreateCompany=} [properties] Properties to set
             * @returns {pipes_marking.CreateCompany} CreateCompany instance
             */
            CreateCompany.create = function create(properties) {
                return new CreateCompany(properties);
            };
    
            /**
             * Encodes the specified CreateCompany message. Does not implicitly {@link pipes_marking.CreateCompany.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {pipes_marking.ICreateCompany} message CreateCompany message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCompany.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isProducer != null && message.hasOwnProperty("isProducer"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isProducer);
                if (message.inn != null && message.hasOwnProperty("inn"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inn);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.properties != null && message.hasOwnProperty("properties"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.properties);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified CreateCompany message, length delimited. Does not implicitly {@link pipes_marking.CreateCompany.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {pipes_marking.ICreateCompany} message CreateCompany message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCompany.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreateCompany message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.CreateCompany} CreateCompany
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCompany.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.CreateCompany();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isProducer = reader.bool();
                        break;
                    case 2:
                        message.inn = reader.string();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.properties = reader.string();
                        break;
                    case 5:
                        message.timestamp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CreateCompany message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.CreateCompany} CreateCompany
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCompany.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreateCompany message.
             * @function verify
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateCompany.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isProducer != null && message.hasOwnProperty("isProducer"))
                    if (typeof message.isProducer !== "boolean")
                        return "isProducer: boolean expected";
                if (message.inn != null && message.hasOwnProperty("inn"))
                    if (!$util.isString(message.inn))
                        return "inn: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.properties != null && message.hasOwnProperty("properties"))
                    if (!$util.isString(message.properties))
                        return "properties: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a CreateCompany message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.CreateCompany} CreateCompany
             */
            CreateCompany.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.CreateCompany)
                    return object;
                var message = new $root.pipes_marking.CreateCompany();
                if (object.isProducer != null)
                    message.isProducer = Boolean(object.isProducer);
                if (object.inn != null)
                    message.inn = String(object.inn);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.properties != null)
                    message.properties = String(object.properties);
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a CreateCompany message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.CreateCompany
             * @static
             * @param {pipes_marking.CreateCompany} message CreateCompany
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateCompany.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.isProducer = false;
                    object.inn = "";
                    object.name = "";
                    object.properties = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.isProducer != null && message.hasOwnProperty("isProducer"))
                    object.isProducer = message.isProducer;
                if (message.inn != null && message.hasOwnProperty("inn"))
                    object.inn = message.inn;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.properties != null && message.hasOwnProperty("properties"))
                    object.properties = message.properties;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };
    
            /**
             * Converts this CreateCompany to JSON.
             * @function toJSON
             * @memberof pipes_marking.CreateCompany
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateCompany.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CreateCompany;
        })();
    
        pipes_marking.CreateEmployee = (function() {
    
            /**
             * Properties of a CreateEmployee.
             * @memberof pipes_marking
             * @interface ICreateEmployee
             * @property {exonum.IPublicKey|null} [key] CreateEmployee key
             * @property {string|null} [name] CreateEmployee name
             * @property {boolean|null} [canCreate] CreateEmployee canCreate
             * @property {boolean|null} [canMark] CreateEmployee canMark
             * @property {boolean|null} [canSold] CreateEmployee canSold
             * @property {number|Long|null} [timestamp] CreateEmployee timestamp
             */
    
            /**
             * Constructs a new CreateEmployee.
             * @memberof pipes_marking
             * @classdesc Represents a CreateEmployee.
             * @implements ICreateEmployee
             * @constructor
             * @param {pipes_marking.ICreateEmployee=} [properties] Properties to set
             */
            function CreateEmployee(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CreateEmployee key.
             * @member {exonum.IPublicKey|null|undefined} key
             * @memberof pipes_marking.CreateEmployee
             * @instance
             */
            CreateEmployee.prototype.key = null;
    
            /**
             * CreateEmployee name.
             * @member {string} name
             * @memberof pipes_marking.CreateEmployee
             * @instance
             */
            CreateEmployee.prototype.name = "";
    
            /**
             * CreateEmployee canCreate.
             * @member {boolean} canCreate
             * @memberof pipes_marking.CreateEmployee
             * @instance
             */
            CreateEmployee.prototype.canCreate = false;
    
            /**
             * CreateEmployee canMark.
             * @member {boolean} canMark
             * @memberof pipes_marking.CreateEmployee
             * @instance
             */
            CreateEmployee.prototype.canMark = false;
    
            /**
             * CreateEmployee canSold.
             * @member {boolean} canSold
             * @memberof pipes_marking.CreateEmployee
             * @instance
             */
            CreateEmployee.prototype.canSold = false;
    
            /**
             * CreateEmployee timestamp.
             * @member {number|Long} timestamp
             * @memberof pipes_marking.CreateEmployee
             * @instance
             */
            CreateEmployee.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new CreateEmployee instance using the specified properties.
             * @function create
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {pipes_marking.ICreateEmployee=} [properties] Properties to set
             * @returns {pipes_marking.CreateEmployee} CreateEmployee instance
             */
            CreateEmployee.create = function create(properties) {
                return new CreateEmployee(properties);
            };
    
            /**
             * Encodes the specified CreateEmployee message. Does not implicitly {@link pipes_marking.CreateEmployee.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {pipes_marking.ICreateEmployee} message CreateEmployee message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEmployee.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    $root.exonum.PublicKey.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.canCreate != null && message.hasOwnProperty("canCreate"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.canCreate);
                if (message.canMark != null && message.hasOwnProperty("canMark"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canMark);
                if (message.canSold != null && message.hasOwnProperty("canSold"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.canSold);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified CreateEmployee message, length delimited. Does not implicitly {@link pipes_marking.CreateEmployee.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {pipes_marking.ICreateEmployee} message CreateEmployee message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEmployee.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreateEmployee message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.CreateEmployee} CreateEmployee
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEmployee.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.CreateEmployee();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.canCreate = reader.bool();
                        break;
                    case 4:
                        message.canMark = reader.bool();
                        break;
                    case 5:
                        message.canSold = reader.bool();
                        break;
                    case 6:
                        message.timestamp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CreateEmployee message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.CreateEmployee} CreateEmployee
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEmployee.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreateEmployee message.
             * @function verify
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateEmployee.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key")) {
                    var error = $root.exonum.PublicKey.verify(message.key);
                    if (error)
                        return "key." + error;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.canCreate != null && message.hasOwnProperty("canCreate"))
                    if (typeof message.canCreate !== "boolean")
                        return "canCreate: boolean expected";
                if (message.canMark != null && message.hasOwnProperty("canMark"))
                    if (typeof message.canMark !== "boolean")
                        return "canMark: boolean expected";
                if (message.canSold != null && message.hasOwnProperty("canSold"))
                    if (typeof message.canSold !== "boolean")
                        return "canSold: boolean expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a CreateEmployee message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.CreateEmployee} CreateEmployee
             */
            CreateEmployee.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.CreateEmployee)
                    return object;
                var message = new $root.pipes_marking.CreateEmployee();
                if (object.key != null) {
                    if (typeof object.key !== "object")
                        throw TypeError(".pipes_marking.CreateEmployee.key: object expected");
                    message.key = $root.exonum.PublicKey.fromObject(object.key);
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.canCreate != null)
                    message.canCreate = Boolean(object.canCreate);
                if (object.canMark != null)
                    message.canMark = Boolean(object.canMark);
                if (object.canSold != null)
                    message.canSold = Boolean(object.canSold);
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a CreateEmployee message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.CreateEmployee
             * @static
             * @param {pipes_marking.CreateEmployee} message CreateEmployee
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateEmployee.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = null;
                    object.name = "";
                    object.canCreate = false;
                    object.canMark = false;
                    object.canSold = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = $root.exonum.PublicKey.toObject(message.key, options);
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.canCreate != null && message.hasOwnProperty("canCreate"))
                    object.canCreate = message.canCreate;
                if (message.canMark != null && message.hasOwnProperty("canMark"))
                    object.canMark = message.canMark;
                if (message.canSold != null && message.hasOwnProperty("canSold"))
                    object.canSold = message.canSold;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };
    
            /**
             * Converts this CreateEmployee to JSON.
             * @function toJSON
             * @memberof pipes_marking.CreateEmployee
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateEmployee.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CreateEmployee;
        })();
    
        pipes_marking.CreatePipe = (function() {
    
            /**
             * Properties of a CreatePipe.
             * @memberof pipes_marking
             * @interface ICreatePipe
             * @property {number|null} [number] CreatePipe number
             * @property {number|null} [batch] CreatePipe batch
             * @property {number|null} [diameter] CreatePipe diameter
             * @property {number|null} [thickness] CreatePipe thickness
             * @property {number|null} [length] CreatePipe length
             * @property {string|null} [properties] CreatePipe properties
             * @property {number|Long|null} [timestamp] CreatePipe timestamp
             */
    
            /**
             * Constructs a new CreatePipe.
             * @memberof pipes_marking
             * @classdesc Represents a CreatePipe.
             * @implements ICreatePipe
             * @constructor
             * @param {pipes_marking.ICreatePipe=} [properties] Properties to set
             */
            function CreatePipe(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CreatePipe number.
             * @member {number} number
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.number = 0;
    
            /**
             * CreatePipe batch.
             * @member {number} batch
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.batch = 0;
    
            /**
             * CreatePipe diameter.
             * @member {number} diameter
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.diameter = 0;
    
            /**
             * CreatePipe thickness.
             * @member {number} thickness
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.thickness = 0;
    
            /**
             * CreatePipe length.
             * @member {number} length
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.length = 0;
    
            /**
             * CreatePipe properties.
             * @member {string} properties
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.properties = "";
    
            /**
             * CreatePipe timestamp.
             * @member {number|Long} timestamp
             * @memberof pipes_marking.CreatePipe
             * @instance
             */
            CreatePipe.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new CreatePipe instance using the specified properties.
             * @function create
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {pipes_marking.ICreatePipe=} [properties] Properties to set
             * @returns {pipes_marking.CreatePipe} CreatePipe instance
             */
            CreatePipe.create = function create(properties) {
                return new CreatePipe(properties);
            };
    
            /**
             * Encodes the specified CreatePipe message. Does not implicitly {@link pipes_marking.CreatePipe.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {pipes_marking.ICreatePipe} message CreatePipe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePipe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.number);
                if (message.batch != null && message.hasOwnProperty("batch"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.batch);
                if (message.diameter != null && message.hasOwnProperty("diameter"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.diameter);
                if (message.thickness != null && message.hasOwnProperty("thickness"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.thickness);
                if (message.length != null && message.hasOwnProperty("length"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.length);
                if (message.properties != null && message.hasOwnProperty("properties"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.properties);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified CreatePipe message, length delimited. Does not implicitly {@link pipes_marking.CreatePipe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {pipes_marking.ICreatePipe} message CreatePipe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePipe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreatePipe message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.CreatePipe} CreatePipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePipe.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.CreatePipe();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.uint32();
                        break;
                    case 2:
                        message.batch = reader.uint32();
                        break;
                    case 3:
                        message.diameter = reader.uint32();
                        break;
                    case 4:
                        message.thickness = reader.uint32();
                        break;
                    case 5:
                        message.length = reader.uint32();
                        break;
                    case 6:
                        message.properties = reader.string();
                        break;
                    case 7:
                        message.timestamp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CreatePipe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.CreatePipe} CreatePipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePipe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreatePipe message.
             * @function verify
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreatePipe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.batch != null && message.hasOwnProperty("batch"))
                    if (!$util.isInteger(message.batch))
                        return "batch: integer expected";
                if (message.diameter != null && message.hasOwnProperty("diameter"))
                    if (!$util.isInteger(message.diameter))
                        return "diameter: integer expected";
                if (message.thickness != null && message.hasOwnProperty("thickness"))
                    if (!$util.isInteger(message.thickness))
                        return "thickness: integer expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (!$util.isInteger(message.length))
                        return "length: integer expected";
                if (message.properties != null && message.hasOwnProperty("properties"))
                    if (!$util.isString(message.properties))
                        return "properties: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a CreatePipe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.CreatePipe} CreatePipe
             */
            CreatePipe.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.CreatePipe)
                    return object;
                var message = new $root.pipes_marking.CreatePipe();
                if (object.number != null)
                    message.number = object.number >>> 0;
                if (object.batch != null)
                    message.batch = object.batch >>> 0;
                if (object.diameter != null)
                    message.diameter = object.diameter >>> 0;
                if (object.thickness != null)
                    message.thickness = object.thickness >>> 0;
                if (object.length != null)
                    message.length = object.length >>> 0;
                if (object.properties != null)
                    message.properties = String(object.properties);
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a CreatePipe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.CreatePipe
             * @static
             * @param {pipes_marking.CreatePipe} message CreatePipe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePipe.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.number = 0;
                    object.batch = 0;
                    object.diameter = 0;
                    object.thickness = 0;
                    object.length = 0;
                    object.properties = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.batch != null && message.hasOwnProperty("batch"))
                    object.batch = message.batch;
                if (message.diameter != null && message.hasOwnProperty("diameter"))
                    object.diameter = message.diameter;
                if (message.thickness != null && message.hasOwnProperty("thickness"))
                    object.thickness = message.thickness;
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = message.length;
                if (message.properties != null && message.hasOwnProperty("properties"))
                    object.properties = message.properties;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };
    
            /**
             * Converts this CreatePipe to JSON.
             * @function toJSON
             * @memberof pipes_marking.CreatePipe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreatePipe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CreatePipe;
        })();
    
        pipes_marking.MarkPipe = (function() {
    
            /**
             * Properties of a MarkPipe.
             * @memberof pipes_marking
             * @interface IMarkPipe
             * @property {exonum.IPublicKey|null} [pipe] MarkPipe pipe
             * @property {number|Long|null} [timestamp] MarkPipe timestamp
             */
    
            /**
             * Constructs a new MarkPipe.
             * @memberof pipes_marking
             * @classdesc Represents a MarkPipe.
             * @implements IMarkPipe
             * @constructor
             * @param {pipes_marking.IMarkPipe=} [properties] Properties to set
             */
            function MarkPipe(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MarkPipe pipe.
             * @member {exonum.IPublicKey|null|undefined} pipe
             * @memberof pipes_marking.MarkPipe
             * @instance
             */
            MarkPipe.prototype.pipe = null;
    
            /**
             * MarkPipe timestamp.
             * @member {number|Long} timestamp
             * @memberof pipes_marking.MarkPipe
             * @instance
             */
            MarkPipe.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new MarkPipe instance using the specified properties.
             * @function create
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {pipes_marking.IMarkPipe=} [properties] Properties to set
             * @returns {pipes_marking.MarkPipe} MarkPipe instance
             */
            MarkPipe.create = function create(properties) {
                return new MarkPipe(properties);
            };
    
            /**
             * Encodes the specified MarkPipe message. Does not implicitly {@link pipes_marking.MarkPipe.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {pipes_marking.IMarkPipe} message MarkPipe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarkPipe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pipe != null && message.hasOwnProperty("pipe"))
                    $root.exonum.PublicKey.encode(message.pipe, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified MarkPipe message, length delimited. Does not implicitly {@link pipes_marking.MarkPipe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {pipes_marking.IMarkPipe} message MarkPipe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarkPipe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MarkPipe message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.MarkPipe} MarkPipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarkPipe.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.MarkPipe();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pipe = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.timestamp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MarkPipe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.MarkPipe} MarkPipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarkPipe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MarkPipe message.
             * @function verify
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MarkPipe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pipe != null && message.hasOwnProperty("pipe")) {
                    var error = $root.exonum.PublicKey.verify(message.pipe);
                    if (error)
                        return "pipe." + error;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a MarkPipe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.MarkPipe} MarkPipe
             */
            MarkPipe.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.MarkPipe)
                    return object;
                var message = new $root.pipes_marking.MarkPipe();
                if (object.pipe != null) {
                    if (typeof object.pipe !== "object")
                        throw TypeError(".pipes_marking.MarkPipe.pipe: object expected");
                    message.pipe = $root.exonum.PublicKey.fromObject(object.pipe);
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a MarkPipe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.MarkPipe
             * @static
             * @param {pipes_marking.MarkPipe} message MarkPipe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MarkPipe.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.pipe = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.pipe != null && message.hasOwnProperty("pipe"))
                    object.pipe = $root.exonum.PublicKey.toObject(message.pipe, options);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };
    
            /**
             * Converts this MarkPipe to JSON.
             * @function toJSON
             * @memberof pipes_marking.MarkPipe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MarkPipe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MarkPipe;
        })();
    
        pipes_marking.ChangePipeOwner = (function() {
    
            /**
             * Properties of a ChangePipeOwner.
             * @memberof pipes_marking
             * @interface IChangePipeOwner
             * @property {exonum.IPublicKey|null} [pipe] ChangePipeOwner pipe
             * @property {exonum.IPublicKey|null} [newOwner] ChangePipeOwner newOwner
             * @property {string|null} [comment] ChangePipeOwner comment
             * @property {number|Long|null} [timestamp] ChangePipeOwner timestamp
             */
    
            /**
             * Constructs a new ChangePipeOwner.
             * @memberof pipes_marking
             * @classdesc Represents a ChangePipeOwner.
             * @implements IChangePipeOwner
             * @constructor
             * @param {pipes_marking.IChangePipeOwner=} [properties] Properties to set
             */
            function ChangePipeOwner(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChangePipeOwner pipe.
             * @member {exonum.IPublicKey|null|undefined} pipe
             * @memberof pipes_marking.ChangePipeOwner
             * @instance
             */
            ChangePipeOwner.prototype.pipe = null;
    
            /**
             * ChangePipeOwner newOwner.
             * @member {exonum.IPublicKey|null|undefined} newOwner
             * @memberof pipes_marking.ChangePipeOwner
             * @instance
             */
            ChangePipeOwner.prototype.newOwner = null;
    
            /**
             * ChangePipeOwner comment.
             * @member {string} comment
             * @memberof pipes_marking.ChangePipeOwner
             * @instance
             */
            ChangePipeOwner.prototype.comment = "";
    
            /**
             * ChangePipeOwner timestamp.
             * @member {number|Long} timestamp
             * @memberof pipes_marking.ChangePipeOwner
             * @instance
             */
            ChangePipeOwner.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new ChangePipeOwner instance using the specified properties.
             * @function create
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {pipes_marking.IChangePipeOwner=} [properties] Properties to set
             * @returns {pipes_marking.ChangePipeOwner} ChangePipeOwner instance
             */
            ChangePipeOwner.create = function create(properties) {
                return new ChangePipeOwner(properties);
            };
    
            /**
             * Encodes the specified ChangePipeOwner message. Does not implicitly {@link pipes_marking.ChangePipeOwner.verify|verify} messages.
             * @function encode
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {pipes_marking.IChangePipeOwner} message ChangePipeOwner message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangePipeOwner.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pipe != null && message.hasOwnProperty("pipe"))
                    $root.exonum.PublicKey.encode(message.pipe, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.newOwner != null && message.hasOwnProperty("newOwner"))
                    $root.exonum.PublicKey.encode(message.newOwner, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.comment != null && message.hasOwnProperty("comment"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.comment);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified ChangePipeOwner message, length delimited. Does not implicitly {@link pipes_marking.ChangePipeOwner.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {pipes_marking.IChangePipeOwner} message ChangePipeOwner message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangePipeOwner.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChangePipeOwner message from the specified reader or buffer.
             * @function decode
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pipes_marking.ChangePipeOwner} ChangePipeOwner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangePipeOwner.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pipes_marking.ChangePipeOwner();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pipe = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.newOwner = $root.exonum.PublicKey.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.comment = reader.string();
                        break;
                    case 4:
                        message.timestamp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChangePipeOwner message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pipes_marking.ChangePipeOwner} ChangePipeOwner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangePipeOwner.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChangePipeOwner message.
             * @function verify
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangePipeOwner.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pipe != null && message.hasOwnProperty("pipe")) {
                    var error = $root.exonum.PublicKey.verify(message.pipe);
                    if (error)
                        return "pipe." + error;
                }
                if (message.newOwner != null && message.hasOwnProperty("newOwner")) {
                    var error = $root.exonum.PublicKey.verify(message.newOwner);
                    if (error)
                        return "newOwner." + error;
                }
                if (message.comment != null && message.hasOwnProperty("comment"))
                    if (!$util.isString(message.comment))
                        return "comment: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a ChangePipeOwner message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pipes_marking.ChangePipeOwner} ChangePipeOwner
             */
            ChangePipeOwner.fromObject = function fromObject(object) {
                if (object instanceof $root.pipes_marking.ChangePipeOwner)
                    return object;
                var message = new $root.pipes_marking.ChangePipeOwner();
                if (object.pipe != null) {
                    if (typeof object.pipe !== "object")
                        throw TypeError(".pipes_marking.ChangePipeOwner.pipe: object expected");
                    message.pipe = $root.exonum.PublicKey.fromObject(object.pipe);
                }
                if (object.newOwner != null) {
                    if (typeof object.newOwner !== "object")
                        throw TypeError(".pipes_marking.ChangePipeOwner.newOwner: object expected");
                    message.newOwner = $root.exonum.PublicKey.fromObject(object.newOwner);
                }
                if (object.comment != null)
                    message.comment = String(object.comment);
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a ChangePipeOwner message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pipes_marking.ChangePipeOwner
             * @static
             * @param {pipes_marking.ChangePipeOwner} message ChangePipeOwner
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangePipeOwner.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.pipe = null;
                    object.newOwner = null;
                    object.comment = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.pipe != null && message.hasOwnProperty("pipe"))
                    object.pipe = $root.exonum.PublicKey.toObject(message.pipe, options);
                if (message.newOwner != null && message.hasOwnProperty("newOwner"))
                    object.newOwner = $root.exonum.PublicKey.toObject(message.newOwner, options);
                if (message.comment != null && message.hasOwnProperty("comment"))
                    object.comment = message.comment;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };
    
            /**
             * Converts this ChangePipeOwner to JSON.
             * @function toJSON
             * @memberof pipes_marking.ChangePipeOwner
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangePipeOwner.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChangePipeOwner;
        })();
    
        return pipes_marking;
    })();

    return $root;
});
