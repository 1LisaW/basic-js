const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str==="") return "";
  let encode ="";
  let char = str[0];
  let counter =1;
  for (let i =1; i<str.length; i++){
    if (str[i]===char){
      counter++;
    }
    else{
      encode += (counter == 1 ? "" : counter) + char;
      char = str[i];
      counter=1;
    };
  }
  encode += (counter==1 ? "":counter) + char ;
  return encode;
}

module.exports = {
  encodeLine
};
