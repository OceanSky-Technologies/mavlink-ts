/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "rtk/rtk.proto" (package "mavsdk.rpc.rtk", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * RTCM data type
 *
 * @generated from protobuf message mavsdk.rpc.rtk.RtcmData
 */
export interface RtcmData {
    /**
     * @generated from protobuf field: string data_base64 = 1;
     */
    dataBase64: string; // The data encoded as a base64 string
}
/**
 * @generated from protobuf message mavsdk.rpc.rtk.SendRtcmDataRequest
 */
export interface SendRtcmDataRequest {
    /**
     * @generated from protobuf field: mavsdk.rpc.rtk.RtcmData rtcm_data = 1;
     */
    rtcmData?: RtcmData; // The data
}
/**
 * @generated from protobuf message mavsdk.rpc.rtk.SendRtcmDataResponse
 */
export interface SendRtcmDataResponse {
    /**
     * @generated from protobuf field: mavsdk.rpc.rtk.RtkResult rtk_result = 1;
     */
    rtkResult?: RtkResult;
}
/**
 * @generated from protobuf message mavsdk.rpc.rtk.RtkResult
 */
export interface RtkResult {
    /**
     * @generated from protobuf field: mavsdk.rpc.rtk.RtkResult.Result result = 1;
     */
    result: RtkResult_Result; // Result enum value
    /**
     * @generated from protobuf field: string result_str = 2;
     */
    resultStr: string; // Human-readable English string describing the result
}
/**
 * Possible results returned for rtk requests.
 *
 * @generated from protobuf enum mavsdk.rpc.rtk.RtkResult.Result
 */
export enum RtkResult_Result {
    /**
     * Unknown result
     *
     * @generated from protobuf enum value: RESULT_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Request succeeded
     *
     * @generated from protobuf enum value: RESULT_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * Passed data is too long
     *
     * @generated from protobuf enum value: RESULT_TOO_LONG = 2;
     */
    TOO_LONG = 2,
    /**
     * No system connected
     *
     * @generated from protobuf enum value: RESULT_NO_SYSTEM = 5;
     */
    NO_SYSTEM = 5,
    /**
     * Connection error
     *
     * @generated from protobuf enum value: RESULT_CONNECTION_ERROR = 6;
     */
    CONNECTION_ERROR = 6
}
// @generated message type with reflection information, may provide speed optimized methods
class RtcmData$Type extends MessageType<RtcmData> {
    constructor() {
        super("mavsdk.rpc.rtk.RtcmData", [
            { no: 1, name: "data_base64", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RtcmData>): RtcmData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.dataBase64 = "";
        if (value !== undefined)
            reflectionMergePartial<RtcmData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RtcmData): RtcmData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string data_base64 */ 1:
                    message.dataBase64 = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RtcmData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string data_base64 = 1; */
        if (message.dataBase64 !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.dataBase64);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.rtk.RtcmData
 */
export const RtcmData = new RtcmData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendRtcmDataRequest$Type extends MessageType<SendRtcmDataRequest> {
    constructor() {
        super("mavsdk.rpc.rtk.SendRtcmDataRequest", [
            { no: 1, name: "rtcm_data", kind: "message", T: () => RtcmData }
        ]);
    }
    create(value?: PartialMessage<SendRtcmDataRequest>): SendRtcmDataRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SendRtcmDataRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendRtcmDataRequest): SendRtcmDataRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.rtk.RtcmData rtcm_data */ 1:
                    message.rtcmData = RtcmData.internalBinaryRead(reader, reader.uint32(), options, message.rtcmData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SendRtcmDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.rtk.RtcmData rtcm_data = 1; */
        if (message.rtcmData)
            RtcmData.internalBinaryWrite(message.rtcmData, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.rtk.SendRtcmDataRequest
 */
export const SendRtcmDataRequest = new SendRtcmDataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendRtcmDataResponse$Type extends MessageType<SendRtcmDataResponse> {
    constructor() {
        super("mavsdk.rpc.rtk.SendRtcmDataResponse", [
            { no: 1, name: "rtk_result", kind: "message", T: () => RtkResult }
        ]);
    }
    create(value?: PartialMessage<SendRtcmDataResponse>): SendRtcmDataResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SendRtcmDataResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendRtcmDataResponse): SendRtcmDataResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.rtk.RtkResult rtk_result */ 1:
                    message.rtkResult = RtkResult.internalBinaryRead(reader, reader.uint32(), options, message.rtkResult);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SendRtcmDataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.rtk.RtkResult rtk_result = 1; */
        if (message.rtkResult)
            RtkResult.internalBinaryWrite(message.rtkResult, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.rtk.SendRtcmDataResponse
 */
export const SendRtcmDataResponse = new SendRtcmDataResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RtkResult$Type extends MessageType<RtkResult> {
    constructor() {
        super("mavsdk.rpc.rtk.RtkResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["mavsdk.rpc.rtk.RtkResult.Result", RtkResult_Result, "RESULT_"] },
            { no: 2, name: "result_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RtkResult>): RtkResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.result = 0;
        message.resultStr = "";
        if (value !== undefined)
            reflectionMergePartial<RtkResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RtkResult): RtkResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.rtk.RtkResult.Result result */ 1:
                    message.result = reader.int32();
                    break;
                case /* string result_str */ 2:
                    message.resultStr = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RtkResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.rtk.RtkResult.Result result = 1; */
        if (message.result !== 0)
            writer.tag(1, WireType.Varint).int32(message.result);
        /* string result_str = 2; */
        if (message.resultStr !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.resultStr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.rtk.RtkResult
 */
export const RtkResult = new RtkResult$Type();
/**
 * @generated ServiceType for protobuf service mavsdk.rpc.rtk.RtkService
 */
export const RtkService = new ServiceType("mavsdk.rpc.rtk.RtkService", [
    { name: "SendRtcmData", options: { "mavsdk.options.async_type": "SYNC" }, I: SendRtcmDataRequest, O: SendRtcmDataResponse }
]);
