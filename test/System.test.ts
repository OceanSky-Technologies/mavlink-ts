import { describe, test, expect } from "vitest";
import { System } from "@mavlink-ts/System";

import { getPortPromise } from "portfinder";

describe("System", () => {
  test("Initialization", async () => {
    const port = await getPortPromise();

    const drone = new System("localhost", port);
    expect(drone.getConnectionPath()).toEqual("localhost:" + port);
  });
});
