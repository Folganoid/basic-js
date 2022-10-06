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
function countCats(matrix) {
  let cnt = 0;
  for (let i of matrix) {
    for (let z of i) {
      if ((""+z) == "^^") {
        cnt++;
      }
    }
  }
  return cnt;
}

module.exports = {
  countCats
};
