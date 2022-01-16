const assert = require('assert');

assert.equal(countBinarySubstrings('00110011'), 6);
assert.equal(countBinarySubstrings('10101'), 4);

// Create a 0 and 1 count starting at 0;
// Create a count variable
// loop through the string
// for each character, if it's 0, increment 0
// if it's a 1, increment 1
// if the last character was 

function countBinarySubstrings(str) {

  let numCharInPrevGroup = 0;
  let numCharInCurrGroup = 1;
  let sumOfValidSubstrings = 0;
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) numCharInCurrGroup++;
    else {
      sumOfValidSubstrings += Math.min(numCharInPrevGroup, numCharInCurrGroup);
      numCharInPrevGroup = numCharInCurrGroup;
      numCharInCurrGroup = 1;
    }
  }

  return sumOfValidSubstrings += Math.min(numCharInPrevGroup, numCharInCurrGroup);
}