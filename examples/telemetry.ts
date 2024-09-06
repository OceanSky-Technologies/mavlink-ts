import { PositionResponse } from "@protobuf-gen/telemetry/telemetry";
import { System } from "@mavlink-ts/System";

async function run() {
  // create a new drone instance
  console.log("Establishing connection");

  const drone = new System("http://172.27.96.1", 8080);

  // subscribe to telemetry/position data
  console.log("Subscribing to position messages");

  drone.connect();

  console.log("Waiting for data ...");

  // Option A: use await on promises
  let i = 0;
  for await (const position of drone.telemetry.position?.responses!) {
    console.log("New data received from promise:\n" + JSON.stringify(position));

    i++;
    if (i == 10) break;
  }

  // Option B: configure callback functions
  drone.telemetry.position?.responses.onMessage(
    (position: PositionResponse) => {
      console.log(
        "New data received with callback:\n" + JSON.stringify(position),
      );
    },
  );

  drone.telemetry.position?.responses.onComplete(() => {
    console.log("Stream complete");
  });

  drone.telemetry.position?.responses.onError((error: Error) => {
    console.log("Stream error: " + error);
  });

  // wait some time
  await new Promise((rrr) => {
    setTimeout(rrr, 10000);
  });

  console.log("shutdown");
  drone.disconnect();
}

run();
