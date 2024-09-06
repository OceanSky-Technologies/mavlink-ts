import { TelemetryServiceClient } from "@protobuf-gen/telemetry/telemetry.client.ts";
import {
  PositionResponse,
  SubscribePositionRequest,
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
   * Connects to all telemetry services.
   * @param {RpcOptions} options RpcOptions used for all connections
   */
  override connect(options?: RpcOptions) {
    this.subscribePosition(options);
  }
}
