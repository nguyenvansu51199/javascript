import { statisticsWords } from "./string-02";

describe("statisticsWords(str)", () => {
  test("should return empty object when str does not have words", () => {
    expect(statisticsWords("")).toEqual({});
  });

  test("should return empty object when str is not string", () => {
    expect(statisticsWords(123)).toEqual({});
  });

  test("should return object when str does not have redundant spaces", () => {
    expect(statisticsWords("easy frontend")).toEqual({
      easy: 1,
      frontend: 1,
    });
    expect(statisticsWords("easy frontend easy")).toEqual({
      easy: 2,
      frontend: 1,
    });
  });

  test("should return object when str has redundant spaces", () => {
    expect(statisticsWords("easy   frontend ")).toEqual({
      easy: 1,
      frontend: 1,
    });
    expect(statisticsWords("easy  frontend   easy")).toEqual({
      easy: 2,
      frontend: 1,
    });
  });
});
