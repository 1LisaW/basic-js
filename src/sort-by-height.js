const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr) {
  const arrForSort = arr.filter(item=> item!=-1)
  arrForSort.sort((a,b)=>a-b);
  let i = 0; j=0;
  while (i < arr.length) {
    if(arr[i]==-1){
      i++;}
      else{
        arr[i] =arrForSort[j];
        i++;
        j++;
      };
  }
      return arr;

}

module.exports = {
  sortByHeight
};
