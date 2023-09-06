import {
  convertHoursToSeconds,
  findMax,
  findMaxEvenNumber,
} from "./06-10-main";

describe("convertHoursToSeconds()", () => {
  test("should return -1 if hours < 0", () => {
    expect(convertHoursToSeconds(-2)).toBe(-1);
  });

  test("should return 0 if hours = 0", () => {
    expect(convertHoursToSeconds(0)).toBe(0);
  });

  test("should return hours * SECONDS_PER_HOUR if hours > 0", () => {
    expect(convertHoursToSeconds(2)).toBe(7200);
  });
});

describe("findMax()", () => {
  test("should return number is max", () => {
    expect(findMax(1, 2, 3)).toBe(3);
  });
});

describe.only("findMaxEvenNumber()", () => {
  test("should return Infinity if Have not even number", () => {
    expect(findMaxEvenNumber(-1, 3, 5)).toBe(-Infinity);
  });
  test("should return max even number if Have even number", () => {
    expect(findMaxEvenNumber(4, 3, 5)).toBe(4);
  });
});
