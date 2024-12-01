const { solution, solutionPart2 } = require("./total-difference-between-lists");

describe("finding the total difference between two lists", () => {
  test("can find the difference between two lists of length 1", () => {
    const input = "3 4";
    expect(solution(input)).toBe(1);
  });
  test("can find the difference between two arrays of length greater than 1 when they are ordered from smallest to largest", () => {
    const input = "4 3 8 5";
    expect(solution(input)).toBe(4);
  });
  test("can find the difference between two arrays of length greater than 1 when they are unordered", () => {
    const input1 = [3, 4, 2, 1, 3, 3];
    const input2 = [4, 3, 5, 3, 9, 3];
    const input = "3 4 4 3 2 5 1 3 3 9 3 3";
    expect(solution(input)).toBe(11);
  });
});

describe("finding the similarity score", () => {
  test("for list of length 1 get the correct similarity score", () => {
    const input = "3 3";
    expect(solutionPart2(input)).toBe(3);
  });
  test("for a list of length greater than 1 find the correct similarity score", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
    expect(solutionPart2(input)).toBe(31);
  });
});
