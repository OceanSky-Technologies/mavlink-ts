/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var core_core_pb = require('../core/core_pb.cjs');

function serialize_mavsdk_rpc_core_ConnectionStateResponse(arg) {
  if (!(arg instanceof core_core_pb.ConnectionStateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.core.ConnectionStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_core_ConnectionStateResponse(buffer_arg) {
  return core_core_pb.ConnectionStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_core_SetMavlinkTimeoutRequest(arg) {
  if (!(arg instanceof core_core_pb.SetMavlinkTimeoutRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.core.SetMavlinkTimeoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_core_SetMavlinkTimeoutRequest(buffer_arg) {
  return core_core_pb.SetMavlinkTimeoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_core_SetMavlinkTimeoutResponse(arg) {
  if (!(arg instanceof core_core_pb.SetMavlinkTimeoutResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.core.SetMavlinkTimeoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_core_SetMavlinkTimeoutResponse(buffer_arg) {
  return core_core_pb.SetMavlinkTimeoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_core_SubscribeConnectionStateRequest(arg) {
  if (!(arg instanceof core_core_pb.SubscribeConnectionStateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.core.SubscribeConnectionStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_core_SubscribeConnectionStateRequest(buffer_arg) {
  return core_core_pb.SubscribeConnectionStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Access to the connection state and core configurations
var CoreServiceService = exports.CoreServiceService = {
  //
// Subscribe to 'connection state' updates.
subscribeConnectionState: {
    path: '/mavsdk.rpc.core.CoreService/SubscribeConnectionState',
    requestStream: false,
    responseStream: true,
    requestType: core_core_pb.SubscribeConnectionStateRequest,
    responseType: core_core_pb.ConnectionStateResponse,
    requestSerialize: serialize_mavsdk_rpc_core_SubscribeConnectionStateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_core_SubscribeConnectionStateRequest,
    responseSerialize: serialize_mavsdk_rpc_core_ConnectionStateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_core_ConnectionStateResponse,
  },
  //
// Set timeout of MAVLink transfers.
//
// The default timeout used is generally (0.5 seconds) seconds.
// If MAVSDK is used on the same host this timeout can be reduced, while
// if MAVSDK has to communicate over links with high latency it might
// need to be increased to prevent timeouts.
setMavlinkTimeout: {
    path: '/mavsdk.rpc.core.CoreService/SetMavlinkTimeout',
    requestStream: false,
    responseStream: false,
    requestType: core_core_pb.SetMavlinkTimeoutRequest,
    responseType: core_core_pb.SetMavlinkTimeoutResponse,
    requestSerialize: serialize_mavsdk_rpc_core_SetMavlinkTimeoutRequest,
    requestDeserialize: deserialize_mavsdk_rpc_core_SetMavlinkTimeoutRequest,
    responseSerialize: serialize_mavsdk_rpc_core_SetMavlinkTimeoutResponse,
    responseDeserialize: deserialize_mavsdk_rpc_core_SetMavlinkTimeoutResponse,
  },
};

exports.CoreServiceClient = grpc.makeGenericClientConstructor(CoreServiceService);


// fix autocompletion
module.exports = exports;
