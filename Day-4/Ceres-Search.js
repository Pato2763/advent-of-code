const strToArray = (str) => {
  const arr = str.split("\n");
  return arr;
};

const findXmas = (wordSearchArr) => {
  let xmasCount = 0;

  const regex = /XMAS|SAMX/g;
  for (let i = 0; i < wordSearchArr.length; i++) {
    const xmasArr = wordSearchArr[i].match(regex);
    if (xmasArr !== null) xmasCount += xmasArr.length;
  }

  return xmasCount;
};

const getColumns = (wordSearchArr) => {
  const columns = [];
  for (let column = 0; column < wordSearchArr[0].length; column++) {
    let columnString = "";
    for (let row = 0; row < wordSearchArr.length; row++) {
      columnString += wordSearchArr[row][column];
    }
    columns.push(columnString);
  }

  return columns;
};

const getDiagonals = (wordSearchArr) => {
    const maxRow = wordSearchArr.length-4
    const maxColumn = wordSearchArr[0].length-4

    if (maxRow <0 || maxColumn< 0) return []

    const diagonals = []

    const startingRow = maxRow
    const startingColumn = 0

    while (startingColumn <= maxColumn){
        while (startingRow >= 0){
            const diagonal = ""
            for (let i = 0; )
        }
    }
}

const solution1 = (str) => {
  const wordSearchArr = strToArray(str);

  let xmasCount = 0;
  const columns = getColumns(wordSearchArr);

  xmasCount += findXmas(wordSearchArr);
  xmasCount += findXmas(columns);
  return xmasCount;
};

module.exports = { solution1 };

