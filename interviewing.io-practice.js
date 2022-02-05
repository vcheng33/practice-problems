// 1. 'https://leetcode.com/problems/isomorphic-strings/'
// 2. 'https://leetcode.com/problems/strobogrammatic-number/'


// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example:
// s = "egg", t = "add"
// e->a g->d, s-> add s and t are isomorphic. return True

// s = "eye",  t = "add"

// s = 'hello', t = 'suggt' => true
// s = 'goodbye', t = 'hello' => false
// s = '' , t = 'hello' => false
// s = 'hello', t = '' => false
// s = 'a' t = 'b' => true
// s = '' and t = '' => true


// create two counter objects for s and t that has the letter and an array of indices as it's value
// { e: [0], g: [1,2] } => [[0],[1,2]]
// { a: [0], d: [1,2] } =>

// set {e: 1, g: 2 }
// { 0: 1, 1: 2, 2: 2 }

// set { a => 1, d => 2 }
// { 0: 1, 1: 2, 2: 2 }

// loop through one of the objects to compare against the other and if any key & value pair does not match the second object, return false

// otherwise, when we finish looping, we can return true


// check the length of s and t
// if (s.length !== t.length) return false;
// if (s.length === 1) return true;
// if (s.length === t.length && s.length === 0) return true;
// if (s.length === 0 || t.length === 0) return false;

// two string s and t of the same length>0
// 

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  //if (s.length === 1) return true;
  //if (s.length === t.length && s.length === 0) return true;
  //if (s.length === 0 || t.length === 0) return false;
  
  let sSet = new Map();
  let tSet = new Map();
  
  let sCounter = createCounter(s);
  let tCounter = createCounter(t);
  
  
  for (let k = 0; k < sCounter.length; k++) {
    if (sCounter[k] !== tCounter[k]) return false;
  }
  
  
  return true;
}


function createCounter (s) {
  let sSet = new Map();
  let sCounter = [];
  
  for (let i = 0; i < s.length; i++) {
    if (sSet.has(s[i])) {
      sCounter.push(sSet.get(s[i]));
    } else {
      // let counter = "";
      sSet.set(s[i] , sSet.size + 1);
      sCounter.push(sSet.size + 1);
    }
  }
  
  return sCounter;
}
// return the array

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('egg', 'aaa'));
console.log(isIsomorphic('goodbye', 'hello'));
console.log(isIsomorphic('', ''));
console.log(isIsomorphic('', 'aaa'));


// "egg"  e  g  g Map = {e: a, g: a}
// "add"  a  d  d

// "egg"
// "aaa"

  

// s = "egg", t = "add"
// e->a g->d, s-> add s and t are isomorphic. return True

// s = "eye",  t = "add"

// s = 'hello', t = 'suggt' => true
// s = 'goodbye', t = 'hello' => false
// s = '' , t = 'hello' => false
// s = 'hello', t = '' => false
// s = 'a' t = 'b' => true
// s = '' and t = '' => true



// strobogrammatic number:

// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// "1" is S number,
// 1, 8, 0
// "69" is S number
// "232" => False
// "69" => True
// "619" => True
// "8811" => False
// "699" => False

// "698.869"

// {0:0, 1:1, 6:9, 8:8, 9:6}



// create a variable with the numbers that are strobogrammatic { 1, 8. 0 }
// creat a second variable with the numbers that are MAYBE strobogrammatic { 6 : 9 }

// loop through the string and go digit by digit to see if it's in the strobogrammatic or MAYBE lists
// if the digit is not, then we can return false
// otherwise

// is palindrome 


function isStrobogrammatic(str) {
  const strobogrammaticChars = { 0:0, 1:1, 8:8, 6:9, 9:6 };

  for (let i = 0; i < str.length; i++) {
    if (strobogrammaticChars[str[i]] !== strobogrammaticChars[str[str.length - i - 1]]) return false;
  }

  return true;
}





















































