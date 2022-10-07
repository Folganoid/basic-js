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

  str = String(str);
  if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes = 1;
  if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes = 1;
  if (options.hasOwnProperty('separator')) options.separator = String(options.separator);
  if (options.hasOwnProperty('addition')) options.addition = String(options.addition);
  if (options.hasOwnProperty('additionSeparator')) options.additionSeparator = String(options.additionSeparator);
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";

  let add = "";

  if (options.additionRepeatTimes && options.addition && options.additionSeparator) {
    for (let i = 0; i<options.additionRepeatTimes; i++) {
      add += (i == options.additionRepeatTimes-1) ? options.addition : options.addition + options.additionSeparator;;
    }
  }

  let res = "";
  for (let i = 0; i<options.repeatTimes; i++) {
    res += (i == options.repeatTimes-1) ? str + add: str + add + options.separator;
  }  

  return res;
}

module.exports = {
  repeater
};
