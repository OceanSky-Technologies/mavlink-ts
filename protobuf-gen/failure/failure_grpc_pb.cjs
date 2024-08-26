/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var failure_failure_pb = require('../failure/failure_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_failure_InjectRequest(arg) {
  if (!(arg instanceof failure_failure_pb.InjectRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.failure.InjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_failure_InjectRequest(buffer_arg) {
  return failure_failure_pb.InjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_failure_InjectResponse(arg) {
  if (!(arg instanceof failure_failure_pb.InjectResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.failure.InjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_failure_InjectResponse(buffer_arg) {
  return failure_failure_pb.InjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Inject failures into system to test failsafes.
var FailureServiceService = exports.FailureServiceService = {
  // Injects a failure.
inject: {
    path: '/mavsdk.rpc.failure.FailureService/Inject',
    requestStream: false,
    responseStream: false,
    requestType: failure_failure_pb.InjectRequest,
    responseType: failure_failure_pb.InjectResponse,
    requestSerialize: serialize_mavsdk_rpc_failure_InjectRequest,
    requestDeserialize: deserialize_mavsdk_rpc_failure_InjectRequest,
    responseSerialize: serialize_mavsdk_rpc_failure_InjectResponse,
    responseDeserialize: deserialize_mavsdk_rpc_failure_InjectResponse,
  },
};

exports.FailureServiceClient = grpc.makeGenericClientConstructor(FailureServiceService);


// fix autocompletion
module.exports = exports;
