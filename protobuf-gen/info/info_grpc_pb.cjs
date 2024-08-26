/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var info_info_pb = require('../info/info_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_info_FlightInformationResponse(arg) {
  if (!(arg instanceof info_info_pb.FlightInformationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.FlightInformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_FlightInformationResponse(buffer_arg) {
  return info_info_pb.FlightInformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetFlightInformationRequest(arg) {
  if (!(arg instanceof info_info_pb.GetFlightInformationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetFlightInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetFlightInformationRequest(buffer_arg) {
  return info_info_pb.GetFlightInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetFlightInformationResponse(arg) {
  if (!(arg instanceof info_info_pb.GetFlightInformationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetFlightInformationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetFlightInformationResponse(buffer_arg) {
  return info_info_pb.GetFlightInformationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetIdentificationRequest(arg) {
  if (!(arg instanceof info_info_pb.GetIdentificationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetIdentificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetIdentificationRequest(buffer_arg) {
  return info_info_pb.GetIdentificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetIdentificationResponse(arg) {
  if (!(arg instanceof info_info_pb.GetIdentificationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetIdentificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetIdentificationResponse(buffer_arg) {
  return info_info_pb.GetIdentificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetProductRequest(arg) {
  if (!(arg instanceof info_info_pb.GetProductRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetProductRequest(buffer_arg) {
  return info_info_pb.GetProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetProductResponse(arg) {
  if (!(arg instanceof info_info_pb.GetProductResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetProductResponse(buffer_arg) {
  return info_info_pb.GetProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetSpeedFactorRequest(arg) {
  if (!(arg instanceof info_info_pb.GetSpeedFactorRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetSpeedFactorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetSpeedFactorRequest(buffer_arg) {
  return info_info_pb.GetSpeedFactorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetSpeedFactorResponse(arg) {
  if (!(arg instanceof info_info_pb.GetSpeedFactorResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetSpeedFactorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetSpeedFactorResponse(buffer_arg) {
  return info_info_pb.GetSpeedFactorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetVersionRequest(arg) {
  if (!(arg instanceof info_info_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetVersionRequest(buffer_arg) {
  return info_info_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_GetVersionResponse(arg) {
  if (!(arg instanceof info_info_pb.GetVersionResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.GetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_GetVersionResponse(buffer_arg) {
  return info_info_pb.GetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_info_SubscribeFlightInformationRequest(arg) {
  if (!(arg instanceof info_info_pb.SubscribeFlightInformationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.info.SubscribeFlightInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_info_SubscribeFlightInformationRequest(buffer_arg) {
  return info_info_pb.SubscribeFlightInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide information about the hardware and/or software of a system.
var InfoServiceService = exports.InfoServiceService = {
  // Get flight information of the system.
getFlightInformation: {
    path: '/mavsdk.rpc.info.InfoService/GetFlightInformation',
    requestStream: false,
    responseStream: false,
    requestType: info_info_pb.GetFlightInformationRequest,
    responseType: info_info_pb.GetFlightInformationResponse,
    requestSerialize: serialize_mavsdk_rpc_info_GetFlightInformationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_info_GetFlightInformationRequest,
    responseSerialize: serialize_mavsdk_rpc_info_GetFlightInformationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_info_GetFlightInformationResponse,
  },
  // Get the identification of the system.
getIdentification: {
    path: '/mavsdk.rpc.info.InfoService/GetIdentification',
    requestStream: false,
    responseStream: false,
    requestType: info_info_pb.GetIdentificationRequest,
    responseType: info_info_pb.GetIdentificationResponse,
    requestSerialize: serialize_mavsdk_rpc_info_GetIdentificationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_info_GetIdentificationRequest,
    responseSerialize: serialize_mavsdk_rpc_info_GetIdentificationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_info_GetIdentificationResponse,
  },
  // Get product information of the system.
getProduct: {
    path: '/mavsdk.rpc.info.InfoService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: info_info_pb.GetProductRequest,
    responseType: info_info_pb.GetProductResponse,
    requestSerialize: serialize_mavsdk_rpc_info_GetProductRequest,
    requestDeserialize: deserialize_mavsdk_rpc_info_GetProductRequest,
    responseSerialize: serialize_mavsdk_rpc_info_GetProductResponse,
    responseDeserialize: deserialize_mavsdk_rpc_info_GetProductResponse,
  },
  // Get the version information of the system.
getVersion: {
    path: '/mavsdk.rpc.info.InfoService/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: info_info_pb.GetVersionRequest,
    responseType: info_info_pb.GetVersionResponse,
    requestSerialize: serialize_mavsdk_rpc_info_GetVersionRequest,
    requestDeserialize: deserialize_mavsdk_rpc_info_GetVersionRequest,
    responseSerialize: serialize_mavsdk_rpc_info_GetVersionResponse,
    responseDeserialize: deserialize_mavsdk_rpc_info_GetVersionResponse,
  },
  // Get the speed factor of a simulation (with lockstep a simulation can run faster or slower than realtime).
getSpeedFactor: {
    path: '/mavsdk.rpc.info.InfoService/GetSpeedFactor',
    requestStream: false,
    responseStream: false,
    requestType: info_info_pb.GetSpeedFactorRequest,
    responseType: info_info_pb.GetSpeedFactorResponse,
    requestSerialize: serialize_mavsdk_rpc_info_GetSpeedFactorRequest,
    requestDeserialize: deserialize_mavsdk_rpc_info_GetSpeedFactorRequest,
    responseSerialize: serialize_mavsdk_rpc_info_GetSpeedFactorResponse,
    responseDeserialize: deserialize_mavsdk_rpc_info_GetSpeedFactorResponse,
  },
  // Subscribe to 'flight information' updates.
subscribeFlightInformation: {
    path: '/mavsdk.rpc.info.InfoService/SubscribeFlightInformation',
    requestStream: false,
    responseStream: true,
    requestType: info_info_pb.SubscribeFlightInformationRequest,
    responseType: info_info_pb.FlightInformationResponse,
    requestSerialize: serialize_mavsdk_rpc_info_SubscribeFlightInformationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_info_SubscribeFlightInformationRequest,
    responseSerialize: serialize_mavsdk_rpc_info_FlightInformationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_info_FlightInformationResponse,
  },
};

exports.InfoServiceClient = grpc.makeGenericClientConstructor(InfoServiceService);


// fix autocompletion
module.exports = exports;
