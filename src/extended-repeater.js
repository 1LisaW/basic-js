const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // if (typeof str !=="string") return "";
  str = "".concat(str);
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|"
  } = options;
  addition="".concat(addition);
  separator="".concat(separator);
  let elemBlock = str.concat((addition.concat(additionSeparator)).repeat(additionRepeatTimes - 1), addition);
  
  return (elemBlock.concat(""+separator)).repeat(repeatTimes - 1).concat(elemBlock);

}

module.exports = {
  repeater
};
