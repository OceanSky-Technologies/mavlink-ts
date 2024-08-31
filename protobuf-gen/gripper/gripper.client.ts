/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "gripper/gripper.proto" (package "mavsdk.rpc.gripper", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { GripperService } from "./gripper";
import type { ReleaseResponse } from "./gripper";
import type { ReleaseRequest } from "./gripper";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GrabResponse } from "./gripper";
import type { GrabRequest } from "./gripper";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 *
 * Allows users to send gripper actions.
 *
 * @generated from protobuf service mavsdk.rpc.gripper.GripperService
 */
export interface IGripperServiceClient {
    /**
     *
     * Gripper grab cargo.
     *
     * @generated from protobuf rpc: Grab(mavsdk.rpc.gripper.GrabRequest) returns (mavsdk.rpc.gripper.GrabResponse);
     */
    grab(input: GrabRequest, options?: RpcOptions): UnaryCall<GrabRequest, GrabResponse>;
    /**
     *
     * Gripper release cargo.
     *
     * @generated from protobuf rpc: Release(mavsdk.rpc.gripper.ReleaseRequest) returns (mavsdk.rpc.gripper.ReleaseResponse);
     */
    release(input: ReleaseRequest, options?: RpcOptions): UnaryCall<ReleaseRequest, ReleaseResponse>;
}
/**
 *
 * Allows users to send gripper actions.
 *
 * @generated from protobuf service mavsdk.rpc.gripper.GripperService
 */
export class GripperServiceClient implements IGripperServiceClient, ServiceInfo {
    typeName = GripperService.typeName;
    methods = GripperService.methods;
    options = GripperService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Gripper grab cargo.
     *
     * @generated from protobuf rpc: Grab(mavsdk.rpc.gripper.GrabRequest) returns (mavsdk.rpc.gripper.GrabResponse);
     */
    grab(input: GrabRequest, options?: RpcOptions): UnaryCall<GrabRequest, GrabResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GrabRequest, GrabResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Gripper release cargo.
     *
     * @generated from protobuf rpc: Release(mavsdk.rpc.gripper.ReleaseRequest) returns (mavsdk.rpc.gripper.ReleaseResponse);
     */
    release(input: ReleaseRequest, options?: RpcOptions): UnaryCall<ReleaseRequest, ReleaseResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReleaseRequest, ReleaseResponse>("unary", this._transport, method, opt, input);
    }
}
