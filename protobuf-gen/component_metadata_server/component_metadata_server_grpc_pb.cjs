/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var component_metadata_server_component_metadata_server_pb = require('../component_metadata_server/component_metadata_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_component_metadata_server_SetMetadataRequest(arg) {
  if (!(arg instanceof component_metadata_server_component_metadata_server_pb.SetMetadataRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata_server.SetMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_server_SetMetadataRequest(buffer_arg) {
  return component_metadata_server_component_metadata_server_pb.SetMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_server_SetMetadataResponse(arg) {
  if (!(arg instanceof component_metadata_server_component_metadata_server_pb.SetMetadataResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata_server.SetMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_server_SetMetadataResponse(buffer_arg) {
  return component_metadata_server_component_metadata_server_pb.SetMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide component metadata json definitions, such as parameters.
var ComponentMetadataServerServiceService = exports.ComponentMetadataServerServiceService = {
  //
// Provide metadata (can only be called once)
setMetadata: {
    path: '/mavsdk.rpc.component_metadata_server.ComponentMetadataServerService/SetMetadata',
    requestStream: false,
    responseStream: false,
    requestType: component_metadata_server_component_metadata_server_pb.SetMetadataRequest,
    responseType: component_metadata_server_component_metadata_server_pb.SetMetadataResponse,
    requestSerialize: serialize_mavsdk_rpc_component_metadata_server_SetMetadataRequest,
    requestDeserialize: deserialize_mavsdk_rpc_component_metadata_server_SetMetadataRequest,
    responseSerialize: serialize_mavsdk_rpc_component_metadata_server_SetMetadataResponse,
    responseDeserialize: deserialize_mavsdk_rpc_component_metadata_server_SetMetadataResponse,
  },
};

exports.ComponentMetadataServerServiceClient = grpc.makeGenericClientConstructor(ComponentMetadataServerServiceService);


// fix autocompletion
module.exports = exports;
