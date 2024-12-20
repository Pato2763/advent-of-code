const { solution1, solution2 } = require("./Red-Nosed-Reports");

describe("determine safetey of different levels", () => {
  test("should deem it unsafe if it increases and decreases", () => {
    const input1 = `1 3 2 5 6`; //unsafe case asc to desc
    const input2 = `6 5 6 3 2`; //unsafe case desc to asc
    expect(solution1(input1)).toBe(0);
    expect(solution1(input2)).toBe(0);
  });
  test("determine if a single level is safe when the numbers are ascending by increments of 1 and 3", () => {
    const input1 = `1 3 6 8 9`; // safe case
    const input2 = `1 5 6 8 9`; // unsafe case
    const input3 = `1 3 3 4 5`; // unsafe case
    expect(solution1(input1)).toBe(1);
    expect(solution1(input2)).toBe(0);
    expect(solution1(input3)).toBe(0);
  });
  test("determine if a single level is safe when the numbers are descending by increments of 1 and 3", () => {
    const input1 = `9 8 6 3 2 1`; // safe case
    const input2 = `9 8 4 3 2 1`; // unsafe case
    const input3 = `9 8 6 3 3 1`; // unsafe case
    expect(solution1(input1)).toBe(1);
    expect(solution1(input2)).toBe(0);
    expect(solution1(input3)).toBe(0);
  });
  test("determines if multiple levels are safe", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
    expect(solution1(input)).toBe(2);
  });
});

describe("problem dampner", () => {
  test("without removing any level it should deem if it's safe or not", () => {
    const input1 = `1 3 6 8 9`; // safe case
    const input2 = `9 8 6 3 2 1`; // safe case

    expect(solution2(input1)).toBe(1);
    expect(solution2(input2)).toBe(1);
  });
  test("should allow for one bad level", () => {
    const input1 = `1 2 3 3 6`; // safe case
    const input2 = `1 2 2 2 3 5`; // unsafe case
    const input3 = `1 2 1 3 4 3`; //unsafe case

    expect(solution2(input1)).toBe(1);
    expect(solution2(input2)).toBe(0);
    expect(solution2(input3)).toBe(0);
  });
  test("should allow for multiple reports", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    expect(solution2(input)).toBe(4);
  });
});
