import { Example } from "../src/example";

describe("testing something", () => {
  test("an example", () => {
    const subject = new Example("Some String");

    expect(subject.up).toBe("SOME STRING");
    expect(subject.down).toBe("some string");
  });
});
