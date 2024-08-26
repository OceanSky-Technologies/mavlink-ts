/* eslint-disable */

// source: camera/camera.proto
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
goog.exportSymbol('proto.mavsdk.rpc.camera.CameraResult', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.CameraResult.Result', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.CaptureInfo', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.CaptureInfoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.CurrentSettingsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.EulerAngle', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusInStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusInStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusOutStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusOutStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusRangeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusRangeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusStopRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FocusStopResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FormatStorageRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.FormatStorageResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.GetSettingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.GetSettingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Information', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.InformationResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ListPhotosRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ListPhotosResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Mode', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ModeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Option', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.PhotosRange', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Position', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.PrepareRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.PrepareResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Quaternion', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ResetSettingsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ResetSettingsResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SelectCameraRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SelectCameraResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SetModeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SetModeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SetSettingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SetSettingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Setting', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SettingOptions', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StartPhotoIntervalRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StartPhotoIntervalResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StartVideoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StartVideoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StartVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StartVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Status', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Status.StorageStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.Status.StorageType', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StatusResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StopPhotoIntervalRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StopPhotoIntervalResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StopVideoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StopVideoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StopVideoStreamingRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.StopVideoStreamingResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribeInformationRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribeModeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribeStatusRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TakePhotoRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TakePhotoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TrackPointRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TrackPointResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TrackRectangleRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TrackRectangleResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TrackStopRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.TrackStopResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.VideoStreamInfo', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamSpectrum', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamStatus', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.VideoStreamInfoResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.VideoStreamSettings', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomInStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomInStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomOutStartRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomOutStartResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomRangeRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomRangeResponse', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomStopRequest', null, global);
goog.exportSymbol('proto.mavsdk.rpc.camera.ZoomStopResponse', null, global);
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
proto.mavsdk.rpc.camera.PrepareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.PrepareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.PrepareRequest.displayName = 'proto.mavsdk.rpc.camera.PrepareRequest';
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
proto.mavsdk.rpc.camera.PrepareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.PrepareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.PrepareResponse.displayName = 'proto.mavsdk.rpc.camera.PrepareResponse';
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
proto.mavsdk.rpc.camera.TakePhotoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TakePhotoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TakePhotoRequest.displayName = 'proto.mavsdk.rpc.camera.TakePhotoRequest';
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
proto.mavsdk.rpc.camera.TakePhotoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TakePhotoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TakePhotoResponse.displayName = 'proto.mavsdk.rpc.camera.TakePhotoResponse';
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
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StartPhotoIntervalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.displayName = 'proto.mavsdk.rpc.camera.StartPhotoIntervalRequest';
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
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StartPhotoIntervalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.displayName = 'proto.mavsdk.rpc.camera.StartPhotoIntervalResponse';
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
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StopPhotoIntervalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.displayName = 'proto.mavsdk.rpc.camera.StopPhotoIntervalRequest';
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
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StopPhotoIntervalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.displayName = 'proto.mavsdk.rpc.camera.StopPhotoIntervalResponse';
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
proto.mavsdk.rpc.camera.StartVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StartVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StartVideoRequest.displayName = 'proto.mavsdk.rpc.camera.StartVideoRequest';
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
proto.mavsdk.rpc.camera.StartVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StartVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StartVideoResponse.displayName = 'proto.mavsdk.rpc.camera.StartVideoResponse';
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
proto.mavsdk.rpc.camera.StopVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StopVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StopVideoRequest.displayName = 'proto.mavsdk.rpc.camera.StopVideoRequest';
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
proto.mavsdk.rpc.camera.StopVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StopVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StopVideoResponse.displayName = 'proto.mavsdk.rpc.camera.StopVideoResponse';
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
proto.mavsdk.rpc.camera.StartVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StartVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StartVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera.StartVideoStreamingRequest';
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
proto.mavsdk.rpc.camera.StartVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StartVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StartVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera.StartVideoStreamingResponse';
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
proto.mavsdk.rpc.camera.StopVideoStreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StopVideoStreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StopVideoStreamingRequest.displayName = 'proto.mavsdk.rpc.camera.StopVideoStreamingRequest';
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
proto.mavsdk.rpc.camera.StopVideoStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StopVideoStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StopVideoStreamingResponse.displayName = 'proto.mavsdk.rpc.camera.StopVideoStreamingResponse';
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
proto.mavsdk.rpc.camera.SetModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SetModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SetModeRequest.displayName = 'proto.mavsdk.rpc.camera.SetModeRequest';
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
proto.mavsdk.rpc.camera.SetModeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SetModeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SetModeResponse.displayName = 'proto.mavsdk.rpc.camera.SetModeResponse';
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
proto.mavsdk.rpc.camera.ListPhotosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ListPhotosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ListPhotosRequest.displayName = 'proto.mavsdk.rpc.camera.ListPhotosRequest';
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
proto.mavsdk.rpc.camera.ListPhotosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.camera.ListPhotosResponse.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ListPhotosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ListPhotosResponse.displayName = 'proto.mavsdk.rpc.camera.ListPhotosResponse';
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
proto.mavsdk.rpc.camera.SubscribeInformationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribeInformationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribeInformationRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribeInformationRequest';
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
proto.mavsdk.rpc.camera.InformationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.InformationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.InformationResponse.displayName = 'proto.mavsdk.rpc.camera.InformationResponse';
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
proto.mavsdk.rpc.camera.SubscribeModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribeModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribeModeRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribeModeRequest';
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
proto.mavsdk.rpc.camera.ModeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ModeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ModeResponse.displayName = 'proto.mavsdk.rpc.camera.ModeResponse';
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
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest';
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
proto.mavsdk.rpc.camera.VideoStreamInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.VideoStreamInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.VideoStreamInfoResponse.displayName = 'proto.mavsdk.rpc.camera.VideoStreamInfoResponse';
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
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest';
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
proto.mavsdk.rpc.camera.CaptureInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.CaptureInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.CaptureInfoResponse.displayName = 'proto.mavsdk.rpc.camera.CaptureInfoResponse';
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
proto.mavsdk.rpc.camera.SubscribeStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribeStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribeStatusRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribeStatusRequest';
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
proto.mavsdk.rpc.camera.StatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.StatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.StatusResponse.displayName = 'proto.mavsdk.rpc.camera.StatusResponse';
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
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest';
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
proto.mavsdk.rpc.camera.CurrentSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.camera.CurrentSettingsResponse.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.camera.CurrentSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.CurrentSettingsResponse.displayName = 'proto.mavsdk.rpc.camera.CurrentSettingsResponse';
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
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.displayName = 'proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest';
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
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.displayName = 'proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse';
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
proto.mavsdk.rpc.camera.SetSettingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SetSettingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SetSettingRequest.displayName = 'proto.mavsdk.rpc.camera.SetSettingRequest';
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
proto.mavsdk.rpc.camera.SetSettingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SetSettingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SetSettingResponse.displayName = 'proto.mavsdk.rpc.camera.SetSettingResponse';
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
proto.mavsdk.rpc.camera.GetSettingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.GetSettingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.GetSettingRequest.displayName = 'proto.mavsdk.rpc.camera.GetSettingRequest';
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
proto.mavsdk.rpc.camera.GetSettingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.GetSettingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.GetSettingResponse.displayName = 'proto.mavsdk.rpc.camera.GetSettingResponse';
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
proto.mavsdk.rpc.camera.FormatStorageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FormatStorageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FormatStorageRequest.displayName = 'proto.mavsdk.rpc.camera.FormatStorageRequest';
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
proto.mavsdk.rpc.camera.FormatStorageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FormatStorageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FormatStorageResponse.displayName = 'proto.mavsdk.rpc.camera.FormatStorageResponse';
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
proto.mavsdk.rpc.camera.SelectCameraResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SelectCameraResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SelectCameraResponse.displayName = 'proto.mavsdk.rpc.camera.SelectCameraResponse';
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
proto.mavsdk.rpc.camera.SelectCameraRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SelectCameraRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SelectCameraRequest.displayName = 'proto.mavsdk.rpc.camera.SelectCameraRequest';
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
proto.mavsdk.rpc.camera.ResetSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ResetSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ResetSettingsRequest.displayName = 'proto.mavsdk.rpc.camera.ResetSettingsRequest';
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
proto.mavsdk.rpc.camera.ResetSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ResetSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ResetSettingsResponse.displayName = 'proto.mavsdk.rpc.camera.ResetSettingsResponse';
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
proto.mavsdk.rpc.camera.ZoomInStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomInStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomInStartRequest.displayName = 'proto.mavsdk.rpc.camera.ZoomInStartRequest';
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
proto.mavsdk.rpc.camera.ZoomInStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomInStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomInStartResponse.displayName = 'proto.mavsdk.rpc.camera.ZoomInStartResponse';
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
proto.mavsdk.rpc.camera.ZoomOutStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomOutStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomOutStartRequest.displayName = 'proto.mavsdk.rpc.camera.ZoomOutStartRequest';
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
proto.mavsdk.rpc.camera.ZoomOutStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomOutStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomOutStartResponse.displayName = 'proto.mavsdk.rpc.camera.ZoomOutStartResponse';
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
proto.mavsdk.rpc.camera.ZoomStopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomStopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomStopRequest.displayName = 'proto.mavsdk.rpc.camera.ZoomStopRequest';
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
proto.mavsdk.rpc.camera.ZoomStopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomStopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomStopResponse.displayName = 'proto.mavsdk.rpc.camera.ZoomStopResponse';
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
proto.mavsdk.rpc.camera.ZoomRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomRangeRequest.displayName = 'proto.mavsdk.rpc.camera.ZoomRangeRequest';
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
proto.mavsdk.rpc.camera.ZoomRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.ZoomRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.ZoomRangeResponse.displayName = 'proto.mavsdk.rpc.camera.ZoomRangeResponse';
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
proto.mavsdk.rpc.camera.TrackPointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TrackPointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TrackPointRequest.displayName = 'proto.mavsdk.rpc.camera.TrackPointRequest';
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
proto.mavsdk.rpc.camera.TrackPointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TrackPointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TrackPointResponse.displayName = 'proto.mavsdk.rpc.camera.TrackPointResponse';
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
proto.mavsdk.rpc.camera.TrackRectangleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TrackRectangleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TrackRectangleRequest.displayName = 'proto.mavsdk.rpc.camera.TrackRectangleRequest';
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
proto.mavsdk.rpc.camera.TrackRectangleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TrackRectangleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TrackRectangleResponse.displayName = 'proto.mavsdk.rpc.camera.TrackRectangleResponse';
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
proto.mavsdk.rpc.camera.TrackStopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TrackStopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TrackStopRequest.displayName = 'proto.mavsdk.rpc.camera.TrackStopRequest';
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
proto.mavsdk.rpc.camera.TrackStopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.TrackStopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.TrackStopResponse.displayName = 'proto.mavsdk.rpc.camera.TrackStopResponse';
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
proto.mavsdk.rpc.camera.FocusInStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusInStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusInStartRequest.displayName = 'proto.mavsdk.rpc.camera.FocusInStartRequest';
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
proto.mavsdk.rpc.camera.FocusInStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusInStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusInStartResponse.displayName = 'proto.mavsdk.rpc.camera.FocusInStartResponse';
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
proto.mavsdk.rpc.camera.FocusOutStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusOutStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusOutStartRequest.displayName = 'proto.mavsdk.rpc.camera.FocusOutStartRequest';
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
proto.mavsdk.rpc.camera.FocusOutStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusOutStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusOutStartResponse.displayName = 'proto.mavsdk.rpc.camera.FocusOutStartResponse';
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
proto.mavsdk.rpc.camera.FocusStopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusStopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusStopRequest.displayName = 'proto.mavsdk.rpc.camera.FocusStopRequest';
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
proto.mavsdk.rpc.camera.FocusStopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusStopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusStopResponse.displayName = 'proto.mavsdk.rpc.camera.FocusStopResponse';
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
proto.mavsdk.rpc.camera.FocusRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusRangeRequest.displayName = 'proto.mavsdk.rpc.camera.FocusRangeRequest';
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
proto.mavsdk.rpc.camera.FocusRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.FocusRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.FocusRangeResponse.displayName = 'proto.mavsdk.rpc.camera.FocusRangeResponse';
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
proto.mavsdk.rpc.camera.CameraResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.CameraResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.CameraResult.displayName = 'proto.mavsdk.rpc.camera.CameraResult';
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
proto.mavsdk.rpc.camera.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.Position.displayName = 'proto.mavsdk.rpc.camera.Position';
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
proto.mavsdk.rpc.camera.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.Quaternion.displayName = 'proto.mavsdk.rpc.camera.Quaternion';
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
proto.mavsdk.rpc.camera.EulerAngle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.EulerAngle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.EulerAngle.displayName = 'proto.mavsdk.rpc.camera.EulerAngle';
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
proto.mavsdk.rpc.camera.CaptureInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.CaptureInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.CaptureInfo.displayName = 'proto.mavsdk.rpc.camera.CaptureInfo';
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
proto.mavsdk.rpc.camera.VideoStreamSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.VideoStreamSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.VideoStreamSettings.displayName = 'proto.mavsdk.rpc.camera.VideoStreamSettings';
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
proto.mavsdk.rpc.camera.VideoStreamInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.VideoStreamInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.VideoStreamInfo.displayName = 'proto.mavsdk.rpc.camera.VideoStreamInfo';
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
proto.mavsdk.rpc.camera.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.Status.displayName = 'proto.mavsdk.rpc.camera.Status';
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
proto.mavsdk.rpc.camera.Option = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.Option, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.Option.displayName = 'proto.mavsdk.rpc.camera.Option';
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
proto.mavsdk.rpc.camera.Setting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.Setting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.Setting.displayName = 'proto.mavsdk.rpc.camera.Setting';
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
proto.mavsdk.rpc.camera.SettingOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mavsdk.rpc.camera.SettingOptions.repeatedFields_, null);
};
goog.inherits(proto.mavsdk.rpc.camera.SettingOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.SettingOptions.displayName = 'proto.mavsdk.rpc.camera.SettingOptions';
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
proto.mavsdk.rpc.camera.Information = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mavsdk.rpc.camera.Information, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mavsdk.rpc.camera.Information.displayName = 'proto.mavsdk.rpc.camera.Information';
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
proto.mavsdk.rpc.camera.PrepareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.PrepareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.PrepareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.PrepareRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.PrepareRequest}
 */
proto.mavsdk.rpc.camera.PrepareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.PrepareRequest;
  return proto.mavsdk.rpc.camera.PrepareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.PrepareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.PrepareRequest}
 */
proto.mavsdk.rpc.camera.PrepareRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.PrepareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.PrepareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.PrepareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.PrepareRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.PrepareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.PrepareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.PrepareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.PrepareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.PrepareResponse}
 */
proto.mavsdk.rpc.camera.PrepareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.PrepareResponse;
  return proto.mavsdk.rpc.camera.PrepareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.PrepareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.PrepareResponse}
 */
proto.mavsdk.rpc.camera.PrepareResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.PrepareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.PrepareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.PrepareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.PrepareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.PrepareResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.PrepareResponse} returns this
*/
proto.mavsdk.rpc.camera.PrepareResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.PrepareResponse} returns this
 */
proto.mavsdk.rpc.camera.PrepareResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.PrepareResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.TakePhotoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TakePhotoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TakePhotoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TakePhotoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.TakePhotoRequest}
 */
proto.mavsdk.rpc.camera.TakePhotoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TakePhotoRequest;
  return proto.mavsdk.rpc.camera.TakePhotoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TakePhotoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TakePhotoRequest}
 */
proto.mavsdk.rpc.camera.TakePhotoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.TakePhotoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TakePhotoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TakePhotoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TakePhotoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.TakePhotoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TakePhotoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TakePhotoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.TakePhotoResponse}
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TakePhotoResponse;
  return proto.mavsdk.rpc.camera.TakePhotoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TakePhotoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TakePhotoResponse}
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.TakePhotoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TakePhotoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TakePhotoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.TakePhotoResponse} returns this
*/
proto.mavsdk.rpc.camera.TakePhotoResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.TakePhotoResponse} returns this
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.TakePhotoResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StartPhotoIntervalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    intervalS: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalRequest}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StartPhotoIntervalRequest;
  return proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StartPhotoIntervalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalRequest}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setIntervalS(value);
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
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StartPhotoIntervalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntervalS();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float interval_s = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.prototype.getIntervalS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalRequest} returns this
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalRequest.prototype.setIntervalS = function(value) {
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
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StartPhotoIntervalResponse;
  return proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse} returns this
*/
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StartPhotoIntervalResponse} returns this
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StartPhotoIntervalResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StopPhotoIntervalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.StopPhotoIntervalRequest}
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StopPhotoIntervalRequest;
  return proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StopPhotoIntervalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StopPhotoIntervalRequest}
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StopPhotoIntervalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse}
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StopPhotoIntervalResponse;
  return proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse}
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse} returns this
*/
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StopPhotoIntervalResponse} returns this
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StopPhotoIntervalResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.StartVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StartVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StartVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.StartVideoRequest}
 */
proto.mavsdk.rpc.camera.StartVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StartVideoRequest;
  return proto.mavsdk.rpc.camera.StartVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StartVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StartVideoRequest}
 */
proto.mavsdk.rpc.camera.StartVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.StartVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StartVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StartVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.StartVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StartVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StartVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StartVideoResponse}
 */
proto.mavsdk.rpc.camera.StartVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StartVideoResponse;
  return proto.mavsdk.rpc.camera.StartVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StartVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StartVideoResponse}
 */
proto.mavsdk.rpc.camera.StartVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.StartVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StartVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StartVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.StartVideoResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StartVideoResponse} returns this
*/
proto.mavsdk.rpc.camera.StartVideoResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StartVideoResponse} returns this
 */
proto.mavsdk.rpc.camera.StartVideoResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StartVideoResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.StopVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StopVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StopVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.StopVideoRequest}
 */
proto.mavsdk.rpc.camera.StopVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StopVideoRequest;
  return proto.mavsdk.rpc.camera.StopVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StopVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StopVideoRequest}
 */
proto.mavsdk.rpc.camera.StopVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.StopVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StopVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StopVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.StopVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StopVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StopVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StopVideoResponse}
 */
proto.mavsdk.rpc.camera.StopVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StopVideoResponse;
  return proto.mavsdk.rpc.camera.StopVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StopVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StopVideoResponse}
 */
proto.mavsdk.rpc.camera.StopVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.StopVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StopVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StopVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.StopVideoResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StopVideoResponse} returns this
*/
proto.mavsdk.rpc.camera.StopVideoResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StopVideoResponse} returns this
 */
proto.mavsdk.rpc.camera.StopVideoResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StopVideoResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StartVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StartVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StartVideoStreamingRequest;
  return proto.mavsdk.rpc.camera.StartVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StartVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StartVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StartVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.prototype.getStreamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingRequest} returns this
 */
proto.mavsdk.rpc.camera.StartVideoStreamingRequest.prototype.setStreamId = function(value) {
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
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StartVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StartVideoStreamingResponse;
  return proto.mavsdk.rpc.camera.StartVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StartVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse} returns this
*/
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StartVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StartVideoStreamingResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StopVideoStreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StopVideoStreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StopVideoStreamingRequest;
  return proto.mavsdk.rpc.camera.StopVideoStreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StopVideoStreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingRequest}
 */
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StopVideoStreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StopVideoStreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.prototype.getStreamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingRequest} returns this
 */
proto.mavsdk.rpc.camera.StopVideoStreamingRequest.prototype.setStreamId = function(value) {
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
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StopVideoStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StopVideoStreamingResponse;
  return proto.mavsdk.rpc.camera.StopVideoStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse}
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StopVideoStreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse} returns this
*/
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StopVideoStreamingResponse} returns this
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StopVideoStreamingResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.SetModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SetModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SetModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetModeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SetModeRequest}
 */
proto.mavsdk.rpc.camera.SetModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SetModeRequest;
  return proto.mavsdk.rpc.camera.SetModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SetModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SetModeRequest}
 */
proto.mavsdk.rpc.camera.SetModeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera.Mode} */ (reader.readEnum());
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
proto.mavsdk.rpc.camera.SetModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SetModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SetModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetModeRequest.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.mavsdk.rpc.camera.Mode}
 */
proto.mavsdk.rpc.camera.SetModeRequest.prototype.getMode = function() {
  return /** @type {!proto.mavsdk.rpc.camera.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.Mode} value
 * @return {!proto.mavsdk.rpc.camera.SetModeRequest} returns this
 */
proto.mavsdk.rpc.camera.SetModeRequest.prototype.setMode = function(value) {
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
proto.mavsdk.rpc.camera.SetModeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SetModeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SetModeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetModeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.SetModeResponse}
 */
proto.mavsdk.rpc.camera.SetModeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SetModeResponse;
  return proto.mavsdk.rpc.camera.SetModeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SetModeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SetModeResponse}
 */
proto.mavsdk.rpc.camera.SetModeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.SetModeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SetModeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SetModeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetModeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.SetModeResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.SetModeResponse} returns this
*/
proto.mavsdk.rpc.camera.SetModeResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.SetModeResponse} returns this
 */
proto.mavsdk.rpc.camera.SetModeResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.SetModeResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.ListPhotosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ListPhotosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ListPhotosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ListPhotosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    photosRange: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mavsdk.rpc.camera.ListPhotosRequest}
 */
proto.mavsdk.rpc.camera.ListPhotosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ListPhotosRequest;
  return proto.mavsdk.rpc.camera.ListPhotosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ListPhotosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ListPhotosRequest}
 */
proto.mavsdk.rpc.camera.ListPhotosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera.PhotosRange} */ (reader.readEnum());
      msg.setPhotosRange(value);
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
proto.mavsdk.rpc.camera.ListPhotosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ListPhotosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ListPhotosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ListPhotosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhotosRange();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional PhotosRange photos_range = 1;
 * @return {!proto.mavsdk.rpc.camera.PhotosRange}
 */
proto.mavsdk.rpc.camera.ListPhotosRequest.prototype.getPhotosRange = function() {
  return /** @type {!proto.mavsdk.rpc.camera.PhotosRange} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.PhotosRange} value
 * @return {!proto.mavsdk.rpc.camera.ListPhotosRequest} returns this
 */
proto.mavsdk.rpc.camera.ListPhotosRequest.prototype.setPhotosRange = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.repeatedFields_ = [2];



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
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ListPhotosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ListPhotosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f),
    captureInfosList: jspb.Message.toObjectList(msg.getCaptureInfosList(),
    proto.mavsdk.rpc.camera.CaptureInfo.toObject, includeInstance)
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
 * @return {!proto.mavsdk.rpc.camera.ListPhotosResponse}
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ListPhotosResponse;
  return proto.mavsdk.rpc.camera.ListPhotosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ListPhotosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ListPhotosResponse}
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera.CaptureInfo;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CaptureInfo.deserializeBinaryFromReader);
      msg.addCaptureInfos(value);
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
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ListPhotosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ListPhotosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
  f = message.getCaptureInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mavsdk.rpc.camera.CaptureInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.ListPhotosResponse} returns this
*/
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.ListPhotosResponse} returns this
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.hasCameraResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CaptureInfo capture_infos = 2;
 * @return {!Array<!proto.mavsdk.rpc.camera.CaptureInfo>}
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.getCaptureInfosList = function() {
  return /** @type{!Array<!proto.mavsdk.rpc.camera.CaptureInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mavsdk.rpc.camera.CaptureInfo, 2));
};


/**
 * @param {!Array<!proto.mavsdk.rpc.camera.CaptureInfo>} value
 * @return {!proto.mavsdk.rpc.camera.ListPhotosResponse} returns this
*/
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.setCaptureInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mavsdk.rpc.camera.CaptureInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo}
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.addCaptureInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mavsdk.rpc.camera.CaptureInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.camera.ListPhotosResponse} returns this
 */
proto.mavsdk.rpc.camera.ListPhotosResponse.prototype.clearCaptureInfosList = function() {
  return this.setCaptureInfosList([]);
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
proto.mavsdk.rpc.camera.SubscribeInformationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribeInformationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribeInformationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeInformationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribeInformationRequest}
 */
proto.mavsdk.rpc.camera.SubscribeInformationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribeInformationRequest;
  return proto.mavsdk.rpc.camera.SubscribeInformationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribeInformationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribeInformationRequest}
 */
proto.mavsdk.rpc.camera.SubscribeInformationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribeInformationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribeInformationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribeInformationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeInformationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.InformationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.InformationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.InformationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.InformationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    information: (f = msg.getInformation()) && proto.mavsdk.rpc.camera.Information.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.InformationResponse}
 */
proto.mavsdk.rpc.camera.InformationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.InformationResponse;
  return proto.mavsdk.rpc.camera.InformationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.InformationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.InformationResponse}
 */
proto.mavsdk.rpc.camera.InformationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.Information;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Information.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.camera.InformationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.InformationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.InformationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.InformationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInformation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.Information.serializeBinaryToWriter
    );
  }
};


/**
 * optional Information information = 1;
 * @return {?proto.mavsdk.rpc.camera.Information}
 */
proto.mavsdk.rpc.camera.InformationResponse.prototype.getInformation = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Information} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Information, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Information|undefined} value
 * @return {!proto.mavsdk.rpc.camera.InformationResponse} returns this
*/
proto.mavsdk.rpc.camera.InformationResponse.prototype.setInformation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.InformationResponse} returns this
 */
proto.mavsdk.rpc.camera.InformationResponse.prototype.clearInformation = function() {
  return this.setInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.InformationResponse.prototype.hasInformation = function() {
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
proto.mavsdk.rpc.camera.SubscribeModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribeModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribeModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeModeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribeModeRequest}
 */
proto.mavsdk.rpc.camera.SubscribeModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribeModeRequest;
  return proto.mavsdk.rpc.camera.SubscribeModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribeModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribeModeRequest}
 */
proto.mavsdk.rpc.camera.SubscribeModeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribeModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribeModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribeModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeModeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.ModeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ModeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ModeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ModeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.ModeResponse}
 */
proto.mavsdk.rpc.camera.ModeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ModeResponse;
  return proto.mavsdk.rpc.camera.ModeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ModeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ModeResponse}
 */
proto.mavsdk.rpc.camera.ModeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera.Mode} */ (reader.readEnum());
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
proto.mavsdk.rpc.camera.ModeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ModeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ModeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ModeResponse.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.mavsdk.rpc.camera.Mode}
 */
proto.mavsdk.rpc.camera.ModeResponse.prototype.getMode = function() {
  return /** @type {!proto.mavsdk.rpc.camera.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.Mode} value
 * @return {!proto.mavsdk.rpc.camera.ModeResponse} returns this
 */
proto.mavsdk.rpc.camera.ModeResponse.prototype.setMode = function(value) {
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
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest}
 */
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest;
  return proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest}
 */
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.VideoStreamInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoStreamInfo: (f = msg.getVideoStreamInfo()) && proto.mavsdk.rpc.camera.VideoStreamInfo.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse}
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.VideoStreamInfoResponse;
  return proto.mavsdk.rpc.camera.VideoStreamInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse}
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.VideoStreamInfo;
      reader.readMessage(value,proto.mavsdk.rpc.camera.VideoStreamInfo.deserializeBinaryFromReader);
      msg.setVideoStreamInfo(value);
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
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.VideoStreamInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoStreamInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.VideoStreamInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional VideoStreamInfo video_stream_info = 1;
 * @return {?proto.mavsdk.rpc.camera.VideoStreamInfo}
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.prototype.getVideoStreamInfo = function() {
  return /** @type{?proto.mavsdk.rpc.camera.VideoStreamInfo} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.VideoStreamInfo, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.VideoStreamInfo|undefined} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse} returns this
*/
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.prototype.setVideoStreamInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfoResponse} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.prototype.clearVideoStreamInfo = function() {
  return this.setVideoStreamInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.VideoStreamInfoResponse.prototype.hasVideoStreamInfo = function() {
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
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest}
 */
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest;
  return proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest}
 */
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeCaptureInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.CaptureInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.CaptureInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.CaptureInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    captureInfo: (f = msg.getCaptureInfo()) && proto.mavsdk.rpc.camera.CaptureInfo.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.CaptureInfoResponse}
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.CaptureInfoResponse;
  return proto.mavsdk.rpc.camera.CaptureInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.CaptureInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.CaptureInfoResponse}
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CaptureInfo;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CaptureInfo.deserializeBinaryFromReader);
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
proto.mavsdk.rpc.camera.CaptureInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.CaptureInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.CaptureInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCaptureInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CaptureInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CaptureInfo capture_info = 1;
 * @return {?proto.mavsdk.rpc.camera.CaptureInfo}
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.prototype.getCaptureInfo = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CaptureInfo} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CaptureInfo, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CaptureInfo|undefined} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfoResponse} returns this
*/
proto.mavsdk.rpc.camera.CaptureInfoResponse.prototype.setCaptureInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.CaptureInfoResponse} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.prototype.clearCaptureInfo = function() {
  return this.setCaptureInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.CaptureInfoResponse.prototype.hasCaptureInfo = function() {
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
proto.mavsdk.rpc.camera.SubscribeStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribeStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribeStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribeStatusRequest}
 */
proto.mavsdk.rpc.camera.SubscribeStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribeStatusRequest;
  return proto.mavsdk.rpc.camera.SubscribeStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribeStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribeStatusRequest}
 */
proto.mavsdk.rpc.camera.SubscribeStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribeStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribeStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribeStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.StatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.StatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.StatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraStatus: (f = msg.getCameraStatus()) && proto.mavsdk.rpc.camera.Status.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.StatusResponse}
 */
proto.mavsdk.rpc.camera.StatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.StatusResponse;
  return proto.mavsdk.rpc.camera.StatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.StatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.StatusResponse}
 */
proto.mavsdk.rpc.camera.StatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.Status;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Status.deserializeBinaryFromReader);
      msg.setCameraStatus(value);
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
proto.mavsdk.rpc.camera.StatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.StatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.StatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.StatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status camera_status = 1;
 * @return {?proto.mavsdk.rpc.camera.Status}
 */
proto.mavsdk.rpc.camera.StatusResponse.prototype.getCameraStatus = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Status} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Status, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Status|undefined} value
 * @return {!proto.mavsdk.rpc.camera.StatusResponse} returns this
*/
proto.mavsdk.rpc.camera.StatusResponse.prototype.setCameraStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.StatusResponse} returns this
 */
proto.mavsdk.rpc.camera.StatusResponse.prototype.clearCameraStatus = function() {
  return this.setCameraStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.StatusResponse.prototype.hasCameraStatus = function() {
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
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest}
 */
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest;
  return proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest}
 */
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribeCurrentSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.repeatedFields_ = [1];



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
proto.mavsdk.rpc.camera.CurrentSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.CurrentSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.CurrentSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentSettingsList: jspb.Message.toObjectList(msg.getCurrentSettingsList(),
    proto.mavsdk.rpc.camera.Setting.toObject, includeInstance)
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
 * @return {!proto.mavsdk.rpc.camera.CurrentSettingsResponse}
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.CurrentSettingsResponse;
  return proto.mavsdk.rpc.camera.CurrentSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.CurrentSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.CurrentSettingsResponse}
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.Setting;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Setting.deserializeBinaryFromReader);
      msg.addCurrentSettings(value);
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
proto.mavsdk.rpc.camera.CurrentSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.CurrentSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.CurrentSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.Setting.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Setting current_settings = 1;
 * @return {!Array<!proto.mavsdk.rpc.camera.Setting>}
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.prototype.getCurrentSettingsList = function() {
  return /** @type{!Array<!proto.mavsdk.rpc.camera.Setting>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mavsdk.rpc.camera.Setting, 1));
};


/**
 * @param {!Array<!proto.mavsdk.rpc.camera.Setting>} value
 * @return {!proto.mavsdk.rpc.camera.CurrentSettingsResponse} returns this
*/
proto.mavsdk.rpc.camera.CurrentSettingsResponse.prototype.setCurrentSettingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mavsdk.rpc.camera.Setting=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.camera.Setting}
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.prototype.addCurrentSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mavsdk.rpc.camera.Setting, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.camera.CurrentSettingsResponse} returns this
 */
proto.mavsdk.rpc.camera.CurrentSettingsResponse.prototype.clearCurrentSettingsList = function() {
  return this.setCurrentSettingsList([]);
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
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest}
 */
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest;
  return proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest}
 */
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.repeatedFields_ = [1];



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
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingOptionsList: jspb.Message.toObjectList(msg.getSettingOptionsList(),
    proto.mavsdk.rpc.camera.SettingOptions.toObject, includeInstance)
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
 * @return {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse}
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse;
  return proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse}
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.SettingOptions;
      reader.readMessage(value,proto.mavsdk.rpc.camera.SettingOptions.deserializeBinaryFromReader);
      msg.addSettingOptions(value);
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
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.SettingOptions.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SettingOptions setting_options = 1;
 * @return {!Array<!proto.mavsdk.rpc.camera.SettingOptions>}
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.prototype.getSettingOptionsList = function() {
  return /** @type{!Array<!proto.mavsdk.rpc.camera.SettingOptions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mavsdk.rpc.camera.SettingOptions, 1));
};


/**
 * @param {!Array<!proto.mavsdk.rpc.camera.SettingOptions>} value
 * @return {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse} returns this
*/
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.prototype.setSettingOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mavsdk.rpc.camera.SettingOptions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.camera.SettingOptions}
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.prototype.addSettingOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mavsdk.rpc.camera.SettingOptions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse} returns this
 */
proto.mavsdk.rpc.camera.PossibleSettingOptionsResponse.prototype.clearSettingOptionsList = function() {
  return this.setSettingOptionsList([]);
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
proto.mavsdk.rpc.camera.SetSettingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SetSettingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SetSettingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetSettingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    setting: (f = msg.getSetting()) && proto.mavsdk.rpc.camera.Setting.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.SetSettingRequest}
 */
proto.mavsdk.rpc.camera.SetSettingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SetSettingRequest;
  return proto.mavsdk.rpc.camera.SetSettingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SetSettingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SetSettingRequest}
 */
proto.mavsdk.rpc.camera.SetSettingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.Setting;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Setting.deserializeBinaryFromReader);
      msg.setSetting(value);
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
proto.mavsdk.rpc.camera.SetSettingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SetSettingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SetSettingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetSettingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.Setting.serializeBinaryToWriter
    );
  }
};


/**
 * optional Setting setting = 1;
 * @return {?proto.mavsdk.rpc.camera.Setting}
 */
proto.mavsdk.rpc.camera.SetSettingRequest.prototype.getSetting = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Setting} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Setting, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Setting|undefined} value
 * @return {!proto.mavsdk.rpc.camera.SetSettingRequest} returns this
*/
proto.mavsdk.rpc.camera.SetSettingRequest.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.SetSettingRequest} returns this
 */
proto.mavsdk.rpc.camera.SetSettingRequest.prototype.clearSetting = function() {
  return this.setSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.SetSettingRequest.prototype.hasSetting = function() {
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
proto.mavsdk.rpc.camera.SetSettingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SetSettingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SetSettingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetSettingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.SetSettingResponse}
 */
proto.mavsdk.rpc.camera.SetSettingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SetSettingResponse;
  return proto.mavsdk.rpc.camera.SetSettingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SetSettingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SetSettingResponse}
 */
proto.mavsdk.rpc.camera.SetSettingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.SetSettingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SetSettingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SetSettingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SetSettingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.SetSettingResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.SetSettingResponse} returns this
*/
proto.mavsdk.rpc.camera.SetSettingResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.SetSettingResponse} returns this
 */
proto.mavsdk.rpc.camera.SetSettingResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.SetSettingResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.GetSettingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.GetSettingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.GetSettingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.GetSettingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    setting: (f = msg.getSetting()) && proto.mavsdk.rpc.camera.Setting.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.GetSettingRequest}
 */
proto.mavsdk.rpc.camera.GetSettingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.GetSettingRequest;
  return proto.mavsdk.rpc.camera.GetSettingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.GetSettingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.GetSettingRequest}
 */
proto.mavsdk.rpc.camera.GetSettingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.Setting;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Setting.deserializeBinaryFromReader);
      msg.setSetting(value);
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
proto.mavsdk.rpc.camera.GetSettingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.GetSettingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.GetSettingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.GetSettingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.Setting.serializeBinaryToWriter
    );
  }
};


/**
 * optional Setting setting = 1;
 * @return {?proto.mavsdk.rpc.camera.Setting}
 */
proto.mavsdk.rpc.camera.GetSettingRequest.prototype.getSetting = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Setting} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Setting, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Setting|undefined} value
 * @return {!proto.mavsdk.rpc.camera.GetSettingRequest} returns this
*/
proto.mavsdk.rpc.camera.GetSettingRequest.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.GetSettingRequest} returns this
 */
proto.mavsdk.rpc.camera.GetSettingRequest.prototype.clearSetting = function() {
  return this.setSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.GetSettingRequest.prototype.hasSetting = function() {
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
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.GetSettingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.GetSettingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.GetSettingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f),
    setting: (f = msg.getSetting()) && proto.mavsdk.rpc.camera.Setting.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.GetSettingResponse}
 */
proto.mavsdk.rpc.camera.GetSettingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.GetSettingResponse;
  return proto.mavsdk.rpc.camera.GetSettingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.GetSettingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.GetSettingResponse}
 */
proto.mavsdk.rpc.camera.GetSettingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera.Setting;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Setting.deserializeBinaryFromReader);
      msg.setSetting(value);
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
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.GetSettingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.GetSettingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.GetSettingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.camera.Setting.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.GetSettingResponse} returns this
*/
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.GetSettingResponse} returns this
 */
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.hasCameraResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Setting setting = 2;
 * @return {?proto.mavsdk.rpc.camera.Setting}
 */
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.getSetting = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Setting} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Setting, 2));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Setting|undefined} value
 * @return {!proto.mavsdk.rpc.camera.GetSettingResponse} returns this
*/
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.GetSettingResponse} returns this
 */
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.clearSetting = function() {
  return this.setSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.GetSettingResponse.prototype.hasSetting = function() {
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
proto.mavsdk.rpc.camera.FormatStorageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FormatStorageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FormatStorageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FormatStorageRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.FormatStorageRequest}
 */
proto.mavsdk.rpc.camera.FormatStorageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FormatStorageRequest;
  return proto.mavsdk.rpc.camera.FormatStorageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FormatStorageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FormatStorageRequest}
 */
proto.mavsdk.rpc.camera.FormatStorageRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.FormatStorageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FormatStorageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FormatStorageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FormatStorageRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.FormatStorageRequest.prototype.getStorageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.FormatStorageRequest} returns this
 */
proto.mavsdk.rpc.camera.FormatStorageRequest.prototype.setStorageId = function(value) {
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
proto.mavsdk.rpc.camera.FormatStorageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FormatStorageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FormatStorageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.FormatStorageResponse}
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FormatStorageResponse;
  return proto.mavsdk.rpc.camera.FormatStorageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FormatStorageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FormatStorageResponse}
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.FormatStorageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FormatStorageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FormatStorageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.FormatStorageResponse} returns this
*/
proto.mavsdk.rpc.camera.FormatStorageResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.FormatStorageResponse} returns this
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.FormatStorageResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.SelectCameraResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SelectCameraResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SelectCameraResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.SelectCameraResponse}
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SelectCameraResponse;
  return proto.mavsdk.rpc.camera.SelectCameraResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SelectCameraResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SelectCameraResponse}
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.SelectCameraResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SelectCameraResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SelectCameraResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.SelectCameraResponse} returns this
*/
proto.mavsdk.rpc.camera.SelectCameraResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.SelectCameraResponse} returns this
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.SelectCameraResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.SelectCameraRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SelectCameraRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SelectCameraRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SelectCameraRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mavsdk.rpc.camera.SelectCameraRequest}
 */
proto.mavsdk.rpc.camera.SelectCameraRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SelectCameraRequest;
  return proto.mavsdk.rpc.camera.SelectCameraRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SelectCameraRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SelectCameraRequest}
 */
proto.mavsdk.rpc.camera.SelectCameraRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCameraId(value);
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
proto.mavsdk.rpc.camera.SelectCameraRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SelectCameraRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SelectCameraRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SelectCameraRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 camera_id = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.SelectCameraRequest.prototype.getCameraId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.SelectCameraRequest} returns this
 */
proto.mavsdk.rpc.camera.SelectCameraRequest.prototype.setCameraId = function(value) {
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
proto.mavsdk.rpc.camera.ResetSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ResetSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ResetSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ResetSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.ResetSettingsRequest}
 */
proto.mavsdk.rpc.camera.ResetSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ResetSettingsRequest;
  return proto.mavsdk.rpc.camera.ResetSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ResetSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ResetSettingsRequest}
 */
proto.mavsdk.rpc.camera.ResetSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.ResetSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ResetSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ResetSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ResetSettingsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.ResetSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ResetSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ResetSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.ResetSettingsResponse}
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ResetSettingsResponse;
  return proto.mavsdk.rpc.camera.ResetSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ResetSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ResetSettingsResponse}
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.ResetSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ResetSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ResetSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.ResetSettingsResponse} returns this
*/
proto.mavsdk.rpc.camera.ResetSettingsResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.ResetSettingsResponse} returns this
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.ResetSettingsResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.ZoomInStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomInStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomInStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomInStartRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.ZoomInStartRequest}
 */
proto.mavsdk.rpc.camera.ZoomInStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomInStartRequest;
  return proto.mavsdk.rpc.camera.ZoomInStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomInStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomInStartRequest}
 */
proto.mavsdk.rpc.camera.ZoomInStartRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.ZoomInStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomInStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomInStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomInStartRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.ZoomInStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomInStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomInStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.ZoomInStartResponse}
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomInStartResponse;
  return proto.mavsdk.rpc.camera.ZoomInStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomInStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomInStartResponse}
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.ZoomInStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomInStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomInStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.ZoomInStartResponse} returns this
*/
proto.mavsdk.rpc.camera.ZoomInStartResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.ZoomInStartResponse} returns this
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.ZoomInStartResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.ZoomOutStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomOutStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomOutStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomOutStartRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.ZoomOutStartRequest}
 */
proto.mavsdk.rpc.camera.ZoomOutStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomOutStartRequest;
  return proto.mavsdk.rpc.camera.ZoomOutStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomOutStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomOutStartRequest}
 */
proto.mavsdk.rpc.camera.ZoomOutStartRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.ZoomOutStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomOutStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomOutStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomOutStartRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.ZoomOutStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomOutStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomOutStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.ZoomOutStartResponse}
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomOutStartResponse;
  return proto.mavsdk.rpc.camera.ZoomOutStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomOutStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomOutStartResponse}
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.ZoomOutStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomOutStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomOutStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.ZoomOutStartResponse} returns this
*/
proto.mavsdk.rpc.camera.ZoomOutStartResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.ZoomOutStartResponse} returns this
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.ZoomOutStartResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.ZoomStopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomStopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomStopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomStopRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.ZoomStopRequest}
 */
proto.mavsdk.rpc.camera.ZoomStopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomStopRequest;
  return proto.mavsdk.rpc.camera.ZoomStopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomStopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomStopRequest}
 */
proto.mavsdk.rpc.camera.ZoomStopRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.ZoomStopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomStopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomStopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomStopRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.ZoomStopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomStopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomStopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.ZoomStopResponse}
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomStopResponse;
  return proto.mavsdk.rpc.camera.ZoomStopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomStopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomStopResponse}
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.ZoomStopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomStopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomStopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.ZoomStopResponse} returns this
*/
proto.mavsdk.rpc.camera.ZoomStopResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.ZoomStopResponse} returns this
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.ZoomStopResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.ZoomRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeRequest}
 */
proto.mavsdk.rpc.camera.ZoomRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomRangeRequest;
  return proto.mavsdk.rpc.camera.ZoomRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeRequest}
 */
proto.mavsdk.rpc.camera.ZoomRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRange(value);
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
proto.mavsdk.rpc.camera.ZoomRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float range = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.ZoomRangeRequest.prototype.getRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeRequest} returns this
 */
proto.mavsdk.rpc.camera.ZoomRangeRequest.prototype.setRange = function(value) {
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
proto.mavsdk.rpc.camera.ZoomRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.ZoomRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.ZoomRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeResponse}
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.ZoomRangeResponse;
  return proto.mavsdk.rpc.camera.ZoomRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.ZoomRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeResponse}
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.ZoomRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.ZoomRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.ZoomRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeResponse} returns this
*/
proto.mavsdk.rpc.camera.ZoomRangeResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.ZoomRangeResponse} returns this
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.ZoomRangeResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TrackPointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TrackPointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackPointRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.TrackPointRequest}
 */
proto.mavsdk.rpc.camera.TrackPointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TrackPointRequest;
  return proto.mavsdk.rpc.camera.TrackPointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TrackPointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TrackPointRequest}
 */
proto.mavsdk.rpc.camera.TrackPointRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TrackPointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TrackPointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackPointRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.getPointX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackPointRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.setPointX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float point_y = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.getPointY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackPointRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.setPointY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float radius = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackPointRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackPointRequest.prototype.setRadius = function(value) {
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
proto.mavsdk.rpc.camera.TrackPointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TrackPointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TrackPointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackPointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.TrackPointResponse}
 */
proto.mavsdk.rpc.camera.TrackPointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TrackPointResponse;
  return proto.mavsdk.rpc.camera.TrackPointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TrackPointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TrackPointResponse}
 */
proto.mavsdk.rpc.camera.TrackPointResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.TrackPointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TrackPointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TrackPointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackPointResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.TrackPointResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.TrackPointResponse} returns this
*/
proto.mavsdk.rpc.camera.TrackPointResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.TrackPointResponse} returns this
 */
proto.mavsdk.rpc.camera.TrackPointResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.TrackPointResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TrackRectangleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TrackRectangleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    topLeftX: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    topLeftY: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    bottomRightX: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bottomRightY: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleRequest}
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TrackRectangleRequest;
  return proto.mavsdk.rpc.camera.TrackRectangleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TrackRectangleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleRequest}
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTopLeftX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTopLeftY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottomRightX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottomRightY(value);
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
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TrackRectangleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TrackRectangleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopLeftX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTopLeftY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBottomRightX();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getBottomRightY();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float top_left_x = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.getTopLeftX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.setTopLeftX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float top_left_y = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.getTopLeftY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.setTopLeftY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float bottom_right_x = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.getBottomRightX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.setBottomRightX = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float bottom_right_y = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.getBottomRightY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleRequest} returns this
 */
proto.mavsdk.rpc.camera.TrackRectangleRequest.prototype.setBottomRightY = function(value) {
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
proto.mavsdk.rpc.camera.TrackRectangleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TrackRectangleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TrackRectangleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleResponse}
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TrackRectangleResponse;
  return proto.mavsdk.rpc.camera.TrackRectangleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TrackRectangleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleResponse}
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.TrackRectangleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TrackRectangleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TrackRectangleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleResponse} returns this
*/
proto.mavsdk.rpc.camera.TrackRectangleResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.TrackRectangleResponse} returns this
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.TrackRectangleResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.TrackStopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TrackStopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TrackStopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackStopRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.TrackStopRequest}
 */
proto.mavsdk.rpc.camera.TrackStopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TrackStopRequest;
  return proto.mavsdk.rpc.camera.TrackStopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TrackStopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TrackStopRequest}
 */
proto.mavsdk.rpc.camera.TrackStopRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.TrackStopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TrackStopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TrackStopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackStopRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.TrackStopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.TrackStopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.TrackStopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackStopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.TrackStopResponse}
 */
proto.mavsdk.rpc.camera.TrackStopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.TrackStopResponse;
  return proto.mavsdk.rpc.camera.TrackStopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.TrackStopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.TrackStopResponse}
 */
proto.mavsdk.rpc.camera.TrackStopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.TrackStopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.TrackStopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.TrackStopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.TrackStopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.TrackStopResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.TrackStopResponse} returns this
*/
proto.mavsdk.rpc.camera.TrackStopResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.TrackStopResponse} returns this
 */
proto.mavsdk.rpc.camera.TrackStopResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.TrackStopResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.FocusInStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusInStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusInStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusInStartRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.FocusInStartRequest}
 */
proto.mavsdk.rpc.camera.FocusInStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusInStartRequest;
  return proto.mavsdk.rpc.camera.FocusInStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusInStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusInStartRequest}
 */
proto.mavsdk.rpc.camera.FocusInStartRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.FocusInStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusInStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusInStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusInStartRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.FocusInStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusInStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusInStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.FocusInStartResponse}
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusInStartResponse;
  return proto.mavsdk.rpc.camera.FocusInStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusInStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusInStartResponse}
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.FocusInStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusInStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusInStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.FocusInStartResponse} returns this
*/
proto.mavsdk.rpc.camera.FocusInStartResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.FocusInStartResponse} returns this
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.FocusInStartResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.FocusOutStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusOutStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusOutStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusOutStartRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.FocusOutStartRequest}
 */
proto.mavsdk.rpc.camera.FocusOutStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusOutStartRequest;
  return proto.mavsdk.rpc.camera.FocusOutStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusOutStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusOutStartRequest}
 */
proto.mavsdk.rpc.camera.FocusOutStartRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.FocusOutStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusOutStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusOutStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusOutStartRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.FocusOutStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusOutStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusOutStartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.FocusOutStartResponse}
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusOutStartResponse;
  return proto.mavsdk.rpc.camera.FocusOutStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusOutStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusOutStartResponse}
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.FocusOutStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusOutStartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusOutStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.FocusOutStartResponse} returns this
*/
proto.mavsdk.rpc.camera.FocusOutStartResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.FocusOutStartResponse} returns this
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.FocusOutStartResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.FocusStopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusStopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusStopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusStopRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.FocusStopRequest}
 */
proto.mavsdk.rpc.camera.FocusStopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusStopRequest;
  return proto.mavsdk.rpc.camera.FocusStopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusStopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusStopRequest}
 */
proto.mavsdk.rpc.camera.FocusStopRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.FocusStopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusStopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusStopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusStopRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.FocusStopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusStopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusStopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusStopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.FocusStopResponse}
 */
proto.mavsdk.rpc.camera.FocusStopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusStopResponse;
  return proto.mavsdk.rpc.camera.FocusStopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusStopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusStopResponse}
 */
proto.mavsdk.rpc.camera.FocusStopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.FocusStopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusStopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusStopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusStopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.FocusStopResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.FocusStopResponse} returns this
*/
proto.mavsdk.rpc.camera.FocusStopResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.FocusStopResponse} returns this
 */
proto.mavsdk.rpc.camera.FocusStopResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.FocusStopResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.FocusRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.mavsdk.rpc.camera.FocusRangeRequest}
 */
proto.mavsdk.rpc.camera.FocusRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusRangeRequest;
  return proto.mavsdk.rpc.camera.FocusRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusRangeRequest}
 */
proto.mavsdk.rpc.camera.FocusRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRange(value);
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
proto.mavsdk.rpc.camera.FocusRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float range = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.FocusRangeRequest.prototype.getRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.FocusRangeRequest} returns this
 */
proto.mavsdk.rpc.camera.FocusRangeRequest.prototype.setRange = function(value) {
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
proto.mavsdk.rpc.camera.FocusRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.FocusRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.FocusRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraResult: (f = msg.getCameraResult()) && proto.mavsdk.rpc.camera.CameraResult.toObject(includeInstance, f)
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
 * @return {!proto.mavsdk.rpc.camera.FocusRangeResponse}
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.FocusRangeResponse;
  return proto.mavsdk.rpc.camera.FocusRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.FocusRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.FocusRangeResponse}
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.CameraResult;
      reader.readMessage(value,proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader);
      msg.setCameraResult(value);
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
proto.mavsdk.rpc.camera.FocusRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.FocusRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.FocusRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional CameraResult camera_result = 1;
 * @return {?proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.prototype.getCameraResult = function() {
  return /** @type{?proto.mavsdk.rpc.camera.CameraResult} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.CameraResult, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.CameraResult|undefined} value
 * @return {!proto.mavsdk.rpc.camera.FocusRangeResponse} returns this
*/
proto.mavsdk.rpc.camera.FocusRangeResponse.prototype.setCameraResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.FocusRangeResponse} returns this
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.prototype.clearCameraResult = function() {
  return this.setCameraResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.FocusRangeResponse.prototype.hasCameraResult = function() {
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
proto.mavsdk.rpc.camera.CameraResult.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.CameraResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.CameraResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CameraResult.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.CameraResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.CameraResult;
  return proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.CameraResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.CameraResult}
 */
proto.mavsdk.rpc.camera.CameraResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mavsdk.rpc.camera.CameraResult.Result} */ (reader.readEnum());
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
proto.mavsdk.rpc.camera.CameraResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.CameraResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CameraResult.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.CameraResult.Result = {
  RESULT_UNKNOWN: 0,
  RESULT_SUCCESS: 1,
  RESULT_IN_PROGRESS: 2,
  RESULT_BUSY: 3,
  RESULT_DENIED: 4,
  RESULT_ERROR: 5,
  RESULT_TIMEOUT: 6,
  RESULT_WRONG_ARGUMENT: 7,
  RESULT_NO_SYSTEM: 8,
  RESULT_PROTOCOL_UNSUPPORTED: 9
};

/**
 * optional Result result = 1;
 * @return {!proto.mavsdk.rpc.camera.CameraResult.Result}
 */
proto.mavsdk.rpc.camera.CameraResult.prototype.getResult = function() {
  return /** @type {!proto.mavsdk.rpc.camera.CameraResult.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.CameraResult.Result} value
 * @return {!proto.mavsdk.rpc.camera.CameraResult} returns this
 */
proto.mavsdk.rpc.camera.CameraResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string result_str = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera.CameraResult.prototype.getResultStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.CameraResult} returns this
 */
proto.mavsdk.rpc.camera.CameraResult.prototype.setResultStr = function(value) {
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
proto.mavsdk.rpc.camera.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Position.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.Position}
 */
proto.mavsdk.rpc.camera.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.Position;
  return proto.mavsdk.rpc.camera.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.Position}
 */
proto.mavsdk.rpc.camera.Position.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Position.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.Position.prototype.getLatitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Position} returns this
 */
proto.mavsdk.rpc.camera.Position.prototype.setLatitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Position.prototype.getLongitudeDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Position} returns this
 */
proto.mavsdk.rpc.camera.Position.prototype.setLongitudeDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float absolute_altitude_m = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Position.prototype.getAbsoluteAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Position} returns this
 */
proto.mavsdk.rpc.camera.Position.prototype.setAbsoluteAltitudeM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float relative_altitude_m = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Position.prototype.getRelativeAltitudeM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Position} returns this
 */
proto.mavsdk.rpc.camera.Position.prototype.setRelativeAltitudeM = function(value) {
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
proto.mavsdk.rpc.camera.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Quaternion.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mavsdk.rpc.camera.Quaternion}
 */
proto.mavsdk.rpc.camera.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.Quaternion;
  return proto.mavsdk.rpc.camera.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.Quaternion}
 */
proto.mavsdk.rpc.camera.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mavsdk.rpc.camera.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Quaternion.serializeBinaryToWriter = function(message, writer) {
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
proto.mavsdk.rpc.camera.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Quaternion} returns this
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float x = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Quaternion} returns this
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float y = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Quaternion} returns this
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float z = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Quaternion} returns this
 */
proto.mavsdk.rpc.camera.Quaternion.prototype.setZ = function(value) {
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
proto.mavsdk.rpc.camera.EulerAngle.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.EulerAngle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.EulerAngle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.EulerAngle.toObject = function(includeInstance, msg) {
  var f, obj = {
    rollDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pitchDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    yawDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.mavsdk.rpc.camera.EulerAngle}
 */
proto.mavsdk.rpc.camera.EulerAngle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.EulerAngle;
  return proto.mavsdk.rpc.camera.EulerAngle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.EulerAngle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.EulerAngle}
 */
proto.mavsdk.rpc.camera.EulerAngle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRollDeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitchDeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYawDeg(value);
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
proto.mavsdk.rpc.camera.EulerAngle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.EulerAngle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.EulerAngle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.EulerAngle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRollDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPitchDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getYawDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float roll_deg = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.EulerAngle.prototype.getRollDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.EulerAngle} returns this
 */
proto.mavsdk.rpc.camera.EulerAngle.prototype.setRollDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float pitch_deg = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera.EulerAngle.prototype.getPitchDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.EulerAngle} returns this
 */
proto.mavsdk.rpc.camera.EulerAngle.prototype.setPitchDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float yaw_deg = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.EulerAngle.prototype.getYawDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.EulerAngle} returns this
 */
proto.mavsdk.rpc.camera.EulerAngle.prototype.setYawDeg = function(value) {
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
proto.mavsdk.rpc.camera.CaptureInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.CaptureInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.CaptureInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CaptureInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.mavsdk.rpc.camera.Position.toObject(includeInstance, f),
    attitudeQuaternion: (f = msg.getAttitudeQuaternion()) && proto.mavsdk.rpc.camera.Quaternion.toObject(includeInstance, f),
    attitudeEulerAngle: (f = msg.getAttitudeEulerAngle()) && proto.mavsdk.rpc.camera.EulerAngle.toObject(includeInstance, f),
    timeUtcUs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isSuccess: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    index: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fileUrl: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo}
 */
proto.mavsdk.rpc.camera.CaptureInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.CaptureInfo;
  return proto.mavsdk.rpc.camera.CaptureInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.CaptureInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo}
 */
proto.mavsdk.rpc.camera.CaptureInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.Position;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.mavsdk.rpc.camera.Quaternion;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Quaternion.deserializeBinaryFromReader);
      msg.setAttitudeQuaternion(value);
      break;
    case 3:
      var value = new proto.mavsdk.rpc.camera.EulerAngle;
      reader.readMessage(value,proto.mavsdk.rpc.camera.EulerAngle.deserializeBinaryFromReader);
      msg.setAttitudeEulerAngle(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeUtcUs(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuccess(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 7:
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
proto.mavsdk.rpc.camera.CaptureInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.CaptureInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.CaptureInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.CaptureInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.Position.serializeBinaryToWriter
    );
  }
  f = message.getAttitudeQuaternion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mavsdk.rpc.camera.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getAttitudeEulerAngle();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mavsdk.rpc.camera.EulerAngle.serializeBinaryToWriter
    );
  }
  f = message.getTimeUtcUs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getIsSuccess();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFileUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.mavsdk.rpc.camera.Position}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getPosition = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Position} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Position, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Position|undefined} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
*/
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion attitude_quaternion = 2;
 * @return {?proto.mavsdk.rpc.camera.Quaternion}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getAttitudeQuaternion = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Quaternion, 2));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Quaternion|undefined} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
*/
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setAttitudeQuaternion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.clearAttitudeQuaternion = function() {
  return this.setAttitudeQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.hasAttitudeQuaternion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EulerAngle attitude_euler_angle = 3;
 * @return {?proto.mavsdk.rpc.camera.EulerAngle}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getAttitudeEulerAngle = function() {
  return /** @type{?proto.mavsdk.rpc.camera.EulerAngle} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.EulerAngle, 3));
};


/**
 * @param {?proto.mavsdk.rpc.camera.EulerAngle|undefined} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
*/
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setAttitudeEulerAngle = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.clearAttitudeEulerAngle = function() {
  return this.setAttitudeEulerAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.hasAttitudeEulerAngle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 time_utc_us = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getTimeUtcUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setTimeUtcUs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool is_success = 5;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getIsSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setIsSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 index = 6;
 * @return {number}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string file_url = 7;
 * @return {string}
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.getFileUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.CaptureInfo} returns this
 */
proto.mavsdk.rpc.camera.CaptureInfo.prototype.setFileUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.VideoStreamSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.VideoStreamSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameRateHz: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    horizontalResolutionPix: jspb.Message.getFieldWithDefault(msg, 2, 0),
    verticalResolutionPix: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bitRateBS: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rotationDeg: jspb.Message.getFieldWithDefault(msg, 5, 0),
    uri: jspb.Message.getFieldWithDefault(msg, 6, ""),
    horizontalFovDeg: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.VideoStreamSettings;
  return proto.mavsdk.rpc.camera.VideoStreamSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.VideoStreamSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFrameRateHz(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHorizontalResolutionPix(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVerticalResolutionPix(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBitRateBS(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRotationDeg(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHorizontalFovDeg(value);
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
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.VideoStreamSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.VideoStreamSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameRateHz();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getHorizontalResolutionPix();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getVerticalResolutionPix();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getBitRateBS();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getRotationDeg();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHorizontalFovDeg();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional float frame_rate_hz = 1;
 * @return {number}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getFrameRateHz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setFrameRateHz = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint32 horizontal_resolution_pix = 2;
 * @return {number}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getHorizontalResolutionPix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setHorizontalResolutionPix = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 vertical_resolution_pix = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getVerticalResolutionPix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setVerticalResolutionPix = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 bit_rate_b_s = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getBitRateBS = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setBitRateBS = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 rotation_deg = 5;
 * @return {number}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getRotationDeg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setRotationDeg = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string uri = 6;
 * @return {string}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float horizontal_fov_deg = 7;
 * @return {number}
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.getHorizontalFovDeg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamSettings} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamSettings.prototype.setHorizontalFovDeg = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
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
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.VideoStreamInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    settings: (f = msg.getSettings()) && proto.mavsdk.rpc.camera.VideoStreamSettings.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    spectrum: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.VideoStreamInfo;
  return proto.mavsdk.rpc.camera.VideoStreamInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mavsdk.rpc.camera.VideoStreamSettings;
      reader.readMessage(value,proto.mavsdk.rpc.camera.VideoStreamSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 2:
      var value = /** @type {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamSpectrum} */ (reader.readEnum());
      msg.setSpectrum(value);
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
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.VideoStreamInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mavsdk.rpc.camera.VideoStreamSettings.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSpectrum();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamStatus = {
  VIDEO_STREAM_STATUS_NOT_RUNNING: 0,
  VIDEO_STREAM_STATUS_IN_PROGRESS: 1
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamSpectrum = {
  VIDEO_STREAM_SPECTRUM_UNKNOWN: 0,
  VIDEO_STREAM_SPECTRUM_VISIBLE_LIGHT: 1,
  VIDEO_STREAM_SPECTRUM_INFRARED: 2
};

/**
 * optional VideoStreamSettings settings = 1;
 * @return {?proto.mavsdk.rpc.camera.VideoStreamSettings}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.getSettings = function() {
  return /** @type{?proto.mavsdk.rpc.camera.VideoStreamSettings} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.VideoStreamSettings, 1));
};


/**
 * @param {?proto.mavsdk.rpc.camera.VideoStreamSettings|undefined} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo} returns this
*/
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VideoStreamStatus status = 2;
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamStatus}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.getStatus = function() {
  return /** @type {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamStatus} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional VideoStreamSpectrum spectrum = 3;
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamSpectrum}
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.getSpectrum = function() {
  return /** @type {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamSpectrum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.VideoStreamInfo.VideoStreamSpectrum} value
 * @return {!proto.mavsdk.rpc.camera.VideoStreamInfo} returns this
 */
proto.mavsdk.rpc.camera.VideoStreamInfo.prototype.setSpectrum = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.mavsdk.rpc.camera.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoOn: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    photoIntervalOn: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    usedStorageMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    availableStorageMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    totalStorageMib: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    recordingTimeS: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    mediaFolderName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    storageStatus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    storageId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    storageType: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.mavsdk.rpc.camera.Status}
 */
proto.mavsdk.rpc.camera.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.Status;
  return proto.mavsdk.rpc.camera.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.Status}
 */
proto.mavsdk.rpc.camera.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVideoOn(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhotoIntervalOn(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUsedStorageMib(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAvailableStorageMib(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotalStorageMib(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRecordingTimeS(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaFolderName(value);
      break;
    case 8:
      var value = /** @type {!proto.mavsdk.rpc.camera.Status.StorageStatus} */ (reader.readEnum());
      msg.setStorageStatus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStorageId(value);
      break;
    case 10:
      var value = /** @type {!proto.mavsdk.rpc.camera.Status.StorageType} */ (reader.readEnum());
      msg.setStorageType(value);
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
proto.mavsdk.rpc.camera.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoOn();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPhotoIntervalOn();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUsedStorageMib();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getAvailableStorageMib();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTotalStorageMib();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getRecordingTimeS();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMediaFolderName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStorageStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getStorageId();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getStorageType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera.Status.StorageStatus = {
  STORAGE_STATUS_NOT_AVAILABLE: 0,
  STORAGE_STATUS_UNFORMATTED: 1,
  STORAGE_STATUS_FORMATTED: 2,
  STORAGE_STATUS_NOT_SUPPORTED: 3
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera.Status.StorageType = {
  STORAGE_TYPE_UNKNOWN: 0,
  STORAGE_TYPE_USB_STICK: 1,
  STORAGE_TYPE_SD: 2,
  STORAGE_TYPE_MICROSD: 3,
  STORAGE_TYPE_HD: 7,
  STORAGE_TYPE_OTHER: 254
};

/**
 * optional bool video_on = 1;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.Status.prototype.getVideoOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setVideoOn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool photo_interval_on = 2;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.Status.prototype.getPhotoIntervalOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setPhotoIntervalOn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float used_storage_mib = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Status.prototype.getUsedStorageMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setUsedStorageMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float available_storage_mib = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Status.prototype.getAvailableStorageMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setAvailableStorageMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float total_storage_mib = 5;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Status.prototype.getTotalStorageMib = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setTotalStorageMib = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float recording_time_s = 6;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Status.prototype.getRecordingTimeS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setRecordingTimeS = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string media_folder_name = 7;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Status.prototype.getMediaFolderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setMediaFolderName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional StorageStatus storage_status = 8;
 * @return {!proto.mavsdk.rpc.camera.Status.StorageStatus}
 */
proto.mavsdk.rpc.camera.Status.prototype.getStorageStatus = function() {
  return /** @type {!proto.mavsdk.rpc.camera.Status.StorageStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.Status.StorageStatus} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setStorageStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional uint32 storage_id = 9;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Status.prototype.getStorageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setStorageId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional StorageType storage_type = 10;
 * @return {!proto.mavsdk.rpc.camera.Status.StorageType}
 */
proto.mavsdk.rpc.camera.Status.prototype.getStorageType = function() {
  return /** @type {!proto.mavsdk.rpc.camera.Status.StorageType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.mavsdk.rpc.camera.Status.StorageType} value
 * @return {!proto.mavsdk.rpc.camera.Status} returns this
 */
proto.mavsdk.rpc.camera.Status.prototype.setStorageType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
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
proto.mavsdk.rpc.camera.Option.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.Option.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.Option} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Option.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optionDescription: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.mavsdk.rpc.camera.Option}
 */
proto.mavsdk.rpc.camera.Option.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.Option;
  return proto.mavsdk.rpc.camera.Option.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.Option} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.Option}
 */
proto.mavsdk.rpc.camera.Option.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionDescription(value);
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
proto.mavsdk.rpc.camera.Option.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.Option.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.Option} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Option.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string option_id = 1;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Option.prototype.getOptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Option} returns this
 */
proto.mavsdk.rpc.camera.Option.prototype.setOptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string option_description = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Option.prototype.getOptionDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Option} returns this
 */
proto.mavsdk.rpc.camera.Option.prototype.setOptionDescription = function(value) {
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
proto.mavsdk.rpc.camera.Setting.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.Setting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.Setting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Setting.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settingDescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
    option: (f = msg.getOption()) && proto.mavsdk.rpc.camera.Option.toObject(includeInstance, f),
    isRange: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.mavsdk.rpc.camera.Setting}
 */
proto.mavsdk.rpc.camera.Setting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.Setting;
  return proto.mavsdk.rpc.camera.Setting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.Setting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.Setting}
 */
proto.mavsdk.rpc.camera.Setting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettingId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettingDescription(value);
      break;
    case 3:
      var value = new proto.mavsdk.rpc.camera.Option;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Option.deserializeBinaryFromReader);
      msg.setOption(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRange(value);
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
proto.mavsdk.rpc.camera.Setting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.Setting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.Setting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Setting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettingDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOption();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mavsdk.rpc.camera.Option.serializeBinaryToWriter
    );
  }
  f = message.getIsRange();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string setting_id = 1;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Setting.prototype.getSettingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Setting} returns this
 */
proto.mavsdk.rpc.camera.Setting.prototype.setSettingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string setting_description = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Setting.prototype.getSettingDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Setting} returns this
 */
proto.mavsdk.rpc.camera.Setting.prototype.setSettingDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Option option = 3;
 * @return {?proto.mavsdk.rpc.camera.Option}
 */
proto.mavsdk.rpc.camera.Setting.prototype.getOption = function() {
  return /** @type{?proto.mavsdk.rpc.camera.Option} */ (
    jspb.Message.getWrapperField(this, proto.mavsdk.rpc.camera.Option, 3));
};


/**
 * @param {?proto.mavsdk.rpc.camera.Option|undefined} value
 * @return {!proto.mavsdk.rpc.camera.Setting} returns this
*/
proto.mavsdk.rpc.camera.Setting.prototype.setOption = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mavsdk.rpc.camera.Setting} returns this
 */
proto.mavsdk.rpc.camera.Setting.prototype.clearOption = function() {
  return this.setOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.Setting.prototype.hasOption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_range = 4;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.Setting.prototype.getIsRange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera.Setting} returns this
 */
proto.mavsdk.rpc.camera.Setting.prototype.setIsRange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mavsdk.rpc.camera.SettingOptions.repeatedFields_ = [3];



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
proto.mavsdk.rpc.camera.SettingOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.SettingOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.SettingOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SettingOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settingDescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.mavsdk.rpc.camera.Option.toObject, includeInstance),
    isRange: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.mavsdk.rpc.camera.SettingOptions}
 */
proto.mavsdk.rpc.camera.SettingOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.SettingOptions;
  return proto.mavsdk.rpc.camera.SettingOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.SettingOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.SettingOptions}
 */
proto.mavsdk.rpc.camera.SettingOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettingId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettingDescription(value);
      break;
    case 3:
      var value = new proto.mavsdk.rpc.camera.Option;
      reader.readMessage(value,proto.mavsdk.rpc.camera.Option.deserializeBinaryFromReader);
      msg.addOptions(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRange(value);
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
proto.mavsdk.rpc.camera.SettingOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.SettingOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.SettingOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.SettingOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettingDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.mavsdk.rpc.camera.Option.serializeBinaryToWriter
    );
  }
  f = message.getIsRange();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string setting_id = 1;
 * @return {string}
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.getSettingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.SettingOptions} returns this
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.setSettingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string setting_description = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.getSettingDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.SettingOptions} returns this
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.setSettingDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Option options = 3;
 * @return {!Array<!proto.mavsdk.rpc.camera.Option>}
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.getOptionsList = function() {
  return /** @type{!Array<!proto.mavsdk.rpc.camera.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mavsdk.rpc.camera.Option, 3));
};


/**
 * @param {!Array<!proto.mavsdk.rpc.camera.Option>} value
 * @return {!proto.mavsdk.rpc.camera.SettingOptions} returns this
*/
proto.mavsdk.rpc.camera.SettingOptions.prototype.setOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.mavsdk.rpc.camera.Option=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mavsdk.rpc.camera.Option}
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.addOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.mavsdk.rpc.camera.Option, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mavsdk.rpc.camera.SettingOptions} returns this
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional bool is_range = 4;
 * @return {boolean}
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.getIsRange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mavsdk.rpc.camera.SettingOptions} returns this
 */
proto.mavsdk.rpc.camera.SettingOptions.prototype.setIsRange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.mavsdk.rpc.camera.Information.prototype.toObject = function(opt_includeInstance) {
  return proto.mavsdk.rpc.camera.Information.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mavsdk.rpc.camera.Information} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Information.toObject = function(includeInstance, msg) {
  var f, obj = {
    vendorName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    focalLengthMm: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    horizontalSensorSizeMm: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    verticalSensorSizeMm: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    horizontalResolutionPx: jspb.Message.getFieldWithDefault(msg, 6, 0),
    verticalResolutionPx: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.mavsdk.rpc.camera.Information}
 */
proto.mavsdk.rpc.camera.Information.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mavsdk.rpc.camera.Information;
  return proto.mavsdk.rpc.camera.Information.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mavsdk.rpc.camera.Information} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mavsdk.rpc.camera.Information}
 */
proto.mavsdk.rpc.camera.Information.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFocalLengthMm(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHorizontalSensorSizeMm(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVerticalSensorSizeMm(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHorizontalResolutionPx(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVerticalResolutionPx(value);
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
proto.mavsdk.rpc.camera.Information.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mavsdk.rpc.camera.Information.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mavsdk.rpc.camera.Information} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mavsdk.rpc.camera.Information.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFocalLengthMm();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getHorizontalSensorSizeMm();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getVerticalSensorSizeMm();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHorizontalResolutionPx();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getVerticalResolutionPx();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional string vendor_name = 1;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Information.prototype.getVendorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setVendorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_name = 2;
 * @return {string}
 */
proto.mavsdk.rpc.camera.Information.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float focal_length_mm = 3;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Information.prototype.getFocalLengthMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setFocalLengthMm = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float horizontal_sensor_size_mm = 4;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Information.prototype.getHorizontalSensorSizeMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setHorizontalSensorSizeMm = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float vertical_sensor_size_mm = 5;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Information.prototype.getVerticalSensorSizeMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setVerticalSensorSizeMm = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint32 horizontal_resolution_px = 6;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Information.prototype.getHorizontalResolutionPx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setHorizontalResolutionPx = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 vertical_resolution_px = 7;
 * @return {number}
 */
proto.mavsdk.rpc.camera.Information.prototype.getVerticalResolutionPx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.mavsdk.rpc.camera.Information} returns this
 */
proto.mavsdk.rpc.camera.Information.prototype.setVerticalResolutionPx = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera.Mode = {
  MODE_UNKNOWN: 0,
  MODE_PHOTO: 1,
  MODE_VIDEO: 2
};

/**
 * @enum {number}
 */
proto.mavsdk.rpc.camera.PhotosRange = {
  PHOTOS_RANGE_ALL: 0,
  PHOTOS_RANGE_SINCE_CONNECTION: 1
};

goog.object.extend(exports, proto.mavsdk.rpc.camera);


// fix autocompletion
module.exports = exports;
