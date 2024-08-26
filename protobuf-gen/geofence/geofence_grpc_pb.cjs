/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var geofence_geofence_pb = require('../geofence/geofence_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_geofence_ClearGeofenceRequest(arg) {
  if (!(arg instanceof geofence_geofence_pb.ClearGeofenceRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.geofence.ClearGeofenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_geofence_ClearGeofenceRequest(buffer_arg) {
  return geofence_geofence_pb.ClearGeofenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_geofence_ClearGeofenceResponse(arg) {
  if (!(arg instanceof geofence_geofence_pb.ClearGeofenceResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.geofence.ClearGeofenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_geofence_ClearGeofenceResponse(buffer_arg) {
  return geofence_geofence_pb.ClearGeofenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_geofence_UploadGeofenceRequest(arg) {
  if (!(arg instanceof geofence_geofence_pb.UploadGeofenceRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.geofence.UploadGeofenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_geofence_UploadGeofenceRequest(buffer_arg) {
  return geofence_geofence_pb.UploadGeofenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_geofence_UploadGeofenceResponse(arg) {
  if (!(arg instanceof geofence_geofence_pb.UploadGeofenceResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.geofence.UploadGeofenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_geofence_UploadGeofenceResponse(buffer_arg) {
  return geofence_geofence_pb.UploadGeofenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Enable setting a geofence.
var GeofenceServiceService = exports.GeofenceServiceService = {
  //
// Upload geofences.
//
// Polygon and Circular geofences are uploaded to a drone. Once uploaded, the geofence will remain
// on the drone even if a connection is lost.
uploadGeofence: {
    path: '/mavsdk.rpc.geofence.GeofenceService/UploadGeofence',
    requestStream: false,
    responseStream: false,
    requestType: geofence_geofence_pb.UploadGeofenceRequest,
    responseType: geofence_geofence_pb.UploadGeofenceResponse,
    requestSerialize: serialize_mavsdk_rpc_geofence_UploadGeofenceRequest,
    requestDeserialize: deserialize_mavsdk_rpc_geofence_UploadGeofenceRequest,
    responseSerialize: serialize_mavsdk_rpc_geofence_UploadGeofenceResponse,
    responseDeserialize: deserialize_mavsdk_rpc_geofence_UploadGeofenceResponse,
  },
  //
// Clear all geofences saved on the vehicle.
clearGeofence: {
    path: '/mavsdk.rpc.geofence.GeofenceService/ClearGeofence',
    requestStream: false,
    responseStream: false,
    requestType: geofence_geofence_pb.ClearGeofenceRequest,
    responseType: geofence_geofence_pb.ClearGeofenceResponse,
    requestSerialize: serialize_mavsdk_rpc_geofence_ClearGeofenceRequest,
    requestDeserialize: deserialize_mavsdk_rpc_geofence_ClearGeofenceRequest,
    responseSerialize: serialize_mavsdk_rpc_geofence_ClearGeofenceResponse,
    responseDeserialize: deserialize_mavsdk_rpc_geofence_ClearGeofenceResponse,
  },
};

exports.GeofenceServiceClient = grpc.makeGenericClientConstructor(GeofenceServiceService);


// fix autocompletion
module.exports = exports;
