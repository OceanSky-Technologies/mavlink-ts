/* eslint-disable */

// source: mavsdk_options.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.mavsdk.options.AsyncType', null, global);
goog.exportSymbol('proto.mavsdk.options.asyncType', null, global);
goog.exportSymbol('proto.mavsdk.options.defaultValue', null, global);
goog.exportSymbol('proto.mavsdk.options.epsilon', null, global);
goog.exportSymbol('proto.mavsdk.options.isFinite', null, global);
/**
 * @enum {number}
 */
proto.mavsdk.options.AsyncType = {
  ASYNC: 0,
  SYNC: 1,
  BOTH: 2
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `defaultValue`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.mavsdk.options.defaultValue = new jspb.ExtensionFieldInfo(
    50000,
    {defaultValue: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50000] = new jspb.ExtensionFieldBinaryInfo(
    proto.mavsdk.options.defaultValue,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50000] = proto.mavsdk.options.defaultValue;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `epsilon`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.mavsdk.options.epsilon = new jspb.ExtensionFieldInfo(
    50001,
    {epsilon: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50001] = new jspb.ExtensionFieldBinaryInfo(
    proto.mavsdk.options.epsilon,
    jspb.BinaryReader.prototype.readDouble,
    jspb.BinaryWriter.prototype.writeDouble,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50001] = proto.mavsdk.options.epsilon;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `asyncType`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mavsdk.options.AsyncType>}
 */
proto.mavsdk.options.asyncType = new jspb.ExtensionFieldInfo(
    50000,
    {asyncType: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[50000] = new jspb.ExtensionFieldBinaryInfo(
    proto.mavsdk.options.asyncType,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[50000] = proto.mavsdk.options.asyncType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `isFinite`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.mavsdk.options.isFinite = new jspb.ExtensionFieldInfo(
    50001,
    {isFinite: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[50001] = new jspb.ExtensionFieldBinaryInfo(
    proto.mavsdk.options.isFinite,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[50001] = proto.mavsdk.options.isFinite;

goog.object.extend(exports, proto.mavsdk.options);


// fix autocompletion
module.exports = exports;
