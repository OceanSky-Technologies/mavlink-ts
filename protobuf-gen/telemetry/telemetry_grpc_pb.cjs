/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var telemetry_telemetry_pb = require('../telemetry/telemetry_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_telemetry_ActuatorControlTargetResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.ActuatorControlTargetResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.ActuatorControlTargetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_ActuatorControlTargetResponse(buffer_arg) {
  return telemetry_telemetry_pb.ActuatorControlTargetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_ActuatorOutputStatusResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.ActuatorOutputStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.ActuatorOutputStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_ActuatorOutputStatusResponse(buffer_arg) {
  return telemetry_telemetry_pb.ActuatorOutputStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_AltitudeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.AltitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.AltitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_AltitudeResponse(buffer_arg) {
  return telemetry_telemetry_pb.AltitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_ArmedResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.ArmedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.ArmedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_ArmedResponse(buffer_arg) {
  return telemetry_telemetry_pb.ArmedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_AttitudeAngularVelocityBodyResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.AttitudeAngularVelocityBodyResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.AttitudeAngularVelocityBodyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_AttitudeAngularVelocityBodyResponse(buffer_arg) {
  return telemetry_telemetry_pb.AttitudeAngularVelocityBodyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_AttitudeEulerResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.AttitudeEulerResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.AttitudeEulerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_AttitudeEulerResponse(buffer_arg) {
  return telemetry_telemetry_pb.AttitudeEulerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_AttitudeQuaternionResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.AttitudeQuaternionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.AttitudeQuaternionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_AttitudeQuaternionResponse(buffer_arg) {
  return telemetry_telemetry_pb.AttitudeQuaternionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_BatteryResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.BatteryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.BatteryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_BatteryResponse(buffer_arg) {
  return telemetry_telemetry_pb.BatteryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_DistanceSensorResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.DistanceSensorResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.DistanceSensorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_DistanceSensorResponse(buffer_arg) {
  return telemetry_telemetry_pb.DistanceSensorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_FixedwingMetricsResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.FixedwingMetricsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.FixedwingMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_FixedwingMetricsResponse(buffer_arg) {
  return telemetry_telemetry_pb.FixedwingMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_FlightModeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.FlightModeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.FlightModeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_FlightModeResponse(buffer_arg) {
  return telemetry_telemetry_pb.FlightModeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.GetGpsGlobalOriginRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.GetGpsGlobalOriginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginRequest(buffer_arg) {
  return telemetry_telemetry_pb.GetGpsGlobalOriginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.GetGpsGlobalOriginResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.GetGpsGlobalOriginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginResponse(buffer_arg) {
  return telemetry_telemetry_pb.GetGpsGlobalOriginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_GpsInfoResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.GpsInfoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.GpsInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_GpsInfoResponse(buffer_arg) {
  return telemetry_telemetry_pb.GpsInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_GroundTruthResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.GroundTruthResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.GroundTruthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_GroundTruthResponse(buffer_arg) {
  return telemetry_telemetry_pb.GroundTruthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_HeadingResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.HeadingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.HeadingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_HeadingResponse(buffer_arg) {
  return telemetry_telemetry_pb.HeadingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_HealthAllOkResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.HealthAllOkResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.HealthAllOkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_HealthAllOkResponse(buffer_arg) {
  return telemetry_telemetry_pb.HealthAllOkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_HealthResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.HealthResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.HealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_HealthResponse(buffer_arg) {
  return telemetry_telemetry_pb.HealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_HomeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.HomeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.HomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_HomeResponse(buffer_arg) {
  return telemetry_telemetry_pb.HomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_ImuResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.ImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.ImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_ImuResponse(buffer_arg) {
  return telemetry_telemetry_pb.ImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_InAirResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.InAirResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.InAirResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_InAirResponse(buffer_arg) {
  return telemetry_telemetry_pb.InAirResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_LandedStateResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.LandedStateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.LandedStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_LandedStateResponse(buffer_arg) {
  return telemetry_telemetry_pb.LandedStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_OdometryResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.OdometryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.OdometryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_OdometryResponse(buffer_arg) {
  return telemetry_telemetry_pb.OdometryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_PositionResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.PositionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.PositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_PositionResponse(buffer_arg) {
  return telemetry_telemetry_pb.PositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_PositionVelocityNedResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.PositionVelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.PositionVelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_PositionVelocityNedResponse(buffer_arg) {
  return telemetry_telemetry_pb.PositionVelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_RawGpsResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.RawGpsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.RawGpsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_RawGpsResponse(buffer_arg) {
  return telemetry_telemetry_pb.RawGpsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_RawImuResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.RawImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.RawImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_RawImuResponse(buffer_arg) {
  return telemetry_telemetry_pb.RawImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_RcStatusResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.RcStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.RcStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_RcStatusResponse(buffer_arg) {
  return telemetry_telemetry_pb.RcStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_ScaledImuResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.ScaledImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.ScaledImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_ScaledImuResponse(buffer_arg) {
  return telemetry_telemetry_pb.ScaledImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_ScaledPressureResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.ScaledPressureResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.ScaledPressureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_ScaledPressureResponse(buffer_arg) {
  return telemetry_telemetry_pb.ScaledPressureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateActuatorControlTargetRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateActuatorControlTargetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateActuatorControlTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateActuatorControlTargetResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateActuatorControlTargetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateActuatorControlTargetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateActuatorOutputStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateActuatorOutputStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateActuatorOutputStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateActuatorOutputStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateActuatorOutputStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateActuatorOutputStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateAltitudeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateAltitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateAltitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateAltitudeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateAltitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateAltitudeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateAltitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateAltitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateAltitudeResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateAltitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateAttitudeEulerRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateAttitudeEulerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateAttitudeEulerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateAttitudeEulerResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateAttitudeEulerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateAttitudeEulerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateAttitudeQuaternionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateAttitudeQuaternionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateAttitudeQuaternionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateAttitudeQuaternionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateAttitudeQuaternionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateAttitudeQuaternionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateBatteryRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateBatteryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateBatteryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateBatteryRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateBatteryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateBatteryResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateBatteryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateBatteryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateBatteryResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateBatteryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateDistanceSensorRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateDistanceSensorRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateDistanceSensorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateDistanceSensorRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateDistanceSensorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateDistanceSensorResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateDistanceSensorResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateDistanceSensorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateDistanceSensorResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateDistanceSensorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateFixedwingMetricsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateFixedwingMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateFixedwingMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateFixedwingMetricsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateFixedwingMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateFixedwingMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateGpsInfoRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateGpsInfoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateGpsInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateGpsInfoRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateGpsInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateGpsInfoResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateGpsInfoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateGpsInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateGpsInfoResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateGpsInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateGroundTruthRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateGroundTruthRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateGroundTruthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateGroundTruthRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateGroundTruthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateGroundTruthResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateGroundTruthResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateGroundTruthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateGroundTruthResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateGroundTruthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateHomeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateHomeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateHomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateHomeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateHomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateHomeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateHomeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateHomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateHomeResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateHomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateImuRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateImuRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateImuResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateImuResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateInAirRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateInAirRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateInAirRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateInAirRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateInAirRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateInAirResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateInAirResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateInAirResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateInAirResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateInAirResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateLandedStateRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateLandedStateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateLandedStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateLandedStateRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateLandedStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateLandedStateResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateLandedStateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateLandedStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateLandedStateResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateLandedStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateOdometryRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateOdometryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateOdometryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateOdometryRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateOdometryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateOdometryResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateOdometryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateOdometryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateOdometryResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateOdometryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRatePositionRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRatePositionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRatePositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRatePositionRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRatePositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRatePositionResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRatePositionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRatePositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRatePositionResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRatePositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRatePositionVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRatePositionVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRatePositionVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRatePositionVelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRatePositionVelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRatePositionVelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateRawImuRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateRawImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateRawImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateRawImuRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateRawImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateRawImuResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateRawImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateRawImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateRawImuResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateRawImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateRcStatusRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateRcStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateRcStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateRcStatusRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateRcStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateRcStatusResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateRcStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateRcStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateRcStatusResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateRcStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateScaledImuRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateScaledImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateScaledImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateScaledImuRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateScaledImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateScaledImuResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateScaledImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateScaledImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateScaledImuResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateScaledImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateUnixEpochTimeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateUnixEpochTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateUnixEpochTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateUnixEpochTimeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateUnixEpochTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateUnixEpochTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateVelocityNedRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateVelocityNedRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateVelocityNedResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateVelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateVelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateVelocityNedResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateVelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateVtolStateRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateVtolStateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateVtolStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateVtolStateRequest(buffer_arg) {
  return telemetry_telemetry_pb.SetRateVtolStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SetRateVtolStateResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SetRateVtolStateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SetRateVtolStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SetRateVtolStateResponse(buffer_arg) {
  return telemetry_telemetry_pb.SetRateVtolStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_StatusTextResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.StatusTextResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.StatusTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_StatusTextResponse(buffer_arg) {
  return telemetry_telemetry_pb.StatusTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeActuatorControlTargetRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeActuatorControlTargetRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeActuatorControlTargetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeActuatorControlTargetRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeActuatorControlTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeActuatorOutputStatusRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeActuatorOutputStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeActuatorOutputStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeActuatorOutputStatusRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeActuatorOutputStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeAltitudeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeAltitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeAltitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeAltitudeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeAltitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeArmedRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeArmedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeArmedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeArmedRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeArmedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeAttitudeAngularVelocityBodyRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeAttitudeAngularVelocityBodyRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeAttitudeAngularVelocityBodyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeAttitudeAngularVelocityBodyRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeAttitudeAngularVelocityBodyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeAttitudeEulerRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeAttitudeEulerRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeAttitudeEulerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeAttitudeEulerRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeAttitudeEulerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeAttitudeQuaternionRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeAttitudeQuaternionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeAttitudeQuaternionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeAttitudeQuaternionRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeAttitudeQuaternionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeBatteryRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeBatteryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeBatteryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeBatteryRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeBatteryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeDistanceSensorRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeDistanceSensorRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeDistanceSensorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeDistanceSensorRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeDistanceSensorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeFixedwingMetricsRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeFixedwingMetricsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeFixedwingMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeFixedwingMetricsRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeFixedwingMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeFlightModeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeFlightModeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeFlightModeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeFlightModeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeFlightModeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeGpsInfoRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeGpsInfoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeGpsInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeGpsInfoRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeGpsInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeGroundTruthRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeGroundTruthRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeGroundTruthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeGroundTruthRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeGroundTruthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeHeadingRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeHeadingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeHeadingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeHeadingRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeHeadingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeHealthAllOkRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeHealthAllOkRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeHealthAllOkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeHealthAllOkRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeHealthAllOkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeHealthRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeHealthRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeHealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeHealthRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeHealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeHomeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeHomeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeHomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeHomeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeHomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeImuRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeImuRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeInAirRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeInAirRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeInAirRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeInAirRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeInAirRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeLandedStateRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeLandedStateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeLandedStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeLandedStateRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeLandedStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeOdometryRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeOdometryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeOdometryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeOdometryRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeOdometryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribePositionRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribePositionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribePositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribePositionRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribePositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribePositionVelocityNedRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribePositionVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribePositionVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribePositionVelocityNedRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribePositionVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeRawGpsRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeRawGpsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeRawGpsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeRawGpsRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeRawGpsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeRawImuRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeRawImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeRawImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeRawImuRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeRawImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeRcStatusRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeRcStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeRcStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeRcStatusRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeRcStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeScaledImuRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeScaledImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeScaledImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeScaledImuRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeScaledImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeScaledPressureRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeScaledPressureRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeScaledPressureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeScaledPressureRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeScaledPressureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeStatusTextRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeStatusTextRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeStatusTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeStatusTextRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeStatusTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeUnixEpochTimeRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeUnixEpochTimeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeUnixEpochTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeUnixEpochTimeRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeUnixEpochTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeVelocityNedRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeVelocityNedRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_SubscribeVtolStateRequest(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.SubscribeVtolStateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.SubscribeVtolStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_SubscribeVtolStateRequest(buffer_arg) {
  return telemetry_telemetry_pb.SubscribeVtolStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_UnixEpochTimeResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.UnixEpochTimeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.UnixEpochTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_UnixEpochTimeResponse(buffer_arg) {
  return telemetry_telemetry_pb.UnixEpochTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_VelocityNedResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.VelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.VelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_VelocityNedResponse(buffer_arg) {
  return telemetry_telemetry_pb.VelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_VtolStateResponse(arg) {
  if (!(arg instanceof telemetry_telemetry_pb.VtolStateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry.VtolStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_VtolStateResponse(buffer_arg) {
  return telemetry_telemetry_pb.VtolStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Allow users to get vehicle telemetry and state information
// (e.g. battery, GPS, RC connection, flight mode etc.) and set telemetry update rates.
var TelemetryServiceService = exports.TelemetryServiceService = {
  // Subscribe to 'position' updates.
subscribePosition: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribePosition',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribePositionRequest,
    responseType: telemetry_telemetry_pb.PositionResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribePositionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribePositionRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_PositionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_PositionResponse,
  },
  // Subscribe to 'home position' updates.
subscribeHome: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeHome',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeHomeRequest,
    responseType: telemetry_telemetry_pb.HomeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeHomeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeHomeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_HomeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_HomeResponse,
  },
  // Subscribe to in-air updates.
subscribeInAir: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeInAir',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeInAirRequest,
    responseType: telemetry_telemetry_pb.InAirResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeInAirRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeInAirRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_InAirResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_InAirResponse,
  },
  // Subscribe to landed state updates
subscribeLandedState: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeLandedState',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeLandedStateRequest,
    responseType: telemetry_telemetry_pb.LandedStateResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeLandedStateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeLandedStateRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_LandedStateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_LandedStateResponse,
  },
  // Subscribe to armed updates.
subscribeArmed: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeArmed',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeArmedRequest,
    responseType: telemetry_telemetry_pb.ArmedResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeArmedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeArmedRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_ArmedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_ArmedResponse,
  },
  // subscribe to vtol state Updates
subscribeVtolState: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeVtolState',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeVtolStateRequest,
    responseType: telemetry_telemetry_pb.VtolStateResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeVtolStateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeVtolStateRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_VtolStateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_VtolStateResponse,
  },
  // Subscribe to 'attitude' updates (quaternion).
subscribeAttitudeQuaternion: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeAttitudeQuaternion',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeAttitudeQuaternionRequest,
    responseType: telemetry_telemetry_pb.AttitudeQuaternionResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeAttitudeQuaternionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeAttitudeQuaternionRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_AttitudeQuaternionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_AttitudeQuaternionResponse,
  },
  // Subscribe to 'attitude' updates (Euler).
subscribeAttitudeEuler: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeAttitudeEuler',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeAttitudeEulerRequest,
    responseType: telemetry_telemetry_pb.AttitudeEulerResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeAttitudeEulerRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeAttitudeEulerRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_AttitudeEulerResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_AttitudeEulerResponse,
  },
  // Subscribe to 'attitude' updates (angular velocity)
subscribeAttitudeAngularVelocityBody: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeAttitudeAngularVelocityBody',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeAttitudeAngularVelocityBodyRequest,
    responseType: telemetry_telemetry_pb.AttitudeAngularVelocityBodyResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeAttitudeAngularVelocityBodyRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeAttitudeAngularVelocityBodyRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_AttitudeAngularVelocityBodyResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_AttitudeAngularVelocityBodyResponse,
  },
  // Subscribe to 'ground speed' updates (NED).
subscribeVelocityNed: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeVelocityNed',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeVelocityNedRequest,
    responseType: telemetry_telemetry_pb.VelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_VelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_VelocityNedResponse,
  },
  // Subscribe to 'GPS info' updates.
subscribeGpsInfo: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeGpsInfo',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeGpsInfoRequest,
    responseType: telemetry_telemetry_pb.GpsInfoResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeGpsInfoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeGpsInfoRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_GpsInfoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_GpsInfoResponse,
  },
  // Subscribe to 'Raw GPS' updates.
subscribeRawGps: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeRawGps',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeRawGpsRequest,
    responseType: telemetry_telemetry_pb.RawGpsResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeRawGpsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeRawGpsRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_RawGpsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_RawGpsResponse,
  },
  // Subscribe to 'battery' updates.
subscribeBattery: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeBattery',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeBatteryRequest,
    responseType: telemetry_telemetry_pb.BatteryResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeBatteryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeBatteryRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_BatteryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_BatteryResponse,
  },
  // Subscribe to 'flight mode' updates.
subscribeFlightMode: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeFlightMode',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeFlightModeRequest,
    responseType: telemetry_telemetry_pb.FlightModeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeFlightModeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeFlightModeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_FlightModeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_FlightModeResponse,
  },
  // Subscribe to 'health' updates.
subscribeHealth: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeHealth',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeHealthRequest,
    responseType: telemetry_telemetry_pb.HealthResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeHealthRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeHealthRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_HealthResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_HealthResponse,
  },
  // Subscribe to 'RC status' updates.
subscribeRcStatus: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeRcStatus',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeRcStatusRequest,
    responseType: telemetry_telemetry_pb.RcStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeRcStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeRcStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_RcStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_RcStatusResponse,
  },
  // Subscribe to 'status text' updates.
subscribeStatusText: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeStatusText',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeStatusTextRequest,
    responseType: telemetry_telemetry_pb.StatusTextResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeStatusTextRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeStatusTextRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_StatusTextResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_StatusTextResponse,
  },
  // Subscribe to 'actuator control target' updates.
subscribeActuatorControlTarget: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeActuatorControlTarget',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeActuatorControlTargetRequest,
    responseType: telemetry_telemetry_pb.ActuatorControlTargetResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeActuatorControlTargetRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeActuatorControlTargetRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_ActuatorControlTargetResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_ActuatorControlTargetResponse,
  },
  // Subscribe to 'actuator output status' updates.
subscribeActuatorOutputStatus: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeActuatorOutputStatus',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeActuatorOutputStatusRequest,
    responseType: telemetry_telemetry_pb.ActuatorOutputStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeActuatorOutputStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeActuatorOutputStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_ActuatorOutputStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_ActuatorOutputStatusResponse,
  },
  // Subscribe to 'odometry' updates.
subscribeOdometry: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeOdometry',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeOdometryRequest,
    responseType: telemetry_telemetry_pb.OdometryResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeOdometryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeOdometryRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_OdometryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_OdometryResponse,
  },
  // Subscribe to 'position velocity' updates.
subscribePositionVelocityNed: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribePositionVelocityNed',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribePositionVelocityNedRequest,
    responseType: telemetry_telemetry_pb.PositionVelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribePositionVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribePositionVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_PositionVelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_PositionVelocityNedResponse,
  },
  // Subscribe to 'ground truth' updates.
subscribeGroundTruth: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeGroundTruth',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeGroundTruthRequest,
    responseType: telemetry_telemetry_pb.GroundTruthResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeGroundTruthRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeGroundTruthRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_GroundTruthResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_GroundTruthResponse,
  },
  // Subscribe to 'fixedwing metrics' updates.
subscribeFixedwingMetrics: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeFixedwingMetrics',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeFixedwingMetricsRequest,
    responseType: telemetry_telemetry_pb.FixedwingMetricsResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeFixedwingMetricsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeFixedwingMetricsRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_FixedwingMetricsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_FixedwingMetricsResponse,
  },
  // Subscribe to 'IMU' updates (in SI units in NED body frame).
subscribeImu: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeImu',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeImuRequest,
    responseType: telemetry_telemetry_pb.ImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_ImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_ImuResponse,
  },
  // Subscribe to 'Scaled IMU' updates.
subscribeScaledImu: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeScaledImu',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeScaledImuRequest,
    responseType: telemetry_telemetry_pb.ScaledImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeScaledImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeScaledImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_ScaledImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_ScaledImuResponse,
  },
  // Subscribe to 'Raw IMU' updates.
subscribeRawImu: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeRawImu',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeRawImuRequest,
    responseType: telemetry_telemetry_pb.RawImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeRawImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeRawImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_RawImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_RawImuResponse,
  },
  // Subscribe to 'HealthAllOk' updates.
subscribeHealthAllOk: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeHealthAllOk',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeHealthAllOkRequest,
    responseType: telemetry_telemetry_pb.HealthAllOkResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeHealthAllOkRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeHealthAllOkRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_HealthAllOkResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_HealthAllOkResponse,
  },
  // Subscribe to 'unix epoch time' updates.
subscribeUnixEpochTime: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeUnixEpochTime',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeUnixEpochTimeRequest,
    responseType: telemetry_telemetry_pb.UnixEpochTimeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeUnixEpochTimeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeUnixEpochTimeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_UnixEpochTimeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_UnixEpochTimeResponse,
  },
  // Subscribe to 'Distance Sensor' updates.
subscribeDistanceSensor: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeDistanceSensor',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeDistanceSensorRequest,
    responseType: telemetry_telemetry_pb.DistanceSensorResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeDistanceSensorRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeDistanceSensorRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_DistanceSensorResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_DistanceSensorResponse,
  },
  // Subscribe to 'Scaled Pressure' updates.
subscribeScaledPressure: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeScaledPressure',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeScaledPressureRequest,
    responseType: telemetry_telemetry_pb.ScaledPressureResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeScaledPressureRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeScaledPressureRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_ScaledPressureResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_ScaledPressureResponse,
  },
  // Subscribe to 'Heading' updates.
subscribeHeading: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeHeading',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeHeadingRequest,
    responseType: telemetry_telemetry_pb.HeadingResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeHeadingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeHeadingRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_HeadingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_HeadingResponse,
  },
  // Subscribe to 'Altitude' updates.
subscribeAltitude: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SubscribeAltitude',
    requestStream: false,
    responseStream: true,
    requestType: telemetry_telemetry_pb.SubscribeAltitudeRequest,
    responseType: telemetry_telemetry_pb.AltitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SubscribeAltitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SubscribeAltitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_AltitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_AltitudeResponse,
  },
  // Set rate to 'position' updates.
setRatePosition: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRatePosition',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRatePositionRequest,
    responseType: telemetry_telemetry_pb.SetRatePositionResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRatePositionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRatePositionRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRatePositionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRatePositionResponse,
  },
  // Set rate to 'home position' updates.
setRateHome: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateHome',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateHomeRequest,
    responseType: telemetry_telemetry_pb.SetRateHomeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateHomeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateHomeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateHomeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateHomeResponse,
  },
  // Set rate to in-air updates.
setRateInAir: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateInAir',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateInAirRequest,
    responseType: telemetry_telemetry_pb.SetRateInAirResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateInAirRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateInAirRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateInAirResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateInAirResponse,
  },
  // Set rate to landed state updates
setRateLandedState: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateLandedState',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateLandedStateRequest,
    responseType: telemetry_telemetry_pb.SetRateLandedStateResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateLandedStateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateLandedStateRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateLandedStateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateLandedStateResponse,
  },
  // Set rate to VTOL state updates
setRateVtolState: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateVtolState',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateVtolStateRequest,
    responseType: telemetry_telemetry_pb.SetRateVtolStateResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateVtolStateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateVtolStateRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateVtolStateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateVtolStateResponse,
  },
  // Set rate to 'attitude euler angle' updates.
setRateAttitudeQuaternion: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateAttitudeQuaternion',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateAttitudeQuaternionRequest,
    responseType: telemetry_telemetry_pb.SetRateAttitudeQuaternionResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateAttitudeQuaternionResponse,
  },
  // Set rate to 'attitude quaternion' updates.
setRateAttitudeEuler: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateAttitudeEuler',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateAttitudeEulerRequest,
    responseType: telemetry_telemetry_pb.SetRateAttitudeEulerResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateAttitudeEulerResponse,
  },
  // Set rate of camera attitude updates.
// Set rate to 'ground speed' updates (NED).
setRateVelocityNed: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateVelocityNed',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateVelocityNedRequest,
    responseType: telemetry_telemetry_pb.SetRateVelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateVelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateVelocityNedResponse,
  },
  // Set rate to 'GPS info' updates.
setRateGpsInfo: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateGpsInfo',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateGpsInfoRequest,
    responseType: telemetry_telemetry_pb.SetRateGpsInfoResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateGpsInfoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateGpsInfoRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateGpsInfoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateGpsInfoResponse,
  },
  // Set rate to 'battery' updates.
setRateBattery: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateBattery',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateBatteryRequest,
    responseType: telemetry_telemetry_pb.SetRateBatteryResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateBatteryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateBatteryRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateBatteryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateBatteryResponse,
  },
  // Set rate to 'RC status' updates.
setRateRcStatus: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateRcStatus',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateRcStatusRequest,
    responseType: telemetry_telemetry_pb.SetRateRcStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateRcStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateRcStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateRcStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateRcStatusResponse,
  },
  // Set rate to 'actuator control target' updates.
setRateActuatorControlTarget: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateActuatorControlTarget',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateActuatorControlTargetRequest,
    responseType: telemetry_telemetry_pb.SetRateActuatorControlTargetResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateActuatorControlTargetResponse,
  },
  // Set rate to 'actuator output status' updates.
setRateActuatorOutputStatus: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateActuatorOutputStatus',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateActuatorOutputStatusRequest,
    responseType: telemetry_telemetry_pb.SetRateActuatorOutputStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateActuatorOutputStatusResponse,
  },
  // Set rate to 'odometry' updates.
setRateOdometry: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateOdometry',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateOdometryRequest,
    responseType: telemetry_telemetry_pb.SetRateOdometryResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateOdometryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateOdometryRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateOdometryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateOdometryResponse,
  },
  // Set rate to 'position velocity' updates.
setRatePositionVelocityNed: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRatePositionVelocityNed',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRatePositionVelocityNedRequest,
    responseType: telemetry_telemetry_pb.SetRatePositionVelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRatePositionVelocityNedResponse,
  },
  // Set rate to 'ground truth' updates.
setRateGroundTruth: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateGroundTruth',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateGroundTruthRequest,
    responseType: telemetry_telemetry_pb.SetRateGroundTruthResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateGroundTruthRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateGroundTruthRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateGroundTruthResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateGroundTruthResponse,
  },
  // Set rate to 'fixedwing metrics' updates.
setRateFixedwingMetrics: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateFixedwingMetrics',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateFixedwingMetricsRequest,
    responseType: telemetry_telemetry_pb.SetRateFixedwingMetricsResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateFixedwingMetricsResponse,
  },
  // Set rate to 'IMU' updates.
setRateImu: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateImu',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateImuRequest,
    responseType: telemetry_telemetry_pb.SetRateImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateImuResponse,
  },
  // Set rate to 'Scaled IMU' updates.
setRateScaledImu: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateScaledImu',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateScaledImuRequest,
    responseType: telemetry_telemetry_pb.SetRateScaledImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateScaledImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateScaledImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateScaledImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateScaledImuResponse,
  },
  // Set rate to 'Raw IMU' updates.
setRateRawImu: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateRawImu',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateRawImuRequest,
    responseType: telemetry_telemetry_pb.SetRateRawImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateRawImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateRawImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateRawImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateRawImuResponse,
  },
  // Set rate to 'unix epoch time' updates.
setRateUnixEpochTime: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateUnixEpochTime',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateUnixEpochTimeRequest,
    responseType: telemetry_telemetry_pb.SetRateUnixEpochTimeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateUnixEpochTimeResponse,
  },
  // Set rate to 'Distance Sensor' updates.
setRateDistanceSensor: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateDistanceSensor',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateDistanceSensorRequest,
    responseType: telemetry_telemetry_pb.SetRateDistanceSensorResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateDistanceSensorRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateDistanceSensorRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateDistanceSensorResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateDistanceSensorResponse,
  },
  // Set rate to 'Altitude' updates.
setRateAltitude: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/SetRateAltitude',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.SetRateAltitudeRequest,
    responseType: telemetry_telemetry_pb.SetRateAltitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_SetRateAltitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateAltitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_SetRateAltitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_SetRateAltitudeResponse,
  },
  // Get the GPS location of where the estimator has been initialized.
getGpsGlobalOrigin: {
    path: '/mavsdk.rpc.telemetry.TelemetryService/GetGpsGlobalOrigin',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_telemetry_pb.GetGpsGlobalOriginRequest,
    responseType: telemetry_telemetry_pb.GetGpsGlobalOriginResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_GetGpsGlobalOriginResponse,
  },
};

exports.TelemetryServiceClient = grpc.makeGenericClientConstructor(TelemetryServiceService);


// fix autocompletion
module.exports = exports;
