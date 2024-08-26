/* eslint-disable */

// source: camera_server/camera_server.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');
goog.object.extend(proto, mavsdk_options_pb);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CameraFeedback', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CameraServerResult', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CameraServerResult.Result', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CaptureInfo', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CaptureStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CaptureStatus.ImageStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CaptureStatus.VideoStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.CaptureStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.FormatStorageResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.Information', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.Mode', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.Position', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.Quaternion', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.ResetSettingsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondSetModeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondSetModeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStartVideoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStartVideoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStopVideoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStopVideoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomStopRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.RespondZoomStopResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetInProgressRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetInProgressResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetInformationRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetInformationResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetModeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StartVideoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StopVideoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StorageInformation', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StorageInformation.StorageStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StorageInformation.StorageType', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.StorageInformationResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.TakePhotoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.TrackPoint', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.TrackRectangle', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.VideoStreaming', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.ZoomInStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.ZoomOutStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.ZoomRangeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera_server.ZoomStopResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetInformationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetInformationRequest.displayName = 'proto.mavsdk.rpc.camera_server.SetInformationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetInformationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetInformationResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetInformationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetInProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetInProgressRequest.displayName = 'proto.mavsdk.rpc.camera_server.SetInProgressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetInProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetInProgressResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetInProgressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.TakePhotoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.TakePhotoResponse.displayName = 'proto.mavsdk.rpc.camera_server.TakePhotoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.StartVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.StartVideoResponse.displayName = 'proto.mavsdk.rpc.camera_server.StartVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStartVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondStartVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStartVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondStartVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.StopVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.StopVideoResponse.displayName = 'proto.mavsdk.rpc.camera_server.StopVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStopVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondStopVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStopVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondStopVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetModeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetModeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetModeResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetModeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondSetModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondSetModeRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondSetModeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondSetModeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondSetModeResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondSetModeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.StorageInformationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.StorageInformationResponse.displayName = 'proto.mavsdk.rpc.camera_server.StorageInformationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.CaptureStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.CaptureStatusResponse.displayName = 'proto.mavsdk.rpc.camera_server.CaptureStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.FormatStorageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.FormatStorageResponse.displayName = 'proto.mavsdk.rpc.camera_server.FormatStorageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.ResetSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.ResetSettingsResponse.displayName = 'proto.mavsdk.rpc.camera_server.ResetSettingsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.ZoomInStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.ZoomInStartResponse.displayName = 'proto.mavsdk.rpc.camera_server.ZoomInStartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.ZoomOutStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.displayName = 'proto.mavsdk.rpc.camera_server.ZoomOutStartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.ZoomStopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.ZoomStopResponse.displayName = 'proto.mavsdk.rpc.camera_server.ZoomStopResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomStopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomStopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomStopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomStopResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.ZoomRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.ZoomRangeResponse.displayName = 'proto.mavsdk.rpc.camera_server.ZoomRangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.Information = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.Information, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.Information.displayName = 'proto.mavsdk.rpc.camera_server.Information';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.VideoStreaming = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.VideoStreaming, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.VideoStreaming.displayName = 'proto.mavsdk.rpc.camera_server.VideoStreaming';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.Position.displayName = 'proto.mavsdk.rpc.camera_server.Position';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.Quaternion.displayName = 'proto.mavsdk.rpc.camera_server.Quaternion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.CaptureInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.CaptureInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.CaptureInfo.displayName = 'proto.mavsdk.rpc.camera_server.CaptureInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.CameraServerResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.CameraServerResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.CameraServerResult.displayName = 'proto.mavsdk.rpc.camera_server.CameraServerResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.StorageInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.StorageInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.StorageInformation.displayName = 'proto.mavsdk.rpc.camera_server.StorageInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.CaptureStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.CaptureStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.CaptureStatus.displayName = 'proto.mavsdk.rpc.camera_server.CaptureStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.displayName = 'proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.displayName = 'proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.displayName = 'proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.displayName = 'proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.displayName = 'proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.displayName = 'proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.displayName = 'proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.displayName = 'proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.displayName = 'proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.displayName = 'proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.TrackPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.TrackPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.TrackPoint.displayName = 'proto.mavsdk.rpc.camera_server.TrackPoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mavsdk.rpc.camera_server.TrackRectangle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera_server.TrackRectangle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera_server.TrackRectangle.displayName = 'proto.mavsdk.rpc.camera_server.TrackRectangle';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetInformationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetInformationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    information: (f = msg.getInformation()) && proto.mavsdk.rpc.camera_server.Information.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationRequest}
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetInformationRequest;
  return proto.mavsdk.rpc.camera_server.SetInformationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetInformationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationRequest}
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.Information;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.Information.deserializeBinaryFromReader);
      msg.setInformation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetInformationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetInformationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInformation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.Information.serializeBinaryToWriter
    );
  }
};


/**
 * optional Information information = 1;
 * @return {?proto.mavsdk.rpc.camera_server.Information}
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.prototype.getInformation = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.Information} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.Information, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.Information|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationRequest} returns this
*/
proto.mavsdk.rpc.camera_server.SetInformationRequest.prototype.setInformation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationRequest} returns this
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.prototype.clearInformation = function() {
  return this.setInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetInformationRequest.prototype.hasInformation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetInformationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetInformationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationResponse}
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetInformationResponse;
  return proto.mavsdk.rpc.camera_server.SetInformationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetInformationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationResponse}
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetInformationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetInformationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationResponse} returns this
*/
proto.mavsdk.rpc.camera_server.SetInformationResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetInformationResponse} returns this
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetInformationResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoStreaming: (f = msg.getVideoStreaming()) && proto.mavsdk.rpc.camera_server.VideoStreaming.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest;
  return proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.VideoStreaming;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.VideoStreaming.deserializeBinaryFromReader);
      msg.setVideoStreaming(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoStreaming();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.VideoStreaming.serializeBinaryToWriter
    );
  }
};


/**
 * optional VideoStreaming video_streaming = 1;
 * @return {?proto.mavsdk.rpc.camera_server.VideoStreaming}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.prototype.getVideoStreaming = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.VideoStreaming} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.VideoStreaming, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.VideoStreaming|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest} returns this
*/
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.prototype.setVideoStreaming = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest} returns this
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.prototype.clearVideoStreaming = function() {
  return this.setVideoStreaming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingRequest.prototype.hasVideoStreaming = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse;
  return proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse} returns this
*/
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetVideoStreamingResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetInProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetInProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inProgress: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressRequest}
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetInProgressRequest;
  return proto.mavsdk.rpc.camera_server.SetInProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetInProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressRequest}
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetInProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetInProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInProgress();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool in_progress = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.prototype.getInProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressRequest} returns this
 */
proto.mavsdk.rpc.camera_server.SetInProgressRequest.prototype.setInProgress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetInProgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetInProgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressResponse}
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetInProgressResponse;
  return proto.mavsdk.rpc.camera_server.SetInProgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetInProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressResponse}
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetInProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetInProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressResponse} returns this
*/
proto.mavsdk.rpc.camera_server.SetInProgressResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetInProgressResponse} returns this
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetInProgressResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTakePhotoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.TakePhotoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.TakePhotoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.TakePhotoResponse}
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.TakePhotoResponse;
  return proto.mavsdk.rpc.camera_server.TakePhotoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.TakePhotoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.TakePhotoResponse}
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.TakePhotoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.TakePhotoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TakePhotoResponse} returns this
 */
proto.mavsdk.rpc.camera_server.TakePhotoResponse.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    takePhotoFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0),
    captureInfo: (f = msg.getCaptureInfo()) && proto.mavsdk.rpc.camera_server.CaptureInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest;
  return proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setTakePhotoFeedback(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera_server.CaptureInfo;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CaptureInfo.deserializeBinaryFromReader);
      msg.setCaptureInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTakePhotoFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCaptureInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.camera_server.CaptureInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraFeedback take_photo_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.getTakePhotoFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.setTakePhotoFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CaptureInfo capture_info = 2;
 * @return {?proto.mavsdk.rpc.camera_server.CaptureInfo}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.getCaptureInfo = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CaptureInfo} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CaptureInfo, 2));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CaptureInfo|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest} returns this
*/
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.setCaptureInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.clearCaptureInfo = function() {
  return this.setCaptureInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoRequest.prototype.hasCaptureInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse;
  return proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondTakePhotoResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.StartVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.StartVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.StartVideoResponse}
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.StartVideoResponse;
  return proto.mavsdk.rpc.camera_server.StartVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.StartVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.StartVideoResponse}
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.StartVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.StartVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 stream_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.prototype.getStreamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StartVideoResponse} returns this
 */
proto.mavsdk.rpc.camera_server.StartVideoResponse.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startVideoFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStartVideoRequest;
  return proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStartVideoFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartVideoFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback start_video_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.prototype.getStartVideoFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoRequest.prototype.setStartVideoFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStartVideoResponse;
  return proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.StopVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.StopVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.StopVideoResponse}
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.StopVideoResponse;
  return proto.mavsdk.rpc.camera_server.StopVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.StopVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.StopVideoResponse}
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.StopVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.StopVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 stream_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.prototype.getStreamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StopVideoResponse} returns this
 */
proto.mavsdk.rpc.camera_server.StopVideoResponse.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopVideoFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStopVideoRequest;
  return proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStopVideoFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopVideoFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback stop_video_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.prototype.getStopVideoFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoRequest.prototype.setStopVideoFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStopVideoResponse;
  return proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStartVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse;
  return proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 stream_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.prototype.getStreamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera_server.StartVideoStreamingResponse.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startVideoStreamingFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest;
  return proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStartVideoStreamingFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartVideoStreamingFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback start_video_streaming_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.prototype.getStartVideoStreamingFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingRequest.prototype.setStartVideoStreamingFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse;
  return proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondStartVideoStreamingResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStopVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse;
  return proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 stream_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.prototype.getStreamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera_server.StopVideoStreamingResponse.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopVideoStreamingFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest;
  return proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStopVideoStreamingFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopVideoStreamingFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback stop_video_streaming_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.prototype.getStopVideoStreamingFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingRequest.prototype.setStopVideoStreamingFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse;
  return proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondStopVideoStreamingResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeSetModeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetModeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetModeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetModeResponse}
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetModeResponse;
  return proto.mavsdk.rpc.camera_server.SetModeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetModeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetModeResponse}
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetModeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetModeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Mode mode = 1;
 * @return {!proto.mavsdk.rpc.camera_server.Mode}
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.prototype.getMode = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.Mode} value
 * @return {!proto.mavsdk.rpc.camera_server.SetModeResponse} returns this
 */
proto.mavsdk.rpc.camera_server.SetModeResponse.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondSetModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondSetModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    setModeFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeRequest}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondSetModeRequest;
  return proto.mavsdk.rpc.camera_server.RespondSetModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondSetModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeRequest}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setSetModeFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondSetModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondSetModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetModeFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback set_mode_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.prototype.getSetModeFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondSetModeRequest.prototype.setSetModeFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondSetModeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondSetModeResponse;
  return proto.mavsdk.rpc.camera_server.RespondSetModeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondSetModeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondSetModeResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondSetModeResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeStorageInformationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.StorageInformationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformationResponse}
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.StorageInformationResponse;
  return proto.mavsdk.rpc.camera_server.StorageInformationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformationResponse}
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStorageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.StorageInformationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 storage_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.prototype.getStorageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformationResponse} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformationResponse.prototype.setStorageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageInformationFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0),
    storageInformation: (f = msg.getStorageInformation()) && proto.mavsdk.rpc.camera_server.StorageInformation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest;
  return proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStorageInformationFeedback(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera_server.StorageInformation;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.StorageInformation.deserializeBinaryFromReader);
      msg.setStorageInformation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageInformationFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStorageInformation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.camera_server.StorageInformation.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraFeedback storage_information_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.getStorageInformationFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.setStorageInformationFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StorageInformation storage_information = 2;
 * @return {?proto.mavsdk.rpc.camera_server.StorageInformation}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.getStorageInformation = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.StorageInformation} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.StorageInformation, 2));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.StorageInformation|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest} returns this
*/
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.setStorageInformation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.clearStorageInformation = function() {
  return this.setStorageInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationRequest.prototype.hasStorageInformation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse;
  return proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondStorageInformationResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeCaptureStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.CaptureStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserved: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatusResponse}
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.CaptureStatusResponse;
  return proto.mavsdk.rpc.camera_server.CaptureStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatusResponse}
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.CaptureStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserved();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 reserved = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.prototype.getReserved = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatusResponse} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatusResponse.prototype.setReserved = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    captureStatusFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0),
    captureStatus: (f = msg.getCaptureStatus()) && proto.mavsdk.rpc.camera_server.CaptureStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest;
  return proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setCaptureStatusFeedback(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera_server.CaptureStatus;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CaptureStatus.deserializeBinaryFromReader);
      msg.setCaptureStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCaptureStatusFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCaptureStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.camera_server.CaptureStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraFeedback capture_status_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.getCaptureStatusFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.setCaptureStatusFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CaptureStatus capture_status = 2;
 * @return {?proto.mavsdk.rpc.camera_server.CaptureStatus}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.getCaptureStatus = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CaptureStatus} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CaptureStatus, 2));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CaptureStatus|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest} returns this
*/
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.setCaptureStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.clearCaptureStatus = function() {
  return this.setCaptureStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusRequest.prototype.hasCaptureStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse;
  return proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondCaptureStatusResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeFormatStorageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.FormatStorageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.FormatStorageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.FormatStorageResponse}
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.FormatStorageResponse;
  return proto.mavsdk.rpc.camera_server.FormatStorageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.FormatStorageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.FormatStorageResponse}
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStorageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.FormatStorageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.FormatStorageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 storage_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.prototype.getStorageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.FormatStorageResponse} returns this
 */
proto.mavsdk.rpc.camera_server.FormatStorageResponse.prototype.setStorageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatStorageFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest;
  return proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setFormatStorageFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatStorageFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback format_storage_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.prototype.getFormatStorageFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageRequest.prototype.setFormatStorageFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse;
  return proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondFormatStorageResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeResetSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.ResetSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.ResetSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserved: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.ResetSettingsResponse}
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.ResetSettingsResponse;
  return proto.mavsdk.rpc.camera_server.ResetSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.ResetSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.ResetSettingsResponse}
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.ResetSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.ResetSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserved();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 reserved = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.prototype.getReserved = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.ResetSettingsResponse} returns this
 */
proto.mavsdk.rpc.camera_server.ResetSettingsResponse.prototype.setReserved = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resetSettingsFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest;
  return proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setResetSettingsFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResetSettingsFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback reset_settings_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.prototype.getResetSettingsFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsRequest.prototype.setResetSettingsFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse;
  return proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondResetSettingsResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomInStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.ZoomInStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.ZoomInStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserved: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomInStartResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.ZoomInStartResponse;
  return proto.mavsdk.rpc.camera_server.ZoomInStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomInStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomInStartResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.ZoomInStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomInStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserved();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 reserved = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.prototype.getReserved = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.ZoomInStartResponse} returns this
 */
proto.mavsdk.rpc.camera_server.ZoomInStartResponse.prototype.setReserved = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoomInStartFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest;
  return proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setZoomInStartFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoomInStartFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback zoom_in_start_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.prototype.getZoomInStartFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartRequest.prototype.setZoomInStartFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse;
  return proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondZoomInStartResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomOutStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.ZoomOutStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserved: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomOutStartResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.ZoomOutStartResponse;
  return proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomOutStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomOutStartResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomOutStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserved();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 reserved = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.prototype.getReserved = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.ZoomOutStartResponse} returns this
 */
proto.mavsdk.rpc.camera_server.ZoomOutStartResponse.prototype.setReserved = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoomOutStartFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest;
  return proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setZoomOutStartFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoomOutStartFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback zoom_out_start_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.prototype.getZoomOutStartFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartRequest.prototype.setZoomOutStartFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse;
  return proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondZoomOutStartResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomStopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.ZoomStopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.ZoomStopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reserved: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomStopResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.ZoomStopResponse;
  return proto.mavsdk.rpc.camera_server.ZoomStopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomStopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomStopResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.ZoomStopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomStopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReserved();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 reserved = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.prototype.getReserved = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.ZoomStopResponse} returns this
 */
proto.mavsdk.rpc.camera_server.ZoomStopResponse.prototype.setReserved = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomStopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoomStopFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomStopRequest;
  return proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomStopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setZoomStopFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomStopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoomStopFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback zoom_stop_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.prototype.getZoomStopFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopRequest.prototype.setZoomStopFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomStopResponse;
  return proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomStopResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondZoomStopResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeZoomRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.ZoomRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.ZoomRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    factor: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomRangeResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.ZoomRangeResponse;
  return proto.mavsdk.rpc.camera_server.ZoomRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.ZoomRangeResponse}
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFactor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.ZoomRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.ZoomRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactor();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float factor = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.prototype.getFactor = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.ZoomRangeResponse} returns this
 */
proto.mavsdk.rpc.camera_server.ZoomRangeResponse.prototype.setFactor = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoomRangeFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest;
  return proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setZoomRangeFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoomRangeFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback zoom_range_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.prototype.getZoomRangeFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeRequest.prototype.setZoomRangeFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse;
  return proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondZoomRangeResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.Information.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.Information} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.Information.toObject = function(includeInstance, msg) {
  var f, obj = {
    vendorName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firmwareVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    focalLengthMm: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    horizontalSensorSizeMm: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    verticalSensorSizeMm: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    horizontalResolutionPx: jspb.Message.getFieldWithDefault(msg, 7, 0),
    verticalResolutionPx: jspb.Message.getFieldWithDefault(msg, 8, 0),
    lensId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    definitionFileVersion: jspb.Message.getFieldWithDefault(msg, 10, 0),
    definitionFileUri: jspb.Message.getFieldWithDefault(msg, 11, ""),
    imageInVideoModeSupported: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    videoInImageModeSupported: jspb.Message.getBooleanFieldWithDefault(msg, 13, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.Information}
 */
proto.mavsdk.rpc.camera_server.Information.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.Information;
  return proto.mavsdk.rpc.camera_server.Information.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.Information} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.Information}
 */
proto.mavsdk.rpc.camera_server.Information.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVendorName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmwareVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFocalLengthMm(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHorizontalSensorSizeMm(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVerticalSensorSizeMm(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHorizontalResolutionPx(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVerticalResolutionPx(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLensId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefinitionFileVersion(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinitionFileUri(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImageInVideoModeSupported(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVideoInImageModeSupported(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.Information.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.Information} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.Information.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVendorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirmwareVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFocalLengthMm();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getHorizontalSensorSizeMm();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getVerticalSensorSizeMm();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getHorizontalResolutionPx();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getVerticalResolutionPx();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getLensId();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getDefinitionFileVersion();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getDefinitionFileUri();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getImageInVideoModeSupported();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getVideoInImageModeSupported();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional string vendor_name = 1;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getVendorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setVendorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_name = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string firmware_version = 3;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getFirmwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setFirmwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float focal_length_mm = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getFocalLengthMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setFocalLengthMm = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float horizontal_sensor_size_mm = 5;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getHorizontalSensorSizeMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setHorizontalSensorSizeMm = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float vertical_sensor_size_mm = 6;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getVerticalSensorSizeMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setVerticalSensorSizeMm = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint32 horizontal_resolution_px = 7;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getHorizontalResolutionPx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setHorizontalResolutionPx = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 vertical_resolution_px = 8;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getVerticalResolutionPx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setVerticalResolutionPx = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 lens_id = 9;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getLensId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setLensId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 definition_file_version = 10;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getDefinitionFileVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setDefinitionFileVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string definition_file_uri = 11;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getDefinitionFileUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setDefinitionFileUri = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool image_in_video_mode_supported = 12;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getImageInVideoModeSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setImageInVideoModeSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool video_in_image_mode_supported = 13;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.Information.prototype.getVideoInImageModeSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera_server.Information} returns this
 */
proto.mavsdk.rpc.camera_server.Information.prototype.setVideoInImageModeSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.VideoStreaming.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.VideoStreaming} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.toObject = function(includeInstance, msg) {
  var f, obj = {
    hasRtspServer: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    rtspUri: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.VideoStreaming}
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.VideoStreaming;
  return proto.mavsdk.rpc.camera_server.VideoStreaming.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.VideoStreaming} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.VideoStreaming}
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasRtspServer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtspUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.VideoStreaming.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.VideoStreaming} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHasRtspServer();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRtspUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool has_rtsp_server = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.prototype.getHasRtspServer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera_server.VideoStreaming} returns this
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.prototype.setHasRtspServer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string rtsp_uri = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.prototype.getRtspUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.VideoStreaming} returns this
 */
proto.mavsdk.rpc.camera_server.VideoStreaming.prototype.setRtspUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitudeDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    absoluteAltitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    relativeAltitudeM: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.Position}
 */
proto.mavsdk.rpc.camera_server.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.Position;
  return proto.mavsdk.rpc.camera_server.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.Position}
 */
proto.mavsdk.rpc.camera_server.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitudeDeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitudeDeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAbsoluteAltitudeM(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRelativeAltitudeM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitudeDeg();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAbsoluteAltitudeM();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getRelativeAltitudeM();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional double latitude_deg = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Position.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Position} returns this
 */
proto.mavsdk.rpc.camera_server.Position.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Position.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Position} returns this
 */
proto.mavsdk.rpc.camera_server.Position.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float absolute_altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Position.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Position} returns this
 */
proto.mavsdk.rpc.camera_server.Position.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float relative_altitude_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Position.prototype.getRelativeAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Position} returns this
 */
proto.mavsdk.rpc.camera_server.Position.prototype.setRelativeAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.Quaternion.toObject = function(includeInstance, msg) {
  var f, obj = {
    w: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.Quaternion}
 */
proto.mavsdk.rpc.camera_server.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.Quaternion;
  return proto.mavsdk.rpc.camera_server.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.Quaternion}
 */
proto.mavsdk.rpc.camera_server.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setW(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.Quaternion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getW();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float w = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Quaternion} returns this
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float x = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Quaternion} returns this
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float y = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Quaternion} returns this
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float z = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.Quaternion} returns this
 */
proto.mavsdk.rpc.camera_server.Quaternion.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.CaptureInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.CaptureInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.mavsdk.rpc.camera_server.Position.toObject(includeInstance, f),
    attitudeQuaternion: (f = msg.getAttitudeQuaternion()) && proto.mavsdk.rpc.camera_server.Quaternion.toObject(includeInstance, f),
    timeUtcUs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    index: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fileUrl: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.CaptureInfo;
  return proto.mavsdk.rpc.camera_server.CaptureInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.CaptureInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.Position;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera_server.Quaternion;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.Quaternion.deserializeBinaryFromReader);
      msg.setAttitudeQuaternion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeUtcUs(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuccess(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.CaptureInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.CaptureInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.Position.serializeBinaryToWriter
    );
  }
  f = message.getAttitudeQuaternion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.camera_server.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getTimeUtcUs();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFileUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.mavsdk.rpc.camera_server.Position}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.getPosition = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.Position} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.Position, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.Position|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
*/
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion attitude_quaternion = 2;
 * @return {?proto.mavsdk.rpc.camera_server.Quaternion}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.getAttitudeQuaternion = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.Quaternion, 2));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.Quaternion|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
*/
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.setAttitudeQuaternion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.clearAttitudeQuaternion = function() {
  return this.setAttitudeQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.hasAttitudeQuaternion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 time_utc_us = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.getTimeUtcUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.setTimeUtcUs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_success = 4;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.getIsSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.setIsSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 index = 5;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string file_url = 6;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.getFileUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureInfo.prototype.setFileUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.CameraServerResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resultStr: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.CameraServerResult;
  return proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.CameraServerResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraServerResult.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultStr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.CameraServerResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResultStr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.Result = {
  RESULT_UNKNOWN: 0,
  RESULT_SUCCESS: 1,
  RESULT_IN_PROGRESS: 2,
  RESULT_BUSY: 3,
  RESULT_DENIED: 4,
  RESULT_ERROR: 5,
  RESULT_TIMEOUT: 6,
  RESULT_WRONG_ARGUMENT: 7,
  RESULT_NO_SYSTEM: 8
};

/**
 * optional Result result = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraServerResult.Result}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.prototype.getResult = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraServerResult.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraServerResult.Result} value
 * @return {!proto.mavsdk.rpc.camera_server.CameraServerResult} returns this
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string result_str = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.prototype.getResultStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera_server.CameraServerResult} returns this
 */
proto.mavsdk.rpc.camera_server.CameraServerResult.prototype.setResultStr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.StorageInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StorageInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    usedStorageMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    availableStorageMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    totalStorageMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    storageStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    storageId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    storageType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    readSpeedMibS: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    writeSpeedMibS: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.StorageInformation;
  return proto.mavsdk.rpc.camera_server.StorageInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUsedStorageMib(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAvailableStorageMib(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotalStorageMib(value);
      break;
    case 4:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageStatus} */ (reader.readEnum());
      msg.setStorageStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStorageId(value);
      break;
    case 6:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageType} */ (reader.readEnum());
      msg.setStorageType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setReadSpeedMibS(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWriteSpeedMibS(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.StorageInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.StorageInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsedStorageMib();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getAvailableStorageMib();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTotalStorageMib();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getStorageStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStorageId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getStorageType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getReadSpeedMibS();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getWriteSpeedMibS();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.StorageStatus = {
  STORAGE_STATUS_NOT_AVAILABLE: 0,
  STORAGE_STATUS_UNFORMATTED: 1,
  STORAGE_STATUS_FORMATTED: 2,
  STORAGE_STATUS_NOT_SUPPORTED: 3
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.StorageType = {
  STORAGE_TYPE_UNKNOWN: 0,
  STORAGE_TYPE_USB_STICK: 1,
  STORAGE_TYPE_SD: 2,
  STORAGE_TYPE_MICROSD: 3,
  STORAGE_TYPE_HD: 7,
  STORAGE_TYPE_OTHER: 254
};

/**
 * optional float used_storage_mib = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getUsedStorageMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setUsedStorageMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float available_storage_mib = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getAvailableStorageMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setAvailableStorageMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float total_storage_mib = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getTotalStorageMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setTotalStorageMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional StorageStatus storage_status = 4;
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageStatus}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getStorageStatus = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageStatus} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setStorageStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint32 storage_id = 5;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getStorageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setStorageId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional StorageType storage_type = 6;
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageType}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getStorageType = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.StorageInformation.StorageType} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setStorageType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional float read_speed_mib_s = 7;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getReadSpeedMibS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setReadSpeedMibS = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float write_speed_mib_s = 8;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.getWriteSpeedMibS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.StorageInformation} returns this
 */
proto.mavsdk.rpc.camera_server.StorageInformation.prototype.setWriteSpeedMibS = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.CaptureStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageIntervalS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    recordingTimeS: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    availableCapacityMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    imageStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    videoStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    imageCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.CaptureStatus;
  return proto.mavsdk.rpc.camera_server.CaptureStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setImageIntervalS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRecordingTimeS(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAvailableCapacityMib(value);
      break;
    case 4:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CaptureStatus.ImageStatus} */ (reader.readEnum());
      msg.setImageStatus(value);
      break;
    case 5:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CaptureStatus.VideoStatus} */ (reader.readEnum());
      msg.setVideoStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImageCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.CaptureStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageIntervalS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRecordingTimeS();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAvailableCapacityMib();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getImageStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getVideoStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getImageCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.ImageStatus = {
  IMAGE_STATUS_IDLE: 0,
  IMAGE_STATUS_CAPTURE_IN_PROGRESS: 1,
  IMAGE_STATUS_INTERVAL_IDLE: 2,
  IMAGE_STATUS_INTERVAL_IN_PROGRESS: 3
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.VideoStatus = {
  VIDEO_STATUS_IDLE: 0,
  VIDEO_STATUS_CAPTURE_IN_PROGRESS: 1
};

/**
 * optional float image_interval_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.getImageIntervalS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.setImageIntervalS = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float recording_time_s = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.getRecordingTimeS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.setRecordingTimeS = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float available_capacity_mib = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.getAvailableCapacityMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.setAvailableCapacityMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional ImageStatus image_status = 4;
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus.ImageStatus}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.getImageStatus = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CaptureStatus.ImageStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatus.ImageStatus} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.setImageStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional VideoStatus video_status = 5;
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus.VideoStatus}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.getVideoStatus = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CaptureStatus.VideoStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CaptureStatus.VideoStatus} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.setVideoStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int32 image_count = 6;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.getImageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.CaptureStatus} returns this
 */
proto.mavsdk.rpc.camera_server.CaptureStatus.prototype.setImageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackedPoint: (f = msg.getTrackedPoint()) && proto.mavsdk.rpc.camera_server.TrackPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest;
  return proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.TrackPoint;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.TrackPoint.deserializeBinaryFromReader);
      msg.setTrackedPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackedPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.TrackPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional TrackPoint tracked_point = 1;
 * @return {?proto.mavsdk.rpc.camera_server.TrackPoint}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.prototype.getTrackedPoint = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.TrackPoint} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.TrackPoint, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.TrackPoint|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest} returns this
*/
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.prototype.setTrackedPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest} returns this
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.prototype.clearTrackedPoint = function() {
  return this.setTrackedPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusRequest.prototype.hasTrackedPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse;
  return proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingPointStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackedRectangle: (f = msg.getTrackedRectangle()) && proto.mavsdk.rpc.camera_server.TrackRectangle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest;
  return proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.TrackRectangle;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.TrackRectangle.deserializeBinaryFromReader);
      msg.setTrackedRectangle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackedRectangle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.TrackRectangle.serializeBinaryToWriter
    );
  }
};


/**
 * optional TrackRectangle tracked_rectangle = 1;
 * @return {?proto.mavsdk.rpc.camera_server.TrackRectangle}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.prototype.getTrackedRectangle = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.TrackRectangle} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.TrackRectangle, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.TrackRectangle|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest} returns this
*/
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.prototype.setTrackedRectangle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest} returns this
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.prototype.clearTrackedRectangle = function() {
  return this.setTrackedRectangle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusRequest.prototype.hasTrackedRectangle = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse;
  return proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingRectangleStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest;
  return proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse;
  return proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SetTrackingOffStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingPointCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackPoint: (f = msg.getTrackPoint()) && proto.mavsdk.rpc.camera_server.TrackPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse}
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse;
  return proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse}
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.TrackPoint;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.TrackPoint.deserializeBinaryFromReader);
      msg.setTrackPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.TrackPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional TrackPoint track_point = 1;
 * @return {?proto.mavsdk.rpc.camera_server.TrackPoint}
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.prototype.getTrackPoint = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.TrackPoint} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.TrackPoint, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.TrackPoint|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse} returns this
*/
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.prototype.setTrackPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse} returns this
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.prototype.clearTrackPoint = function() {
  return this.setTrackPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.TrackingPointCommandResponse.prototype.hasTrackPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingRectangleCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackRectangle: (f = msg.getTrackRectangle()) && proto.mavsdk.rpc.camera_server.TrackRectangle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse}
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse;
  return proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse}
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.TrackRectangle;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.TrackRectangle.deserializeBinaryFromReader);
      msg.setTrackRectangle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackRectangle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.TrackRectangle.serializeBinaryToWriter
    );
  }
};


/**
 * optional TrackRectangle track_rectangle = 1;
 * @return {?proto.mavsdk.rpc.camera_server.TrackRectangle}
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.prototype.getTrackRectangle = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.TrackRectangle} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.TrackRectangle, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.TrackRectangle|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse} returns this
*/
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.prototype.setTrackRectangle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse} returns this
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.prototype.clearTrackRectangle = function() {
  return this.setTrackRectangle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.TrackingRectangleCommandResponse.prototype.hasTrackRectangle = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest;
  return proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.SubscribeTrackingOffCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dummy: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse}
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse;
  return proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse}
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDummy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDummy();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 dummy = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.prototype.getDummy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse} returns this
 */
proto.mavsdk.rpc.camera_server.TrackingOffCommandResponse.prototype.setDummy = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopVideoFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest;
  return proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStopVideoFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopVideoFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback stop_video_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.prototype.getStopVideoFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandRequest.prototype.setStopVideoFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse;
  return proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingPointCommandResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopVideoFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest;
  return proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStopVideoFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopVideoFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback stop_video_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.prototype.getStopVideoFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandRequest.prototype.setStopVideoFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse;
  return proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingRectangleCommandResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopVideoFeedback: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest;
  return proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (reader.readEnum());
      msg.setStopVideoFeedback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopVideoFeedback();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CameraFeedback stop_video_feedback = 1;
 * @return {!proto.mavsdk.rpc.camera_server.CameraFeedback}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.prototype.getStopVideoFeedback = function() {
  return /** @type {!proto.mavsdk.rpc.camera_server.CameraFeedback} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera_server.CameraFeedback} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandRequest.prototype.setStopVideoFeedback = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraServerResult: (f = msg.getCameraServerResult()) && proto.mavsdk.rpc.camera_server.CameraServerResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse;
  return proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera_server.CameraServerResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera_server.CameraServerResult.deserializeBinaryFromReader);
      msg.setCameraServerResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraServerResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera_server.CameraServerResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraServerResult camera_server_result = 1;
 * @return {?proto.mavsdk.rpc.camera_server.CameraServerResult}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.prototype.getCameraServerResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera_server.CameraServerResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera_server.CameraServerResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera_server.CameraServerResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse} returns this
*/
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.prototype.setCameraServerResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse} returns this
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.prototype.clearCameraServerResult = function() {
  return this.setCameraServerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera_server.RespondTrackingOffCommandResponse.prototype.hasCameraServerResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.TrackPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.TrackPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointX: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pointY: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.TrackPoint}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.TrackPoint;
  return proto.mavsdk.rpc.camera_server.TrackPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.TrackPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.TrackPoint}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPointX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPointY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRadius(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.TrackPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.TrackPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPointY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float point_x = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.getPointX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackPoint} returns this
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.setPointX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float point_y = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.getPointY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackPoint} returns this
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.setPointY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float radius = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackPoint} returns this
 */
proto.mavsdk.rpc.camera_server.TrackPoint.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera_server.TrackRectangle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera_server.TrackRectangle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.toObject = function(includeInstance, msg) {
  var f, obj = {
    topLeftCornerX: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    topLeftCornerY: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    bottomRightCornerX: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bottomRightCornerY: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mavsdk.rpc.camera_server.TrackRectangle}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera_server.TrackRectangle;
  return proto.mavsdk.rpc.camera_server.TrackRectangle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera_server.TrackRectangle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera_server.TrackRectangle}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTopLeftCornerX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTopLeftCornerY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottomRightCornerX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottomRightCornerY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera_server.TrackRectangle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera_server.TrackRectangle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopLeftCornerX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTopLeftCornerY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBottomRightCornerX();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getBottomRightCornerY();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float top_left_corner_x = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.getTopLeftCornerX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackRectangle} returns this
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.setTopLeftCornerX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float top_left_corner_y = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.getTopLeftCornerY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackRectangle} returns this
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.setTopLeftCornerY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float bottom_right_corner_x = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.getBottomRightCornerX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackRectangle} returns this
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.setBottomRightCornerX = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float bottom_right_corner_y = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.getBottomRightCornerY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera_server.TrackRectangle} returns this
 */
proto.mavsdk.rpc.camera_server.TrackRectangle.prototype.setBottomRightCornerY = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.CameraFeedback = {
  CAMERA_FEEDBACK_UNKNOWN: 0,
  CAMERA_FEEDBACK_OK: 1,
  CAMERA_FEEDBACK_BUSY: 2,
  CAMERA_FEEDBACK_FAILED: 3
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera_server.Mode = {
  MODE_UNKNOWN: 0,
  MODE_PHOTO: 1,
  MODE_VIDEO: 2
};

goog.object.extend(exports, proto.mavsdk.rpc.camera_server);


// fix autocompletion
module.exports = exports;
