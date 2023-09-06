import { randomNumber } from "./06-07-main";

describe("randomNumber()", () => {
  test("should return -1 if a > b", () => {
    expect(randomNumber(2, 1)).toBe(-1);
  });

  test("should return -1 if a = b", () => {
    expect(randomNumber(2, 2)).toBe(-1);
  });
});
