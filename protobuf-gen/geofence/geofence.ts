/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "geofence/geofence.proto" (package "mavsdk.rpc.geofence", syntax proto3)
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
 * Point type.
 *
 * @generated from protobuf message mavsdk.rpc.geofence.Point
 */
export interface Point {
    /**
     * @generated from protobuf field: double latitude_deg = 1;
     */
    latitudeDeg: number; // Latitude in degrees (range: -90 to +90)
    /**
     * @generated from protobuf field: double longitude_deg = 2;
     */
    longitudeDeg: number; // Longitude in degrees (range: -180 to +180)
}
/**
 * Polygon type.
 *
 * @generated from protobuf message mavsdk.rpc.geofence.Polygon
 */
export interface Polygon {
    /**
     * @generated from protobuf field: repeated mavsdk.rpc.geofence.Point points = 1;
     */
    points: Point[]; // Points defining the polygon
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.FenceType fence_type = 2;
     */
    fenceType: FenceType; // Fence type
}
/**
 * Circular type.
 *
 * @generated from protobuf message mavsdk.rpc.geofence.Circle
 */
export interface Circle {
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.Point point = 1;
     */
    point?: Point; // Point defining the center
    /**
     * @generated from protobuf field: float radius = 2;
     */
    radius: number; // Radius of the circular fence
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.FenceType fence_type = 3;
     */
    fenceType: FenceType; // Fence type
}
/**
 * Geofence data type.
 *
 * @generated from protobuf message mavsdk.rpc.geofence.GeofenceData
 */
export interface GeofenceData {
    /**
     * @generated from protobuf field: repeated mavsdk.rpc.geofence.Polygon polygons = 1;
     */
    polygons: Polygon[]; // Polygon(s) representing the geofence(s)
    /**
     * @generated from protobuf field: repeated mavsdk.rpc.geofence.Circle circles = 2;
     */
    circles: Circle[]; // Circle(s) representing the geofence(s)
}
/**
 * @generated from protobuf message mavsdk.rpc.geofence.UploadGeofenceRequest
 */
export interface UploadGeofenceRequest {
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.GeofenceData geofence_data = 1;
     */
    geofenceData?: GeofenceData; // Circle(s) and/or Polygon(s) representing the geofence(s)
}
/**
 * @generated from protobuf message mavsdk.rpc.geofence.UploadGeofenceResponse
 */
export interface UploadGeofenceResponse {
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.GeofenceResult geofence_result = 1;
     */
    geofenceResult?: GeofenceResult;
}
/**
 * @generated from protobuf message mavsdk.rpc.geofence.ClearGeofenceRequest
 */
export interface ClearGeofenceRequest {
}
/**
 * @generated from protobuf message mavsdk.rpc.geofence.ClearGeofenceResponse
 */
export interface ClearGeofenceResponse {
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.GeofenceResult geofence_result = 1;
     */
    geofenceResult?: GeofenceResult;
}
/**
 * Result type.
 *
 * @generated from protobuf message mavsdk.rpc.geofence.GeofenceResult
 */
export interface GeofenceResult {
    /**
     * @generated from protobuf field: mavsdk.rpc.geofence.GeofenceResult.Result result = 1;
     */
    result: GeofenceResult_Result; // Result enum value
    /**
     * @generated from protobuf field: string result_str = 2;
     */
    resultStr: string; // Human-readable English string describing the result
}
/**
 * Possible results returned for geofence requests.
 *
 * @generated from protobuf enum mavsdk.rpc.geofence.GeofenceResult.Result
 */
export enum GeofenceResult_Result {
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
     * Error
     *
     * @generated from protobuf enum value: RESULT_ERROR = 2;
     */
    ERROR = 2,
    /**
     * Too many objects in the geofence
     *
     * @generated from protobuf enum value: RESULT_TOO_MANY_GEOFENCE_ITEMS = 3;
     */
    TOO_MANY_GEOFENCE_ITEMS = 3,
    /**
     * Vehicle is busy
     *
     * @generated from protobuf enum value: RESULT_BUSY = 4;
     */
    BUSY = 4,
    /**
     * Request timed out
     *
     * @generated from protobuf enum value: RESULT_TIMEOUT = 5;
     */
    TIMEOUT = 5,
    /**
     * Invalid argument
     *
     * @generated from protobuf enum value: RESULT_INVALID_ARGUMENT = 6;
     */
    INVALID_ARGUMENT = 6,
    /**
     * No system connected
     *
     * @generated from protobuf enum value: RESULT_NO_SYSTEM = 7;
     */
    NO_SYSTEM = 7
}
/**
 * Geofence types.
 *
 * @generated from protobuf enum mavsdk.rpc.geofence.FenceType
 */
export enum FenceType {
    /**
     * Type representing an inclusion fence
     *
     * @generated from protobuf enum value: FENCE_TYPE_INCLUSION = 0;
     */
    INCLUSION = 0,
    /**
     * Type representing an exclusion fence
     *
     * @generated from protobuf enum value: FENCE_TYPE_EXCLUSION = 1;
     */
    EXCLUSION = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class Point$Type extends MessageType<Point> {
    constructor() {
        super("mavsdk.rpc.geofence.Point", [
            { no: 1, name: "latitude_deg", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "longitude_deg", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<Point>): Point {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.latitudeDeg = 0;
        message.longitudeDeg = 0;
        if (value !== undefined)
            reflectionMergePartial<Point>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Point): Point {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double latitude_deg */ 1:
                    message.latitudeDeg = reader.double();
                    break;
                case /* double longitude_deg */ 2:
                    message.longitudeDeg = reader.double();
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
    internalBinaryWrite(message: Point, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double latitude_deg = 1; */
        if (message.latitudeDeg !== 0)
            writer.tag(1, WireType.Bit64).double(message.latitudeDeg);
        /* double longitude_deg = 2; */
        if (message.longitudeDeg !== 0)
            writer.tag(2, WireType.Bit64).double(message.longitudeDeg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.Point
 */
export const Point = new Point$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Polygon$Type extends MessageType<Polygon> {
    constructor() {
        super("mavsdk.rpc.geofence.Polygon", [
            { no: 1, name: "points", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Point },
            { no: 2, name: "fence_type", kind: "enum", T: () => ["mavsdk.rpc.geofence.FenceType", FenceType, "FENCE_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<Polygon>): Polygon {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.points = [];
        message.fenceType = 0;
        if (value !== undefined)
            reflectionMergePartial<Polygon>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Polygon): Polygon {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated mavsdk.rpc.geofence.Point points */ 1:
                    message.points.push(Point.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* mavsdk.rpc.geofence.FenceType fence_type */ 2:
                    message.fenceType = reader.int32();
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
    internalBinaryWrite(message: Polygon, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated mavsdk.rpc.geofence.Point points = 1; */
        for (let i = 0; i < message.points.length; i++)
            Point.internalBinaryWrite(message.points[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* mavsdk.rpc.geofence.FenceType fence_type = 2; */
        if (message.fenceType !== 0)
            writer.tag(2, WireType.Varint).int32(message.fenceType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.Polygon
 */
export const Polygon = new Polygon$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Circle$Type extends MessageType<Circle> {
    constructor() {
        super("mavsdk.rpc.geofence.Circle", [
            { no: 1, name: "point", kind: "message", T: () => Point },
            { no: 2, name: "radius", kind: "scalar", T: 2 /*ScalarType.FLOAT*/, options: { "mavsdk.options.default_value": "NaN" } },
            { no: 3, name: "fence_type", kind: "enum", T: () => ["mavsdk.rpc.geofence.FenceType", FenceType, "FENCE_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<Circle>): Circle {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.radius = 0;
        message.fenceType = 0;
        if (value !== undefined)
            reflectionMergePartial<Circle>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Circle): Circle {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.geofence.Point point */ 1:
                    message.point = Point.internalBinaryRead(reader, reader.uint32(), options, message.point);
                    break;
                case /* float radius */ 2:
                    message.radius = reader.float();
                    break;
                case /* mavsdk.rpc.geofence.FenceType fence_type */ 3:
                    message.fenceType = reader.int32();
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
    internalBinaryWrite(message: Circle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.geofence.Point point = 1; */
        if (message.point)
            Point.internalBinaryWrite(message.point, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* float radius = 2; */
        if (message.radius !== 0)
            writer.tag(2, WireType.Bit32).float(message.radius);
        /* mavsdk.rpc.geofence.FenceType fence_type = 3; */
        if (message.fenceType !== 0)
            writer.tag(3, WireType.Varint).int32(message.fenceType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.Circle
 */
export const Circle = new Circle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeofenceData$Type extends MessageType<GeofenceData> {
    constructor() {
        super("mavsdk.rpc.geofence.GeofenceData", [
            { no: 1, name: "polygons", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Polygon },
            { no: 2, name: "circles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Circle }
        ]);
    }
    create(value?: PartialMessage<GeofenceData>): GeofenceData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.polygons = [];
        message.circles = [];
        if (value !== undefined)
            reflectionMergePartial<GeofenceData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeofenceData): GeofenceData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated mavsdk.rpc.geofence.Polygon polygons */ 1:
                    message.polygons.push(Polygon.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated mavsdk.rpc.geofence.Circle circles */ 2:
                    message.circles.push(Circle.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GeofenceData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated mavsdk.rpc.geofence.Polygon polygons = 1; */
        for (let i = 0; i < message.polygons.length; i++)
            Polygon.internalBinaryWrite(message.polygons[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated mavsdk.rpc.geofence.Circle circles = 2; */
        for (let i = 0; i < message.circles.length; i++)
            Circle.internalBinaryWrite(message.circles[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.GeofenceData
 */
export const GeofenceData = new GeofenceData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadGeofenceRequest$Type extends MessageType<UploadGeofenceRequest> {
    constructor() {
        super("mavsdk.rpc.geofence.UploadGeofenceRequest", [
            { no: 1, name: "geofence_data", kind: "message", T: () => GeofenceData }
        ]);
    }
    create(value?: PartialMessage<UploadGeofenceRequest>): UploadGeofenceRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<UploadGeofenceRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadGeofenceRequest): UploadGeofenceRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.geofence.GeofenceData geofence_data */ 1:
                    message.geofenceData = GeofenceData.internalBinaryRead(reader, reader.uint32(), options, message.geofenceData);
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
    internalBinaryWrite(message: UploadGeofenceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.geofence.GeofenceData geofence_data = 1; */
        if (message.geofenceData)
            GeofenceData.internalBinaryWrite(message.geofenceData, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.UploadGeofenceRequest
 */
export const UploadGeofenceRequest = new UploadGeofenceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadGeofenceResponse$Type extends MessageType<UploadGeofenceResponse> {
    constructor() {
        super("mavsdk.rpc.geofence.UploadGeofenceResponse", [
            { no: 1, name: "geofence_result", kind: "message", T: () => GeofenceResult }
        ]);
    }
    create(value?: PartialMessage<UploadGeofenceResponse>): UploadGeofenceResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<UploadGeofenceResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadGeofenceResponse): UploadGeofenceResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.geofence.GeofenceResult geofence_result */ 1:
                    message.geofenceResult = GeofenceResult.internalBinaryRead(reader, reader.uint32(), options, message.geofenceResult);
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
    internalBinaryWrite(message: UploadGeofenceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.geofence.GeofenceResult geofence_result = 1; */
        if (message.geofenceResult)
            GeofenceResult.internalBinaryWrite(message.geofenceResult, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.UploadGeofenceResponse
 */
export const UploadGeofenceResponse = new UploadGeofenceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClearGeofenceRequest$Type extends MessageType<ClearGeofenceRequest> {
    constructor() {
        super("mavsdk.rpc.geofence.ClearGeofenceRequest", []);
    }
    create(value?: PartialMessage<ClearGeofenceRequest>): ClearGeofenceRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ClearGeofenceRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClearGeofenceRequest): ClearGeofenceRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ClearGeofenceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.ClearGeofenceRequest
 */
export const ClearGeofenceRequest = new ClearGeofenceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClearGeofenceResponse$Type extends MessageType<ClearGeofenceResponse> {
    constructor() {
        super("mavsdk.rpc.geofence.ClearGeofenceResponse", [
            { no: 1, name: "geofence_result", kind: "message", T: () => GeofenceResult }
        ]);
    }
    create(value?: PartialMessage<ClearGeofenceResponse>): ClearGeofenceResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ClearGeofenceResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClearGeofenceResponse): ClearGeofenceResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.geofence.GeofenceResult geofence_result */ 1:
                    message.geofenceResult = GeofenceResult.internalBinaryRead(reader, reader.uint32(), options, message.geofenceResult);
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
    internalBinaryWrite(message: ClearGeofenceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.geofence.GeofenceResult geofence_result = 1; */
        if (message.geofenceResult)
            GeofenceResult.internalBinaryWrite(message.geofenceResult, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.ClearGeofenceResponse
 */
export const ClearGeofenceResponse = new ClearGeofenceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeofenceResult$Type extends MessageType<GeofenceResult> {
    constructor() {
        super("mavsdk.rpc.geofence.GeofenceResult", [
            { no: 1, name: "result", kind: "enum", T: () => ["mavsdk.rpc.geofence.GeofenceResult.Result", GeofenceResult_Result, "RESULT_"] },
            { no: 2, name: "result_str", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GeofenceResult>): GeofenceResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.result = 0;
        message.resultStr = "";
        if (value !== undefined)
            reflectionMergePartial<GeofenceResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GeofenceResult): GeofenceResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.geofence.GeofenceResult.Result result */ 1:
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
    internalBinaryWrite(message: GeofenceResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.geofence.GeofenceResult.Result result = 1; */
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
 * @generated MessageType for protobuf message mavsdk.rpc.geofence.GeofenceResult
 */
export const GeofenceResult = new GeofenceResult$Type();
/**
 * @generated ServiceType for protobuf service mavsdk.rpc.geofence.GeofenceService
 */
export const GeofenceService = new ServiceType("mavsdk.rpc.geofence.GeofenceService", [
    { name: "UploadGeofence", options: {}, I: UploadGeofenceRequest, O: UploadGeofenceResponse },
    { name: "ClearGeofence", options: {}, I: ClearGeofenceRequest, O: ClearGeofenceResponse }
]);
