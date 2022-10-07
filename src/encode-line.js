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
  let cnt = 0;
  let prev = "";
  let res = "";

  for (let i = 0 ; i<str.length; i++) {

    if (prev == "" || prev == str[i]) {
      prev = str[i];
      cnt++;
    } else {
      res += (cnt == 1) ? prev : cnt + prev;
      cnt = 1;
      prev = str[i];
    }
  }

  if (prev != "") {
      res += (cnt == 1) ? prev : cnt + prev;
  }

  return res;
}

module.exports = {
  encodeLine
};
