/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "transponder/transponder.proto" (package "mavsdk.rpc.transponder", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message mavsdk.rpc.transponder.SubscribeTransponderRequest
 */
export interface SubscribeTransponderRequest {
}
/**
 * @generated from protobuf message mavsdk.rpc.transponder.TransponderResponse
 */
export interface TransponderResponse {
    /**
     * @generated from protobuf field: mavsdk.rpc.transponder.AdsbVehicle transponder = 1;
     */
    transponder?: AdsbVehicle; // The next detection
}
/**
 * @generated from protobuf message mavsdk.rpc.transponder.SetRateTransponderRequest
 */
export interface SetRateTransponderRequest {
    /**
     * @generated from protobuf field: double rate_hz = 1;
     */
    rateHz: number; // The requested rate (in Hertz)
}
/**
 * @generated from protobuf message mavsdk.rpc.transponder.SetRateTransponderResponse
 */
export interface SetRateTransponderResponse {
    /**
     * @generated from protobuf field: mavsdk.rpc.transponder.TransponderResult transponder_result = 1;
     */
    transponderResult?: TransponderResult;
}
/**
 * ADSB Vehicle type.
 *
 * @generated from protobuf message mavsdk.rpc.transponder.AdsbVehicle
 */
export interface AdsbVehicle {
    /**
     * @generated from protobuf field: uint32 icao_address = 1;
     */
    icaoAddress: number; // ICAO (International Civil Aviation Organization) unique worldwide identifier
    /**
     * @generated from protobuf field: double latitude_deg = 2;
     */
    latitudeDeg: number; // Latitude in degrees (range: -90 to +90)
    /**
     * @generated from protobuf field: double longitude_deg = 3;
     */
    longitudeDeg: number; // Longitude in degrees (range: -180 to +180).
    /**
     * @generated from protobuf field: mavsdk.rpc.transponder.AdsbAltitudeType altitude_type = 4;
     */
    altitudeType: AdsbAltitudeType; // ADSB altitude type.
    /**
     * @generated from protobuf field: float absolute_altitude_m = 5;
     */
    absoluteAltitudeM: number; // Altitude in metres according to altitude_type 
    /**
     * @generated from protobuf field: float heading_deg = 6;
     */
    headingDeg: number; // Course over ground, in degrees
    /**
     * @generated from protobuf field: float horizontal_velocity_m_s = 7;
     */
    horizontalVelocityMS: number; // The horizontal velocity in metres/second
    /**
     * @generated from protobuf field: float vertical_velocity_m_s = 8;
     */
    verticalVelocityMS: number; // The vertical velocity in metres/second. Positive is up.
    /**
     * @generated from protobuf field: string callsign = 9;
     */
    callsign: string; // The callsign
    /**
     * @generated from protobuf field: mavsdk.rpc.transponder.AdsbEmitterType emitter_type = 10;
     */
    emitterType: AdsbEmitterType; // ADSB emitter type.
    /**
     * @generated from protobuf field: uint32 squawk = 13;
     */
    squawk: number; // Squawk code.
    /**
     * @generated from protobuf field: uint32 tslc_s = 14;
     */
    tslcS: number; // Time Since Last Communication in seconds.
}
/**
 * Result type.
 *
 * @generated from protobuf message mavsdk.rpc.transponder.TransponderResult
 */
export interface TransponderResult {
    /**
     * @generated from protobuf field: mavsdk.rpc.transponder.TransponderResult.Result result = 1;
     */
    result: TransponderResult_Result; // Result enum value
    /**
     * @generated from protobuf field: string result_str = 2;
     */
    resultStr: string; // Human-readable English string describing the result
}
/**
 * Possible results returned for transponder requests.
 *
 * @generated from protobuf enum mavsdk.rpc.transponder.TransponderResult.Result
 */
export enum TransponderResult_Result {
    /**
     * Unknown result
     *
     * @generated from protobuf enum value: RESULT_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Success: the transponder command was accepted by the vehicle
     *
     * @generated from protobuf enum value: RESULT_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * No system connected
     *
     * @generated from protobuf enum value: RESULT_NO_SYSTEM = 2;
     */
    NO_SYSTEM = 2,
    /**
     * Connection error
     *
     * @generated from protobuf enum value: RESULT_CONNECTION_ERROR = 3;
     */
    CONNECTION_ERROR = 3,
    /**
     * Vehicle is busy
     *
     * @generated from protobuf enum value: RESULT_BUSY = 4;
     */
    BUSY = 4,
    /**
     * Command refused by vehicle
     *
     * @generated from protobuf enum value: RESULT_COMMAND_DENIED = 5;
     */
    COMMAND_DENIED = 5,
    /**
     * Request timed out
     *
     * @generated from protobuf enum value: RESULT_TIMEOUT = 6;
     */
    TIMEOUT = 6
}
/**
 * ADSB classification for the type of vehicle emitting the transponder signal.
 *
 * @generated from protobuf enum mavsdk.rpc.transponder.AdsbEmitterType
 */
export enum AdsbEmitterType {
    /**
     * No emitter info.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_NO_INFO = 0;
     */
    NO_INFO = 0,
    /**
     * Light emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_LIGHT = 1;
     */
    LIGHT = 1,
    /**
     * Small emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_SMALL = 2;
     */
    SMALL = 2,
    /**
     * Large emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_LARGE = 3;
     */
    LARGE = 3,
    /**
     * High vortex emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_HIGH_VORTEX_LARGE = 4;
     */
    HIGH_VORTEX_LARGE = 4,
    /**
     * Heavy emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_HEAVY = 5;
     */
    HEAVY = 5,
    /**
     * Highly maneuverable emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_HIGHLY_MANUV = 6;
     */
    HIGHLY_MANUV = 6,
    /**
     * Rotorcraft emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_ROTOCRAFT = 7;
     */
    ROTOCRAFT = 7,
    /**
     * Unassigned emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_UNASSIGNED = 8;
     */
    UNASSIGNED = 8,
    /**
     * Glider emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_GLIDER = 9;
     */
    GLIDER = 9,
    /**
     * Lighter air emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_LIGHTER_AIR = 10;
     */
    LIGHTER_AIR = 10,
    /**
     * Parachute emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_PARACHUTE = 11;
     */
    PARACHUTE = 11,
    /**
     * Ultra light emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_ULTRA_LIGHT = 12;
     */
    ULTRA_LIGHT = 12,
    /**
     * Unassigned2 emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_UNASSIGNED2 = 13;
     */
    UNASSIGNED2 = 13,
    /**
     * UAV emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_UAV = 14;
     */
    UAV = 14,
    /**
     * Space emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_SPACE = 15;
     */
    SPACE = 15,
    /**
     * Unassigned3 emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_UNASSGINED3 = 16;
     */
    UNASSGINED3 = 16,
    /**
     * Emergency emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_EMERGENCY_SURFACE = 17;
     */
    EMERGENCY_SURFACE = 17,
    /**
     * Service surface emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_SERVICE_SURFACE = 18;
     */
    SERVICE_SURFACE = 18,
    /**
     * Point obstacle emitter.
     *
     * @generated from protobuf enum value: ADSB_EMITTER_TYPE_POINT_OBSTACLE = 19;
     */
    POINT_OBSTACLE = 19
}
/**
 * Altitude type used in AdsbVehicle message
 *
 * @generated from protobuf enum mavsdk.rpc.transponder.AdsbAltitudeType
 */
export enum AdsbAltitudeType {
    /**
     * Altitude reported from a Baro source using QNH reference
     *
     * @generated from protobuf enum value: ADSB_ALTITUDE_TYPE_PRESSURE_QNH = 0;
     */
    PRESSURE_QNH = 0,
    /**
     * Altitude reported from a GNSS source
     *
     * @generated from protobuf enum value: ADSB_ALTITUDE_TYPE_GEOMETRIC = 1;
     */
    GEOMETRIC = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class SubscribeTransponderRequest$Type extends MessageType<SubscribeTransponderRequest> {
    constructor() {
        super("mavsdk.rpc.transponder.SubscribeTransponderRequest", []);
    }
    create(value?: PartialMessage<SubscribeTransponderRequest>): SubscribeTransponderRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SubscribeTransponderRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeTransponderRequest): SubscribeTransponderRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SubscribeTransponderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.transponder.SubscribeTransponderRequest
 */
export const SubscribeTransponderRequest = new SubscribeTransponderRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TransponderResponse$Type extends MessageType<TransponderResponse> {
    constructor() {
        super("mavsdk.rpc.transponder.TransponderResponse", [
            { no: 1, name: "transponder", kind: "message", T: () => AdsbVehicle }
        ]);
    }
    create(value?: PartialMessage<TransponderResponse>): TransponderResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<TransponderResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TransponderResponse): TransponderResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.transponder.AdsbVehicle transponder */ 1:
                    message.transponder = AdsbVehicle.internalBinaryRead(reader, reader.uint32(), options, message.transponder);
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
    internalBinaryWrite(message: TransponderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.transponder.AdsbVehicle transponder = 1; */
        if (message.transponder)
            AdsbVehicle.internalBinaryWrite(message.transponder, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.transponder.TransponderResponse
 */
export const TransponderResponse = new TransponderResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetRateTransponderRequest$Type extends MessageType<SetRateTransponderRequest> {
    constructor() {
        super("mavsdk.rpc.transponder.SetRateTransponderRequest", [
            { no: 1, name: "rate_hz", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<SetRateTransponderRequest>): SetRateTransponderRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.rateHz = 0;
        if (value !== undefined)
            reflectionMergePartial<SetRateTransponderRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetRateTransponderRequest): SetRateTransponderRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double rate_hz */ 1:
                    message.rateHz = reader.double();
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
    internalBinaryWrite(message: SetRateTransponderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double rate_hz = 1; */
        if (message.rateHz !== 0)
            writer.tag(1, WireType.Bit64).double(message.rateHz);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.transponder.SetRateTransponderRequest
 */
export const SetRateTransponderRequest = new SetRateTransponderRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetRateTransponderResponse$Type extends MessageType<SetRateTransponderResponse> {
    constructor() {
        super("mavsdk.rpc.transponder.SetRateTransponderResponse", [
            { no: 1, name: "transponder_result", kind: "message", T: () => TransponderResult }
        ]);
    }
    create(value?: PartialMessage<SetRateTransponderResponse>): SetRateTransponderResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SetRateTransponderResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetRateTransponderResponse): SetRateTransponderResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.transponder.TransponderResult transponder_result */ 1:
                    message.transponderResult = TransponderResult.internalBinaryRead(reader, reader.uint32(), options, message.transponderResult);
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
    internalBinaryWrite(message: SetRateTransponderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.transponder.TransponderResult transponder_result = 1; */
        if (message.transponderResult)
            TransponderResult.internalBinaryWrite(message.transponderResult, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.transponder.SetRateTransponderResponse
 */
export const SetRateTransponderResponse = new SetRateTransponderResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdsbVehicle$Type extends MessageType<AdsbVehicle> {
    constructor() {
        super("mavsdk.rpc.transponder.AdsbVehicle", [
            { no: 1, name: "icao_address", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "latitude_deg", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "longitude_deg", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "altitude_type", kind: "enum", T: () => ["mavsdk.rpc.transponder.AdsbAltitudeType", AdsbAltitudeType, "ADSB_ALTITUDE_TYPE_"] },
            { no: 5, name: "absolute_altitude_m", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 6, name: "heading_deg", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "horizontal_velocity_m_s", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "vertical_velocity_m_s", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "callsign", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "emitter_type", kind: "enum", T: () => ["mavsdk.rpc.transponder.AdsbEmitterType", AdsbEmitterType, "ADSB_EMITTER_TYPE_"] },
            { no: 13, name: "squawk", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "tslc_s", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AdsbVehicle>): AdsbVehicle {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.icaoAddress = 0;
        message.latitudeDeg = 0;
        message.longitudeDeg = 0;
        message.altitudeType = 0;
        message.absoluteAltitudeM = 0;
        message.headingDeg = 0;
        message.horizontalVelocityMS = 0;
        message.verticalVelocityMS = 0;
        message.callsign = "";
        message.emitterType = 0;
        message.squawk = 0;
        message.tslcS = 0;
        if (value !== undefined)
            reflectionMergePartial<AdsbVehicle>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdsbVehicle): AdsbVehicle {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 icao_address */ 1:
                    message.icaoAddress = reader.uint32();
                    break;
                case /* double latitude_deg */ 2:
                    message.latitudeDeg = reader.double();
                    break;
                case /* double longitude_deg */ 3:
                    message.longitudeDeg = reader.double();
                    break;
                case /* mavsdk.rpc.transponder.AdsbAltitudeType altitude_type */ 4:
                    message.altitudeType = reader.int32();
                    break;
                case /* float absolute_altitude_m */ 5:
                    message.absoluteAltitudeM = reader.float();
                    break;
                case /* float heading_deg */ 6:
                    message.headingDeg = reader.float();
                    break;
                case /* float horizontal_velocity_m_s */ 7:
                    message.horizontalVelocityMS = reader.float();
                    break;
                case /* float vertical_velocity_m_s */ 8:
                    message.verticalVelocityMS = reader.float();
                    break;
                case /* string callsign */ 9:
                    message.callsign = reader.string();
                    break;
                case /* mavsdk.rpc.transponder.AdsbEmitterType emitter_type */ 10:
                    message.emitterType = reader.int32();
                    break;
                case /* uint32 squawk */ 13:
                    message.squawk = reader.uint32();
                    break;
                case /* uint32 tslc_s */ 14:
                    message.tslcS = reader.uint32();
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
    internalBinaryWrite(message: AdsbVehicle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 icao_address = 1; */
        if (message.icaoAddress !== 0)
            writer.tag(1, WireType.Varint).uint32(message.icaoAddress);
        /* double latitude_deg = 2; */
        if (message.latitudeDeg !== 0)
            writer.tag(2, WireType.Bit64).double(message.latitudeDeg);
        /* double longitude_deg = 3; */
        if (message.longitudeDeg !== 0)
            writer.tag(3, WireType.Bit64).double(message.longitudeDeg);
        /* mavsdk.rpc.transponder.AdsbAltitudeType altitude_type = 4; */
        if (message.altitudeType !== 0)
            writer.tag(4, WireType.Varint).int32(message.altitudeType);
        /* float absolute_altitude_m = 5; */
        if (message.absoluteAltitudeM !== 0)
            writer.tag(5, WireType.Bit32).float(message.absoluteAltitudeM);
        /* float heading_deg = 6; */
        if (message.headingDeg !== 0)
            writer.tag(6, WireType.Bit32).float(message.headingDeg);
        /* float horizontal_velocity_m_s = 7; */
        if (message.horizontalVelocityMS !== 0)
            writer.tag(7, WireType.Bit32).float(message.horizontalVelocityMS);
        /* float vertical_velocity_m_s = 8; */
        if (message.verticalVelocityMS !== 0)
            writer.tag(8, WireType.Bit32).float(message.verticalVelocityMS);
        /* string callsign = 9; */
        if (message.callsign !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.callsign);
        /* mavsdk.rpc.transponder.AdsbEmitterType emitter_type = 10; */
        if (message.emitterType !== 0)
            writer.tag(10, WireType.Varint).int32(message.emitterType);
        /* uint32 squawk = 13; */
        if (message.squawk !== 0)
            writer.tag(13, WireType.Varint).uint32(message.squawk);
        /* uint32 tslc_s = 14; */
        if (message.tslcS !== 0)
            writer.tag(14, WireType.Varint).uint32(message.tslcS);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.transponder.AdsbVehicle
 */
export const AdsbVehicle = new AdsbVehicle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TransponderResult$Type extends MessageType<TransponderResult> {
    constructor() {
        super("mavsdk.rpc.transponder.TransponderResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["mavsdk.rpc.transponder.TransponderResult.Result", TransponderResult_Result, "RESULT_"] },
            { no: 2, name: "result_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TransponderResult>): TransponderResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.result = 0;
        message.resultStr = "";
        if (value !== undefined)
            reflectionMergePartial<TransponderResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TransponderResult): TransponderResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.transponder.TransponderResult.Result result */ 1:
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
    internalBinaryWrite(message: TransponderResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.transponder.TransponderResult.Result result = 1; */
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
 * @generated MessageType for protobuf message mavsdk.rpc.transponder.TransponderResult
 */
export const TransponderResult = new TransponderResult$Type();
/**
 * @generated ServiceType for protobuf service mavsdk.rpc.transponder.TransponderService
 */
export const TransponderService = new ServiceType("mavsdk.rpc.transponder.TransponderService", [
    { name: "SubscribeTransponder", serverStreaming: true, options: {}, I: SubscribeTransponderRequest, O: TransponderResponse },
    { name: "SetRateTransponder", options: {}, I: SetRateTransponderRequest, O: SetRateTransponderResponse }
]);
