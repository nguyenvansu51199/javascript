import {
  classifyNumberV1,
  classifyNumberV2,
  classifyNumberV3,
} from "./05-10-main";

describe("classifyNumberV1()", () => {
  test("should return Invalid if mark < 0", () => {
    expect(classifyNumberV1(-1)).toBe("Invalid Number");
  });

  test("should return Invalid if mark > 10", () => {
    expect(classifyNumberV1(11)).toBe("Invalid Number");
  });

  test("should return Excellence if marK [9, 10]", () => {
    [9, 10].forEach((n) => {
      expect(classifyNumberV1(n)).toBe("Excellence");
    });
  });

  test("should return Good if marK [7, 8]", () => {
    [7, 8].forEach((n) => {
      expect(classifyNumberV1(n)).toBe("Good");
    });
  });

  test("should return Not Good if marK [4, 5, 6]", () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyNumberV1(n)).toBe("Not Good");
    });
  });

  test("should return Bad if marK [1, 2, 3]", () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyNumberV1(n)).toBe("Bad");
    });
  });
});
