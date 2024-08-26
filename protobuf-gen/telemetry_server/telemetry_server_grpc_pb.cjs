/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var telemetry_server_telemetry_server_pb = require('../telemetry_server/telemetry_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_telemetry_server_PublishBatteryRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishBatteryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishBatteryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishBatteryRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishBatteryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishBatteryResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishBatteryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishBatteryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishBatteryResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishBatteryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishDistanceSensorRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishDistanceSensorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishDistanceSensorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishDistanceSensorResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishDistanceSensorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishDistanceSensorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishExtendedSysStateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishExtendedSysStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishExtendedSysStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishExtendedSysStateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishExtendedSysStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishExtendedSysStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishGroundTruthRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishGroundTruthRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishGroundTruthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishGroundTruthRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishGroundTruthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishGroundTruthResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishGroundTruthResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishGroundTruthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishGroundTruthResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishGroundTruthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishHomeRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishHomeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishHomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishHomeRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishHomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishHomeResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishHomeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishHomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishHomeResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishHomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishImuRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishImuRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishImuResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishImuResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishOdometryRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishOdometryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishOdometryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishOdometryRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishOdometryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishOdometryResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishOdometryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishOdometryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishOdometryResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishOdometryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishPositionRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishPositionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishPositionRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishPositionResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishPositionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishPositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishPositionResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishPositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishPositionVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishPositionVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishPositionVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishPositionVelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishPositionVelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishPositionVelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishRawGpsRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishRawGpsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishRawGpsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishRawGpsRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishRawGpsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishRawGpsResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishRawGpsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishRawGpsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishRawGpsResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishRawGpsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishRawImuRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishRawImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishRawImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishRawImuRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishRawImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishRawImuResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishRawImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishRawImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishRawImuResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishRawImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishScaledImuRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishScaledImuRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishScaledImuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishScaledImuRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishScaledImuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishScaledImuResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishScaledImuResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishScaledImuResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishScaledImuResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishScaledImuResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishStatusTextRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishStatusTextRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishStatusTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishStatusTextRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishStatusTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishStatusTextResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishStatusTextResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishStatusTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishStatusTextResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishStatusTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishSysStatusRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishSysStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishSysStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishSysStatusRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishSysStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishSysStatusResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishSysStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishSysStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishSysStatusResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishSysStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeRequest(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishUnixEpochTimeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishUnixEpochTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeRequest(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishUnixEpochTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeResponse(arg) {
  if (!(arg instanceof telemetry_server_telemetry_server_pb.PublishUnixEpochTimeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.telemetry_server.PublishUnixEpochTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeResponse(buffer_arg) {
  return telemetry_server_telemetry_server_pb.PublishUnixEpochTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Allow users to provide vehicle telemetry and state information
// (e.g. battery, GPS, RC connection, flight mode etc.) and set telemetry update rates.
var TelemetryServerServiceService = exports.TelemetryServerServiceService = {
  // Publish to 'position' updates.
publishPosition: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishPosition',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishPositionRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishPositionResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishPositionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishPositionRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishPositionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishPositionResponse,
  },
  // Publish to 'home position' updates.
publishHome: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishHome',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishHomeRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishHomeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishHomeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishHomeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishHomeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishHomeResponse,
  },
  // Publish 'sys status' updates.
publishSysStatus: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishSysStatus',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishSysStatusRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishSysStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishSysStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishSysStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishSysStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishSysStatusResponse,
  },
  // Publish 'extended sys state' updates.
publishExtendedSysState: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishExtendedSysState',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishExtendedSysStateRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishExtendedSysStateResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishExtendedSysStateResponse,
  },
  // Publish to 'Raw GPS' updates.
publishRawGps: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishRawGps',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishRawGpsRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishRawGpsResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishRawGpsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishRawGpsRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishRawGpsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishRawGpsResponse,
  },
  // Publish to 'battery' updates.
publishBattery: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishBattery',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishBatteryRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishBatteryResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishBatteryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishBatteryRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishBatteryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishBatteryResponse,
  },
  // Publish to 'status text' updates.
publishStatusText: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishStatusText',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishStatusTextRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishStatusTextResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishStatusTextRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishStatusTextRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishStatusTextResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishStatusTextResponse,
  },
  // Publish to 'odometry' updates.
publishOdometry: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishOdometry',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishOdometryRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishOdometryResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishOdometryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishOdometryRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishOdometryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishOdometryResponse,
  },
  // Publish to 'position velocity' updates.
publishPositionVelocityNed: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishPositionVelocityNed',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishPositionVelocityNedRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishPositionVelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishPositionVelocityNedResponse,
  },
  // Publish to 'ground truth' updates.
publishGroundTruth: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishGroundTruth',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishGroundTruthRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishGroundTruthResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishGroundTruthRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishGroundTruthRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishGroundTruthResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishGroundTruthResponse,
  },
  // Publish to 'IMU' updates (in SI units in NED body frame).
publishImu: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishImu',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishImuRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishImuResponse,
  },
  // Publish to 'Scaled IMU' updates.
publishScaledImu: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishScaledImu',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishScaledImuRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishScaledImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishScaledImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishScaledImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishScaledImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishScaledImuResponse,
  },
  // Publish to 'Raw IMU' updates.
publishRawImu: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishRawImu',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishRawImuRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishRawImuResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishRawImuRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishRawImuRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishRawImuResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishRawImuResponse,
  },
  // Publish to 'unix epoch time' updates.
publishUnixEpochTime: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishUnixEpochTime',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishUnixEpochTimeRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishUnixEpochTimeResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishUnixEpochTimeResponse,
  },
  // Publish to "distance sensor" updates.
publishDistanceSensor: {
    path: '/mavsdk.rpc.telemetry_server.TelemetryServerService/PublishDistanceSensor',
    requestStream: false,
    responseStream: false,
    requestType: telemetry_server_telemetry_server_pb.PublishDistanceSensorRequest,
    responseType: telemetry_server_telemetry_server_pb.PublishDistanceSensorResponse,
    requestSerialize: serialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorRequest,
    requestDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorRequest,
    responseSerialize: serialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorResponse,
    responseDeserialize: deserialize_mavsdk_rpc_telemetry_server_PublishDistanceSensorResponse,
  },
};

exports.TelemetryServerServiceClient = grpc.makeGenericClientConstructor(TelemetryServerServiceService);


// fix autocompletion
module.exports = exports;
