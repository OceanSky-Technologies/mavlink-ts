/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transponder_transponder_pb = require('../transponder/transponder_pb.cjs');

function serialize_mavsdk_rpc_transponder_SetRateTransponderRequest(arg) {
  if (!(arg instanceof transponder_transponder_pb.SetRateTransponderRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.transponder.SetRateTransponderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_transponder_SetRateTransponderRequest(buffer_arg) {
  return transponder_transponder_pb.SetRateTransponderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_transponder_SetRateTransponderResponse(arg) {
  if (!(arg instanceof transponder_transponder_pb.SetRateTransponderResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.transponder.SetRateTransponderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_transponder_SetRateTransponderResponse(buffer_arg) {
  return transponder_transponder_pb.SetRateTransponderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_transponder_SubscribeTransponderRequest(arg) {
  if (!(arg instanceof transponder_transponder_pb.SubscribeTransponderRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.transponder.SubscribeTransponderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_transponder_SubscribeTransponderRequest(buffer_arg) {
  return transponder_transponder_pb.SubscribeTransponderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_transponder_TransponderResponse(arg) {
  if (!(arg instanceof transponder_transponder_pb.TransponderResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.transponder.TransponderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_transponder_TransponderResponse(buffer_arg) {
  return transponder_transponder_pb.TransponderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Allow users to get ADS-B information
// and set ADS-B update rates.
var TransponderServiceService = exports.TransponderServiceService = {
  // Subscribe to 'transponder' updates.
subscribeTransponder: {
    path: '/mavsdk.rpc.transponder.TransponderService/SubscribeTransponder',
    requestStream: false,
    responseStream: true,
    requestType: transponder_transponder_pb.SubscribeTransponderRequest,
    responseType: transponder_transponder_pb.TransponderResponse,
    requestSerialize: serialize_mavsdk_rpc_transponder_SubscribeTransponderRequest,
    requestDeserialize: deserialize_mavsdk_rpc_transponder_SubscribeTransponderRequest,
    responseSerialize: serialize_mavsdk_rpc_transponder_TransponderResponse,
    responseDeserialize: deserialize_mavsdk_rpc_transponder_TransponderResponse,
  },
  // Set rate to 'transponder' updates.
setRateTransponder: {
    path: '/mavsdk.rpc.transponder.TransponderService/SetRateTransponder',
    requestStream: false,
    responseStream: false,
    requestType: transponder_transponder_pb.SetRateTransponderRequest,
    responseType: transponder_transponder_pb.SetRateTransponderResponse,
    requestSerialize: serialize_mavsdk_rpc_transponder_SetRateTransponderRequest,
    requestDeserialize: deserialize_mavsdk_rpc_transponder_SetRateTransponderRequest,
    responseSerialize: serialize_mavsdk_rpc_transponder_SetRateTransponderResponse,
    responseDeserialize: deserialize_mavsdk_rpc_transponder_SetRateTransponderResponse,
  },
};

exports.TransponderServiceClient = grpc.makeGenericClientConstructor(TransponderServiceService);


// fix autocompletion
module.exports = exports;
