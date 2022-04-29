const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = matrix.map( item => item.map( elem => elem ? 1:0));
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col]) {
          for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, matrix.length - 1); i++) {
            for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, matrix[row].length - 1); j++) {
              if( !matrix[i][j]){
                newMatrix[i][j]+=1;
              }
            }
          }
        }
      }
    }
    return newMatrix;
}

module.exports = {
  minesweeper
};
