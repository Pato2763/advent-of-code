const fs = require("fs");
const input = fs.readFileSync("Day-2/input.txt", "utf-8");

//solution 1

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

//solution 2

const tolerateBadLevelSafeCheck = (arr) => {
  let safeCheck = 1;
  let badLevel = false;
  let i = 1;

  //checks for ascending
  let arrAsc = [...arr];
  while (i < arrAsc.length && safeCheck === 1) {
    if (arrAsc[i] - arrAsc[i - 1] > 3 || arrAsc[i] - arrAsc[i - 1] <= 0) {
      if (badLevel) {
        safeCheck = 0;
      } else {
        badLevel = true;
        arrAsc.splice(i, 1);
      }
    } else {
      i++;
    }
  }

  badLevel = false;

  //checks for descending

  if (!safeCheck) {
    i = 1;
    let arrDesc = [...arr];
    safeCheck = 1;
    while (i < arrDesc.length && safeCheck === 1) {
      if (arrDesc[i - 1] - arrDesc[i] > 3 || arrDesc[i - 1] - arrDesc[i] <= 0) {
        if (badLevel) {
          safeCheck = 0;
        } else {
          badLevel = true;
          arrDesc.splice(i, 1);
        }
      } else {
        i++;
      }
    }
  }

  return safeCheck;
};

const isSafewithDampner = (level) => {
  const removedCheck = (levelSpliced) => {
    let isAscending = null;
    for (i = 1; i < levelSpliced.length; i++) {
      let dif = levelSpliced[i] - levelSpliced[i - 1];
      if (Math.abs(dif) > 3 || Math.abs(dif) === 0) return false;
      if (isAscending === null) isAscending = dif > 0;

      if ((isAscending && dif < 0) || (!isAscending && dif > 0)) return false;
    }
    return true;
  };

  for (let i = 0; i < level.length; i++) {
    let arr = [...level];
    arr.splice(i, 1);
    if (removedCheck(arr)) return true;
  }
  return false;
};

const solution2 = (str) => {
  const arr = strToArray(str);
  let totalSafe = 0;
  arr.forEach((singleArr) => {
    if (singleLevelSafeCheck(singleArr) === 1 || isSafewithDampner(singleArr)) {
      totalSafe++;
    }
  });

  return totalSafe;
};

console.log(solution1(input));
console.log(solution2(input));

module.exports = { solution1, solution2 };
