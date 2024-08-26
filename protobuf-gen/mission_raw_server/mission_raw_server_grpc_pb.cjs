/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mission_raw_server_mission_raw_server_pb = require('../mission_raw_server/mission_raw_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_mission_raw_server_ClearAllResponse(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.ClearAllResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.ClearAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_ClearAllResponse(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.ClearAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_CurrentItemChangedResponse(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.CurrentItemChangedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.CurrentItemChangedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_CurrentItemChangedResponse(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.CurrentItemChangedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_IncomingMissionResponse(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.IncomingMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.IncomingMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_IncomingMissionResponse(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.IncomingMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteRequest(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.SetCurrentItemCompleteRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.SetCurrentItemCompleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteRequest(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.SetCurrentItemCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteResponse(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.SetCurrentItemCompleteResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.SetCurrentItemCompleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteResponse(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.SetCurrentItemCompleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_SubscribeClearAllRequest(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.SubscribeClearAllRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.SubscribeClearAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_SubscribeClearAllRequest(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.SubscribeClearAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_SubscribeCurrentItemChangedRequest(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.SubscribeCurrentItemChangedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.SubscribeCurrentItemChangedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_SubscribeCurrentItemChangedRequest(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.SubscribeCurrentItemChangedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_server_SubscribeIncomingMissionRequest(arg) {
  if (!(arg instanceof mission_raw_server_mission_raw_server_pb.SubscribeIncomingMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw_server.SubscribeIncomingMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_server_SubscribeIncomingMissionRequest(buffer_arg) {
  return mission_raw_server_mission_raw_server_pb.SubscribeIncomingMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Acts as a vehicle and receives incoming missions from GCS (in raw MAVLINK format). 
// Provides current mission item state, so the server can progress through missions.
var MissionRawServerServiceService = exports.MissionRawServerServiceService = {
  //
// Subscribe to when a new mission is uploaded (asynchronous).
subscribeIncomingMission: {
    path: '/mavsdk.rpc.mission_raw_server.MissionRawServerService/SubscribeIncomingMission',
    requestStream: false,
    responseStream: true,
    requestType: mission_raw_server_mission_raw_server_pb.SubscribeIncomingMissionRequest,
    responseType: mission_raw_server_mission_raw_server_pb.IncomingMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_server_SubscribeIncomingMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_server_SubscribeIncomingMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_server_IncomingMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_server_IncomingMissionResponse,
  },
  //
// Subscribe to when a new current item is set
subscribeCurrentItemChanged: {
    path: '/mavsdk.rpc.mission_raw_server.MissionRawServerService/SubscribeCurrentItemChanged',
    requestStream: false,
    responseStream: true,
    requestType: mission_raw_server_mission_raw_server_pb.SubscribeCurrentItemChangedRequest,
    responseType: mission_raw_server_mission_raw_server_pb.CurrentItemChangedResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_server_SubscribeCurrentItemChangedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_server_SubscribeCurrentItemChangedRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_server_CurrentItemChangedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_server_CurrentItemChangedResponse,
  },
  //
//  Set Current item as completed
setCurrentItemComplete: {
    path: '/mavsdk.rpc.mission_raw_server.MissionRawServerService/SetCurrentItemComplete',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_server_mission_raw_server_pb.SetCurrentItemCompleteRequest,
    responseType: mission_raw_server_mission_raw_server_pb.SetCurrentItemCompleteResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_server_SetCurrentItemCompleteResponse,
  },
  //
//  Subscribe when a MISSION_CLEAR_ALL is received
subscribeClearAll: {
    path: '/mavsdk.rpc.mission_raw_server.MissionRawServerService/SubscribeClearAll',
    requestStream: false,
    responseStream: true,
    requestType: mission_raw_server_mission_raw_server_pb.SubscribeClearAllRequest,
    responseType: mission_raw_server_mission_raw_server_pb.ClearAllResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_server_SubscribeClearAllRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_server_SubscribeClearAllRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_server_ClearAllResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_server_ClearAllResponse,
  },
};

exports.MissionRawServerServiceClient = grpc.makeGenericClientConstructor(MissionRawServerServiceService);


// fix autocompletion
module.exports = exports;
