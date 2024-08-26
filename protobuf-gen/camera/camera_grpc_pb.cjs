/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var camera_camera_pb = require('../camera/camera_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_camera_CaptureInfoResponse(arg) {
  if (!(arg instanceof camera_camera_pb.CaptureInfoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.CaptureInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_CaptureInfoResponse(buffer_arg) {
  return camera_camera_pb.CaptureInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_CurrentSettingsResponse(arg) {
  if (!(arg instanceof camera_camera_pb.CurrentSettingsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.CurrentSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_CurrentSettingsResponse(buffer_arg) {
  return camera_camera_pb.CurrentSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusInStartRequest(arg) {
  if (!(arg instanceof camera_camera_pb.FocusInStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusInStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusInStartRequest(buffer_arg) {
  return camera_camera_pb.FocusInStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusInStartResponse(arg) {
  if (!(arg instanceof camera_camera_pb.FocusInStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusInStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusInStartResponse(buffer_arg) {
  return camera_camera_pb.FocusInStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusOutStartRequest(arg) {
  if (!(arg instanceof camera_camera_pb.FocusOutStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusOutStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusOutStartRequest(buffer_arg) {
  return camera_camera_pb.FocusOutStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusOutStartResponse(arg) {
  if (!(arg instanceof camera_camera_pb.FocusOutStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusOutStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusOutStartResponse(buffer_arg) {
  return camera_camera_pb.FocusOutStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusRangeRequest(arg) {
  if (!(arg instanceof camera_camera_pb.FocusRangeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusRangeRequest(buffer_arg) {
  return camera_camera_pb.FocusRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusRangeResponse(arg) {
  if (!(arg instanceof camera_camera_pb.FocusRangeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusRangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusRangeResponse(buffer_arg) {
  return camera_camera_pb.FocusRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusStopRequest(arg) {
  if (!(arg instanceof camera_camera_pb.FocusStopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusStopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusStopRequest(buffer_arg) {
  return camera_camera_pb.FocusStopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FocusStopResponse(arg) {
  if (!(arg instanceof camera_camera_pb.FocusStopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FocusStopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FocusStopResponse(buffer_arg) {
  return camera_camera_pb.FocusStopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FormatStorageRequest(arg) {
  if (!(arg instanceof camera_camera_pb.FormatStorageRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FormatStorageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FormatStorageRequest(buffer_arg) {
  return camera_camera_pb.FormatStorageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_FormatStorageResponse(arg) {
  if (!(arg instanceof camera_camera_pb.FormatStorageResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.FormatStorageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_FormatStorageResponse(buffer_arg) {
  return camera_camera_pb.FormatStorageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_GetSettingRequest(arg) {
  if (!(arg instanceof camera_camera_pb.GetSettingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.GetSettingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_GetSettingRequest(buffer_arg) {
  return camera_camera_pb.GetSettingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_GetSettingResponse(arg) {
  if (!(arg instanceof camera_camera_pb.GetSettingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.GetSettingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_GetSettingResponse(buffer_arg) {
  return camera_camera_pb.GetSettingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_InformationResponse(arg) {
  if (!(arg instanceof camera_camera_pb.InformationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.InformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_InformationResponse(buffer_arg) {
  return camera_camera_pb.InformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ListPhotosRequest(arg) {
  if (!(arg instanceof camera_camera_pb.ListPhotosRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ListPhotosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ListPhotosRequest(buffer_arg) {
  return camera_camera_pb.ListPhotosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ListPhotosResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ListPhotosResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ListPhotosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ListPhotosResponse(buffer_arg) {
  return camera_camera_pb.ListPhotosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ModeResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ModeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ModeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ModeResponse(buffer_arg) {
  return camera_camera_pb.ModeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_PossibleSettingOptionsResponse(arg) {
  if (!(arg instanceof camera_camera_pb.PossibleSettingOptionsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.PossibleSettingOptionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_PossibleSettingOptionsResponse(buffer_arg) {
  return camera_camera_pb.PossibleSettingOptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_PrepareRequest(arg) {
  if (!(arg instanceof camera_camera_pb.PrepareRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.PrepareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_PrepareRequest(buffer_arg) {
  return camera_camera_pb.PrepareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_PrepareResponse(arg) {
  if (!(arg instanceof camera_camera_pb.PrepareResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.PrepareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_PrepareResponse(buffer_arg) {
  return camera_camera_pb.PrepareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ResetSettingsRequest(arg) {
  if (!(arg instanceof camera_camera_pb.ResetSettingsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ResetSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ResetSettingsRequest(buffer_arg) {
  return camera_camera_pb.ResetSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ResetSettingsResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ResetSettingsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ResetSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ResetSettingsResponse(buffer_arg) {
  return camera_camera_pb.ResetSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SelectCameraRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SelectCameraRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SelectCameraRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SelectCameraRequest(buffer_arg) {
  return camera_camera_pb.SelectCameraRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SelectCameraResponse(arg) {
  if (!(arg instanceof camera_camera_pb.SelectCameraResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SelectCameraResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SelectCameraResponse(buffer_arg) {
  return camera_camera_pb.SelectCameraResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SetModeRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SetModeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SetModeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SetModeRequest(buffer_arg) {
  return camera_camera_pb.SetModeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SetModeResponse(arg) {
  if (!(arg instanceof camera_camera_pb.SetModeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SetModeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SetModeResponse(buffer_arg) {
  return camera_camera_pb.SetModeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SetSettingRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SetSettingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SetSettingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SetSettingRequest(buffer_arg) {
  return camera_camera_pb.SetSettingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SetSettingResponse(arg) {
  if (!(arg instanceof camera_camera_pb.SetSettingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SetSettingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SetSettingResponse(buffer_arg) {
  return camera_camera_pb.SetSettingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StartPhotoIntervalRequest(arg) {
  if (!(arg instanceof camera_camera_pb.StartPhotoIntervalRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StartPhotoIntervalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StartPhotoIntervalRequest(buffer_arg) {
  return camera_camera_pb.StartPhotoIntervalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StartPhotoIntervalResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StartPhotoIntervalResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StartPhotoIntervalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StartPhotoIntervalResponse(buffer_arg) {
  return camera_camera_pb.StartPhotoIntervalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StartVideoRequest(arg) {
  if (!(arg instanceof camera_camera_pb.StartVideoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StartVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StartVideoRequest(buffer_arg) {
  return camera_camera_pb.StartVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StartVideoResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StartVideoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StartVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StartVideoResponse(buffer_arg) {
  return camera_camera_pb.StartVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StartVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_camera_pb.StartVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StartVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StartVideoStreamingRequest(buffer_arg) {
  return camera_camera_pb.StartVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StartVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StartVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StartVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StartVideoStreamingResponse(buffer_arg) {
  return camera_camera_pb.StartVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StatusResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StatusResponse(buffer_arg) {
  return camera_camera_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StopPhotoIntervalRequest(arg) {
  if (!(arg instanceof camera_camera_pb.StopPhotoIntervalRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StopPhotoIntervalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StopPhotoIntervalRequest(buffer_arg) {
  return camera_camera_pb.StopPhotoIntervalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StopPhotoIntervalResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StopPhotoIntervalResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StopPhotoIntervalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StopPhotoIntervalResponse(buffer_arg) {
  return camera_camera_pb.StopPhotoIntervalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StopVideoRequest(arg) {
  if (!(arg instanceof camera_camera_pb.StopVideoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StopVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StopVideoRequest(buffer_arg) {
  return camera_camera_pb.StopVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StopVideoResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StopVideoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StopVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StopVideoResponse(buffer_arg) {
  return camera_camera_pb.StopVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StopVideoStreamingRequest(arg) {
  if (!(arg instanceof camera_camera_pb.StopVideoStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StopVideoStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StopVideoStreamingRequest(buffer_arg) {
  return camera_camera_pb.StopVideoStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_StopVideoStreamingResponse(arg) {
  if (!(arg instanceof camera_camera_pb.StopVideoStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.StopVideoStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_StopVideoStreamingResponse(buffer_arg) {
  return camera_camera_pb.StopVideoStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribeCaptureInfoRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribeCaptureInfoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribeCaptureInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribeCaptureInfoRequest(buffer_arg) {
  return camera_camera_pb.SubscribeCaptureInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribeCurrentSettingsRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribeCurrentSettingsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribeCurrentSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribeCurrentSettingsRequest(buffer_arg) {
  return camera_camera_pb.SubscribeCurrentSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribeInformationRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribeInformationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribeInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribeInformationRequest(buffer_arg) {
  return camera_camera_pb.SubscribeInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribeModeRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribeModeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribeModeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribeModeRequest(buffer_arg) {
  return camera_camera_pb.SubscribeModeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribePossibleSettingOptionsRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribePossibleSettingOptionsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribePossibleSettingOptionsRequest(buffer_arg) {
  return camera_camera_pb.SubscribePossibleSettingOptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribeStatusRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribeStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribeStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribeStatusRequest(buffer_arg) {
  return camera_camera_pb.SubscribeStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_SubscribeVideoStreamInfoRequest(arg) {
  if (!(arg instanceof camera_camera_pb.SubscribeVideoStreamInfoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_SubscribeVideoStreamInfoRequest(buffer_arg) {
  return camera_camera_pb.SubscribeVideoStreamInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TakePhotoRequest(arg) {
  if (!(arg instanceof camera_camera_pb.TakePhotoRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TakePhotoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TakePhotoRequest(buffer_arg) {
  return camera_camera_pb.TakePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TakePhotoResponse(arg) {
  if (!(arg instanceof camera_camera_pb.TakePhotoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TakePhotoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TakePhotoResponse(buffer_arg) {
  return camera_camera_pb.TakePhotoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TrackPointRequest(arg) {
  if (!(arg instanceof camera_camera_pb.TrackPointRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TrackPointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TrackPointRequest(buffer_arg) {
  return camera_camera_pb.TrackPointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TrackPointResponse(arg) {
  if (!(arg instanceof camera_camera_pb.TrackPointResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TrackPointResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TrackPointResponse(buffer_arg) {
  return camera_camera_pb.TrackPointResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TrackRectangleRequest(arg) {
  if (!(arg instanceof camera_camera_pb.TrackRectangleRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TrackRectangleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TrackRectangleRequest(buffer_arg) {
  return camera_camera_pb.TrackRectangleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TrackRectangleResponse(arg) {
  if (!(arg instanceof camera_camera_pb.TrackRectangleResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TrackRectangleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TrackRectangleResponse(buffer_arg) {
  return camera_camera_pb.TrackRectangleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TrackStopRequest(arg) {
  if (!(arg instanceof camera_camera_pb.TrackStopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TrackStopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TrackStopRequest(buffer_arg) {
  return camera_camera_pb.TrackStopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_TrackStopResponse(arg) {
  if (!(arg instanceof camera_camera_pb.TrackStopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.TrackStopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_TrackStopResponse(buffer_arg) {
  return camera_camera_pb.TrackStopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_VideoStreamInfoResponse(arg) {
  if (!(arg instanceof camera_camera_pb.VideoStreamInfoResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.VideoStreamInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_VideoStreamInfoResponse(buffer_arg) {
  return camera_camera_pb.VideoStreamInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomInStartRequest(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomInStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomInStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomInStartRequest(buffer_arg) {
  return camera_camera_pb.ZoomInStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomInStartResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomInStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomInStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomInStartResponse(buffer_arg) {
  return camera_camera_pb.ZoomInStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomOutStartRequest(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomOutStartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomOutStartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomOutStartRequest(buffer_arg) {
  return camera_camera_pb.ZoomOutStartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomOutStartResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomOutStartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomOutStartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomOutStartResponse(buffer_arg) {
  return camera_camera_pb.ZoomOutStartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomRangeRequest(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomRangeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomRangeRequest(buffer_arg) {
  return camera_camera_pb.ZoomRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomRangeResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomRangeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomRangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomRangeResponse(buffer_arg) {
  return camera_camera_pb.ZoomRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomStopRequest(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomStopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomStopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomStopRequest(buffer_arg) {
  return camera_camera_pb.ZoomStopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_camera_ZoomStopResponse(arg) {
  if (!(arg instanceof camera_camera_pb.ZoomStopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.camera.ZoomStopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_camera_ZoomStopResponse(buffer_arg) {
  return camera_camera_pb.ZoomStopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Can be used to manage cameras that implement the MAVLink
// Camera Protocol: https://mavlink.io/en/protocol/camera.html.
//
// Currently only a single camera is supported.
// When multiple cameras are supported the plugin will need to be
// instantiated separately for every camera and the camera selected using
// `select_camera`.
var CameraServiceService = exports.CameraServiceService = {
  //
// Prepare the camera plugin (e.g. download the camera definition, etc).
prepare: {
    path: '/mavsdk.rpc.camera.CameraService/Prepare',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.PrepareRequest,
    responseType: camera_camera_pb.PrepareResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_PrepareRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_PrepareRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_PrepareResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_PrepareResponse,
  },
  //
// Take one photo.
takePhoto: {
    path: '/mavsdk.rpc.camera.CameraService/TakePhoto',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.TakePhotoRequest,
    responseType: camera_camera_pb.TakePhotoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_TakePhotoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_TakePhotoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_TakePhotoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_TakePhotoResponse,
  },
  //
// Start photo timelapse with a given interval.
startPhotoInterval: {
    path: '/mavsdk.rpc.camera.CameraService/StartPhotoInterval',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.StartPhotoIntervalRequest,
    responseType: camera_camera_pb.StartPhotoIntervalResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_StartPhotoIntervalRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_StartPhotoIntervalRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StartPhotoIntervalResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StartPhotoIntervalResponse,
  },
  //
// Stop a running photo timelapse.
stopPhotoInterval: {
    path: '/mavsdk.rpc.camera.CameraService/StopPhotoInterval',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.StopPhotoIntervalRequest,
    responseType: camera_camera_pb.StopPhotoIntervalResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_StopPhotoIntervalRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_StopPhotoIntervalRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StopPhotoIntervalResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StopPhotoIntervalResponse,
  },
  //
// Start a video recording.
startVideo: {
    path: '/mavsdk.rpc.camera.CameraService/StartVideo',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.StartVideoRequest,
    responseType: camera_camera_pb.StartVideoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_StartVideoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_StartVideoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StartVideoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StartVideoResponse,
  },
  //
// Stop a running video recording.
stopVideo: {
    path: '/mavsdk.rpc.camera.CameraService/StopVideo',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.StopVideoRequest,
    responseType: camera_camera_pb.StopVideoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_StopVideoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_StopVideoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StopVideoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StopVideoResponse,
  },
  //
// Start video streaming.
startVideoStreaming: {
    path: '/mavsdk.rpc.camera.CameraService/StartVideoStreaming',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.StartVideoStreamingRequest,
    responseType: camera_camera_pb.StartVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_StartVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_StartVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StartVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StartVideoStreamingResponse,
  },
  //
// Stop current video streaming.
stopVideoStreaming: {
    path: '/mavsdk.rpc.camera.CameraService/StopVideoStreaming',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.StopVideoStreamingRequest,
    responseType: camera_camera_pb.StopVideoStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_StopVideoStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_StopVideoStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StopVideoStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StopVideoStreamingResponse,
  },
  //
// Set camera mode.
setMode: {
    path: '/mavsdk.rpc.camera.CameraService/SetMode',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.SetModeRequest,
    responseType: camera_camera_pb.SetModeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SetModeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SetModeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_SetModeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_SetModeResponse,
  },
  //
// List photos available on the camera.
listPhotos: {
    path: '/mavsdk.rpc.camera.CameraService/ListPhotos',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.ListPhotosRequest,
    responseType: camera_camera_pb.ListPhotosResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_ListPhotosRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_ListPhotosRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ListPhotosResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ListPhotosResponse,
  },
  //
// Subscribe to camera mode updates.
subscribeMode: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribeMode',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribeModeRequest,
    responseType: camera_camera_pb.ModeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribeModeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribeModeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ModeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ModeResponse,
  },
  //
// Subscribe to camera information updates.
subscribeInformation: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribeInformation',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribeInformationRequest,
    responseType: camera_camera_pb.InformationResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribeInformationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribeInformationRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_InformationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_InformationResponse,
  },
  //
// Subscribe to video stream info updates.
subscribeVideoStreamInfo: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribeVideoStreamInfo',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribeVideoStreamInfoRequest,
    responseType: camera_camera_pb.VideoStreamInfoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribeVideoStreamInfoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribeVideoStreamInfoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_VideoStreamInfoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_VideoStreamInfoResponse,
  },
  //
// Subscribe to capture info updates.
subscribeCaptureInfo: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribeCaptureInfo',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribeCaptureInfoRequest,
    responseType: camera_camera_pb.CaptureInfoResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribeCaptureInfoRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribeCaptureInfoRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_CaptureInfoResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_CaptureInfoResponse,
  },
  //
// Subscribe to camera status updates.
subscribeStatus: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribeStatus',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribeStatusRequest,
    responseType: camera_camera_pb.StatusResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribeStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribeStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_StatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_StatusResponse,
  },
  //
// Get the list of current camera settings.
subscribeCurrentSettings: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribeCurrentSettings',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribeCurrentSettingsRequest,
    responseType: camera_camera_pb.CurrentSettingsResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribeCurrentSettingsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribeCurrentSettingsRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_CurrentSettingsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_CurrentSettingsResponse,
  },
  //
// Get the list of settings that can be changed.
subscribePossibleSettingOptions: {
    path: '/mavsdk.rpc.camera.CameraService/SubscribePossibleSettingOptions',
    requestStream: false,
    responseStream: true,
    requestType: camera_camera_pb.SubscribePossibleSettingOptionsRequest,
    responseType: camera_camera_pb.PossibleSettingOptionsResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SubscribePossibleSettingOptionsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SubscribePossibleSettingOptionsRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_PossibleSettingOptionsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_PossibleSettingOptionsResponse,
  },
  //
// Set a setting to some value.
//
// Only setting_id of setting and option_id of option needs to be set.
setSetting: {
    path: '/mavsdk.rpc.camera.CameraService/SetSetting',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.SetSettingRequest,
    responseType: camera_camera_pb.SetSettingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SetSettingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SetSettingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_SetSettingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_SetSettingResponse,
  },
  //
// Get a setting.
//
// Only setting_id of setting needs to be set.
getSetting: {
    path: '/mavsdk.rpc.camera.CameraService/GetSetting',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.GetSettingRequest,
    responseType: camera_camera_pb.GetSettingResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_GetSettingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_GetSettingRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_GetSettingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_GetSettingResponse,
  },
  //
// Format storage (e.g. SD card) in camera.
//
// This will delete all content of the camera storage!
formatStorage: {
    path: '/mavsdk.rpc.camera.CameraService/FormatStorage',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.FormatStorageRequest,
    responseType: camera_camera_pb.FormatStorageResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_FormatStorageRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_FormatStorageRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_FormatStorageResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_FormatStorageResponse,
  },
  //
// Select current camera .
//
// Bind the plugin instance to a specific camera_id
selectCamera: {
    path: '/mavsdk.rpc.camera.CameraService/SelectCamera',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.SelectCameraRequest,
    responseType: camera_camera_pb.SelectCameraResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_SelectCameraRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_SelectCameraRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_SelectCameraResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_SelectCameraResponse,
  },
  //
// Reset all settings in camera.
//
// This will reset all camera settings to default value
resetSettings: {
    path: '/mavsdk.rpc.camera.CameraService/ResetSettings',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.ResetSettingsRequest,
    responseType: camera_camera_pb.ResetSettingsResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_ResetSettingsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_ResetSettingsRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ResetSettingsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ResetSettingsResponse,
  },
  //
// Start zooming in.
zoomInStart: {
    path: '/mavsdk.rpc.camera.CameraService/ZoomInStart',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.ZoomInStartRequest,
    responseType: camera_camera_pb.ZoomInStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_ZoomInStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_ZoomInStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ZoomInStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ZoomInStartResponse,
  },
  //
// Start zooming out.
zoomOutStart: {
    path: '/mavsdk.rpc.camera.CameraService/ZoomOutStart',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.ZoomOutStartRequest,
    responseType: camera_camera_pb.ZoomOutStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_ZoomOutStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_ZoomOutStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ZoomOutStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ZoomOutStartResponse,
  },
  //
// Stop zooming.
zoomStop: {
    path: '/mavsdk.rpc.camera.CameraService/ZoomStop',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.ZoomStopRequest,
    responseType: camera_camera_pb.ZoomStopResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_ZoomStopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_ZoomStopRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ZoomStopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ZoomStopResponse,
  },
  //
// Zoom to value as proportion of full camera range (percentage between 0.0 and 100.0).
zoomRange: {
    path: '/mavsdk.rpc.camera.CameraService/ZoomRange',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.ZoomRangeRequest,
    responseType: camera_camera_pb.ZoomRangeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_ZoomRangeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_ZoomRangeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_ZoomRangeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_ZoomRangeResponse,
  },
  //
// Track point.
trackPoint: {
    path: '/mavsdk.rpc.camera.CameraService/TrackPoint',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.TrackPointRequest,
    responseType: camera_camera_pb.TrackPointResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_TrackPointRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_TrackPointRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_TrackPointResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_TrackPointResponse,
  },
  //
// Track rectangle.
trackRectangle: {
    path: '/mavsdk.rpc.camera.CameraService/TrackRectangle',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.TrackRectangleRequest,
    responseType: camera_camera_pb.TrackRectangleResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_TrackRectangleRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_TrackRectangleRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_TrackRectangleResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_TrackRectangleResponse,
  },
  //
// Stop tracking.
trackStop: {
    path: '/mavsdk.rpc.camera.CameraService/TrackStop',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.TrackStopRequest,
    responseType: camera_camera_pb.TrackStopResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_TrackStopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_TrackStopRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_TrackStopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_TrackStopResponse,
  },
  //
// Start focusing in.
focusInStart: {
    path: '/mavsdk.rpc.camera.CameraService/FocusInStart',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.FocusInStartRequest,
    responseType: camera_camera_pb.FocusInStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_FocusInStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_FocusInStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_FocusInStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_FocusInStartResponse,
  },
  //
// Start focusing out.
focusOutStart: {
    path: '/mavsdk.rpc.camera.CameraService/FocusOutStart',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.FocusOutStartRequest,
    responseType: camera_camera_pb.FocusOutStartResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_FocusOutStartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_FocusOutStartRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_FocusOutStartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_FocusOutStartResponse,
  },
  //
// Stop focus.
focusStop: {
    path: '/mavsdk.rpc.camera.CameraService/FocusStop',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.FocusStopRequest,
    responseType: camera_camera_pb.FocusStopResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_FocusStopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_FocusStopRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_FocusStopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_FocusStopResponse,
  },
  //
// Focus with range value of full range (value between 0.0 and 100.0).
focusRange: {
    path: '/mavsdk.rpc.camera.CameraService/FocusRange',
    requestStream: false,
    responseStream: false,
    requestType: camera_camera_pb.FocusRangeRequest,
    responseType: camera_camera_pb.FocusRangeResponse,
    requestSerialize: serialize_mavsdk_rpc_camera_FocusRangeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_camera_FocusRangeRequest,
    responseSerialize: serialize_mavsdk_rpc_camera_FocusRangeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_camera_FocusRangeResponse,
  },
};

exports.CameraServiceClient = grpc.makeGenericClientConstructor(CameraServiceService);


// fix autocompletion
module.exports = exports;
