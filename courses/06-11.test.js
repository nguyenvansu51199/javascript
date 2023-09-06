import {
  extractTheOnes,
  extranctTheTens,
  extranctTheHundreds,
} from "./06-11-main";

describe("extractTheOnes()", () => {
  test("should return -1 if number not having 3 digits", () => {
    expect(extractTheOnes(51)).toBe(-1);
  });

  test("should return ones of number if number having 3 digits", () => {
    expect(extractTheOnes(511)).toBe(1);
  });
});

describe("extranctTheTens()", () => {
  test("should return -1 if number not having 3 digits", () => {
    expect(extranctTheTens(13)).toBe(-1);
  });

  test("should return tens of number if number having 3 digits", () => {
    expect(extranctTheTens(130)).toBe(3);
  });
});

describe.only("extranctTheHundreds()", () => {
  test("should return -1 if number not having 3 digits", () => {
    expect(extranctTheHundreds(1234)).toBe(-1);
  });

  test("should return hundreds of number if number having 3 digits", () => {
    expect(extranctTheHundreds(490)).toBe(4);
  });
});
