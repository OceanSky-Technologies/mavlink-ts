/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rtk_rtk_pb = require('../rtk/rtk_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_rtk_SendRtcmDataRequest(arg) {
  if (!(arg instanceof rtk_rtk_pb.SendRtcmDataRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.rtk.SendRtcmDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_rtk_SendRtcmDataRequest(buffer_arg) {
  return rtk_rtk_pb.SendRtcmDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_rtk_SendRtcmDataResponse(arg) {
  if (!(arg instanceof rtk_rtk_pb.SendRtcmDataResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.rtk.SendRtcmDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_rtk_SendRtcmDataResponse(buffer_arg) {
  return rtk_rtk_pb.SendRtcmDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to send RTK corrections to the vehicle.
var RtkServiceService = exports.RtkServiceService = {
  // Send RTCM data.
sendRtcmData: {
    path: '/mavsdk.rpc.rtk.RtkService/SendRtcmData',
    requestStream: false,
    responseStream: false,
    requestType: rtk_rtk_pb.SendRtcmDataRequest,
    responseType: rtk_rtk_pb.SendRtcmDataResponse,
    requestSerialize: serialize_mavsdk_rpc_rtk_SendRtcmDataRequest,
    requestDeserialize: deserialize_mavsdk_rpc_rtk_SendRtcmDataRequest,
    responseSerialize: serialize_mavsdk_rpc_rtk_SendRtcmDataResponse,
    responseDeserialize: deserialize_mavsdk_rpc_rtk_SendRtcmDataResponse,
  },
};

exports.RtkServiceClient = grpc.makeGenericClientConstructor(RtkServiceService);


// fix autocompletion
module.exports = exports;
