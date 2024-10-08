/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "mission/mission.proto" (package "mavsdk.rpc.mission", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MissionService } from "./mission";
import type { SetReturnToLaunchAfterMissionResponse } from "./mission";
import type { SetReturnToLaunchAfterMissionRequest } from "./mission";
import type { GetReturnToLaunchAfterMissionResponse } from "./mission";
import type { GetReturnToLaunchAfterMissionRequest } from "./mission";
import type { MissionProgressResponse } from "./mission";
import type { SubscribeMissionProgressRequest } from "./mission";
import type { IsMissionFinishedResponse } from "./mission";
import type { IsMissionFinishedRequest } from "./mission";
import type { SetCurrentMissionItemResponse } from "./mission";
import type { SetCurrentMissionItemRequest } from "./mission";
import type { ClearMissionResponse } from "./mission";
import type { ClearMissionRequest } from "./mission";
import type { PauseMissionResponse } from "./mission";
import type { PauseMissionRequest } from "./mission";
import type { StartMissionResponse } from "./mission";
import type { StartMissionRequest } from "./mission";
import type { CancelMissionDownloadResponse } from "./mission";
import type { CancelMissionDownloadRequest } from "./mission";
import type { DownloadMissionWithProgressResponse } from "./mission";
import type { SubscribeDownloadMissionWithProgressRequest } from "./mission";
import type { DownloadMissionResponse } from "./mission";
import type { DownloadMissionRequest } from "./mission";
import type { CancelMissionUploadResponse } from "./mission";
import type { CancelMissionUploadRequest } from "./mission";
import type { UploadMissionWithProgressResponse } from "./mission";
import type { SubscribeUploadMissionWithProgressRequest } from "./mission";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { UploadMissionResponse } from "./mission";
import type { UploadMissionRequest } from "./mission";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Enable waypoint missions.
 *
 * @generated from protobuf service mavsdk.rpc.mission.MissionService
 */
export interface IMissionServiceClient {
    /**
     *
     * Upload a list of mission items to the system.
     *
     * The mission items are uploaded to a drone. Once uploaded the mission can be started and
     * executed even if the connection is lost.
     *
     * @generated from protobuf rpc: UploadMission(mavsdk.rpc.mission.UploadMissionRequest) returns (mavsdk.rpc.mission.UploadMissionResponse);
     */
    uploadMission(input: UploadMissionRequest, options?: RpcOptions): UnaryCall<UploadMissionRequest, UploadMissionResponse>;
    /**
     *
     * Upload a list of mission items to the system and report upload progress.
     *
     * The mission items are uploaded to a drone. Once uploaded the mission can be started and
     * executed even if the connection is lost.
     *
     * @generated from protobuf rpc: SubscribeUploadMissionWithProgress(mavsdk.rpc.mission.SubscribeUploadMissionWithProgressRequest) returns (stream mavsdk.rpc.mission.UploadMissionWithProgressResponse);
     */
    subscribeUploadMissionWithProgress(input: SubscribeUploadMissionWithProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeUploadMissionWithProgressRequest, UploadMissionWithProgressResponse>;
    /**
     *
     * Cancel an ongoing mission upload.
     *
     * @generated from protobuf rpc: CancelMissionUpload(mavsdk.rpc.mission.CancelMissionUploadRequest) returns (mavsdk.rpc.mission.CancelMissionUploadResponse);
     */
    cancelMissionUpload(input: CancelMissionUploadRequest, options?: RpcOptions): UnaryCall<CancelMissionUploadRequest, CancelMissionUploadResponse>;
    /**
     *
     * Download a list of mission items from the system (asynchronous).
     *
     * Will fail if any of the downloaded mission items are not supported
     * by the MAVSDK API.
     *
     * @generated from protobuf rpc: DownloadMission(mavsdk.rpc.mission.DownloadMissionRequest) returns (mavsdk.rpc.mission.DownloadMissionResponse);
     */
    downloadMission(input: DownloadMissionRequest, options?: RpcOptions): UnaryCall<DownloadMissionRequest, DownloadMissionResponse>;
    /**
     *
     * Download a list of mission items from the system (asynchronous) and report progress.
     *
     * Will fail if any of the downloaded mission items are not supported
     * by the MAVSDK API.
     *
     * @generated from protobuf rpc: SubscribeDownloadMissionWithProgress(mavsdk.rpc.mission.SubscribeDownloadMissionWithProgressRequest) returns (stream mavsdk.rpc.mission.DownloadMissionWithProgressResponse);
     */
    subscribeDownloadMissionWithProgress(input: SubscribeDownloadMissionWithProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeDownloadMissionWithProgressRequest, DownloadMissionWithProgressResponse>;
    /**
     *
     * Cancel an ongoing mission download.
     *
     * @generated from protobuf rpc: CancelMissionDownload(mavsdk.rpc.mission.CancelMissionDownloadRequest) returns (mavsdk.rpc.mission.CancelMissionDownloadResponse);
     */
    cancelMissionDownload(input: CancelMissionDownloadRequest, options?: RpcOptions): UnaryCall<CancelMissionDownloadRequest, CancelMissionDownloadResponse>;
    /**
     *
     * Start the mission.
     *
     * A mission must be uploaded to the vehicle before this can be called.
     *
     * @generated from protobuf rpc: StartMission(mavsdk.rpc.mission.StartMissionRequest) returns (mavsdk.rpc.mission.StartMissionResponse);
     */
    startMission(input: StartMissionRequest, options?: RpcOptions): UnaryCall<StartMissionRequest, StartMissionResponse>;
    /**
     *
     * Pause the mission.
     *
     * Pausing the mission puts the vehicle into
     * [HOLD mode](https://docs.px4.io/en/flight_modes/hold.html).
     * A multicopter should just hover at the spot while a fixedwing vehicle should loiter
     * around the location where it paused.
     *
     * @generated from protobuf rpc: PauseMission(mavsdk.rpc.mission.PauseMissionRequest) returns (mavsdk.rpc.mission.PauseMissionResponse);
     */
    pauseMission(input: PauseMissionRequest, options?: RpcOptions): UnaryCall<PauseMissionRequest, PauseMissionResponse>;
    /**
     *
     * Clear the mission saved on the vehicle.
     *
     * @generated from protobuf rpc: ClearMission(mavsdk.rpc.mission.ClearMissionRequest) returns (mavsdk.rpc.mission.ClearMissionResponse);
     */
    clearMission(input: ClearMissionRequest, options?: RpcOptions): UnaryCall<ClearMissionRequest, ClearMissionResponse>;
    /**
     *
     * Sets the mission item index to go to.
     *
     * By setting the current index to 0, the mission is restarted from the beginning. If it is set
     * to a specific index of a mission item, the mission will be set to this item.
     *
     * Note that this is not necessarily true for general missions using MAVLink if loop counters
     * are used.
     *
     * @generated from protobuf rpc: SetCurrentMissionItem(mavsdk.rpc.mission.SetCurrentMissionItemRequest) returns (mavsdk.rpc.mission.SetCurrentMissionItemResponse);
     */
    setCurrentMissionItem(input: SetCurrentMissionItemRequest, options?: RpcOptions): UnaryCall<SetCurrentMissionItemRequest, SetCurrentMissionItemResponse>;
    /**
     *
     * Check if the mission has been finished.
     *
     * @generated from protobuf rpc: IsMissionFinished(mavsdk.rpc.mission.IsMissionFinishedRequest) returns (mavsdk.rpc.mission.IsMissionFinishedResponse);
     */
    isMissionFinished(input: IsMissionFinishedRequest, options?: RpcOptions): UnaryCall<IsMissionFinishedRequest, IsMissionFinishedResponse>;
    /**
     *
     * Subscribe to mission progress updates.
     *
     * @generated from protobuf rpc: SubscribeMissionProgress(mavsdk.rpc.mission.SubscribeMissionProgressRequest) returns (stream mavsdk.rpc.mission.MissionProgressResponse);
     */
    subscribeMissionProgress(input: SubscribeMissionProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeMissionProgressRequest, MissionProgressResponse>;
    /**
     *
     * Get whether to trigger Return-to-Launch (RTL) after mission is complete.
     *
     * Before getting this option, it needs to be set, or a mission
     * needs to be downloaded.
     *
     * @generated from protobuf rpc: GetReturnToLaunchAfterMission(mavsdk.rpc.mission.GetReturnToLaunchAfterMissionRequest) returns (mavsdk.rpc.mission.GetReturnToLaunchAfterMissionResponse);
     */
    getReturnToLaunchAfterMission(input: GetReturnToLaunchAfterMissionRequest, options?: RpcOptions): UnaryCall<GetReturnToLaunchAfterMissionRequest, GetReturnToLaunchAfterMissionResponse>;
    /**
     *
     * Set whether to trigger Return-to-Launch (RTL) after the mission is complete.
     *
     * This will only take effect for the next mission upload, meaning that
     * the mission may have to be uploaded again.
     *
     * @generated from protobuf rpc: SetReturnToLaunchAfterMission(mavsdk.rpc.mission.SetReturnToLaunchAfterMissionRequest) returns (mavsdk.rpc.mission.SetReturnToLaunchAfterMissionResponse);
     */
    setReturnToLaunchAfterMission(input: SetReturnToLaunchAfterMissionRequest, options?: RpcOptions): UnaryCall<SetReturnToLaunchAfterMissionRequest, SetReturnToLaunchAfterMissionResponse>;
}
/**
 * Enable waypoint missions.
 *
 * @generated from protobuf service mavsdk.rpc.mission.MissionService
 */
export class MissionServiceClient implements IMissionServiceClient, ServiceInfo {
    typeName = MissionService.typeName;
    methods = MissionService.methods;
    options = MissionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Upload a list of mission items to the system.
     *
     * The mission items are uploaded to a drone. Once uploaded the mission can be started and
     * executed even if the connection is lost.
     *
     * @generated from protobuf rpc: UploadMission(mavsdk.rpc.mission.UploadMissionRequest) returns (mavsdk.rpc.mission.UploadMissionResponse);
     */
    uploadMission(input: UploadMissionRequest, options?: RpcOptions): UnaryCall<UploadMissionRequest, UploadMissionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<UploadMissionRequest, UploadMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Upload a list of mission items to the system and report upload progress.
     *
     * The mission items are uploaded to a drone. Once uploaded the mission can be started and
     * executed even if the connection is lost.
     *
     * @generated from protobuf rpc: SubscribeUploadMissionWithProgress(mavsdk.rpc.mission.SubscribeUploadMissionWithProgressRequest) returns (stream mavsdk.rpc.mission.UploadMissionWithProgressResponse);
     */
    subscribeUploadMissionWithProgress(input: SubscribeUploadMissionWithProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeUploadMissionWithProgressRequest, UploadMissionWithProgressResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeUploadMissionWithProgressRequest, UploadMissionWithProgressResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Cancel an ongoing mission upload.
     *
     * @generated from protobuf rpc: CancelMissionUpload(mavsdk.rpc.mission.CancelMissionUploadRequest) returns (mavsdk.rpc.mission.CancelMissionUploadResponse);
     */
    cancelMissionUpload(input: CancelMissionUploadRequest, options?: RpcOptions): UnaryCall<CancelMissionUploadRequest, CancelMissionUploadResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<CancelMissionUploadRequest, CancelMissionUploadResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Download a list of mission items from the system (asynchronous).
     *
     * Will fail if any of the downloaded mission items are not supported
     * by the MAVSDK API.
     *
     * @generated from protobuf rpc: DownloadMission(mavsdk.rpc.mission.DownloadMissionRequest) returns (mavsdk.rpc.mission.DownloadMissionResponse);
     */
    downloadMission(input: DownloadMissionRequest, options?: RpcOptions): UnaryCall<DownloadMissionRequest, DownloadMissionResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DownloadMissionRequest, DownloadMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Download a list of mission items from the system (asynchronous) and report progress.
     *
     * Will fail if any of the downloaded mission items are not supported
     * by the MAVSDK API.
     *
     * @generated from protobuf rpc: SubscribeDownloadMissionWithProgress(mavsdk.rpc.mission.SubscribeDownloadMissionWithProgressRequest) returns (stream mavsdk.rpc.mission.DownloadMissionWithProgressResponse);
     */
    subscribeDownloadMissionWithProgress(input: SubscribeDownloadMissionWithProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeDownloadMissionWithProgressRequest, DownloadMissionWithProgressResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeDownloadMissionWithProgressRequest, DownloadMissionWithProgressResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Cancel an ongoing mission download.
     *
     * @generated from protobuf rpc: CancelMissionDownload(mavsdk.rpc.mission.CancelMissionDownloadRequest) returns (mavsdk.rpc.mission.CancelMissionDownloadResponse);
     */
    cancelMissionDownload(input: CancelMissionDownloadRequest, options?: RpcOptions): UnaryCall<CancelMissionDownloadRequest, CancelMissionDownloadResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<CancelMissionDownloadRequest, CancelMissionDownloadResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Start the mission.
     *
     * A mission must be uploaded to the vehicle before this can be called.
     *
     * @generated from protobuf rpc: StartMission(mavsdk.rpc.mission.StartMissionRequest) returns (mavsdk.rpc.mission.StartMissionResponse);
     */
    startMission(input: StartMissionRequest, options?: RpcOptions): UnaryCall<StartMissionRequest, StartMissionResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<StartMissionRequest, StartMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Pause the mission.
     *
     * Pausing the mission puts the vehicle into
     * [HOLD mode](https://docs.px4.io/en/flight_modes/hold.html).
     * A multicopter should just hover at the spot while a fixedwing vehicle should loiter
     * around the location where it paused.
     *
     * @generated from protobuf rpc: PauseMission(mavsdk.rpc.mission.PauseMissionRequest) returns (mavsdk.rpc.mission.PauseMissionResponse);
     */
    pauseMission(input: PauseMissionRequest, options?: RpcOptions): UnaryCall<PauseMissionRequest, PauseMissionResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<PauseMissionRequest, PauseMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Clear the mission saved on the vehicle.
     *
     * @generated from protobuf rpc: ClearMission(mavsdk.rpc.mission.ClearMissionRequest) returns (mavsdk.rpc.mission.ClearMissionResponse);
     */
    clearMission(input: ClearMissionRequest, options?: RpcOptions): UnaryCall<ClearMissionRequest, ClearMissionResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<ClearMissionRequest, ClearMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Sets the mission item index to go to.
     *
     * By setting the current index to 0, the mission is restarted from the beginning. If it is set
     * to a specific index of a mission item, the mission will be set to this item.
     *
     * Note that this is not necessarily true for general missions using MAVLink if loop counters
     * are used.
     *
     * @generated from protobuf rpc: SetCurrentMissionItem(mavsdk.rpc.mission.SetCurrentMissionItemRequest) returns (mavsdk.rpc.mission.SetCurrentMissionItemResponse);
     */
    setCurrentMissionItem(input: SetCurrentMissionItemRequest, options?: RpcOptions): UnaryCall<SetCurrentMissionItemRequest, SetCurrentMissionItemResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetCurrentMissionItemRequest, SetCurrentMissionItemResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Check if the mission has been finished.
     *
     * @generated from protobuf rpc: IsMissionFinished(mavsdk.rpc.mission.IsMissionFinishedRequest) returns (mavsdk.rpc.mission.IsMissionFinishedResponse);
     */
    isMissionFinished(input: IsMissionFinishedRequest, options?: RpcOptions): UnaryCall<IsMissionFinishedRequest, IsMissionFinishedResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<IsMissionFinishedRequest, IsMissionFinishedResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to mission progress updates.
     *
     * @generated from protobuf rpc: SubscribeMissionProgress(mavsdk.rpc.mission.SubscribeMissionProgressRequest) returns (stream mavsdk.rpc.mission.MissionProgressResponse);
     */
    subscribeMissionProgress(input: SubscribeMissionProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeMissionProgressRequest, MissionProgressResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeMissionProgressRequest, MissionProgressResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Get whether to trigger Return-to-Launch (RTL) after mission is complete.
     *
     * Before getting this option, it needs to be set, or a mission
     * needs to be downloaded.
     *
     * @generated from protobuf rpc: GetReturnToLaunchAfterMission(mavsdk.rpc.mission.GetReturnToLaunchAfterMissionRequest) returns (mavsdk.rpc.mission.GetReturnToLaunchAfterMissionResponse);
     */
    getReturnToLaunchAfterMission(input: GetReturnToLaunchAfterMissionRequest, options?: RpcOptions): UnaryCall<GetReturnToLaunchAfterMissionRequest, GetReturnToLaunchAfterMissionResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetReturnToLaunchAfterMissionRequest, GetReturnToLaunchAfterMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set whether to trigger Return-to-Launch (RTL) after the mission is complete.
     *
     * This will only take effect for the next mission upload, meaning that
     * the mission may have to be uploaded again.
     *
     * @generated from protobuf rpc: SetReturnToLaunchAfterMission(mavsdk.rpc.mission.SetReturnToLaunchAfterMissionRequest) returns (mavsdk.rpc.mission.SetReturnToLaunchAfterMissionResponse);
     */
    setReturnToLaunchAfterMission(input: SetReturnToLaunchAfterMissionRequest, options?: RpcOptions): UnaryCall<SetReturnToLaunchAfterMissionRequest, SetReturnToLaunchAfterMissionResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetReturnToLaunchAfterMissionRequest, SetReturnToLaunchAfterMissionResponse>("unary", this._transport, method, opt, input);
    }
}
