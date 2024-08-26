/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var manual_control_manual_control_pb = require('../manual_control/manual_control_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_manual_control_SetManualControlInputRequest(arg) {
  if (!(arg instanceof manual_control_manual_control_pb.SetManualControlInputRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.manual_control.SetManualControlInputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_manual_control_SetManualControlInputRequest(buffer_arg) {
  return manual_control_manual_control_pb.SetManualControlInputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_manual_control_SetManualControlInputResponse(arg) {
  if (!(arg instanceof manual_control_manual_control_pb.SetManualControlInputResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.manual_control.SetManualControlInputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_manual_control_SetManualControlInputResponse(buffer_arg) {
  return manual_control_manual_control_pb.SetManualControlInputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_manual_control_StartAltitudeControlRequest(arg) {
  if (!(arg instanceof manual_control_manual_control_pb.StartAltitudeControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.manual_control.StartAltitudeControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_manual_control_StartAltitudeControlRequest(buffer_arg) {
  return manual_control_manual_control_pb.StartAltitudeControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_manual_control_StartAltitudeControlResponse(arg) {
  if (!(arg instanceof manual_control_manual_control_pb.StartAltitudeControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.manual_control.StartAltitudeControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_manual_control_StartAltitudeControlResponse(buffer_arg) {
  return manual_control_manual_control_pb.StartAltitudeControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_manual_control_StartPositionControlRequest(arg) {
  if (!(arg instanceof manual_control_manual_control_pb.StartPositionControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.manual_control.StartPositionControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_manual_control_StartPositionControlRequest(buffer_arg) {
  return manual_control_manual_control_pb.StartPositionControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_manual_control_StartPositionControlResponse(arg) {
  if (!(arg instanceof manual_control_manual_control_pb.StartPositionControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.manual_control.StartPositionControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_manual_control_StartPositionControlResponse(buffer_arg) {
  return manual_control_manual_control_pb.StartPositionControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable manual control using e.g. a joystick or gamepad.
var ManualControlServiceService = exports.ManualControlServiceService = {
  //
// Start position control using e.g. joystick input.
//
// Requires manual control input to be sent regularly already.
// Requires a valid position using e.g. GPS, external vision, or optical flow.
startPositionControl: {
    path: '/mavsdk.rpc.manual_control.ManualControlService/StartPositionControl',
    requestStream: false,
    responseStream: false,
    requestType: manual_control_manual_control_pb.StartPositionControlRequest,
    responseType: manual_control_manual_control_pb.StartPositionControlResponse,
    requestSerialize: serialize_mavsdk_rpc_manual_control_StartPositionControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_manual_control_StartPositionControlRequest,
    responseSerialize: serialize_mavsdk_rpc_manual_control_StartPositionControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_manual_control_StartPositionControlResponse,
  },
  //
// Start altitude control
//
// Requires manual control input to be sent regularly already.
// Does not require a  valid position e.g. GPS.
startAltitudeControl: {
    path: '/mavsdk.rpc.manual_control.ManualControlService/StartAltitudeControl',
    requestStream: false,
    responseStream: false,
    requestType: manual_control_manual_control_pb.StartAltitudeControlRequest,
    responseType: manual_control_manual_control_pb.StartAltitudeControlResponse,
    requestSerialize: serialize_mavsdk_rpc_manual_control_StartAltitudeControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_manual_control_StartAltitudeControlRequest,
    responseSerialize: serialize_mavsdk_rpc_manual_control_StartAltitudeControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_manual_control_StartAltitudeControlResponse,
  },
  //
// Set manual control input
//
// The manual control input needs to be sent at a rate high enough to prevent
// triggering of RC loss, a good minimum rate is 10 Hz.
setManualControlInput: {
    path: '/mavsdk.rpc.manual_control.ManualControlService/SetManualControlInput',
    requestStream: false,
    responseStream: false,
    requestType: manual_control_manual_control_pb.SetManualControlInputRequest,
    responseType: manual_control_manual_control_pb.SetManualControlInputResponse,
    requestSerialize: serialize_mavsdk_rpc_manual_control_SetManualControlInputRequest,
    requestDeserialize: deserialize_mavsdk_rpc_manual_control_SetManualControlInputRequest,
    responseSerialize: serialize_mavsdk_rpc_manual_control_SetManualControlInputResponse,
    responseDeserialize: deserialize_mavsdk_rpc_manual_control_SetManualControlInputResponse,
  },
};

exports.ManualControlServiceClient = grpc.makeGenericClientConstructor(ManualControlServiceService);


// fix autocompletion
module.exports = exports;
