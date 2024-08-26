import * as System from "../src/System.js";

async function run() {
  // create a new drone instance
  console.log("Establishing connection");
  const drone = new System.System(
    "192.168.144.1",
    50051,
    System.grpc.credentials.createInsecure(),
  );

  // subscribe to telemetry/position data
  console.log("Subscribing to position data");
  drone.telemetry.subscribePosition({
    dataCallback: (position) => {
      console.log("New data received:\n" + JSON.stringify(position));
    },
    statusCallback: (status) => {
      console.log("Connection status changed:\n" + JSON.stringify(status));
    },
    errorCallback: (error) => {
      console.error("Connection error occurred:" + JSON.stringify(error));
    },
    autoReconnect: true, // automatically reconnect if connection was lost
  });

  // wait some time
  await new Promise((rrr) => {
    setTimeout(rrr, 10000);
  });

  console.log("shutdown");
  drone.disconnectAll();
}

run();
