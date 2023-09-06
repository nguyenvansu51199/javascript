import { test } from "picomatch";
import { calcSquareSum } from "./02";

describe("calcSquareSum()", () => {
  test("should return 0 when n <= 0", () => {
    expect(calcSquareSum(0)).toBe(0);
    expect(calcSquareSum(-1)).toBe(0);
  });

  test("should return sum", () => {
    expect(calcSquareSum(1)).toBe(1);
    expect(calcSquareSum(2)).toBe(5);
    expect(calcSquareSum(3)).toBe(14);
  });
});
