/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var component_metadata_component_metadata_pb = require('../component_metadata/component_metadata_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_component_metadata_GetMetadataRequest(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.GetMetadataRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.GetMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_GetMetadataRequest(buffer_arg) {
  return component_metadata_component_metadata_pb.GetMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_GetMetadataResponse(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.GetMetadataResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.GetMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_GetMetadataResponse(buffer_arg) {
  return component_metadata_component_metadata_pb.GetMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_MetadataAvailableResponse(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.MetadataAvailableResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.MetadataAvailableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_MetadataAvailableResponse(buffer_arg) {
  return component_metadata_component_metadata_pb.MetadataAvailableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentRequest(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.RequestAutopilotComponentRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.RequestAutopilotComponentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentRequest(buffer_arg) {
  return component_metadata_component_metadata_pb.RequestAutopilotComponentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentResponse(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.RequestAutopilotComponentResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.RequestAutopilotComponentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentResponse(buffer_arg) {
  return component_metadata_component_metadata_pb.RequestAutopilotComponentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_RequestComponentRequest(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.RequestComponentRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.RequestComponentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_RequestComponentRequest(buffer_arg) {
  return component_metadata_component_metadata_pb.RequestComponentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_RequestComponentResponse(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.RequestComponentResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.RequestComponentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_RequestComponentResponse(buffer_arg) {
  return component_metadata_component_metadata_pb.RequestComponentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_component_metadata_SubscribeMetadataAvailableRequest(arg) {
  if (!(arg instanceof component_metadata_component_metadata_pb.SubscribeMetadataAvailableRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.component_metadata.SubscribeMetadataAvailableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_component_metadata_SubscribeMetadataAvailableRequest(buffer_arg) {
  return component_metadata_component_metadata_pb.SubscribeMetadataAvailableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Access component metadata json definitions, such as parameters.
var ComponentMetadataServiceService = exports.ComponentMetadataServiceService = {
  //
// Request metadata from a specific component. This is used to start requesting metadata from a component.
// The metadata can later be accessed via subscription (see below) or GetMetadata.
requestComponent: {
    path: '/mavsdk.rpc.component_metadata.ComponentMetadataService/RequestComponent',
    requestStream: false,
    responseStream: false,
    requestType: component_metadata_component_metadata_pb.RequestComponentRequest,
    responseType: component_metadata_component_metadata_pb.RequestComponentResponse,
    requestSerialize: serialize_mavsdk_rpc_component_metadata_RequestComponentRequest,
    requestDeserialize: deserialize_mavsdk_rpc_component_metadata_RequestComponentRequest,
    responseSerialize: serialize_mavsdk_rpc_component_metadata_RequestComponentResponse,
    responseDeserialize: deserialize_mavsdk_rpc_component_metadata_RequestComponentResponse,
  },
  //
// Request metadata from the autopilot component. This is used to start requesting metadata from the autopilot.
// The metadata can later be accessed via subscription (see below) or GetMetadata.
requestAutopilotComponent: {
    path: '/mavsdk.rpc.component_metadata.ComponentMetadataService/RequestAutopilotComponent',
    requestStream: false,
    responseStream: false,
    requestType: component_metadata_component_metadata_pb.RequestAutopilotComponentRequest,
    responseType: component_metadata_component_metadata_pb.RequestAutopilotComponentResponse,
    requestSerialize: serialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentRequest,
    requestDeserialize: deserialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentRequest,
    responseSerialize: serialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentResponse,
    responseDeserialize: deserialize_mavsdk_rpc_component_metadata_RequestAutopilotComponentResponse,
  },
  //
// Register a callback that gets called when metadata is available
subscribeMetadataAvailable: {
    path: '/mavsdk.rpc.component_metadata.ComponentMetadataService/SubscribeMetadataAvailable',
    requestStream: false,
    responseStream: true,
    requestType: component_metadata_component_metadata_pb.SubscribeMetadataAvailableRequest,
    responseType: component_metadata_component_metadata_pb.MetadataAvailableResponse,
    requestSerialize: serialize_mavsdk_rpc_component_metadata_SubscribeMetadataAvailableRequest,
    requestDeserialize: deserialize_mavsdk_rpc_component_metadata_SubscribeMetadataAvailableRequest,
    responseSerialize: serialize_mavsdk_rpc_component_metadata_MetadataAvailableResponse,
    responseDeserialize: deserialize_mavsdk_rpc_component_metadata_MetadataAvailableResponse,
  },
  //
// Access metadata. This can be used if you know the metadata is available already, otherwise use
// the subscription to get notified when it becomes available.
getMetadata: {
    path: '/mavsdk.rpc.component_metadata.ComponentMetadataService/GetMetadata',
    requestStream: false,
    responseStream: false,
    requestType: component_metadata_component_metadata_pb.GetMetadataRequest,
    responseType: component_metadata_component_metadata_pb.GetMetadataResponse,
    requestSerialize: serialize_mavsdk_rpc_component_metadata_GetMetadataRequest,
    requestDeserialize: deserialize_mavsdk_rpc_component_metadata_GetMetadataRequest,
    responseSerialize: serialize_mavsdk_rpc_component_metadata_GetMetadataResponse,
    responseDeserialize: deserialize_mavsdk_rpc_component_metadata_GetMetadataResponse,
  },
};

exports.ComponentMetadataServiceClient = grpc.makeGenericClientConstructor(ComponentMetadataServiceService);


// fix autocompletion
module.exports = exports;
