// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
import { calcSum, calcSumV2, calcSumV3 } from "./01-sum";

describe("calcSum()", () => {
  test("should return 0 when n <= 0", () => {
    expect(calcSum(0)).toBe(0);
    expect(calcSum(-1)).toBe(0);
  });

  test("should retun sum", () => {
    expect(calcSum(1)).toBe(1);
    expect(calcSum(2)).toBe(3);
    expect(calcSum(3)).toBe(6);
  });
});

// v2
describe("calcSumV2()", () => {
  test("should return 0 when n <= 0", () => {
    expect(calcSumV2(0)).toBe(0);
    expect(calcSumV2(-1)).toBe(0);
  });

  test("should retun sum", () => {
    expect(calcSum2(2)).toBe(3);
    expect(calcSum2(3)).toBe(6);
  });
});

// v3
describe("calcSumV3()", () => {
  test("should return 0 when n <= 0", () => {
    expect(calcSumV3(0)).toBe(0);
    expect(calcSumV3(-1)).toBe(0);
  });

  test("should retun sum", () => {
    expect(calcSumV3(1)).toBe(1);
    expect(calcSumV3(2)).toBe(3);
    expect(calcSumV3(3)).toBe(6);
  });
});

// v4

describe("calcSumV4()", () => {
  test("should return 0 when n <= 0", () => {
    expect(calcSumV4(0)).toBe(0);
    expect(calcSumV4(-1)).toBe(0);
  });

  test("should return sum", () => {
    expect(calcSumV4(1)).toBe(1);
    expect(calcSumV4(2)).toBe(3);
    expect(calcSumV4(3)).toBe(6);
  });
});
