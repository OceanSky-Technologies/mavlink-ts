/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var action_action_pb = require('../action/action_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_action_ArmForceRequest(arg) {
  if (!(arg instanceof action_action_pb.ArmForceRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ArmForceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ArmForceRequest(buffer_arg) {
  return action_action_pb.ArmForceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ArmForceResponse(arg) {
  if (!(arg instanceof action_action_pb.ArmForceResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ArmForceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ArmForceResponse(buffer_arg) {
  return action_action_pb.ArmForceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ArmRequest(arg) {
  if (!(arg instanceof action_action_pb.ArmRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ArmRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ArmRequest(buffer_arg) {
  return action_action_pb.ArmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ArmResponse(arg) {
  if (!(arg instanceof action_action_pb.ArmResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ArmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ArmResponse(buffer_arg) {
  return action_action_pb.ArmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_DisarmRequest(arg) {
  if (!(arg instanceof action_action_pb.DisarmRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.DisarmRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_DisarmRequest(buffer_arg) {
  return action_action_pb.DisarmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_DisarmResponse(arg) {
  if (!(arg instanceof action_action_pb.DisarmResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.DisarmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_DisarmResponse(buffer_arg) {
  return action_action_pb.DisarmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_DoOrbitRequest(arg) {
  if (!(arg instanceof action_action_pb.DoOrbitRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.DoOrbitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_DoOrbitRequest(buffer_arg) {
  return action_action_pb.DoOrbitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_DoOrbitResponse(arg) {
  if (!(arg instanceof action_action_pb.DoOrbitResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.DoOrbitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_DoOrbitResponse(buffer_arg) {
  return action_action_pb.DoOrbitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GetMaximumSpeedRequest(arg) {
  if (!(arg instanceof action_action_pb.GetMaximumSpeedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GetMaximumSpeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GetMaximumSpeedRequest(buffer_arg) {
  return action_action_pb.GetMaximumSpeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GetMaximumSpeedResponse(arg) {
  if (!(arg instanceof action_action_pb.GetMaximumSpeedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GetMaximumSpeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GetMaximumSpeedResponse(buffer_arg) {
  return action_action_pb.GetMaximumSpeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeRequest(arg) {
  if (!(arg instanceof action_action_pb.GetReturnToLaunchAltitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GetReturnToLaunchAltitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeRequest(buffer_arg) {
  return action_action_pb.GetReturnToLaunchAltitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeResponse(arg) {
  if (!(arg instanceof action_action_pb.GetReturnToLaunchAltitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GetReturnToLaunchAltitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeResponse(buffer_arg) {
  return action_action_pb.GetReturnToLaunchAltitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GetTakeoffAltitudeRequest(arg) {
  if (!(arg instanceof action_action_pb.GetTakeoffAltitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GetTakeoffAltitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GetTakeoffAltitudeRequest(buffer_arg) {
  return action_action_pb.GetTakeoffAltitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GetTakeoffAltitudeResponse(arg) {
  if (!(arg instanceof action_action_pb.GetTakeoffAltitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GetTakeoffAltitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GetTakeoffAltitudeResponse(buffer_arg) {
  return action_action_pb.GetTakeoffAltitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GotoLocationRequest(arg) {
  if (!(arg instanceof action_action_pb.GotoLocationRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GotoLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GotoLocationRequest(buffer_arg) {
  return action_action_pb.GotoLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_GotoLocationResponse(arg) {
  if (!(arg instanceof action_action_pb.GotoLocationResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.GotoLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_GotoLocationResponse(buffer_arg) {
  return action_action_pb.GotoLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_HoldRequest(arg) {
  if (!(arg instanceof action_action_pb.HoldRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.HoldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_HoldRequest(buffer_arg) {
  return action_action_pb.HoldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_HoldResponse(arg) {
  if (!(arg instanceof action_action_pb.HoldResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.HoldResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_HoldResponse(buffer_arg) {
  return action_action_pb.HoldResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_KillRequest(arg) {
  if (!(arg instanceof action_action_pb.KillRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.KillRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_KillRequest(buffer_arg) {
  return action_action_pb.KillRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_KillResponse(arg) {
  if (!(arg instanceof action_action_pb.KillResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.KillResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_KillResponse(buffer_arg) {
  return action_action_pb.KillResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_LandRequest(arg) {
  if (!(arg instanceof action_action_pb.LandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.LandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_LandRequest(buffer_arg) {
  return action_action_pb.LandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_LandResponse(arg) {
  if (!(arg instanceof action_action_pb.LandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.LandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_LandResponse(buffer_arg) {
  return action_action_pb.LandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_RebootRequest(arg) {
  if (!(arg instanceof action_action_pb.RebootRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.RebootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_RebootRequest(buffer_arg) {
  return action_action_pb.RebootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_RebootResponse(arg) {
  if (!(arg instanceof action_action_pb.RebootResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.RebootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_RebootResponse(buffer_arg) {
  return action_action_pb.RebootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ReturnToLaunchRequest(arg) {
  if (!(arg instanceof action_action_pb.ReturnToLaunchRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ReturnToLaunchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ReturnToLaunchRequest(buffer_arg) {
  return action_action_pb.ReturnToLaunchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ReturnToLaunchResponse(arg) {
  if (!(arg instanceof action_action_pb.ReturnToLaunchResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ReturnToLaunchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ReturnToLaunchResponse(buffer_arg) {
  return action_action_pb.ReturnToLaunchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetActuatorRequest(arg) {
  if (!(arg instanceof action_action_pb.SetActuatorRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetActuatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetActuatorRequest(buffer_arg) {
  return action_action_pb.SetActuatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetActuatorResponse(arg) {
  if (!(arg instanceof action_action_pb.SetActuatorResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetActuatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetActuatorResponse(buffer_arg) {
  return action_action_pb.SetActuatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetCurrentSpeedRequest(arg) {
  if (!(arg instanceof action_action_pb.SetCurrentSpeedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetCurrentSpeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetCurrentSpeedRequest(buffer_arg) {
  return action_action_pb.SetCurrentSpeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetCurrentSpeedResponse(arg) {
  if (!(arg instanceof action_action_pb.SetCurrentSpeedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetCurrentSpeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetCurrentSpeedResponse(buffer_arg) {
  return action_action_pb.SetCurrentSpeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetMaximumSpeedRequest(arg) {
  if (!(arg instanceof action_action_pb.SetMaximumSpeedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetMaximumSpeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetMaximumSpeedRequest(buffer_arg) {
  return action_action_pb.SetMaximumSpeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetMaximumSpeedResponse(arg) {
  if (!(arg instanceof action_action_pb.SetMaximumSpeedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetMaximumSpeedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetMaximumSpeedResponse(buffer_arg) {
  return action_action_pb.SetMaximumSpeedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeRequest(arg) {
  if (!(arg instanceof action_action_pb.SetReturnToLaunchAltitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetReturnToLaunchAltitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeRequest(buffer_arg) {
  return action_action_pb.SetReturnToLaunchAltitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeResponse(arg) {
  if (!(arg instanceof action_action_pb.SetReturnToLaunchAltitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetReturnToLaunchAltitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeResponse(buffer_arg) {
  return action_action_pb.SetReturnToLaunchAltitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetTakeoffAltitudeRequest(arg) {
  if (!(arg instanceof action_action_pb.SetTakeoffAltitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetTakeoffAltitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetTakeoffAltitudeRequest(buffer_arg) {
  return action_action_pb.SetTakeoffAltitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_SetTakeoffAltitudeResponse(arg) {
  if (!(arg instanceof action_action_pb.SetTakeoffAltitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.SetTakeoffAltitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_SetTakeoffAltitudeResponse(buffer_arg) {
  return action_action_pb.SetTakeoffAltitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ShutdownRequest(arg) {
  if (!(arg instanceof action_action_pb.ShutdownRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ShutdownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ShutdownRequest(buffer_arg) {
  return action_action_pb.ShutdownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_ShutdownResponse(arg) {
  if (!(arg instanceof action_action_pb.ShutdownResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.ShutdownResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_ShutdownResponse(buffer_arg) {
  return action_action_pb.ShutdownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TakeoffRequest(arg) {
  if (!(arg instanceof action_action_pb.TakeoffRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TakeoffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TakeoffRequest(buffer_arg) {
  return action_action_pb.TakeoffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TakeoffResponse(arg) {
  if (!(arg instanceof action_action_pb.TakeoffResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TakeoffResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TakeoffResponse(buffer_arg) {
  return action_action_pb.TakeoffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TerminateRequest(arg) {
  if (!(arg instanceof action_action_pb.TerminateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TerminateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TerminateRequest(buffer_arg) {
  return action_action_pb.TerminateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TerminateResponse(arg) {
  if (!(arg instanceof action_action_pb.TerminateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TerminateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TerminateResponse(buffer_arg) {
  return action_action_pb.TerminateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TransitionToFixedwingRequest(arg) {
  if (!(arg instanceof action_action_pb.TransitionToFixedwingRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TransitionToFixedwingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TransitionToFixedwingRequest(buffer_arg) {
  return action_action_pb.TransitionToFixedwingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TransitionToFixedwingResponse(arg) {
  if (!(arg instanceof action_action_pb.TransitionToFixedwingResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TransitionToFixedwingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TransitionToFixedwingResponse(buffer_arg) {
  return action_action_pb.TransitionToFixedwingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TransitionToMulticopterRequest(arg) {
  if (!(arg instanceof action_action_pb.TransitionToMulticopterRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TransitionToMulticopterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TransitionToMulticopterRequest(buffer_arg) {
  return action_action_pb.TransitionToMulticopterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_TransitionToMulticopterResponse(arg) {
  if (!(arg instanceof action_action_pb.TransitionToMulticopterResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action.TransitionToMulticopterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_TransitionToMulticopterResponse(buffer_arg) {
  return action_action_pb.TransitionToMulticopterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable simple actions such as arming, taking off, and landing.
var ActionServiceService = exports.ActionServiceService = {
  //
// Send command to arm the drone.
//
// Arming a drone normally causes motors to spin at idle.
// Before arming take all safety precautions and stand clear of the drone!
arm: {
    path: '/mavsdk.rpc.action.ActionService/Arm',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.ArmRequest,
    responseType: action_action_pb.ArmResponse,
    requestSerialize: serialize_mavsdk_rpc_action_ArmRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_ArmRequest,
    responseSerialize: serialize_mavsdk_rpc_action_ArmResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_ArmResponse,
  },
  //
// Send command to force-arm the drone without any checks.
//
// Attention: this is not to be used for normal flying but only bench tests!
//
// Arming a drone normally causes motors to spin at idle.
// Before arming take all safety precautions and stand clear of the drone!
armForce: {
    path: '/mavsdk.rpc.action.ActionService/ArmForce',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.ArmForceRequest,
    responseType: action_action_pb.ArmForceResponse,
    requestSerialize: serialize_mavsdk_rpc_action_ArmForceRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_ArmForceRequest,
    responseSerialize: serialize_mavsdk_rpc_action_ArmForceResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_ArmForceResponse,
  },
  //
// Send command to disarm the drone.
//
// This will disarm a drone that considers itself landed. If flying, the drone should
// reject the disarm command. Disarming means that all motors will stop.
disarm: {
    path: '/mavsdk.rpc.action.ActionService/Disarm',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.DisarmRequest,
    responseType: action_action_pb.DisarmResponse,
    requestSerialize: serialize_mavsdk_rpc_action_DisarmRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_DisarmRequest,
    responseSerialize: serialize_mavsdk_rpc_action_DisarmResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_DisarmResponse,
  },
  //
// Send command to take off and hover.
//
// This switches the drone into position control mode and commands
// it to take off and hover at the takeoff altitude.
//
// Note that the vehicle must be armed before it can take off.
takeoff: {
    path: '/mavsdk.rpc.action.ActionService/Takeoff',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.TakeoffRequest,
    responseType: action_action_pb.TakeoffResponse,
    requestSerialize: serialize_mavsdk_rpc_action_TakeoffRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_TakeoffRequest,
    responseSerialize: serialize_mavsdk_rpc_action_TakeoffResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_TakeoffResponse,
  },
  //
// Send command to land at the current position.
//
// This switches the drone to 'Land' flight mode.
land: {
    path: '/mavsdk.rpc.action.ActionService/Land',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.LandRequest,
    responseType: action_action_pb.LandResponse,
    requestSerialize: serialize_mavsdk_rpc_action_LandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_LandRequest,
    responseSerialize: serialize_mavsdk_rpc_action_LandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_LandResponse,
  },
  //
// Send command to reboot the drone components.
//
// This will reboot the autopilot, companion computer, camera and gimbal.
reboot: {
    path: '/mavsdk.rpc.action.ActionService/Reboot',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.RebootRequest,
    responseType: action_action_pb.RebootResponse,
    requestSerialize: serialize_mavsdk_rpc_action_RebootRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_RebootRequest,
    responseSerialize: serialize_mavsdk_rpc_action_RebootResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_RebootResponse,
  },
  //
// Send command to shut down the drone components.
//
// This will shut down the autopilot, onboard computer, camera and gimbal.
// This command should only be used when the autopilot is disarmed and autopilots commonly
// reject it if they are not already ready to shut down.
shutdown: {
    path: '/mavsdk.rpc.action.ActionService/Shutdown',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.ShutdownRequest,
    responseType: action_action_pb.ShutdownResponse,
    requestSerialize: serialize_mavsdk_rpc_action_ShutdownRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_ShutdownRequest,
    responseSerialize: serialize_mavsdk_rpc_action_ShutdownResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_ShutdownResponse,
  },
  //
// Send command to terminate the drone.
//
// This will run the terminate routine as configured on the drone (e.g. disarm and open the parachute).
terminate: {
    path: '/mavsdk.rpc.action.ActionService/Terminate',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.TerminateRequest,
    responseType: action_action_pb.TerminateResponse,
    requestSerialize: serialize_mavsdk_rpc_action_TerminateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_TerminateRequest,
    responseSerialize: serialize_mavsdk_rpc_action_TerminateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_TerminateResponse,
  },
  //
// Send command to kill the drone.
//
// This will disarm a drone irrespective of whether it is landed or flying.
// Note that the drone will fall out of the sky if this command is used while flying.
kill: {
    path: '/mavsdk.rpc.action.ActionService/Kill',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.KillRequest,
    responseType: action_action_pb.KillResponse,
    requestSerialize: serialize_mavsdk_rpc_action_KillRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_KillRequest,
    responseSerialize: serialize_mavsdk_rpc_action_KillResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_KillResponse,
  },
  //
// Send command to return to the launch (takeoff) position and land.
//
// This switches the drone into [Return mode](https://docs.px4.io/master/en/flight_modes/return.html) which
// generally means it will rise up to a certain altitude to clear any obstacles before heading
// back to the launch (takeoff) position and land there.
returnToLaunch: {
    path: '/mavsdk.rpc.action.ActionService/ReturnToLaunch',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.ReturnToLaunchRequest,
    responseType: action_action_pb.ReturnToLaunchResponse,
    requestSerialize: serialize_mavsdk_rpc_action_ReturnToLaunchRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_ReturnToLaunchRequest,
    responseSerialize: serialize_mavsdk_rpc_action_ReturnToLaunchResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_ReturnToLaunchResponse,
  },
  //
// Send command to move the vehicle to a specific global position.
//
// The latitude and longitude are given in degrees (WGS84 frame) and the altitude
// in meters AMSL (above mean sea level).
//
// The yaw angle is in degrees (frame is NED, 0 is North, positive is clockwise).
gotoLocation: {
    path: '/mavsdk.rpc.action.ActionService/GotoLocation',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.GotoLocationRequest,
    responseType: action_action_pb.GotoLocationResponse,
    requestSerialize: serialize_mavsdk_rpc_action_GotoLocationRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_GotoLocationRequest,
    responseSerialize: serialize_mavsdk_rpc_action_GotoLocationResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_GotoLocationResponse,
  },
  //
// Send command do orbit to the drone.
//
// This will run the orbit routine with the given parameters.
doOrbit: {
    path: '/mavsdk.rpc.action.ActionService/DoOrbit',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.DoOrbitRequest,
    responseType: action_action_pb.DoOrbitResponse,
    requestSerialize: serialize_mavsdk_rpc_action_DoOrbitRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_DoOrbitRequest,
    responseSerialize: serialize_mavsdk_rpc_action_DoOrbitResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_DoOrbitResponse,
  },
  //
// Send command to hold position (a.k.a. "Loiter").
//
// Sends a command to drone to change to Hold flight mode, causing the
// vehicle to stop and maintain its current GPS position and altitude.
//
// Note: this command is specific to the PX4 Autopilot flight stack as
// it implies a change to a PX4-specific mode.
hold: {
    path: '/mavsdk.rpc.action.ActionService/Hold',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.HoldRequest,
    responseType: action_action_pb.HoldResponse,
    requestSerialize: serialize_mavsdk_rpc_action_HoldRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_HoldRequest,
    responseSerialize: serialize_mavsdk_rpc_action_HoldResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_HoldResponse,
  },
  //
// Send command to set the value of an actuator.
//
// Note that the index of the actuator starts at 1 and that the value goes from -1 to 1.
setActuator: {
    path: '/mavsdk.rpc.action.ActionService/SetActuator',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.SetActuatorRequest,
    responseType: action_action_pb.SetActuatorResponse,
    requestSerialize: serialize_mavsdk_rpc_action_SetActuatorRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_SetActuatorRequest,
    responseSerialize: serialize_mavsdk_rpc_action_SetActuatorResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_SetActuatorResponse,
  },
  //
// Send command to transition the drone to fixedwing.
//
// The associated action will only be executed for VTOL vehicles (on other vehicle types the
// command will fail). The command will succeed if called when the vehicle
// is already in fixedwing mode.
transitionToFixedwing: {
    path: '/mavsdk.rpc.action.ActionService/TransitionToFixedwing',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.TransitionToFixedwingRequest,
    responseType: action_action_pb.TransitionToFixedwingResponse,
    requestSerialize: serialize_mavsdk_rpc_action_TransitionToFixedwingRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_TransitionToFixedwingRequest,
    responseSerialize: serialize_mavsdk_rpc_action_TransitionToFixedwingResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_TransitionToFixedwingResponse,
  },
  //
// Send command to transition the drone to multicopter.
//
// The associated action will only be executed for VTOL vehicles (on other vehicle types the
// command will fail). The command will succeed if called when the vehicle
// is already in multicopter mode.
transitionToMulticopter: {
    path: '/mavsdk.rpc.action.ActionService/TransitionToMulticopter',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.TransitionToMulticopterRequest,
    responseType: action_action_pb.TransitionToMulticopterResponse,
    requestSerialize: serialize_mavsdk_rpc_action_TransitionToMulticopterRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_TransitionToMulticopterRequest,
    responseSerialize: serialize_mavsdk_rpc_action_TransitionToMulticopterResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_TransitionToMulticopterResponse,
  },
  //
// Get the takeoff altitude (in meters above ground).
getTakeoffAltitude: {
    path: '/mavsdk.rpc.action.ActionService/GetTakeoffAltitude',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.GetTakeoffAltitudeRequest,
    responseType: action_action_pb.GetTakeoffAltitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_action_GetTakeoffAltitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_GetTakeoffAltitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_action_GetTakeoffAltitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_GetTakeoffAltitudeResponse,
  },
  //
// Set takeoff altitude (in meters above ground).
setTakeoffAltitude: {
    path: '/mavsdk.rpc.action.ActionService/SetTakeoffAltitude',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.SetTakeoffAltitudeRequest,
    responseType: action_action_pb.SetTakeoffAltitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_action_SetTakeoffAltitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_SetTakeoffAltitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_action_SetTakeoffAltitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_SetTakeoffAltitudeResponse,
  },
  //
// Get the vehicle maximum speed (in metres/second).
getMaximumSpeed: {
    path: '/mavsdk.rpc.action.ActionService/GetMaximumSpeed',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.GetMaximumSpeedRequest,
    responseType: action_action_pb.GetMaximumSpeedResponse,
    requestSerialize: serialize_mavsdk_rpc_action_GetMaximumSpeedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_GetMaximumSpeedRequest,
    responseSerialize: serialize_mavsdk_rpc_action_GetMaximumSpeedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_GetMaximumSpeedResponse,
  },
  //
// Set vehicle maximum speed (in metres/second).
setMaximumSpeed: {
    path: '/mavsdk.rpc.action.ActionService/SetMaximumSpeed',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.SetMaximumSpeedRequest,
    responseType: action_action_pb.SetMaximumSpeedResponse,
    requestSerialize: serialize_mavsdk_rpc_action_SetMaximumSpeedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_SetMaximumSpeedRequest,
    responseSerialize: serialize_mavsdk_rpc_action_SetMaximumSpeedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_SetMaximumSpeedResponse,
  },
  //
// Get the return to launch minimum return altitude (in meters).
getReturnToLaunchAltitude: {
    path: '/mavsdk.rpc.action.ActionService/GetReturnToLaunchAltitude',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.GetReturnToLaunchAltitudeRequest,
    responseType: action_action_pb.GetReturnToLaunchAltitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_GetReturnToLaunchAltitudeResponse,
  },
  //
// Set the return to launch minimum return altitude (in meters).
setReturnToLaunchAltitude: {
    path: '/mavsdk.rpc.action.ActionService/SetReturnToLaunchAltitude',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.SetReturnToLaunchAltitudeRequest,
    responseType: action_action_pb.SetReturnToLaunchAltitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_SetReturnToLaunchAltitudeResponse,
  },
  //
// Set current speed.
//
// This will set the speed during a mission, reposition, and similar.
// It is ephemeral, so not stored on the drone and does not survive a reboot.
setCurrentSpeed: {
    path: '/mavsdk.rpc.action.ActionService/SetCurrentSpeed',
    requestStream: false,
    responseStream: false,
    requestType: action_action_pb.SetCurrentSpeedRequest,
    responseType: action_action_pb.SetCurrentSpeedResponse,
    requestSerialize: serialize_mavsdk_rpc_action_SetCurrentSpeedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_SetCurrentSpeedRequest,
    responseSerialize: serialize_mavsdk_rpc_action_SetCurrentSpeedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_SetCurrentSpeedResponse,
  },
};

exports.ActionServiceClient = grpc.makeGenericClientConstructor(ActionServiceService);


// fix autocompletion
module.exports = exports;
