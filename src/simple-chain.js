const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("( "+value+" )");
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || isNaN(position)) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.slice(0,position-1).concat(this.chain.slice(position));
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    console.log(this.chain);
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain =[];
    return result;
  }
};

module.exports = {
  chainMaker
};
