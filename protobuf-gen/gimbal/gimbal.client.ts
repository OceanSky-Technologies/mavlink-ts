/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "gimbal/gimbal.proto" (package "mavsdk.rpc.gimbal", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { GimbalService } from "./gimbal";
import type { GetAttitudeResponse } from "./gimbal";
import type { GetAttitudeRequest } from "./gimbal";
import type { AttitudeResponse } from "./gimbal";
import type { SubscribeAttitudeRequest } from "./gimbal";
import type { GetControlStatusResponse } from "./gimbal";
import type { GetControlStatusRequest } from "./gimbal";
import type { ControlStatusResponse } from "./gimbal";
import type { SubscribeControlStatusRequest } from "./gimbal";
import type { GimbalListResponse } from "./gimbal";
import type { SubscribeGimbalListRequest } from "./gimbal";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { ReleaseControlResponse } from "./gimbal";
import type { ReleaseControlRequest } from "./gimbal";
import type { TakeControlResponse } from "./gimbal";
import type { TakeControlRequest } from "./gimbal";
import type { SetRoiLocationResponse } from "./gimbal";
import type { SetRoiLocationRequest } from "./gimbal";
import type { SetAngularRatesResponse } from "./gimbal";
import type { SetAngularRatesRequest } from "./gimbal";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { SetAnglesResponse } from "./gimbal";
import type { SetAnglesRequest } from "./gimbal";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Provide control over a gimbal.
 *
 * @generated from protobuf service mavsdk.rpc.gimbal.GimbalService
 */
export interface IGimbalServiceClient {
    /**
     *
     * Set gimbal roll, pitch and yaw angles.
     *
     * This sets the desired roll, pitch and yaw angles of a gimbal.
     * Will return when the command is accepted, however, it might
     * take the gimbal longer to actually be set to the new angles.
     *
     * Note that the roll angle needs to be set to 0 when send_mode is Once.
     *
     * @generated from protobuf rpc: SetAngles(mavsdk.rpc.gimbal.SetAnglesRequest) returns (mavsdk.rpc.gimbal.SetAnglesResponse);
     */
    setAngles(input: SetAnglesRequest, options?: RpcOptions): UnaryCall<SetAnglesRequest, SetAnglesResponse>;
    /**
     *
     * Set gimbal angular rates.
     *
     * This sets the desired angular rates around roll, pitch and yaw axes of a gimbal.
     * Will return when the command is accepted, however, it might
     * take the gimbal longer to actually reach the angular rate.
     *
     * Note that the roll angle needs to be set to 0 when send_mode is Once.
     *
     * @generated from protobuf rpc: SetAngularRates(mavsdk.rpc.gimbal.SetAngularRatesRequest) returns (mavsdk.rpc.gimbal.SetAngularRatesResponse);
     */
    setAngularRates(input: SetAngularRatesRequest, options?: RpcOptions): UnaryCall<SetAngularRatesRequest, SetAngularRatesResponse>;
    /**
     *
     * Set gimbal region of interest (ROI).
     *
     * This sets a region of interest that the gimbal will point to.
     * The gimbal will continue to point to the specified region until it
     * receives a new command.
     * The function will return when the command is accepted, however, it might
     * take the gimbal longer to actually rotate to the ROI.
     *
     * @generated from protobuf rpc: SetRoiLocation(mavsdk.rpc.gimbal.SetRoiLocationRequest) returns (mavsdk.rpc.gimbal.SetRoiLocationResponse);
     */
    setRoiLocation(input: SetRoiLocationRequest, options?: RpcOptions): UnaryCall<SetRoiLocationRequest, SetRoiLocationResponse>;
    /**
     *
     * Take control.
     *
     * There can be only two components in control of a gimbal at any given time.
     * One with "primary" control, and one with "secondary" control. The way the
     * secondary control is implemented is not specified and hence depends on the
     * vehicle.
     *
     * Components are expected to be cooperative, which means that they can
     * override each other and should therefore do it carefully.
     *
     * @generated from protobuf rpc: TakeControl(mavsdk.rpc.gimbal.TakeControlRequest) returns (mavsdk.rpc.gimbal.TakeControlResponse);
     */
    takeControl(input: TakeControlRequest, options?: RpcOptions): UnaryCall<TakeControlRequest, TakeControlResponse>;
    /**
     *
     * Release control.
     *
     * Release control, such that other components can control the gimbal.
     *
     * @generated from protobuf rpc: ReleaseControl(mavsdk.rpc.gimbal.ReleaseControlRequest) returns (mavsdk.rpc.gimbal.ReleaseControlResponse);
     */
    releaseControl(input: ReleaseControlRequest, options?: RpcOptions): UnaryCall<ReleaseControlRequest, ReleaseControlResponse>;
    /**
     *
     * Subscribe to list of gimbals.
     *
     * This allows to find out what gimbals are connected to the system.
     * Based on the gimbal ID, we can then address a specific gimbal.
     *
     * @generated from protobuf rpc: SubscribeGimbalList(mavsdk.rpc.gimbal.SubscribeGimbalListRequest) returns (stream mavsdk.rpc.gimbal.GimbalListResponse);
     */
    subscribeGimbalList(input: SubscribeGimbalListRequest, options?: RpcOptions): ServerStreamingCall<SubscribeGimbalListRequest, GimbalListResponse>;
    /**
     *
     * Subscribe to control status updates.
     *
     * This allows a component to know if it has primary, secondary or
     * no control over the gimbal. Also, it gives the system and component ids
     * of the other components in control (if any).
     *
     * @generated from protobuf rpc: SubscribeControlStatus(mavsdk.rpc.gimbal.SubscribeControlStatusRequest) returns (stream mavsdk.rpc.gimbal.ControlStatusResponse);
     */
    subscribeControlStatus(input: SubscribeControlStatusRequest, options?: RpcOptions): ServerStreamingCall<SubscribeControlStatusRequest, ControlStatusResponse>;
    /**
     *
     * Get control status for specific gimbal.
     *
     * @generated from protobuf rpc: GetControlStatus(mavsdk.rpc.gimbal.GetControlStatusRequest) returns (mavsdk.rpc.gimbal.GetControlStatusResponse);
     */
    getControlStatus(input: GetControlStatusRequest, options?: RpcOptions): UnaryCall<GetControlStatusRequest, GetControlStatusResponse>;
    /**
     *
     * Subscribe to attitude updates.
     *
     * This gets you the gimbal's attitude and angular rate.
     *
     * @generated from protobuf rpc: SubscribeAttitude(mavsdk.rpc.gimbal.SubscribeAttitudeRequest) returns (stream mavsdk.rpc.gimbal.AttitudeResponse);
     */
    subscribeAttitude(input: SubscribeAttitudeRequest, options?: RpcOptions): ServerStreamingCall<SubscribeAttitudeRequest, AttitudeResponse>;
    /**
     *
     * Get attitude for specific gimbal.
     *
     * @generated from protobuf rpc: GetAttitude(mavsdk.rpc.gimbal.GetAttitudeRequest) returns (mavsdk.rpc.gimbal.GetAttitudeResponse);
     */
    getAttitude(input: GetAttitudeRequest, options?: RpcOptions): UnaryCall<GetAttitudeRequest, GetAttitudeResponse>;
}
/**
 * Provide control over a gimbal.
 *
 * @generated from protobuf service mavsdk.rpc.gimbal.GimbalService
 */
export class GimbalServiceClient implements IGimbalServiceClient, ServiceInfo {
    typeName = GimbalService.typeName;
    methods = GimbalService.methods;
    options = GimbalService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Set gimbal roll, pitch and yaw angles.
     *
     * This sets the desired roll, pitch and yaw angles of a gimbal.
     * Will return when the command is accepted, however, it might
     * take the gimbal longer to actually be set to the new angles.
     *
     * Note that the roll angle needs to be set to 0 when send_mode is Once.
     *
     * @generated from protobuf rpc: SetAngles(mavsdk.rpc.gimbal.SetAnglesRequest) returns (mavsdk.rpc.gimbal.SetAnglesResponse);
     */
    setAngles(input: SetAnglesRequest, options?: RpcOptions): UnaryCall<SetAnglesRequest, SetAnglesResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetAnglesRequest, SetAnglesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set gimbal angular rates.
     *
     * This sets the desired angular rates around roll, pitch and yaw axes of a gimbal.
     * Will return when the command is accepted, however, it might
     * take the gimbal longer to actually reach the angular rate.
     *
     * Note that the roll angle needs to be set to 0 when send_mode is Once.
     *
     * @generated from protobuf rpc: SetAngularRates(mavsdk.rpc.gimbal.SetAngularRatesRequest) returns (mavsdk.rpc.gimbal.SetAngularRatesResponse);
     */
    setAngularRates(input: SetAngularRatesRequest, options?: RpcOptions): UnaryCall<SetAngularRatesRequest, SetAngularRatesResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetAngularRatesRequest, SetAngularRatesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set gimbal region of interest (ROI).
     *
     * This sets a region of interest that the gimbal will point to.
     * The gimbal will continue to point to the specified region until it
     * receives a new command.
     * The function will return when the command is accepted, however, it might
     * take the gimbal longer to actually rotate to the ROI.
     *
     * @generated from protobuf rpc: SetRoiLocation(mavsdk.rpc.gimbal.SetRoiLocationRequest) returns (mavsdk.rpc.gimbal.SetRoiLocationResponse);
     */
    setRoiLocation(input: SetRoiLocationRequest, options?: RpcOptions): UnaryCall<SetRoiLocationRequest, SetRoiLocationResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetRoiLocationRequest, SetRoiLocationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Take control.
     *
     * There can be only two components in control of a gimbal at any given time.
     * One with "primary" control, and one with "secondary" control. The way the
     * secondary control is implemented is not specified and hence depends on the
     * vehicle.
     *
     * Components are expected to be cooperative, which means that they can
     * override each other and should therefore do it carefully.
     *
     * @generated from protobuf rpc: TakeControl(mavsdk.rpc.gimbal.TakeControlRequest) returns (mavsdk.rpc.gimbal.TakeControlResponse);
     */
    takeControl(input: TakeControlRequest, options?: RpcOptions): UnaryCall<TakeControlRequest, TakeControlResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<TakeControlRequest, TakeControlResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Release control.
     *
     * Release control, such that other components can control the gimbal.
     *
     * @generated from protobuf rpc: ReleaseControl(mavsdk.rpc.gimbal.ReleaseControlRequest) returns (mavsdk.rpc.gimbal.ReleaseControlResponse);
     */
    releaseControl(input: ReleaseControlRequest, options?: RpcOptions): UnaryCall<ReleaseControlRequest, ReleaseControlResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReleaseControlRequest, ReleaseControlResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to list of gimbals.
     *
     * This allows to find out what gimbals are connected to the system.
     * Based on the gimbal ID, we can then address a specific gimbal.
     *
     * @generated from protobuf rpc: SubscribeGimbalList(mavsdk.rpc.gimbal.SubscribeGimbalListRequest) returns (stream mavsdk.rpc.gimbal.GimbalListResponse);
     */
    subscribeGimbalList(input: SubscribeGimbalListRequest, options?: RpcOptions): ServerStreamingCall<SubscribeGimbalListRequest, GimbalListResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeGimbalListRequest, GimbalListResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to control status updates.
     *
     * This allows a component to know if it has primary, secondary or
     * no control over the gimbal. Also, it gives the system and component ids
     * of the other components in control (if any).
     *
     * @generated from protobuf rpc: SubscribeControlStatus(mavsdk.rpc.gimbal.SubscribeControlStatusRequest) returns (stream mavsdk.rpc.gimbal.ControlStatusResponse);
     */
    subscribeControlStatus(input: SubscribeControlStatusRequest, options?: RpcOptions): ServerStreamingCall<SubscribeControlStatusRequest, ControlStatusResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeControlStatusRequest, ControlStatusResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Get control status for specific gimbal.
     *
     * @generated from protobuf rpc: GetControlStatus(mavsdk.rpc.gimbal.GetControlStatusRequest) returns (mavsdk.rpc.gimbal.GetControlStatusResponse);
     */
    getControlStatus(input: GetControlStatusRequest, options?: RpcOptions): UnaryCall<GetControlStatusRequest, GetControlStatusResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetControlStatusRequest, GetControlStatusResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Subscribe to attitude updates.
     *
     * This gets you the gimbal's attitude and angular rate.
     *
     * @generated from protobuf rpc: SubscribeAttitude(mavsdk.rpc.gimbal.SubscribeAttitudeRequest) returns (stream mavsdk.rpc.gimbal.AttitudeResponse);
     */
    subscribeAttitude(input: SubscribeAttitudeRequest, options?: RpcOptions): ServerStreamingCall<SubscribeAttitudeRequest, AttitudeResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeAttitudeRequest, AttitudeResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Get attitude for specific gimbal.
     *
     * @generated from protobuf rpc: GetAttitude(mavsdk.rpc.gimbal.GetAttitudeRequest) returns (mavsdk.rpc.gimbal.GetAttitudeResponse);
     */
    getAttitude(input: GetAttitudeRequest, options?: RpcOptions): UnaryCall<GetAttitudeRequest, GetAttitudeResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAttitudeRequest, GetAttitudeResponse>("unary", this._transport, method, opt, input);
    }
}
