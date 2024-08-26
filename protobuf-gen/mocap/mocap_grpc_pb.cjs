/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mocap_mocap_pb = require('../mocap/mocap_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_mocap_SetAttitudePositionMocapRequest(arg) {
  if (!(arg instanceof mocap_mocap_pb.SetAttitudePositionMocapRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mocap.SetAttitudePositionMocapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mocap_SetAttitudePositionMocapRequest(buffer_arg) {
  return mocap_mocap_pb.SetAttitudePositionMocapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mocap_SetAttitudePositionMocapResponse(arg) {
  if (!(arg instanceof mocap_mocap_pb.SetAttitudePositionMocapResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mocap.SetAttitudePositionMocapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mocap_SetAttitudePositionMocapResponse(buffer_arg) {
  return mocap_mocap_pb.SetAttitudePositionMocapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mocap_SetOdometryRequest(arg) {
  if (!(arg instanceof mocap_mocap_pb.SetOdometryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mocap.SetOdometryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mocap_SetOdometryRequest(buffer_arg) {
  return mocap_mocap_pb.SetOdometryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mocap_SetOdometryResponse(arg) {
  if (!(arg instanceof mocap_mocap_pb.SetOdometryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mocap.SetOdometryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mocap_SetOdometryResponse(buffer_arg) {
  return mocap_mocap_pb.SetOdometryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mocap_SetVisionPositionEstimateRequest(arg) {
  if (!(arg instanceof mocap_mocap_pb.SetVisionPositionEstimateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mocap.SetVisionPositionEstimateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mocap_SetVisionPositionEstimateRequest(buffer_arg) {
  return mocap_mocap_pb.SetVisionPositionEstimateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mocap_SetVisionPositionEstimateResponse(arg) {
  if (!(arg instanceof mocap_mocap_pb.SetVisionPositionEstimateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mocap.SetVisionPositionEstimateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mocap_SetVisionPositionEstimateResponse(buffer_arg) {
  return mocap_mocap_pb.SetVisionPositionEstimateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Allows interfacing a vehicle with a motion capture system in
// order to allow navigation without global positioning sources available
// (e.g. indoors, or when flying under a bridge. etc.).
var MocapServiceService = exports.MocapServiceService = {
  // Send Global position/attitude estimate from a vision source.
setVisionPositionEstimate: {
    path: '/mavsdk.rpc.mocap.MocapService/SetVisionPositionEstimate',
    requestStream: false,
    responseStream: false,
    requestType: mocap_mocap_pb.SetVisionPositionEstimateRequest,
    responseType: mocap_mocap_pb.SetVisionPositionEstimateResponse,
    requestSerialize: serialize_mavsdk_rpc_mocap_SetVisionPositionEstimateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mocap_SetVisionPositionEstimateRequest,
    responseSerialize: serialize_mavsdk_rpc_mocap_SetVisionPositionEstimateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mocap_SetVisionPositionEstimateResponse,
  },
  // Send motion capture attitude and position.
setAttitudePositionMocap: {
    path: '/mavsdk.rpc.mocap.MocapService/SetAttitudePositionMocap',
    requestStream: false,
    responseStream: false,
    requestType: mocap_mocap_pb.SetAttitudePositionMocapRequest,
    responseType: mocap_mocap_pb.SetAttitudePositionMocapResponse,
    requestSerialize: serialize_mavsdk_rpc_mocap_SetAttitudePositionMocapRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mocap_SetAttitudePositionMocapRequest,
    responseSerialize: serialize_mavsdk_rpc_mocap_SetAttitudePositionMocapResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mocap_SetAttitudePositionMocapResponse,
  },
  // Send odometry information with an external interface.
setOdometry: {
    path: '/mavsdk.rpc.mocap.MocapService/SetOdometry',
    requestStream: false,
    responseStream: false,
    requestType: mocap_mocap_pb.SetOdometryRequest,
    responseType: mocap_mocap_pb.SetOdometryResponse,
    requestSerialize: serialize_mavsdk_rpc_mocap_SetOdometryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mocap_SetOdometryRequest,
    responseSerialize: serialize_mavsdk_rpc_mocap_SetOdometryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mocap_SetOdometryResponse,
  },
};

exports.MocapServiceClient = grpc.makeGenericClientConstructor(MocapServiceService);


// fix autocompletion
module.exports = exports;
