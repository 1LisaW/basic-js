const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsMatrix) {
   return catsMatrix.reduce( ( acc , row ) =>{
      acc += row.filter( cell => cell==="^^").length;
      return acc;
    },0)
}

module.exports = {
  countCats
};
