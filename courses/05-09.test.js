import {
  classifyStudentV1,
  classifyStudentV2,
  classifyStudentV3,
  classifyStudentV4,
} from "./05-09-main";

describe("classifyStudentV1()", () => {
  test("should return Invalid if mark < 0", () => {
    expect(classifyStudentV1(-1)).toBe("Invalid");
  });

  test("should return Invalid if mark > 10", () => {
    expect(classifyStudentV1(11)).toBe("Invalid");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV1(9)).toBe("Excellence");
    expect(classifyStudentV1(10)).toBe("Excellence");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV1(7)).toBe("Good");
    expect(classifyStudentV1(8)).toBe("Good");
  });

  test("should return Good if mark [7, 8]", () => {
    [7, 8].forEach((n) => {
      expect(classifyStudentV1(n)).toBe("Good");
    });
  });

  test("should return Not Good if mark [4, 5, 6]", () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentV1(n)).toBe("Not Good");
    });
  });

  test("should return Bad if mark [1, 2, 3]", () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudentV1(n)).toBe("Bad");
    });
  });
});

describe("classifyStudentV2()", () => {
  test("should return Invalid if mark < 0", () => {
    expect(classifyStudentV2(-1)).toBe("Invalid");
  });

  test("should return Invalid if mark > 10", () => {
    expect(classifyStudentV2(11)).toBe("Invalid");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV2(9)).toBe("Excellence");
    expect(classifyStudentV2(10)).toBe("Excellence");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV2(7)).toBe("Good");
    expect(classifyStudentV2(8)).toBe("Good");
  });

  test("should return Good if mark [7, 8]", () => {
    [7, 8].forEach((n) => {
      expect(classifyStudentV2(n)).toBe("Good");
    });
  });

  test("should return Not Good if mark [4, 5, 6]", () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentV2(n)).toBe("Not Good");
    });
  });

  test("should return Bad if mark [1, 2, 3]", () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudentV2(n)).toBe("Bad");
    });
  });
});

describe("classifyStudentV3()", () => {
  test("should return Invalid if mark < 0", () => {
    expect(classifyStudentV3(-1)).toBe("Invalid");
  });

  test("should return Invalid if mark > 10", () => {
    expect(classifyStudentV3(11)).toBe("Invalid");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV3(9)).toBe("Excellence");
    expect(classifyStudentV3(10)).toBe("Excellence");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV3(7)).toBe("Good");
    expect(classifyStudentV3(8)).toBe("Good");
  });

  test("should return Good if mark [7, 8]", () => {
    [7, 8].forEach((n) => {
      expect(classifyStudentV3(n)).toBe("Good");
    });
  });

  test("should return Not Good if mark [4, 5, 6]", () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentV3(n)).toBe("Not Good");
    });
  });

  test("should return Bad if mark [1, 2, 3]", () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudentV3(n)).toBe("Bad");
    });
  });
});

describe("classifyStudentV4()", () => {
  test("should return Invalid if mark < 0", () => {
    expect(classifyStudentV4(-1)).toBe("Invalid");
  });

  test("should return Invalid if mark > 10", () => {
    expect(classifyStudentV4(11)).toBe("Invalid");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV4(9)).toBe("Excellence");
    expect(classifyStudentV4(10)).toBe("Excellence");
  });

  test("should return Invalid if mark [9, 10]", () => {
    expect(classifyStudentV4(7)).toBe("Good");
    expect(classifyStudentV4(8)).toBe("Good");
  });

  test("should return Good if mark [7, 8]", () => {
    [7, 8].forEach((n) => {
      expect(classifyStudentV4(n)).toBe("Good");
    });
  });

  test("should return Not Good if mark [4, 5, 6]", () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentV4(n)).toBe("Not Good");
    });
  });

  test("should return Bad if mark [1, 2, 3]", () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudentV4(n)).toBe("Bad");
    });
  });
});
