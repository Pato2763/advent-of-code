const fs = require("fs");
const input = fs.readFileSync("Day-1/input.txt", "utf-8");

const getLists = (data) => {
  const allData = data.match(/[0-9]+/g);
  const lists = [[], []];
  allData.forEach((number, index) => {
    lists[index % 2].push(number);
  });
  return lists;
};

const getTotalDiffernce = (arr) => {
  const arr1Sorted = arr[0].toSorted((a, b) => a - b);
  const arr2Sorted = arr[1].toSorted((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr1Sorted.length; i++) {
    count += Math.abs(arr1Sorted[i] - arr2Sorted[i]);
  }
  return count;
};

const getSimilarityScore = (arr) => {
  const simScore = arr[0].reduce((acc, currVal) => {
    return (
      acc +
      currVal *
        arr[1].filter((number) => {
          return number === currVal;
        }).length
    );
  }, 0);

  return simScore;
};

const solution = (data) => {
  const dataArray = getLists(data);
  return getTotalDiffernce(dataArray);
};

const solutionPart2 = (data) => {
  const dataArray = getLists(data);
  return getSimilarityScore(dataArray);
};

console.log(solution(input));
console.log(solutionPart2(input));
module.exports = { solution, solutionPart2 };
