/* eslint-disable */

// source: core/core.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.mavsdk.rpc.core.ConnectionState', null, global);
goog.exportSymbol('proto.mavsdk.rpc.core.ConnectionStateResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.core.SubscribeConnectionStateRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.core.SubscribeConnectionStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.displayName = 'proto.mavsdk.rpc.core.SubscribeConnectionStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.core.ConnectionStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.core.ConnectionStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.core.ConnectionStateResponse.displayName = 'proto.mavsdk.rpc.core.ConnectionStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.displayName = 'proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.displayName = 'proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.core.ConnectionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.core.ConnectionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.core.ConnectionState.displayName = 'proto.mavsdk.rpc.core.ConnectionState';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.core.SubscribeConnectionStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.core.SubscribeConnectionStateRequest}
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.core.SubscribeConnectionStateRequest;
  return proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.core.SubscribeConnectionStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.core.SubscribeConnectionStateRequest}
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.core.SubscribeConnectionStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.SubscribeConnectionStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.core.ConnectionStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.core.ConnectionStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionState: (f = msg.getConnectionState()) && proto.mavsdk.rpc.core.ConnectionState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.core.ConnectionStateResponse}
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.core.ConnectionStateResponse;
  return proto.mavsdk.rpc.core.ConnectionStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.core.ConnectionStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.core.ConnectionStateResponse}
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.core.ConnectionState;
      reader.readMessage(value,proto.mavsdk.rpc.core.ConnectionState.deserializeBinaryFromReader);
      msg.setConnectionState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.core.ConnectionStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.core.ConnectionStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.core.ConnectionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConnectionState connection_state = 1;
 * @return {?proto.mavsdk.rpc.core.ConnectionState}
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.prototype.getConnectionState = function() {
  return /** @type{?proto.mavsdk.rpc.core.ConnectionState} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.core.ConnectionState, 1));
};


/**
 * @param {?proto.mavsdk.rpc.core.ConnectionState|undefined} value
 * @return {!proto.mavsdk.rpc.core.ConnectionStateResponse} returns this
*/
proto.mavsdk.rpc.core.ConnectionStateResponse.prototype.setConnectionState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.core.ConnectionStateResponse} returns this
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.prototype.clearConnectionState = function() {
  return this.setConnectionState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.core.ConnectionStateResponse.prototype.hasConnectionState = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeoutS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest;
  return proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeoutS(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeoutS();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double timeout_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.prototype.getTimeoutS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest} returns this
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutRequest.prototype.setTimeoutS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse;
  return proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.SetMavlinkTimeoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.core.ConnectionState.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.core.ConnectionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.core.ConnectionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.ConnectionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    isConnected: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.core.ConnectionState}
 */
proto.mavsdk.rpc.core.ConnectionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.core.ConnectionState;
  return proto.mavsdk.rpc.core.ConnectionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.core.ConnectionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.core.ConnectionState}
 */
proto.mavsdk.rpc.core.ConnectionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConnected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.core.ConnectionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.core.ConnectionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.core.ConnectionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.core.ConnectionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsConnected();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool is_connected = 2;
 * @return {boolean}
 */
proto.mavsdk.rpc.core.ConnectionState.prototype.getIsConnected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.core.ConnectionState} returns this
 */
proto.mavsdk.rpc.core.ConnectionState.prototype.setIsConnected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.mavsdk.rpc.core);


// fix autocompletion
module.exports = exports;
