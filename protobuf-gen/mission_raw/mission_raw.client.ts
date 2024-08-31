/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "mission_raw/mission_raw.proto" (package "mavsdk.rpc.mission_raw", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MissionRawService } from "./mission_raw";
import type { ImportQgroundcontrolMissionFromStringResponse } from "./mission_raw";
import type { ImportQgroundcontrolMissionFromStringRequest } from "./mission_raw";
import type { ImportQgroundcontrolMissionResponse } from "./mission_raw";
import type { ImportQgroundcontrolMissionRequest } from "./mission_raw";
import type { MissionChangedResponse } from "./mission_raw";
import type { SubscribeMissionChangedRequest } from "./mission_raw";
import type { MissionProgressResponse } from "./mission_raw";
import type { SubscribeMissionProgressRequest } from "./mission_raw";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { SetCurrentMissionItemResponse } from "./mission_raw";
import type { SetCurrentMissionItemRequest } from "./mission_raw";
import type { ClearMissionResponse } from "./mission_raw";
import type { ClearMissionRequest } from "./mission_raw";
import type { PauseMissionResponse } from "./mission_raw";
import type { PauseMissionRequest } from "./mission_raw";
import type { StartMissionResponse } from "./mission_raw";
import type { StartMissionRequest } from "./mission_raw";
import type { CancelMissionDownloadResponse } from "./mission_raw";
import type { CancelMissionDownloadRequest } from "./mission_raw";
import type { DownloadMissionResponse } from "./mission_raw";
import type { DownloadMissionRequest } from "./mission_raw";
import type { CancelMissionUploadResponse } from "./mission_raw";
import type { CancelMissionUploadRequest } from "./mission_raw";
import type { UploadRallyPointsResponse } from "./mission_raw";
import type { UploadRallyPointsRequest } from "./mission_raw";
import type { UploadGeofenceResponse } from "./mission_raw";
import type { UploadGeofenceRequest } from "./mission_raw";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { UploadMissionResponse } from "./mission_raw";
import type { UploadMissionRequest } from "./mission_raw";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Enable raw missions as exposed by MAVLink.
 *
 * @generated from protobuf service mavsdk.rpc.mission_raw.MissionRawService
 */
export interface IMissionRawServiceClient {
    /**
     *
     * Upload a list of raw mission items to the system.
     *
     * The raw mission items are uploaded to a drone. Once uploaded the mission
     * can be started and executed even if the connection is lost.
     *
     * @generated from protobuf rpc: UploadMission(mavsdk.rpc.mission_raw.UploadMissionRequest) returns (mavsdk.rpc.mission_raw.UploadMissionResponse);
     */
    uploadMission(input: UploadMissionRequest, options?: RpcOptions): UnaryCall<UploadMissionRequest, UploadMissionResponse>;
    /**
     *
     * Upload a list of geofence items to the system.
     *
     * @generated from protobuf rpc: UploadGeofence(mavsdk.rpc.mission_raw.UploadGeofenceRequest) returns (mavsdk.rpc.mission_raw.UploadGeofenceResponse);
     */
    uploadGeofence(input: UploadGeofenceRequest, options?: RpcOptions): UnaryCall<UploadGeofenceRequest, UploadGeofenceResponse>;
    /**
     *
     * Upload a list of rally point items to the system.
     *
     * @generated from protobuf rpc: UploadRallyPoints(mavsdk.rpc.mission_raw.UploadRallyPointsRequest) returns (mavsdk.rpc.mission_raw.UploadRallyPointsResponse);
     */
    uploadRallyPoints(input: UploadRallyPointsRequest, options?: RpcOptions): UnaryCall<UploadRallyPointsRequest, UploadRallyPointsResponse>;
    /**
     *
     * Cancel an ongoing mission upload.
     *
     * @generated from protobuf rpc: CancelMissionUpload(mavsdk.rpc.mission_raw.CancelMissionUploadRequest) returns (mavsdk.rpc.mission_raw.CancelMissionUploadResponse);
     */
    cancelMissionUpload(input: CancelMissionUploadRequest, options?: RpcOptions): UnaryCall<CancelMissionUploadRequest, CancelMissionUploadResponse>;
    /**
     *
     * Download a list of raw mission items from the system (asynchronous).
     *
     * @generated from protobuf rpc: DownloadMission(mavsdk.rpc.mission_raw.DownloadMissionRequest) returns (mavsdk.rpc.mission_raw.DownloadMissionResponse);
     */
    downloadMission(input: DownloadMissionRequest, options?: RpcOptions): UnaryCall<DownloadMissionRequest, DownloadMissionResponse>;
    /**
     *
     * Cancel an ongoing mission download.
     *
     * @generated from protobuf rpc: CancelMissionDownload(mavsdk.rpc.mission_raw.CancelMissionDownloadRequest) returns (mavsdk.rpc.mission_raw.CancelMissionDownloadResponse);
     */
    cancelMissionDownload(input: CancelMissionDownloadRequest, options?: RpcOptions): UnaryCall<CancelMissionDownloadRequest, CancelMissionDownloadResponse>;
    /**
     *
     * Start the mission.
     *
     * A mission must be uploaded to the vehicle before this can be called.
     *
     * @generated from protobuf rpc: StartMission(mavsdk.rpc.mission_raw.StartMissionRequest) returns (mavsdk.rpc.mission_raw.StartMissionResponse);
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
     * @generated from protobuf rpc: PauseMission(mavsdk.rpc.mission_raw.PauseMissionRequest) returns (mavsdk.rpc.mission_raw.PauseMissionResponse);
     */
    pauseMission(input: PauseMissionRequest, options?: RpcOptions): UnaryCall<PauseMissionRequest, PauseMissionResponse>;
    /**
     *
     * Clear the mission saved on the vehicle.
     *
     * @generated from protobuf rpc: ClearMission(mavsdk.rpc.mission_raw.ClearMissionRequest) returns (mavsdk.rpc.mission_raw.ClearMissionResponse);
     */
    clearMission(input: ClearMissionRequest, options?: RpcOptions): UnaryCall<ClearMissionRequest, ClearMissionResponse>;
    /**
     *
     * Sets the raw mission item index to go to.
     *
     * By setting the current index to 0, the mission is restarted from the beginning. If it is set
     * to a specific index of a raw mission item, the mission will be set to this item.
     *
     * @generated from protobuf rpc: SetCurrentMissionItem(mavsdk.rpc.mission_raw.SetCurrentMissionItemRequest) returns (mavsdk.rpc.mission_raw.SetCurrentMissionItemResponse);
     */
    setCurrentMissionItem(input: SetCurrentMissionItemRequest, options?: RpcOptions): UnaryCall<SetCurrentMissionItemRequest, SetCurrentMissionItemResponse>;
    /**
     *
     * Subscribe to mission progress updates.
     *
     * @generated from protobuf rpc: SubscribeMissionProgress(mavsdk.rpc.mission_raw.SubscribeMissionProgressRequest) returns (stream mavsdk.rpc.mission_raw.MissionProgressResponse);
     */
    subscribeMissionProgress(input: SubscribeMissionProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeMissionProgressRequest, MissionProgressResponse>;
    /**
     * *
     * Subscribes to mission changed.
     *
     * This notification can be used to be informed if a ground station has
     * been uploaded or changed by a ground station or companion computer.
     *
     * @param callback Callback to notify about change.
     *
     * @generated from protobuf rpc: SubscribeMissionChanged(mavsdk.rpc.mission_raw.SubscribeMissionChangedRequest) returns (stream mavsdk.rpc.mission_raw.MissionChangedResponse);
     */
    subscribeMissionChanged(input: SubscribeMissionChangedRequest, options?: RpcOptions): ServerStreamingCall<SubscribeMissionChangedRequest, MissionChangedResponse>;
    /**
     *
     * Import a QGroundControl missions in JSON .plan format, from a file.
     *
     * Supported:
     * - Waypoints
     * - Survey
     * Not supported:
     * - Structure Scan
     *
     * @generated from protobuf rpc: ImportQgroundcontrolMission(mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionRequest) returns (mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionResponse);
     */
    importQgroundcontrolMission(input: ImportQgroundcontrolMissionRequest, options?: RpcOptions): UnaryCall<ImportQgroundcontrolMissionRequest, ImportQgroundcontrolMissionResponse>;
    /**
     *
     * Import a QGroundControl missions in JSON .plan format, from a string.
     *
     * Supported:
     * - Waypoints
     * - Survey
     * Not supported:
     * - Structure Scan
     *
     * @generated from protobuf rpc: ImportQgroundcontrolMissionFromString(mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionFromStringRequest) returns (mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionFromStringResponse);
     */
    importQgroundcontrolMissionFromString(input: ImportQgroundcontrolMissionFromStringRequest, options?: RpcOptions): UnaryCall<ImportQgroundcontrolMissionFromStringRequest, ImportQgroundcontrolMissionFromStringResponse>;
}
/**
 * Enable raw missions as exposed by MAVLink.
 *
 * @generated from protobuf service mavsdk.rpc.mission_raw.MissionRawService
 */
export class MissionRawServiceClient implements IMissionRawServiceClient, ServiceInfo {
    typeName = MissionRawService.typeName;
    methods = MissionRawService.methods;
    options = MissionRawService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Upload a list of raw mission items to the system.
     *
     * The raw mission items are uploaded to a drone. Once uploaded the mission
     * can be started and executed even if the connection is lost.
     *
     * @generated from protobuf rpc: UploadMission(mavsdk.rpc.mission_raw.UploadMissionRequest) returns (mavsdk.rpc.mission_raw.UploadMissionResponse);
     */
    uploadMission(input: UploadMissionRequest, options?: RpcOptions): UnaryCall<UploadMissionRequest, UploadMissionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<UploadMissionRequest, UploadMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Upload a list of geofence items to the system.
     *
     * @generated from protobuf rpc: UploadGeofence(mavsdk.rpc.mission_raw.UploadGeofenceRequest) returns (mavsdk.rpc.mission_raw.UploadGeofenceResponse);
     */
    uploadGeofence(input: UploadGeofenceRequest, options?: RpcOptions): UnaryCall<UploadGeofenceRequest, UploadGeofenceResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<UploadGeofenceRequest, UploadGeofenceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Upload a list of rally point items to the system.
     *
     * @generated from protobuf rpc: UploadRallyPoints(mavsdk.rpc.mission_raw.UploadRallyPointsRequest) returns (mavsdk.rpc.mission_raw.UploadRallyPointsResponse);
     */
    uploadRallyPoints(input: UploadRallyPointsRequest, options?: RpcOptions): UnaryCall<UploadRallyPointsRequest, UploadRallyPointsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UploadRallyPointsRequest, UploadRallyPointsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Cancel an ongoing mission upload.
     *
     * @generated from protobuf rpc: CancelMissionUpload(mavsdk.rpc.mission_raw.CancelMissionUploadRequest) returns (mavsdk.rpc.mission_raw.CancelMissionUploadResponse);
     */
    cancelMissionUpload(input: CancelMissionUploadRequest, options?: RpcOptions): UnaryCall<CancelMissionUploadRequest, CancelMissionUploadResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CancelMissionUploadRequest, CancelMissionUploadResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Download a list of raw mission items from the system (asynchronous).
     *
     * @generated from protobuf rpc: DownloadMission(mavsdk.rpc.mission_raw.DownloadMissionRequest) returns (mavsdk.rpc.mission_raw.DownloadMissionResponse);
     */
    downloadMission(input: DownloadMissionRequest, options?: RpcOptions): UnaryCall<DownloadMissionRequest, DownloadMissionResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<DownloadMissionRequest, DownloadMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Cancel an ongoing mission download.
     *
     * @generated from protobuf rpc: CancelMissionDownload(mavsdk.rpc.mission_raw.CancelMissionDownloadRequest) returns (mavsdk.rpc.mission_raw.CancelMissionDownloadResponse);
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
     * @generated from protobuf rpc: StartMission(mavsdk.rpc.mission_raw.StartMissionRequest) returns (mavsdk.rpc.mission_raw.StartMissionResponse);
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
     * @generated from protobuf rpc: PauseMission(mavsdk.rpc.mission_raw.PauseMissionRequest) returns (mavsdk.rpc.mission_raw.PauseMissionResponse);
     */
    pauseMission(input: PauseMissionRequest, options?: RpcOptions): UnaryCall<PauseMissionRequest, PauseMissionResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<PauseMissionRequest, PauseMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Clear the mission saved on the vehicle.
     *
     * @generated from protobuf rpc: ClearMission(mavsdk.rpc.mission_raw.ClearMissionRequest) returns (mavsdk.rpc.mission_raw.ClearMissionResponse);
     */
    clearMission(input: ClearMissionRequest, options?: RpcOptions): UnaryCall<ClearMissionRequest, ClearMissionResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<ClearMissionRequest, ClearMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Sets the raw mission item index to go to.
     *
     * By setting the current index to 0, the mission is restarted from the beginning. If it is set
     * to a specific index of a raw mission item, the mission will be set to this item.
     *
     * @generated from protobuf rpc: SetCurrentMissionItem(mavsdk.rpc.mission_raw.SetCurrentMissionItemRequest) returns (mavsdk.rpc.mission_raw.SetCurrentMissionItemResponse);
     */
    setCurrentMissionItem(input: SetCurrentMissionItemRequest, options?: RpcOptions): UnaryCall<SetCurrentMissionItemRequest, SetCurrentMissionItemResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetCurrentMissionItemRequest, SetCurrentMissionItemResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to mission progress updates.
     *
     * @generated from protobuf rpc: SubscribeMissionProgress(mavsdk.rpc.mission_raw.SubscribeMissionProgressRequest) returns (stream mavsdk.rpc.mission_raw.MissionProgressResponse);
     */
    subscribeMissionProgress(input: SubscribeMissionProgressRequest, options?: RpcOptions): ServerStreamingCall<SubscribeMissionProgressRequest, MissionProgressResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeMissionProgressRequest, MissionProgressResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * *
     * Subscribes to mission changed.
     *
     * This notification can be used to be informed if a ground station has
     * been uploaded or changed by a ground station or companion computer.
     *
     * @param callback Callback to notify about change.
     *
     * @generated from protobuf rpc: SubscribeMissionChanged(mavsdk.rpc.mission_raw.SubscribeMissionChangedRequest) returns (stream mavsdk.rpc.mission_raw.MissionChangedResponse);
     */
    subscribeMissionChanged(input: SubscribeMissionChangedRequest, options?: RpcOptions): ServerStreamingCall<SubscribeMissionChangedRequest, MissionChangedResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeMissionChangedRequest, MissionChangedResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Import a QGroundControl missions in JSON .plan format, from a file.
     *
     * Supported:
     * - Waypoints
     * - Survey
     * Not supported:
     * - Structure Scan
     *
     * @generated from protobuf rpc: ImportQgroundcontrolMission(mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionRequest) returns (mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionResponse);
     */
    importQgroundcontrolMission(input: ImportQgroundcontrolMissionRequest, options?: RpcOptions): UnaryCall<ImportQgroundcontrolMissionRequest, ImportQgroundcontrolMissionResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<ImportQgroundcontrolMissionRequest, ImportQgroundcontrolMissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Import a QGroundControl missions in JSON .plan format, from a string.
     *
     * Supported:
     * - Waypoints
     * - Survey
     * Not supported:
     * - Structure Scan
     *
     * @generated from protobuf rpc: ImportQgroundcontrolMissionFromString(mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionFromStringRequest) returns (mavsdk.rpc.mission_raw.ImportQgroundcontrolMissionFromStringResponse);
     */
    importQgroundcontrolMissionFromString(input: ImportQgroundcontrolMissionFromStringRequest, options?: RpcOptions): UnaryCall<ImportQgroundcontrolMissionFromStringRequest, ImportQgroundcontrolMissionFromStringResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<ImportQgroundcontrolMissionFromStringRequest, ImportQgroundcontrolMissionFromStringResponse>("unary", this._transport, method, opt, input);
    }
}
