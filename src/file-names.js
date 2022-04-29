const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let dictionary ={};
  names.forEach( ( fileName, idx ) =>{
    if (dictionary[fileName]!== undefined){
      dictionary[fileName]+= 1;
      names[idx] = fileName + "(" + dictionary[fileName] + ")";
      dictionary[names[idx]] = dictionary[names[idx]] ? dictionary[names[idx]]+1 : 0;
    } else {
      dictionary[fileName] = 0;
    };
  });
    return names;
}

module.exports = {
  renameFiles
};
