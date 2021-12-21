// string
// returns reversed string
// w/o reverse

// 'string' -> 'gnirts'
// '' -> ''
// 'rithmschool' -> 'loohcsmhtir'

// create a reversed string variable that starts off empty and will
// be added to

// loop through the string starting from the end of the string to the
// beginning of the string

// add each letter to reversed

// return reversed;

function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i > 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

"use strict";
// accepts a string
// returns true/false
// if all characters in the string are unique

// any character is valid
// capitalization is different

// 'hello' => false
// 'a3tgaw' => false
// 'a36w' => true
// '' => true

// create a counter object that will loop through
// each letter in the string
// if the letter is already in the object, we'll return false;
// if the letter is not in the object, we'll continue looping
// return true

function uniqueString(string) {
    let counter = {}

    for (let char of string) {
        if (counter[char]) return false;
        counter[char] = 1;
    }
    return true;
}

// array of n random numbers
// between 1-100
// return arry only has unique numbers

function randomNums(n) {
    let nums = [];

    while (nums.length < n) {
        let randomNum = Math.ceil(math.random() * 100);
        if (!nums.includes(randomNum)) {
            nums.push(randomNum);
        }
    }
    return nums;
}

// array of strings
// return length of longest string

// ['hi', 'hello', 'bonjour'] => 7
// ['asdf', 'ea', 'adg3gasd'] => 8

function lengthLongestString(arr) {
    let longest = 0;

    for (let word of arr) {
        longest = Math.max(longest, word.length);
    }

    return longest;
}

"use strict"
// acccepts array of char
// returns new arr
// with consenants replaced with stars
// will get uppercase and lowercase

// ['a', 'b', 'c', 'd', 'e', 'f', 'g'] => ['a', '*', '*', '*', 'e', '*', '*']

const VOWELS = 'aeiou';

function convertConsonantsToStars(arr) {
    let converted = [];

    for (let char of arr) {
        if (!VOWELS.includes(char.toLowerCase())) {
            converted += '*';
        } else {
            converted += char;
        }
    }
    return converted;
}

// given array of unknown length with nums that either +/-
// if any of two integers add up to 0, return true
// don't assume that the numbers are sorted! Should clarify that point

// [-1, 0, 1] // true
// [-2, -1, 0, 1] // true
// -1 0
// [-1, 2, 3, 4] // false
// 
// two pointers (on left and right)
// loop through until I get to the midPoint and if the sum of the left + right === 0; return true
// otherwise, if the sum < midPoint move the left to the midPoint
// if the sum > midPoint move the right to the midPoint
// end return false

function addsToZero(arr) {
    let left = arr[0];
    let right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right)/2);
        let sum = arr[left]+ arr[right];
        if (sum === 0) return true;

        if (sum < arr[mid])
    }
}



