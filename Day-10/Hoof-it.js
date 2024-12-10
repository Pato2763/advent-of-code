const fs = require("fs");
const input = fs.readFileSync("Day-10/example.txt", "utf-8");
console.log(input);
const inputToArr = (input) => {
  return input.split("\n").map((str) => {
    return str.split("").map((str) => Number(str));
  });
};

const topoMap = inputToArr(input);

for (let row = 0; row < topoMap.length; row++) {
  for (let column = 0; column < topoMap[row].length; column++) {
    if (topoMap[row][column] === 0) {
      const zeroCoords = { row, column };
      const route = [zeroCoords];
      let routePos = 0;
      let currNum = 0;
      let previousDirection = {};

      while (route.length > 0) {
        if (route[routePos].row !== 0){

            if (
                topoMap[route[routePos].row - 1][route[routePos].column] ===
                currNum + 1
              ) {
                route.push({
                  row: route[routePos].row - 1,
                  column: route[routePos].column,
                });
                routePos++;
                currNum++;
        }

        else if (route[routePos].column !== topoMap[0].length - 1){

             if (
                topoMap[route[routePos].row][route[routePos].column + 1] ===
                currNum + 1
              ) {
                route.push({
                  row: route[routePos].row,
                  column: route[routePos].column + 1,
                });
                routePos++;
                currNum++;
              }
        }
        else if (route[routePos].row !== topoMap.length -1){}
        else if (route[routePos].column !== 0){}

        if (
          topoMap[route[routePos].row - 1][route[routePos].column] ===
          currNum + 1
        ) {
          route.push({
            row: route[routePos].row - 1,
            column: route[routePos].column,
          });
          routePos++;
          currNum++;
        } else if (
          topoMap[route[routePos].row][route[routePos].column + 1] ===
          currNum + 1
        ) {
          route.push({
            row: route[routePos].row,
            column: route[routePos].column + 1,
          });
          routePos++;
          currNum++;
        } else if (
          topoMap[route[routePos].row + 1][route[routePos].column] ===
          currNum + 1
        ) {
          route.push({
            row: route[routePos].row + 1,
            column: route[routePos].column,
          });
          routePos++;
          currNum++;
        } else if (
          topoMap[route[routePos].row][route[routePos].column - 1] ===
          currNum + 1
        ) {
          route.push({
            row: route[routePos].row,
            column: route[routePos].column - 1,
          });
          routePos++;
          currNum++;
        } else {
          previousDirection = route[routePos];
          route.pop();
          routePos--;
          currNum--;
        }
      }
    }
  }
}

const solution = () => {};
