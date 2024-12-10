const { solution1 } = require("./Ceres-Search");

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

describe("Ceres Search", () => {
  test("can find XMAS when written forward and horizontal", () => {
    const input1 = "JBSDFXMASJBSFXMA";
    const input2 = "JFDASOXMASUJKSFXMASIONF";
    const input3 = "JKABDFJSKBGXMAJBFDSL";

    expect(solution1(input1)).toBe(1);
    expect(solution1(input2)).toBe(2);
    expect(solution1(input3)).toBe(0);
  });
  test("can find XMAS when written backwards and horizontal", () => {
    const input1 = "JKBJBDSSAMXPISF";
    const input2 = "JKBJBDSSAMXPISFXMAS";

    expect(solution1(input1)).toBe(1);
    expect(solution1(input2)).toBe(2);
  });
  test("can find XMAS when written forwards or backwards and vertical", () => {
    const input1 = `XJSX
MADM
AKVA
SNIS`;
    const input2 = `XJSS
MADA
AKVM
SNIX`;

    expect(solution1(input1)).toBe(2);
    expect(solution1(input2)).toBe(2);
  });

  test("can find XMAS when written forwards or backwards and diagonally", () => {
    const input1 = `XJSHF
XMJDI
DMADE
ECASE
FVFSV`;
    expect(solution1(input1)).toBe(2);
  });
});
