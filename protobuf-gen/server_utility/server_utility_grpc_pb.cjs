/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var server_utility_server_utility_pb = require('../server_utility/server_utility_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_server_utility_SendStatusTextRequest(arg) {
  if (!(arg instanceof server_utility_server_utility_pb.SendStatusTextRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.server_utility.SendStatusTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_server_utility_SendStatusTextRequest(buffer_arg) {
  return server_utility_server_utility_pb.SendStatusTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_server_utility_SendStatusTextResponse(arg) {
  if (!(arg instanceof server_utility_server_utility_pb.SendStatusTextResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.server_utility.SendStatusTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_server_utility_SendStatusTextResponse(buffer_arg) {
  return server_utility_server_utility_pb.SendStatusTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Utility for onboard MAVSDK instances for common "server" tasks.
var ServerUtilityServiceService = exports.ServerUtilityServiceService = {
  // Sends a statustext.
sendStatusText: {
    path: '/mavsdk.rpc.server_utility.ServerUtilityService/SendStatusText',
    requestStream: false,
    responseStream: false,
    requestType: server_utility_server_utility_pb.SendStatusTextRequest,
    responseType: server_utility_server_utility_pb.SendStatusTextResponse,
    requestSerialize: serialize_mavsdk_rpc_server_utility_SendStatusTextRequest,
    requestDeserialize: deserialize_mavsdk_rpc_server_utility_SendStatusTextRequest,
    responseSerialize: serialize_mavsdk_rpc_server_utility_SendStatusTextResponse,
    responseDeserialize: deserialize_mavsdk_rpc_server_utility_SendStatusTextResponse,
  },
};

exports.ServerUtilityServiceClient = grpc.makeGenericClientConstructor(ServerUtilityServiceService);


// fix autocompletion
module.exports = exports;
