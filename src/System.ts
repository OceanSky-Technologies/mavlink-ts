import { RpcOptions, RpcTransport } from "@protobuf-ts/runtime-rpc";
import { TelemetryPlugin } from "./TelemetryPlugin.ts";

/**
 * Class that manages the entire communication to a drone.
 */
export class System {
  host: string;
  port: number;
  telemetry: TelemetryPlugin;

  /**
   * Creates a new System instance.
   * @param {string} host host name / IP address
   * @param {number} port port number
   * @param {RpcTransport} rpcTransport custom RPC transport class. Can be used to mock the protocol using  the TestTransport class.
   */
  constructor(host: string, port: number, rpcTransport?: RpcTransport) {
    this.host = host;
    this.port = port;

    this.telemetry = new TelemetryPlugin(
      this.getConnectionPath(),
      rpcTransport,
    );
  }

  /**
   * Get the connection path: "IP:port" or "hostname:port".
   * @returns {string} "host:port"
   */
  getConnectionPath(): string {
    return this.host + ":" + this.port;
  }

  /**
   * Connects all services.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  connect(options?: RpcOptions) {
    this.telemetry.connect(options);
  }

  /**
   * Disconnects all services.
   */
  disconnect() {
    this.telemetry.disconnect();
  }
}
