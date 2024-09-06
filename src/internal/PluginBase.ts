import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { RpcOptions, RpcTransport } from "@protobuf-ts/runtime-rpc";

/**
 * Abstract class all plugins need to inherit from.
 */
export abstract class PluginBase {
  abortController: AbortController;
  rpcTransport: RpcTransport;

  /**
   * Constructs a new plugin.
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
  }

  /**
   * Connects to all services.
   * @param {RpcOptions} _options RpcOptions used for all connections
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  connect(_options?: RpcOptions) {
    throw Error("Connect method not implemented");
  }

  /**
   * Disconnects all services of the plugin.
   */
  disconnect() {
    this.abortController.abort();
  }

  /**
   * Get the aborted state.
   * If the plugin was aborted it needs to be instantiated again from scratch as there is no way to reset the abort controller.
   * @returns {boolean} true if aborted, false if not.
   */
  aborted(): boolean {
    return this.abortController.signal.aborted;
  }
}
