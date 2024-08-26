/**
 * @callback dataCallback Callback to call when new data was received.
 * @param {object} data New data.
 */

/**
 * @callback statusCallback Callback to call when the connection status changed.
 * @param {object} status New connection status.
 */

/**
 * @callback errorCallback Callback to call when a connection error occurred.
 * @param {object} error Error information.
 */

/**
 * Interface exposed to the public / top-level application.
 */
export class PublicInterfaceParams {
  /**
   * Creates a new instance.
   * @param {dataCallback} dataCallback Callback that shall be called when new data was received.
   * @param {statusCallback} statusCallback Callback that shall be called when the connection status changed.
   * @param {errorCallback} errorCallback Callback that shall be called when an error occurred.
   * @param {boolean} autoReconnect Automatic reconnect on connection loss.
   */
  constructor(dataCallback, statusCallback, errorCallback, autoReconnect) {
    if (!dataCallback) throw Error("No dataCallback provided");

    this.dataCallback = dataCallback;
    this.statusCallback = statusCallback;
    this.errorCallback = errorCallback;
    this.autoReconnect = autoReconnect;
  }
}

/**
 * @callback subscribeCallback Callback to call in order to subscribe to data.
 * @param {object} subscribeRequestMessage Message sent establish the subscription.
 */

/**
 * Service interface class.
 */
export class ServiceParams {
  /**
   * Creates new service parameters.
   * @param {subscribeCallback} subscribeCallback Protobuf service function to subscribe to data.
   * @param {object} subscribeRequestMessage Protobuf message that shall be sent when subscribing to data.
   */
  constructor(subscribeCallback, subscribeRequestMessage) {
    if (!subscribeCallback) throw Error("SubscribeCallback not provided");
    if (!subscribeRequestMessage)
      throw Error("subscribeRequestMessage not provided");

    this.subscribeCallback = subscribeCallback;
    this.subscribeRequestMessage = subscribeRequestMessage;
  }
}

/**
 * Class to handle data subscriptions.
 */
export class GenericSubscription {
  /**
   * Subscribe to data.
   * @param {PublicInterfaceParams} publicInterfaceParams Public interface parameters.
   * @param {ServiceParams} serviceParams Service parameters.
   * @returns {object} New data stream
   */
  subscribe(publicInterfaceParams, serviceParams) {
    if (!publicInterfaceParams.dataCallback)
      throw Error("DataCallback not provided");
    if (!serviceParams.subscribeCallback)
      throw Error("subscribeCallback not defined");
    if (!serviceParams.subscribeRequestMessage)
      throw Error("subscribeRequestMessage not defined");

    this.stream = serviceParams.subscribeCallback(
      serviceParams.subscribeRequestMessage,
      (err) => {
        if (err) {
          throw Error(
            "Error while creating subscription" + JSON.stringify(err),
          );
        }
      },
    );

    this.stream.on("data", (response) => {
      publicInterfaceParams.dataCallback(response.toObject());
    });

    if (publicInterfaceParams.statusCallback) {
      this.stream.on("status", (status) => {
        publicInterfaceParams.statusCallback(status);
      });
    }

    if (publicInterfaceParams.errorCallback) {
      this.stream.on("error", (error) => {
        publicInterfaceParams.errorCallback(error);

        // Code 14 means server shut down
        if (error.code === 14 && publicInterfaceParams.autoReconnect === true) {
          this.subscribe(publicInterfaceParams, serviceParams);
        }
      });
    }

    return this.stream;
  }
}
