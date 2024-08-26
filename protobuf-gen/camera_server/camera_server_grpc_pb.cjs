/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var camera_server_camera_server_pb = require('../camera_server/camera_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_camera_server_CaptureStatusResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.CaptureStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.CaptureStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_CaptureStatusResponse(buffer_arg) {
  return camera_server_camera_server_pb.CaptureStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_FormatStorageResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.FormatStorageResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.FormatStorageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_FormatStorageResponse(buffer_arg) {
  return camera_server_camera_server_pb.FormatStorageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_ResetSettingsResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.ResetSettingsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.ResetSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_ResetSettingsResponse(buffer_arg) {
  return camera_server_camera_server_pb.ResetSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondCaptureStatusRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondCaptureStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondCaptureStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondCaptureStatusRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondCaptureStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondCaptureStatusResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondCaptureStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondCaptureStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondCaptureStatusResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondCaptureStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondFormatStorageRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondFormatStorageRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondFormatStorageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondFormatStorageRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondFormatStorageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondFormatStorageResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondFormatStorageResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondFormatStorageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondFormatStorageResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondFormatStorageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondResetSettingsRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondResetSettingsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondResetSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondResetSettingsRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondResetSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondResetSettingsResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondResetSettingsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondResetSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondResetSettingsResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondResetSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondSetModeRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondSetModeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondSetModeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondSetModeRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondSetModeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondSetModeResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondSetModeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondSetModeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondSetModeResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondSetModeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStartVideoRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStartVideoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStartVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStartVideoRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondStartVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStartVideoResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStartVideoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStartVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStartVideoResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondStartVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStartVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondStartVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStartVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondStartVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStopVideoRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStopVideoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStopVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStopVideoRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondStopVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStopVideoResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStopVideoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStopVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStopVideoResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondStopVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStopVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondStopVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStopVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondStopVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStorageInformationRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStorageInformationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStorageInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStorageInformationRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondStorageInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondStorageInformationResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondStorageInformationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondStorageInformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondStorageInformationResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondStorageInformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTakePhotoRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTakePhotoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTakePhotoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTakePhotoRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondTakePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTakePhotoResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTakePhotoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTakePhotoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTakePhotoResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondTakePhotoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTrackingOffCommandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondTrackingOffCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTrackingOffCommandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondTrackingOffCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTrackingPointCommandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondTrackingPointCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTrackingPointCommandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondTrackingPointCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTrackingRectangleCommandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondTrackingRectangleCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondTrackingRectangleCommandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondTrackingRectangleCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomInStartRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomInStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomInStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomInStartRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomInStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomInStartResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomInStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomInStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomInStartResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomInStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomOutStartRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomOutStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomOutStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomOutStartRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomOutStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomOutStartResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomOutStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomOutStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomOutStartResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomOutStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomRangeRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomRangeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomRangeRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomRangeResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomRangeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomRangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomRangeResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomStopRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomStopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomStopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomStopRequest(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomStopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_RespondZoomStopResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.RespondZoomStopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.RespondZoomStopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_RespondZoomStopResponse(buffer_arg) {
  return camera_server_camera_server_pb.RespondZoomStopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetInProgressRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetInProgressRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetInProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetInProgressRequest(buffer_arg) {
  return camera_server_camera_server_pb.SetInProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetInProgressResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetInProgressResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetInProgressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetInProgressResponse(buffer_arg) {
  return camera_server_camera_server_pb.SetInProgressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetInformationRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetInformationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetInformationRequest(buffer_arg) {
  return camera_server_camera_server_pb.SetInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetInformationResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetInformationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetInformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetInformationResponse(buffer_arg) {
  return camera_server_camera_server_pb.SetInformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetModeResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetModeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetModeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetModeResponse(buffer_arg) {
  return camera_server_camera_server_pb.SetModeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetTrackingOffStatusRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetTrackingOffStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetTrackingOffStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetTrackingOffStatusRequest(buffer_arg) {
  return camera_server_camera_server_pb.SetTrackingOffStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetTrackingOffStatusResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetTrackingOffStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetTrackingOffStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetTrackingOffStatusResponse(buffer_arg) {
  return camera_server_camera_server_pb.SetTrackingOffStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetTrackingRectangleStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusRequest(buffer_arg) {
  return camera_server_camera_server_pb.SetTrackingRectangleStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetTrackingRectangleStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusResponse(buffer_arg) {
  return camera_server_camera_server_pb.SetTrackingRectangleStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetVideoStreamingRequest(buffer_arg) {
  return camera_server_camera_server_pb.SetVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SetVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SetVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SetVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SetVideoStreamingResponse(buffer_arg) {
  return camera_server_camera_server_pb.SetVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_StartVideoResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.StartVideoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.StartVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_StartVideoResponse(buffer_arg) {
  return camera_server_camera_server_pb.StartVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_StartVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.StartVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.StartVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_StartVideoStreamingResponse(buffer_arg) {
  return camera_server_camera_server_pb.StartVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_StopVideoResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.StopVideoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.StopVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_StopVideoResponse(buffer_arg) {
  return camera_server_camera_server_pb.StopVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_StopVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.StopVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.StopVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_StopVideoStreamingResponse(buffer_arg) {
  return camera_server_camera_server_pb.StopVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_StorageInformationResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.StorageInformationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.StorageInformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_StorageInformationResponse(buffer_arg) {
  return camera_server_camera_server_pb.StorageInformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeCaptureStatusRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeCaptureStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeCaptureStatusRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeCaptureStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeFormatStorageRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeFormatStorageRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeFormatStorageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeFormatStorageRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeFormatStorageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeResetSettingsRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeResetSettingsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeResetSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeResetSettingsRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeResetSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeSetModeRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeSetModeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeSetModeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeSetModeRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeSetModeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeStartVideoRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeStartVideoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeStartVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeStartVideoRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeStartVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeStartVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeStartVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeStartVideoStreamingRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeStartVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeStopVideoRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeStopVideoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeStopVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeStopVideoRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeStopVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeStopVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeStopVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeStopVideoStreamingRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeStopVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeStorageInformationRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeStorageInformationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeStorageInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeStorageInformationRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeStorageInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeTakePhotoRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeTakePhotoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeTakePhotoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeTakePhotoRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeTakePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeTrackingOffCommandRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeTrackingOffCommandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeTrackingOffCommandRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeTrackingOffCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeTrackingPointCommandRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeTrackingPointCommandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeTrackingPointCommandRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeTrackingPointCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeTrackingRectangleCommandRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeTrackingRectangleCommandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeTrackingRectangleCommandRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeTrackingRectangleCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeZoomInStartRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeZoomInStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeZoomInStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeZoomInStartRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeZoomInStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeZoomOutStartRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeZoomOutStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeZoomOutStartRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeZoomOutStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeZoomRangeRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeZoomRangeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeZoomRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeZoomRangeRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeZoomRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_SubscribeZoomStopRequest(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.SubscribeZoomStopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.SubscribeZoomStopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_SubscribeZoomStopRequest(buffer_arg) {
  return camera_server_camera_server_pb.SubscribeZoomStopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_TakePhotoResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.TakePhotoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.TakePhotoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_TakePhotoResponse(buffer_arg) {
  return camera_server_camera_server_pb.TakePhotoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_TrackingOffCommandResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.TrackingOffCommandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.TrackingOffCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_TrackingOffCommandResponse(buffer_arg) {
  return camera_server_camera_server_pb.TrackingOffCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_TrackingPointCommandResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.TrackingPointCommandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.TrackingPointCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_TrackingPointCommandResponse(buffer_arg) {
  return camera_server_camera_server_pb.TrackingPointCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_TrackingRectangleCommandResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.TrackingRectangleCommandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.TrackingRectangleCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_TrackingRectangleCommandResponse(buffer_arg) {
  return camera_server_camera_server_pb.TrackingRectangleCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_ZoomInStartResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.ZoomInStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.ZoomInStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_ZoomInStartResponse(buffer_arg) {
  return camera_server_camera_server_pb.ZoomInStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_ZoomOutStartResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.ZoomOutStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.ZoomOutStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_ZoomOutStartResponse(buffer_arg) {
  return camera_server_camera_server_pb.ZoomOutStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_ZoomRangeResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.ZoomRangeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.ZoomRangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_ZoomRangeResponse(buffer_arg) {
  return camera_server_camera_server_pb.ZoomRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_server_ZoomStopResponse(arg) {
  if (!(arg instanceof camera_server_camera_server_pb.ZoomStopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera_server.ZoomStopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_server_ZoomStopResponse(buffer_arg) {
  return camera_server_camera_server_pb.ZoomStopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides handling of camera interface
var CameraServerServiceService = exports.CameraServerServiceService = {
  // Sets the camera information. This must be called as soon as the camera server is created.
setInformation: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SetInformation',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.SetInformationRequest,
    responseType: camera_server_camera_server_pb.SetInformationResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SetInformationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SetInformationRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_SetInformationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_SetInformationResponse,
  },
  // Sets video streaming settings.
setVideoStreaming: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SetVideoStreaming',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.SetVideoStreamingRequest,
    responseType: camera_server_camera_server_pb.SetVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SetVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SetVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_SetVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_SetVideoStreamingResponse,
  },
  // Sets image capture in progress status flags. This should be set to true when the camera is busy taking a photo and false when it is done.
setInProgress: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SetInProgress',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.SetInProgressRequest,
    responseType: camera_server_camera_server_pb.SetInProgressResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SetInProgressRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SetInProgressRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_SetInProgressResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_SetInProgressResponse,
  },
  // Subscribe to image capture requests. Each request received should respond to using RespondTakePhoto.
subscribeTakePhoto: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeTakePhoto',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeTakePhotoRequest,
    responseType: camera_server_camera_server_pb.TakePhotoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeTakePhotoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeTakePhotoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_TakePhotoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_TakePhotoResponse,
  },
  // Respond to an image capture request from SubscribeTakePhoto.
respondTakePhoto: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondTakePhoto',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondTakePhotoRequest,
    responseType: camera_server_camera_server_pb.RespondTakePhotoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondTakePhotoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTakePhotoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondTakePhotoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTakePhotoResponse,
  },
  // Subscribe to start video requests. Each request received should respond to using RespondStartVideo
subscribeStartVideo: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeStartVideo',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeStartVideoRequest,
    responseType: camera_server_camera_server_pb.StartVideoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeStartVideoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeStartVideoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_StartVideoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_StartVideoResponse,
  },
  // Subscribe to stop video requests. Each request received should respond using StopVideoResponse
respondStartVideo: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondStartVideo',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondStartVideoRequest,
    responseType: camera_server_camera_server_pb.RespondStartVideoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondStartVideoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStartVideoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondStartVideoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStartVideoResponse,
  },
  // Subscribe to stop video requests. Each request received should response to using RespondStopVideo
subscribeStopVideo: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeStopVideo',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeStopVideoRequest,
    responseType: camera_server_camera_server_pb.StopVideoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeStopVideoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeStopVideoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_StopVideoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_StopVideoResponse,
  },
  // Respond to stop video request from SubscribeStopVideo.
respondStopVideo: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondStopVideo',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondStopVideoRequest,
    responseType: camera_server_camera_server_pb.RespondStopVideoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondStopVideoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStopVideoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondStopVideoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStopVideoResponse,
  },
  // Subscribe to start video streaming requests. Each request received should response to using RespondStartVideoStreaming
subscribeStartVideoStreaming: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeStartVideoStreaming',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeStartVideoStreamingRequest,
    responseType: camera_server_camera_server_pb.StartVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeStartVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeStartVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_StartVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_StartVideoStreamingResponse,
  },
  // Respond to start video streaming from SubscribeStartVideoStreaming.
respondStartVideoStreaming: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondStartVideoStreaming',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondStartVideoStreamingRequest,
    responseType: camera_server_camera_server_pb.RespondStartVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStartVideoStreamingResponse,
  },
  // Subscribe to stop video streaming requests. Each request received should response to using RespondStopVideoStreaming
subscribeStopVideoStreaming: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeStopVideoStreaming',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeStopVideoStreamingRequest,
    responseType: camera_server_camera_server_pb.StopVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeStopVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeStopVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_StopVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_StopVideoStreamingResponse,
  },
  // Respond to stop video streaming from SubscribeStopVideoStreaming.
respondStopVideoStreaming: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondStopVideoStreaming',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondStopVideoStreamingRequest,
    responseType: camera_server_camera_server_pb.RespondStopVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStopVideoStreamingResponse,
  },
  // Subscribe to set camera mode requests. Each request received should response to using RespondSetMode
subscribeSetMode: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeSetMode',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeSetModeRequest,
    responseType: camera_server_camera_server_pb.SetModeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeSetModeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeSetModeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_SetModeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_SetModeResponse,
  },
  // Respond to set camera mode from SubscribeSetMode.
respondSetMode: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondSetMode',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondSetModeRequest,
    responseType: camera_server_camera_server_pb.RespondSetModeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondSetModeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondSetModeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondSetModeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondSetModeResponse,
  },
  // Subscribe to camera storage information requests. Each request received should response to using RespondStorageInformation
subscribeStorageInformation: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeStorageInformation',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeStorageInformationRequest,
    responseType: camera_server_camera_server_pb.StorageInformationResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeStorageInformationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeStorageInformationRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_StorageInformationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_StorageInformationResponse,
  },
  // Respond to camera storage information from SubscribeStorageInformation.
respondStorageInformation: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondStorageInformation',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondStorageInformationRequest,
    responseType: camera_server_camera_server_pb.RespondStorageInformationResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondStorageInformationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStorageInformationRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondStorageInformationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondStorageInformationResponse,
  },
  // Subscribe to camera capture status requests. Each request received should response to using RespondCaptureStatus
subscribeCaptureStatus: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeCaptureStatus',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeCaptureStatusRequest,
    responseType: camera_server_camera_server_pb.CaptureStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeCaptureStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeCaptureStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_CaptureStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_CaptureStatusResponse,
  },
  // Respond to camera capture status from SubscribeCaptureStatus.
respondCaptureStatus: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondCaptureStatus',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondCaptureStatusRequest,
    responseType: camera_server_camera_server_pb.RespondCaptureStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondCaptureStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondCaptureStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondCaptureStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondCaptureStatusResponse,
  },
  // Subscribe to format storage requests. Each request received should response to using RespondFormatStorage
subscribeFormatStorage: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeFormatStorage',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeFormatStorageRequest,
    responseType: camera_server_camera_server_pb.FormatStorageResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeFormatStorageRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeFormatStorageRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_FormatStorageResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_FormatStorageResponse,
  },
  // Respond to format storage from SubscribeFormatStorage.
respondFormatStorage: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondFormatStorage',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondFormatStorageRequest,
    responseType: camera_server_camera_server_pb.RespondFormatStorageResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondFormatStorageRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondFormatStorageRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondFormatStorageResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondFormatStorageResponse,
  },
  // Subscribe to reset settings requests. Each request received should response to using RespondResetSettings
subscribeResetSettings: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeResetSettings',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeResetSettingsRequest,
    responseType: camera_server_camera_server_pb.ResetSettingsResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeResetSettingsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeResetSettingsRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_ResetSettingsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_ResetSettingsResponse,
  },
  // Respond to reset settings from SubscribeResetSettings.
respondResetSettings: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondResetSettings',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondResetSettingsRequest,
    responseType: camera_server_camera_server_pb.RespondResetSettingsResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondResetSettingsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondResetSettingsRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondResetSettingsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondResetSettingsResponse,
  },
  // Subscribe to zoom in start command
subscribeZoomInStart: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeZoomInStart',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeZoomInStartRequest,
    responseType: camera_server_camera_server_pb.ZoomInStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeZoomInStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeZoomInStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_ZoomInStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_ZoomInStartResponse,
  },
  // Respond to zoom in start.
respondZoomInStart: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondZoomInStart',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondZoomInStartRequest,
    responseType: camera_server_camera_server_pb.RespondZoomInStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomInStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomInStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomInStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomInStartResponse,
  },
  // Subscribe to zoom out start command
subscribeZoomOutStart: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeZoomOutStart',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeZoomOutStartRequest,
    responseType: camera_server_camera_server_pb.ZoomOutStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeZoomOutStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeZoomOutStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_ZoomOutStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_ZoomOutStartResponse,
  },
  // Respond to zoom out start.
respondZoomOutStart: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondZoomOutStart',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondZoomOutStartRequest,
    responseType: camera_server_camera_server_pb.RespondZoomOutStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomOutStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomOutStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomOutStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomOutStartResponse,
  },
  // Subscribe to zoom stop command
subscribeZoomStop: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeZoomStop',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeZoomStopRequest,
    responseType: camera_server_camera_server_pb.ZoomStopResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeZoomStopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeZoomStopRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_ZoomStopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_ZoomStopResponse,
  },
  // Respond to zoom stop.
respondZoomStop: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondZoomStop',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondZoomStopRequest,
    responseType: camera_server_camera_server_pb.RespondZoomStopResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomStopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomStopRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomStopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomStopResponse,
  },
  // Subscribe to zoom range command
subscribeZoomRange: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeZoomRange',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeZoomRangeRequest,
    responseType: camera_server_camera_server_pb.ZoomRangeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeZoomRangeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeZoomRangeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_ZoomRangeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_ZoomRangeResponse,
  },
  // Respond to zoom range.
respondZoomRange: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondZoomRange',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondZoomRangeRequest,
    responseType: camera_server_camera_server_pb.RespondZoomRangeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomRangeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomRangeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondZoomRangeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondZoomRangeResponse,
  },
  // Set/update the current rectangle tracking status.
setTrackingRectangleStatus: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SetTrackingRectangleStatus',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.SetTrackingRectangleStatusRequest,
    responseType: camera_server_camera_server_pb.SetTrackingRectangleStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_SetTrackingRectangleStatusResponse,
  },
  // Set the current tracking status to off.
setTrackingOffStatus: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SetTrackingOffStatus',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.SetTrackingOffStatusRequest,
    responseType: camera_server_camera_server_pb.SetTrackingOffStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SetTrackingOffStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SetTrackingOffStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_SetTrackingOffStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_SetTrackingOffStatusResponse,
  },
  // Subscribe to incoming tracking point command.
subscribeTrackingPointCommand: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeTrackingPointCommand',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeTrackingPointCommandRequest,
    responseType: camera_server_camera_server_pb.TrackingPointCommandResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeTrackingPointCommandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeTrackingPointCommandRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_TrackingPointCommandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_TrackingPointCommandResponse,
  },
  // Subscribe to incoming tracking rectangle command.
subscribeTrackingRectangleCommand: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeTrackingRectangleCommand',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeTrackingRectangleCommandRequest,
    responseType: camera_server_camera_server_pb.TrackingRectangleCommandResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeTrackingRectangleCommandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeTrackingRectangleCommandRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_TrackingRectangleCommandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_TrackingRectangleCommandResponse,
  },
  // Subscribe to incoming tracking off command.
subscribeTrackingOffCommand: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/SubscribeTrackingOffCommand',
    requestStream: false,
    responseStream: true,
    requestType: camera_server_camera_server_pb.SubscribeTrackingOffCommandRequest,
    responseType: camera_server_camera_server_pb.TrackingOffCommandResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_SubscribeTrackingOffCommandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_SubscribeTrackingOffCommandRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_TrackingOffCommandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_TrackingOffCommandResponse,
  },
  // Respond to an incoming tracking point command.
respondTrackingPointCommand: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondTrackingPointCommand',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondTrackingPointCommandRequest,
    responseType: camera_server_camera_server_pb.RespondTrackingPointCommandResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTrackingPointCommandResponse,
  },
  // Respond to an incoming tracking rectangle command.
respondTrackingRectangleCommand: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondTrackingRectangleCommand',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondTrackingRectangleCommandRequest,
    responseType: camera_server_camera_server_pb.RespondTrackingRectangleCommandResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTrackingRectangleCommandResponse,
  },
  // Respond to an incoming tracking off command.
respondTrackingOffCommand: {
    path: '/mavsdk.rpc.camera_server.CameraServerService/RespondTrackingOffCommand',
    requestStream: false,
    responseStream: false,
    requestType: camera_server_camera_server_pb.RespondTrackingOffCommandRequest,
    responseType: camera_server_camera_server_pb.RespondTrackingOffCommandResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_server_RespondTrackingOffCommandResponse,
  },
};

exports.CameraServerServiceClient = grpc.makeGenericClientConstructor(CameraServerServiceService);


// fix autocompletion
module.exports = exports;
