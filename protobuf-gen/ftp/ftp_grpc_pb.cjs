/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ftp_ftp_pb = require('../ftp/ftp_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_ftp_AreFilesIdenticalRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.AreFilesIdenticalRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.AreFilesIdenticalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_AreFilesIdenticalRequest(buffer_arg) {
  return ftp_ftp_pb.AreFilesIdenticalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_AreFilesIdenticalResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.AreFilesIdenticalResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.AreFilesIdenticalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_AreFilesIdenticalResponse(buffer_arg) {
  return ftp_ftp_pb.AreFilesIdenticalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_CreateDirectoryRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.CreateDirectoryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.CreateDirectoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_CreateDirectoryRequest(buffer_arg) {
  return ftp_ftp_pb.CreateDirectoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_CreateDirectoryResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.CreateDirectoryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.CreateDirectoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_CreateDirectoryResponse(buffer_arg) {
  return ftp_ftp_pb.CreateDirectoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_DownloadResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.DownloadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.DownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_DownloadResponse(buffer_arg) {
  return ftp_ftp_pb.DownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_ListDirectoryRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.ListDirectoryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.ListDirectoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_ListDirectoryRequest(buffer_arg) {
  return ftp_ftp_pb.ListDirectoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_ListDirectoryResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.ListDirectoryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.ListDirectoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_ListDirectoryResponse(buffer_arg) {
  return ftp_ftp_pb.ListDirectoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_RemoveDirectoryRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.RemoveDirectoryRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.RemoveDirectoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_RemoveDirectoryRequest(buffer_arg) {
  return ftp_ftp_pb.RemoveDirectoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_RemoveDirectoryResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.RemoveDirectoryResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.RemoveDirectoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_RemoveDirectoryResponse(buffer_arg) {
  return ftp_ftp_pb.RemoveDirectoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_RemoveFileRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.RemoveFileRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.RemoveFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_RemoveFileRequest(buffer_arg) {
  return ftp_ftp_pb.RemoveFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_RemoveFileResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.RemoveFileResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.RemoveFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_RemoveFileResponse(buffer_arg) {
  return ftp_ftp_pb.RemoveFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_RenameRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.RenameRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.RenameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_RenameRequest(buffer_arg) {
  return ftp_ftp_pb.RenameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_RenameResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.RenameResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.RenameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_RenameResponse(buffer_arg) {
  return ftp_ftp_pb.RenameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_SetTargetCompidRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.SetTargetCompidRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.SetTargetCompidRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_SetTargetCompidRequest(buffer_arg) {
  return ftp_ftp_pb.SetTargetCompidRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_SetTargetCompidResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.SetTargetCompidResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.SetTargetCompidResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_SetTargetCompidResponse(buffer_arg) {
  return ftp_ftp_pb.SetTargetCompidResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_SubscribeDownloadRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.SubscribeDownloadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.SubscribeDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_SubscribeDownloadRequest(buffer_arg) {
  return ftp_ftp_pb.SubscribeDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_SubscribeUploadRequest(arg) {
  if (!(arg instanceof ftp_ftp_pb.SubscribeUploadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.SubscribeUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_SubscribeUploadRequest(buffer_arg) {
  return ftp_ftp_pb.SubscribeUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_ftp_UploadResponse(arg) {
  if (!(arg instanceof ftp_ftp_pb.UploadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.ftp.UploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_ftp_UploadResponse(buffer_arg) {
  return ftp_ftp_pb.UploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Implements file transfer functionality using MAVLink FTP.
var FtpServiceService = exports.FtpServiceService = {
  //
// Downloads a file to local directory.
subscribeDownload: {
    path: '/mavsdk.rpc.ftp.FtpService/SubscribeDownload',
    requestStream: false,
    responseStream: true,
    requestType: ftp_ftp_pb.SubscribeDownloadRequest,
    responseType: ftp_ftp_pb.DownloadResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_SubscribeDownloadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_SubscribeDownloadRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_DownloadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_DownloadResponse,
  },
  //
// Uploads local file to remote directory.
subscribeUpload: {
    path: '/mavsdk.rpc.ftp.FtpService/SubscribeUpload',
    requestStream: false,
    responseStream: true,
    requestType: ftp_ftp_pb.SubscribeUploadRequest,
    responseType: ftp_ftp_pb.UploadResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_SubscribeUploadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_SubscribeUploadRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_UploadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_UploadResponse,
  },
  //
// Lists items from a remote directory.
listDirectory: {
    path: '/mavsdk.rpc.ftp.FtpService/ListDirectory',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.ListDirectoryRequest,
    responseType: ftp_ftp_pb.ListDirectoryResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_ListDirectoryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_ListDirectoryRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_ListDirectoryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_ListDirectoryResponse,
  },
  //
// Creates a remote directory.
createDirectory: {
    path: '/mavsdk.rpc.ftp.FtpService/CreateDirectory',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.CreateDirectoryRequest,
    responseType: ftp_ftp_pb.CreateDirectoryResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_CreateDirectoryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_CreateDirectoryRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_CreateDirectoryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_CreateDirectoryResponse,
  },
  //
// Removes a remote directory.
removeDirectory: {
    path: '/mavsdk.rpc.ftp.FtpService/RemoveDirectory',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.RemoveDirectoryRequest,
    responseType: ftp_ftp_pb.RemoveDirectoryResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_RemoveDirectoryRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_RemoveDirectoryRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_RemoveDirectoryResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_RemoveDirectoryResponse,
  },
  //
// Removes a remote file.
removeFile: {
    path: '/mavsdk.rpc.ftp.FtpService/RemoveFile',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.RemoveFileRequest,
    responseType: ftp_ftp_pb.RemoveFileResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_RemoveFileRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_RemoveFileRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_RemoveFileResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_RemoveFileResponse,
  },
  //
// Renames a remote file or remote directory.
rename: {
    path: '/mavsdk.rpc.ftp.FtpService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.RenameRequest,
    responseType: ftp_ftp_pb.RenameResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_RenameRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_RenameRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_RenameResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_RenameResponse,
  },
  //
// Compares a local file to a remote file using a CRC32 checksum.
areFilesIdentical: {
    path: '/mavsdk.rpc.ftp.FtpService/AreFilesIdentical',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.AreFilesIdenticalRequest,
    responseType: ftp_ftp_pb.AreFilesIdenticalResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_AreFilesIdenticalRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_AreFilesIdenticalRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_AreFilesIdenticalResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_AreFilesIdenticalResponse,
  },
  //
// Set target component ID. By default it is the autopilot.
setTargetCompid: {
    path: '/mavsdk.rpc.ftp.FtpService/SetTargetCompid',
    requestStream: false,
    responseStream: false,
    requestType: ftp_ftp_pb.SetTargetCompidRequest,
    responseType: ftp_ftp_pb.SetTargetCompidResponse,
    requestSerialize: serialize_mavsdk_rpc_ftp_SetTargetCompidRequest,
    requestDeserialize: deserialize_mavsdk_rpc_ftp_SetTargetCompidRequest,
    responseSerialize: serialize_mavsdk_rpc_ftp_SetTargetCompidResponse,
    responseDeserialize: deserialize_mavsdk_rpc_ftp_SetTargetCompidResponse,
  },
};

exports.FtpServiceClient = grpc.makeGenericClientConstructor(FtpServiceService);


// fix autocompletion
module.exports = exports;
