import { describe, test, expect } from "vitest";
import { getPortPromise } from "portfinder";
import { PluginBase } from "@mavlink-ts/internal/PluginBase";

// eslint-disable-next-line jsdoc/require-jsdoc
class TestPlugin extends PluginBase {}

describe("TelemetryPlugin", () => {
  test("Initialization without overriding the connect method", async () => {
    const port = await getPortPromise();

    const plugin = new TestPlugin("localhost" + port);

    expect(() => plugin.connect()).toThrowError();
  });
});
