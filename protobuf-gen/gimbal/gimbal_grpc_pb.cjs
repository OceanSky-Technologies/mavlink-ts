/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var gimbal_gimbal_pb = require('../gimbal/gimbal_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_gimbal_AttitudeResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.AttitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.AttitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_AttitudeResponse(buffer_arg) {
  return gimbal_gimbal_pb.AttitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_ControlStatusResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.ControlStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.ControlStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_ControlStatusResponse(buffer_arg) {
  return gimbal_gimbal_pb.ControlStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_GetAttitudeRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.GetAttitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.GetAttitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_GetAttitudeRequest(buffer_arg) {
  return gimbal_gimbal_pb.GetAttitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_GetAttitudeResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.GetAttitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.GetAttitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_GetAttitudeResponse(buffer_arg) {
  return gimbal_gimbal_pb.GetAttitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_GetControlStatusRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.GetControlStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.GetControlStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_GetControlStatusRequest(buffer_arg) {
  return gimbal_gimbal_pb.GetControlStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_GetControlStatusResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.GetControlStatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.GetControlStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_GetControlStatusResponse(buffer_arg) {
  return gimbal_gimbal_pb.GetControlStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_GimbalListResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.GimbalListResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.GimbalListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_GimbalListResponse(buffer_arg) {
  return gimbal_gimbal_pb.GimbalListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_ReleaseControlRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.ReleaseControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.ReleaseControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_ReleaseControlRequest(buffer_arg) {
  return gimbal_gimbal_pb.ReleaseControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_ReleaseControlResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.ReleaseControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.ReleaseControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_ReleaseControlResponse(buffer_arg) {
  return gimbal_gimbal_pb.ReleaseControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SetAnglesRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SetAnglesRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SetAnglesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SetAnglesRequest(buffer_arg) {
  return gimbal_gimbal_pb.SetAnglesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SetAnglesResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SetAnglesResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SetAnglesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SetAnglesResponse(buffer_arg) {
  return gimbal_gimbal_pb.SetAnglesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SetAngularRatesRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SetAngularRatesRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SetAngularRatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SetAngularRatesRequest(buffer_arg) {
  return gimbal_gimbal_pb.SetAngularRatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SetAngularRatesResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SetAngularRatesResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SetAngularRatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SetAngularRatesResponse(buffer_arg) {
  return gimbal_gimbal_pb.SetAngularRatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SetRoiLocationRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SetRoiLocationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SetRoiLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SetRoiLocationRequest(buffer_arg) {
  return gimbal_gimbal_pb.SetRoiLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SetRoiLocationResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SetRoiLocationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SetRoiLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SetRoiLocationResponse(buffer_arg) {
  return gimbal_gimbal_pb.SetRoiLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SubscribeAttitudeRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SubscribeAttitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SubscribeAttitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SubscribeAttitudeRequest(buffer_arg) {
  return gimbal_gimbal_pb.SubscribeAttitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SubscribeControlStatusRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SubscribeControlStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SubscribeControlStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SubscribeControlStatusRequest(buffer_arg) {
  return gimbal_gimbal_pb.SubscribeControlStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_SubscribeGimbalListRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.SubscribeGimbalListRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.SubscribeGimbalListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_SubscribeGimbalListRequest(buffer_arg) {
  return gimbal_gimbal_pb.SubscribeGimbalListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_TakeControlRequest(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.TakeControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.TakeControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_TakeControlRequest(buffer_arg) {
  return gimbal_gimbal_pb.TakeControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_gimbal_TakeControlResponse(arg) {
  if (!(arg instanceof gimbal_gimbal_pb.TakeControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.gimbal.TakeControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_gimbal_TakeControlResponse(buffer_arg) {
  return gimbal_gimbal_pb.TakeControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide control over a gimbal.
var GimbalServiceService = exports.GimbalServiceService = {
  //
// Set gimbal roll, pitch and yaw angles.
//
// This sets the desired roll, pitch and yaw angles of a gimbal.
// Will return when the command is accepted, however, it might
// take the gimbal longer to actually be set to the new angles.
//
// Note that the roll angle needs to be set to 0 when send_mode is Once.
setAngles: {
    path: '/mavsdk.rpc.gimbal.GimbalService/SetAngles',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.SetAnglesRequest,
    responseType: gimbal_gimbal_pb.SetAnglesResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_SetAnglesRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_SetAnglesRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_SetAnglesResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_SetAnglesResponse,
  },
  //
// Set gimbal angular rates.
//
// This sets the desired angular rates around roll, pitch and yaw axes of a gimbal.
// Will return when the command is accepted, however, it might
// take the gimbal longer to actually reach the angular rate.
//
// Note that the roll angle needs to be set to 0 when send_mode is Once.
setAngularRates: {
    path: '/mavsdk.rpc.gimbal.GimbalService/SetAngularRates',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.SetAngularRatesRequest,
    responseType: gimbal_gimbal_pb.SetAngularRatesResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_SetAngularRatesRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_SetAngularRatesRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_SetAngularRatesResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_SetAngularRatesResponse,
  },
  //
// Set gimbal region of interest (ROI).
//
// This sets a region of interest that the gimbal will point to.
// The gimbal will continue to point to the specified region until it
// receives a new command.
// The function will return when the command is accepted, however, it might
// take the gimbal longer to actually rotate to the ROI.
setRoiLocation: {
    path: '/mavsdk.rpc.gimbal.GimbalService/SetRoiLocation',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.SetRoiLocationRequest,
    responseType: gimbal_gimbal_pb.SetRoiLocationResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_SetRoiLocationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_SetRoiLocationRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_SetRoiLocationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_SetRoiLocationResponse,
  },
  //
// Take control.
//
// There can be only two components in control of a gimbal at any given time.
// One with "primary" control, and one with "secondary" control. The way the
// secondary control is implemented is not specified and hence depends on the
// vehicle.
//
// Components are expected to be cooperative, which means that they can
// override each other and should therefore do it carefully.
takeControl: {
    path: '/mavsdk.rpc.gimbal.GimbalService/TakeControl',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.TakeControlRequest,
    responseType: gimbal_gimbal_pb.TakeControlResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_TakeControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_TakeControlRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_TakeControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_TakeControlResponse,
  },
  //
// Release control.
//
// Release control, such that other components can control the gimbal.
releaseControl: {
    path: '/mavsdk.rpc.gimbal.GimbalService/ReleaseControl',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.ReleaseControlRequest,
    responseType: gimbal_gimbal_pb.ReleaseControlResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_ReleaseControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_ReleaseControlRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_ReleaseControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_ReleaseControlResponse,
  },
  //
// Subscribe to list of gimbals.
//
// This allows to find out what gimbals are connected to the system.
// Based on the gimbal ID, we can then address a specific gimbal.
subscribeGimbalList: {
    path: '/mavsdk.rpc.gimbal.GimbalService/SubscribeGimbalList',
    requestStream: false,
    responseStream: true,
    requestType: gimbal_gimbal_pb.SubscribeGimbalListRequest,
    responseType: gimbal_gimbal_pb.GimbalListResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_SubscribeGimbalListRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_SubscribeGimbalListRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_GimbalListResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_GimbalListResponse,
  },
  //
// Subscribe to control status updates.
//
// This allows a component to know if it has primary, secondary or
// no control over the gimbal. Also, it gives the system and component ids
// of the other components in control (if any).
subscribeControlStatus: {
    path: '/mavsdk.rpc.gimbal.GimbalService/SubscribeControlStatus',
    requestStream: false,
    responseStream: true,
    requestType: gimbal_gimbal_pb.SubscribeControlStatusRequest,
    responseType: gimbal_gimbal_pb.ControlStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_SubscribeControlStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_SubscribeControlStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_ControlStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_ControlStatusResponse,
  },
  //
// Get control status for specific gimbal.
getControlStatus: {
    path: '/mavsdk.rpc.gimbal.GimbalService/GetControlStatus',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.GetControlStatusRequest,
    responseType: gimbal_gimbal_pb.GetControlStatusResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_GetControlStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_GetControlStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_GetControlStatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_GetControlStatusResponse,
  },
  //
// Subscribe to attitude updates.
//
// This gets you the gimbal's attitude and angular rate.
subscribeAttitude: {
    path: '/mavsdk.rpc.gimbal.GimbalService/SubscribeAttitude',
    requestStream: false,
    responseStream: true,
    requestType: gimbal_gimbal_pb.SubscribeAttitudeRequest,
    responseType: gimbal_gimbal_pb.AttitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_SubscribeAttitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_SubscribeAttitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_AttitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_AttitudeResponse,
  },
  //
// Get attitude for specific gimbal.
getAttitude: {
    path: '/mavsdk.rpc.gimbal.GimbalService/GetAttitude',
    requestStream: false,
    responseStream: false,
    requestType: gimbal_gimbal_pb.GetAttitudeRequest,
    responseType: gimbal_gimbal_pb.GetAttitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_gimbal_GetAttitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_gimbal_GetAttitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_gimbal_GetAttitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_gimbal_GetAttitudeResponse,
  },
};

exports.GimbalServiceClient = grpc.makeGenericClientConstructor(GimbalServiceService);


// fix autocompletion
module.exports = exports;
