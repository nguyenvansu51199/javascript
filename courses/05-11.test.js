import { getErrorMessageV1, getErrorMessageV2 } from "./05-11-main";

describe("getErrorMessageV1()", () => {
  test("should return Invalid usrname or password if E01", () => {
    expect(getErrorMessageV1("E01")).toBe("Invalid usrname or password");
  });

  test("should return Too many attempts if E02", () => {
    expect(getErrorMessageV1("E02")).toBe("Too many attempts");
  });

  test("should return Messing data if E03", () => {
    expect(getErrorMessageV1("E03")).toBe("Messing data");
  });
});
