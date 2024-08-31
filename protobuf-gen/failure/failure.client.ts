/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "failure/failure.proto" (package "mavsdk.rpc.failure", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { FailureService } from "./failure";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { InjectResponse } from "./failure";
import type { InjectRequest } from "./failure";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Inject failures into system to test failsafes.
 *
 * @generated from protobuf service mavsdk.rpc.failure.FailureService
 */
export interface IFailureServiceClient {
    /**
     * Injects a failure.
     *
     * @generated from protobuf rpc: Inject(mavsdk.rpc.failure.InjectRequest) returns (mavsdk.rpc.failure.InjectResponse);
     */
    inject(input: InjectRequest, options?: RpcOptions): UnaryCall<InjectRequest, InjectResponse>;
}
/**
 * Inject failures into system to test failsafes.
 *
 * @generated from protobuf service mavsdk.rpc.failure.FailureService
 */
export class FailureServiceClient implements IFailureServiceClient, ServiceInfo {
    typeName = FailureService.typeName;
    methods = FailureService.methods;
    options = FailureService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Injects a failure.
     *
     * @generated from protobuf rpc: Inject(mavsdk.rpc.failure.InjectRequest) returns (mavsdk.rpc.failure.InjectResponse);
     */
    inject(input: InjectRequest, options?: RpcOptions): UnaryCall<InjectRequest, InjectResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<InjectRequest, InjectResponse>("unary", this._transport, method, opt, input);
    }
}
