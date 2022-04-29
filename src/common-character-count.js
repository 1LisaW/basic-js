const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const createDictionary = (elem) => {
    const dictionary= new Map();
     for (let i = 0; i < elem.length; i++) {
       if (dictionary.has(elem[i])) {
         dictionary.set(elem[i], dictionary.get(elem[i])+1);
       }
       else{
         dictionary.set(elem[i], 1);
       }
     }
     return dictionary;
  }
  const dictionary1 = createDictionary(s1);
  const dictionary2 = createDictionary(s2);
  let counter = 0;
  dictionary1.forEach( ( value , key ) =>{
    if (dictionary2.has(key)){
      counter += Math.min( dictionary2.get(key),value);
    }
  } );
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
