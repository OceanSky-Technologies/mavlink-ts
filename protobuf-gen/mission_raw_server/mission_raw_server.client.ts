/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "mission_raw_server/mission_raw_server.proto" (package "mavsdk.rpc.mission_raw_server", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MissionRawServerService } from "./mission_raw_server";
import type { ClearAllResponse } from "./mission_raw_server";
import type { SubscribeClearAllRequest } from "./mission_raw_server";
import type { SetCurrentItemCompleteResponse } from "./mission_raw_server";
import type { SetCurrentItemCompleteRequest } from "./mission_raw_server";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { CurrentItemChangedResponse } from "./mission_raw_server";
import type { SubscribeCurrentItemChangedRequest } from "./mission_raw_server";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { IncomingMissionResponse } from "./mission_raw_server";
import type { SubscribeIncomingMissionRequest } from "./mission_raw_server";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Acts as a vehicle and receives incoming missions from GCS (in raw MAVLINK format).
 * Provides current mission item state, so the server can progress through missions.
 *
 * @generated from protobuf service mavsdk.rpc.mission_raw_server.MissionRawServerService
 */
export interface IMissionRawServerServiceClient {
    /**
     *
     * Subscribe to when a new mission is uploaded (asynchronous).
     *
     * @generated from protobuf rpc: SubscribeIncomingMission(mavsdk.rpc.mission_raw_server.SubscribeIncomingMissionRequest) returns (stream mavsdk.rpc.mission_raw_server.IncomingMissionResponse);
     */
    subscribeIncomingMission(input: SubscribeIncomingMissionRequest, options?: RpcOptions): ServerStreamingCall<SubscribeIncomingMissionRequest, IncomingMissionResponse>;
    /**
     *
     * Subscribe to when a new current item is set
     *
     * @generated from protobuf rpc: SubscribeCurrentItemChanged(mavsdk.rpc.mission_raw_server.SubscribeCurrentItemChangedRequest) returns (stream mavsdk.rpc.mission_raw_server.CurrentItemChangedResponse);
     */
    subscribeCurrentItemChanged(input: SubscribeCurrentItemChangedRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCurrentItemChangedRequest, CurrentItemChangedResponse>;
    /**
     *
     *  Set Current item as completed
     *
     * @generated from protobuf rpc: SetCurrentItemComplete(mavsdk.rpc.mission_raw_server.SetCurrentItemCompleteRequest) returns (mavsdk.rpc.mission_raw_server.SetCurrentItemCompleteResponse);
     */
    setCurrentItemComplete(input: SetCurrentItemCompleteRequest, options?: RpcOptions): UnaryCall<SetCurrentItemCompleteRequest, SetCurrentItemCompleteResponse>;
    /**
     *
     *  Subscribe when a MISSION_CLEAR_ALL is received
     *
     * @generated from protobuf rpc: SubscribeClearAll(mavsdk.rpc.mission_raw_server.SubscribeClearAllRequest) returns (stream mavsdk.rpc.mission_raw_server.ClearAllResponse);
     */
    subscribeClearAll(input: SubscribeClearAllRequest, options?: RpcOptions): ServerStreamingCall<SubscribeClearAllRequest, ClearAllResponse>;
}
/**
 * Acts as a vehicle and receives incoming missions from GCS (in raw MAVLINK format).
 * Provides current mission item state, so the server can progress through missions.
 *
 * @generated from protobuf service mavsdk.rpc.mission_raw_server.MissionRawServerService
 */
export class MissionRawServerServiceClient implements IMissionRawServerServiceClient, ServiceInfo {
    typeName = MissionRawServerService.typeName;
    methods = MissionRawServerService.methods;
    options = MissionRawServerService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Subscribe to when a new mission is uploaded (asynchronous).
     *
     * @generated from protobuf rpc: SubscribeIncomingMission(mavsdk.rpc.mission_raw_server.SubscribeIncomingMissionRequest) returns (stream mavsdk.rpc.mission_raw_server.IncomingMissionResponse);
     */
    subscribeIncomingMission(input: SubscribeIncomingMissionRequest, options?: RpcOptions): ServerStreamingCall<SubscribeIncomingMissionRequest, IncomingMissionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeIncomingMissionRequest, IncomingMissionResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to when a new current item is set
     *
     * @generated from protobuf rpc: SubscribeCurrentItemChanged(mavsdk.rpc.mission_raw_server.SubscribeCurrentItemChangedRequest) returns (stream mavsdk.rpc.mission_raw_server.CurrentItemChangedResponse);
     */
    subscribeCurrentItemChanged(input: SubscribeCurrentItemChangedRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCurrentItemChangedRequest, CurrentItemChangedResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCurrentItemChangedRequest, CurrentItemChangedResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     *  Set Current item as completed
     *
     * @generated from protobuf rpc: SetCurrentItemComplete(mavsdk.rpc.mission_raw_server.SetCurrentItemCompleteRequest) returns (mavsdk.rpc.mission_raw_server.SetCurrentItemCompleteResponse);
     */
    setCurrentItemComplete(input: SetCurrentItemCompleteRequest, options?: RpcOptions): UnaryCall<SetCurrentItemCompleteRequest, SetCurrentItemCompleteResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetCurrentItemCompleteRequest, SetCurrentItemCompleteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     *  Subscribe when a MISSION_CLEAR_ALL is received
     *
     * @generated from protobuf rpc: SubscribeClearAll(mavsdk.rpc.mission_raw_server.SubscribeClearAllRequest) returns (stream mavsdk.rpc.mission_raw_server.ClearAllResponse);
     */
    subscribeClearAll(input: SubscribeClearAllRequest, options?: RpcOptions): ServerStreamingCall<SubscribeClearAllRequest, ClearAllResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeClearAllRequest, ClearAllResponse>("serverStreaming", this._transport, method, opt, input);
    }
}
