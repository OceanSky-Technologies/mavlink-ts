import { TelemetryServiceClient } from "@protobuf-gen/telemetry/telemetry.client";
import {
  PositionResponse,
  SubscribePositionRequest,
} from "@protobuf-gen/telemetry/telemetry";
import {
  RpcOptions,
  RpcTransport,
  ServerStreamingCall,
} from "@protobuf-ts/runtime-rpc";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

/**
 * Class to handle all telemetry communication.
 */
export class TelemetryPlugin {
  telemetryServiceClient: TelemetryServiceClient;
  position:
    | ServerStreamingCall<SubscribePositionRequest, PositionResponse>
    | null
    | undefined;
  private abortController: AbortController;
  rpcTransport: RpcTransport;

  /**
   * Constructs a new telemetry plugin.
   * @param {string} connectionPath connection path to use: "IP:port" or "hostname:port"
   * @param {RpcTransport} rpcTransportParam custom RPC transport class. Can be used to mock the protocol using  the TestTransport class.
   */
  constructor(connectionPath: string, rpcTransportParam?: RpcTransport) {
    this.abortController = new AbortController();

    if (rpcTransportParam) {
      this.rpcTransport = rpcTransportParam;
    } else {
      this.rpcTransport = new GrpcWebFetchTransport({
        baseUrl: connectionPath,
        format: "binary",
        abort: this.abortController.signal,
      });
    }

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
  connectAll(options?: RpcOptions) {
    this.subscribePosition(options);
  }

  /**
   * Disconnects all telemetry services.
   */
  disconnectAll() {
    this.abortController.abort();
  }
}
