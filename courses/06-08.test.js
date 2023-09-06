import { calcAreaOfRectangle, calcPerimeterOfRectangle } from "./06-08-main";

describe("calcAreaOfRectangle()", () => {
  test("should return -1 if a < 0", () => {
    expect(calcAreaOfRectangle(-1, 2)).toBe(-1);
  });

  test("should return -1 if a = 0", () => {
    expect(calcAreaOfRectangle(0, 2)).toBe(-1);
  });

  test("should return -1 if b = 0", () => {
    expect(calcAreaOfRectangle(1, 0)).toBe(-1);
  });

  test("should return -1 if b < 0", () => {
    expect(calcAreaOfRectangle(1, -1)).toBe(-1);
  });

  test("should return result = a * b", () => {
    expect(calcAreaOfRectangle(3, 2)).toBe(6);
  });
});

describe("calcPerimeterOfRectangle()", () => {
  test("should return -1 if a < 0", () => {
    expect(calcPerimeterOfRectangle(-1, 1)).toBe(-1);
  });

  test("should return -1 if a = 0", () => {
    expect(calcPerimeterOfRectangle(0, 1)).toBe(-1);
  });

  test("should return -1 if b = 0", () => {
    expect(calcPerimeterOfRectangle(1, 0)).toBe(-1);
  });

  test("should return -1 if b < 0", () => {
    expect(calcPerimeterOfRectangle(1, -1)).toBe(-1);
  });

  test("should result = (a + b) /2", () => {
    expect(calcPerimeterOfRectangle(4, 2)).toBe(3);
  });
});
