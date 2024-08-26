/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var log_files_log_files_pb = require('../log_files/log_files_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_log_files_DownloadLogFileResponse(arg) {
  if (!(arg instanceof log_files_log_files_pb.DownloadLogFileResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_files.DownloadLogFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_files_DownloadLogFileResponse(buffer_arg) {
  return log_files_log_files_pb.DownloadLogFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_files_EraseAllLogFilesRequest(arg) {
  if (!(arg instanceof log_files_log_files_pb.EraseAllLogFilesRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_files.EraseAllLogFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_files_EraseAllLogFilesRequest(buffer_arg) {
  return log_files_log_files_pb.EraseAllLogFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_files_EraseAllLogFilesResponse(arg) {
  if (!(arg instanceof log_files_log_files_pb.EraseAllLogFilesResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_files.EraseAllLogFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_files_EraseAllLogFilesResponse(buffer_arg) {
  return log_files_log_files_pb.EraseAllLogFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_files_GetEntriesRequest(arg) {
  if (!(arg instanceof log_files_log_files_pb.GetEntriesRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_files.GetEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_files_GetEntriesRequest(buffer_arg) {
  return log_files_log_files_pb.GetEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_files_GetEntriesResponse(arg) {
  if (!(arg instanceof log_files_log_files_pb.GetEntriesResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_files.GetEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_files_GetEntriesResponse(buffer_arg) {
  return log_files_log_files_pb.GetEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_files_SubscribeDownloadLogFileRequest(arg) {
  if (!(arg instanceof log_files_log_files_pb.SubscribeDownloadLogFileRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_files.SubscribeDownloadLogFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_files_SubscribeDownloadLogFileRequest(buffer_arg) {
  return log_files_log_files_pb.SubscribeDownloadLogFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Allow to download log files from the vehicle after a flight is complete.
// For log streaming during flight check the logging plugin.
var LogFilesServiceService = exports.LogFilesServiceService = {
  // Get List of log files.
getEntries: {
    path: '/mavsdk.rpc.log_files.LogFilesService/GetEntries',
    requestStream: false,
    responseStream: false,
    requestType: log_files_log_files_pb.GetEntriesRequest,
    responseType: log_files_log_files_pb.GetEntriesResponse,
    requestSerialize: serialize_mavsdk_rpc_log_files_GetEntriesRequest,
    requestDeserialize: deserialize_mavsdk_rpc_log_files_GetEntriesRequest,
    responseSerialize: serialize_mavsdk_rpc_log_files_GetEntriesResponse,
    responseDeserialize: deserialize_mavsdk_rpc_log_files_GetEntriesResponse,
  },
  // Download log file.
subscribeDownloadLogFile: {
    path: '/mavsdk.rpc.log_files.LogFilesService/SubscribeDownloadLogFile',
    requestStream: false,
    responseStream: true,
    requestType: log_files_log_files_pb.SubscribeDownloadLogFileRequest,
    responseType: log_files_log_files_pb.DownloadLogFileResponse,
    requestSerialize: serialize_mavsdk_rpc_log_files_SubscribeDownloadLogFileRequest,
    requestDeserialize: deserialize_mavsdk_rpc_log_files_SubscribeDownloadLogFileRequest,
    responseSerialize: serialize_mavsdk_rpc_log_files_DownloadLogFileResponse,
    responseDeserialize: deserialize_mavsdk_rpc_log_files_DownloadLogFileResponse,
  },
  // Erase all log files.
eraseAllLogFiles: {
    path: '/mavsdk.rpc.log_files.LogFilesService/EraseAllLogFiles',
    requestStream: false,
    responseStream: false,
    requestType: log_files_log_files_pb.EraseAllLogFilesRequest,
    responseType: log_files_log_files_pb.EraseAllLogFilesResponse,
    requestSerialize: serialize_mavsdk_rpc_log_files_EraseAllLogFilesRequest,
    requestDeserialize: deserialize_mavsdk_rpc_log_files_EraseAllLogFilesRequest,
    responseSerialize: serialize_mavsdk_rpc_log_files_EraseAllLogFilesResponse,
    responseDeserialize: deserialize_mavsdk_rpc_log_files_EraseAllLogFilesResponse,
  },
};

exports.LogFilesServiceClient = grpc.makeGenericClientConstructor(LogFilesServiceService);


// fix autocompletion
module.exports = exports;
