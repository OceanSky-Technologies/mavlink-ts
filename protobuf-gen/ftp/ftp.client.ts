/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "ftp/ftp.proto" (package "mavsdk.rpc.ftp", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { FtpService } from "./ftp";
import type { SetTargetCompidResponse } from "./ftp";
import type { SetTargetCompidRequest } from "./ftp";
import type { AreFilesIdenticalResponse } from "./ftp";
import type { AreFilesIdenticalRequest } from "./ftp";
import type { RenameResponse } from "./ftp";
import type { RenameRequest } from "./ftp";
import type { RemoveFileResponse } from "./ftp";
import type { RemoveFileRequest } from "./ftp";
import type { RemoveDirectoryResponse } from "./ftp";
import type { RemoveDirectoryRequest } from "./ftp";
import type { CreateDirectoryResponse } from "./ftp";
import type { CreateDirectoryRequest } from "./ftp";
import type { ListDirectoryResponse } from "./ftp";
import type { ListDirectoryRequest } from "./ftp";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { UploadResponse } from "./ftp";
import type { SubscribeUploadRequest } from "./ftp";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { DownloadResponse } from "./ftp";
import type { SubscribeDownloadRequest } from "./ftp";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 *
 * Implements file transfer functionality using MAVLink FTP.
 *
 * @generated from protobuf service mavsdk.rpc.ftp.FtpService
 */
export interface IFtpServiceClient {
    /**
     *
     * Downloads a file to local directory.
     *
     * @generated from protobuf rpc: SubscribeDownload(mavsdk.rpc.ftp.SubscribeDownloadRequest) returns (stream mavsdk.rpc.ftp.DownloadResponse);
     */
    subscribeDownload(input: SubscribeDownloadRequest, options?: RpcOptions): ServerStreamingCall<SubscribeDownloadRequest, DownloadResponse>;
    /**
     *
     * Uploads local file to remote directory.
     *
     * @generated from protobuf rpc: SubscribeUpload(mavsdk.rpc.ftp.SubscribeUploadRequest) returns (stream mavsdk.rpc.ftp.UploadResponse);
     */
    subscribeUpload(input: SubscribeUploadRequest, options?: RpcOptions): ServerStreamingCall<SubscribeUploadRequest, UploadResponse>;
    /**
     *
     * Lists items from a remote directory.
     *
     * @generated from protobuf rpc: ListDirectory(mavsdk.rpc.ftp.ListDirectoryRequest) returns (mavsdk.rpc.ftp.ListDirectoryResponse);
     */
    listDirectory(input: ListDirectoryRequest, options?: RpcOptions): UnaryCall<ListDirectoryRequest, ListDirectoryResponse>;
    /**
     *
     * Creates a remote directory.
     *
     * @generated from protobuf rpc: CreateDirectory(mavsdk.rpc.ftp.CreateDirectoryRequest) returns (mavsdk.rpc.ftp.CreateDirectoryResponse);
     */
    createDirectory(input: CreateDirectoryRequest, options?: RpcOptions): UnaryCall<CreateDirectoryRequest, CreateDirectoryResponse>;
    /**
     *
     * Removes a remote directory.
     *
     * @generated from protobuf rpc: RemoveDirectory(mavsdk.rpc.ftp.RemoveDirectoryRequest) returns (mavsdk.rpc.ftp.RemoveDirectoryResponse);
     */
    removeDirectory(input: RemoveDirectoryRequest, options?: RpcOptions): UnaryCall<RemoveDirectoryRequest, RemoveDirectoryResponse>;
    /**
     *
     * Removes a remote file.
     *
     * @generated from protobuf rpc: RemoveFile(mavsdk.rpc.ftp.RemoveFileRequest) returns (mavsdk.rpc.ftp.RemoveFileResponse);
     */
    removeFile(input: RemoveFileRequest, options?: RpcOptions): UnaryCall<RemoveFileRequest, RemoveFileResponse>;
    /**
     *
     * Renames a remote file or remote directory.
     *
     * @generated from protobuf rpc: Rename(mavsdk.rpc.ftp.RenameRequest) returns (mavsdk.rpc.ftp.RenameResponse);
     */
    rename(input: RenameRequest, options?: RpcOptions): UnaryCall<RenameRequest, RenameResponse>;
    /**
     *
     * Compares a local file to a remote file using a CRC32 checksum.
     *
     * @generated from protobuf rpc: AreFilesIdentical(mavsdk.rpc.ftp.AreFilesIdenticalRequest) returns (mavsdk.rpc.ftp.AreFilesIdenticalResponse);
     */
    areFilesIdentical(input: AreFilesIdenticalRequest, options?: RpcOptions): UnaryCall<AreFilesIdenticalRequest, AreFilesIdenticalResponse>;
    /**
     *
     * Set target component ID. By default it is the autopilot.
     *
     * @generated from protobuf rpc: SetTargetCompid(mavsdk.rpc.ftp.SetTargetCompidRequest) returns (mavsdk.rpc.ftp.SetTargetCompidResponse);
     */
    setTargetCompid(input: SetTargetCompidRequest, options?: RpcOptions): UnaryCall<SetTargetCompidRequest, SetTargetCompidResponse>;
}
/**
 *
 * Implements file transfer functionality using MAVLink FTP.
 *
 * @generated from protobuf service mavsdk.rpc.ftp.FtpService
 */
export class FtpServiceClient implements IFtpServiceClient, ServiceInfo {
    typeName = FtpService.typeName;
    methods = FtpService.methods;
    options = FtpService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Downloads a file to local directory.
     *
     * @generated from protobuf rpc: SubscribeDownload(mavsdk.rpc.ftp.SubscribeDownloadRequest) returns (stream mavsdk.rpc.ftp.DownloadResponse);
     */
    subscribeDownload(input: SubscribeDownloadRequest, options?: RpcOptions): ServerStreamingCall<SubscribeDownloadRequest, DownloadResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeDownloadRequest, DownloadResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Uploads local file to remote directory.
     *
     * @generated from protobuf rpc: SubscribeUpload(mavsdk.rpc.ftp.SubscribeUploadRequest) returns (stream mavsdk.rpc.ftp.UploadResponse);
     */
    subscribeUpload(input: SubscribeUploadRequest, options?: RpcOptions): ServerStreamingCall<SubscribeUploadRequest, UploadResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SubscribeUploadRequest, UploadResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Lists items from a remote directory.
     *
     * @generated from protobuf rpc: ListDirectory(mavsdk.rpc.ftp.ListDirectoryRequest) returns (mavsdk.rpc.ftp.ListDirectoryResponse);
     */
    listDirectory(input: ListDirectoryRequest, options?: RpcOptions): UnaryCall<ListDirectoryRequest, ListDirectoryResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListDirectoryRequest, ListDirectoryResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Creates a remote directory.
     *
     * @generated from protobuf rpc: CreateDirectory(mavsdk.rpc.ftp.CreateDirectoryRequest) returns (mavsdk.rpc.ftp.CreateDirectoryResponse);
     */
    createDirectory(input: CreateDirectoryRequest, options?: RpcOptions): UnaryCall<CreateDirectoryRequest, CreateDirectoryResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateDirectoryRequest, CreateDirectoryResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Removes a remote directory.
     *
     * @generated from protobuf rpc: RemoveDirectory(mavsdk.rpc.ftp.RemoveDirectoryRequest) returns (mavsdk.rpc.ftp.RemoveDirectoryResponse);
     */
    removeDirectory(input: RemoveDirectoryRequest, options?: RpcOptions): UnaryCall<RemoveDirectoryRequest, RemoveDirectoryResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<RemoveDirectoryRequest, RemoveDirectoryResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Removes a remote file.
     *
     * @generated from protobuf rpc: RemoveFile(mavsdk.rpc.ftp.RemoveFileRequest) returns (mavsdk.rpc.ftp.RemoveFileResponse);
     */
    removeFile(input: RemoveFileRequest, options?: RpcOptions): UnaryCall<RemoveFileRequest, RemoveFileResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<RemoveFileRequest, RemoveFileResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Renames a remote file or remote directory.
     *
     * @generated from protobuf rpc: Rename(mavsdk.rpc.ftp.RenameRequest) returns (mavsdk.rpc.ftp.RenameResponse);
     */
    rename(input: RenameRequest, options?: RpcOptions): UnaryCall<RenameRequest, RenameResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<RenameRequest, RenameResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Compares a local file to a remote file using a CRC32 checksum.
     *
     * @generated from protobuf rpc: AreFilesIdentical(mavsdk.rpc.ftp.AreFilesIdenticalRequest) returns (mavsdk.rpc.ftp.AreFilesIdenticalResponse);
     */
    areFilesIdentical(input: AreFilesIdenticalRequest, options?: RpcOptions): UnaryCall<AreFilesIdenticalRequest, AreFilesIdenticalResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<AreFilesIdenticalRequest, AreFilesIdenticalResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Set target component ID. By default it is the autopilot.
     *
     * @generated from protobuf rpc: SetTargetCompid(mavsdk.rpc.ftp.SetTargetCompidRequest) returns (mavsdk.rpc.ftp.SetTargetCompidResponse);
     */
    setTargetCompid(input: SetTargetCompidRequest, options?: RpcOptions): UnaryCall<SetTargetCompidRequest, SetTargetCompidResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetTargetCompidRequest, SetTargetCompidResponse>("unary", this._transport, method, opt, input);
    }
}
