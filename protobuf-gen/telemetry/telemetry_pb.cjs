/* eslint-disable */

// source: telemetry/telemetry.proto
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
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AccelerationFrd', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ActuatorControlTarget', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ActuatorOutputStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Altitude', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AltitudeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AngularVelocityBody', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AngularVelocityFrd', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ArmedResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AttitudeEulerResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Battery', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.BatteryResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Covariance', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.DistanceSensor', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.DistanceSensorResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.EulerAngle', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.FixType', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.FixedwingMetrics', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.FlightMode', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.FlightModeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GpsGlobalOrigin', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GpsInfo', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GpsInfoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GroundTruth', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.GroundTruthResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Heading', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.HeadingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Health', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.HealthAllOkResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.HealthResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.HomeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Imu', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.InAirResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.LandedState', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.LandedStateResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.MagneticFieldFrd', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Odometry', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Odometry.MavFrame', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.OdometryResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Position', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.PositionBody', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.PositionNed', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.PositionResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.PositionVelocityNed', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.Quaternion', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.RawGps', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.RawGpsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.RawImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.RcStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.RcStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ScaledImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ScaledPressure', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.ScaledPressureResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateBatteryRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateBatteryResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateHomeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateHomeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateInAirRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateInAirResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateOdometryRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateOdometryResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRatePositionRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRatePositionResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateRawImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateRawImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.StatusText', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.StatusTextResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.StatusTextType', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeArmedRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeHealthRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeHomeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeInAirRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribePositionRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.TelemetryResult', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.TelemetryResult.Result', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.VelocityBody', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.VelocityNed', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.VelocityNedResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.VtolState', null, global);
goog.exportSymbol('proto.mavsdk.rpc.telemetry.VtolStateResponse', null, global);
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
proto.mavsdk.rpc.telemetry.SubscribePositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribePositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribePositionRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribePositionRequest';
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
proto.mavsdk.rpc.telemetry.PositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.PositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.PositionResponse.displayName = 'proto.mavsdk.rpc.telemetry.PositionResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeHomeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeHomeRequest';
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
proto.mavsdk.rpc.telemetry.HomeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.HomeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.HomeResponse.displayName = 'proto.mavsdk.rpc.telemetry.HomeResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeInAirRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeInAirRequest';
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
proto.mavsdk.rpc.telemetry.InAirResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.InAirResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.InAirResponse.displayName = 'proto.mavsdk.rpc.telemetry.InAirResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest';
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
proto.mavsdk.rpc.telemetry.LandedStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.LandedStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.LandedStateResponse.displayName = 'proto.mavsdk.rpc.telemetry.LandedStateResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeArmedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeArmedRequest';
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
proto.mavsdk.rpc.telemetry.ArmedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ArmedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ArmedResponse.displayName = 'proto.mavsdk.rpc.telemetry.ArmedResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest';
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
proto.mavsdk.rpc.telemetry.VtolStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.VtolStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.VtolStateResponse.displayName = 'proto.mavsdk.rpc.telemetry.VtolStateResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest';
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
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.displayName = 'proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest';
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
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AttitudeEulerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.displayName = 'proto.mavsdk.rpc.telemetry.AttitudeEulerResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest';
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
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.displayName = 'proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest';
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
proto.mavsdk.rpc.telemetry.VelocityNedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.VelocityNedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.VelocityNedResponse.displayName = 'proto.mavsdk.rpc.telemetry.VelocityNedResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest';
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
proto.mavsdk.rpc.telemetry.GpsInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GpsInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GpsInfoResponse.displayName = 'proto.mavsdk.rpc.telemetry.GpsInfoResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest';
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
proto.mavsdk.rpc.telemetry.RawGpsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.RawGpsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.RawGpsResponse.displayName = 'proto.mavsdk.rpc.telemetry.RawGpsResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest';
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
proto.mavsdk.rpc.telemetry.BatteryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.BatteryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.BatteryResponse.displayName = 'proto.mavsdk.rpc.telemetry.BatteryResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest';
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
proto.mavsdk.rpc.telemetry.FlightModeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.FlightModeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.FlightModeResponse.displayName = 'proto.mavsdk.rpc.telemetry.FlightModeResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeHealthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeHealthRequest';
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
proto.mavsdk.rpc.telemetry.HealthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.HealthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.HealthResponse.displayName = 'proto.mavsdk.rpc.telemetry.HealthResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest';
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
proto.mavsdk.rpc.telemetry.RcStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.RcStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.RcStatusResponse.displayName = 'proto.mavsdk.rpc.telemetry.RcStatusResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest';
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
proto.mavsdk.rpc.telemetry.StatusTextResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.StatusTextResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.StatusTextResponse.displayName = 'proto.mavsdk.rpc.telemetry.StatusTextResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest';
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
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.displayName = 'proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest';
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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.displayName = 'proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest';
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
proto.mavsdk.rpc.telemetry.OdometryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.OdometryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.OdometryResponse.displayName = 'proto.mavsdk.rpc.telemetry.OdometryResponse';
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
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest';
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
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.displayName = 'proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest';
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
proto.mavsdk.rpc.telemetry.GroundTruthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GroundTruthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GroundTruthResponse.displayName = 'proto.mavsdk.rpc.telemetry.GroundTruthResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest';
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
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.displayName = 'proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeImuRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeImuRequest';
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
proto.mavsdk.rpc.telemetry.ImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ImuResponse.displayName = 'proto.mavsdk.rpc.telemetry.ImuResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest';
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
proto.mavsdk.rpc.telemetry.ScaledImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ScaledImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ScaledImuResponse.displayName = 'proto.mavsdk.rpc.telemetry.ScaledImuResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest';
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
proto.mavsdk.rpc.telemetry.RawImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.RawImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.RawImuResponse.displayName = 'proto.mavsdk.rpc.telemetry.RawImuResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest';
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
proto.mavsdk.rpc.telemetry.HealthAllOkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.HealthAllOkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.HealthAllOkResponse.displayName = 'proto.mavsdk.rpc.telemetry.HealthAllOkResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest';
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
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.displayName = 'proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest';
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
proto.mavsdk.rpc.telemetry.DistanceSensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.DistanceSensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.DistanceSensorResponse.displayName = 'proto.mavsdk.rpc.telemetry.DistanceSensorResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest';
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
proto.mavsdk.rpc.telemetry.ScaledPressureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ScaledPressureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ScaledPressureResponse.displayName = 'proto.mavsdk.rpc.telemetry.ScaledPressureResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest';
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
proto.mavsdk.rpc.telemetry.HeadingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.HeadingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.HeadingResponse.displayName = 'proto.mavsdk.rpc.telemetry.HeadingResponse';
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
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest';
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
proto.mavsdk.rpc.telemetry.AltitudeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AltitudeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AltitudeResponse.displayName = 'proto.mavsdk.rpc.telemetry.AltitudeResponse';
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
proto.mavsdk.rpc.telemetry.SetRatePositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRatePositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRatePositionRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRatePositionRequest';
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
proto.mavsdk.rpc.telemetry.SetRatePositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRatePositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRatePositionResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRatePositionResponse';
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
proto.mavsdk.rpc.telemetry.SetRateHomeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateHomeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateHomeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateHomeRequest';
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
proto.mavsdk.rpc.telemetry.SetRateHomeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateHomeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateHomeResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateHomeResponse';
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
proto.mavsdk.rpc.telemetry.SetRateInAirRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateInAirRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateInAirRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateInAirRequest';
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
proto.mavsdk.rpc.telemetry.SetRateInAirResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateInAirResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateInAirResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateInAirResponse';
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
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest';
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
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse';
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
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest';
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
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse';
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest';
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse';
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest';
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse';
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest';
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse';
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
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest';
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
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse';
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
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest';
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
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse';
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
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest';
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
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateBatteryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateBatteryRequest';
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
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateBatteryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateBatteryResponse';
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
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest';
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
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse';
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
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest';
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
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse';
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
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest';
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
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse';
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
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateOdometryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateOdometryRequest';
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
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateOdometryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateOdometryResponse';
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
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest';
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
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse';
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
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest';
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
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse';
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
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest';
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
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse';
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
proto.mavsdk.rpc.telemetry.SetRateImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateImuRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateImuRequest';
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
proto.mavsdk.rpc.telemetry.SetRateImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateImuResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateImuResponse';
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
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest';
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
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse';
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
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateRawImuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateRawImuRequest';
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
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateRawImuResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateRawImuResponse';
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
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest';
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
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse';
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
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest';
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
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse';
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
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.displayName = 'proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest';
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
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.displayName = 'proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse';
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
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest';
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
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.displayName = 'proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse';
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
proto.mavsdk.rpc.telemetry.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Position.displayName = 'proto.mavsdk.rpc.telemetry.Position';
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
proto.mavsdk.rpc.telemetry.Heading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Heading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Heading.displayName = 'proto.mavsdk.rpc.telemetry.Heading';
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
proto.mavsdk.rpc.telemetry.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Quaternion.displayName = 'proto.mavsdk.rpc.telemetry.Quaternion';
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
proto.mavsdk.rpc.telemetry.EulerAngle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.EulerAngle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.EulerAngle.displayName = 'proto.mavsdk.rpc.telemetry.EulerAngle';
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
proto.mavsdk.rpc.telemetry.AngularVelocityBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AngularVelocityBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AngularVelocityBody.displayName = 'proto.mavsdk.rpc.telemetry.AngularVelocityBody';
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
proto.mavsdk.rpc.telemetry.GpsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GpsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GpsInfo.displayName = 'proto.mavsdk.rpc.telemetry.GpsInfo';
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
proto.mavsdk.rpc.telemetry.RawGps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.RawGps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.RawGps.displayName = 'proto.mavsdk.rpc.telemetry.RawGps';
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
proto.mavsdk.rpc.telemetry.Battery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Battery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Battery.displayName = 'proto.mavsdk.rpc.telemetry.Battery';
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
proto.mavsdk.rpc.telemetry.Health = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Health, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Health.displayName = 'proto.mavsdk.rpc.telemetry.Health';
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
proto.mavsdk.rpc.telemetry.RcStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.RcStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.RcStatus.displayName = 'proto.mavsdk.rpc.telemetry.RcStatus';
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
proto.mavsdk.rpc.telemetry.StatusText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.StatusText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.StatusText.displayName = 'proto.mavsdk.rpc.telemetry.StatusText';
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
proto.mavsdk.rpc.telemetry.ActuatorControlTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.telemetry.ActuatorControlTarget.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ActuatorControlTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ActuatorControlTarget.displayName = 'proto.mavsdk.rpc.telemetry.ActuatorControlTarget';
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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ActuatorOutputStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.displayName = 'proto.mavsdk.rpc.telemetry.ActuatorOutputStatus';
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
proto.mavsdk.rpc.telemetry.Covariance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.telemetry.Covariance.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Covariance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Covariance.displayName = 'proto.mavsdk.rpc.telemetry.Covariance';
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
proto.mavsdk.rpc.telemetry.VelocityBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.VelocityBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.VelocityBody.displayName = 'proto.mavsdk.rpc.telemetry.VelocityBody';
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
proto.mavsdk.rpc.telemetry.PositionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.PositionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.PositionBody.displayName = 'proto.mavsdk.rpc.telemetry.PositionBody';
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
proto.mavsdk.rpc.telemetry.Odometry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Odometry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Odometry.displayName = 'proto.mavsdk.rpc.telemetry.Odometry';
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
proto.mavsdk.rpc.telemetry.DistanceSensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.DistanceSensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.DistanceSensor.displayName = 'proto.mavsdk.rpc.telemetry.DistanceSensor';
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
proto.mavsdk.rpc.telemetry.ScaledPressure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.ScaledPressure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.ScaledPressure.displayName = 'proto.mavsdk.rpc.telemetry.ScaledPressure';
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
proto.mavsdk.rpc.telemetry.PositionNed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.PositionNed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.PositionNed.displayName = 'proto.mavsdk.rpc.telemetry.PositionNed';
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
proto.mavsdk.rpc.telemetry.VelocityNed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.VelocityNed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.VelocityNed.displayName = 'proto.mavsdk.rpc.telemetry.VelocityNed';
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
proto.mavsdk.rpc.telemetry.PositionVelocityNed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.PositionVelocityNed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.PositionVelocityNed.displayName = 'proto.mavsdk.rpc.telemetry.PositionVelocityNed';
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
proto.mavsdk.rpc.telemetry.GroundTruth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GroundTruth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GroundTruth.displayName = 'proto.mavsdk.rpc.telemetry.GroundTruth';
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
proto.mavsdk.rpc.telemetry.FixedwingMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.FixedwingMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.FixedwingMetrics.displayName = 'proto.mavsdk.rpc.telemetry.FixedwingMetrics';
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
proto.mavsdk.rpc.telemetry.AccelerationFrd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AccelerationFrd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AccelerationFrd.displayName = 'proto.mavsdk.rpc.telemetry.AccelerationFrd';
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
proto.mavsdk.rpc.telemetry.AngularVelocityFrd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.AngularVelocityFrd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.AngularVelocityFrd.displayName = 'proto.mavsdk.rpc.telemetry.AngularVelocityFrd';
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
proto.mavsdk.rpc.telemetry.MagneticFieldFrd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.MagneticFieldFrd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.MagneticFieldFrd.displayName = 'proto.mavsdk.rpc.telemetry.MagneticFieldFrd';
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
proto.mavsdk.rpc.telemetry.Imu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Imu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Imu.displayName = 'proto.mavsdk.rpc.telemetry.Imu';
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
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.GpsGlobalOrigin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.displayName = 'proto.mavsdk.rpc.telemetry.GpsGlobalOrigin';
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
proto.mavsdk.rpc.telemetry.Altitude = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.Altitude, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.Altitude.displayName = 'proto.mavsdk.rpc.telemetry.Altitude';
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
proto.mavsdk.rpc.telemetry.TelemetryResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.telemetry.TelemetryResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.telemetry.TelemetryResult.displayName = 'proto.mavsdk.rpc.telemetry.TelemetryResult';
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
proto.mavsdk.rpc.telemetry.SubscribePositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribePositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribePositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribePositionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribePositionRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribePositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribePositionRequest;
  return proto.mavsdk.rpc.telemetry.SubscribePositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribePositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribePositionRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribePositionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribePositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribePositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribePositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribePositionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.PositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.PositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.PositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.mavsdk.rpc.telemetry.Position.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.PositionResponse}
 */
proto.mavsdk.rpc.telemetry.PositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.PositionResponse;
  return proto.mavsdk.rpc.telemetry.PositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.PositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.PositionResponse}
 */
proto.mavsdk.rpc.telemetry.PositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Position;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
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
proto.mavsdk.rpc.telemetry.PositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.PositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.PositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Position}
 */
proto.mavsdk.rpc.telemetry.PositionResponse.prototype.getPosition = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Position} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Position, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Position|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionResponse} returns this
*/
proto.mavsdk.rpc.telemetry.PositionResponse.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.PositionResponse} returns this
 */
proto.mavsdk.rpc.telemetry.PositionResponse.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.PositionResponse.prototype.hasPosition = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHomeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHomeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeHomeRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHomeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHomeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHomeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHomeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.HomeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.HomeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.HomeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HomeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    home: (f = msg.getHome()) && proto.mavsdk.rpc.telemetry.Position.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.HomeResponse}
 */
proto.mavsdk.rpc.telemetry.HomeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.HomeResponse;
  return proto.mavsdk.rpc.telemetry.HomeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.HomeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.HomeResponse}
 */
proto.mavsdk.rpc.telemetry.HomeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Position;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Position.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.HomeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.HomeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.HomeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HomeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHome();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position home = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Position}
 */
proto.mavsdk.rpc.telemetry.HomeResponse.prototype.getHome = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Position} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Position, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Position|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.HomeResponse} returns this
*/
proto.mavsdk.rpc.telemetry.HomeResponse.prototype.setHome = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.HomeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.HomeResponse.prototype.clearHome = function() {
  return this.setHome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.HomeResponse.prototype.hasHome = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeInAirRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeInAirRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeInAirRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeInAirRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeInAirRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeInAirRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeInAirRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.InAirResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.InAirResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.InAirResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.InAirResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.InAirResponse}
 */
proto.mavsdk.rpc.telemetry.InAirResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.InAirResponse;
  return proto.mavsdk.rpc.telemetry.InAirResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.InAirResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.InAirResponse}
 */
proto.mavsdk.rpc.telemetry.InAirResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.InAirResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.InAirResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.InAirResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.InAirResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.InAirResponse.prototype.getIsInAir = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.InAirResponse} returns this
 */
proto.mavsdk.rpc.telemetry.InAirResponse.prototype.setIsInAir = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeLandedStateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.LandedStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.LandedStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.LandedStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.LandedStateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.LandedStateResponse}
 */
proto.mavsdk.rpc.telemetry.LandedStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.LandedStateResponse;
  return proto.mavsdk.rpc.telemetry.LandedStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.LandedStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.LandedStateResponse}
 */
proto.mavsdk.rpc.telemetry.LandedStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry.LandedState} */ (reader.readEnum());
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
proto.mavsdk.rpc.telemetry.LandedStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.LandedStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.LandedStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.LandedStateResponse.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.mavsdk.rpc.telemetry.LandedState}
 */
proto.mavsdk.rpc.telemetry.LandedStateResponse.prototype.getLandedState = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.LandedState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.LandedState} value
 * @return {!proto.mavsdk.rpc.telemetry.LandedStateResponse} returns this
 */
proto.mavsdk.rpc.telemetry.LandedStateResponse.prototype.setLandedState = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeArmedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeArmedRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeArmedRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeArmedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeArmedRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeArmedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeArmedRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ArmedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ArmedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ArmedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ArmedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isArmed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.mavsdk.rpc.telemetry.ArmedResponse}
 */
proto.mavsdk.rpc.telemetry.ArmedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ArmedResponse;
  return proto.mavsdk.rpc.telemetry.ArmedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ArmedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ArmedResponse}
 */
proto.mavsdk.rpc.telemetry.ArmedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArmed(value);
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
proto.mavsdk.rpc.telemetry.ArmedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ArmedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ArmedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ArmedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsArmed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_armed = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.ArmedResponse.prototype.getIsArmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.ArmedResponse} returns this
 */
proto.mavsdk.rpc.telemetry.ArmedResponse.prototype.setIsArmed = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeVtolStateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.VtolStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.VtolStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.VtolStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VtolStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vtolState: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry.VtolStateResponse}
 */
proto.mavsdk.rpc.telemetry.VtolStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.VtolStateResponse;
  return proto.mavsdk.rpc.telemetry.VtolStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.VtolStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.VtolStateResponse}
 */
proto.mavsdk.rpc.telemetry.VtolStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry.VtolState} */ (reader.readEnum());
      msg.setVtolState(value);
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
proto.mavsdk.rpc.telemetry.VtolStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.VtolStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.VtolStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VtolStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVtolState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional VtolState vtol_state = 1;
 * @return {!proto.mavsdk.rpc.telemetry.VtolState}
 */
proto.mavsdk.rpc.telemetry.VtolStateResponse.prototype.getVtolState = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.VtolState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.VtolState} value
 * @return {!proto.mavsdk.rpc.telemetry.VtolStateResponse} returns this
 */
proto.mavsdk.rpc.telemetry.VtolStateResponse.prototype.setVtolState = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    attitudeQuaternion: (f = msg.getAttitudeQuaternion()) && proto.mavsdk.rpc.telemetry.Quaternion.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse}
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse;
  return proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse}
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Quaternion;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Quaternion.deserializeBinaryFromReader);
      msg.setAttitudeQuaternion(value);
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
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttitudeQuaternion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Quaternion.serializeBinaryToWriter
    );
  }
};


/**
 * optional Quaternion attitude_quaternion = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Quaternion}
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.prototype.getAttitudeQuaternion = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Quaternion, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Quaternion|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse} returns this
*/
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.prototype.setAttitudeQuaternion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse} returns this
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.prototype.clearAttitudeQuaternion = function() {
  return this.setAttitudeQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.AttitudeQuaternionResponse.prototype.hasAttitudeQuaternion = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    attitudeEuler: (f = msg.getAttitudeEuler()) && proto.mavsdk.rpc.telemetry.EulerAngle.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse}
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AttitudeEulerResponse;
  return proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse}
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.EulerAngle;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.EulerAngle.deserializeBinaryFromReader);
      msg.setAttitudeEuler(value);
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
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttitudeEuler();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.EulerAngle.serializeBinaryToWriter
    );
  }
};


/**
 * optional EulerAngle attitude_euler = 1;
 * @return {?proto.mavsdk.rpc.telemetry.EulerAngle}
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.prototype.getAttitudeEuler = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.EulerAngle} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.EulerAngle, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.EulerAngle|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse} returns this
*/
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.prototype.setAttitudeEuler = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeEulerResponse} returns this
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.prototype.clearAttitudeEuler = function() {
  return this.setAttitudeEuler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.AttitudeEulerResponse.prototype.hasAttitudeEuler = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    attitudeAngularVelocityBody: (f = msg.getAttitudeAngularVelocityBody()) && proto.mavsdk.rpc.telemetry.AngularVelocityBody.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse}
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse;
  return proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse}
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.AngularVelocityBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.AngularVelocityBody.deserializeBinaryFromReader);
      msg.setAttitudeAngularVelocityBody(value);
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
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttitudeAngularVelocityBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.AngularVelocityBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional AngularVelocityBody attitude_angular_velocity_body = 1;
 * @return {?proto.mavsdk.rpc.telemetry.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.prototype.getAttitudeAngularVelocityBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.AngularVelocityBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.AngularVelocityBody, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.AngularVelocityBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse} returns this
*/
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.prototype.setAttitudeAngularVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse} returns this
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.prototype.clearAttitudeAngularVelocityBody = function() {
  return this.setAttitudeAngularVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse.prototype.hasAttitudeAngularVelocityBody = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeVelocityNedRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.VelocityNedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.VelocityNedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.VelocityNedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    velocityNed: (f = msg.getVelocityNed()) && proto.mavsdk.rpc.telemetry.VelocityNed.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.VelocityNedResponse;
  return proto.mavsdk.rpc.telemetry.VelocityNedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.VelocityNedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.VelocityNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.VelocityNed.deserializeBinaryFromReader);
      msg.setVelocityNed(value);
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
proto.mavsdk.rpc.telemetry.VelocityNedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.VelocityNedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.VelocityNedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVelocityNed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.VelocityNed.serializeBinaryToWriter
    );
  }
};


/**
 * optional VelocityNed velocity_ned = 1;
 * @return {?proto.mavsdk.rpc.telemetry.VelocityNed}
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.prototype.getVelocityNed = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.VelocityNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.VelocityNed, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.VelocityNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNedResponse} returns this
*/
proto.mavsdk.rpc.telemetry.VelocityNedResponse.prototype.setVelocityNed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNedResponse} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.prototype.clearVelocityNed = function() {
  return this.setVelocityNed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.VelocityNedResponse.prototype.hasVelocityNed = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeGpsInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.GpsInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GpsInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GpsInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gpsInfo: (f = msg.getGpsInfo()) && proto.mavsdk.rpc.telemetry.GpsInfo.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfoResponse}
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GpsInfoResponse;
  return proto.mavsdk.rpc.telemetry.GpsInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GpsInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfoResponse}
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.GpsInfo;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.GpsInfo.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.GpsInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GpsInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GpsInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGpsInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.GpsInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GpsInfo gps_info = 1;
 * @return {?proto.mavsdk.rpc.telemetry.GpsInfo}
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.prototype.getGpsInfo = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.GpsInfo} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.GpsInfo, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.GpsInfo|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfoResponse} returns this
*/
proto.mavsdk.rpc.telemetry.GpsInfoResponse.prototype.setGpsInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfoResponse} returns this
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.prototype.clearGpsInfo = function() {
  return this.setGpsInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.GpsInfoResponse.prototype.hasGpsInfo = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeRawGpsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.RawGpsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.RawGpsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.RawGpsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawGps: (f = msg.getRawGps()) && proto.mavsdk.rpc.telemetry.RawGps.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.RawGpsResponse}
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.RawGpsResponse;
  return proto.mavsdk.rpc.telemetry.RawGpsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.RawGpsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.RawGpsResponse}
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.RawGps;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.RawGps.deserializeBinaryFromReader);
      msg.setRawGps(value);
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
proto.mavsdk.rpc.telemetry.RawGpsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.RawGpsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.RawGpsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawGps();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.RawGps.serializeBinaryToWriter
    );
  }
};


/**
 * optional RawGps raw_gps = 1;
 * @return {?proto.mavsdk.rpc.telemetry.RawGps}
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.prototype.getRawGps = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.RawGps} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.RawGps, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.RawGps|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGpsResponse} returns this
*/
proto.mavsdk.rpc.telemetry.RawGpsResponse.prototype.setRawGps = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.RawGpsResponse} returns this
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.prototype.clearRawGps = function() {
  return this.setRawGps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.RawGpsResponse.prototype.hasRawGps = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeBatteryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.BatteryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.BatteryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.BatteryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    battery: (f = msg.getBattery()) && proto.mavsdk.rpc.telemetry.Battery.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.BatteryResponse}
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.BatteryResponse;
  return proto.mavsdk.rpc.telemetry.BatteryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.BatteryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.BatteryResponse}
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Battery;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Battery.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.BatteryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.BatteryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.BatteryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBattery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Battery.serializeBinaryToWriter
    );
  }
};


/**
 * optional Battery battery = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Battery}
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.prototype.getBattery = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Battery} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Battery, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Battery|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.BatteryResponse} returns this
*/
proto.mavsdk.rpc.telemetry.BatteryResponse.prototype.setBattery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.BatteryResponse} returns this
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.prototype.clearBattery = function() {
  return this.setBattery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.BatteryResponse.prototype.hasBattery = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeFlightModeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.FlightModeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.FlightModeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.FlightModeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.FlightModeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flightMode: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mavsdk.rpc.telemetry.FlightModeResponse}
 */
proto.mavsdk.rpc.telemetry.FlightModeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.FlightModeResponse;
  return proto.mavsdk.rpc.telemetry.FlightModeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.FlightModeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.FlightModeResponse}
 */
proto.mavsdk.rpc.telemetry.FlightModeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry.FlightMode} */ (reader.readEnum());
      msg.setFlightMode(value);
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
proto.mavsdk.rpc.telemetry.FlightModeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.FlightModeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.FlightModeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.FlightModeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlightMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional FlightMode flight_mode = 1;
 * @return {!proto.mavsdk.rpc.telemetry.FlightMode}
 */
proto.mavsdk.rpc.telemetry.FlightModeResponse.prototype.getFlightMode = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.FlightMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.FlightMode} value
 * @return {!proto.mavsdk.rpc.telemetry.FlightModeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.FlightModeResponse.prototype.setFlightMode = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHealthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHealthRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeHealthRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHealthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHealthRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHealthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.HealthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.HealthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.HealthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HealthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    health: (f = msg.getHealth()) && proto.mavsdk.rpc.telemetry.Health.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.HealthResponse}
 */
proto.mavsdk.rpc.telemetry.HealthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.HealthResponse;
  return proto.mavsdk.rpc.telemetry.HealthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.HealthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.HealthResponse}
 */
proto.mavsdk.rpc.telemetry.HealthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Health;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Health.deserializeBinaryFromReader);
      msg.setHealth(value);
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
proto.mavsdk.rpc.telemetry.HealthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.HealthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.HealthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HealthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Health.serializeBinaryToWriter
    );
  }
};


/**
 * optional Health health = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Health}
 */
proto.mavsdk.rpc.telemetry.HealthResponse.prototype.getHealth = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Health} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Health, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Health|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.HealthResponse} returns this
*/
proto.mavsdk.rpc.telemetry.HealthResponse.prototype.setHealth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.HealthResponse} returns this
 */
proto.mavsdk.rpc.telemetry.HealthResponse.prototype.clearHealth = function() {
  return this.setHealth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.HealthResponse.prototype.hasHealth = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeRcStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.RcStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.RcStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.RcStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcStatus: (f = msg.getRcStatus()) && proto.mavsdk.rpc.telemetry.RcStatus.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.RcStatusResponse}
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.RcStatusResponse;
  return proto.mavsdk.rpc.telemetry.RcStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.RcStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.RcStatusResponse}
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.RcStatus;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.RcStatus.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.RcStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.RcStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.RcStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRcStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.RcStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional RcStatus rc_status = 1;
 * @return {?proto.mavsdk.rpc.telemetry.RcStatus}
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.prototype.getRcStatus = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.RcStatus} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.RcStatus, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.RcStatus|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.RcStatusResponse} returns this
*/
proto.mavsdk.rpc.telemetry.RcStatusResponse.prototype.setRcStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.RcStatusResponse} returns this
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.prototype.clearRcStatus = function() {
  return this.setRcStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.RcStatusResponse.prototype.hasRcStatus = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeStatusTextRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.StatusTextResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.StatusTextResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.StatusTextResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusText: (f = msg.getStatusText()) && proto.mavsdk.rpc.telemetry.StatusText.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.StatusTextResponse}
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.StatusTextResponse;
  return proto.mavsdk.rpc.telemetry.StatusTextResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.StatusTextResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.StatusTextResponse}
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.StatusText;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.StatusText.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.StatusTextResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.StatusTextResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.StatusTextResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.StatusText.serializeBinaryToWriter
    );
  }
};


/**
 * optional StatusText status_text = 1;
 * @return {?proto.mavsdk.rpc.telemetry.StatusText}
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.prototype.getStatusText = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.StatusText} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.StatusText, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.StatusText|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.StatusTextResponse} returns this
*/
proto.mavsdk.rpc.telemetry.StatusTextResponse.prototype.setStatusText = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.StatusTextResponse} returns this
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.prototype.clearStatusText = function() {
  return this.setStatusText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.StatusTextResponse.prototype.hasStatusText = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actuatorControlTarget: (f = msg.getActuatorControlTarget()) && proto.mavsdk.rpc.telemetry.ActuatorControlTarget.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse;
  return proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.ActuatorControlTarget;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.ActuatorControlTarget.deserializeBinaryFromReader);
      msg.setActuatorControlTarget(value);
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
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActuatorControlTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.ActuatorControlTarget.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActuatorControlTarget actuator_control_target = 1;
 * @return {?proto.mavsdk.rpc.telemetry.ActuatorControlTarget}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.prototype.getActuatorControlTarget = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.ActuatorControlTarget} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.ActuatorControlTarget, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.ActuatorControlTarget|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse} returns this
*/
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.prototype.setActuatorControlTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.prototype.clearActuatorControlTarget = function() {
  return this.setActuatorControlTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTargetResponse.prototype.hasActuatorControlTarget = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actuatorOutputStatus: (f = msg.getActuatorOutputStatus()) && proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse;
  return proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.ActuatorOutputStatus;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.deserializeBinaryFromReader);
      msg.setActuatorOutputStatus(value);
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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActuatorOutputStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActuatorOutputStatus actuator_output_status = 1;
 * @return {?proto.mavsdk.rpc.telemetry.ActuatorOutputStatus}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.prototype.getActuatorOutputStatus = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.ActuatorOutputStatus, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.ActuatorOutputStatus|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse} returns this
*/
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.prototype.setActuatorOutputStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.prototype.clearActuatorOutputStatus = function() {
  return this.setActuatorOutputStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatusResponse.prototype.hasActuatorOutputStatus = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeOdometryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.OdometryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.OdometryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.OdometryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    odometry: (f = msg.getOdometry()) && proto.mavsdk.rpc.telemetry.Odometry.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.OdometryResponse}
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.OdometryResponse;
  return proto.mavsdk.rpc.telemetry.OdometryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.OdometryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.OdometryResponse}
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Odometry;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Odometry.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.OdometryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.OdometryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.OdometryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOdometry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Odometry.serializeBinaryToWriter
    );
  }
};


/**
 * optional Odometry odometry = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Odometry}
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.prototype.getOdometry = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Odometry} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Odometry, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Odometry|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.OdometryResponse} returns this
*/
proto.mavsdk.rpc.telemetry.OdometryResponse.prototype.setOdometry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.OdometryResponse} returns this
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.prototype.clearOdometry = function() {
  return this.setOdometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.OdometryResponse.prototype.hasOdometry = function() {
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
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest;
  return proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionVelocityNed: (f = msg.getPositionVelocityNed()) && proto.mavsdk.rpc.telemetry.PositionVelocityNed.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse;
  return proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.PositionVelocityNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.PositionVelocityNed.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionVelocityNed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.PositionVelocityNed.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionVelocityNed position_velocity_ned = 1;
 * @return {?proto.mavsdk.rpc.telemetry.PositionVelocityNed}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.prototype.getPositionVelocityNed = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.PositionVelocityNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.PositionVelocityNed, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.PositionVelocityNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse} returns this
*/
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.prototype.setPositionVelocityNed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse} returns this
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.prototype.clearPositionVelocityNed = function() {
  return this.setPositionVelocityNed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNedResponse.prototype.hasPositionVelocityNed = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeGroundTruthRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.GroundTruthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GroundTruthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GroundTruthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    groundTruth: (f = msg.getGroundTruth()) && proto.mavsdk.rpc.telemetry.GroundTruth.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruthResponse}
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GroundTruthResponse;
  return proto.mavsdk.rpc.telemetry.GroundTruthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GroundTruthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruthResponse}
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.GroundTruth;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.GroundTruth.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.GroundTruthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GroundTruthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GroundTruthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundTruth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.GroundTruth.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroundTruth ground_truth = 1;
 * @return {?proto.mavsdk.rpc.telemetry.GroundTruth}
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.prototype.getGroundTruth = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.GroundTruth} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.GroundTruth, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.GroundTruth|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruthResponse} returns this
*/
proto.mavsdk.rpc.telemetry.GroundTruthResponse.prototype.setGroundTruth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruthResponse} returns this
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.prototype.clearGroundTruth = function() {
  return this.setGroundTruth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.GroundTruthResponse.prototype.hasGroundTruth = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedwingMetrics: (f = msg.getFixedwingMetrics()) && proto.mavsdk.rpc.telemetry.FixedwingMetrics.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse;
  return proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.FixedwingMetrics;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.FixedwingMetrics.deserializeBinaryFromReader);
      msg.setFixedwingMetrics(value);
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
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFixedwingMetrics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.FixedwingMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * optional FixedwingMetrics fixedwing_metrics = 1;
 * @return {?proto.mavsdk.rpc.telemetry.FixedwingMetrics}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.prototype.getFixedwingMetrics = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.FixedwingMetrics} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.FixedwingMetrics, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.FixedwingMetrics|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse} returns this
*/
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.prototype.setFixedwingMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse} returns this
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.prototype.clearFixedwingMetrics = function() {
  return this.setFixedwingMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetricsResponse.prototype.hasFixedwingMetrics = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeImuRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeImuRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeImuRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeImuRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeImuRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeImuRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    imu: (f = msg.getImu()) && proto.mavsdk.rpc.telemetry.Imu.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.ImuResponse}
 */
proto.mavsdk.rpc.telemetry.ImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ImuResponse;
  return proto.mavsdk.rpc.telemetry.ImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ImuResponse}
 */
proto.mavsdk.rpc.telemetry.ImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Imu;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Imu.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.ImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Imu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Imu imu = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Imu}
 */
proto.mavsdk.rpc.telemetry.ImuResponse.prototype.getImu = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Imu} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Imu, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Imu|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.ImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry.ImuResponse.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.ImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry.ImuResponse.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.ImuResponse.prototype.hasImu = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledImuRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ScaledImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ScaledImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ScaledImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    imu: (f = msg.getImu()) && proto.mavsdk.rpc.telemetry.Imu.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.ScaledImuResponse}
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ScaledImuResponse;
  return proto.mavsdk.rpc.telemetry.ScaledImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ScaledImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ScaledImuResponse}
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Imu;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Imu.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.ScaledImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ScaledImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ScaledImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Imu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Imu imu = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Imu}
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.prototype.getImu = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Imu} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Imu, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Imu|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry.ScaledImuResponse.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.ScaledImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.ScaledImuResponse.prototype.hasImu = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeRawImuRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.RawImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.RawImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.RawImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    imu: (f = msg.getImu()) && proto.mavsdk.rpc.telemetry.Imu.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.RawImuResponse}
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.RawImuResponse;
  return proto.mavsdk.rpc.telemetry.RawImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.RawImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.RawImuResponse}
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Imu;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Imu.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.RawImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.RawImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.RawImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Imu.serializeBinaryToWriter
    );
  }
};


/**
 * optional Imu imu = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Imu}
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.prototype.getImu = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Imu} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Imu, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Imu|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.RawImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry.RawImuResponse.prototype.setImu = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.RawImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.prototype.clearImu = function() {
  return this.setImu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.RawImuResponse.prototype.hasImu = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.HealthAllOkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.HealthAllOkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isHealthAllOk: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.mavsdk.rpc.telemetry.HealthAllOkResponse}
 */
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.HealthAllOkResponse;
  return proto.mavsdk.rpc.telemetry.HealthAllOkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.HealthAllOkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.HealthAllOkResponse}
 */
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHealthAllOk(value);
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
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.HealthAllOkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.HealthAllOkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsHealthAllOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_health_all_ok = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.prototype.getIsHealthAllOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.HealthAllOkResponse} returns this
 */
proto.mavsdk.rpc.telemetry.HealthAllOkResponse.prototype.setIsHealthAllOk = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse}
 */
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse;
  return proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse}
 */
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.prototype.getTimeUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.UnixEpochTimeResponse.prototype.setTimeUs = function(value) {
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
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.DistanceSensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    distanceSensor: (f = msg.getDistanceSensor()) && proto.mavsdk.rpc.telemetry.DistanceSensor.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse}
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.DistanceSensorResponse;
  return proto.mavsdk.rpc.telemetry.DistanceSensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse}
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.DistanceSensor;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.DistanceSensor.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.DistanceSensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistanceSensor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.DistanceSensor.serializeBinaryToWriter
    );
  }
};


/**
 * optional DistanceSensor distance_sensor = 1;
 * @return {?proto.mavsdk.rpc.telemetry.DistanceSensor}
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.prototype.getDistanceSensor = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.DistanceSensor} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.DistanceSensor, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.DistanceSensor|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse} returns this
*/
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.prototype.setDistanceSensor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensorResponse} returns this
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.prototype.clearDistanceSensor = function() {
  return this.setDistanceSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.DistanceSensorResponse.prototype.hasDistanceSensor = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeScaledPressureRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ScaledPressureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scaledPressure: (f = msg.getScaledPressure()) && proto.mavsdk.rpc.telemetry.ScaledPressure.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse}
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ScaledPressureResponse;
  return proto.mavsdk.rpc.telemetry.ScaledPressureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse}
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.ScaledPressure;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.ScaledPressure.deserializeBinaryFromReader);
      msg.setScaledPressure(value);
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
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ScaledPressureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScaledPressure();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.ScaledPressure.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScaledPressure scaled_pressure = 1;
 * @return {?proto.mavsdk.rpc.telemetry.ScaledPressure}
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.prototype.getScaledPressure = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.ScaledPressure} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.ScaledPressure, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.ScaledPressure|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse} returns this
*/
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.prototype.setScaledPressure = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressureResponse} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.prototype.clearScaledPressure = function() {
  return this.setScaledPressure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.ScaledPressureResponse.prototype.hasScaledPressure = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeHeadingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.HeadingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.HeadingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.HeadingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    headingDeg: (f = msg.getHeadingDeg()) && proto.mavsdk.rpc.telemetry.Heading.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.HeadingResponse}
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.HeadingResponse;
  return proto.mavsdk.rpc.telemetry.HeadingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.HeadingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.HeadingResponse}
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Heading;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Heading.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.HeadingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.HeadingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.HeadingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadingDeg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Heading.serializeBinaryToWriter
    );
  }
};


/**
 * optional Heading heading_deg = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Heading}
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.prototype.getHeadingDeg = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Heading} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Heading, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Heading|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.HeadingResponse} returns this
*/
proto.mavsdk.rpc.telemetry.HeadingResponse.prototype.setHeadingDeg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.HeadingResponse} returns this
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.prototype.clearHeadingDeg = function() {
  return this.setHeadingDeg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.HeadingResponse.prototype.hasHeadingDeg = function() {
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
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest;
  return proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest}
 */
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SubscribeAltitudeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AltitudeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AltitudeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AltitudeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    altitude: (f = msg.getAltitude()) && proto.mavsdk.rpc.telemetry.Altitude.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.AltitudeResponse}
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AltitudeResponse;
  return proto.mavsdk.rpc.telemetry.AltitudeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AltitudeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AltitudeResponse}
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.Altitude;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Altitude.deserializeBinaryFromReader);
      msg.setAltitude(value);
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
proto.mavsdk.rpc.telemetry.AltitudeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AltitudeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AltitudeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAltitude();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.Altitude.serializeBinaryToWriter
    );
  }
};


/**
 * optional Altitude altitude = 1;
 * @return {?proto.mavsdk.rpc.telemetry.Altitude}
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.prototype.getAltitude = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Altitude} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Altitude, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Altitude|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.AltitudeResponse} returns this
*/
proto.mavsdk.rpc.telemetry.AltitudeResponse.prototype.setAltitude = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.AltitudeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.prototype.clearAltitude = function() {
  return this.setAltitude(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.AltitudeResponse.prototype.hasAltitude = function() {
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
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRatePositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionRequest}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRatePositionRequest;
  return proto.mavsdk.rpc.telemetry.SetRatePositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionRequest}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRatePositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRatePositionRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRatePositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRatePositionResponse;
  return proto.mavsdk.rpc.telemetry.SetRatePositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRatePositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateHomeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateHomeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateHomeRequest;
  return proto.mavsdk.rpc.telemetry.SetRateHomeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateHomeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateHomeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateHomeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateHomeRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateHomeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateHomeResponse;
  return proto.mavsdk.rpc.telemetry.SetRateHomeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateHomeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateHomeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateHomeResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateInAirRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateInAirRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateInAirRequest;
  return proto.mavsdk.rpc.telemetry.SetRateInAirRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateInAirRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateInAirRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateInAirRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateInAirRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateInAirResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateInAirResponse;
  return proto.mavsdk.rpc.telemetry.SetRateInAirResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateInAirResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateInAirResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateInAirResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest;
  return proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse;
  return proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateLandedStateResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest;
  return proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse;
  return proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateVtolStateResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest;
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse;
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest;
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse;
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest;
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse;
  return proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateAttitudeAngularVelocityBodyResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest;
  return proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse;
  return proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateVelocityNedResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest;
  return proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse;
  return proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateGpsInfoResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest;
  return proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateRawGpsRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateBatteryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateBatteryRequest;
  return proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateBatteryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateBatteryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateBatteryResponse;
  return proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateBatteryResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateBatteryResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest;
  return proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse;
  return proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateRcStatusResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest;
  return proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse;
  return proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest;
  return proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse;
  return proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateOdometryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateOdometryRequest;
  return proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateOdometryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateOdometryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateOdometryResponse;
  return proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateOdometryResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateOdometryResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest;
  return proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse;
  return proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest;
  return proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse;
  return proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateGroundTruthResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest;
  return proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse;
  return proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateImuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateImuRequest;
  return proto.mavsdk.rpc.telemetry.SetRateImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateImuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateImuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateImuRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateImuRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateImuResponse;
  return proto.mavsdk.rpc.telemetry.SetRateImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateImuResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateImuResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest;
  return proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse;
  return proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateScaledImuResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawImuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateRawImuRequest;
  return proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawImuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawImuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateRawImuResponse;
  return proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateRawImuResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateRawImuResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest;
  return proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse;
  return proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest;
  return proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse;
  return proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateDistanceSensorResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest;
  return proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f),
    gpsGlobalOrigin: (f = msg.getGpsGlobalOrigin()) && proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse;
  return proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry.GpsGlobalOrigin;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.deserializeBinaryFromReader);
      msg.setGpsGlobalOrigin(value);
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
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
  f = message.getGpsGlobalOrigin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} returns this
*/
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} returns this
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.hasTelemetryResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GpsGlobalOrigin gps_global_origin = 2;
 * @return {?proto.mavsdk.rpc.telemetry.GpsGlobalOrigin}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.getGpsGlobalOrigin = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.GpsGlobalOrigin, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.GpsGlobalOrigin|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} returns this
*/
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.setGpsGlobalOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse} returns this
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.clearGpsGlobalOrigin = function() {
  return this.setGpsGlobalOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse.prototype.hasGpsGlobalOrigin = function() {
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
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest;
  return proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRateHz(value);
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
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.prototype.getRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeRequest.prototype.setRateHz = function(value) {
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
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    telemetryResult: (f = msg.getTelemetryResult()) && proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse;
  return proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.TelemetryResult;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader);
      msg.setTelemetryResult(value);
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
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTelemetryResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TelemetryResult telemetry_result = 1;
 * @return {?proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.prototype.getTelemetryResult = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.TelemetryResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.TelemetryResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.TelemetryResult|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse} returns this
*/
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.prototype.setTelemetryResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse} returns this
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.prototype.clearTelemetryResult = function() {
  return this.setTelemetryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.SetRateAltitudeResponse.prototype.hasTelemetryResult = function() {
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
proto.mavsdk.rpc.telemetry.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Position.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.Position}
 */
proto.mavsdk.rpc.telemetry.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Position;
  return proto.mavsdk.rpc.telemetry.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Position}
 */
proto.mavsdk.rpc.telemetry.Position.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Position.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.Position.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Position} returns this
 */
proto.mavsdk.rpc.telemetry.Position.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Position.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Position} returns this
 */
proto.mavsdk.rpc.telemetry.Position.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float absolute_altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Position.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Position} returns this
 */
proto.mavsdk.rpc.telemetry.Position.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float relative_altitude_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Position.prototype.getRelativeAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Position} returns this
 */
proto.mavsdk.rpc.telemetry.Position.prototype.setRelativeAltitudeM = function(value) {
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
proto.mavsdk.rpc.telemetry.Heading.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Heading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Heading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Heading.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.Heading}
 */
proto.mavsdk.rpc.telemetry.Heading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Heading;
  return proto.mavsdk.rpc.telemetry.Heading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Heading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Heading}
 */
proto.mavsdk.rpc.telemetry.Heading.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.Heading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Heading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Heading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Heading.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.Heading.prototype.getHeadingDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Heading} returns this
 */
proto.mavsdk.rpc.telemetry.Heading.prototype.setHeadingDeg = function(value) {
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
proto.mavsdk.rpc.telemetry.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Quaternion.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion}
 */
proto.mavsdk.rpc.telemetry.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Quaternion;
  return proto.mavsdk.rpc.telemetry.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion}
 */
proto.mavsdk.rpc.telemetry.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Quaternion.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float x = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float y = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float z = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 timestamp_us = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Quaternion} returns this
 */
proto.mavsdk.rpc.telemetry.Quaternion.prototype.setTimestampUs = function(value) {
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
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.EulerAngle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.EulerAngle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.EulerAngle.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.EulerAngle}
 */
proto.mavsdk.rpc.telemetry.EulerAngle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.EulerAngle;
  return proto.mavsdk.rpc.telemetry.EulerAngle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.EulerAngle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.EulerAngle}
 */
proto.mavsdk.rpc.telemetry.EulerAngle.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.EulerAngle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.EulerAngle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.EulerAngle.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.getRollDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.setRollDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float pitch_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.getPitchDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.setPitchDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float yaw_deg = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.getYawDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.setYawDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint64 timestamp_us = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.EulerAngle} returns this
 */
proto.mavsdk.rpc.telemetry.EulerAngle.prototype.setTimestampUs = function(value) {
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
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AngularVelocityBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AngularVelocityBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AngularVelocityBody;
  return proto.mavsdk.rpc.telemetry.AngularVelocityBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AngularVelocityBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AngularVelocityBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AngularVelocityBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.getRollRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.setRollRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float pitch_rad_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.getPitchRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.setPitchRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float yaw_rad_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.getYawRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry.AngularVelocityBody.prototype.setYawRadS = function(value) {
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
proto.mavsdk.rpc.telemetry.GpsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GpsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GpsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GpsInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfo}
 */
proto.mavsdk.rpc.telemetry.GpsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GpsInfo;
  return proto.mavsdk.rpc.telemetry.GpsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GpsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfo}
 */
proto.mavsdk.rpc.telemetry.GpsInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.mavsdk.rpc.telemetry.FixType} */ (reader.readEnum());
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
proto.mavsdk.rpc.telemetry.GpsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GpsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GpsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GpsInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.GpsInfo.prototype.getNumSatellites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfo} returns this
 */
proto.mavsdk.rpc.telemetry.GpsInfo.prototype.setNumSatellites = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FixType fix_type = 2;
 * @return {!proto.mavsdk.rpc.telemetry.FixType}
 */
proto.mavsdk.rpc.telemetry.GpsInfo.prototype.getFixType = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.FixType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.FixType} value
 * @return {!proto.mavsdk.rpc.telemetry.GpsInfo} returns this
 */
proto.mavsdk.rpc.telemetry.GpsInfo.prototype.setFixType = function(value) {
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
proto.mavsdk.rpc.telemetry.RawGps.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.RawGps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.RawGps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RawGps.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.RawGps}
 */
proto.mavsdk.rpc.telemetry.RawGps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.RawGps;
  return proto.mavsdk.rpc.telemetry.RawGps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.RawGps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.RawGps}
 */
proto.mavsdk.rpc.telemetry.RawGps.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.RawGps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.RawGps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.RawGps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RawGps.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.RawGps.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double latitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double longitude_deg = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float absolute_altitude_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float hdop = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getHdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setHdop = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float vdop = 6;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getVdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setVdop = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float velocity_m_s = 7;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getVelocityMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setVelocityMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float cog_deg = 8;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getCogDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setCogDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float altitude_ellipsoid_m = 9;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getAltitudeEllipsoidM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setAltitudeEllipsoidM = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float horizontal_uncertainty_m = 10;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getHorizontalUncertaintyM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setHorizontalUncertaintyM = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float vertical_uncertainty_m = 11;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getVerticalUncertaintyM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setVerticalUncertaintyM = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float velocity_uncertainty_m_s = 12;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getVelocityUncertaintyMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setVelocityUncertaintyMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float heading_uncertainty_deg = 13;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getHeadingUncertaintyDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setHeadingUncertaintyDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float yaw_deg = 14;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.getYawDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RawGps} returns this
 */
proto.mavsdk.rpc.telemetry.RawGps.prototype.setYawDeg = function(value) {
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
proto.mavsdk.rpc.telemetry.Battery.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Battery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Battery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Battery.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    temperatureDegc: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    voltageV: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    currentBatteryA: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    capacityConsumedAh: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    remainingPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.Battery}
 */
proto.mavsdk.rpc.telemetry.Battery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Battery;
  return proto.mavsdk.rpc.telemetry.Battery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Battery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Battery}
 */
proto.mavsdk.rpc.telemetry.Battery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperatureDegc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVoltageV(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrentBatteryA(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCapacityConsumedAh(value);
      break;
    case 6:
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
proto.mavsdk.rpc.telemetry.Battery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Battery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Battery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Battery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTemperatureDegc();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getVoltageV();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getCurrentBatteryA();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getCapacityConsumedAh();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getRemainingPercent();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Battery} returns this
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float temperature_degc = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.getTemperatureDegc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Battery} returns this
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.setTemperatureDegc = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float voltage_v = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.getVoltageV = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Battery} returns this
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.setVoltageV = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float current_battery_a = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.getCurrentBatteryA = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Battery} returns this
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.setCurrentBatteryA = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float capacity_consumed_ah = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.getCapacityConsumedAh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Battery} returns this
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.setCapacityConsumedAh = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float remaining_percent = 6;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.getRemainingPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Battery} returns this
 */
proto.mavsdk.rpc.telemetry.Battery.prototype.setRemainingPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.mavsdk.rpc.telemetry.Health.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Health.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Health} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Health.toObject = function(includeInstance, msg) {
  var f, obj = {
    isGyrometerCalibrationOk: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isAccelerometerCalibrationOk: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isMagnetometerCalibrationOk: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isLocalPositionOk: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isGlobalPositionOk: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isHomePositionOk: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isArmable: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.mavsdk.rpc.telemetry.Health}
 */
proto.mavsdk.rpc.telemetry.Health.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Health;
  return proto.mavsdk.rpc.telemetry.Health.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Health} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Health}
 */
proto.mavsdk.rpc.telemetry.Health.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGyrometerCalibrationOk(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAccelerometerCalibrationOk(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMagnetometerCalibrationOk(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLocalPositionOk(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGlobalPositionOk(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHomePositionOk(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArmable(value);
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
proto.mavsdk.rpc.telemetry.Health.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Health.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Health} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Health.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsGyrometerCalibrationOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIsAccelerometerCalibrationOk();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsMagnetometerCalibrationOk();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsLocalPositionOk();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsGlobalPositionOk();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsHomePositionOk();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIsArmable();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional bool is_gyrometer_calibration_ok = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsGyrometerCalibrationOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsGyrometerCalibrationOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_accelerometer_calibration_ok = 2;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsAccelerometerCalibrationOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsAccelerometerCalibrationOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_magnetometer_calibration_ok = 3;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsMagnetometerCalibrationOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsMagnetometerCalibrationOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_local_position_ok = 5;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsLocalPositionOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsLocalPositionOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_global_position_ok = 6;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsGlobalPositionOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsGlobalPositionOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_home_position_ok = 7;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsHomePositionOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsHomePositionOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool is_armable = 8;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Health.prototype.getIsArmable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.Health} returns this
 */
proto.mavsdk.rpc.telemetry.Health.prototype.setIsArmable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.mavsdk.rpc.telemetry.RcStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.RcStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.RcStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RcStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.RcStatus}
 */
proto.mavsdk.rpc.telemetry.RcStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.RcStatus;
  return proto.mavsdk.rpc.telemetry.RcStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.RcStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.RcStatus}
 */
proto.mavsdk.rpc.telemetry.RcStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.RcStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.RcStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.RcStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.RcStatus.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.RcStatus.prototype.getWasAvailableOnce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.RcStatus} returns this
 */
proto.mavsdk.rpc.telemetry.RcStatus.prototype.setWasAvailableOnce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_available = 2;
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.RcStatus.prototype.getIsAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.telemetry.RcStatus} returns this
 */
proto.mavsdk.rpc.telemetry.RcStatus.prototype.setIsAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float signal_strength_percent = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.RcStatus.prototype.getSignalStrengthPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.RcStatus} returns this
 */
proto.mavsdk.rpc.telemetry.RcStatus.prototype.setSignalStrengthPercent = function(value) {
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
proto.mavsdk.rpc.telemetry.StatusText.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.StatusText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.StatusText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.StatusText.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.StatusText}
 */
proto.mavsdk.rpc.telemetry.StatusText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.StatusText;
  return proto.mavsdk.rpc.telemetry.StatusText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.StatusText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.StatusText}
 */
proto.mavsdk.rpc.telemetry.StatusText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry.StatusTextType} */ (reader.readEnum());
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
proto.mavsdk.rpc.telemetry.StatusText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.StatusText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.StatusText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.StatusText.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.mavsdk.rpc.telemetry.StatusTextType}
 */
proto.mavsdk.rpc.telemetry.StatusText.prototype.getType = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.StatusTextType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.StatusTextType} value
 * @return {!proto.mavsdk.rpc.telemetry.StatusText} returns this
 */
proto.mavsdk.rpc.telemetry.StatusText.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.mavsdk.rpc.telemetry.StatusText.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.telemetry.StatusText} returns this
 */
proto.mavsdk.rpc.telemetry.StatusText.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.repeatedFields_ = [2];



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
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ActuatorControlTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ActuatorControlTarget;
  return proto.mavsdk.rpc.telemetry.ActuatorControlTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ActuatorControlTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.getGroup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.setGroup = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated float controls = 2;
 * @return {!Array<number>}
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.getControlsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.setControlsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.addControls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorControlTarget} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorControlTarget.prototype.clearControlsList = function() {
  return this.setControlsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.repeatedFields_ = [2];



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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ActuatorOutputStatus;
  return proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.getActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.setActive = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated float actuator = 2;
 * @return {!Array<number>}
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.getActuatorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.setActuatorList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.addActuator = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.telemetry.ActuatorOutputStatus} returns this
 */
proto.mavsdk.rpc.telemetry.ActuatorOutputStatus.prototype.clearActuatorList = function() {
  return this.setActuatorList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.telemetry.Covariance.repeatedFields_ = [1];



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
proto.mavsdk.rpc.telemetry.Covariance.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Covariance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Covariance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Covariance.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.Covariance}
 */
proto.mavsdk.rpc.telemetry.Covariance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Covariance;
  return proto.mavsdk.rpc.telemetry.Covariance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Covariance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Covariance}
 */
proto.mavsdk.rpc.telemetry.Covariance.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.Covariance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Covariance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Covariance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Covariance.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.Covariance.prototype.getCovarianceMatrixList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mavsdk.rpc.telemetry.Covariance} returns this
 */
proto.mavsdk.rpc.telemetry.Covariance.prototype.setCovarianceMatrixList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.telemetry.Covariance} returns this
 */
proto.mavsdk.rpc.telemetry.Covariance.prototype.addCovarianceMatrix = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.telemetry.Covariance} returns this
 */
proto.mavsdk.rpc.telemetry.Covariance.prototype.clearCovarianceMatrixList = function() {
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
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.VelocityBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.VelocityBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VelocityBody.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.VelocityBody}
 */
proto.mavsdk.rpc.telemetry.VelocityBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.VelocityBody;
  return proto.mavsdk.rpc.telemetry.VelocityBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.VelocityBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.VelocityBody}
 */
proto.mavsdk.rpc.telemetry.VelocityBody.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.VelocityBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.VelocityBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VelocityBody.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.getXMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.setXMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y_m_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.getYMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.setYMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z_m_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.getZMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityBody} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityBody.prototype.setZMS = function(value) {
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
proto.mavsdk.rpc.telemetry.PositionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.PositionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.PositionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionBody.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.PositionBody}
 */
proto.mavsdk.rpc.telemetry.PositionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.PositionBody;
  return proto.mavsdk.rpc.telemetry.PositionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.PositionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.PositionBody}
 */
proto.mavsdk.rpc.telemetry.PositionBody.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.PositionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.PositionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.PositionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionBody.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.PositionBody.prototype.getXM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionBody} returns this
 */
proto.mavsdk.rpc.telemetry.PositionBody.prototype.setXM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.PositionBody.prototype.getYM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionBody} returns this
 */
proto.mavsdk.rpc.telemetry.PositionBody.prototype.setYM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.PositionBody.prototype.getZM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionBody} returns this
 */
proto.mavsdk.rpc.telemetry.PositionBody.prototype.setZM = function(value) {
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
proto.mavsdk.rpc.telemetry.Odometry.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Odometry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Odometry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Odometry.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeUsec: jspb.Message.getFieldWithDefault(msg, 1, 0),
    frameId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    childFrameId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    positionBody: (f = msg.getPositionBody()) && proto.mavsdk.rpc.telemetry.PositionBody.toObject(includeInstance, f),
    q: (f = msg.getQ()) && proto.mavsdk.rpc.telemetry.Quaternion.toObject(includeInstance, f),
    velocityBody: (f = msg.getVelocityBody()) && proto.mavsdk.rpc.telemetry.VelocityBody.toObject(includeInstance, f),
    angularVelocityBody: (f = msg.getAngularVelocityBody()) && proto.mavsdk.rpc.telemetry.AngularVelocityBody.toObject(includeInstance, f),
    poseCovariance: (f = msg.getPoseCovariance()) && proto.mavsdk.rpc.telemetry.Covariance.toObject(includeInstance, f),
    velocityCovariance: (f = msg.getVelocityCovariance()) && proto.mavsdk.rpc.telemetry.Covariance.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.Odometry}
 */
proto.mavsdk.rpc.telemetry.Odometry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Odometry;
  return proto.mavsdk.rpc.telemetry.Odometry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Odometry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry}
 */
proto.mavsdk.rpc.telemetry.Odometry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame} */ (reader.readEnum());
      msg.setFrameId(value);
      break;
    case 3:
      var value = /** @type {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame} */ (reader.readEnum());
      msg.setChildFrameId(value);
      break;
    case 4:
      var value = new proto.mavsdk.rpc.telemetry.PositionBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.PositionBody.deserializeBinaryFromReader);
      msg.setPositionBody(value);
      break;
    case 5:
      var value = new proto.mavsdk.rpc.telemetry.Quaternion;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Quaternion.deserializeBinaryFromReader);
      msg.setQ(value);
      break;
    case 6:
      var value = new proto.mavsdk.rpc.telemetry.VelocityBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.VelocityBody.deserializeBinaryFromReader);
      msg.setVelocityBody(value);
      break;
    case 7:
      var value = new proto.mavsdk.rpc.telemetry.AngularVelocityBody;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.AngularVelocityBody.deserializeBinaryFromReader);
      msg.setAngularVelocityBody(value);
      break;
    case 8:
      var value = new proto.mavsdk.rpc.telemetry.Covariance;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Covariance.deserializeBinaryFromReader);
      msg.setPoseCovariance(value);
      break;
    case 9:
      var value = new proto.mavsdk.rpc.telemetry.Covariance;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.Covariance.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.Odometry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Odometry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Odometry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Odometry.serializeBinaryToWriter = function(message, writer) {
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
      proto.mavsdk.rpc.telemetry.PositionBody.serializeBinaryToWriter
    );
  }
  f = message.getQ();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mavsdk.rpc.telemetry.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getVelocityBody();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.mavsdk.rpc.telemetry.VelocityBody.serializeBinaryToWriter
    );
  }
  f = message.getAngularVelocityBody();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.mavsdk.rpc.telemetry.AngularVelocityBody.serializeBinaryToWriter
    );
  }
  f = message.getPoseCovariance();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.mavsdk.rpc.telemetry.Covariance.serializeBinaryToWriter
    );
  }
  f = message.getVelocityCovariance();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.mavsdk.rpc.telemetry.Covariance.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry.Odometry.MavFrame = {
  MAV_FRAME_UNDEF: 0,
  MAV_FRAME_BODY_NED: 8,
  MAV_FRAME_VISION_NED: 16,
  MAV_FRAME_ESTIM_NED: 18
};

/**
 * optional uint64 time_usec = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getTimeUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.setTimeUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MavFrame frame_id = 2;
 * @return {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getFrameId = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional MavFrame child_frame_id = 3;
 * @return {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getChildFrameId = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.Odometry.MavFrame} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.setChildFrameId = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional PositionBody position_body = 4;
 * @return {?proto.mavsdk.rpc.telemetry.PositionBody}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getPositionBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.PositionBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.PositionBody, 4));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.PositionBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry.Odometry.prototype.setPositionBody = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.clearPositionBody = function() {
  return this.setPositionBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.hasPositionBody = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Quaternion q = 5;
 * @return {?proto.mavsdk.rpc.telemetry.Quaternion}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getQ = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Quaternion, 5));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Quaternion|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry.Odometry.prototype.setQ = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.clearQ = function() {
  return this.setQ(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.hasQ = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VelocityBody velocity_body = 6;
 * @return {?proto.mavsdk.rpc.telemetry.VelocityBody}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getVelocityBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.VelocityBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.VelocityBody, 6));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.VelocityBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry.Odometry.prototype.setVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.clearVelocityBody = function() {
  return this.setVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.hasVelocityBody = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AngularVelocityBody angular_velocity_body = 7;
 * @return {?proto.mavsdk.rpc.telemetry.AngularVelocityBody}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getAngularVelocityBody = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.AngularVelocityBody} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.AngularVelocityBody, 7));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.AngularVelocityBody|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry.Odometry.prototype.setAngularVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.clearAngularVelocityBody = function() {
  return this.setAngularVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.hasAngularVelocityBody = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Covariance pose_covariance = 8;
 * @return {?proto.mavsdk.rpc.telemetry.Covariance}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getPoseCovariance = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Covariance} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Covariance, 8));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Covariance|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry.Odometry.prototype.setPoseCovariance = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.clearPoseCovariance = function() {
  return this.setPoseCovariance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.hasPoseCovariance = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Covariance velocity_covariance = 9;
 * @return {?proto.mavsdk.rpc.telemetry.Covariance}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.getVelocityCovariance = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.Covariance} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.Covariance, 9));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.Covariance|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
*/
proto.mavsdk.rpc.telemetry.Odometry.prototype.setVelocityCovariance = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Odometry} returns this
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.clearVelocityCovariance = function() {
  return this.setVelocityCovariance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Odometry.prototype.hasVelocityCovariance = function() {
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
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.DistanceSensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.DistanceSensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    minimumDistanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maximumDistanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    currentDistanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    orientation: (f = msg.getOrientation()) && proto.mavsdk.rpc.telemetry.EulerAngle.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.DistanceSensor;
  return proto.mavsdk.rpc.telemetry.DistanceSensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.DistanceSensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new proto.mavsdk.rpc.telemetry.EulerAngle;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.EulerAngle.deserializeBinaryFromReader);
      msg.setOrientation(value);
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
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.DistanceSensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.DistanceSensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOrientation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mavsdk.rpc.telemetry.EulerAngle.serializeBinaryToWriter
    );
  }
};


/**
 * optional float minimum_distance_m = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.getMinimumDistanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.setMinimumDistanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float maximum_distance_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.getMaximumDistanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.setMaximumDistanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float current_distance_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.getCurrentDistanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.setCurrentDistanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional EulerAngle orientation = 4;
 * @return {?proto.mavsdk.rpc.telemetry.EulerAngle}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.getOrientation = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.EulerAngle} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.EulerAngle, 4));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.EulerAngle|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor} returns this
*/
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.setOrientation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.DistanceSensor} returns this
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.clearOrientation = function() {
  return this.setOrientation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.DistanceSensor.prototype.hasOrientation = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.ScaledPressure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.ScaledPressure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure}
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.ScaledPressure;
  return proto.mavsdk.rpc.telemetry.ScaledPressure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.ScaledPressure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure}
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.ScaledPressure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.ScaledPressure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.setTimestampUs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float absolute_pressure_hpa = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.getAbsolutePressureHpa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.setAbsolutePressureHpa = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float differential_pressure_hpa = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.getDifferentialPressureHpa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.setDifferentialPressureHpa = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float temperature_deg = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.getTemperatureDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.setTemperatureDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float differential_pressure_temperature_deg = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.getDifferentialPressureTemperatureDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.ScaledPressure} returns this
 */
proto.mavsdk.rpc.telemetry.ScaledPressure.prototype.setDifferentialPressureTemperatureDeg = function(value) {
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
proto.mavsdk.rpc.telemetry.PositionNed.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.PositionNed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.PositionNed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionNed.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.PositionNed}
 */
proto.mavsdk.rpc.telemetry.PositionNed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.PositionNed;
  return proto.mavsdk.rpc.telemetry.PositionNed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.PositionNed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.PositionNed}
 */
proto.mavsdk.rpc.telemetry.PositionNed.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.PositionNed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.PositionNed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.PositionNed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionNed.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.PositionNed.prototype.getNorthM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionNed} returns this
 */
proto.mavsdk.rpc.telemetry.PositionNed.prototype.setNorthM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float east_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.PositionNed.prototype.getEastM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionNed} returns this
 */
proto.mavsdk.rpc.telemetry.PositionNed.prototype.setEastM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.PositionNed.prototype.getDownM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionNed} returns this
 */
proto.mavsdk.rpc.telemetry.PositionNed.prototype.setDownM = function(value) {
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
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.VelocityNed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.VelocityNed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VelocityNed.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNed}
 */
proto.mavsdk.rpc.telemetry.VelocityNed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.VelocityNed;
  return proto.mavsdk.rpc.telemetry.VelocityNed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.VelocityNed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNed}
 */
proto.mavsdk.rpc.telemetry.VelocityNed.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.VelocityNed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.VelocityNed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.VelocityNed.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.getNorthMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.setNorthMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float east_m_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.getEastMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.setEastMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_m_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.getDownMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.VelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry.VelocityNed.prototype.setDownMS = function(value) {
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
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.PositionVelocityNed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.mavsdk.rpc.telemetry.PositionNed.toObject(includeInstance, f),
    velocity: (f = msg.getVelocity()) && proto.mavsdk.rpc.telemetry.VelocityNed.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNed}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.PositionVelocityNed;
  return proto.mavsdk.rpc.telemetry.PositionVelocityNed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNed}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.PositionNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.PositionNed.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry.VelocityNed;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.VelocityNed.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.PositionVelocityNed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.PositionNed.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry.VelocityNed.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionNed position = 1;
 * @return {?proto.mavsdk.rpc.telemetry.PositionNed}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.getPosition = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.PositionNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.PositionNed, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.PositionNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} returns this
*/
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VelocityNed velocity = 2;
 * @return {?proto.mavsdk.rpc.telemetry.VelocityNed}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.getVelocity = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.VelocityNed} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.VelocityNed, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.VelocityNed|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} returns this
*/
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.PositionVelocityNed} returns this
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.PositionVelocityNed.prototype.hasVelocity = function() {
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
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GroundTruth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GroundTruth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GroundTruth.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruth}
 */
proto.mavsdk.rpc.telemetry.GroundTruth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GroundTruth;
  return proto.mavsdk.rpc.telemetry.GroundTruth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GroundTruth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruth}
 */
proto.mavsdk.rpc.telemetry.GroundTruth.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GroundTruth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GroundTruth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GroundTruth.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruth} returns this
 */
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruth} returns this
 */
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float absolute_altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GroundTruth} returns this
 */
proto.mavsdk.rpc.telemetry.GroundTruth.prototype.setAbsoluteAltitudeM = function(value) {
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
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.FixedwingMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.FixedwingMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetrics}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.FixedwingMetrics;
  return proto.mavsdk.rpc.telemetry.FixedwingMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.FixedwingMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetrics}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.FixedwingMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.FixedwingMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.getAirspeedMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetrics} returns this
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.setAirspeedMS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float throttle_percentage = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.getThrottlePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetrics} returns this
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.setThrottlePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float climb_rate_m_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.getClimbRateMS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.FixedwingMetrics} returns this
 */
proto.mavsdk.rpc.telemetry.FixedwingMetrics.prototype.setClimbRateMS = function(value) {
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
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AccelerationFrd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AccelerationFrd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.AccelerationFrd}
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AccelerationFrd;
  return proto.mavsdk.rpc.telemetry.AccelerationFrd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AccelerationFrd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AccelerationFrd}
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AccelerationFrd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AccelerationFrd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.getForwardMS2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AccelerationFrd} returns this
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.setForwardMS2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float right_m_s2 = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.getRightMS2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AccelerationFrd} returns this
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.setRightMS2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_m_s2 = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.getDownMS2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AccelerationFrd} returns this
 */
proto.mavsdk.rpc.telemetry.AccelerationFrd.prototype.setDownMS2 = function(value) {
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
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.AngularVelocityFrd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.AngularVelocityFrd;
  return proto.mavsdk.rpc.telemetry.AngularVelocityFrd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.AngularVelocityFrd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.getForwardRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd} returns this
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.setForwardRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float right_rad_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.getRightRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd} returns this
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.setRightRadS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_rad_s = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.getDownRadS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.AngularVelocityFrd} returns this
 */
proto.mavsdk.rpc.telemetry.AngularVelocityFrd.prototype.setDownRadS = function(value) {
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
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.MagneticFieldFrd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd}
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.MagneticFieldFrd;
  return proto.mavsdk.rpc.telemetry.MagneticFieldFrd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd}
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.MagneticFieldFrd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.getForwardGauss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd} returns this
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.setForwardGauss = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float right_gauss = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.getRightGauss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd} returns this
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.setRightGauss = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float down_gauss = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.getDownGauss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.MagneticFieldFrd} returns this
 */
proto.mavsdk.rpc.telemetry.MagneticFieldFrd.prototype.setDownGauss = function(value) {
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
proto.mavsdk.rpc.telemetry.Imu.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Imu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Imu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Imu.toObject = function(includeInstance, msg) {
  var f, obj = {
    accelerationFrd: (f = msg.getAccelerationFrd()) && proto.mavsdk.rpc.telemetry.AccelerationFrd.toObject(includeInstance, f),
    angularVelocityFrd: (f = msg.getAngularVelocityFrd()) && proto.mavsdk.rpc.telemetry.AngularVelocityFrd.toObject(includeInstance, f),
    magneticFieldFrd: (f = msg.getMagneticFieldFrd()) && proto.mavsdk.rpc.telemetry.MagneticFieldFrd.toObject(includeInstance, f),
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
 * @return {!proto.mavsdk.rpc.telemetry.Imu}
 */
proto.mavsdk.rpc.telemetry.Imu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Imu;
  return proto.mavsdk.rpc.telemetry.Imu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Imu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Imu}
 */
proto.mavsdk.rpc.telemetry.Imu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.telemetry.AccelerationFrd;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.AccelerationFrd.deserializeBinaryFromReader);
      msg.setAccelerationFrd(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.telemetry.AngularVelocityFrd;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.AngularVelocityFrd.deserializeBinaryFromReader);
      msg.setAngularVelocityFrd(value);
      break;
    case 3:
      var value = new proto.mavsdk.rpc.telemetry.MagneticFieldFrd;
      reader.readMessage(value,proto.mavsdk.rpc.telemetry.MagneticFieldFrd.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.telemetry.Imu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Imu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Imu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Imu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccelerationFrd();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.telemetry.AccelerationFrd.serializeBinaryToWriter
    );
  }
  f = message.getAngularVelocityFrd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.telemetry.AngularVelocityFrd.serializeBinaryToWriter
    );
  }
  f = message.getMagneticFieldFrd();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mavsdk.rpc.telemetry.MagneticFieldFrd.serializeBinaryToWriter
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
 * @return {?proto.mavsdk.rpc.telemetry.AccelerationFrd}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.getAccelerationFrd = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.AccelerationFrd} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.AccelerationFrd, 1));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.AccelerationFrd|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
*/
proto.mavsdk.rpc.telemetry.Imu.prototype.setAccelerationFrd = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.clearAccelerationFrd = function() {
  return this.setAccelerationFrd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.hasAccelerationFrd = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AngularVelocityFrd angular_velocity_frd = 2;
 * @return {?proto.mavsdk.rpc.telemetry.AngularVelocityFrd}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.getAngularVelocityFrd = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.AngularVelocityFrd} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.AngularVelocityFrd, 2));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.AngularVelocityFrd|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
*/
proto.mavsdk.rpc.telemetry.Imu.prototype.setAngularVelocityFrd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.clearAngularVelocityFrd = function() {
  return this.setAngularVelocityFrd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.hasAngularVelocityFrd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MagneticFieldFrd magnetic_field_frd = 3;
 * @return {?proto.mavsdk.rpc.telemetry.MagneticFieldFrd}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.getMagneticFieldFrd = function() {
  return /** @type{?proto.mavsdk.rpc.telemetry.MagneticFieldFrd} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.telemetry.MagneticFieldFrd, 3));
};


/**
 * @param {?proto.mavsdk.rpc.telemetry.MagneticFieldFrd|undefined} value
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
*/
proto.mavsdk.rpc.telemetry.Imu.prototype.setMagneticFieldFrd = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.clearMagneticFieldFrd = function() {
  return this.setMagneticFieldFrd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.hasMagneticFieldFrd = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float temperature_degc = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.getTemperatureDegc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.setTemperatureDegc = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 timestamp_us = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.getTimestampUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Imu} returns this
 */
proto.mavsdk.rpc.telemetry.Imu.prototype.setTimestampUs = function(value) {
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
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    altitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin}
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.GpsGlobalOrigin;
  return proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin}
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAltitudeM(value);
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
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAltitudeM();
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
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} returns this
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} returns this
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.getAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.GpsGlobalOrigin} returns this
 */
proto.mavsdk.rpc.telemetry.GpsGlobalOrigin.prototype.setAltitudeM = function(value) {
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
proto.mavsdk.rpc.telemetry.Altitude.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.Altitude.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.Altitude} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Altitude.toObject = function(includeInstance, msg) {
  var f, obj = {
    altitudeMonotonicM: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    altitudeAmslM: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    altitudeLocalM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    altitudeRelativeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    altitudeTerrainM: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    bottomClearanceM: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.mavsdk.rpc.telemetry.Altitude}
 */
proto.mavsdk.rpc.telemetry.Altitude.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.Altitude;
  return proto.mavsdk.rpc.telemetry.Altitude.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.Altitude} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.Altitude}
 */
proto.mavsdk.rpc.telemetry.Altitude.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitudeMonotonicM(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitudeAmslM(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitudeLocalM(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitudeRelativeM(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAltitudeTerrainM(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottomClearanceM(value);
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
proto.mavsdk.rpc.telemetry.Altitude.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.Altitude.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.Altitude} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.Altitude.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAltitudeMonotonicM();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getAltitudeAmslM();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAltitudeLocalM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getAltitudeRelativeM();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAltitudeTerrainM();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getBottomClearanceM();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional float altitude_monotonic_m = 1;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.getAltitudeMonotonicM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Altitude} returns this
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.setAltitudeMonotonicM = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float altitude_amsl_m = 2;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.getAltitudeAmslM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Altitude} returns this
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.setAltitudeAmslM = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float altitude_local_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.getAltitudeLocalM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Altitude} returns this
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.setAltitudeLocalM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float altitude_relative_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.getAltitudeRelativeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Altitude} returns this
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.setAltitudeRelativeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float altitude_terrain_m = 5;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.getAltitudeTerrainM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Altitude} returns this
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.setAltitudeTerrainM = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float bottom_clearance_m = 6;
 * @return {number}
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.getBottomClearanceM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.telemetry.Altitude} returns this
 */
proto.mavsdk.rpc.telemetry.Altitude.prototype.setBottomClearanceM = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.mavsdk.rpc.telemetry.TelemetryResult.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.telemetry.TelemetryResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.telemetry.TelemetryResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.telemetry.TelemetryResult;
  return proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.telemetry.TelemetryResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.telemetry.TelemetryResult}
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.telemetry.TelemetryResult.Result} */ (reader.readEnum());
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
proto.mavsdk.rpc.telemetry.TelemetryResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.telemetry.TelemetryResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.telemetry.TelemetryResult.Result = {
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
 * @return {!proto.mavsdk.rpc.telemetry.TelemetryResult.Result}
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.prototype.getResult = function() {
  return /** @type {!proto.mavsdk.rpc.telemetry.TelemetryResult.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.telemetry.TelemetryResult.Result} value
 * @return {!proto.mavsdk.rpc.telemetry.TelemetryResult} returns this
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string result_str = 2;
 * @return {string}
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.prototype.getResultStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.telemetry.TelemetryResult} returns this
 */
proto.mavsdk.rpc.telemetry.TelemetryResult.prototype.setResultStr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry.FixType = {
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
proto.mavsdk.rpc.telemetry.FlightMode = {
  FLIGHT_MODE_UNKNOWN: 0,
  FLIGHT_MODE_READY: 1,
  FLIGHT_MODE_TAKEOFF: 2,
  FLIGHT_MODE_HOLD: 3,
  FLIGHT_MODE_MISSION: 4,
  FLIGHT_MODE_RETURN_TO_LAUNCH: 5,
  FLIGHT_MODE_LAND: 6,
  FLIGHT_MODE_OFFBOARD: 7,
  FLIGHT_MODE_FOLLOW_ME: 8,
  FLIGHT_MODE_MANUAL: 9,
  FLIGHT_MODE_ALTCTL: 10,
  FLIGHT_MODE_POSCTL: 11,
  FLIGHT_MODE_ACRO: 12,
  FLIGHT_MODE_STABILIZED: 13,
  FLIGHT_MODE_RATTITUDE: 14
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry.StatusTextType = {
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
proto.mavsdk.rpc.telemetry.LandedState = {
  LANDED_STATE_UNKNOWN: 0,
  LANDED_STATE_ON_GROUND: 1,
  LANDED_STATE_IN_AIR: 2,
  LANDED_STATE_TAKING_OFF: 3,
  LANDED_STATE_LANDING: 4
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.telemetry.VtolState = {
  VTOL_STATE_UNDEFINED: 0,
  VTOL_STATE_TRANSITION_TO_FW: 1,
  VTOL_STATE_TRANSITION_TO_MC: 2,
  VTOL_STATE_MC: 3,
  VTOL_STATE_FW: 4
};

goog.object.extend(exports, proto.mavsdk.rpc.telemetry);


// fix autocompletion
module.exports = exports;
