const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let result= [...arr];
  const deleteCommand = (id) => { result[id]="deleted" }
  let obj ={
    "--discard-next": (idx) => {
      deleteCommand(idx + 1);
      deleteCommand(idx);
    },
    "--discard-prev": (idx) => {
      deleteCommand(idx -1);
      deleteCommand(idx);
    },
    "--double-next": (idx) =>{
      if ( (idx< result.length-1) && result[idx + 1] !== "deleted") {
        result[idx] = result[idx + 1];
      } else deleteCommand(idx);
    },
    "--double-prev": (idx) =>{ 
      if (idx >1 && result[idx - 1] !== "deleted") {
        result[idx] = result[idx - 1];
      } else deleteCommand(idx);
    }
  }
    result.forEach( (item, idx) =>{
      if (obj[item]) obj[item](idx);
    } );
    result = result.filter((item) => item != "deleted");

    return result;

}

module.exports = {
  transform
};

//[ 1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5 ]