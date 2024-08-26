/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var winch_winch_pb = require('../winch/winch_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_winch_AbandonLineRequest(arg) {
  if (!(arg instanceof winch_winch_pb.AbandonLineRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.AbandonLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_AbandonLineRequest(buffer_arg) {
  return winch_winch_pb.AbandonLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_AbandonLineResponse(arg) {
  if (!(arg instanceof winch_winch_pb.AbandonLineResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.AbandonLineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_AbandonLineResponse(buffer_arg) {
  return winch_winch_pb.AbandonLineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_DeliverRequest(arg) {
  if (!(arg instanceof winch_winch_pb.DeliverRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.DeliverRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_DeliverRequest(buffer_arg) {
  return winch_winch_pb.DeliverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_DeliverResponse(arg) {
  if (!(arg instanceof winch_winch_pb.DeliverResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.DeliverResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_DeliverResponse(buffer_arg) {
  return winch_winch_pb.DeliverResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_HoldRequest(arg) {
  if (!(arg instanceof winch_winch_pb.HoldRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.HoldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_HoldRequest(buffer_arg) {
  return winch_winch_pb.HoldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_HoldResponse(arg) {
  if (!(arg instanceof winch_winch_pb.HoldResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.HoldResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_HoldResponse(buffer_arg) {
  return winch_winch_pb.HoldResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_LoadLineRequest(arg) {
  if (!(arg instanceof winch_winch_pb.LoadLineRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.LoadLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_LoadLineRequest(buffer_arg) {
  return winch_winch_pb.LoadLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_LoadLineResponse(arg) {
  if (!(arg instanceof winch_winch_pb.LoadLineResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.LoadLineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_LoadLineResponse(buffer_arg) {
  return winch_winch_pb.LoadLineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_LoadPayloadRequest(arg) {
  if (!(arg instanceof winch_winch_pb.LoadPayloadRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.LoadPayloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_LoadPayloadRequest(buffer_arg) {
  return winch_winch_pb.LoadPayloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_LoadPayloadResponse(arg) {
  if (!(arg instanceof winch_winch_pb.LoadPayloadResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.LoadPayloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_LoadPayloadResponse(buffer_arg) {
  return winch_winch_pb.LoadPayloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_LockRequest(arg) {
  if (!(arg instanceof winch_winch_pb.LockRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.LockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_LockRequest(buffer_arg) {
  return winch_winch_pb.LockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_LockResponse(arg) {
  if (!(arg instanceof winch_winch_pb.LockResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.LockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_LockResponse(buffer_arg) {
  return winch_winch_pb.LockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RateControlRequest(arg) {
  if (!(arg instanceof winch_winch_pb.RateControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RateControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RateControlRequest(buffer_arg) {
  return winch_winch_pb.RateControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RateControlResponse(arg) {
  if (!(arg instanceof winch_winch_pb.RateControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RateControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RateControlResponse(buffer_arg) {
  return winch_winch_pb.RateControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RelativeLengthControlRequest(arg) {
  if (!(arg instanceof winch_winch_pb.RelativeLengthControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RelativeLengthControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RelativeLengthControlRequest(buffer_arg) {
  return winch_winch_pb.RelativeLengthControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RelativeLengthControlResponse(arg) {
  if (!(arg instanceof winch_winch_pb.RelativeLengthControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RelativeLengthControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RelativeLengthControlResponse(buffer_arg) {
  return winch_winch_pb.RelativeLengthControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RelaxRequest(arg) {
  if (!(arg instanceof winch_winch_pb.RelaxRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RelaxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RelaxRequest(buffer_arg) {
  return winch_winch_pb.RelaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RelaxResponse(arg) {
  if (!(arg instanceof winch_winch_pb.RelaxResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RelaxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RelaxResponse(buffer_arg) {
  return winch_winch_pb.RelaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RetractRequest(arg) {
  if (!(arg instanceof winch_winch_pb.RetractRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RetractRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RetractRequest(buffer_arg) {
  return winch_winch_pb.RetractRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_RetractResponse(arg) {
  if (!(arg instanceof winch_winch_pb.RetractResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.RetractResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_RetractResponse(buffer_arg) {
  return winch_winch_pb.RetractResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_StatusResponse(arg) {
  if (!(arg instanceof winch_winch_pb.StatusResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.StatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_StatusResponse(buffer_arg) {
  return winch_winch_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_winch_SubscribeStatusRequest(arg) {
  if (!(arg instanceof winch_winch_pb.SubscribeStatusRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.winch.SubscribeStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_winch_SubscribeStatusRequest(buffer_arg) {
  return winch_winch_pb.SubscribeStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Allows users to send winch actions, as well as receive status information from winch systems.
//
var WinchServiceService = exports.WinchServiceService = {
  // Subscribe to 'winch status' updates.
subscribeStatus: {
    path: '/mavsdk.rpc.winch.WinchService/SubscribeStatus',
    requestStream: false,
    responseStream: true,
    requestType: winch_winch_pb.SubscribeStatusRequest,
    responseType: winch_winch_pb.StatusResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_SubscribeStatusRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_SubscribeStatusRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_StatusResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_StatusResponse,
  },
  //
// Allow motor to freewheel.
relax: {
    path: '/mavsdk.rpc.winch.WinchService/Relax',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.RelaxRequest,
    responseType: winch_winch_pb.RelaxResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_RelaxRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_RelaxRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_RelaxResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_RelaxResponse,
  },
  //
// Wind or unwind specified length of line, optionally using specified rate.
relativeLengthControl: {
    path: '/mavsdk.rpc.winch.WinchService/RelativeLengthControl',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.RelativeLengthControlRequest,
    responseType: winch_winch_pb.RelativeLengthControlResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_RelativeLengthControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_RelativeLengthControlRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_RelativeLengthControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_RelativeLengthControlResponse,
  },
  //
// Wind or unwind line at specified rate.
rateControl: {
    path: '/mavsdk.rpc.winch.WinchService/RateControl',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.RateControlRequest,
    responseType: winch_winch_pb.RateControlResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_RateControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_RateControlRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_RateControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_RateControlResponse,
  },
  //
// Perform the locking sequence to relieve motor while in the fully retracted position.
lock: {
    path: '/mavsdk.rpc.winch.WinchService/Lock',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.LockRequest,
    responseType: winch_winch_pb.LockResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_LockRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_LockRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_LockResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_LockResponse,
  },
  //
// Sequence of drop, slow down, touch down, reel up, lock.
deliver: {
    path: '/mavsdk.rpc.winch.WinchService/Deliver',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.DeliverRequest,
    responseType: winch_winch_pb.DeliverResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_DeliverRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_DeliverRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_DeliverResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_DeliverResponse,
  },
  //
// Engage motor and hold current position.
hold: {
    path: '/mavsdk.rpc.winch.WinchService/Hold',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.HoldRequest,
    responseType: winch_winch_pb.HoldResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_HoldRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_HoldRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_HoldResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_HoldResponse,
  },
  //
// Return the reel to the fully retracted position.
retract: {
    path: '/mavsdk.rpc.winch.WinchService/Retract',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.RetractRequest,
    responseType: winch_winch_pb.RetractResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_RetractRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_RetractRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_RetractResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_RetractResponse,
  },
  //
// Load the reel with line.
//
// The winch will calculate the total loaded length and stop when the tension exceeds a threshold.
loadLine: {
    path: '/mavsdk.rpc.winch.WinchService/LoadLine',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.LoadLineRequest,
    responseType: winch_winch_pb.LoadLineResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_LoadLineRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_LoadLineRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_LoadLineResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_LoadLineResponse,
  },
  //
// Spool out the entire length of the line.
abandonLine: {
    path: '/mavsdk.rpc.winch.WinchService/AbandonLine',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.AbandonLineRequest,
    responseType: winch_winch_pb.AbandonLineResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_AbandonLineRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_AbandonLineRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_AbandonLineResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_AbandonLineResponse,
  },
  //
// Spools out just enough to present the hook to the user to load the payload.
loadPayload: {
    path: '/mavsdk.rpc.winch.WinchService/LoadPayload',
    requestStream: false,
    responseStream: false,
    requestType: winch_winch_pb.LoadPayloadRequest,
    responseType: winch_winch_pb.LoadPayloadResponse,
    requestSerialize: serialize_mavsdk_rpc_winch_LoadPayloadRequest,
    requestDeserialize: deserialize_mavsdk_rpc_winch_LoadPayloadRequest,
    responseSerialize: serialize_mavsdk_rpc_winch_LoadPayloadResponse,
    responseDeserialize: deserialize_mavsdk_rpc_winch_LoadPayloadResponse,
  },
};

exports.WinchServiceClient = grpc.makeGenericClientConstructor(WinchServiceService);


// fix autocompletion
module.exports = exports;
