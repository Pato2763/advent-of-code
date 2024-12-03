const { solution1, solution2 } = require("./Mull-it-Over");

describe("Mull it over", () => {
  test("can return the correct number when passed a single mul", () => {
    input1 = "mul(2,4)";
    input2 = "m(2,4)";

    expect(solution1(input1)).toBe(8);
    expect(solution1(input2)).toBe(0);
  });
  test("can return the correct number when passed multiple mul strings", () => {
    input1 = "mul(2,4)jkafmul(5,2)";
    input2 = "mul(2,4)jkafmul(5,2)mu(4,3)";

    expect(solution1(input1)).toBe(18);
    expect(solution1(input2)).toBe(18);
  });
});
describe("second part with do or don't enabled", () => {
  test("if there is a don't present at the start none of the numbers will be multiplied", () => {
    input1 = "don't()mul(2,4)jkafmul(5,2)";

    expect(solution2(input1)).toBe(0);
  });
  test("return the correct number for a string the includes don't() and do()", () => {
    input1 =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

    expect(solution2(input1)).toBe(48);
  });
});
