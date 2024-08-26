/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var gripper_gripper_pb = require('../gripper/gripper_pb.cjs');

function serialize_mavsdk_rpc_gripper_GrabRequest(arg) {
  if (!(arg instanceof gripper_gripper_pb.GrabRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gripper.GrabRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gripper_GrabRequest(buffer_arg) {
  return gripper_gripper_pb.GrabRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gripper_GrabResponse(arg) {
  if (!(arg instanceof gripper_gripper_pb.GrabResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gripper.GrabResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gripper_GrabResponse(buffer_arg) {
  return gripper_gripper_pb.GrabResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gripper_ReleaseRequest(arg) {
  if (!(arg instanceof gripper_gripper_pb.ReleaseRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gripper.ReleaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gripper_ReleaseRequest(buffer_arg) {
  return gripper_gripper_pb.ReleaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gripper_ReleaseResponse(arg) {
  if (!(arg instanceof gripper_gripper_pb.ReleaseResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gripper.ReleaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gripper_ReleaseResponse(buffer_arg) {
  return gripper_gripper_pb.ReleaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Allows users to send gripper actions.
var GripperServiceService = exports.GripperServiceService = {
  //
// Gripper grab cargo.
grab: {
    path: '/mavsdk.rpc.gripper.GripperService/Grab',
    requestStream: false,
    responseStream: false,
    requestType: gripper_gripper_pb.GrabRequest,
    responseType: gripper_gripper_pb.GrabResponse,
    requestSerialize: serialize_mavsdk_rpc_gripper_GrabRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gripper_GrabRequest,
    responseSerialize: serialize_mavsdk_rpc_gripper_GrabResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gripper_GrabResponse,
  },
  //
// Gripper release cargo.
release: {
    path: '/mavsdk.rpc.gripper.GripperService/Release',
    requestStream: false,
    responseStream: false,
    requestType: gripper_gripper_pb.ReleaseRequest,
    responseType: gripper_gripper_pb.ReleaseResponse,
    requestSerialize: serialize_mavsdk_rpc_gripper_ReleaseRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gripper_ReleaseRequest,
    responseSerialize: serialize_mavsdk_rpc_gripper_ReleaseResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gripper_ReleaseResponse,
  },
};

exports.GripperServiceClient = grpc.makeGenericClientConstructor(GripperServiceService);


// fix autocompletion
module.exports = exports;
