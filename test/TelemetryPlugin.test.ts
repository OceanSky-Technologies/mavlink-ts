import { describe, test, expect } from "vitest";
import { Position, PositionResponse } from "@protobuf-gen/telemetry/telemetry";
import { getPortPromise } from "portfinder";
import { TestTransport } from "@protobuf-ts/runtime-rpc";
import { TelemetryPlugin } from "@mavlink-ts/TelemetryPlugin";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

describe("TelemetryPlugin", () => {
  test("Initialization / deinitialization", async () => {
    const port = await getPortPromise();

    const plugin = new TelemetryPlugin("localhost" + port);
    expect(plugin.rpcTransport).toBeInstanceOf(GrpcWebFetchTransport);

    expect(plugin.telemetryServiceClient.methods.length).toBeGreaterThan(0);
    expect(plugin.aborted()).toBeFalsy();

    plugin.disconnect();

    expect(plugin.aborted()).toBeTruthy();
  });

  test("Position request / response", async () => {
    const port = await getPortPromise();

    // First position response
    const position1: Position = {
      latitudeDeg: 333.333,
      longitudeDeg: 12345.01,
      absoluteAltitudeM: 44.44,
      relativeAltitudeM: 0.1111,
    };
    const positionResponse1 = PositionResponse.create({ position: position1 });

    // Second position response
    const position2: Position = {
      latitudeDeg: 11.123,
      longitudeDeg: -0.003,
      absoluteAltitudeM: 4444,
      relativeAltitudeM: 0,
    };
    const positionResponse2 = PositionResponse.create({ position: position2 });

    const transport = new TestTransport({
      response: [positionResponse1, positionResponse2],
    });

    const telemetryPlugin = new TelemetryPlugin("localhost" + port, transport);

    telemetryPlugin.connect();

    const responseIterator =
      telemetryPlugin.position?.responses[Symbol.asyncIterator]();

    let receivedPosition = await responseIterator?.next(); // Fetch the first message

    expect(receivedPosition?.value.position).toEqual(position1);

    receivedPosition = await responseIterator?.next(); // Fetch the second message

    expect(receivedPosition?.value.position).toEqual(position2);

    telemetryPlugin.disconnect();
  });
});
