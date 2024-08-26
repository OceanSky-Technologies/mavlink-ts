/* eslint-disable */

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var events_events_pb = require('../events/events_pb.cjs');
var mavsdk_options_pb = require('../mavsdk_options_pb.cjs');

function serialize_mavsdk_rpc_events_EventsResponse(arg) {
  if (!(arg instanceof events_events_pb.EventsResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.events.EventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_events_EventsResponse(buffer_arg) {
  return events_events_pb.EventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportRequest(arg) {
  if (!(arg instanceof events_events_pb.GetHealthAndArmingChecksReportRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.events.GetHealthAndArmingChecksReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportRequest(buffer_arg) {
  return events_events_pb.GetHealthAndArmingChecksReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportResponse(arg) {
  if (!(arg instanceof events_events_pb.GetHealthAndArmingChecksReportResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.events.GetHealthAndArmingChecksReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportResponse(buffer_arg) {
  return events_events_pb.GetHealthAndArmingChecksReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_events_HealthAndArmingChecksResponse(arg) {
  if (!(arg instanceof events_events_pb.HealthAndArmingChecksResponse)) {
    throw new Error('Expected argument of type mavsdk.rpc.events.HealthAndArmingChecksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_events_HealthAndArmingChecksResponse(buffer_arg) {
  return events_events_pb.HealthAndArmingChecksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_events_SubscribeEventsRequest(arg) {
  if (!(arg instanceof events_events_pb.SubscribeEventsRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.events.SubscribeEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_events_SubscribeEventsRequest(buffer_arg) {
  return events_events_pb.SubscribeEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mavsdk_rpc_events_SubscribeHealthAndArmingChecksRequest(arg) {
  if (!(arg instanceof events_events_pb.SubscribeHealthAndArmingChecksRequest)) {
    throw new Error('Expected argument of type mavsdk.rpc.events.SubscribeHealthAndArmingChecksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mavsdk_rpc_events_SubscribeHealthAndArmingChecksRequest(buffer_arg) {
  return events_events_pb.SubscribeHealthAndArmingChecksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Get event notifications, such as takeoff, or arming checks
var EventsServiceService = exports.EventsServiceService = {
  //
// Subscribe to event updates.
subscribeEvents: {
    path: '/mavsdk.rpc.events.EventsService/SubscribeEvents',
    requestStream: false,
    responseStream: true,
    requestType: events_events_pb.SubscribeEventsRequest,
    responseType: events_events_pb.EventsResponse,
    requestSerialize: serialize_mavsdk_rpc_events_SubscribeEventsRequest,
    requestDeserialize: deserialize_mavsdk_rpc_events_SubscribeEventsRequest,
    responseSerialize: serialize_mavsdk_rpc_events_EventsResponse,
    responseDeserialize: deserialize_mavsdk_rpc_events_EventsResponse,
  },
  //
// Subscribe to arming check updates.
subscribeHealthAndArmingChecks: {
    path: '/mavsdk.rpc.events.EventsService/SubscribeHealthAndArmingChecks',
    requestStream: false,
    responseStream: true,
    requestType: events_events_pb.SubscribeHealthAndArmingChecksRequest,
    responseType: events_events_pb.HealthAndArmingChecksResponse,
    requestSerialize: serialize_mavsdk_rpc_events_SubscribeHealthAndArmingChecksRequest,
    requestDeserialize: deserialize_mavsdk_rpc_events_SubscribeHealthAndArmingChecksRequest,
    responseSerialize: serialize_mavsdk_rpc_events_HealthAndArmingChecksResponse,
    responseDeserialize: deserialize_mavsdk_rpc_events_HealthAndArmingChecksResponse,
  },
  //
// Get the latest report.
getHealthAndArmingChecksReport: {
    path: '/mavsdk.rpc.events.EventsService/GetHealthAndArmingChecksReport',
    requestStream: false,
    responseStream: false,
    requestType: events_events_pb.GetHealthAndArmingChecksReportRequest,
    responseType: events_events_pb.GetHealthAndArmingChecksReportResponse,
    requestSerialize: serialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportRequest,
    requestDeserialize: deserialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportRequest,
    responseSerialize: serialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportResponse,
    responseDeserialize: deserialize_mavsdk_rpc_events_GetHealthAndArmingChecksReportResponse,
  },
};

exports.EventsServiceClient = grpc.makeGenericClientConstructor(EventsServiceService);


// fix autocompletion
module.exports = exports;
