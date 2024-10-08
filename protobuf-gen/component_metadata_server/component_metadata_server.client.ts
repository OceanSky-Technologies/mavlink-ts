/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "component_metadata_server/component_metadata_server.proto" (package "mavsdk.rpc.component_metadata_server", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ComponentMetadataServerService } from "./component_metadata_server";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { SetMetadataResponse } from "./component_metadata_server";
import type { SetMetadataRequest } from "./component_metadata_server";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Provide component metadata json definitions, such as parameters.
 *
 * @generated from protobuf service mavsdk.rpc.component_metadata_server.ComponentMetadataServerService
 */
export interface IComponentMetadataServerServiceClient {
    /**
     *
     * Provide metadata (can only be called once)
     *
     * @generated from protobuf rpc: SetMetadata(mavsdk.rpc.component_metadata_server.SetMetadataRequest) returns (mavsdk.rpc.component_metadata_server.SetMetadataResponse);
     */
    setMetadata(input: SetMetadataRequest, options?: RpcOptions): UnaryCall<SetMetadataRequest, SetMetadataResponse>;
}
/**
 * Provide component metadata json definitions, such as parameters.
 *
 * @generated from protobuf service mavsdk.rpc.component_metadata_server.ComponentMetadataServerService
 */
export class ComponentMetadataServerServiceClient implements IComponentMetadataServerServiceClient, ServiceInfo {
    typeName = ComponentMetadataServerService.typeName;
    methods = ComponentMetadataServerService.methods;
    options = ComponentMetadataServerService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Provide metadata (can only be called once)
     *
     * @generated from protobuf rpc: SetMetadata(mavsdk.rpc.component_metadata_server.SetMetadataRequest) returns (mavsdk.rpc.component_metadata_server.SetMetadataResponse);
     */
    setMetadata(input: SetMetadataRequest, options?: RpcOptions): UnaryCall<SetMetadataRequest, SetMetadataResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetMetadataRequest, SetMetadataResponse>("unary", this._transport, method, opt, input);
    }
}
