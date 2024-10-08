/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "core/core.proto" (package "mavsdk.rpc.core", syntax proto3)
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
 * @generated from protobuf message mavsdk.rpc.core.SubscribeConnectionStateRequest
 */
export interface SubscribeConnectionStateRequest {
}
/**
 * @generated from protobuf message mavsdk.rpc.core.ConnectionStateResponse
 */
export interface ConnectionStateResponse {
    /**
     * @generated from protobuf field: mavsdk.rpc.core.ConnectionState connection_state = 1;
     */
    connectionState?: ConnectionState; // Connection state
}
/**
 * @generated from protobuf message mavsdk.rpc.core.SetMavlinkTimeoutRequest
 */
export interface SetMavlinkTimeoutRequest {
    /**
     * @generated from protobuf field: double timeout_s = 1;
     */
    timeoutS: number; // Timeout in seconds
}
/**
 * @generated from protobuf message mavsdk.rpc.core.SetMavlinkTimeoutResponse
 */
export interface SetMavlinkTimeoutResponse {
}
/**
 * Connection state type.
 *
 * @generated from protobuf message mavsdk.rpc.core.ConnectionState
 */
export interface ConnectionState {
    /**
     * @generated from protobuf field: bool is_connected = 2;
     */
    isConnected: boolean; // Whether the vehicle got connected or disconnected
}
// @generated message type with reflection information, may provide speed optimized methods
class SubscribeConnectionStateRequest$Type extends MessageType<SubscribeConnectionStateRequest> {
    constructor() {
        super("mavsdk.rpc.core.SubscribeConnectionStateRequest", []);
    }
    create(value?: PartialMessage<SubscribeConnectionStateRequest>): SubscribeConnectionStateRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SubscribeConnectionStateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeConnectionStateRequest): SubscribeConnectionStateRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SubscribeConnectionStateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.core.SubscribeConnectionStateRequest
 */
export const SubscribeConnectionStateRequest = new SubscribeConnectionStateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConnectionStateResponse$Type extends MessageType<ConnectionStateResponse> {
    constructor() {
        super("mavsdk.rpc.core.ConnectionStateResponse", [
            { no: 1, name: "connection_state", kind: "message", T: () => ConnectionState }
        ]);
    }
    create(value?: PartialMessage<ConnectionStateResponse>): ConnectionStateResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ConnectionStateResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConnectionStateResponse): ConnectionStateResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* mavsdk.rpc.core.ConnectionState connection_state */ 1:
                    message.connectionState = ConnectionState.internalBinaryRead(reader, reader.uint32(), options, message.connectionState);
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
    internalBinaryWrite(message: ConnectionStateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* mavsdk.rpc.core.ConnectionState connection_state = 1; */
        if (message.connectionState)
            ConnectionState.internalBinaryWrite(message.connectionState, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.core.ConnectionStateResponse
 */
export const ConnectionStateResponse = new ConnectionStateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetMavlinkTimeoutRequest$Type extends MessageType<SetMavlinkTimeoutRequest> {
    constructor() {
        super("mavsdk.rpc.core.SetMavlinkTimeoutRequest", [
            { no: 1, name: "timeout_s", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<SetMavlinkTimeoutRequest>): SetMavlinkTimeoutRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.timeoutS = 0;
        if (value !== undefined)
            reflectionMergePartial<SetMavlinkTimeoutRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetMavlinkTimeoutRequest): SetMavlinkTimeoutRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double timeout_s */ 1:
                    message.timeoutS = reader.double();
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
    internalBinaryWrite(message: SetMavlinkTimeoutRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double timeout_s = 1; */
        if (message.timeoutS !== 0)
            writer.tag(1, WireType.Bit64).double(message.timeoutS);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.core.SetMavlinkTimeoutRequest
 */
export const SetMavlinkTimeoutRequest = new SetMavlinkTimeoutRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetMavlinkTimeoutResponse$Type extends MessageType<SetMavlinkTimeoutResponse> {
    constructor() {
        super("mavsdk.rpc.core.SetMavlinkTimeoutResponse", []);
    }
    create(value?: PartialMessage<SetMavlinkTimeoutResponse>): SetMavlinkTimeoutResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SetMavlinkTimeoutResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetMavlinkTimeoutResponse): SetMavlinkTimeoutResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SetMavlinkTimeoutResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.core.SetMavlinkTimeoutResponse
 */
export const SetMavlinkTimeoutResponse = new SetMavlinkTimeoutResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConnectionState$Type extends MessageType<ConnectionState> {
    constructor() {
        super("mavsdk.rpc.core.ConnectionState", [
            { no: 2, name: "is_connected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ConnectionState>): ConnectionState {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.isConnected = false;
        if (value !== undefined)
            reflectionMergePartial<ConnectionState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConnectionState): ConnectionState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_connected */ 2:
                    message.isConnected = reader.bool();
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
    internalBinaryWrite(message: ConnectionState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_connected = 2; */
        if (message.isConnected !== false)
            writer.tag(2, WireType.Varint).bool(message.isConnected);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message mavsdk.rpc.core.ConnectionState
 */
export const ConnectionState = new ConnectionState$Type();
/**
 * @generated ServiceType for protobuf service mavsdk.rpc.core.CoreService
 */
export const CoreService = new ServiceType("mavsdk.rpc.core.CoreService", [
    { name: "SubscribeConnectionState", serverStreaming: true, options: {}, I: SubscribeConnectionStateRequest, O: ConnectionStateResponse },
    { name: "SetMavlinkTimeout", options: {}, I: SetMavlinkTimeoutRequest, O: SetMavlinkTimeoutResponse }
]);
