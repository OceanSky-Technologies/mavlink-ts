/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var param_server_param_server_pb = require('../param_server/param_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_param_server_ChangedParamCustomResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.ChangedParamCustomResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ChangedParamCustomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ChangedParamCustomResponse(buffer_arg) {
  return param_server_param_server_pb.ChangedParamCustomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ChangedParamFloatResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.ChangedParamFloatResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ChangedParamFloatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ChangedParamFloatResponse(buffer_arg) {
  return param_server_param_server_pb.ChangedParamFloatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ChangedParamIntResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.ChangedParamIntResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ChangedParamIntResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ChangedParamIntResponse(buffer_arg) {
  return param_server_param_server_pb.ChangedParamIntResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ProvideParamCustomRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.ProvideParamCustomRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ProvideParamCustomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ProvideParamCustomRequest(buffer_arg) {
  return param_server_param_server_pb.ProvideParamCustomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ProvideParamCustomResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.ProvideParamCustomResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ProvideParamCustomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ProvideParamCustomResponse(buffer_arg) {
  return param_server_param_server_pb.ProvideParamCustomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ProvideParamFloatRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.ProvideParamFloatRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ProvideParamFloatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ProvideParamFloatRequest(buffer_arg) {
  return param_server_param_server_pb.ProvideParamFloatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ProvideParamFloatResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.ProvideParamFloatResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ProvideParamFloatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ProvideParamFloatResponse(buffer_arg) {
  return param_server_param_server_pb.ProvideParamFloatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ProvideParamIntRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.ProvideParamIntRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ProvideParamIntRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ProvideParamIntRequest(buffer_arg) {
  return param_server_param_server_pb.ProvideParamIntRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_ProvideParamIntResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.ProvideParamIntResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.ProvideParamIntResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_ProvideParamIntResponse(buffer_arg) {
  return param_server_param_server_pb.ProvideParamIntResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveAllParamsRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveAllParamsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveAllParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveAllParamsRequest(buffer_arg) {
  return param_server_param_server_pb.RetrieveAllParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveAllParamsResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveAllParamsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveAllParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveAllParamsResponse(buffer_arg) {
  return param_server_param_server_pb.RetrieveAllParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveParamCustomRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveParamCustomRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveParamCustomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveParamCustomRequest(buffer_arg) {
  return param_server_param_server_pb.RetrieveParamCustomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveParamCustomResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveParamCustomResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveParamCustomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveParamCustomResponse(buffer_arg) {
  return param_server_param_server_pb.RetrieveParamCustomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveParamFloatRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveParamFloatRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveParamFloatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveParamFloatRequest(buffer_arg) {
  return param_server_param_server_pb.RetrieveParamFloatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveParamFloatResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveParamFloatResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveParamFloatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveParamFloatResponse(buffer_arg) {
  return param_server_param_server_pb.RetrieveParamFloatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveParamIntRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveParamIntRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveParamIntRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveParamIntRequest(buffer_arg) {
  return param_server_param_server_pb.RetrieveParamIntRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_RetrieveParamIntResponse(arg) {
  if (!(arg instanceof param_server_param_server_pb.RetrieveParamIntResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.RetrieveParamIntResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_RetrieveParamIntResponse(buffer_arg) {
  return param_server_param_server_pb.RetrieveParamIntResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_SubscribeChangedParamCustomRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.SubscribeChangedParamCustomRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.SubscribeChangedParamCustomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_SubscribeChangedParamCustomRequest(buffer_arg) {
  return param_server_param_server_pb.SubscribeChangedParamCustomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_SubscribeChangedParamFloatRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.SubscribeChangedParamFloatRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.SubscribeChangedParamFloatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_SubscribeChangedParamFloatRequest(buffer_arg) {
  return param_server_param_server_pb.SubscribeChangedParamFloatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_param_server_SubscribeChangedParamIntRequest(arg) {
  if (!(arg instanceof param_server_param_server_pb.SubscribeChangedParamIntRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.param_server.SubscribeChangedParamIntRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_param_server_SubscribeChangedParamIntRequest(buffer_arg) {
  return param_server_param_server_pb.SubscribeChangedParamIntRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide raw access to retrieve and provide server parameters.
var ParamServerServiceService = exports.ParamServerServiceService = {
  //
// Retrieve an int parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
retrieveParamInt: {
    path: '/mavsdk.rpc.param_server.ParamServerService/RetrieveParamInt',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.RetrieveParamIntRequest,
    responseType: param_server_param_server_pb.RetrieveParamIntResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_RetrieveParamIntRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveParamIntRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_RetrieveParamIntResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveParamIntResponse,
  },
  //
// Provide an int parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
provideParamInt: {
    path: '/mavsdk.rpc.param_server.ParamServerService/ProvideParamInt',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.ProvideParamIntRequest,
    responseType: param_server_param_server_pb.ProvideParamIntResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_ProvideParamIntRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_ProvideParamIntRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_ProvideParamIntResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_ProvideParamIntResponse,
  },
  //
// Retrieve a float parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
retrieveParamFloat: {
    path: '/mavsdk.rpc.param_server.ParamServerService/RetrieveParamFloat',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.RetrieveParamFloatRequest,
    responseType: param_server_param_server_pb.RetrieveParamFloatResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_RetrieveParamFloatRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveParamFloatRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_RetrieveParamFloatResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveParamFloatResponse,
  },
  //
// Provide a float parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
provideParamFloat: {
    path: '/mavsdk.rpc.param_server.ParamServerService/ProvideParamFloat',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.ProvideParamFloatRequest,
    responseType: param_server_param_server_pb.ProvideParamFloatResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_ProvideParamFloatRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_ProvideParamFloatRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_ProvideParamFloatResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_ProvideParamFloatResponse,
  },
  //
// Retrieve a custom parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
retrieveParamCustom: {
    path: '/mavsdk.rpc.param_server.ParamServerService/RetrieveParamCustom',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.RetrieveParamCustomRequest,
    responseType: param_server_param_server_pb.RetrieveParamCustomResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_RetrieveParamCustomRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveParamCustomRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_RetrieveParamCustomResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveParamCustomResponse,
  },
  //
// Provide a custom parameter.
//
// If the type is wrong, the result will be `WRONG_TYPE`.
provideParamCustom: {
    path: '/mavsdk.rpc.param_server.ParamServerService/ProvideParamCustom',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.ProvideParamCustomRequest,
    responseType: param_server_param_server_pb.ProvideParamCustomResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_ProvideParamCustomRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_ProvideParamCustomRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_ProvideParamCustomResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_ProvideParamCustomResponse,
  },
  //
// Retrieve all parameters.
retrieveAllParams: {
    path: '/mavsdk.rpc.param_server.ParamServerService/RetrieveAllParams',
    requestStream: false,
    responseStream: false,
    requestType: param_server_param_server_pb.RetrieveAllParamsRequest,
    responseType: param_server_param_server_pb.RetrieveAllParamsResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_RetrieveAllParamsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveAllParamsRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_RetrieveAllParamsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_RetrieveAllParamsResponse,
  },
  // Subscribe to changed int param.
subscribeChangedParamInt: {
    path: '/mavsdk.rpc.param_server.ParamServerService/SubscribeChangedParamInt',
    requestStream: false,
    responseStream: true,
    requestType: param_server_param_server_pb.SubscribeChangedParamIntRequest,
    responseType: param_server_param_server_pb.ChangedParamIntResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_SubscribeChangedParamIntRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_SubscribeChangedParamIntRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_ChangedParamIntResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_ChangedParamIntResponse,
  },
  // Subscribe to changed float param.
subscribeChangedParamFloat: {
    path: '/mavsdk.rpc.param_server.ParamServerService/SubscribeChangedParamFloat',
    requestStream: false,
    responseStream: true,
    requestType: param_server_param_server_pb.SubscribeChangedParamFloatRequest,
    responseType: param_server_param_server_pb.ChangedParamFloatResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_SubscribeChangedParamFloatRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_SubscribeChangedParamFloatRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_ChangedParamFloatResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_ChangedParamFloatResponse,
  },
  // Subscribe to changed custom param.
subscribeChangedParamCustom: {
    path: '/mavsdk.rpc.param_server.ParamServerService/SubscribeChangedParamCustom',
    requestStream: false,
    responseStream: true,
    requestType: param_server_param_server_pb.SubscribeChangedParamCustomRequest,
    responseType: param_server_param_server_pb.ChangedParamCustomResponse,
    requestSerialize: serialize_mavsdk_rpc_param_server_SubscribeChangedParamCustomRequest,
    requestDeserialize: deserialize_mavsdk_rpc_param_server_SubscribeChangedParamCustomRequest,
    responseSerialize: serialize_mavsdk_rpc_param_server_ChangedParamCustomResponse,
    responseDeserialize: deserialize_mavsdk_rpc_param_server_ChangedParamCustomResponse,
  },
};

exports.ParamServerServiceClient = grpc.makeGenericClientConstructor(ParamServerServiceService);


// fix autocompletion
module.exports = exports;
