import { capitalsize } from "./07-07-main";

describe("capitalsize()", () => {
  test("should return empty is empty str", () => {
    expect(capitalsize("")).toBe("");
  });

  test("should Capitalsize", () => {
    expect(capitalsize("qwerTY")).toBe("Qwerty");
  });
});
