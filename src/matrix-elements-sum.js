const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    const skip = {};
    let result = 0;
    for (let i=0; i<matrix.length; i++){
      result += matrix[i].reduce((acc, curr, idx) =>{
        if (skip[idx]) return acc;
        if (curr==0){ skip[idx]=true};
        acc+= curr;
        return acc;
      },0)
    };
    return result;
}

module.exports = {
  getMatrixElementsSum
};
