/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var shell_shell_pb = require('../shell/shell_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_shell_ReceiveResponse(arg) {
  if (!(arg instanceof shell_shell_pb.ReceiveResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.shell.ReceiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_shell_ReceiveResponse(buffer_arg) {
  return shell_shell_pb.ReceiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_shell_SendRequest(arg) {
  if (!(arg instanceof shell_shell_pb.SendRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.shell.SendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_shell_SendRequest(buffer_arg) {
  return shell_shell_pb.SendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_shell_SendResponse(arg) {
  if (!(arg instanceof shell_shell_pb.SendResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.shell.SendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_shell_SendResponse(buffer_arg) {
  return shell_shell_pb.SendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_shell_SubscribeReceiveRequest(arg) {
  if (!(arg instanceof shell_shell_pb.SubscribeReceiveRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.shell.SubscribeReceiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_shell_SubscribeReceiveRequest(buffer_arg) {
  return shell_shell_pb.SubscribeReceiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Allow to communicate with the vehicle's system shell.
var ShellServiceService = exports.ShellServiceService = {
  //
// Send a command line.
send: {
    path: '/mavsdk.rpc.shell.ShellService/Send',
    requestStream: false,
    responseStream: false,
    requestType: shell_shell_pb.SendRequest,
    responseType: shell_shell_pb.SendResponse,
    requestSerialize: serialize_mavsdk_rpc_shell_SendRequest,
    requestDeserialize: deserialize_mavsdk_rpc_shell_SendRequest,
    responseSerialize: serialize_mavsdk_rpc_shell_SendResponse,
    responseDeserialize: deserialize_mavsdk_rpc_shell_SendResponse,
  },
  //
// Receive feedback from a sent command line.
//
// This subscription needs to be made before a command line is sent, otherwise, no response will be sent.
subscribeReceive: {
    path: '/mavsdk.rpc.shell.ShellService/SubscribeReceive',
    requestStream: false,
    responseStream: true,
    requestType: shell_shell_pb.SubscribeReceiveRequest,
    responseType: shell_shell_pb.ReceiveResponse,
    requestSerialize: serialize_mavsdk_rpc_shell_SubscribeReceiveRequest,
    requestDeserialize: deserialize_mavsdk_rpc_shell_SubscribeReceiveRequest,
    responseSerialize: serialize_mavsdk_rpc_shell_ReceiveResponse,
    responseDeserialize: deserialize_mavsdk_rpc_shell_ReceiveResponse,
  },
};

exports.ShellServiceClient = grpc.makeGenericClientConstructor(ShellServiceService);


// fix autocompletion
module.exports = exports;
