/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var arm_authorizer_server_arm_authorizer_server_pb = require('../arm_authorizer_server/arm_authorizer_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationRequest(arg) {
  if (!(arg instanceof arm_authorizer_server_arm_authorizer_server_pb.AcceptArmAuthorizationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.arm_authorizer_server.AcceptArmAuthorizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationRequest(buffer_arg) {
  return arm_authorizer_server_arm_authorizer_server_pb.AcceptArmAuthorizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationResponse(arg) {
  if (!(arg instanceof arm_authorizer_server_arm_authorizer_server_pb.AcceptArmAuthorizationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.arm_authorizer_server.AcceptArmAuthorizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationResponse(buffer_arg) {
  return arm_authorizer_server_arm_authorizer_server_pb.AcceptArmAuthorizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_arm_authorizer_server_ArmAuthorizationResponse(arg) {
  if (!(arg instanceof arm_authorizer_server_arm_authorizer_server_pb.ArmAuthorizationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.arm_authorizer_server.ArmAuthorizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_arm_authorizer_server_ArmAuthorizationResponse(buffer_arg) {
  return arm_authorizer_server_arm_authorizer_server_pb.ArmAuthorizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationRequest(arg) {
  if (!(arg instanceof arm_authorizer_server_arm_authorizer_server_pb.RejectArmAuthorizationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.arm_authorizer_server.RejectArmAuthorizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationRequest(buffer_arg) {
  return arm_authorizer_server_arm_authorizer_server_pb.RejectArmAuthorizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationResponse(arg) {
  if (!(arg instanceof arm_authorizer_server_arm_authorizer_server_pb.RejectArmAuthorizationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.arm_authorizer_server.RejectArmAuthorizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationResponse(buffer_arg) {
  return arm_authorizer_server_arm_authorizer_server_pb.RejectArmAuthorizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_arm_authorizer_server_SubscribeArmAuthorizationRequest(arg) {
  if (!(arg instanceof arm_authorizer_server_arm_authorizer_server_pb.SubscribeArmAuthorizationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.arm_authorizer_server.SubscribeArmAuthorizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_arm_authorizer_server_SubscribeArmAuthorizationRequest(buffer_arg) {
  return arm_authorizer_server_arm_authorizer_server_pb.SubscribeArmAuthorizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ArmAuthorizerServerServiceService = exports.ArmAuthorizerServerServiceService = {
  // Subscribe to arm authorization request messages. Each request received should respond to using RespondArmAuthorization
subscribeArmAuthorization: {
    path: '/mavsdk.rpc.arm_authorizer_server.ArmAuthorizerServerService/SubscribeArmAuthorization',
    requestStream: false,
    responseStream: true,
    requestType: arm_authorizer_server_arm_authorizer_server_pb.SubscribeArmAuthorizationRequest,
    responseType: arm_authorizer_server_arm_authorizer_server_pb.ArmAuthorizationResponse,
    requestSerialize: serialize_mavsdk_rpc_arm_authorizer_server_SubscribeArmAuthorizationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_arm_authorizer_server_SubscribeArmAuthorizationRequest,
    responseSerialize: serialize_mavsdk_rpc_arm_authorizer_server_ArmAuthorizationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_arm_authorizer_server_ArmAuthorizationResponse,
  },
  // Authorize arm for the specific time
acceptArmAuthorization: {
    path: '/mavsdk.rpc.arm_authorizer_server.ArmAuthorizerServerService/AcceptArmAuthorization',
    requestStream: false,
    responseStream: false,
    requestType: arm_authorizer_server_arm_authorizer_server_pb.AcceptArmAuthorizationRequest,
    responseType: arm_authorizer_server_arm_authorizer_server_pb.AcceptArmAuthorizationResponse,
    requestSerialize: serialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationRequest,
    responseSerialize: serialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_arm_authorizer_server_AcceptArmAuthorizationResponse,
  },
  // Reject arm authorization request
rejectArmAuthorization: {
    path: '/mavsdk.rpc.arm_authorizer_server.ArmAuthorizerServerService/RejectArmAuthorization',
    requestStream: false,
    responseStream: false,
    requestType: arm_authorizer_server_arm_authorizer_server_pb.RejectArmAuthorizationRequest,
    responseType: arm_authorizer_server_arm_authorizer_server_pb.RejectArmAuthorizationResponse,
    requestSerialize: serialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationRequest,
    responseSerialize: serialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_arm_authorizer_server_RejectArmAuthorizationResponse,
  },
};

exports.ArmAuthorizerServerServiceClient = grpc.makeGenericClientConstructor(ArmAuthorizerServerServiceService);


// fix autocompletion
module.exports = exports;
