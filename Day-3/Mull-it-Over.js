const fs = require("fs");
const input = fs.readFileSync("Day-3/input.txt", "utf-8");

const getTotal = (mulStrs) => {
  const total = mulStrs.map((mulStr) => {
    const regex = /[0-9]+/gm;
    const nums = mulStr.match(regex);
    return nums[0] * nums[1];
  });

  return total.reduce((currVal, acc) => {
    return currVal + acc;
  }, 0);
};

const solution1 = (str) => {
  const regexGetMulStrs = /mul\([0-9]+,[0-9]+\)/gm;
  const mulStrs = str.match(regexGetMulStrs);
  if (!mulStrs) return 0;

  return getTotal(mulStrs);
};

const solution2 = (str) => {
  const regexGetMulStrs = /mul\([0-9]+,[0-9]+\)|don't\(\)|do\(\)/gm;
  const mulStrs = str.match(regexGetMulStrs);
  if (!mulStrs) return 0;

  let readNums = true;

  const NumsNotAfterDont = mulStrs.filter((str) => {
    if (str === "don't()") readNums = false;
    if (str === "do()") {
      readNums = true;
      return false;
    }
    return readNums;
  });

  return getTotal(NumsNotAfterDont);
};

console.log(solution1(input));
console.log(solution2(input));

module.exports = { solution1, solution2 };
