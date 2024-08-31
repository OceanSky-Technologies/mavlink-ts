/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "camera/camera.proto" (package "mavsdk.rpc.camera", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { CameraService } from "./camera";
import type { FocusRangeResponse } from "./camera";
import type { FocusRangeRequest } from "./camera";
import type { FocusStopResponse } from "./camera";
import type { FocusStopRequest } from "./camera";
import type { FocusOutStartResponse } from "./camera";
import type { FocusOutStartRequest } from "./camera";
import type { FocusInStartResponse } from "./camera";
import type { FocusInStartRequest } from "./camera";
import type { TrackStopResponse } from "./camera";
import type { TrackStopRequest } from "./camera";
import type { TrackRectangleResponse } from "./camera";
import type { TrackRectangleRequest } from "./camera";
import type { TrackPointResponse } from "./camera";
import type { TrackPointRequest } from "./camera";
import type { ZoomRangeResponse } from "./camera";
import type { ZoomRangeRequest } from "./camera";
import type { ZoomStopResponse } from "./camera";
import type { ZoomStopRequest } from "./camera";
import type { ZoomOutStartResponse } from "./camera";
import type { ZoomOutStartRequest } from "./camera";
import type { ZoomInStartResponse } from "./camera";
import type { ZoomInStartRequest } from "./camera";
import type { ResetSettingsResponse } from "./camera";
import type { ResetSettingsRequest } from "./camera";
import type { SelectCameraResponse } from "./camera";
import type { SelectCameraRequest } from "./camera";
import type { FormatStorageResponse } from "./camera";
import type { FormatStorageRequest } from "./camera";
import type { GetSettingResponse } from "./camera";
import type { GetSettingRequest } from "./camera";
import type { SetSettingResponse } from "./camera";
import type { SetSettingRequest } from "./camera";
import type { PossibleSettingOptionsResponse } from "./camera";
import type { SubscribePossibleSettingOptionsRequest } from "./camera";
import type { CurrentSettingsResponse } from "./camera";
import type { SubscribeCurrentSettingsRequest } from "./camera";
import type { StatusResponse } from "./camera";
import type { SubscribeStatusRequest } from "./camera";
import type { CaptureInfoResponse } from "./camera";
import type { SubscribeCaptureInfoRequest } from "./camera";
import type { VideoStreamInfoResponse } from "./camera";
import type { SubscribeVideoStreamInfoRequest } from "./camera";
import type { InformationResponse } from "./camera";
import type { SubscribeInformationRequest } from "./camera";
import type { ModeResponse } from "./camera";
import type { SubscribeModeRequest } from "./camera";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { ListPhotosResponse } from "./camera";
import type { ListPhotosRequest } from "./camera";
import type { SetModeResponse } from "./camera";
import type { SetModeRequest } from "./camera";
import type { StopVideoStreamingResponse } from "./camera";
import type { StopVideoStreamingRequest } from "./camera";
import type { StartVideoStreamingResponse } from "./camera";
import type { StartVideoStreamingRequest } from "./camera";
import type { StopVideoResponse } from "./camera";
import type { StopVideoRequest } from "./camera";
import type { StartVideoResponse } from "./camera";
import type { StartVideoRequest } from "./camera";
import type { StopPhotoIntervalResponse } from "./camera";
import type { StopPhotoIntervalRequest } from "./camera";
import type { StartPhotoIntervalResponse } from "./camera";
import type { StartPhotoIntervalRequest } from "./camera";
import type { TakePhotoResponse } from "./camera";
import type { TakePhotoRequest } from "./camera";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PrepareResponse } from "./camera";
import type { PrepareRequest } from "./camera";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 *
 * Can be used to manage cameras that implement the MAVLink
 * Camera Protocol: https://mavlink.io/en/protocol/camera.html.
 *
 * Currently only a single camera is supported.
 * When multiple cameras are supported the plugin will need to be
 * instantiated separately for every camera and the camera selected using
 * `select_camera`.
 *
 * @generated from protobuf service mavsdk.rpc.camera.CameraService
 */
export interface ICameraServiceClient {
    /**
     *
     * Prepare the camera plugin (e.g. download the camera definition, etc).
     *
     * @generated from protobuf rpc: Prepare(mavsdk.rpc.camera.PrepareRequest) returns (mavsdk.rpc.camera.PrepareResponse);
     */
    prepare(input: PrepareRequest, options?: RpcOptions): UnaryCall<PrepareRequest, PrepareResponse>;
    /**
     *
     * Take one photo.
     *
     * @generated from protobuf rpc: TakePhoto(mavsdk.rpc.camera.TakePhotoRequest) returns (mavsdk.rpc.camera.TakePhotoResponse);
     */
    takePhoto(input: TakePhotoRequest, options?: RpcOptions): UnaryCall<TakePhotoRequest, TakePhotoResponse>;
    /**
     *
     * Start photo timelapse with a given interval.
     *
     * @generated from protobuf rpc: StartPhotoInterval(mavsdk.rpc.camera.StartPhotoIntervalRequest) returns (mavsdk.rpc.camera.StartPhotoIntervalResponse);
     */
    startPhotoInterval(input: StartPhotoIntervalRequest, options?: RpcOptions): UnaryCall<StartPhotoIntervalRequest, StartPhotoIntervalResponse>;
    /**
     *
     * Stop a running photo timelapse.
     *
     * @generated from protobuf rpc: StopPhotoInterval(mavsdk.rpc.camera.StopPhotoIntervalRequest) returns (mavsdk.rpc.camera.StopPhotoIntervalResponse);
     */
    stopPhotoInterval(input: StopPhotoIntervalRequest, options?: RpcOptions): UnaryCall<StopPhotoIntervalRequest, StopPhotoIntervalResponse>;
    /**
     *
     * Start a video recording.
     *
     * @generated from protobuf rpc: StartVideo(mavsdk.rpc.camera.StartVideoRequest) returns (mavsdk.rpc.camera.StartVideoResponse);
     */
    startVideo(input: StartVideoRequest, options?: RpcOptions): UnaryCall<StartVideoRequest, StartVideoResponse>;
    /**
     *
     * Stop a running video recording.
     *
     * @generated from protobuf rpc: StopVideo(mavsdk.rpc.camera.StopVideoRequest) returns (mavsdk.rpc.camera.StopVideoResponse);
     */
    stopVideo(input: StopVideoRequest, options?: RpcOptions): UnaryCall<StopVideoRequest, StopVideoResponse>;
    /**
     *
     * Start video streaming.
     *
     * @generated from protobuf rpc: StartVideoStreaming(mavsdk.rpc.camera.StartVideoStreamingRequest) returns (mavsdk.rpc.camera.StartVideoStreamingResponse);
     */
    startVideoStreaming(input: StartVideoStreamingRequest, options?: RpcOptions): UnaryCall<StartVideoStreamingRequest, StartVideoStreamingResponse>;
    /**
     *
     * Stop current video streaming.
     *
     * @generated from protobuf rpc: StopVideoStreaming(mavsdk.rpc.camera.StopVideoStreamingRequest) returns (mavsdk.rpc.camera.StopVideoStreamingResponse);
     */
    stopVideoStreaming(input: StopVideoStreamingRequest, options?: RpcOptions): UnaryCall<StopVideoStreamingRequest, StopVideoStreamingResponse>;
    /**
     *
     * Set camera mode.
     *
     * @generated from protobuf rpc: SetMode(mavsdk.rpc.camera.SetModeRequest) returns (mavsdk.rpc.camera.SetModeResponse);
     */
    setMode(input: SetModeRequest, options?: RpcOptions): UnaryCall<SetModeRequest, SetModeResponse>;
    /**
     *
     * List photos available on the camera.
     *
     * @generated from protobuf rpc: ListPhotos(mavsdk.rpc.camera.ListPhotosRequest) returns (mavsdk.rpc.camera.ListPhotosResponse);
     */
    listPhotos(input: ListPhotosRequest, options?: RpcOptions): UnaryCall<ListPhotosRequest, ListPhotosResponse>;
    /**
     *
     * Subscribe to camera mode updates.
     *
     * @generated from protobuf rpc: SubscribeMode(mavsdk.rpc.camera.SubscribeModeRequest) returns (stream mavsdk.rpc.camera.ModeResponse);
     */
    subscribeMode(input: SubscribeModeRequest, options?: RpcOptions): ServerStreamingCall<SubscribeModeRequest, ModeResponse>;
    /**
     *
     * Subscribe to camera information updates.
     *
     * @generated from protobuf rpc: SubscribeInformation(mavsdk.rpc.camera.SubscribeInformationRequest) returns (stream mavsdk.rpc.camera.InformationResponse);
     */
    subscribeInformation(input: SubscribeInformationRequest, options?: RpcOptions): ServerStreamingCall<SubscribeInformationRequest, InformationResponse>;
    /**
     *
     * Subscribe to video stream info updates.
     *
     * @generated from protobuf rpc: SubscribeVideoStreamInfo(mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest) returns (stream mavsdk.rpc.camera.VideoStreamInfoResponse);
     */
    subscribeVideoStreamInfo(input: SubscribeVideoStreamInfoRequest, options?: RpcOptions): ServerStreamingCall<SubscribeVideoStreamInfoRequest, VideoStreamInfoResponse>;
    /**
     *
     * Subscribe to capture info updates.
     *
     * @generated from protobuf rpc: SubscribeCaptureInfo(mavsdk.rpc.camera.SubscribeCaptureInfoRequest) returns (stream mavsdk.rpc.camera.CaptureInfoResponse);
     */
    subscribeCaptureInfo(input: SubscribeCaptureInfoRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCaptureInfoRequest, CaptureInfoResponse>;
    /**
     *
     * Subscribe to camera status updates.
     *
     * @generated from protobuf rpc: SubscribeStatus(mavsdk.rpc.camera.SubscribeStatusRequest) returns (stream mavsdk.rpc.camera.StatusResponse);
     */
    subscribeStatus(input: SubscribeStatusRequest, options?: RpcOptions): ServerStreamingCall<SubscribeStatusRequest, StatusResponse>;
    /**
     *
     * Get the list of current camera settings.
     *
     * @generated from protobuf rpc: SubscribeCurrentSettings(mavsdk.rpc.camera.SubscribeCurrentSettingsRequest) returns (stream mavsdk.rpc.camera.CurrentSettingsResponse);
     */
    subscribeCurrentSettings(input: SubscribeCurrentSettingsRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCurrentSettingsRequest, CurrentSettingsResponse>;
    /**
     *
     * Get the list of settings that can be changed.
     *
     * @generated from protobuf rpc: SubscribePossibleSettingOptions(mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest) returns (stream mavsdk.rpc.camera.PossibleSettingOptionsResponse);
     */
    subscribePossibleSettingOptions(input: SubscribePossibleSettingOptionsRequest, options?: RpcOptions): ServerStreamingCall<SubscribePossibleSettingOptionsRequest, PossibleSettingOptionsResponse>;
    /**
     *
     * Set a setting to some value.
     *
     * Only setting_id of setting and option_id of option needs to be set.
     *
     * @generated from protobuf rpc: SetSetting(mavsdk.rpc.camera.SetSettingRequest) returns (mavsdk.rpc.camera.SetSettingResponse);
     */
    setSetting(input: SetSettingRequest, options?: RpcOptions): UnaryCall<SetSettingRequest, SetSettingResponse>;
    /**
     *
     * Get a setting.
     *
     * Only setting_id of setting needs to be set.
     *
     * @generated from protobuf rpc: GetSetting(mavsdk.rpc.camera.GetSettingRequest) returns (mavsdk.rpc.camera.GetSettingResponse);
     */
    getSetting(input: GetSettingRequest, options?: RpcOptions): UnaryCall<GetSettingRequest, GetSettingResponse>;
    /**
     *
     * Format storage (e.g. SD card) in camera.
     *
     * This will delete all content of the camera storage!
     *
     * @generated from protobuf rpc: FormatStorage(mavsdk.rpc.camera.FormatStorageRequest) returns (mavsdk.rpc.camera.FormatStorageResponse);
     */
    formatStorage(input: FormatStorageRequest, options?: RpcOptions): UnaryCall<FormatStorageRequest, FormatStorageResponse>;
    /**
     *
     * Select current camera .
     *
     * Bind the plugin instance to a specific camera_id
     *
     * @generated from protobuf rpc: SelectCamera(mavsdk.rpc.camera.SelectCameraRequest) returns (mavsdk.rpc.camera.SelectCameraResponse);
     */
    selectCamera(input: SelectCameraRequest, options?: RpcOptions): UnaryCall<SelectCameraRequest, SelectCameraResponse>;
    /**
     *
     * Reset all settings in camera.
     *
     * This will reset all camera settings to default value
     *
     * @generated from protobuf rpc: ResetSettings(mavsdk.rpc.camera.ResetSettingsRequest) returns (mavsdk.rpc.camera.ResetSettingsResponse);
     */
    resetSettings(input: ResetSettingsRequest, options?: RpcOptions): UnaryCall<ResetSettingsRequest, ResetSettingsResponse>;
    /**
     *
     * Start zooming in.
     *
     * @generated from protobuf rpc: ZoomInStart(mavsdk.rpc.camera.ZoomInStartRequest) returns (mavsdk.rpc.camera.ZoomInStartResponse);
     */
    zoomInStart(input: ZoomInStartRequest, options?: RpcOptions): UnaryCall<ZoomInStartRequest, ZoomInStartResponse>;
    /**
     *
     * Start zooming out.
     *
     * @generated from protobuf rpc: ZoomOutStart(mavsdk.rpc.camera.ZoomOutStartRequest) returns (mavsdk.rpc.camera.ZoomOutStartResponse);
     */
    zoomOutStart(input: ZoomOutStartRequest, options?: RpcOptions): UnaryCall<ZoomOutStartRequest, ZoomOutStartResponse>;
    /**
     *
     * Stop zooming.
     *
     * @generated from protobuf rpc: ZoomStop(mavsdk.rpc.camera.ZoomStopRequest) returns (mavsdk.rpc.camera.ZoomStopResponse);
     */
    zoomStop(input: ZoomStopRequest, options?: RpcOptions): UnaryCall<ZoomStopRequest, ZoomStopResponse>;
    /**
     *
     * Zoom to value as proportion of full camera range (percentage between 0.0 and 100.0).
     *
     * @generated from protobuf rpc: ZoomRange(mavsdk.rpc.camera.ZoomRangeRequest) returns (mavsdk.rpc.camera.ZoomRangeResponse);
     */
    zoomRange(input: ZoomRangeRequest, options?: RpcOptions): UnaryCall<ZoomRangeRequest, ZoomRangeResponse>;
    /**
     *
     * Track point.
     *
     * @generated from protobuf rpc: TrackPoint(mavsdk.rpc.camera.TrackPointRequest) returns (mavsdk.rpc.camera.TrackPointResponse);
     */
    trackPoint(input: TrackPointRequest, options?: RpcOptions): UnaryCall<TrackPointRequest, TrackPointResponse>;
    /**
     *
     * Track rectangle.
     *
     * @generated from protobuf rpc: TrackRectangle(mavsdk.rpc.camera.TrackRectangleRequest) returns (mavsdk.rpc.camera.TrackRectangleResponse);
     */
    trackRectangle(input: TrackRectangleRequest, options?: RpcOptions): UnaryCall<TrackRectangleRequest, TrackRectangleResponse>;
    /**
     *
     * Stop tracking.
     *
     * @generated from protobuf rpc: TrackStop(mavsdk.rpc.camera.TrackStopRequest) returns (mavsdk.rpc.camera.TrackStopResponse);
     */
    trackStop(input: TrackStopRequest, options?: RpcOptions): UnaryCall<TrackStopRequest, TrackStopResponse>;
    /**
     *
     * Start focusing in.
     *
     * @generated from protobuf rpc: FocusInStart(mavsdk.rpc.camera.FocusInStartRequest) returns (mavsdk.rpc.camera.FocusInStartResponse);
     */
    focusInStart(input: FocusInStartRequest, options?: RpcOptions): UnaryCall<FocusInStartRequest, FocusInStartResponse>;
    /**
     *
     * Start focusing out.
     *
     * @generated from protobuf rpc: FocusOutStart(mavsdk.rpc.camera.FocusOutStartRequest) returns (mavsdk.rpc.camera.FocusOutStartResponse);
     */
    focusOutStart(input: FocusOutStartRequest, options?: RpcOptions): UnaryCall<FocusOutStartRequest, FocusOutStartResponse>;
    /**
     *
     * Stop focus.
     *
     * @generated from protobuf rpc: FocusStop(mavsdk.rpc.camera.FocusStopRequest) returns (mavsdk.rpc.camera.FocusStopResponse);
     */
    focusStop(input: FocusStopRequest, options?: RpcOptions): UnaryCall<FocusStopRequest, FocusStopResponse>;
    /**
     *
     * Focus with range value of full range (value between 0.0 and 100.0).
     *
     * @generated from protobuf rpc: FocusRange(mavsdk.rpc.camera.FocusRangeRequest) returns (mavsdk.rpc.camera.FocusRangeResponse);
     */
    focusRange(input: FocusRangeRequest, options?: RpcOptions): UnaryCall<FocusRangeRequest, FocusRangeResponse>;
}
/**
 *
 * Can be used to manage cameras that implement the MAVLink
 * Camera Protocol: https://mavlink.io/en/protocol/camera.html.
 *
 * Currently only a single camera is supported.
 * When multiple cameras are supported the plugin will need to be
 * instantiated separately for every camera and the camera selected using
 * `select_camera`.
 *
 * @generated from protobuf service mavsdk.rpc.camera.CameraService
 */
export class CameraServiceClient implements ICameraServiceClient, ServiceInfo {
    typeName = CameraService.typeName;
    methods = CameraService.methods;
    options = CameraService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Prepare the camera plugin (e.g. download the camera definition, etc).
     *
     * @generated from protobuf rpc: Prepare(mavsdk.rpc.camera.PrepareRequest) returns (mavsdk.rpc.camera.PrepareResponse);
     */
    prepare(input: PrepareRequest, options?: RpcOptions): UnaryCall<PrepareRequest, PrepareResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<PrepareRequest, PrepareResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Take one photo.
     *
     * @generated from protobuf rpc: TakePhoto(mavsdk.rpc.camera.TakePhotoRequest) returns (mavsdk.rpc.camera.TakePhotoResponse);
     */
    takePhoto(input: TakePhotoRequest, options?: RpcOptions): UnaryCall<TakePhotoRequest, TakePhotoResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<TakePhotoRequest, TakePhotoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start photo timelapse with a given interval.
     *
     * @generated from protobuf rpc: StartPhotoInterval(mavsdk.rpc.camera.StartPhotoIntervalRequest) returns (mavsdk.rpc.camera.StartPhotoIntervalResponse);
     */
    startPhotoInterval(input: StartPhotoIntervalRequest, options?: RpcOptions): UnaryCall<StartPhotoIntervalRequest, StartPhotoIntervalResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<StartPhotoIntervalRequest, StartPhotoIntervalResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Stop a running photo timelapse.
     *
     * @generated from protobuf rpc: StopPhotoInterval(mavsdk.rpc.camera.StopPhotoIntervalRequest) returns (mavsdk.rpc.camera.StopPhotoIntervalResponse);
     */
    stopPhotoInterval(input: StopPhotoIntervalRequest, options?: RpcOptions): UnaryCall<StopPhotoIntervalRequest, StopPhotoIntervalResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<StopPhotoIntervalRequest, StopPhotoIntervalResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start a video recording.
     *
     * @generated from protobuf rpc: StartVideo(mavsdk.rpc.camera.StartVideoRequest) returns (mavsdk.rpc.camera.StartVideoResponse);
     */
    startVideo(input: StartVideoRequest, options?: RpcOptions): UnaryCall<StartVideoRequest, StartVideoResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<StartVideoRequest, StartVideoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Stop a running video recording.
     *
     * @generated from protobuf rpc: StopVideo(mavsdk.rpc.camera.StopVideoRequest) returns (mavsdk.rpc.camera.StopVideoResponse);
     */
    stopVideo(input: StopVideoRequest, options?: RpcOptions): UnaryCall<StopVideoRequest, StopVideoResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<StopVideoRequest, StopVideoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start video streaming.
     *
     * @generated from protobuf rpc: StartVideoStreaming(mavsdk.rpc.camera.StartVideoStreamingRequest) returns (mavsdk.rpc.camera.StartVideoStreamingResponse);
     */
    startVideoStreaming(input: StartVideoStreamingRequest, options?: RpcOptions): UnaryCall<StartVideoStreamingRequest, StartVideoStreamingResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<StartVideoStreamingRequest, StartVideoStreamingResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Stop current video streaming.
     *
     * @generated from protobuf rpc: StopVideoStreaming(mavsdk.rpc.camera.StopVideoStreamingRequest) returns (mavsdk.rpc.camera.StopVideoStreamingResponse);
     */
    stopVideoStreaming(input: StopVideoStreamingRequest, options?: RpcOptions): UnaryCall<StopVideoStreamingRequest, StopVideoStreamingResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<StopVideoStreamingRequest, StopVideoStreamingResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set camera mode.
     *
     * @generated from protobuf rpc: SetMode(mavsdk.rpc.camera.SetModeRequest) returns (mavsdk.rpc.camera.SetModeResponse);
     */
    setMode(input: SetModeRequest, options?: RpcOptions): UnaryCall<SetModeRequest, SetModeResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetModeRequest, SetModeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * List photos available on the camera.
     *
     * @generated from protobuf rpc: ListPhotos(mavsdk.rpc.camera.ListPhotosRequest) returns (mavsdk.rpc.camera.ListPhotosResponse);
     */
    listPhotos(input: ListPhotosRequest, options?: RpcOptions): UnaryCall<ListPhotosRequest, ListPhotosResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListPhotosRequest, ListPhotosResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to camera mode updates.
     *
     * @generated from protobuf rpc: SubscribeMode(mavsdk.rpc.camera.SubscribeModeRequest) returns (stream mavsdk.rpc.camera.ModeResponse);
     */
    subscribeMode(input: SubscribeModeRequest, options?: RpcOptions): ServerStreamingCall<SubscribeModeRequest, ModeResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeModeRequest, ModeResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to camera information updates.
     *
     * @generated from protobuf rpc: SubscribeInformation(mavsdk.rpc.camera.SubscribeInformationRequest) returns (stream mavsdk.rpc.camera.InformationResponse);
     */
    subscribeInformation(input: SubscribeInformationRequest, options?: RpcOptions): ServerStreamingCall<SubscribeInformationRequest, InformationResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeInformationRequest, InformationResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to video stream info updates.
     *
     * @generated from protobuf rpc: SubscribeVideoStreamInfo(mavsdk.rpc.camera.SubscribeVideoStreamInfoRequest) returns (stream mavsdk.rpc.camera.VideoStreamInfoResponse);
     */
    subscribeVideoStreamInfo(input: SubscribeVideoStreamInfoRequest, options?: RpcOptions): ServerStreamingCall<SubscribeVideoStreamInfoRequest, VideoStreamInfoResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeVideoStreamInfoRequest, VideoStreamInfoResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to capture info updates.
     *
     * @generated from protobuf rpc: SubscribeCaptureInfo(mavsdk.rpc.camera.SubscribeCaptureInfoRequest) returns (stream mavsdk.rpc.camera.CaptureInfoResponse);
     */
    subscribeCaptureInfo(input: SubscribeCaptureInfoRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCaptureInfoRequest, CaptureInfoResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCaptureInfoRequest, CaptureInfoResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to camera status updates.
     *
     * @generated from protobuf rpc: SubscribeStatus(mavsdk.rpc.camera.SubscribeStatusRequest) returns (stream mavsdk.rpc.camera.StatusResponse);
     */
    subscribeStatus(input: SubscribeStatusRequest, options?: RpcOptions): ServerStreamingCall<SubscribeStatusRequest, StatusResponse> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeStatusRequest, StatusResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Get the list of current camera settings.
     *
     * @generated from protobuf rpc: SubscribeCurrentSettings(mavsdk.rpc.camera.SubscribeCurrentSettingsRequest) returns (stream mavsdk.rpc.camera.CurrentSettingsResponse);
     */
    subscribeCurrentSettings(input: SubscribeCurrentSettingsRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCurrentSettingsRequest, CurrentSettingsResponse> {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCurrentSettingsRequest, CurrentSettingsResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Get the list of settings that can be changed.
     *
     * @generated from protobuf rpc: SubscribePossibleSettingOptions(mavsdk.rpc.camera.SubscribePossibleSettingOptionsRequest) returns (stream mavsdk.rpc.camera.PossibleSettingOptionsResponse);
     */
    subscribePossibleSettingOptions(input: SubscribePossibleSettingOptionsRequest, options?: RpcOptions): ServerStreamingCall<SubscribePossibleSettingOptionsRequest, PossibleSettingOptionsResponse> {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribePossibleSettingOptionsRequest, PossibleSettingOptionsResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Set a setting to some value.
     *
     * Only setting_id of setting and option_id of option needs to be set.
     *
     * @generated from protobuf rpc: SetSetting(mavsdk.rpc.camera.SetSettingRequest) returns (mavsdk.rpc.camera.SetSettingResponse);
     */
    setSetting(input: SetSettingRequest, options?: RpcOptions): UnaryCall<SetSettingRequest, SetSettingResponse> {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetSettingRequest, SetSettingResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Get a setting.
     *
     * Only setting_id of setting needs to be set.
     *
     * @generated from protobuf rpc: GetSetting(mavsdk.rpc.camera.GetSettingRequest) returns (mavsdk.rpc.camera.GetSettingResponse);
     */
    getSetting(input: GetSettingRequest, options?: RpcOptions): UnaryCall<GetSettingRequest, GetSettingResponse> {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetSettingRequest, GetSettingResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Format storage (e.g. SD card) in camera.
     *
     * This will delete all content of the camera storage!
     *
     * @generated from protobuf rpc: FormatStorage(mavsdk.rpc.camera.FormatStorageRequest) returns (mavsdk.rpc.camera.FormatStorageResponse);
     */
    formatStorage(input: FormatStorageRequest, options?: RpcOptions): UnaryCall<FormatStorageRequest, FormatStorageResponse> {
        const method = this.methods[19], opt = this._transport.mergeOptions(options);
        return stackIntercept<FormatStorageRequest, FormatStorageResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Select current camera .
     *
     * Bind the plugin instance to a specific camera_id
     *
     * @generated from protobuf rpc: SelectCamera(mavsdk.rpc.camera.SelectCameraRequest) returns (mavsdk.rpc.camera.SelectCameraResponse);
     */
    selectCamera(input: SelectCameraRequest, options?: RpcOptions): UnaryCall<SelectCameraRequest, SelectCameraResponse> {
        const method = this.methods[20], opt = this._transport.mergeOptions(options);
        return stackIntercept<SelectCameraRequest, SelectCameraResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Reset all settings in camera.
     *
     * This will reset all camera settings to default value
     *
     * @generated from protobuf rpc: ResetSettings(mavsdk.rpc.camera.ResetSettingsRequest) returns (mavsdk.rpc.camera.ResetSettingsResponse);
     */
    resetSettings(input: ResetSettingsRequest, options?: RpcOptions): UnaryCall<ResetSettingsRequest, ResetSettingsResponse> {
        const method = this.methods[21], opt = this._transport.mergeOptions(options);
        return stackIntercept<ResetSettingsRequest, ResetSettingsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start zooming in.
     *
     * @generated from protobuf rpc: ZoomInStart(mavsdk.rpc.camera.ZoomInStartRequest) returns (mavsdk.rpc.camera.ZoomInStartResponse);
     */
    zoomInStart(input: ZoomInStartRequest, options?: RpcOptions): UnaryCall<ZoomInStartRequest, ZoomInStartResponse> {
        const method = this.methods[22], opt = this._transport.mergeOptions(options);
        return stackIntercept<ZoomInStartRequest, ZoomInStartResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start zooming out.
     *
     * @generated from protobuf rpc: ZoomOutStart(mavsdk.rpc.camera.ZoomOutStartRequest) returns (mavsdk.rpc.camera.ZoomOutStartResponse);
     */
    zoomOutStart(input: ZoomOutStartRequest, options?: RpcOptions): UnaryCall<ZoomOutStartRequest, ZoomOutStartResponse> {
        const method = this.methods[23], opt = this._transport.mergeOptions(options);
        return stackIntercept<ZoomOutStartRequest, ZoomOutStartResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Stop zooming.
     *
     * @generated from protobuf rpc: ZoomStop(mavsdk.rpc.camera.ZoomStopRequest) returns (mavsdk.rpc.camera.ZoomStopResponse);
     */
    zoomStop(input: ZoomStopRequest, options?: RpcOptions): UnaryCall<ZoomStopRequest, ZoomStopResponse> {
        const method = this.methods[24], opt = this._transport.mergeOptions(options);
        return stackIntercept<ZoomStopRequest, ZoomStopResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Zoom to value as proportion of full camera range (percentage between 0.0 and 100.0).
     *
     * @generated from protobuf rpc: ZoomRange(mavsdk.rpc.camera.ZoomRangeRequest) returns (mavsdk.rpc.camera.ZoomRangeResponse);
     */
    zoomRange(input: ZoomRangeRequest, options?: RpcOptions): UnaryCall<ZoomRangeRequest, ZoomRangeResponse> {
        const method = this.methods[25], opt = this._transport.mergeOptions(options);
        return stackIntercept<ZoomRangeRequest, ZoomRangeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Track point.
     *
     * @generated from protobuf rpc: TrackPoint(mavsdk.rpc.camera.TrackPointRequest) returns (mavsdk.rpc.camera.TrackPointResponse);
     */
    trackPoint(input: TrackPointRequest, options?: RpcOptions): UnaryCall<TrackPointRequest, TrackPointResponse> {
        const method = this.methods[26], opt = this._transport.mergeOptions(options);
        return stackIntercept<TrackPointRequest, TrackPointResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Track rectangle.
     *
     * @generated from protobuf rpc: TrackRectangle(mavsdk.rpc.camera.TrackRectangleRequest) returns (mavsdk.rpc.camera.TrackRectangleResponse);
     */
    trackRectangle(input: TrackRectangleRequest, options?: RpcOptions): UnaryCall<TrackRectangleRequest, TrackRectangleResponse> {
        const method = this.methods[27], opt = this._transport.mergeOptions(options);
        return stackIntercept<TrackRectangleRequest, TrackRectangleResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Stop tracking.
     *
     * @generated from protobuf rpc: TrackStop(mavsdk.rpc.camera.TrackStopRequest) returns (mavsdk.rpc.camera.TrackStopResponse);
     */
    trackStop(input: TrackStopRequest, options?: RpcOptions): UnaryCall<TrackStopRequest, TrackStopResponse> {
        const method = this.methods[28], opt = this._transport.mergeOptions(options);
        return stackIntercept<TrackStopRequest, TrackStopResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start focusing in.
     *
     * @generated from protobuf rpc: FocusInStart(mavsdk.rpc.camera.FocusInStartRequest) returns (mavsdk.rpc.camera.FocusInStartResponse);
     */
    focusInStart(input: FocusInStartRequest, options?: RpcOptions): UnaryCall<FocusInStartRequest, FocusInStartResponse> {
        const method = this.methods[29], opt = this._transport.mergeOptions(options);
        return stackIntercept<FocusInStartRequest, FocusInStartResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start focusing out.
     *
     * @generated from protobuf rpc: FocusOutStart(mavsdk.rpc.camera.FocusOutStartRequest) returns (mavsdk.rpc.camera.FocusOutStartResponse);
     */
    focusOutStart(input: FocusOutStartRequest, options?: RpcOptions): UnaryCall<FocusOutStartRequest, FocusOutStartResponse> {
        const method = this.methods[30], opt = this._transport.mergeOptions(options);
        return stackIntercept<FocusOutStartRequest, FocusOutStartResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Stop focus.
     *
     * @generated from protobuf rpc: FocusStop(mavsdk.rpc.camera.FocusStopRequest) returns (mavsdk.rpc.camera.FocusStopResponse);
     */
    focusStop(input: FocusStopRequest, options?: RpcOptions): UnaryCall<FocusStopRequest, FocusStopResponse> {
        const method = this.methods[31], opt = this._transport.mergeOptions(options);
        return stackIntercept<FocusStopRequest, FocusStopResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Focus with range value of full range (value between 0.0 and 100.0).
     *
     * @generated from protobuf rpc: FocusRange(mavsdk.rpc.camera.FocusRangeRequest) returns (mavsdk.rpc.camera.FocusRangeResponse);
     */
    focusRange(input: FocusRangeRequest, options?: RpcOptions): UnaryCall<FocusRangeRequest, FocusRangeResponse> {
        const method = this.methods[32], opt = this._transport.mergeOptions(options);
        return stackIntercept<FocusRangeRequest, FocusRangeResponse>("unary", this._transport, method, opt, input);
    }
}
