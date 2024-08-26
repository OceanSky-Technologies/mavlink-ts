import "../protobuf-gen/telemetry/telemetry_pb.cjs";
import * as GenericSubscription from "./internal/GenericSubscription.js";
import * as TelemetryService from "../protobuf-gen/telemetry/telemetry_grpc_pb.cjs";
import * as grpc from "@grpc/grpc-js";

const TelemetryMessages = proto.mavsdk.rpc.telemetry;

/**
 * Class to handle all telemetry communication.
 */
export class TelemetryPlugin {
  /**
   * Constructs a new telemetry plugin.
   * @param {string} connectionPath connection path to use: "IP:port" or "hostname:port"
   * @param {grpc.ChannelCredentials} credentials credentials to use
   */
  constructor(connectionPath, credentials) {
    if (!connectionPath) throw Error("ConnectionPath parameter missing");
    if (!credentials) throw Error("Credentials parameter missing");

    this.telemetrySubscription = new GenericSubscription.GenericSubscription();
    this.telemetryServiceClient = new TelemetryService.TelemetryServiceClient(
      connectionPath,
      credentials,
    );
  }

  /**
   * Disconnects all telemetry services.
   */
  disconnect() {
    if (this.telemetrySubscription.stream)
      this.telemetrySubscription.stream.cancel();
    if (this.telemetryServiceClient) this.telemetryServiceClient.close();
  }

  /**
   * Callback to handle changed connection statuses.
   * @callback statusCallback
   * @param {object} status New connection status.
   */

  /**
   * Callback to handle connection errors.
   * @callback errorCallback
   * @param {object} err Error information.
   */

  /**
   * Callback to handle received position data.
   * @callback positionDataCallback
   * @param {TelemetryMessages.Position} position Received position data.
   */

  /**
   * Auto reconnect setting.
   * @typedef {boolean} autoReconnect True to automatically reconnect when the connection was lost.
   */

  /**
   * Creates a new position subscription.
   * @param {{dataCallback: positionDataCallback,statusCallback: statusCallback,errorCallback: errorCallback,autoReconnect}} params parameters used to establish a connection
   */
  subscribePosition(params) {
    this.telemetrySubscription.subscribe(
      new GenericSubscription.PublicInterfaceParams(
        params.dataCallback,
        params.statusCallback,
        params.errorCallback,
        params.autoReconnect,
      ),
      new GenericSubscription.ServiceParams(
        (x) => this.telemetryServiceClient.subscribePosition(x),
        new TelemetryMessages.SubscribePositionRequest(),
      ),
    );
  }
}
