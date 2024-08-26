/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ftp_server_ftp_server_pb = require('../ftp_server/ftp_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_ftp_server_SetRootDirRequest(arg) {
  if (!(arg instanceof ftp_server_ftp_server_pb.SetRootDirRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp_server.SetRootDirRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_server_SetRootDirRequest(buffer_arg) {
  return ftp_server_ftp_server_pb.SetRootDirRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_server_SetRootDirResponse(arg) {
  if (!(arg instanceof ftp_server_ftp_server_pb.SetRootDirResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp_server.SetRootDirResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_server_SetRootDirResponse(buffer_arg) {
  return ftp_server_ftp_server_pb.SetRootDirResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide files or directories to transfer.
var FtpServerServiceService = exports.FtpServerServiceService = {
  //
// Set root directory.
//
// This is the directory that can then be accessed by a client.
// The directory needs to exist when this is called.
// The permissions are the same as the file permission for the user running the server.
// The root directory can't be changed while an FTP process is in progress.
setRootDir: {
    path: '/mavsdk.rpc.ftp_server.FtpServerService/SetRootDir',
    requestStream: false,
    responseStream: false,
    requestType: ftp_server_ftp_server_pb.SetRootDirRequest,
    responseType: ftp_server_ftp_server_pb.SetRootDirResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_server_SetRootDirRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_server_SetRootDirRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_server_SetRootDirResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_server_SetRootDirResponse,
  },
};

exports.FtpServerServiceClient = grpc.makeGenericClientConstructor(FtpServerServiceService);


// fix autocompletion
module.exports = exports;
