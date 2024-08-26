import { describe, test, expect } from "vitest";

describe("Almost equal (numbers)", () => {
  test("Numbers are not equal", () => {
    const a = 55.6678;
    const b = 5;
    expect(a).not.toEqual(b);
  });
});
