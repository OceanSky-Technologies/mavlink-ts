/* eslint-disable */

// source: telemetry_server/telemetry_server.proto
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

var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');
goog.object.extend(proto, mavsdk_options_pb);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.AccelerationFrd', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.AngularVelocityBody', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Battery', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Covariance', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.DistanceSensor', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.EulerAngle', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.FixType', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.FixedwingMetrics', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.GpsInfo', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.GroundTruth', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Heading', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Imu', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.LandedState', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Odometry', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Position', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PositionBody', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PositionNed', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PositionVelocityNed', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishHomeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishHomeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishInAirRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishPositionRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishPositionResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.Quaternion', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.RawGps', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.RcStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.ScaledPressure', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.StatusText', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.StatusTextType', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.TelemetryServerResult', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.Result', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.VelocityBody', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.VelocityNed', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry_server.VtolState', null, global);
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
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishPositionRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishHomeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishHomeRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishInAirRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishInAirRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishImuRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishImuRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest';
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
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishPositionResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishHomeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishHomeResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishImuResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishImuResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse';
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
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.displayName = 'proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse';
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
proto.mavsdk.rpc.telemetry_server.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Position.displayName = 'proto.mavsdk.rpc.telemetry_server.Position';
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
proto.mavsdk.rpc.telemetry_server.Heading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Heading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Heading.displayName = 'proto.mavsdk.rpc.telemetry_server.Heading';
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
proto.mavsdk.rpc.telemetry_server.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Quaternion.displayName = 'proto.mavsdk.rpc.telemetry_server.Quaternion';
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
proto.mavsdk.rpc.telemetry_server.EulerAngle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.EulerAngle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.EulerAngle.displayName = 'proto.mavsdk.rpc.telemetry_server.EulerAngle';
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
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.AngularVelocityBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.displayName = 'proto.mavsdk.rpc.telemetry_server.AngularVelocityBody';
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
proto.mavsdk.rpc.telemetry_server.GpsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.GpsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.GpsInfo.displayName = 'proto.mavsdk.rpc.telemetry_server.GpsInfo';
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
proto.mavsdk.rpc.telemetry_server.RawGps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.RawGps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.RawGps.displayName = 'proto.mavsdk.rpc.telemetry_server.RawGps';
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
proto.mavsdk.rpc.telemetry_server.Battery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Battery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Battery.displayName = 'proto.mavsdk.rpc.telemetry_server.Battery';
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
proto.mavsdk.rpc.telemetry_server.RcStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.RcStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.RcStatus.displayName = 'proto.mavsdk.rpc.telemetry_server.RcStatus';
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
proto.mavsdk.rpc.telemetry_server.StatusText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.StatusText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.StatusText.displayName = 'proto.mavsdk.rpc.telemetry_server.StatusText';
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
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.displayName = 'proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget';
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
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.displayName = 'proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus';
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
proto.mavsdk.rpc.telemetry_server.Covariance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.telemetry_server.Covariance.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Covariance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Covariance.displayName = 'proto.mavsdk.rpc.telemetry_server.Covariance';
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
proto.mavsdk.rpc.telemetry_server.VelocityBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.VelocityBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.VelocityBody.displayName = 'proto.mavsdk.rpc.telemetry_server.VelocityBody';
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
proto.mavsdk.rpc.telemetry_server.PositionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PositionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PositionBody.displayName = 'proto.mavsdk.rpc.telemetry_server.PositionBody';
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
proto.mavsdk.rpc.telemetry_server.Odometry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Odometry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Odometry.displayName = 'proto.mavsdk.rpc.telemetry_server.Odometry';
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
proto.mavsdk.rpc.telemetry_server.DistanceSensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.DistanceSensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.DistanceSensor.displayName = 'proto.mavsdk.rpc.telemetry_server.DistanceSensor';
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
proto.mavsdk.rpc.telemetry_server.ScaledPressure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.ScaledPressure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.ScaledPressure.displayName = 'proto.mavsdk.rpc.telemetry_server.ScaledPressure';
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
proto.mavsdk.rpc.telemetry_server.PositionNed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PositionNed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PositionNed.displayName = 'proto.mavsdk.rpc.telemetry_server.PositionNed';
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
proto.mavsdk.rpc.telemetry_server.VelocityNed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.VelocityNed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.VelocityNed.displayName = 'proto.mavsdk.rpc.telemetry_server.VelocityNed';
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
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.PositionVelocityNed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.displayName = 'proto.mavsdk.rpc.telemetry_server.PositionVelocityNed';
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
proto.mavsdk.rpc.telemetry_server.GroundTruth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.GroundTruth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.GroundTruth.displayName = 'proto.mavsdk.rpc.telemetry_server.GroundTruth';
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
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.FixedwingMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.displayName = 'proto.mavsdk.rpc.telemetry_server.FixedwingMetrics';
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
proto.mavsdk.rpc.telemetry_server.AccelerationFrd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.AccelerationFrd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.AccelerationFrd.displayName = 'proto.mavsdk.rpc.telemetry_server.AccelerationFrd';
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
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.displayName = 'proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd';
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
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.displayName = 'proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd';
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
proto.mavsdk.rpc.telemetry_server.Imu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.Imu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.Imu.displayName = 'proto.mavsdk.rpc.telemetry_server.Imu';
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
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.displayName = 'proto.mavsdk.rpc.telemetry_server.TelemetryServerResult';
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
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.mavsdk.rpc.telemetry_server.Position.toObject(includeInstance, f),
    velocityNed: (f = msg.getVelocityNed()) && proto.mavsdk.rpc.telemetry_server.VelocityNed.toObject(includeInstance, f),
    heading: (f = msg.getHeading()) && proto.mavsdk.rpc.telemetry_server.Heading.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishPositionRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Position;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry_server.VelocityNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.VelocityNed.deserializeBinaryFromReader);
      msg.setVelocityNed(value);
      break;
    case 3:
      var value = new proto.mavsdk.rpc.telemetry_server.Heading;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Heading.deserializeBinaryFromReader);
      msg.setHeading(value);
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
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Position.serializeBinaryToWriter
    );
  }
  f = message.getVelocityNed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry_server.VelocityNed.serializeBinaryToWriter
    );
  }
  f = message.getHeading();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mavsdk.rpc.telemetry_server.Heading.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Position}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.getPosition = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Position} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Position, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Position|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VelocityNed velocity_ned = 2;
 * @return {?proto.mavsdk.rpc.telemetry_server.VelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.getVelocityNed = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.VelocityNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.VelocityNed, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.VelocityNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.setVelocityNed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.clearVelocityNed = function() {
  return this.setVelocityNed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.hasVelocityNed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Heading heading = 3;
 * @return {?proto.mavsdk.rpc.telemetry_server.Heading}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.getHeading = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Heading} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Heading, 3));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Heading|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.setHeading = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.clearHeading = function() {
  return this.setHeading(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionRequest.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    home: (f = msg.getHome()) && proto.mavsdk.rpc.telemetry_server.Position.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishHomeRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Position;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Position.deserializeBinaryFromReader);
      msg.setHome(value);
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
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHome();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position home = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Position}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.prototype.getHome = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Position} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Position, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Position|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.prototype.setHome = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.prototype.clearHome = function() {
  return this.setHome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeRequest.prototype.hasHome = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    battery: (f = msg.getBattery()) && proto.mavsdk.rpc.telemetry_server.Battery.toObject(includeInstance, f),
    rcReceiverStatus: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    gyroStatus: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    accelStatus: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    magStatus: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    gpsStatus: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Battery;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Battery.deserializeBinaryFromReader);
      msg.setBattery(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRcReceiverStatus(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGyroStatus(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccelStatus(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMagStatus(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGpsStatus(value);
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
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBattery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Battery.serializeBinaryToWriter
    );
  }
  f = message.getRcReceiverStatus();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getGyroStatus();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAccelStatus();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMagStatus();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getGpsStatus();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional Battery battery = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Battery}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.getBattery = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Battery} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Battery, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Battery|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.setBattery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.clearBattery = function() {
  return this.setBattery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.hasBattery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool rc_receiver_status = 2;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.getRcReceiverStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.setRcReceiverStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool gyro_status = 3;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.getGyroStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.setGyroStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool accel_status = 4;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.getAccelStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.setAccelStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool mag_status = 5;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.getMagStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.setMagStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool gps_status = 6;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.getGpsStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusRequest.prototype.setGpsStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vtolState: jspb.Message.getFieldWithDefault(msg, 1, 0),
    landedState: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.VtolState} */ (reader.readEnum());
      msg.setVtolState(value);
      break;
    case 2:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.LandedState} */ (reader.readEnum());
      msg.setLandedState(value);
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
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVtolState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLandedState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional VtolState vtol_state = 1;
 * @return {!proto.mavsdk.rpc.telemetry_server.VtolState}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.prototype.getVtolState = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.VtolState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.VtolState} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.prototype.setVtolState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional LandedState landed_state = 2;
 * @return {!proto.mavsdk.rpc.telemetry_server.LandedState}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.prototype.getLandedState = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.LandedState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.LandedState} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest.prototype.setLandedState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishInAirRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    isInAir: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishInAirRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishInAirRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishInAirRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishInAirRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInAir(value);
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
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishInAirRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsInAir();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_in_air = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.prototype.getIsInAir = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishInAirRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishInAirRequest.prototype.setIsInAir = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    landedState: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.LandedState} */ (reader.readEnum());
      msg.setLandedState(value);
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
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLandedState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional LandedState landed_state = 1;
 * @return {!proto.mavsdk.rpc.telemetry_server.LandedState}
 */
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.prototype.getLandedState = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.LandedState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.LandedState} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishLandedStateRequest.prototype.setLandedState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawGps: (f = msg.getRawGps()) && proto.mavsdk.rpc.telemetry_server.RawGps.toObject(includeInstance, f),
    gpsInfo: (f = msg.getGpsInfo()) && proto.mavsdk.rpc.telemetry_server.GpsInfo.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.RawGps;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.RawGps.deserializeBinaryFromReader);
      msg.setRawGps(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry_server.GpsInfo;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.GpsInfo.deserializeBinaryFromReader);
      msg.setGpsInfo(value);
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
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawGps();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.RawGps.serializeBinaryToWriter
    );
  }
  f = message.getGpsInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry_server.GpsInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RawGps raw_gps = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.RawGps}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.getRawGps = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.RawGps} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.RawGps, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.RawGps|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.setRawGps = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.clearRawGps = function() {
  return this.setRawGps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.hasRawGps = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GpsInfo gps_info = 2;
 * @return {?proto.mavsdk.rpc.telemetry_server.GpsInfo}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.getGpsInfo = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.GpsInfo} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.GpsInfo, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.GpsInfo|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.setGpsInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.clearGpsInfo = function() {
  return this.setGpsInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsRequest.prototype.hasGpsInfo = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    battery: (f = msg.getBattery()) && proto.mavsdk.rpc.telemetry_server.Battery.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Battery;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Battery.deserializeBinaryFromReader);
      msg.setBattery(value);
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
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBattery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Battery.serializeBinaryToWriter
    );
  }
};


/**
 * optional Battery battery = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Battery}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.prototype.getBattery = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Battery} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Battery, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Battery|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.prototype.setBattery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.prototype.clearBattery = function() {
  return this.setBattery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryRequest.prototype.hasBattery = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcStatus: (f = msg.getRcStatus()) && proto.mavsdk.rpc.telemetry_server.RcStatus.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.RcStatus;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.RcStatus.deserializeBinaryFromReader);
      msg.setRcStatus(value);
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
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRcStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.RcStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional RcStatus rc_status = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.RcStatus}
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.prototype.getRcStatus = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.RcStatus} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.RcStatus, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.RcStatus|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.prototype.setRcStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.prototype.clearRcStatus = function() {
  return this.setRcStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishRcStatusRequest.prototype.hasRcStatus = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusText: (f = msg.getStatusText()) && proto.mavsdk.rpc.telemetry_server.StatusText.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.StatusText;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.StatusText.deserializeBinaryFromReader);
      msg.setStatusText(value);
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
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.StatusText.serializeBinaryToWriter
    );
  }
};


/**
 * optional StatusText status_text = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.StatusText}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.prototype.getStatusText = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.StatusText} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.StatusText, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.StatusText|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.prototype.setStatusText = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.prototype.clearStatusText = function() {
  return this.setStatusText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextRequest.prototype.hasStatusText = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    odometry: (f = msg.getOdometry()) && proto.mavsdk.rpc.telemetry_server.Odometry.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Odometry;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Odometry.deserializeBinaryFromReader);
      msg.setOdometry(value);
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
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOdometry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Odometry.serializeBinaryToWriter
    );
  }
};


/**
 * optional Odometry odometry = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Odometry}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.prototype.getOdometry = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Odometry} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Odometry, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Odometry|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.prototype.setOdometry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.prototype.clearOdometry = function() {
  return this.setOdometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryRequest.prototype.hasOdometry = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionVelocityNed: (f = msg.getPositionVelocityNed()) && proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.PositionVelocityNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.deserializeBinaryFromReader);
      msg.setPositionVelocityNed(value);
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
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionVelocityNed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionVelocityNed position_velocity_ned = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.PositionVelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.prototype.getPositionVelocityNed = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.PositionVelocityNed, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.PositionVelocityNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.prototype.setPositionVelocityNed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.prototype.clearPositionVelocityNed = function() {
  return this.setPositionVelocityNed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest.prototype.hasPositionVelocityNed = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groundTruth: (f = msg.getGroundTruth()) && proto.mavsdk.rpc.telemetry_server.GroundTruth.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.GroundTruth;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.GroundTruth.deserializeBinaryFromReader);
      msg.setGroundTruth(value);
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
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundTruth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.GroundTruth.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroundTruth ground_truth = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.GroundTruth}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.prototype.getGroundTruth = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.GroundTruth} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.GroundTruth, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.GroundTruth|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.prototype.setGroundTruth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.prototype.clearGroundTruth = function() {
  return this.setGroundTruth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthRequest.prototype.hasGroundTruth = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imu: (f = msg.getImu()) && proto.mavsdk.rpc.telemetry_server.Imu.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishImuRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Imu;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Imu.deserializeBinaryFromReader);
      msg.setImu(value);
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
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Imu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Imu imu = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Imu}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.prototype.getImu = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Imu} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Imu, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Imu|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuRequest.prototype.hasImu = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imu: (f = msg.getImu()) && proto.mavsdk.rpc.telemetry_server.Imu.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Imu;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Imu.deserializeBinaryFromReader);
      msg.setImu(value);
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
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Imu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Imu imu = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Imu}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.prototype.getImu = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Imu} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Imu, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Imu|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuRequest.prototype.hasImu = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imu: (f = msg.getImu()) && proto.mavsdk.rpc.telemetry_server.Imu.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.Imu;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Imu.deserializeBinaryFromReader);
      msg.setImu(value);
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
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.Imu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Imu imu = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.Imu}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.prototype.getImu = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Imu} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Imu, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Imu|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuRequest.prototype.hasImu = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeUs: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeUs(value);
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
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeUs();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 time_us = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.prototype.getTimeUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest.prototype.setTimeUs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    distanceSensor: (f = msg.getDistanceSensor()) && proto.mavsdk.rpc.telemetry_server.DistanceSensor.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest;
  return proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.DistanceSensor;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.DistanceSensor.deserializeBinaryFromReader);
      msg.setDistanceSensor(value);
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
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistanceSensor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.DistanceSensor.serializeBinaryToWriter
    );
  }
};


/**
 * optional DistanceSensor distance_sensor = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.DistanceSensor}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.prototype.getDistanceSensor = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.DistanceSensor} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.DistanceSensor, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.DistanceSensor|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.prototype.setDistanceSensor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.prototype.clearDistanceSensor = function() {
  return this.setDistanceSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest.prototype.hasDistanceSensor = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishPositionResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishHomeResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishHomeResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishHomeResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishSysStatusResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawGpsResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishBatteryResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishStatusTextResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishOdometryResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishGroundTruthResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishImuResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishImuResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishScaledImuResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishRawImuResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryServerResult: (f = msg.getTelemetryServerResult()) && proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse;
  return proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader);
      msg.setTelemetryServerResult(value);
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
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryServerResult telemetry_server_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.prototype.getTelemetryServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.TelemetryServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.TelemetryServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse} returns this
*/
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.prototype.setTelemetryServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse} returns this
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.prototype.clearTelemetryServerResult = function() {
  return this.setTelemetryServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse.prototype.hasTelemetryServerResult = function() {
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
proto.mavsdk.rpc.telemetry_server.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    absoluteAltitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    relativeAltitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Position}
 */
proto.mavsdk.rpc.telemetry_server.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Position;
  return proto.mavsdk.rpc.telemetry_server.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Position}
 */
proto.mavsdk.rpc.telemetry_server.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitudeDeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitudeDeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAbsoluteAltitudeM(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRelativeAltitudeM(value);
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
proto.mavsdk.rpc.telemetry_server.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAbsoluteAltitudeM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getRelativeAltitudeM();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional double latitude_deg = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Position} returns this
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Position} returns this
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float absolute_altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Position} returns this
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float relative_altitude_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.getRelativeAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Position} returns this
 */
proto.mavsdk.rpc.telemetry_server.Position.prototype.setRelativeAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.mavsdk.rpc.telemetry_server.Heading.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Heading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Heading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Heading.toObject = function(includeInstance, msg) {
  var f, obj = {
    headingDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Heading}
 */
proto.mavsdk.rpc.telemetry_server.Heading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Heading;
  return proto.mavsdk.rpc.telemetry_server.Heading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Heading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Heading}
 */
proto.mavsdk.rpc.telemetry_server.Heading.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeadingDeg(value);
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
proto.mavsdk.rpc.telemetry_server.Heading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Heading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Heading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Heading.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadingDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double heading_deg = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Heading.prototype.getHeadingDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Heading} returns this
 */
proto.mavsdk.rpc.telemetry_server.Heading.prototype.setHeadingDeg = function(value) {
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
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.toObject = function(includeInstance, msg) {
  var f, obj = {
    w: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    timestampUs: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Quaternion;
  return proto.mavsdk.rpc.telemetry_server.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setW(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUs(value);
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
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getW();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTimestampUs();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional float w = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float x = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float y = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float z = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 timestamp_us = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry_server.Quaternion.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.EulerAngle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.EulerAngle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.toObject = function(includeInstance, msg) {
  var f, obj = {
    rollDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pitchDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    yawDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    timestampUs: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.EulerAngle}
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.EulerAngle;
  return proto.mavsdk.rpc.telemetry_server.EulerAngle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.EulerAngle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.EulerAngle}
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRollDeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitchDeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYawDeg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUs(value);
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
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.EulerAngle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.EulerAngle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRollDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPitchDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getYawDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getTimestampUs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional float roll_deg = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.getRollDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.setRollDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float pitch_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.getPitchDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.setPitchDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float yaw_deg = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.getYawDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.setYawDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint64 timestamp_us = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry_server.EulerAngle.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    rollRadS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pitchRadS: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    yawRadS: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.AngularVelocityBody;
  return proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRollRadS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitchRadS(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYawRadS(value);
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
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRollRadS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPitchRadS();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getYawRadS();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float roll_rad_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.getRollRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.setRollRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float pitch_rad_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.getPitchRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.setPitchRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float yaw_rad_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.getYawRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.prototype.setYawRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.GpsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.GpsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.GpsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    numSatellites: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fixType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.GpsInfo}
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.GpsInfo;
  return proto.mavsdk.rpc.telemetry_server.GpsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.GpsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.GpsInfo}
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumSatellites(value);
      break;
    case 2:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.FixType} */ (reader.readEnum());
      msg.setFixType(value);
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
proto.mavsdk.rpc.telemetry_server.GpsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.GpsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.GpsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumSatellites();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFixType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int32 num_satellites = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.prototype.getNumSatellites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.GpsInfo} returns this
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.prototype.setNumSatellites = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FixType fix_type = 2;
 * @return {!proto.mavsdk.rpc.telemetry_server.FixType}
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.prototype.getFixType = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.FixType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.FixType} value
 * @return {!proto.mavsdk.rpc.telemetry_server.GpsInfo} returns this
 */
proto.mavsdk.rpc.telemetry_server.GpsInfo.prototype.setFixType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.RawGps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.RawGps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.RawGps.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampUs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    latitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    longitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    absoluteAltitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    hdop: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    vdop: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    velocityMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    cogDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    altitudeEllipsoidM: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    horizontalUncertaintyM: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    verticalUncertaintyM: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    velocityUncertaintyMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    headingUncertaintyDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    yawDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.RawGps;
  return proto.mavsdk.rpc.telemetry_server.RawGps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.RawGps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitudeDeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitudeDeg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAbsoluteAltitudeM(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHdop(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVdop(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVelocityMS(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCogDeg(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitudeEllipsoidM(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHorizontalUncertaintyM(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVerticalUncertaintyM(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVelocityUncertaintyMS(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeadingUncertaintyDeg(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYawDeg(value);
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
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.RawGps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.RawGps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.RawGps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampUs();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLatitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLongitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAbsoluteAltitudeM();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getHdop();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getVdop();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getVelocityMS();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getCogDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getAltitudeEllipsoidM();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getHorizontalUncertaintyM();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getVerticalUncertaintyM();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getVelocityUncertaintyMS();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getHeadingUncertaintyDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getYawDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
};


/**
 * optional uint64 timestamp_us = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double latitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double longitude_deg = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float absolute_altitude_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float hdop = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getHdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setHdop = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float vdop = 6;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getVdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setVdop = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float velocity_m_s = 7;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getVelocityMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setVelocityMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float cog_deg = 8;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getCogDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setCogDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float altitude_ellipsoid_m = 9;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getAltitudeEllipsoidM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setAltitudeEllipsoidM = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float horizontal_uncertainty_m = 10;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getHorizontalUncertaintyM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setHorizontalUncertaintyM = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float vertical_uncertainty_m = 11;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getVerticalUncertaintyM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setVerticalUncertaintyM = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float velocity_uncertainty_m_s = 12;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getVelocityUncertaintyMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setVelocityUncertaintyMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float heading_uncertainty_deg = 13;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getHeadingUncertaintyDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setHeadingUncertaintyDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float yaw_deg = 14;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.getYawDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry_server.RawGps.prototype.setYawDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
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
proto.mavsdk.rpc.telemetry_server.Battery.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Battery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Battery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Battery.toObject = function(includeInstance, msg) {
  var f, obj = {
    voltageV: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    remainingPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Battery}
 */
proto.mavsdk.rpc.telemetry_server.Battery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Battery;
  return proto.mavsdk.rpc.telemetry_server.Battery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Battery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Battery}
 */
proto.mavsdk.rpc.telemetry_server.Battery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVoltageV(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRemainingPercent(value);
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
proto.mavsdk.rpc.telemetry_server.Battery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Battery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Battery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Battery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoltageV();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRemainingPercent();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float voltage_v = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Battery.prototype.getVoltageV = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Battery} returns this
 */
proto.mavsdk.rpc.telemetry_server.Battery.prototype.setVoltageV = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float remaining_percent = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Battery.prototype.getRemainingPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Battery} returns this
 */
proto.mavsdk.rpc.telemetry_server.Battery.prototype.setRemainingPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.RcStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.RcStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    wasAvailableOnce: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isAvailable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    signalStrengthPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.RcStatus}
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.RcStatus;
  return proto.mavsdk.rpc.telemetry_server.RcStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.RcStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.RcStatus}
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWasAvailableOnce(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAvailable(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSignalStrengthPercent(value);
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
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.RcStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.RcStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWasAvailableOnce();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIsAvailable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSignalStrengthPercent();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional bool was_available_once = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.getWasAvailableOnce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RcStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.setWasAvailableOnce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_available = 2;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.getIsAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RcStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.setIsAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float signal_strength_percent = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.getSignalStrengthPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.RcStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.RcStatus.prototype.setSignalStrengthPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.StatusText.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.StatusText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.StatusText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.StatusText.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.mavsdk.rpc.telemetry_server.StatusText}
 */
proto.mavsdk.rpc.telemetry_server.StatusText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.StatusText;
  return proto.mavsdk.rpc.telemetry_server.StatusText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.StatusText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.StatusText}
 */
proto.mavsdk.rpc.telemetry_server.StatusText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.StatusTextType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.mavsdk.rpc.telemetry_server.StatusText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.StatusText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.StatusText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.StatusText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional StatusTextType type = 1;
 * @return {!proto.mavsdk.rpc.telemetry_server.StatusTextType}
 */
proto.mavsdk.rpc.telemetry_server.StatusText.prototype.getType = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.StatusTextType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.StatusTextType} value
 * @return {!proto.mavsdk.rpc.telemetry_server.StatusText} returns this
 */
proto.mavsdk.rpc.telemetry_server.StatusText.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.mavsdk.rpc.telemetry_server.StatusText.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.telemetry_server.StatusText} returns this
 */
proto.mavsdk.rpc.telemetry_server.StatusText.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.repeatedFields_ = [2];



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
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: jspb.Message.getFieldWithDefault(msg, 1, 0),
    controlsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget;
  return proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroup(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addControls(values[i]);
      }
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
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getControlsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * optional int32 group = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.getGroup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.setGroup = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated float controls = 2;
 * @return {!Array<number>}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.getControlsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.setControlsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.addControls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorControlTarget.prototype.clearControlsList = function() {
  return this.setControlsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.repeatedFields_ = [2];



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
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actuatorList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus;
  return proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActive(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addActuator(values[i]);
      }
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
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getActuatorList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * optional uint32 active = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.getActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.setActive = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated float actuator = 2;
 * @return {!Array<number>}
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.getActuatorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.setActuatorList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.addActuator = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry_server.ActuatorOutputStatus.prototype.clearActuatorList = function() {
  return this.setActuatorList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.telemetry_server.Covariance.repeatedFields_ = [1];



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
proto.mavsdk.rpc.telemetry_server.Covariance.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Covariance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Covariance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Covariance.toObject = function(includeInstance, msg) {
  var f, obj = {
    covarianceMatrixList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Covariance}
 */
proto.mavsdk.rpc.telemetry_server.Covariance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Covariance;
  return proto.mavsdk.rpc.telemetry_server.Covariance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Covariance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Covariance}
 */
proto.mavsdk.rpc.telemetry_server.Covariance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCovarianceMatrix(values[i]);
      }
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
proto.mavsdk.rpc.telemetry_server.Covariance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Covariance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Covariance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Covariance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCovarianceMatrixList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float covariance_matrix = 1;
 * @return {!Array<number>}
 */
proto.mavsdk.rpc.telemetry_server.Covariance.prototype.getCovarianceMatrixList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Covariance} returns this
 */
proto.mavsdk.rpc.telemetry_server.Covariance.prototype.setCovarianceMatrixList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.telemetry_server.Covariance} returns this
 */
proto.mavsdk.rpc.telemetry_server.Covariance.prototype.addCovarianceMatrix = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.telemetry_server.Covariance} returns this
 */
proto.mavsdk.rpc.telemetry_server.Covariance.prototype.clearCovarianceMatrixList = function() {
  return this.setCovarianceMatrixList([]);
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
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.VelocityBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.VelocityBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    xMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    yMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    zMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityBody}
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.VelocityBody;
  return proto.mavsdk.rpc.telemetry_server.VelocityBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.VelocityBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityBody}
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setXMS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYMS(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZMS(value);
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
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.VelocityBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.VelocityBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXMS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getYMS();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getZMS();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float x_m_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.getXMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.setXMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y_m_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.getYMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.setYMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z_m_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.getZMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.VelocityBody.prototype.setZMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PositionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    xM: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    yM: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    zM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionBody}
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PositionBody;
  return proto.mavsdk.rpc.telemetry_server.PositionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionBody}
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setXM(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYM(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZM(value);
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
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PositionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXM();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getYM();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getZM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float x_m = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.getXM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.setXM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.getYM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.setYM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.getZM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionBody} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionBody.prototype.setZM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Odometry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Odometry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Odometry.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeUsec: jspb.Message.getFieldWithDefault(msg, 1, 0),
    frameId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    childFrameId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    positionBody: (f = msg.getPositionBody()) && proto.mavsdk.rpc.telemetry_server.PositionBody.toObject(includeInstance, f),
    q: (f = msg.getQ()) && proto.mavsdk.rpc.telemetry_server.Quaternion.toObject(includeInstance, f),
    velocityBody: (f = msg.getVelocityBody()) && proto.mavsdk.rpc.telemetry_server.VelocityBody.toObject(includeInstance, f),
    angularVelocityBody: (f = msg.getAngularVelocityBody()) && proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.toObject(includeInstance, f),
    poseCovariance: (f = msg.getPoseCovariance()) && proto.mavsdk.rpc.telemetry_server.Covariance.toObject(includeInstance, f),
    velocityCovariance: (f = msg.getVelocityCovariance()) && proto.mavsdk.rpc.telemetry_server.Covariance.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Odometry;
  return proto.mavsdk.rpc.telemetry_server.Odometry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Odometry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeUsec(value);
      break;
    case 2:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame} */ (reader.readEnum());
      msg.setFrameId(value);
      break;
    case 3:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame} */ (reader.readEnum());
      msg.setChildFrameId(value);
      break;
    case 4:
      var value = new proto.mavsdk.rpc.telemetry_server.PositionBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.PositionBody.deserializeBinaryFromReader);
      msg.setPositionBody(value);
      break;
    case 5:
      var value = new proto.mavsdk.rpc.telemetry_server.Quaternion;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Quaternion.deserializeBinaryFromReader);
      msg.setQ(value);
      break;
    case 6:
      var value = new proto.mavsdk.rpc.telemetry_server.VelocityBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.VelocityBody.deserializeBinaryFromReader);
      msg.setVelocityBody(value);
      break;
    case 7:
      var value = new proto.mavsdk.rpc.telemetry_server.AngularVelocityBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.deserializeBinaryFromReader);
      msg.setAngularVelocityBody(value);
      break;
    case 8:
      var value = new proto.mavsdk.rpc.telemetry_server.Covariance;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Covariance.deserializeBinaryFromReader);
      msg.setPoseCovariance(value);
      break;
    case 9:
      var value = new proto.mavsdk.rpc.telemetry_server.Covariance;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.Covariance.deserializeBinaryFromReader);
      msg.setVelocityCovariance(value);
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
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Odometry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Odometry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Odometry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeUsec();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFrameId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getChildFrameId();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPositionBody();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mavsdk.rpc.telemetry_server.PositionBody.serializeBinaryToWriter
    );
  }
  f = message.getQ();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mavsdk.rpc.telemetry_server.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getVelocityBody();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.mavsdk.rpc.telemetry_server.VelocityBody.serializeBinaryToWriter
    );
  }
  f = message.getAngularVelocityBody();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.mavsdk.rpc.telemetry_server.AngularVelocityBody.serializeBinaryToWriter
    );
  }
  f = message.getPoseCovariance();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.mavsdk.rpc.telemetry_server.Covariance.serializeBinaryToWriter
    );
  }
  f = message.getVelocityCovariance();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.mavsdk.rpc.telemetry_server.Covariance.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame = {
  MAV_FRAME_UNDEF: 0,
  MAV_FRAME_BODY_NED: 8,
  MAV_FRAME_VISION_NED: 16,
  MAV_FRAME_ESTIM_NED: 18
};

/**
 * optional uint64 time_usec = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getTimeUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setTimeUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MavFrame frame_id = 2;
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getFrameId = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional MavFrame child_frame_id = 3;
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getChildFrameId = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.Odometry.MavFrame} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setChildFrameId = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional PositionBody position_body = 4;
 * @return {?proto.mavsdk.rpc.telemetry_server.PositionBody}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getPositionBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.PositionBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.PositionBody, 4));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.PositionBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setPositionBody = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.clearPositionBody = function() {
  return this.setPositionBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.hasPositionBody = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Quaternion q = 5;
 * @return {?proto.mavsdk.rpc.telemetry_server.Quaternion}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getQ = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Quaternion, 5));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Quaternion|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setQ = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.clearQ = function() {
  return this.setQ(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.hasQ = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VelocityBody velocity_body = 6;
 * @return {?proto.mavsdk.rpc.telemetry_server.VelocityBody}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getVelocityBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.VelocityBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.VelocityBody, 6));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.VelocityBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.clearVelocityBody = function() {
  return this.setVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.hasVelocityBody = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AngularVelocityBody angular_velocity_body = 7;
 * @return {?proto.mavsdk.rpc.telemetry_server.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getAngularVelocityBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.AngularVelocityBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.AngularVelocityBody, 7));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.AngularVelocityBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setAngularVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.clearAngularVelocityBody = function() {
  return this.setAngularVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.hasAngularVelocityBody = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Covariance pose_covariance = 8;
 * @return {?proto.mavsdk.rpc.telemetry_server.Covariance}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getPoseCovariance = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Covariance} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Covariance, 8));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Covariance|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setPoseCovariance = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.clearPoseCovariance = function() {
  return this.setPoseCovariance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.hasPoseCovariance = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Covariance velocity_covariance = 9;
 * @return {?proto.mavsdk.rpc.telemetry_server.Covariance}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.getVelocityCovariance = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.Covariance} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.Covariance, 9));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.Covariance|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.setVelocityCovariance = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.clearVelocityCovariance = function() {
  return this.setVelocityCovariance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Odometry.prototype.hasVelocityCovariance = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.DistanceSensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.DistanceSensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    minimumDistanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maximumDistanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    currentDistanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.DistanceSensor}
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.DistanceSensor;
  return proto.mavsdk.rpc.telemetry_server.DistanceSensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.DistanceSensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.DistanceSensor}
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinimumDistanceM(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaximumDistanceM(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrentDistanceM(value);
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
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.DistanceSensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.DistanceSensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinimumDistanceM();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMaximumDistanceM();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getCurrentDistanceM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float minimum_distance_m = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.getMinimumDistanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.setMinimumDistanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float maximum_distance_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.getMaximumDistanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.setMaximumDistanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float current_distance_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.getCurrentDistanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry_server.DistanceSensor.prototype.setCurrentDistanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.ScaledPressure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampUs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    absolutePressureHpa: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    differentialPressureHpa: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    temperatureDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    differentialPressureTemperatureDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.ScaledPressure;
  return proto.mavsdk.rpc.telemetry_server.ScaledPressure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAbsolutePressureHpa(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDifferentialPressureHpa(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperatureDeg(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDifferentialPressureTemperatureDeg(value);
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
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.ScaledPressure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampUs();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAbsolutePressureHpa();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDifferentialPressureHpa();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getTemperatureDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getDifferentialPressureTemperatureDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp_us = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float absolute_pressure_hpa = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.getAbsolutePressureHpa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.setAbsolutePressureHpa = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float differential_pressure_hpa = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.getDifferentialPressureHpa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.setDifferentialPressureHpa = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float temperature_deg = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.getTemperatureDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.setTemperatureDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float differential_pressure_temperature_deg = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.getDifferentialPressureTemperatureDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry_server.ScaledPressure.prototype.setDifferentialPressureTemperatureDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PositionNed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionNed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.toObject = function(includeInstance, msg) {
  var f, obj = {
    northM: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    eastM: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    downM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionNed}
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PositionNed;
  return proto.mavsdk.rpc.telemetry_server.PositionNed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionNed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionNed}
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNorthM(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEastM(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDownM(value);
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
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PositionNed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionNed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNorthM();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getEastM();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDownM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float north_m = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.getNorthM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.setNorthM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float east_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.getEastM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.setEastM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.getDownM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionNed.prototype.setDownM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.VelocityNed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.VelocityNed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.toObject = function(includeInstance, msg) {
  var f, obj = {
    northMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    eastMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    downMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.VelocityNed;
  return proto.mavsdk.rpc.telemetry_server.VelocityNed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.VelocityNed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNorthMS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEastMS(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDownMS(value);
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
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.VelocityNed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.VelocityNed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNorthMS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getEastMS();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDownMS();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float north_m_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.getNorthMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.setNorthMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float east_m_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.getEastMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.setEastMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_m_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.getDownMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.VelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.VelocityNed.prototype.setDownMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.mavsdk.rpc.telemetry_server.PositionNed.toObject(includeInstance, f),
    velocity: (f = msg.getVelocity()) && proto.mavsdk.rpc.telemetry_server.VelocityNed.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.PositionVelocityNed;
  return proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.PositionNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.PositionNed.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry_server.VelocityNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.VelocityNed.deserializeBinaryFromReader);
      msg.setVelocity(value);
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
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.PositionNed.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry_server.VelocityNed.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionNed position = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.PositionNed}
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.getPosition = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.PositionNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.PositionNed, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.PositionNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} returns this
*/
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VelocityNed velocity = 2;
 * @return {?proto.mavsdk.rpc.telemetry_server.VelocityNed}
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.getVelocity = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.VelocityNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.VelocityNed, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.VelocityNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} returns this
*/
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.PositionVelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.PositionVelocityNed.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.GroundTruth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.GroundTruth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    absoluteAltitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.GroundTruth}
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.GroundTruth;
  return proto.mavsdk.rpc.telemetry_server.GroundTruth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.GroundTruth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.GroundTruth}
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitudeDeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitudeDeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAbsoluteAltitudeM(value);
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
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.GroundTruth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.GroundTruth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAbsoluteAltitudeM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional double latitude_deg = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.GroundTruth} returns this
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.GroundTruth} returns this
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float absolute_altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.GroundTruth} returns this
 */
proto.mavsdk.rpc.telemetry_server.GroundTruth.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    airspeedMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    throttlePercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    climbRateMS: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics}
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.FixedwingMetrics;
  return proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics}
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAirspeedMS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setThrottlePercentage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setClimbRateMS(value);
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
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAirspeedMS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getThrottlePercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getClimbRateMS();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float airspeed_m_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.getAirspeedMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics} returns this
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.setAirspeedMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float throttle_percentage = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.getThrottlePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics} returns this
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.setThrottlePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float climb_rate_m_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.getClimbRateMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.FixedwingMetrics} returns this
 */
proto.mavsdk.rpc.telemetry_server.FixedwingMetrics.prototype.setClimbRateMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.AccelerationFrd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.toObject = function(includeInstance, msg) {
  var f, obj = {
    forwardMS2: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    rightMS2: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    downMS2: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd}
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.AccelerationFrd;
  return proto.mavsdk.rpc.telemetry_server.AccelerationFrd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd}
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setForwardMS2(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRightMS2(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDownMS2(value);
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
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.AccelerationFrd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForwardMS2();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRightMS2();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDownMS2();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float forward_m_s2 = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.getForwardMS2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.setForwardMS2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float right_m_s2 = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.getRightMS2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.setRightMS2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_m_s2 = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.getDownMS2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AccelerationFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.AccelerationFrd.prototype.setDownMS2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.toObject = function(includeInstance, msg) {
  var f, obj = {
    forwardRadS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    rightRadS: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    downRadS: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd;
  return proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setForwardRadS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRightRadS(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDownRadS(value);
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
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForwardRadS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRightRadS();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDownRadS();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float forward_rad_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.getForwardRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.setForwardRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float right_rad_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.getRightRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.setRightRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_rad_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.getDownRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.prototype.setDownRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.toObject = function(includeInstance, msg) {
  var f, obj = {
    forwardGauss: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    rightGauss: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    downGauss: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd}
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd;
  return proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd}
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setForwardGauss(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRightGauss(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDownGauss(value);
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
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForwardGauss();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRightGauss();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDownGauss();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float forward_gauss = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.getForwardGauss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.setForwardGauss = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float right_gauss = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.getRightGauss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.setRightGauss = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_gauss = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.getDownGauss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} returns this
 */
proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.prototype.setDownGauss = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.mavsdk.rpc.telemetry_server.Imu.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.Imu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.Imu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Imu.toObject = function(includeInstance, msg) {
  var f, obj = {
    accelerationFrd: (f = msg.getAccelerationFrd()) && proto.mavsdk.rpc.telemetry_server.AccelerationFrd.toObject(includeInstance, f),
    angularVelocityFrd: (f = msg.getAngularVelocityFrd()) && proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.toObject(includeInstance, f),
    magneticFieldFrd: (f = msg.getMagneticFieldFrd()) && proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.toObject(includeInstance, f),
    temperatureDegc: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    timestampUs: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu}
 */
proto.mavsdk.rpc.telemetry_server.Imu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.Imu;
  return proto.mavsdk.rpc.telemetry_server.Imu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.Imu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu}
 */
proto.mavsdk.rpc.telemetry_server.Imu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry_server.AccelerationFrd;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.AccelerationFrd.deserializeBinaryFromReader);
      msg.setAccelerationFrd(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.deserializeBinaryFromReader);
      msg.setAngularVelocityFrd(value);
      break;
    case 3:
      var value = new proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.deserializeBinaryFromReader);
      msg.setMagneticFieldFrd(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperatureDegc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampUs(value);
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
proto.mavsdk.rpc.telemetry_server.Imu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.Imu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.Imu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.Imu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccelerationFrd();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry_server.AccelerationFrd.serializeBinaryToWriter
    );
  }
  f = message.getAngularVelocityFrd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd.serializeBinaryToWriter
    );
  }
  f = message.getMagneticFieldFrd();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd.serializeBinaryToWriter
    );
  }
  f = message.getTemperatureDegc();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTimestampUs();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional AccelerationFrd acceleration_frd = 1;
 * @return {?proto.mavsdk.rpc.telemetry_server.AccelerationFrd}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.getAccelerationFrd = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.AccelerationFrd} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.AccelerationFrd, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.AccelerationFrd|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
*/
proto.mavsdk.rpc.telemetry_server.Imu.prototype.setAccelerationFrd = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.clearAccelerationFrd = function() {
  return this.setAccelerationFrd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.hasAccelerationFrd = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AngularVelocityFrd angular_velocity_frd = 2;
 * @return {?proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.getAngularVelocityFrd = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.AngularVelocityFrd|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
*/
proto.mavsdk.rpc.telemetry_server.Imu.prototype.setAngularVelocityFrd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.clearAngularVelocityFrd = function() {
  return this.setAngularVelocityFrd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.hasAngularVelocityFrd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MagneticFieldFrd magnetic_field_frd = 3;
 * @return {?proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.getMagneticFieldFrd = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd, 3));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry_server.MagneticFieldFrd|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
*/
proto.mavsdk.rpc.telemetry_server.Imu.prototype.setMagneticFieldFrd = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.clearMagneticFieldFrd = function() {
  return this.setMagneticFieldFrd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.hasMagneticFieldFrd = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float temperature_degc = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.getTemperatureDegc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.setTemperatureDegc = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 timestamp_us = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry_server.Imu} returns this
 */
proto.mavsdk.rpc.telemetry_server.Imu.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resultStr: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry_server.TelemetryServerResult;
  return proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult}
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultStr(value);
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
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResultStr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.Result = {
  RESULT_UNKNOWN: 0,
  RESULT_SUCCESS: 1,
  RESULT_NO_SYSTEM: 2,
  RESULT_CONNECTION_ERROR: 3,
  RESULT_BUSY: 4,
  RESULT_COMMAND_DENIED: 5,
  RESULT_TIMEOUT: 6,
  RESULT_UNSUPPORTED: 7
};

/**
 * optional Result result = 1;
 * @return {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.Result}
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.prototype.getResult = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.Result} value
 * @return {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} returns this
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string result_str = 2;
 * @return {string}
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.prototype.getResultStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.telemetry_server.TelemetryServerResult} returns this
 */
proto.mavsdk.rpc.telemetry_server.TelemetryServerResult.prototype.setResultStr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry_server.FixType = {
  FIX_TYPE_NO_GPS: 0,
  FIX_TYPE_NO_FIX: 1,
  FIX_TYPE_FIX_2D: 2,
  FIX_TYPE_FIX_3D: 3,
  FIX_TYPE_FIX_DGPS: 4,
  FIX_TYPE_RTK_FLOAT: 5,
  FIX_TYPE_RTK_FIXED: 6
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry_server.VtolState = {
  VTOL_STATE_UNDEFINED: 0,
  VTOL_STATE_TRANSITION_TO_FW: 1,
  VTOL_STATE_TRANSITION_TO_MC: 2,
  VTOL_STATE_MC: 3,
  VTOL_STATE_FW: 4
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry_server.StatusTextType = {
  STATUS_TEXT_TYPE_DEBUG: 0,
  STATUS_TEXT_TYPE_INFO: 1,
  STATUS_TEXT_TYPE_NOTICE: 2,
  STATUS_TEXT_TYPE_WARNING: 3,
  STATUS_TEXT_TYPE_ERROR: 4,
  STATUS_TEXT_TYPE_CRITICAL: 5,
  STATUS_TEXT_TYPE_ALERT: 6,
  STATUS_TEXT_TYPE_EMERGENCY: 7
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry_server.LandedState = {
  LANDED_STATE_UNKNOWN: 0,
  LANDED_STATE_ON_GROUND: 1,
  LANDED_STATE_IN_AIR: 2,
  LANDED_STATE_TAKING_OFF: 3,
  LANDED_STATE_LANDING: 4
};

goog.object.extend(exports, proto.mavsdk.rpc.telemetry_server);


// fix autocompletion
module.exports = exports;
