/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "calibration/calibration.proto" (package "mavsdk.rpc.calibration", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { CalibrationService } from "./calibration";
import type { CancelResponse } from "./calibration";
import type { CancelRequest } from "./calibration";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { CalibrateGimbalAccelerometerResponse } from "./calibration";
import type { SubscribeCalibrateGimbalAccelerometerRequest } from "./calibration";
import type { CalibrateLevelHorizonResponse } from "./calibration";
import type { SubscribeCalibrateLevelHorizonRequest } from "./calibration";
import type { CalibrateMagnetometerResponse } from "./calibration";
import type { SubscribeCalibrateMagnetometerRequest } from "./calibration";
import type { CalibrateAccelerometerResponse } from "./calibration";
import type { SubscribeCalibrateAccelerometerRequest } from "./calibration";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CalibrateGyroResponse } from "./calibration";
import type { SubscribeCalibrateGyroRequest } from "./calibration";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Enable to calibrate sensors of a drone such as gyro, accelerometer, and magnetometer.
 *
 * @generated from protobuf service mavsdk.rpc.calibration.CalibrationService
 */
export interface ICalibrationServiceClient {
    /**
     * Perform gyro calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateGyro(mavsdk.rpc.calibration.SubscribeCalibrateGyroRequest) returns (stream mavsdk.rpc.calibration.CalibrateGyroResponse);
     */
    subscribeCalibrateGyro(input: SubscribeCalibrateGyroRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateGyroRequest, CalibrateGyroResponse>;
    /**
     * Perform accelerometer calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateAccelerometer(mavsdk.rpc.calibration.SubscribeCalibrateAccelerometerRequest) returns (stream mavsdk.rpc.calibration.CalibrateAccelerometerResponse);
     */
    subscribeCalibrateAccelerometer(input: SubscribeCalibrateAccelerometerRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateAccelerometerRequest, CalibrateAccelerometerResponse>;
    /**
     * Perform magnetometer calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateMagnetometer(mavsdk.rpc.calibration.SubscribeCalibrateMagnetometerRequest) returns (stream mavsdk.rpc.calibration.CalibrateMagnetometerResponse);
     */
    subscribeCalibrateMagnetometer(input: SubscribeCalibrateMagnetometerRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateMagnetometerRequest, CalibrateMagnetometerResponse>;
    /**
     * Perform board level horizon calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateLevelHorizon(mavsdk.rpc.calibration.SubscribeCalibrateLevelHorizonRequest) returns (stream mavsdk.rpc.calibration.CalibrateLevelHorizonResponse);
     */
    subscribeCalibrateLevelHorizon(input: SubscribeCalibrateLevelHorizonRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateLevelHorizonRequest, CalibrateLevelHorizonResponse>;
    /**
     * Perform gimbal accelerometer calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateGimbalAccelerometer(mavsdk.rpc.calibration.SubscribeCalibrateGimbalAccelerometerRequest) returns (stream mavsdk.rpc.calibration.CalibrateGimbalAccelerometerResponse);
     */
    subscribeCalibrateGimbalAccelerometer(input: SubscribeCalibrateGimbalAccelerometerRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateGimbalAccelerometerRequest, CalibrateGimbalAccelerometerResponse>;
    /**
     * Cancel ongoing calibration process.
     *
     * @generated from protobuf rpc: Cancel(mavsdk.rpc.calibration.CancelRequest) returns (mavsdk.rpc.calibration.CancelResponse);
     */
    cancel(input: CancelRequest, options?: RpcOptions): UnaryCall<CancelRequest, CancelResponse>;
}
/**
 * Enable to calibrate sensors of a drone such as gyro, accelerometer, and magnetometer.
 *
 * @generated from protobuf service mavsdk.rpc.calibration.CalibrationService
 */
export class CalibrationServiceClient implements ICalibrationServiceClient, ServiceInfo {
    typeName = CalibrationService.typeName;
    methods = CalibrationService.methods;
    options = CalibrationService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Perform gyro calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateGyro(mavsdk.rpc.calibration.SubscribeCalibrateGyroRequest) returns (stream mavsdk.rpc.calibration.CalibrateGyroResponse);
     */
    subscribeCalibrateGyro(input: SubscribeCalibrateGyroRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateGyroRequest, CalibrateGyroResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCalibrateGyroRequest, CalibrateGyroResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Perform accelerometer calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateAccelerometer(mavsdk.rpc.calibration.SubscribeCalibrateAccelerometerRequest) returns (stream mavsdk.rpc.calibration.CalibrateAccelerometerResponse);
     */
    subscribeCalibrateAccelerometer(input: SubscribeCalibrateAccelerometerRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateAccelerometerRequest, CalibrateAccelerometerResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCalibrateAccelerometerRequest, CalibrateAccelerometerResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Perform magnetometer calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateMagnetometer(mavsdk.rpc.calibration.SubscribeCalibrateMagnetometerRequest) returns (stream mavsdk.rpc.calibration.CalibrateMagnetometerResponse);
     */
    subscribeCalibrateMagnetometer(input: SubscribeCalibrateMagnetometerRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateMagnetometerRequest, CalibrateMagnetometerResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCalibrateMagnetometerRequest, CalibrateMagnetometerResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Perform board level horizon calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateLevelHorizon(mavsdk.rpc.calibration.SubscribeCalibrateLevelHorizonRequest) returns (stream mavsdk.rpc.calibration.CalibrateLevelHorizonResponse);
     */
    subscribeCalibrateLevelHorizon(input: SubscribeCalibrateLevelHorizonRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateLevelHorizonRequest, CalibrateLevelHorizonResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCalibrateLevelHorizonRequest, CalibrateLevelHorizonResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Perform gimbal accelerometer calibration.
     *
     * @generated from protobuf rpc: SubscribeCalibrateGimbalAccelerometer(mavsdk.rpc.calibration.SubscribeCalibrateGimbalAccelerometerRequest) returns (stream mavsdk.rpc.calibration.CalibrateGimbalAccelerometerResponse);
     */
    subscribeCalibrateGimbalAccelerometer(input: SubscribeCalibrateGimbalAccelerometerRequest, options?: RpcOptions): ServerStreamingCall<SubscribeCalibrateGimbalAccelerometerRequest, CalibrateGimbalAccelerometerResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeCalibrateGimbalAccelerometerRequest, CalibrateGimbalAccelerometerResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Cancel ongoing calibration process.
     *
     * @generated from protobuf rpc: Cancel(mavsdk.rpc.calibration.CancelRequest) returns (mavsdk.rpc.calibration.CancelResponse);
     */
    cancel(input: CancelRequest, options?: RpcOptions): UnaryCall<CancelRequest, CancelResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<CancelRequest, CancelResponse>("unary", this._transport, method, opt, input);
    }
}
