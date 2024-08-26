/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mission_raw_mission_raw_pb = require('../mission_raw/mission_raw_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_mission_raw_CancelMissionDownloadRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.CancelMissionDownloadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.CancelMissionDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_CancelMissionDownloadRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.CancelMissionDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_CancelMissionDownloadResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.CancelMissionDownloadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.CancelMissionDownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_CancelMissionDownloadResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.CancelMissionDownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_CancelMissionUploadRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.CancelMissionUploadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.CancelMissionUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_CancelMissionUploadRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.CancelMissionUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_CancelMissionUploadResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.CancelMissionUploadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.CancelMissionUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_CancelMissionUploadResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.CancelMissionUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_ClearMissionRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.ClearMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.ClearMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_ClearMissionRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.ClearMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_ClearMissionResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.ClearMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.ClearMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_ClearMissionResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.ClearMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_DownloadMissionRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.DownloadMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.DownloadMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_DownloadMissionRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.DownloadMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_DownloadMissionResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.DownloadMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.DownloadMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_DownloadMissionResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.DownloadMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.ImportQgroundcontrolMissionFromStringRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionFromStringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.ImportQgroundcontrolMissionFromStringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.ImportQgroundcontrolMissionFromStringResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionFromStringResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.ImportQgroundcontrolMissionFromStringResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.ImportQgroundcontrolMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.ImportQgroundcontrolMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.ImportQgroundcontrolMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.ImportQgroundcontrolMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_MissionChangedResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.MissionChangedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.MissionChangedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_MissionChangedResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.MissionChangedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_MissionProgressResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.MissionProgressResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.MissionProgressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_MissionProgressResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.MissionProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_PauseMissionRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.PauseMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.PauseMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_PauseMissionRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.PauseMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_PauseMissionResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.PauseMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.PauseMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_PauseMissionResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.PauseMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.SetCurrentMissionItemRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.SetCurrentMissionItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.SetCurrentMissionItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.SetCurrentMissionItemResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.SetCurrentMissionItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.SetCurrentMissionItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_StartMissionRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.StartMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.StartMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_StartMissionRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.StartMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_StartMissionResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.StartMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.StartMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_StartMissionResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.StartMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_SubscribeMissionChangedRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.SubscribeMissionChangedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.SubscribeMissionChangedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_SubscribeMissionChangedRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.SubscribeMissionChangedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_SubscribeMissionProgressRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.SubscribeMissionProgressRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.SubscribeMissionProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_SubscribeMissionProgressRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.SubscribeMissionProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_UploadGeofenceRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.UploadGeofenceRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.UploadGeofenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_UploadGeofenceRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.UploadGeofenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_UploadGeofenceResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.UploadGeofenceResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.UploadGeofenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_UploadGeofenceResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.UploadGeofenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_UploadMissionRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.UploadMissionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.UploadMissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_UploadMissionRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.UploadMissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_UploadMissionResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.UploadMissionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.UploadMissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_UploadMissionResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.UploadMissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_UploadRallyPointsRequest(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.UploadRallyPointsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.UploadRallyPointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_UploadRallyPointsRequest(buffer_arg) {
  return mission_raw_mission_raw_pb.UploadRallyPointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_mission_raw_UploadRallyPointsResponse(arg) {
  if (!(arg instanceof mission_raw_mission_raw_pb.UploadRallyPointsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.mission_raw.UploadRallyPointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_mission_raw_UploadRallyPointsResponse(buffer_arg) {
  return mission_raw_mission_raw_pb.UploadRallyPointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable raw missions as exposed by MAVLink.
var MissionRawServiceService = exports.MissionRawServiceService = {
  //
// Upload a list of raw mission items to the system.
//
// The raw mission items are uploaded to a drone. Once uploaded the mission
// can be started and executed even if the connection is lost.
uploadMission: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/UploadMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.UploadMissionRequest,
    responseType: mission_raw_mission_raw_pb.UploadMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_UploadMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_UploadMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_UploadMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_UploadMissionResponse,
  },
  //
// Upload a list of geofence items to the system.
uploadGeofence: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/UploadGeofence',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.UploadGeofenceRequest,
    responseType: mission_raw_mission_raw_pb.UploadGeofenceResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_UploadGeofenceRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_UploadGeofenceRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_UploadGeofenceResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_UploadGeofenceResponse,
  },
  //
// Upload a list of rally point items to the system.
uploadRallyPoints: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/UploadRallyPoints',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.UploadRallyPointsRequest,
    responseType: mission_raw_mission_raw_pb.UploadRallyPointsResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_UploadRallyPointsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_UploadRallyPointsRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_UploadRallyPointsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_UploadRallyPointsResponse,
  },
  //
// Cancel an ongoing mission upload.
cancelMissionUpload: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/CancelMissionUpload',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.CancelMissionUploadRequest,
    responseType: mission_raw_mission_raw_pb.CancelMissionUploadResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_CancelMissionUploadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_CancelMissionUploadRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_CancelMissionUploadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_CancelMissionUploadResponse,
  },
  //
// Download a list of raw mission items from the system (asynchronous).
downloadMission: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/DownloadMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.DownloadMissionRequest,
    responseType: mission_raw_mission_raw_pb.DownloadMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_DownloadMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_DownloadMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_DownloadMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_DownloadMissionResponse,
  },
  //
// Cancel an ongoing mission download.
cancelMissionDownload: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/CancelMissionDownload',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.CancelMissionDownloadRequest,
    responseType: mission_raw_mission_raw_pb.CancelMissionDownloadResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_CancelMissionDownloadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_CancelMissionDownloadRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_CancelMissionDownloadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_CancelMissionDownloadResponse,
  },
  //
// Start the mission.
//
// A mission must be uploaded to the vehicle before this can be called.
startMission: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/StartMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.StartMissionRequest,
    responseType: mission_raw_mission_raw_pb.StartMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_StartMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_StartMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_StartMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_StartMissionResponse,
  },
  //
// Pause the mission.
//
// Pausing the mission puts the vehicle into
// [HOLD mode](https://docs.px4.io/en/flight_modes/hold.html).
// A multicopter should just hover at the spot while a fixedwing vehicle should loiter
// around the location where it paused.
pauseMission: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/PauseMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.PauseMissionRequest,
    responseType: mission_raw_mission_raw_pb.PauseMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_PauseMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_PauseMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_PauseMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_PauseMissionResponse,
  },
  //
// Clear the mission saved on the vehicle.
clearMission: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/ClearMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.ClearMissionRequest,
    responseType: mission_raw_mission_raw_pb.ClearMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_ClearMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_ClearMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_ClearMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_ClearMissionResponse,
  },
  //
// Sets the raw mission item index to go to.
//
// By setting the current index to 0, the mission is restarted from the beginning. If it is set
// to a specific index of a raw mission item, the mission will be set to this item.
setCurrentMissionItem: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/SetCurrentMissionItem',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.SetCurrentMissionItemRequest,
    responseType: mission_raw_mission_raw_pb.SetCurrentMissionItemResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_SetCurrentMissionItemResponse,
  },
  //
// Subscribe to mission progress updates.
subscribeMissionProgress: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/SubscribeMissionProgress',
    requestStream: false,
    responseStream: true,
    requestType: mission_raw_mission_raw_pb.SubscribeMissionProgressRequest,
    responseType: mission_raw_mission_raw_pb.MissionProgressResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_SubscribeMissionProgressRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_SubscribeMissionProgressRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_MissionProgressResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_MissionProgressResponse,
  },
  // *
// Subscribes to mission changed.
//
// This notification can be used to be informed if a ground station has
// been uploaded or changed by a ground station or companion computer.
//
// @param callback Callback to notify about change.
subscribeMissionChanged: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/SubscribeMissionChanged',
    requestStream: false,
    responseStream: true,
    requestType: mission_raw_mission_raw_pb.SubscribeMissionChangedRequest,
    responseType: mission_raw_mission_raw_pb.MissionChangedResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_SubscribeMissionChangedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_SubscribeMissionChangedRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_MissionChangedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_MissionChangedResponse,
  },
  //
// Import a QGroundControl missions in JSON .plan format, from a file.
//
// Supported:
// - Waypoints
// - Survey
// Not supported:
// - Structure Scan
importQgroundcontrolMission: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/ImportQgroundcontrolMission',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.ImportQgroundcontrolMissionRequest,
    responseType: mission_raw_mission_raw_pb.ImportQgroundcontrolMissionResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionResponse,
  },
  //
// Import a QGroundControl missions in JSON .plan format, from a string.
//
// Supported:
// - Waypoints
// - Survey
// Not supported:
// - Structure Scan
importQgroundcontrolMissionFromString: {
    path: '/mavsdk.rpc.mission_raw.MissionRawService/ImportQgroundcontrolMissionFromString',
    requestStream: false,
    responseStream: false,
    requestType: mission_raw_mission_raw_pb.ImportQgroundcontrolMissionFromStringRequest,
    responseType: mission_raw_mission_raw_pb.ImportQgroundcontrolMissionFromStringResponse,
    requestSerialize: serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringRequest,
    requestDeserialize: deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringRequest,
    responseSerialize: serialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringResponse,
    responseDeserialize: deserialize_mavsdk_rpc_mission_raw_ImportQgroundcontrolMissionFromStringResponse,
  },
};

exports.MissionRawServiceClient = grpc.makeGenericClientConstructor(MissionRawServiceService);


// fix autocompletion
module.exports = exports;
