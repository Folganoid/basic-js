const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor() {
    this.cnt = 0;
    this.maxDepth = 0;
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return;
    }
    this.cnt++;
    if (this.cnt > this.maxDepth) this.maxDepth = this.cnt;

    for (let i of arr) {
      this.calculateDepth(i);
    }

    this.cnt--;
    if (this.cnt == 0) {
      let reset = this.maxDepth;
      this.maxDepth = 0;
      return reset;
    }
  }
}

module.exports = {
  DepthCalculator
};
