/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var log_streaming_log_streaming_pb = require('../log_streaming/log_streaming_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_log_streaming_LogStreamingRawResponse(arg) {
  if (!(arg instanceof log_streaming_log_streaming_pb.LogStreamingRawResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_streaming.LogStreamingRawResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_streaming_LogStreamingRawResponse(buffer_arg) {
  return log_streaming_log_streaming_pb.LogStreamingRawResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_streaming_StartLogStreamingRequest(arg) {
  if (!(arg instanceof log_streaming_log_streaming_pb.StartLogStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_streaming.StartLogStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_streaming_StartLogStreamingRequest(buffer_arg) {
  return log_streaming_log_streaming_pb.StartLogStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_streaming_StartLogStreamingResponse(arg) {
  if (!(arg instanceof log_streaming_log_streaming_pb.StartLogStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_streaming.StartLogStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_streaming_StartLogStreamingResponse(buffer_arg) {
  return log_streaming_log_streaming_pb.StartLogStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_streaming_StopLogStreamingRequest(arg) {
  if (!(arg instanceof log_streaming_log_streaming_pb.StopLogStreamingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_streaming.StopLogStreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_streaming_StopLogStreamingRequest(buffer_arg) {
  return log_streaming_log_streaming_pb.StopLogStreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_streaming_StopLogStreamingResponse(arg) {
  if (!(arg instanceof log_streaming_log_streaming_pb.StopLogStreamingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_streaming.StopLogStreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_streaming_StopLogStreamingResponse(buffer_arg) {
  return log_streaming_log_streaming_pb.StopLogStreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_log_streaming_SubscribeLogStreamingRawRequest(arg) {
  if (!(arg instanceof log_streaming_log_streaming_pb.SubscribeLogStreamingRawRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.log_streaming.SubscribeLogStreamingRawRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_log_streaming_SubscribeLogStreamingRawRequest(buffer_arg) {
  return log_streaming_log_streaming_pb.SubscribeLogStreamingRawRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide log streaming data.
var LogStreamingServiceService = exports.LogStreamingServiceService = {
  // Start streaming logging data.
startLogStreaming: {
    path: '/mavsdk.rpc.log_streaming.LogStreamingService/StartLogStreaming',
    requestStream: false,
    responseStream: false,
    requestType: log_streaming_log_streaming_pb.StartLogStreamingRequest,
    responseType: log_streaming_log_streaming_pb.StartLogStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_log_streaming_StartLogStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_log_streaming_StartLogStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_log_streaming_StartLogStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_log_streaming_StartLogStreamingResponse,
  },
  // Stop streaming logging data.
stopLogStreaming: {
    path: '/mavsdk.rpc.log_streaming.LogStreamingService/StopLogStreaming',
    requestStream: false,
    responseStream: false,
    requestType: log_streaming_log_streaming_pb.StopLogStreamingRequest,
    responseType: log_streaming_log_streaming_pb.StopLogStreamingResponse,
    requestSerialize: serialize_mavsdk_rpc_log_streaming_StopLogStreamingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_log_streaming_StopLogStreamingRequest,
    responseSerialize: serialize_mavsdk_rpc_log_streaming_StopLogStreamingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_log_streaming_StopLogStreamingResponse,
  },
  // Subscribe to logging messages
subscribeLogStreamingRaw: {
    path: '/mavsdk.rpc.log_streaming.LogStreamingService/SubscribeLogStreamingRaw',
    requestStream: false,
    responseStream: true,
    requestType: log_streaming_log_streaming_pb.SubscribeLogStreamingRawRequest,
    responseType: log_streaming_log_streaming_pb.LogStreamingRawResponse,
    requestSerialize: serialize_mavsdk_rpc_log_streaming_SubscribeLogStreamingRawRequest,
    requestDeserialize: deserialize_mavsdk_rpc_log_streaming_SubscribeLogStreamingRawRequest,
    responseSerialize: serialize_mavsdk_rpc_log_streaming_LogStreamingRawResponse,
    responseDeserialize: deserialize_mavsdk_rpc_log_streaming_LogStreamingRawResponse,
  },
};

exports.LogStreamingServiceClient = grpc.makeGenericClientConstructor(LogStreamingServiceService);


// fix autocompletion
module.exports = exports;
