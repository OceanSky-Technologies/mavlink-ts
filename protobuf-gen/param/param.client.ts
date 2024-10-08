/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "param/param.proto" (package "mavsdk.rpc.param", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ParamService } from "./param";
import type { SelectComponentResponse } from "./param";
import type { SelectComponentRequest } from "./param";
import type { GetAllParamsResponse } from "./param";
import type { GetAllParamsRequest } from "./param";
import type { SetParamCustomResponse } from "./param";
import type { SetParamCustomRequest } from "./param";
import type { GetParamCustomResponse } from "./param";
import type { GetParamCustomRequest } from "./param";
import type { SetParamFloatResponse } from "./param";
import type { SetParamFloatRequest } from "./param";
import type { GetParamFloatResponse } from "./param";
import type { GetParamFloatRequest } from "./param";
import type { SetParamIntResponse } from "./param";
import type { SetParamIntRequest } from "./param";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetParamIntResponse } from "./param";
import type { GetParamIntRequest } from "./param";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Provide raw access to get and set parameters.
 *
 * @generated from protobuf service mavsdk.rpc.param.ParamService
 */
export interface IParamServiceClient {
    /**
     *
     * Get an int parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: GetParamInt(mavsdk.rpc.param.GetParamIntRequest) returns (mavsdk.rpc.param.GetParamIntResponse);
     */
    getParamInt(input: GetParamIntRequest, options?: RpcOptions): UnaryCall<GetParamIntRequest, GetParamIntResponse>;
    /**
     *
     * Set an int parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: SetParamInt(mavsdk.rpc.param.SetParamIntRequest) returns (mavsdk.rpc.param.SetParamIntResponse);
     */
    setParamInt(input: SetParamIntRequest, options?: RpcOptions): UnaryCall<SetParamIntRequest, SetParamIntResponse>;
    /**
     *
     * Get a float parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: GetParamFloat(mavsdk.rpc.param.GetParamFloatRequest) returns (mavsdk.rpc.param.GetParamFloatResponse);
     */
    getParamFloat(input: GetParamFloatRequest, options?: RpcOptions): UnaryCall<GetParamFloatRequest, GetParamFloatResponse>;
    /**
     *
     * Set a float parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: SetParamFloat(mavsdk.rpc.param.SetParamFloatRequest) returns (mavsdk.rpc.param.SetParamFloatResponse);
     */
    setParamFloat(input: SetParamFloatRequest, options?: RpcOptions): UnaryCall<SetParamFloatRequest, SetParamFloatResponse>;
    /**
     *
     * Get a custom parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: GetParamCustom(mavsdk.rpc.param.GetParamCustomRequest) returns (mavsdk.rpc.param.GetParamCustomResponse);
     */
    getParamCustom(input: GetParamCustomRequest, options?: RpcOptions): UnaryCall<GetParamCustomRequest, GetParamCustomResponse>;
    /**
     *
     * Set a custom parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: SetParamCustom(mavsdk.rpc.param.SetParamCustomRequest) returns (mavsdk.rpc.param.SetParamCustomResponse);
     */
    setParamCustom(input: SetParamCustomRequest, options?: RpcOptions): UnaryCall<SetParamCustomRequest, SetParamCustomResponse>;
    /**
     *
     * Get all parameters.
     *
     * @generated from protobuf rpc: GetAllParams(mavsdk.rpc.param.GetAllParamsRequest) returns (mavsdk.rpc.param.GetAllParamsResponse);
     */
    getAllParams(input: GetAllParamsRequest, options?: RpcOptions): UnaryCall<GetAllParamsRequest, GetAllParamsResponse>;
    /**
     *
     * Select component ID of parameter component to talk to and param protocol version.
     *
     * Default is the autopilot component (1), and Version (0).
     *
     * @generated from protobuf rpc: SelectComponent(mavsdk.rpc.param.SelectComponentRequest) returns (mavsdk.rpc.param.SelectComponentResponse);
     */
    selectComponent(input: SelectComponentRequest, options?: RpcOptions): UnaryCall<SelectComponentRequest, SelectComponentResponse>;
}
/**
 * Provide raw access to get and set parameters.
 *
 * @generated from protobuf service mavsdk.rpc.param.ParamService
 */
export class ParamServiceClient implements IParamServiceClient, ServiceInfo {
    typeName = ParamService.typeName;
    methods = ParamService.methods;
    options = ParamService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Get an int parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: GetParamInt(mavsdk.rpc.param.GetParamIntRequest) returns (mavsdk.rpc.param.GetParamIntResponse);
     */
    getParamInt(input: GetParamIntRequest, options?: RpcOptions): UnaryCall<GetParamIntRequest, GetParamIntResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetParamIntRequest, GetParamIntResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set an int parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: SetParamInt(mavsdk.rpc.param.SetParamIntRequest) returns (mavsdk.rpc.param.SetParamIntResponse);
     */
    setParamInt(input: SetParamIntRequest, options?: RpcOptions): UnaryCall<SetParamIntRequest, SetParamIntResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetParamIntRequest, SetParamIntResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Get a float parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: GetParamFloat(mavsdk.rpc.param.GetParamFloatRequest) returns (mavsdk.rpc.param.GetParamFloatResponse);
     */
    getParamFloat(input: GetParamFloatRequest, options?: RpcOptions): UnaryCall<GetParamFloatRequest, GetParamFloatResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetParamFloatRequest, GetParamFloatResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set a float parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: SetParamFloat(mavsdk.rpc.param.SetParamFloatRequest) returns (mavsdk.rpc.param.SetParamFloatResponse);
     */
    setParamFloat(input: SetParamFloatRequest, options?: RpcOptions): UnaryCall<SetParamFloatRequest, SetParamFloatResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetParamFloatRequest, SetParamFloatResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Get a custom parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: GetParamCustom(mavsdk.rpc.param.GetParamCustomRequest) returns (mavsdk.rpc.param.GetParamCustomResponse);
     */
    getParamCustom(input: GetParamCustomRequest, options?: RpcOptions): UnaryCall<GetParamCustomRequest, GetParamCustomResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetParamCustomRequest, GetParamCustomResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set a custom parameter.
     *
     * If the type is wrong, the result will be `WRONG_TYPE`.
     *
     * @generated from protobuf rpc: SetParamCustom(mavsdk.rpc.param.SetParamCustomRequest) returns (mavsdk.rpc.param.SetParamCustomResponse);
     */
    setParamCustom(input: SetParamCustomRequest, options?: RpcOptions): UnaryCall<SetParamCustomRequest, SetParamCustomResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetParamCustomRequest, SetParamCustomResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Get all parameters.
     *
     * @generated from protobuf rpc: GetAllParams(mavsdk.rpc.param.GetAllParamsRequest) returns (mavsdk.rpc.param.GetAllParamsResponse);
     */
    getAllParams(input: GetAllParamsRequest, options?: RpcOptions): UnaryCall<GetAllParamsRequest, GetAllParamsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAllParamsRequest, GetAllParamsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Select component ID of parameter component to talk to and param protocol version.
     *
     * Default is the autopilot component (1), and Version (0).
     *
     * @generated from protobuf rpc: SelectComponent(mavsdk.rpc.param.SelectComponentRequest) returns (mavsdk.rpc.param.SelectComponentResponse);
     */
    selectComponent(input: SelectComponentRequest, options?: RpcOptions): UnaryCall<SelectComponentRequest, SelectComponentResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<SelectComponentRequest, SelectComponentResponse>("unary", this._transport, method, opt, input);
    }
}
