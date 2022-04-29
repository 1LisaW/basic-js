const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let max = 0;
  const nToStr = ""+n;
  for (let step = 0; step < nToStr.length; step++ ){
    let newCandidate = Number(nToStr.slice(0, step) + nToStr.slice(step+1))
    max = Math.max(max, newCandidate)
  }
  return max;
}

module.exports = {
  deleteDigit
};
