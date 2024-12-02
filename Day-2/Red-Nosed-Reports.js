const fs = require("fs");
const input = fs.readFileSync("Day-2/input.txt", "utf-8");

// turns the string into a nested array of each level
const strToArray = (str) => {
  const arr = str.split("\n").map((arr) => {
    return arr.split(" ").map((num) => Number(num));
  });
  return arr;
};

// determines if a single level is safe if it is ascending
const getSafetyAsc = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 3 || arr[i] - arr[i - 1] <= 0) {
      return 0;
    }
  }
  return 1;
};

// determines if a single level is safe if it is descending
const getSafetyDesc = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] - arr[i] > 3 || arr[i - 1] - arr[i] <= 0) {
      return 0;
    }
  }
  return 1;
};

// determines if a single level if ascending
const determineAsc = (arr) => {
  const sortedArr = arr.toSorted((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      return false;
    }
  }
  return true;
};

// determines if a single level is descending
const determineDesc = (arr) => {
  const sortedArr = arr.toSorted((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      return false;
    }
  }
  return true;
};

// gets the safety of a single level
const singleLevelSafeCheck = (arr) => {
  if (determineAsc(arr)) {
    return getSafetyAsc(arr);
  } else if (determineDesc(arr)) {
    return getSafetyDesc(arr);
  }
  return 0;
};

const solution1 = (str) => {
  const arr = strToArray(str);
  let totalSafe = 0;

  arr.forEach((singleArr) => {
    totalSafe += singleLevelSafeCheck(singleArr);
  });

  return totalSafe;
};

console.log(solution1(input));

module.exports = { solution1 };
