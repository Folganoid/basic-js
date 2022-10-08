const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  chain: [],
  chainLength: 0,

  getLength() {
    return this.chainLength;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    this.chainLength++;
    return this;
  },
  removeLink(position) {
      if (this.chain[position-1] === undefined) {
        this.chain = [];
        this.chainLength = 0;
        throw new Error('You can\'t remove incorrect link!');
      }
      this.chain.splice(position-1, 1);
      return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    this.chainLength = 0;
    return res;
  }
};

module.exports = {
  chainMaker
};
