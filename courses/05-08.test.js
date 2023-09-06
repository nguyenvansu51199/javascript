import {
  isEvenPositiveNumberV1,
  isEvenPositiveNumberV2,
  isEvenPositiveNumberV3,
  isEvenPositiveNumberV4,
} from "./05-08-main";

describe("isEvenPositiveNumberV1()", () => {
  test("should return true if number is even number", () => {
    expect(isEvenPositiveNumberV1(2)).toBe(true);
  });

  test("should return false if number is negative", () => {
    expect(isEvenPositiveNumberV1(-2)).toBe(false);
  });
});

describe("isEvenPositiveNumberV2()", () => {
  test("should return true if number is even number", () => {
    expect(isEvenPositiveNumberV2(2)).toBe(true);
  });

  test("should return false if number is negative", () => {
    expect(isEvenPositiveNumberV2(-2)).toBe(false);
  });
});

describe("isEvenPositiveNumberV3()", () => {
  test("should return true if number is even number", () => {
    expect(isEvenPositiveNumberV3(2)).toBe(true);
  });

  test("should return false if number is negative", () => {
    expect(isEvenPositiveNumberV3(-2)).toBe(false);
  });
});

describe("isEvenPositiveNumberV4()", () => {
  test("should return true if number is even number", () => {
    expect(isEvenPositiveNumberV4(2)).toBe(true);
  });

  test("should return false if number is negative", () => {
    expect(isEvenPositiveNumberV4(-2)).toBe(false);
  });
});
