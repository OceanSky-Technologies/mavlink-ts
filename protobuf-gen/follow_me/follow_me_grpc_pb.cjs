/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var follow_me_follow_me_pb = require('../follow_me/follow_me_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_follow_me_GetConfigRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.GetConfigRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.GetConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_GetConfigRequest(buffer_arg) {
  return follow_me_follow_me_pb.GetConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_GetConfigResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.GetConfigResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.GetConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_GetConfigResponse(buffer_arg) {
  return follow_me_follow_me_pb.GetConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_GetLastLocationRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.GetLastLocationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.GetLastLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_GetLastLocationRequest(buffer_arg) {
  return follow_me_follow_me_pb.GetLastLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_GetLastLocationResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.GetLastLocationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.GetLastLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_GetLastLocationResponse(buffer_arg) {
  return follow_me_follow_me_pb.GetLastLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_IsActiveRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.IsActiveRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.IsActiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_IsActiveRequest(buffer_arg) {
  return follow_me_follow_me_pb.IsActiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_IsActiveResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.IsActiveResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.IsActiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_IsActiveResponse(buffer_arg) {
  return follow_me_follow_me_pb.IsActiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_SetConfigRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.SetConfigRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.SetConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_SetConfigRequest(buffer_arg) {
  return follow_me_follow_me_pb.SetConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_SetConfigResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.SetConfigResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.SetConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_SetConfigResponse(buffer_arg) {
  return follow_me_follow_me_pb.SetConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_SetTargetLocationRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.SetTargetLocationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.SetTargetLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_SetTargetLocationRequest(buffer_arg) {
  return follow_me_follow_me_pb.SetTargetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_SetTargetLocationResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.SetTargetLocationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.SetTargetLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_SetTargetLocationResponse(buffer_arg) {
  return follow_me_follow_me_pb.SetTargetLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_StartRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.StartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.StartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_StartRequest(buffer_arg) {
  return follow_me_follow_me_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_StartResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.StartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.StartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_StartResponse(buffer_arg) {
  return follow_me_follow_me_pb.StartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_StopRequest(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.StopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.StopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_StopRequest(buffer_arg) {
  return follow_me_follow_me_pb.StopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_follow_me_StopResponse(arg) {
  if (!(arg instanceof follow_me_follow_me_pb.StopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.follow_me.StopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_follow_me_StopResponse(buffer_arg) {
  return follow_me_follow_me_pb.StopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Allow users to command the vehicle to follow a specific target.
// The target is provided as a GPS coordinate and altitude.
var FollowMeServiceService = exports.FollowMeServiceService = {
  // Get current configuration.
getConfig: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/GetConfig',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.GetConfigRequest,
    responseType: follow_me_follow_me_pb.GetConfigResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_GetConfigRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_GetConfigRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_GetConfigResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_GetConfigResponse,
  },
  // Apply configuration by sending it to the system.
setConfig: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/SetConfig',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.SetConfigRequest,
    responseType: follow_me_follow_me_pb.SetConfigResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_SetConfigRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_SetConfigRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_SetConfigResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_SetConfigResponse,
  },
  // Check if FollowMe is active.
isActive: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/IsActive',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.IsActiveRequest,
    responseType: follow_me_follow_me_pb.IsActiveResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_IsActiveRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_IsActiveRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_IsActiveResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_IsActiveResponse,
  },
  // Set location of the moving target.
setTargetLocation: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/SetTargetLocation',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.SetTargetLocationRequest,
    responseType: follow_me_follow_me_pb.SetTargetLocationResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_SetTargetLocationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_SetTargetLocationRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_SetTargetLocationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_SetTargetLocationResponse,
  },
  // Get the last location of the target.
getLastLocation: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/GetLastLocation',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.GetLastLocationRequest,
    responseType: follow_me_follow_me_pb.GetLastLocationResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_GetLastLocationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_GetLastLocationRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_GetLastLocationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_GetLastLocationResponse,
  },
  // Start FollowMe mode.
start: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/Start',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.StartRequest,
    responseType: follow_me_follow_me_pb.StartResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_StartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_StartRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_StartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_StartResponse,
  },
  // Stop FollowMe mode.
stop: {
    path: '/mavsdk.rpc.follow_me.FollowMeService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: follow_me_follow_me_pb.StopRequest,
    responseType: follow_me_follow_me_pb.StopResponse,
    requestSerialize: serialize_mavsdk_rpc_follow_me_StopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_follow_me_StopRequest,
    responseSerialize: serialize_mavsdk_rpc_follow_me_StopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_follow_me_StopResponse,
  },
};

exports.FollowMeServiceClient = grpc.makeGenericClientConstructor(FollowMeServiceService);


// fix autocompletion
module.exports = exports;
