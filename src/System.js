import "../protobuf-gen/telemetry/telemetry_pb.cjs";

import * as grpc from "@grpc/grpc-js";
import { TelemetryPlugin } from "./TelemetryPlugin.js";

export { grpc };

/**
 * Class that manages the entire communication to a drone.
 */
export class System {
  /**
   * Creates a new System instance.
   * @param {string} host  host name / IP address
   * @param {number} port port number
   * @param {grpc.ChannelCredentials} credentials credentials to use
   */
  constructor(host, port, credentials) {
    if (!host) throw Error("Host not provided");
    if (!port) throw Error("Port not provided");
    if (!credentials) throw Error("Credentials not provided");

    this.host = host;
    this.port = port;
    this.credentials = credentials;

    this.telemetry = new TelemetryPlugin(
      this.getConnectionPath(),
      this.credentials,
    );
  }

  /**
   * Get the connection path: "IP:port" or "hostname:port".
   * @returns {string} "host:port"
   */
  getConnectionPath() {
    return this.host + ":" + this.port;
  }

  /**
   * Disconnects all services.
   */
  disconnectAll() {
    console.log("disconnecting");

    this.telemetry.disconnect();
  }
}
