/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var param_param_pb = require('../param/param_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_param_GetAllParamsRequest(arg) {
  if (!(arg instanceof param_param_pb.GetAllParamsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetAllParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetAllParamsRequest(buffer_arg) {
  return param_param_pb.GetAllParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetAllParamsResponse(arg) {
  if (!(arg instanceof param_param_pb.GetAllParamsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetAllParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetAllParamsResponse(buffer_arg) {
  return param_param_pb.GetAllParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetParamCustomRequest(arg) {
  if (!(arg instanceof param_param_pb.GetParamCustomRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetParamCustomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetParamCustomRequest(buffer_arg) {
  return param_param_pb.GetParamCustomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetParamCustomResponse(arg) {
  if (!(arg instanceof param_param_pb.GetParamCustomResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetParamCustomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetParamCustomResponse(buffer_arg) {
  return param_param_pb.GetParamCustomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetParamFloatRequest(arg) {
  if (!(arg instanceof param_param_pb.GetParamFloatRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetParamFloatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetParamFloatRequest(buffer_arg) {
  return param_param_pb.GetParamFloatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetParamFloatResponse(arg) {
  if (!(arg instanceof param_param_pb.GetParamFloatResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetParamFloatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetParamFloatResponse(buffer_arg) {
  return param_param_pb.GetParamFloatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetParamIntRequest(arg) {
  if (!(arg instanceof param_param_pb.GetParamIntRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetParamIntRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetParamIntRequest(buffer_arg) {
  return param_param_pb.GetParamIntRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_GetParamIntResponse(arg) {
  if (!(arg instanceof param_param_pb.GetParamIntResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.GetParamIntResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_GetParamIntResponse(buffer_arg) {
  return param_param_pb.GetParamIntResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SelectComponentRequest(arg) {
  if (!(arg instanceof param_param_pb.SelectComponentRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SelectComponentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SelectComponentRequest(buffer_arg) {
  return param_param_pb.SelectComponentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SelectComponentResponse(arg) {
  if (!(arg instanceof param_param_pb.SelectComponentResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SelectComponentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SelectComponentResponse(buffer_arg) {
  return param_param_pb.SelectComponentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SetParamCustomRequest(arg) {
  if (!(arg instanceof param_param_pb.SetParamCustomRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SetParamCustomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SetParamCustomRequest(buffer_arg) {
  return param_param_pb.SetParamCustomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SetParamCustomResponse(arg) {
  if (!(arg instanceof param_param_pb.SetParamCustomResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SetParamCustomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SetParamCustomResponse(buffer_arg) {
  return param_param_pb.SetParamCustomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SetParamFloatRequest(arg) {
  if (!(arg instanceof param_param_pb.SetParamFloatRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SetParamFloatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SetParamFloatRequest(buffer_arg) {
  return param_param_pb.SetParamFloatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SetParamFloatResponse(arg) {
  if (!(arg instanceof param_param_pb.SetParamFloatResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SetParamFloatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SetParamFloatResponse(buffer_arg) {
  return param_param_pb.SetParamFloatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SetParamIntRequest(arg) {
  if (!(arg instanceof param_param_pb.SetParamIntRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SetParamIntRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SetParamIntRequest(buffer_arg) {
  return param_param_pb.SetParamIntRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_SetParamIntResponse(arg) {
  if (!(arg instanceof param_param_pb.SetParamIntResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param.SetParamIntResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_SetParamIntResponse(buffer_arg) {
  return param_param_pb.SetParamIntResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide raw access to get and set parameters.
var ParamServiceService = exports.ParamServiceService = {
  //
// Get an int parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
getParamInt: {
    path: '/mavsdk.rpc.param.ParamService/GetParamInt',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.GetParamIntRequest,
    responseType: param_param_pb.GetParamIntResponse,
    requestSerialize: serialize_mavsdk_rpc_param_GetParamIntRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_GetParamIntRequest,
    responseSerialize: serialize_mavsdk_rpc_param_GetParamIntResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_GetParamIntResponse,
  },
  //
// Set an int parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
setParamInt: {
    path: '/mavsdk.rpc.param.ParamService/SetParamInt',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.SetParamIntRequest,
    responseType: param_param_pb.SetParamIntResponse,
    requestSerialize: serialize_mavsdk_rpc_param_SetParamIntRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_SetParamIntRequest,
    responseSerialize: serialize_mavsdk_rpc_param_SetParamIntResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_SetParamIntResponse,
  },
  //
// Get a float parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
getParamFloat: {
    path: '/mavsdk.rpc.param.ParamService/GetParamFloat',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.GetParamFloatRequest,
    responseType: param_param_pb.GetParamFloatResponse,
    requestSerialize: serialize_mavsdk_rpc_param_GetParamFloatRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_GetParamFloatRequest,
    responseSerialize: serialize_mavsdk_rpc_param_GetParamFloatResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_GetParamFloatResponse,
  },
  //
// Set a float parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
setParamFloat: {
    path: '/mavsdk.rpc.param.ParamService/SetParamFloat',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.SetParamFloatRequest,
    responseType: param_param_pb.SetParamFloatResponse,
    requestSerialize: serialize_mavsdk_rpc_param_SetParamFloatRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_SetParamFloatRequest,
    responseSerialize: serialize_mavsdk_rpc_param_SetParamFloatResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_SetParamFloatResponse,
  },
  //
// Get a custom parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
getParamCustom: {
    path: '/mavsdk.rpc.param.ParamService/GetParamCustom',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.GetParamCustomRequest,
    responseType: param_param_pb.GetParamCustomResponse,
    requestSerialize: serialize_mavsdk_rpc_param_GetParamCustomRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_GetParamCustomRequest,
    responseSerialize: serialize_mavsdk_rpc_param_GetParamCustomResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_GetParamCustomResponse,
  },
  //
// Set a custom parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
setParamCustom: {
    path: '/mavsdk.rpc.param.ParamService/SetParamCustom',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.SetParamCustomRequest,
    responseType: param_param_pb.SetParamCustomResponse,
    requestSerialize: serialize_mavsdk_rpc_param_SetParamCustomRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_SetParamCustomRequest,
    responseSerialize: serialize_mavsdk_rpc_param_SetParamCustomResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_SetParamCustomResponse,
  },
  //
// Get all parameters.
getAllParams: {
    path: '/mavsdk.rpc.param.ParamService/GetAllParams',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.GetAllParamsRequest,
    responseType: param_param_pb.GetAllParamsResponse,
    requestSerialize: serialize_mavsdk_rpc_param_GetAllParamsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_GetAllParamsRequest,
    responseSerialize: serialize_mavsdk_rpc_param_GetAllParamsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_GetAllParamsResponse,
  },
  //
// Select component ID of parameter component to talk to and param protocol version.
//
// Default is the autopilot component (1), and Version (0).
selectComponent: {
    path: '/mavsdk.rpc.param.ParamService/SelectComponent',
    requestStream: false,
    responseStream: false,
    requestType: param_param_pb.SelectComponentRequest,
    responseType: param_param_pb.SelectComponentResponse,
    requestSerialize: serialize_mavsdk_rpc_param_SelectComponentRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_SelectComponentRequest,
    responseSerialize: serialize_mavsdk_rpc_param_SelectComponentResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_SelectComponentResponse,
  },
};

exports.ParamServiceClient = grpc.makeGenericClientConstructor(ParamServiceService);


// fix autocompletion
module.exports = exports;
