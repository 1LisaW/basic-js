const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isForwardFlag=true){
    this.isForwardFlag = isForwardFlag;
  }

  startCharCode = "A".charCodeAt();
  alphabetLength = "Z".charCodeAt() - this.startCharCode + 1;

  getDiff = function (char) {
    return char.charCodeAt() - this.startCharCode;
  };

  getChar(char, shift) {
    const txtCode = char.charCodeAt();
    if (/[^A-Z]/.test(char)) {
      return char;
    }
    const newCharCode = this.startCharCode + (txtCode - this.startCharCode + shift + this.alphabetLength) % (this.alphabetLength);
    return String.fromCharCode(newCharCode);
  }
  eachChar(text, callback) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      result = result + callback(text[i], i);
    }
    return result;
  }
  getKeyShift(key, index) {
    return this.getDiff(key[index % key.length])
  };

  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
      return false;
    };
    // console.debug("encr",text, key);
    text = text.toUpperCase();
    key = key.toUpperCase();
    if (!this.isForwardFlag) {
      text = text.split("").reverse().join("");

    }
    let j = 0;
    return this.eachChar(text, (char, i) => {
      if (i > 0 && /[A-Z]/.test(text[i - 1])) j++;
      return this.getChar(char, this.getKeyShift(key,j));
    });
  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
      return false;
    };
    // console.debug("decr", text, key);
    text = text.toUpperCase();
    key = key.toUpperCase();
    if (!this.isForwardFlag){
      text = text.split("").reverse().join("");

    }
    let j = 0;
    return this.eachChar(text, (char, i) => {
      if (i>0 && /[A-Z]/.test(text[i-1]) ) j++;
      return this.getChar(char, -this.getKeyShift(key, j));
    });
  }
}

module.exports = {
  VigenereCipheringMachine
};
