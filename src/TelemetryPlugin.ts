import { TelemetryServiceClient } from "@protobuf-gen/telemetry/telemetry.client.ts";
import {
  AltitudeResponse,
  AttitudeAngularVelocityBodyResponse,
  AttitudeEulerResponse,
  DistanceSensorResponse,
  HeadingResponse,
  PositionResponse,
  SubscribeAltitudeRequest,
  SubscribeAttitudeAngularVelocityBodyRequest,
  SubscribeAttitudeEulerRequest,
  SubscribePositionRequest,
  SubscribeDistanceSensorRequest,
  SubscribeHeadingRequest,
} from "@protobuf-gen/telemetry/telemetry.ts";
import {
  RpcOptions,
  RpcTransport,
  ServerStreamingCall,
} from "@protobuf-ts/runtime-rpc";
import { PluginBase } from "@mavlink-ts/internal/PluginBase.ts";

/**
 * Class to handle all telemetry communication.
 */
export class TelemetryPlugin extends PluginBase {
  telemetryServiceClient: TelemetryServiceClient;

  position:
    | ServerStreamingCall<SubscribePositionRequest, PositionResponse>
    | null
    | undefined;

  attitudeEuler:
    | ServerStreamingCall<SubscribeAttitudeEulerRequest, AttitudeEulerResponse>
    | null
    | undefined;

  attitudeAngularVelocityBody:
    | ServerStreamingCall<
        SubscribeAttitudeAngularVelocityBodyRequest,
        AttitudeAngularVelocityBodyResponse
      >
    | null
    | undefined;

  distanceSensor:
    | ServerStreamingCall<
        SubscribeDistanceSensorRequest,
        DistanceSensorResponse
      >
    | null
    | undefined;

  altitude:
    | ServerStreamingCall<SubscribeAltitudeRequest, AltitudeResponse>
    | null
    | undefined;

  heading:
    | ServerStreamingCall<SubscribeHeadingRequest, HeadingResponse>
    | null
    | undefined;

  /**
   * Constructs a new telemetry plugin.
   * @param {string} connectionPath connection path to use: "IP:port" or "hostname:port"
   * @param {RpcTransport} rpcTransportParam custom RPC transport class. Can be used to mock the protocol using  the TestTransport class.
   */
  constructor(connectionPath: string, rpcTransportParam?: RpcTransport) {
    super(connectionPath, rpcTransportParam);

    this.telemetryServiceClient = new TelemetryServiceClient(this.rpcTransport);
  }

  /**
   * Subscribes to position data.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  subscribePosition(options?: RpcOptions) {
    this.position = this.telemetryServiceClient.subscribePosition(
      SubscribePositionRequest,
      options,
    );
  }

  /**
   * Subscribes to attitude euler data.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  subscribeAttitudeEuler(options?: RpcOptions) {
    this.attitudeEuler = this.telemetryServiceClient.subscribeAttitudeEuler(
      SubscribeAttitudeEulerRequest,
      options,
    );
  }

  /**
   * Subscribes to attitude euler data.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  subscribeAttitudeAngularVelocityBody(options?: RpcOptions) {
    this.attitudeAngularVelocityBody =
      this.telemetryServiceClient.subscribeAttitudeAngularVelocityBody(
        SubscribeAttitudeAngularVelocityBodyRequest,
        options,
      );
  }

  /**
   * Subscribes to distance sensor data.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  subscribeDistanceSensor(options?: RpcOptions) {
    this.distanceSensor = this.telemetryServiceClient.subscribeDistanceSensor(
      SubscribeDistanceSensorRequest,
      options,
    );
  }

  /**
   * Subscribes to altitude data.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  subscribeAltitude(options?: RpcOptions) {
    this.altitude = this.telemetryServiceClient.subscribeAltitude(
      SubscribeAltitudeRequest,
      options,
    );
  }

  /**
   * Subscribes to heading data.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  subscribeHeading(options?: RpcOptions) {
    this.heading = this.telemetryServiceClient.subscribeHeading(
      SubscribeHeadingRequest,
      options,
    );
  }

  /**
   * Connects to all telemetry services.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  override subscribeAll(options?: RpcOptions) {
    this.subscribePosition(options);
    this.subscribeAttitudeEuler(options);
    this.subscribeAttitudeAngularVelocityBody(options);
    this.subscribeDistanceSensor(options);
    this.subscribeAltitude(options);
    this.subscribeHeading(options);
  }
}
