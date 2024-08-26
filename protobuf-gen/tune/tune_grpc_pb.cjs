/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tune_tune_pb = require('../tune/tune_pb.cjs');

function serialize_mavsdk_rpc_tune_PlayTuneRequest(arg) {
  if (!(arg instanceof tune_tune_pb.PlayTuneRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.tune.PlayTuneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_tune_PlayTuneRequest(buffer_arg) {
  return tune_tune_pb.PlayTuneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_tune_PlayTuneResponse(arg) {
  if (!(arg instanceof tune_tune_pb.PlayTuneResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.tune.PlayTuneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_tune_PlayTuneResponse(buffer_arg) {
  return tune_tune_pb.PlayTuneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable creating and sending a tune to be played on the system.
var TuneServiceService = exports.TuneServiceService = {
  // Send a tune to be played by the system.
playTune: {
    path: '/mavsdk.rpc.tune.TuneService/PlayTune',
    requestStream: false,
    responseStream: false,
    requestType: tune_tune_pb.PlayTuneRequest,
    responseType: tune_tune_pb.PlayTuneResponse,
    requestSerialize: serialize_mavsdk_rpc_tune_PlayTuneRequest,
    requestDeserialize: deserialize_mavsdk_rpc_tune_PlayTuneRequest,
    responseSerialize: serialize_mavsdk_rpc_tune_PlayTuneResponse,
    responseDeserialize: deserialize_mavsdk_rpc_tune_PlayTuneResponse,
  },
};

exports.TuneServiceClient = grpc.makeGenericClientConstructor(TuneServiceService);


// fix autocompletion
module.exports = exports;
