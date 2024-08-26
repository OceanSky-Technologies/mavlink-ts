/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var offboard_offboard_pb = require('../offboard/offboard_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_offboard_IsActiveRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.IsActiveRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.IsActiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_IsActiveRequest(buffer_arg) {
  return offboard_offboard_pb.IsActiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_IsActiveResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.IsActiveResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.IsActiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_IsActiveResponse(buffer_arg) {
  return offboard_offboard_pb.IsActiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetAccelerationNedRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetAccelerationNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetAccelerationNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetAccelerationNedRequest(buffer_arg) {
  return offboard_offboard_pb.SetAccelerationNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetAccelerationNedResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetAccelerationNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetAccelerationNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetAccelerationNedResponse(buffer_arg) {
  return offboard_offboard_pb.SetAccelerationNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetActuatorControlRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetActuatorControlRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetActuatorControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetActuatorControlRequest(buffer_arg) {
  return offboard_offboard_pb.SetActuatorControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetActuatorControlResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetActuatorControlResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetActuatorControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetActuatorControlResponse(buffer_arg) {
  return offboard_offboard_pb.SetActuatorControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetAttitudeRateRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetAttitudeRateRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetAttitudeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetAttitudeRateRequest(buffer_arg) {
  return offboard_offboard_pb.SetAttitudeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetAttitudeRateResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetAttitudeRateResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetAttitudeRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetAttitudeRateResponse(buffer_arg) {
  return offboard_offboard_pb.SetAttitudeRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetAttitudeRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetAttitudeRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetAttitudeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetAttitudeRequest(buffer_arg) {
  return offboard_offboard_pb.SetAttitudeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetAttitudeResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetAttitudeResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetAttitudeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetAttitudeResponse(buffer_arg) {
  return offboard_offboard_pb.SetAttitudeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionGlobalRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionGlobalRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionGlobalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionGlobalRequest(buffer_arg) {
  return offboard_offboard_pb.SetPositionGlobalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionGlobalResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionGlobalResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionGlobalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionGlobalResponse(buffer_arg) {
  return offboard_offboard_pb.SetPositionGlobalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionNedRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionNedRequest(buffer_arg) {
  return offboard_offboard_pb.SetPositionNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionNedResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionNedResponse(buffer_arg) {
  return offboard_offboard_pb.SetPositionNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionVelocityAccelerationNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionVelocityAccelerationNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedRequest(buffer_arg) {
  return offboard_offboard_pb.SetPositionVelocityAccelerationNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionVelocityAccelerationNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionVelocityAccelerationNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedResponse(buffer_arg) {
  return offboard_offboard_pb.SetPositionVelocityAccelerationNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionVelocityNedRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionVelocityNedRequest(buffer_arg) {
  return offboard_offboard_pb.SetPositionVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetPositionVelocityNedResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetPositionVelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetPositionVelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetPositionVelocityNedResponse(buffer_arg) {
  return offboard_offboard_pb.SetPositionVelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetVelocityBodyRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetVelocityBodyRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetVelocityBodyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetVelocityBodyRequest(buffer_arg) {
  return offboard_offboard_pb.SetVelocityBodyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetVelocityBodyResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetVelocityBodyResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetVelocityBodyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetVelocityBodyResponse(buffer_arg) {
  return offboard_offboard_pb.SetVelocityBodyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetVelocityNedRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetVelocityNedRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetVelocityNedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetVelocityNedRequest(buffer_arg) {
  return offboard_offboard_pb.SetVelocityNedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_SetVelocityNedResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.SetVelocityNedResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.SetVelocityNedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_SetVelocityNedResponse(buffer_arg) {
  return offboard_offboard_pb.SetVelocityNedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_StartRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.StartRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.StartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_StartRequest(buffer_arg) {
  return offboard_offboard_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_StartResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.StartResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.StartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_StartResponse(buffer_arg) {
  return offboard_offboard_pb.StartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_StopRequest(arg) {
  if (!(arg instanceof offboard_offboard_pb.StopRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.StopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_StopRequest(buffer_arg) {
  return offboard_offboard_pb.StopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_offboard_StopResponse(arg) {
  if (!(arg instanceof offboard_offboard_pb.StopResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.offboard.StopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_offboard_StopResponse(buffer_arg) {
  return offboard_offboard_pb.StopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Control a drone with position, velocity, attitude or motor commands.
//
// The module is called offboard because the commands can be sent from external sources
// as opposed to onboard control right inside the autopilot "board".
//
// Client code must specify a setpoint before starting offboard mode.
// Mavsdk automatically sends setpoints at 20Hz (PX4 Offboard mode requires that setpoints
// are minimally sent at 2Hz).
var OffboardServiceService = exports.OffboardServiceService = {
  //
// Start offboard control.
start: {
    path: '/mavsdk.rpc.offboard.OffboardService/Start',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.StartRequest,
    responseType: offboard_offboard_pb.StartResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_StartRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_StartRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_StartResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_StartResponse,
  },
  //
// Stop offboard control.
//
// The vehicle will be put into Hold mode: https://docs.px4.io/en/flight_modes/hold.html
stop: {
    path: '/mavsdk.rpc.offboard.OffboardService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.StopRequest,
    responseType: offboard_offboard_pb.StopResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_StopRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_StopRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_StopResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_StopResponse,
  },
  //
// Check if offboard control is active.
//
// True means that the vehicle is in offboard mode and we are actively sending
// setpoints.
isActive: {
    path: '/mavsdk.rpc.offboard.OffboardService/IsActive',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.IsActiveRequest,
    responseType: offboard_offboard_pb.IsActiveResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_IsActiveRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_IsActiveRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_IsActiveResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_IsActiveResponse,
  },
  //
// Set the attitude in terms of roll, pitch and yaw in degrees with thrust.
setAttitude: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetAttitude',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetAttitudeRequest,
    responseType: offboard_offboard_pb.SetAttitudeResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetAttitudeRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetAttitudeRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetAttitudeResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetAttitudeResponse,
  },
  //
// Set direct actuator control values to groups #0 and #1.
//
// First 8 controls will go to control group 0, the following 8 controls to control group 1 (if
// actuator_control.num_controls more than 8).
setActuatorControl: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetActuatorControl',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetActuatorControlRequest,
    responseType: offboard_offboard_pb.SetActuatorControlResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetActuatorControlRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetActuatorControlRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetActuatorControlResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetActuatorControlResponse,
  },
  //
// Set the attitude rate in terms of pitch, roll and yaw angular rate along with thrust.
setAttitudeRate: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetAttitudeRate',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetAttitudeRateRequest,
    responseType: offboard_offboard_pb.SetAttitudeRateResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetAttitudeRateRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetAttitudeRateRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetAttitudeRateResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetAttitudeRateResponse,
  },
  //
// Set the position in NED coordinates and yaw.
setPositionNed: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetPositionNed',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetPositionNedRequest,
    responseType: offboard_offboard_pb.SetPositionNedResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetPositionNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionNedRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetPositionNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionNedResponse,
  },
  //
// Set the position in Global coordinates (latitude, longitude, altitude) and yaw
setPositionGlobal: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetPositionGlobal',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetPositionGlobalRequest,
    responseType: offboard_offboard_pb.SetPositionGlobalResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetPositionGlobalRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionGlobalRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetPositionGlobalResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionGlobalResponse,
  },
  //
// Set the velocity in body coordinates and yaw angular rate. Not available for fixed-wing aircraft.
setVelocityBody: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetVelocityBody',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetVelocityBodyRequest,
    responseType: offboard_offboard_pb.SetVelocityBodyResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetVelocityBodyRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetVelocityBodyRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetVelocityBodyResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetVelocityBodyResponse,
  },
  //
// Set the velocity in NED coordinates and yaw. Not available for fixed-wing aircraft.
setVelocityNed: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetVelocityNed',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetVelocityNedRequest,
    responseType: offboard_offboard_pb.SetVelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetVelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetVelocityNedResponse,
  },
  //
// Set the position in NED coordinates, with the velocity to be used as feed-forward.
setPositionVelocityNed: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetPositionVelocityNed',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetPositionVelocityNedRequest,
    responseType: offboard_offboard_pb.SetPositionVelocityNedResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetPositionVelocityNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionVelocityNedRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetPositionVelocityNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionVelocityNedResponse,
  },
  //
// Set the position, velocity and acceleration in NED coordinates, with velocity and acceleration used as feed-forward.
setPositionVelocityAccelerationNed: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetPositionVelocityAccelerationNed',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetPositionVelocityAccelerationNedRequest,
    responseType: offboard_offboard_pb.SetPositionVelocityAccelerationNedResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetPositionVelocityAccelerationNedResponse,
  },
  //
// Set the acceleration in NED coordinates.
setAccelerationNed: {
    path: '/mavsdk.rpc.offboard.OffboardService/SetAccelerationNed',
    requestStream: false,
    responseStream: false,
    requestType: offboard_offboard_pb.SetAccelerationNedRequest,
    responseType: offboard_offboard_pb.SetAccelerationNedResponse,
    requestSerialize: serialize_mavsdk_rpc_offboard_SetAccelerationNedRequest,
    requestDeserialize: deserialize_mavsdk_rpc_offboard_SetAccelerationNedRequest,
    responseSerialize: serialize_mavsdk_rpc_offboard_SetAccelerationNedResponse,
    responseDeserialize: deserialize_mavsdk_rpc_offboard_SetAccelerationNedResponse,
  },
};

exports.OffboardServiceClient = grpc.makeGenericClientConstructor(OffboardServiceService);


// fix autocompletion
module.exports = exports;
