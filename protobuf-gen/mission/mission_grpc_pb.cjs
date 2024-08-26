/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mission_mission_pb = require('../mission/mission_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_mission_CancelMissionDownloadRequest(arg) {
  if (!(arg instanceof mission_mission_pb.CancelMissionDownloadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.CancelMissionDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_CancelMissionDownloadRequest(buffer_arg) {
  return mission_mission_pb.CancelMissionDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_CancelMissionDownloadResponse(arg) {
  if (!(arg instanceof mission_mission_pb.CancelMissionDownloadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.CancelMissionDownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_CancelMissionDownloadResponse(buffer_arg) {
  return mission_mission_pb.CancelMissionDownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_CancelMissionUploadRequest(arg) {
  if (!(arg instanceof mission_mission_pb.CancelMissionUploadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.CancelMissionUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_CancelMissionUploadRequest(buffer_arg) {
  return mission_mission_pb.CancelMissionUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_CancelMissionUploadResponse(arg) {
  if (!(arg instanceof mission_mission_pb.CancelMissionUploadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.CancelMissionUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_CancelMissionUploadResponse(buffer_arg) {
  return mission_mission_pb.CancelMissionUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_ClearMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.ClearMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.ClearMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_ClearMissionRequest(buffer_arg) {
  return mission_mission_pb.ClearMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_ClearMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.ClearMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.ClearMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_ClearMissionResponse(buffer_arg) {
  return mission_mission_pb.ClearMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_DownloadMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.DownloadMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.DownloadMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_DownloadMissionRequest(buffer_arg) {
  return mission_mission_pb.DownloadMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_DownloadMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.DownloadMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.DownloadMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_DownloadMissionResponse(buffer_arg) {
  return mission_mission_pb.DownloadMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_DownloadMissionWithProgressResponse(arg) {
  if (!(arg instanceof mission_mission_pb.DownloadMissionWithProgressResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.DownloadMissionWithProgressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_DownloadMissionWithProgressResponse(buffer_arg) {
  return mission_mission_pb.DownloadMissionWithProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.GetReturnToLaunchAfterMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.GetReturnToLaunchAfterMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionRequest(buffer_arg) {
  return mission_mission_pb.GetReturnToLaunchAfterMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.GetReturnToLaunchAfterMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.GetReturnToLaunchAfterMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionResponse(buffer_arg) {
  return mission_mission_pb.GetReturnToLaunchAfterMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_IsMissionFinishedRequest(arg) {
  if (!(arg instanceof mission_mission_pb.IsMissionFinishedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.IsMissionFinishedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_IsMissionFinishedRequest(buffer_arg) {
  return mission_mission_pb.IsMissionFinishedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_IsMissionFinishedResponse(arg) {
  if (!(arg instanceof mission_mission_pb.IsMissionFinishedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.IsMissionFinishedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_IsMissionFinishedResponse(buffer_arg) {
  return mission_mission_pb.IsMissionFinishedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_MissionProgressResponse(arg) {
  if (!(arg instanceof mission_mission_pb.MissionProgressResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.MissionProgressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_MissionProgressResponse(buffer_arg) {
  return mission_mission_pb.MissionProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_PauseMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.PauseMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.PauseMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_PauseMissionRequest(buffer_arg) {
  return mission_mission_pb.PauseMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_PauseMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.PauseMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.PauseMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_PauseMissionResponse(buffer_arg) {
  return mission_mission_pb.PauseMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SetCurrentMissionItemRequest(arg) {
  if (!(arg instanceof mission_mission_pb.SetCurrentMissionItemRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SetCurrentMissionItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SetCurrentMissionItemRequest(buffer_arg) {
  return mission_mission_pb.SetCurrentMissionItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SetCurrentMissionItemResponse(arg) {
  if (!(arg instanceof mission_mission_pb.SetCurrentMissionItemResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SetCurrentMissionItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SetCurrentMissionItemResponse(buffer_arg) {
  return mission_mission_pb.SetCurrentMissionItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.SetReturnToLaunchAfterMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SetReturnToLaunchAfterMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionRequest(buffer_arg) {
  return mission_mission_pb.SetReturnToLaunchAfterMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.SetReturnToLaunchAfterMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SetReturnToLaunchAfterMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionResponse(buffer_arg) {
  return mission_mission_pb.SetReturnToLaunchAfterMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_StartMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.StartMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.StartMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_StartMissionRequest(buffer_arg) {
  return mission_mission_pb.StartMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_StartMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.StartMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.StartMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_StartMissionResponse(buffer_arg) {
  return mission_mission_pb.StartMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SubscribeDownloadMissionWithProgressRequest(arg) {
  if (!(arg instanceof mission_mission_pb.SubscribeDownloadMissionWithProgressRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SubscribeDownloadMissionWithProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SubscribeDownloadMissionWithProgressRequest(buffer_arg) {
  return mission_mission_pb.SubscribeDownloadMissionWithProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SubscribeMissionProgressRequest(arg) {
  if (!(arg instanceof mission_mission_pb.SubscribeMissionProgressRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SubscribeMissionProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SubscribeMissionProgressRequest(buffer_arg) {
  return mission_mission_pb.SubscribeMissionProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_SubscribeUploadMissionWithProgressRequest(arg) {
  if (!(arg instanceof mission_mission_pb.SubscribeUploadMissionWithProgressRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.SubscribeUploadMissionWithProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_SubscribeUploadMissionWithProgressRequest(buffer_arg) {
  return mission_mission_pb.SubscribeUploadMissionWithProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_UploadMissionRequest(arg) {
  if (!(arg instanceof mission_mission_pb.UploadMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.UploadMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_UploadMissionRequest(buffer_arg) {
  return mission_mission_pb.UploadMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_UploadMissionResponse(arg) {
  if (!(arg instanceof mission_mission_pb.UploadMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.UploadMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_UploadMissionResponse(buffer_arg) {
  return mission_mission_pb.UploadMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_UploadMissionWithProgressResponse(arg) {
  if (!(arg instanceof mission_mission_pb.UploadMissionWithProgressResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission.UploadMissionWithProgressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_UploadMissionWithProgressResponse(buffer_arg) {
  return mission_mission_pb.UploadMissionWithProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable waypoint missions.
var MissionServiceService = exports.MissionServiceService = {
  //
// Upload a list of mission items to the system.
//
// The mission items are uploaded to a drone. Once uploaded the mission can be started and
// executed even if the connection is lost.
uploadMission: {
    path: '/mavsdk.rpc.mission.MissionService/UploadMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.UploadMissionRequest,
    responseType: mission_mission_pb.UploadMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_UploadMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_UploadMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_UploadMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_UploadMissionResponse,
  },
  //
// Upload a list of mission items to the system and report upload progress.
//
// The mission items are uploaded to a drone. Once uploaded the mission can be started and
// executed even if the connection is lost.
subscribeUploadMissionWithProgress: {
    path: '/mavsdk.rpc.mission.MissionService/SubscribeUploadMissionWithProgress',
    requestStream: false,
    responseStream: true,
    requestType: mission_mission_pb.SubscribeUploadMissionWithProgressRequest,
    responseType: mission_mission_pb.UploadMissionWithProgressResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_SubscribeUploadMissionWithProgressRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_SubscribeUploadMissionWithProgressRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_UploadMissionWithProgressResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_UploadMissionWithProgressResponse,
  },
  //
// Cancel an ongoing mission upload.
cancelMissionUpload: {
    path: '/mavsdk.rpc.mission.MissionService/CancelMissionUpload',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.CancelMissionUploadRequest,
    responseType: mission_mission_pb.CancelMissionUploadResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_CancelMissionUploadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_CancelMissionUploadRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_CancelMissionUploadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_CancelMissionUploadResponse,
  },
  //
// Download a list of mission items from the system (asynchronous).
//
// Will fail if any of the downloaded mission items are not supported
// by the MAVSDK API.
downloadMission: {
    path: '/mavsdk.rpc.mission.MissionService/DownloadMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.DownloadMissionRequest,
    responseType: mission_mission_pb.DownloadMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_DownloadMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_DownloadMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_DownloadMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_DownloadMissionResponse,
  },
  //
// Download a list of mission items from the system (asynchronous) and report progress.
//
// Will fail if any of the downloaded mission items are not supported
// by the MAVSDK API.
subscribeDownloadMissionWithProgress: {
    path: '/mavsdk.rpc.mission.MissionService/SubscribeDownloadMissionWithProgress',
    requestStream: false,
    responseStream: true,
    requestType: mission_mission_pb.SubscribeDownloadMissionWithProgressRequest,
    responseType: mission_mission_pb.DownloadMissionWithProgressResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_SubscribeDownloadMissionWithProgressRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_SubscribeDownloadMissionWithProgressRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_DownloadMissionWithProgressResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_DownloadMissionWithProgressResponse,
  },
  //
// Cancel an ongoing mission download.
cancelMissionDownload: {
    path: '/mavsdk.rpc.mission.MissionService/CancelMissionDownload',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.CancelMissionDownloadRequest,
    responseType: mission_mission_pb.CancelMissionDownloadResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_CancelMissionDownloadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_CancelMissionDownloadRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_CancelMissionDownloadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_CancelMissionDownloadResponse,
  },
  //
// Start the mission.
//
// A mission must be uploaded to the vehicle before this can be called.
startMission: {
    path: '/mavsdk.rpc.mission.MissionService/StartMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.StartMissionRequest,
    responseType: mission_mission_pb.StartMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_StartMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_StartMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_StartMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_StartMissionResponse,
  },
  //
// Pause the mission.
//
// Pausing the mission puts the vehicle into
// [HOLD mode](https://docs.px4.io/en/flight_modes/hold.html).
// A multicopter should just hover at the spot while a fixedwing vehicle should loiter
// around the location where it paused.
pauseMission: {
    path: '/mavsdk.rpc.mission.MissionService/PauseMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.PauseMissionRequest,
    responseType: mission_mission_pb.PauseMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_PauseMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_PauseMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_PauseMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_PauseMissionResponse,
  },
  //
// Clear the mission saved on the vehicle.
clearMission: {
    path: '/mavsdk.rpc.mission.MissionService/ClearMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.ClearMissionRequest,
    responseType: mission_mission_pb.ClearMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_ClearMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_ClearMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_ClearMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_ClearMissionResponse,
  },
  //
// Sets the mission item index to go to.
//
// By setting the current index to 0, the mission is restarted from the beginning. If it is set
// to a specific index of a mission item, the mission will be set to this item.
//
// Note that this is not necessarily true for general missions using MAVLink if loop counters
// are used.
setCurrentMissionItem: {
    path: '/mavsdk.rpc.mission.MissionService/SetCurrentMissionItem',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.SetCurrentMissionItemRequest,
    responseType: mission_mission_pb.SetCurrentMissionItemResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_SetCurrentMissionItemRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_SetCurrentMissionItemRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_SetCurrentMissionItemResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_SetCurrentMissionItemResponse,
  },
  //
// Check if the mission has been finished.
isMissionFinished: {
    path: '/mavsdk.rpc.mission.MissionService/IsMissionFinished',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.IsMissionFinishedRequest,
    responseType: mission_mission_pb.IsMissionFinishedResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_IsMissionFinishedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_IsMissionFinishedRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_IsMissionFinishedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_IsMissionFinishedResponse,
  },
  //
// Subscribe to mission progress updates.
subscribeMissionProgress: {
    path: '/mavsdk.rpc.mission.MissionService/SubscribeMissionProgress',
    requestStream: false,
    responseStream: true,
    requestType: mission_mission_pb.SubscribeMissionProgressRequest,
    responseType: mission_mission_pb.MissionProgressResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_SubscribeMissionProgressRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_SubscribeMissionProgressRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_MissionProgressResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_MissionProgressResponse,
  },
  //
// Get whether to trigger Return-to-Launch (RTL) after mission is complete.
//
// Before getting this option, it needs to be set, or a mission
// needs to be downloaded.
getReturnToLaunchAfterMission: {
    path: '/mavsdk.rpc.mission.MissionService/GetReturnToLaunchAfterMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.GetReturnToLaunchAfterMissionRequest,
    responseType: mission_mission_pb.GetReturnToLaunchAfterMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_GetReturnToLaunchAfterMissionResponse,
  },
  //
// Set whether to trigger Return-to-Launch (RTL) after the mission is complete.
//
// This will only take effect for the next mission upload, meaning that
// the mission may have to be uploaded again.
setReturnToLaunchAfterMission: {
    path: '/mavsdk.rpc.mission.MissionService/SetReturnToLaunchAfterMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_mission_pb.SetReturnToLaunchAfterMissionRequest,
    responseType: mission_mission_pb.SetReturnToLaunchAfterMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_SetReturnToLaunchAfterMissionResponse,
  },
};

exports.MissionServiceClient = grpc.makeGenericClientConstructor(MissionServiceService);


// fix autocompletion
module.exports = exports;
