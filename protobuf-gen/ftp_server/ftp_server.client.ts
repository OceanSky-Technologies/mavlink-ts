/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "ftp_server/ftp_server.proto" (package "mavsdk.rpc.ftp_server", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { FtpServerService } from "./ftp_server";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { SetRootDirResponse } from "./ftp_server";
import type { SetRootDirRequest } from "./ftp_server";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Provide files or directories to transfer.
 *
 * @generated from protobuf service mavsdk.rpc.ftp_server.FtpServerService
 */
export interface IFtpServerServiceClient {
    /**
     *
     * Set root directory.
     *
     * This is the directory that can then be accessed by a client.
     * The directory needs to exist when this is called.
     * The permissions are the same as the file permission for the user running the server.
     * The root directory can't be changed while an FTP process is in progress.
     *
     * @generated from protobuf rpc: SetRootDir(mavsdk.rpc.ftp_server.SetRootDirRequest) returns (mavsdk.rpc.ftp_server.SetRootDirResponse);
     */
    setRootDir(input: SetRootDirRequest, options?: RpcOptions): UnaryCall<SetRootDirRequest, SetRootDirResponse>;
}
/**
 * Provide files or directories to transfer.
 *
 * @generated from protobuf service mavsdk.rpc.ftp_server.FtpServerService
 */
export class FtpServerServiceClient implements IFtpServerServiceClient, ServiceInfo {
    typeName = FtpServerService.typeName;
    methods = FtpServerService.methods;
    options = FtpServerService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *
     * Set root directory.
     *
     * This is the directory that can then be accessed by a client.
     * The directory needs to exist when this is called.
     * The permissions are the same as the file permission for the user running the server.
     * The root directory can't be changed while an FTP process is in progress.
     *
     * @generated from protobuf rpc: SetRootDir(mavsdk.rpc.ftp_server.SetRootDirRequest) returns (mavsdk.rpc.ftp_server.SetRootDirResponse);
     */
    setRootDir(input: SetRootDirRequest, options?: RpcOptions): UnaryCall<SetRootDirRequest, SetRootDirResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetRootDirRequest, SetRootDirResponse>("unary", this._transport, method, opt, input);
    }
}
