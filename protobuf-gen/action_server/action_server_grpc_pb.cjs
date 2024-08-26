/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var action_server_action_server_pb = require('../action_server/action_server_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_action_server_ArmDisarmResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.ArmDisarmResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.ArmDisarmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_ArmDisarmResponse(buffer_arg) {
  return action_server_action_server_pb.ArmDisarmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_FlightModeChangeResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.FlightModeChangeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.FlightModeChangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_FlightModeChangeResponse(buffer_arg) {
  return action_server_action_server_pb.FlightModeChangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_GetAllowableFlightModesRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.GetAllowableFlightModesRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.GetAllowableFlightModesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_GetAllowableFlightModesRequest(buffer_arg) {
  return action_server_action_server_pb.GetAllowableFlightModesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_GetAllowableFlightModesResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.GetAllowableFlightModesResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.GetAllowableFlightModesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_GetAllowableFlightModesResponse(buffer_arg) {
  return action_server_action_server_pb.GetAllowableFlightModesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_LandResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.LandResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.LandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_LandResponse(buffer_arg) {
  return action_server_action_server_pb.LandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_RebootResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.RebootResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.RebootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_RebootResponse(buffer_arg) {
  return action_server_action_server_pb.RebootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetAllowTakeoffRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetAllowTakeoffRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetAllowTakeoffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetAllowTakeoffRequest(buffer_arg) {
  return action_server_action_server_pb.SetAllowTakeoffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetAllowTakeoffResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetAllowTakeoffResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetAllowTakeoffResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetAllowTakeoffResponse(buffer_arg) {
  return action_server_action_server_pb.SetAllowTakeoffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetAllowableFlightModesRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetAllowableFlightModesRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetAllowableFlightModesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetAllowableFlightModesRequest(buffer_arg) {
  return action_server_action_server_pb.SetAllowableFlightModesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetAllowableFlightModesResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetAllowableFlightModesResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetAllowableFlightModesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetAllowableFlightModesResponse(buffer_arg) {
  return action_server_action_server_pb.SetAllowableFlightModesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetArmableRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetArmableRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetArmableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetArmableRequest(buffer_arg) {
  return action_server_action_server_pb.SetArmableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetArmableResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetArmableResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetArmableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetArmableResponse(buffer_arg) {
  return action_server_action_server_pb.SetArmableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetDisarmableRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetDisarmableRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetDisarmableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetDisarmableRequest(buffer_arg) {
  return action_server_action_server_pb.SetDisarmableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SetDisarmableResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.SetDisarmableResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SetDisarmableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SetDisarmableResponse(buffer_arg) {
  return action_server_action_server_pb.SetDisarmableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_ShutdownResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.ShutdownResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.ShutdownResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_ShutdownResponse(buffer_arg) {
  return action_server_action_server_pb.ShutdownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeArmDisarmRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeArmDisarmRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeArmDisarmRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeArmDisarmRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeArmDisarmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeFlightModeChangeRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeFlightModeChangeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeFlightModeChangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeFlightModeChangeRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeFlightModeChangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeLandRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeLandRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeLandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeLandRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeLandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeRebootRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeRebootRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeRebootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeRebootRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeRebootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeShutdownRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeShutdownRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeShutdownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeShutdownRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeShutdownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeTakeoffRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeTakeoffRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeTakeoffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeTakeoffRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeTakeoffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_SubscribeTerminateRequest(arg) {
  if (!(arg instanceof action_server_action_server_pb.SubscribeTerminateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.SubscribeTerminateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_SubscribeTerminateRequest(buffer_arg) {
  return action_server_action_server_pb.SubscribeTerminateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_TakeoffResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.TakeoffResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.TakeoffResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_TakeoffResponse(buffer_arg) {
  return action_server_action_server_pb.TakeoffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_action_server_TerminateResponse(arg) {
  if (!(arg instanceof action_server_action_server_pb.TerminateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.action_server.TerminateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_action_server_TerminateResponse(buffer_arg) {
  return action_server_action_server_pb.TerminateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provide vehicle actions (as a server) such as arming, taking off, and landing.
var ActionServerServiceService = exports.ActionServerServiceService = {
  // Subscribe to ARM/DISARM commands
subscribeArmDisarm: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeArmDisarm',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeArmDisarmRequest,
    responseType: action_server_action_server_pb.ArmDisarmResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeArmDisarmRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeArmDisarmRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_ArmDisarmResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_ArmDisarmResponse,
  },
  // Subscribe to DO_SET_MODE
subscribeFlightModeChange: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeFlightModeChange',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeFlightModeChangeRequest,
    responseType: action_server_action_server_pb.FlightModeChangeResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeFlightModeChangeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeFlightModeChangeRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_FlightModeChangeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_FlightModeChangeResponse,
  },
  // Subscribe to takeoff command
subscribeTakeoff: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeTakeoff',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeTakeoffRequest,
    responseType: action_server_action_server_pb.TakeoffResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeTakeoffRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeTakeoffRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_TakeoffResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_TakeoffResponse,
  },
  // Subscribe to land command
subscribeLand: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeLand',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeLandRequest,
    responseType: action_server_action_server_pb.LandResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeLandRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeLandRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_LandResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_LandResponse,
  },
  // Subscribe to reboot command
subscribeReboot: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeReboot',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeRebootRequest,
    responseType: action_server_action_server_pb.RebootResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeRebootRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeRebootRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_RebootResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_RebootResponse,
  },
  // Subscribe to shutdown command
subscribeShutdown: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeShutdown',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeShutdownRequest,
    responseType: action_server_action_server_pb.ShutdownResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeShutdownRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeShutdownRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_ShutdownResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_ShutdownResponse,
  },
  // Subscribe to terminate command
subscribeTerminate: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SubscribeTerminate',
    requestStream: false,
    responseStream: true,
    requestType: action_server_action_server_pb.SubscribeTerminateRequest,
    responseType: action_server_action_server_pb.TerminateResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SubscribeTerminateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SubscribeTerminateRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_TerminateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_TerminateResponse,
  },
  // Can the vehicle takeoff
setAllowTakeoff: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SetAllowTakeoff',
    requestStream: false,
    responseStream: false,
    requestType: action_server_action_server_pb.SetAllowTakeoffRequest,
    responseType: action_server_action_server_pb.SetAllowTakeoffResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SetAllowTakeoffRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SetAllowTakeoffRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_SetAllowTakeoffResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_SetAllowTakeoffResponse,
  },
  // Can the vehicle arm when requested
setArmable: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SetArmable',
    requestStream: false,
    responseStream: false,
    requestType: action_server_action_server_pb.SetArmableRequest,
    responseType: action_server_action_server_pb.SetArmableResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SetArmableRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SetArmableRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_SetArmableResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_SetArmableResponse,
  },
  // Can the vehicle disarm when requested
setDisarmable: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SetDisarmable',
    requestStream: false,
    responseStream: false,
    requestType: action_server_action_server_pb.SetDisarmableRequest,
    responseType: action_server_action_server_pb.SetDisarmableResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SetDisarmableRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SetDisarmableRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_SetDisarmableResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_SetDisarmableResponse,
  },
  // Set which modes the vehicle can transition to (Manual always allowed)
setAllowableFlightModes: {
    path: '/mavsdk.rpc.action_server.ActionServerService/SetAllowableFlightModes',
    requestStream: false,
    responseStream: false,
    requestType: action_server_action_server_pb.SetAllowableFlightModesRequest,
    responseType: action_server_action_server_pb.SetAllowableFlightModesResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_SetAllowableFlightModesRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_SetAllowableFlightModesRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_SetAllowableFlightModesResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_SetAllowableFlightModesResponse,
  },
  // Get which modes the vehicle can transition to (Manual always allowed)
getAllowableFlightModes: {
    path: '/mavsdk.rpc.action_server.ActionServerService/GetAllowableFlightModes',
    requestStream: false,
    responseStream: false,
    requestType: action_server_action_server_pb.GetAllowableFlightModesRequest,
    responseType: action_server_action_server_pb.GetAllowableFlightModesResponse,
    requestSerialize: serialize_mavsdk_rpc_action_server_GetAllowableFlightModesRequest,
    requestDeserialize: deserialize_mavsdk_rpc_action_server_GetAllowableFlightModesRequest,
    responseSerialize: serialize_mavsdk_rpc_action_server_GetAllowableFlightModesResponse,
    responseDeserialize: deserialize_mavsdk_rpc_action_server_GetAllowableFlightModesResponse,
  },
};

exports.ActionServerServiceClient = grpc.makeGenericClientConstructor(ActionServerServiceService);


// fix autocompletion
module.exports = exports;
