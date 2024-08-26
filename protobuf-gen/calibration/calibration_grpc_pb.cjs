/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calibration_calibration_pb = require('../calibration/calibration_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_calibration_CalibrateAccelerometerResponse(arg) {
  if (!(arg instanceof calibration_calibration_pb.CalibrateAccelerometerResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CalibrateAccelerometerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CalibrateAccelerometerResponse(buffer_arg) {
  return calibration_calibration_pb.CalibrateAccelerometerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_CalibrateGimbalAccelerometerResponse(arg) {
  if (!(arg instanceof calibration_calibration_pb.CalibrateGimbalAccelerometerResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CalibrateGimbalAccelerometerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CalibrateGimbalAccelerometerResponse(buffer_arg) {
  return calibration_calibration_pb.CalibrateGimbalAccelerometerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_CalibrateGyroResponse(arg) {
  if (!(arg instanceof calibration_calibration_pb.CalibrateGyroResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CalibrateGyroResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CalibrateGyroResponse(buffer_arg) {
  return calibration_calibration_pb.CalibrateGyroResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_CalibrateLevelHorizonResponse(arg) {
  if (!(arg instanceof calibration_calibration_pb.CalibrateLevelHorizonResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CalibrateLevelHorizonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CalibrateLevelHorizonResponse(buffer_arg) {
  return calibration_calibration_pb.CalibrateLevelHorizonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_CalibrateMagnetometerResponse(arg) {
  if (!(arg instanceof calibration_calibration_pb.CalibrateMagnetometerResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CalibrateMagnetometerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CalibrateMagnetometerResponse(buffer_arg) {
  return calibration_calibration_pb.CalibrateMagnetometerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_CancelRequest(arg) {
  if (!(arg instanceof calibration_calibration_pb.CancelRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CancelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CancelRequest(buffer_arg) {
  return calibration_calibration_pb.CancelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_CancelResponse(arg) {
  if (!(arg instanceof calibration_calibration_pb.CancelResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.CancelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_CancelResponse(buffer_arg) {
  return calibration_calibration_pb.CancelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_SubscribeCalibrateAccelerometerRequest(arg) {
  if (!(arg instanceof calibration_calibration_pb.SubscribeCalibrateAccelerometerRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.SubscribeCalibrateAccelerometerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_SubscribeCalibrateAccelerometerRequest(buffer_arg) {
  return calibration_calibration_pb.SubscribeCalibrateAccelerometerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_SubscribeCalibrateGimbalAccelerometerRequest(arg) {
  if (!(arg instanceof calibration_calibration_pb.SubscribeCalibrateGimbalAccelerometerRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.SubscribeCalibrateGimbalAccelerometerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_SubscribeCalibrateGimbalAccelerometerRequest(buffer_arg) {
  return calibration_calibration_pb.SubscribeCalibrateGimbalAccelerometerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_SubscribeCalibrateGyroRequest(arg) {
  if (!(arg instanceof calibration_calibration_pb.SubscribeCalibrateGyroRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.SubscribeCalibrateGyroRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_SubscribeCalibrateGyroRequest(buffer_arg) {
  return calibration_calibration_pb.SubscribeCalibrateGyroRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_SubscribeCalibrateLevelHorizonRequest(arg) {
  if (!(arg instanceof calibration_calibration_pb.SubscribeCalibrateLevelHorizonRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.SubscribeCalibrateLevelHorizonRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_SubscribeCalibrateLevelHorizonRequest(buffer_arg) {
  return calibration_calibration_pb.SubscribeCalibrateLevelHorizonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_calibration_SubscribeCalibrateMagnetometerRequest(arg) {
  if (!(arg instanceof calibration_calibration_pb.SubscribeCalibrateMagnetometerRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.calibration.SubscribeCalibrateMagnetometerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_calibration_SubscribeCalibrateMagnetometerRequest(buffer_arg) {
  return calibration_calibration_pb.SubscribeCalibrateMagnetometerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable to calibrate sensors of a drone such as gyro, accelerometer, and magnetometer.
var CalibrationServiceService = exports.CalibrationServiceService = {
  // Perform gyro calibration.
subscribeCalibrateGyro: {
    path: '/mavsdk.rpc.calibration.CalibrationService/SubscribeCalibrateGyro',
    requestStream: false,
    responseStream: true,
    requestType: calibration_calibration_pb.SubscribeCalibrateGyroRequest,
    responseType: calibration_calibration_pb.CalibrateGyroResponse,
    requestSerialize: serialize_mavsdk_rpc_calibration_SubscribeCalibrateGyroRequest,
    requestDeserialize: deserialize_mavsdk_rpc_calibration_SubscribeCalibrateGyroRequest,
    responseSerialize: serialize_mavsdk_rpc_calibration_CalibrateGyroResponse,
    responseDeserialize: deserialize_mavsdk_rpc_calibration_CalibrateGyroResponse,
  },
  // Perform accelerometer calibration.
subscribeCalibrateAccelerometer: {
    path: '/mavsdk.rpc.calibration.CalibrationService/SubscribeCalibrateAccelerometer',
    requestStream: false,
    responseStream: true,
    requestType: calibration_calibration_pb.SubscribeCalibrateAccelerometerRequest,
    responseType: calibration_calibration_pb.CalibrateAccelerometerResponse,
    requestSerialize: serialize_mavsdk_rpc_calibration_SubscribeCalibrateAccelerometerRequest,
    requestDeserialize: deserialize_mavsdk_rpc_calibration_SubscribeCalibrateAccelerometerRequest,
    responseSerialize: serialize_mavsdk_rpc_calibration_CalibrateAccelerometerResponse,
    responseDeserialize: deserialize_mavsdk_rpc_calibration_CalibrateAccelerometerResponse,
  },
  // Perform magnetometer calibration.
subscribeCalibrateMagnetometer: {
    path: '/mavsdk.rpc.calibration.CalibrationService/SubscribeCalibrateMagnetometer',
    requestStream: false,
    responseStream: true,
    requestType: calibration_calibration_pb.SubscribeCalibrateMagnetometerRequest,
    responseType: calibration_calibration_pb.CalibrateMagnetometerResponse,
    requestSerialize: serialize_mavsdk_rpc_calibration_SubscribeCalibrateMagnetometerRequest,
    requestDeserialize: deserialize_mavsdk_rpc_calibration_SubscribeCalibrateMagnetometerRequest,
    responseSerialize: serialize_mavsdk_rpc_calibration_CalibrateMagnetometerResponse,
    responseDeserialize: deserialize_mavsdk_rpc_calibration_CalibrateMagnetometerResponse,
  },
  // Perform board level horizon calibration.
subscribeCalibrateLevelHorizon: {
    path: '/mavsdk.rpc.calibration.CalibrationService/SubscribeCalibrateLevelHorizon',
    requestStream: false,
    responseStream: true,
    requestType: calibration_calibration_pb.SubscribeCalibrateLevelHorizonRequest,
    responseType: calibration_calibration_pb.CalibrateLevelHorizonResponse,
    requestSerialize: serialize_mavsdk_rpc_calibration_SubscribeCalibrateLevelHorizonRequest,
    requestDeserialize: deserialize_mavsdk_rpc_calibration_SubscribeCalibrateLevelHorizonRequest,
    responseSerialize: serialize_mavsdk_rpc_calibration_CalibrateLevelHorizonResponse,
    responseDeserialize: deserialize_mavsdk_rpc_calibration_CalibrateLevelHorizonResponse,
  },
  // Perform gimbal accelerometer calibration.
subscribeCalibrateGimbalAccelerometer: {
    path: '/mavsdk.rpc.calibration.CalibrationService/SubscribeCalibrateGimbalAccelerometer',
    requestStream: false,
    responseStream: true,
    requestType: calibration_calibration_pb.SubscribeCalibrateGimbalAccelerometerRequest,
    responseType: calibration_calibration_pb.CalibrateGimbalAccelerometerResponse,
    requestSerialize: serialize_mavsdk_rpc_calibration_SubscribeCalibrateGimbalAccelerometerRequest,
    requestDeserialize: deserialize_mavsdk_rpc_calibration_SubscribeCalibrateGimbalAccelerometerRequest,
    responseSerialize: serialize_mavsdk_rpc_calibration_CalibrateGimbalAccelerometerResponse,
    responseDeserialize: deserialize_mavsdk_rpc_calibration_CalibrateGimbalAccelerometerResponse,
  },
  // Cancel ongoing calibration process.
cancel: {
    path: '/mavsdk.rpc.calibration.CalibrationService/Cancel',
    requestStream: false,
    responseStream: false,
    requestType: calibration_calibration_pb.CancelRequest,
    responseType: calibration_calibration_pb.CancelResponse,
    requestSerialize: serialize_mavsdk_rpc_calibration_CancelRequest,
    requestDeserialize: deserialize_mavsdk_rpc_calibration_CancelRequest,
    responseSerialize: serialize_mavsdk_rpc_calibration_CancelResponse,
    responseDeserialize: deserialize_mavsdk_rpc_calibration_CancelResponse,
  },
};

exports.CalibrationServiceClient = grpc.makeGenericClientConstructor(CalibrationServiceService);


// fix autocompletion
module.exports = exports;
