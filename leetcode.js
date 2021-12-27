// Balanced String

// Balanced string have an equal number of L and R characters.
// Split it into the maximum amount of balanced strings
// Return the maximum amount of balanced strings

// "RLRRLLRLRL" => 4 (RL, RRLL, RL, RL)
// "RLLLLRRRLR" => 3 (RL, LLLRRR, LR)


// Create a left counter and a right counter and a balanced counter
// Create a start pointer and a current index pointer
// loop through each character in the string. If the difference between the L & R
// counters exceeds 2, add one to the balanced counter
// Set the starter pointer to the current index pointer and then continue. Ensure
// current index pointer increments
// return balanced counter

function balancedStringSplit(str) {
    let left, right, counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'L') left += 1;
        if (str[i] === 'R') right += 1;

        if (left === right && left > 0) {
            counter += 1;
            left = 0;
            right = 0;
        }
    }
    return counter;
}


// Count Items Matching a Rule
// given an array of arrays, rulekey, rulevalue
//[[type, color, name],...]
// return the count of items that match at least one
// of the rules

// items = [
//  ['phone', 'blue', 'pixel'],
//  ['computer', 'silver', 'lenovo'],
//  ['phone', 'gold', 'iphone'],
// ]
// ruleKey = 'color', ruleValue = 'silver'

// Create a counter starting at 0
// loop through the items array and destructure
// each element into type, color and name
// check that they keyrule has the matching rule Value
// if it does, add one to the counter
// return the counter at the end

// function countMatches(items, keyRule, keyValue) {
//     let counter = 0;

//     for (let item of items) {
//         let [type, color, name] = item;

//         if (type === keyValue && keyRule ==
            
//             || color === keyValue || name === keyValue) {
//             counter += 1;
//         }
//     }
//     return counter;
// }

function countMatches(items, keyRule, keyValue) {
    let indices = {
        'type': 0,
        'color': 1,
        'name': 2,
    }

    let matches = items.filter(items[indices[keyRule]] === keyValue);
    return matches.length;
}


// Count Number of Pairs with Absolute Difference K

// Given an integer array and an integer k
// Return num pairs where i < j and absolute diff = k

// [1,2,2,1] k = 1 => 4
// [1,3] k = 3 => 0

// Create a count variable starting at 0
// Create a nested loop for i and then j = i + 1
// Check if the absolute difference of nums[i] - nums[j]
// equals k. If so, add one to the counter
// return the counter at the end of the function


function countDifference(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i]-nums[j]) === k) {
                count += 1;
            }
        }
    }
    return count;
}

// Minimum Number of Moves to Seat Everyone

// seats = [3,1,5], students = 2, 7, 4 => 4
// seats = [4,1,5,9], students = [1,3,2,6] => 7

// Sort seats and students
// Create a count variable starting at 0;
// loop through 0 - seats.length - 1;
// Add the abs variance between seats[i] and students[i];
// return count

function sortNumerically(a,b) {
    return a - b;
} 

function minMovesToSeat(seats, students) {
    seats.sort(sortNumerically);
    students.sort(sortNumerically);
    let count = 0;

    for (let i = 0; i < seats.length; i++) {
        count += Math.abs(seats[i] - students[i]);
    }
    return count;
}

// Sum of All Odd Length Subarrays
// Given an array of positive integers, calculate the sum of
// all possible odd-length subarrays

// [1,4,2,5,3] => 58
// [1,2] => 3

// Create a sum variable starting at 0
// Create start and end variables that start at 0 and end = 0
// loop through the array with start and end index.
// If the variance betwee start and end index is even, sum all
// the numbers inbetween
// return sum

function sumOddLengthSubArrays(arr) {
    let sum = 0;
    let start;
    let end;

    for (start = 0; start < arr.length; start++) {
        for (end = start; end < arr.length; end++) {
            if ((end - start) % 2 === 0) {
                sum += sumSubArray(arr, start, end);
            }
        }
    }

    return sum;
}

function sumSubArray(arr, start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += arr[i];
    }

    return sum;
}

// Find Anagram Mappings
// nums1 and num2 integer arrays where num2 is an anagram of num1 
// Both arrays may contain duplicates.
// Return an array of the index mapping from nums1 to nums2 where 
// mapping[i] = j

// nums1 = [12,28,46,32,50] nums2 = [50,12,32,46,28] output = [1,4,3,2,0]

// Create an output array
// Create a Map for nums2 with it's index 
// loop through nums1 and find the index of that num in num2.
// Add that number to the output array
// return the output array

function anagramMappings(nums1, nums2) {
    let output = [];
    let indices = new Map();

    nums2.forEach((num, i) => indices.set(num,i));

    for (let n of nums1) {
        output.push(indices.get(n));
    }

    return output;
}

// Count of Matches in Tournament
// n integer for the num of teams in a tournament
// if n is even, n/2 advances to the next round, num matches = n/2
// if n is odd, n-1/2 + 1 advance to the next round, num matches = n- 1/2
// return num of matches played

// Create a function that takes in n and num matches
// if (n < 1) return num matches
// if (n % 2 === 0) call the function with (n/2) and add n/2 to matches
// otherwise call the function with n-1/2


const assert = require('assert');

assert.equal(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]), 7);
assert.equal(minTimeToVisitAllPoints([[3, 2], [-2, 2]]), 5);

// Check if both x and y are less than the next target points
// If so, increment both by 1 and add 1 second
// If only x if less than the target, increment x by 1 and add 1 second
// If only y is less than the target increment y by 1 and add 1 second

function minTimeToVisitAllPoints(arr) {

    // If there are only one set of coordinates, there's nowhere to go!
    if (arr.length < 2) return 0;
    let seconds = 0;

    for (let i = 1; i < arr.length; i++) {
        // Calculate the distances between current point and previous point for each axis
        let x = Math.abs(arr[i - 1][0] - arr[i][0]);
        let y = Math.abs(arr[i - 1][1] - arr[i][1]);

        // For each distance the time will be the max value between X and Y
        // So we can get the total time by plus the max value of each distance
        seconds += Math.max(x, y);
    }

    return seconds;

}

const assert = require('assert');

// Flipping an Image
// Given an nxn binary matrix, image, flip the image horizonally ex. [1,1,0] => [0,1,1]
// then invert it [0,1,1] => [1,0,0]
// And return the resulting image

assert.deepEqual(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]), [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);
assert.deepEqual(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]), [[1, 0, 0], [0, 1, 0], [1, 1, 1]]);




function flipAndInvertImage(image) {

    for (let inner of image) {
        inner.reverse();

        for (let i = 0; i < inner.length; i++) {
            if (inner[i] === 1) inner[i] = 0;
            else inner[i] = 1;
        }
    }

    return image;
}


const assert = require('assert');

// Given an array of integers nums and integer target, return indices of the two numbers such
// that they add up to target

// there is exactly one solution and you may not use the same element twice
// you can return the answer in any order

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);

// Create an object with the num and the index as we loop through the arr
// For each num in the arr, if the difference between the num and the target is already in the 
// object, return the indices of the current num and num in the obj

// Otherwise, add the current num to the object

function twoSum(nums, target) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        let neededNum = target - nums[i];

        if (seen[neededNum] !== undefined) return [seen[neededNum], i];
        else (seen[nums[i]] = i);
    }

}

const assert = require('assert');

// Valid Parentheses
// Given a string (s) containing the characters (){}[], determine if the input string is valid
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets
// 2. Open brackets must be closed in the correct order

assert.equal(isValid("()"), true);
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("(]"), false);

// Create a mapping of matching brackets
// Create a stack 
// loop through the string
// If the current character is not a matching pair to the last item in the stack, add it to the stack
// If the current character is a matching pair to the last item in the stack, pop the last item off the
// stack

// return whether there is anything in the stack or not

function isValid(s) {
    const MAPPING = { "(": ")", "[": "]", "{": "}" };
    let stack = [];

    for (let char of s) {
        if (MAPPING[char]) stack.push(char);
        else if (MAPPING[stack[stack.length - 1]] === char) stack.pop();
        else return false;
    }
    return stack.length === 0;
}


// Best Time to Buy and Sell Stock

// Given an array prices where prices[i] is the price of a given stock on the ith day.
// Maximize profits by choosing a single day to buy one stock and choosing a different day in the future
// to sell that stock
// return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

const assert = require('assert');

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
assert.equal(maxProfit([2, 4, 1]), 2);
assert.equal(maxProfit([3, 2, 6, 5, 0, 3]), 4);

// find the indexof the min num in the array
// Create a slice of the remaining array and find the max of those numbers
// return the max of the difference or 0

// loop through the array and create another array of all nums that have a num after it that is increasing
// find the min of those numbers

// function maxProfit(prices) {
//   let min = Math.min(...prices);
//   let minIdx = prices.indexOf(min);

//   let max = Math.max(...prices.slice(minIdx));
//   console.log({max, min});

//   return Math.max(max-min, 0);
// }

// function maxProfit(prices) {
//   let smallerNums = [];

//   for (let i = 0; i < prices.length - 1; i++) {
//     if (prices[i] < prices[i+1]) smallerNums.push(prices[i]);
//   }

//   if (smallerNums.length === 0) return 0;

//   let min = Math.min(...smallerNums);
//   let minIdx = prices.indexOf(min);

//   let max = Math.max(...prices.slice(minIdx));

//   return Math.max(max-min, 0);

// }

function maxProfit(prices) {
    let min = +Infinity;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;

}

// IS SUBSEQUENCE
// Given two strings (s & t) return true if s is a subsequence of t or false otherwise;

// s = "abc", t = "ahbgdc" => true
// s = "axc", t = "ahbgdc" => false
// s = "abc", t = "abc" => true


// if s === t return true;
// Find the longer string
// Create a result string
// loop through the string and if the letter is in the shorter word, add it to result string
// at the end return if the two strings are the same

const assert = require('assert');

assert.equal(isSubsequence("abc", "ahbgdc"), true);
assert.equal(isSubsequence("axc", "ahbgdc"), false);
assert.equal(isSubsequence("abc", "abc"), true);
assert.equal(isSubsequence("abc", ""), false);
assert.equal(isSubsequence("ab", "baab"), true);

function isSubsequence(s, t) {
    if (s === t) return true;

    let i = 0, j = 0;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;

}

// input: path = "/a/./b/"
//		 => ['a', ., 'b'] => result = pathOnly = ['a', 'b']
//		 => a/b
// output: "/a/b/"

// input: path = "/a/././b/"
// output: "/a/b/"

// input: path = "/a/../b/" => [ 'a', .. , 'b'] => 
// output: "/b/"

// input: "/home//foo/" => [ 'home', '', 'foo'] => 
//		=> ['home', 'foo']
// output: "/home/foo/"

// input: "/a/b/../../" => [ 'a', 'b', .. , ..]
// output: "/"

// split the string into parts using / 
// create pathOnly = []
// if it's '..' => add to a counter
// take a slice of the pathOnly array and omit the last counter num of elements (ex. if there are 2 in the counter array - last 2 elements)
// return the joined array of pathOnly

// OPPORTUNITIES
// Ask more clarifying questions at the beginning
// Be sure to understand the problem statement
// Edge case questions
// Assumptions that I'm making
// More test examples to make sure you understand the problem
// Talk about my thinking and process more
// Getting the basic functionality running
// Space and time complexity
// What data structures am I using
// Refactoring after
// Edge cases: Empty, Valid inputs, one input, 
// Data structures
// More practice 
// Using Queues and Stacks for Front End
// Optimizing Queues
// Building things on the spot (vanilla JS or react)

function dir(str) {
    // your function here
    let splitStr = str.split("/");
    let pathOnly = []; // Stack
    let counter = 0;

    for (let elem of splitStr) {
        if (elem === '..') {
            pathOnly.pop();
        } else if (elem !== '.' && elem !== '..') {
            pathOnly.push(elem);
        }
    }

    let result = pathOnly.slice(0, pathOnly.length - counter); // Not needed
    result = result.join("/");

    // 
    return result.replaceAll("//", "/");
}

console.log(dir("/a/./b/"));
console.log(dir("/a/././b/"));
console.log(dir("/a/../b/"));
console.log(dir("/home//foo/"));
console.log(dir("/a/b/../../"));
console.log(dir("/home//foo//hello/"));

const assert = require('assert');

function twoSum(nums, target) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        let neededNum = target - nums[i];

        if (seen[neededNum] !== undefined) return [seen[neededNum], i];
        else seen[nums[i]] = i;
    }
}

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);

function isValid(str) {
    let matchingChar = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    let checkStack = [];

    for (let char of str) {
        if (matchingChar[char]) checkStack.push(char);
        else if (char === matchingChar[checkStack[checkStack.length - 1]]) {
            checkStack.pop();
        } else if (char !== matchingChar[checkStack[checkStack.length - 1]]) {
            return false;
        }
    }
    return checkStack.length === 0;
}

assert.equal(isValid("()"), true);
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("(]"), false);

// function isSubsequence(s,t) {
//   let sPointer = 0;
//   let tPointer;

//   for (tPointer = 0; tPointer < t.length; tPointer++) {
//     if (s[sPointer] === t[tPointer]) {
//       sPointer++;
//     }
//   }
//   return sPointer === s.length;
// }


// assert.equal(isSubsequence("abc", "ahbgdc"), true);
// assert.equal(isSubsequence("axc", "ahbgdc"), false);
// assert.equal(isSubsequence("abc", "bca"), false);
// assert.equal(isSubsequence("abc", "abdef"), false);

// Create a max variable and set it to 0
// Create a counter variable that starts at 0
// find the min length of all three words
// Loop through 0 to min. 
// If all three words have that letter 

// function longestCommonPrefix(strs){
//   let common = strs[0][0];
//   let i = 0;

//   for (let str of strs) {

//   }

//   for (let j = 0; j < strs.length; j++) {
//     if (
//   }

// }

// assert.equal(longestCommonPrefix(["flower","flow","flight"]),"fl");
// assert.equal(longestCommonPrefix(["dog","racecar","car"]), "");


// canConstructWord
// accepts 2 strings: a word and some letters
// function should return true if the word can be built with the letters that are
// you are given
// otherwise return false

function canConstructWord(word, letters) {
    let lettersCounter = {};
    let wordCounter = {};

    for (let l of letters) {
        lettersCounter[l] = (lettersCounter[l] || 0) + 1;
    }

    for (let w of word) {
        wordCounter[w] = (wordCounter[w] || 0) + 1;
    }

    for (let letter in wordCounter) {
        if (wordCounter[letter] > lettersCounter[letter]) return false;
    }

    return true;
}


assert.equal(canConstructWord('aa', 'abc'), false);
assert.equal(canConstructWord('abc', 'dcba'), true);
assert.equal(canConstructWord('aabbcc', 'bcabcaddff'), true);


// averagePair
// Given a sorted array of integers and a target average, determine if there is
// a pair of values in the array where the average of the pair equals the target
// average. There may be more than one pair that matches the average target

function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;


    while (left < arr.length) {
        let average = (arr[left] + arr[right]) / 2

        if (average === target) return true;
        if (average < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}


assert.equal(averagePair([1, 2, 3], 2.5), true);
assert.equal(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), true);
assert.equal(averagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
assert.equal(averagePair([], 4), false);


// twoArrayObject
// Accepts 2 arrays of varying lengths
// 1st array of keys, second array of values
// return an object created from the keys and values
// if not enough vales, the rest of keys should a value of null
// if not enoug keys, ignore the rest of values

assert.deepEqual(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]), { 'a': 1, 'b': 2, 'c': 3, 'd': null });
assert.deepEqual(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]), { 'a': 1, 'b': 2, 'c': 3 });
assert.deepEqual(twoArrayObject(['x', 'y', 'z'], [1, 2]), { 'x': 1, 'y': 2, 'z': null });

function twoArrayObject(keys, values) {
    let result = {};

    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i] || null;
    }

    return result;
}


// sameFrequency
// given two positive integers, find out if the two numbers have the same frequency of digits

assert.equal(sameFrequency(182, 281), true);
assert.equal(sameFrequency(34, 14), false);
assert.equal(sameFrequency(3589578, 5879385), true);
assert.equal(sameFrequency(22, 222), false);

function frequencyCounter(str) {
    let counter = {}

    for (let char of str) {
        counter[char] = (counter[char] || 0) + 1;
    }

    return counter;
}

function sameFrequency(num1, num2) {
    let counter1 = frequencyCounter(num1.toString());
    let counter2 = frequencyCounter(num2.toString());
    return JSON.stringify(counter1) === JSON.stringify(counter2);
}


// SeparatePositive
// accepts an array of non-zero integers
// Separate the positive integers to the left and the negative integers to the right
// positive numbers and negative numbers need not be in sorted order
// done in place

// assert.deepEqual(separatePositive([2, -1, -3, 6, -8, 10]), [2, 10, 6, -3, -1, -8]);
// assert.deepEqual(separatePositive([5, 10, -15, 20, 25]), [5, 10, 25, 20, -15]);
// assert.deepEqual(separatePositive([-5, 5]), [5,-5]);
// assert.deepEqual(separatePositive([1, 2, 3]), [1, 2, 3]);

function separatePositive(arr) {
    let currIdx = 0;
    // let swapIdx = 0;

    for (let swapIdx = 0; swapIdx < arr.length; swapIdx++) {
        // console.log({arr, currIdx, swapIdx});
        if (arr[currIdx] > 0) {
            currIdx++;
            swapIdx = currIdx;
        }
        if (arr[swapIdx] > 0) {
            [arr[currIdx], arr[swapIdx]] = [arr[swapIdx], arr[currIdx]];
        }
    }
    // console.log("final return", arr);
    return arr;
}

//isSubsequence
// takes in two strings and checks whether the characters in the first string form a
// subsequence of the characters in the second string

assert.equal(isSubsequence('hello', 'hello world'), true);
assert.equal(isSubsequence('sing', 'sting'), true);
assert.equal(isSubsequence('abc', 'abracadabra'), true);
assert.equal(isSubsequence('abc', 'acb'), false);

function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 < str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
            pointer2++;
        } else {
            pointer2++;
        }
    }
    // console.log({pointer1, pointer2, str1, str2});
    return pointer1 === str1.length;
}

// countPairs
// given an array of integers and a number, find the number of pairs of integers
// in the the array whose sum is equal to the second parameter. You can assume
// there there will be no duplicate values in the array

assert.equal(countPairs([3, 1, 5, 4, 2], 6), 2);
assert.equal(countPairs([10, 4, 8, 2, 6, 0], 10), 3) // 3 (2,8, 4,6, 10,0)
assert.equal(countPairs([4, 6, 2, 7], 10), 1); // (4,6)
assert.equal(countPairs([1, 2, 3, 4, 5], 10), 0);
assert.equal(countPairs([1, 2, 3, 4, 5], -3), 0);
assert.equal(countPairs([0, -4], -4), 1);
assert.equal(countPairs([1, 2, 3, 0, -1, -2], 0), 2);

function countPairs(arr, target) {

    let count = 0;
    let nums = new Set();

    for (let num of arr) {
        let neededNum = target - num;
        if (nums.has(neededNum)) {
            count++;
        } else {
            nums.add(num);
        }
    }
    return count;
}

// longestFall
// accepts an array of integers and returns the length of the longest consecutive decrease
// of arrays

assert.equal(longestFall([5, 3, 1, 3, 0]), 3);
assert.equal(longestFall([2, 2, 1]), 2);
assert.equal(longestFall([2, 2, 2]), 1);
assert.equal(longestFall([5, 4, 4, 4, 3, 2]), 3);
assert.equal(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]), 5);
assert.equal(longestFall([]), 0);

// Create a counter starting at 0;
// Create a longest variable starting at 0;
// Let currNum = +Infinity;
// loop through the array and adding to the counter if the number is less than currNum
// make the number into the currNum.
// If the number is equal or greater than currNum, compare the current counter to the longest
// variable and update the longest to the larger of the two
// reset the counter to 0;

function longestFall(nums) {
    let longest = 0;
    let counter = 0;
    let currNum = +Infinity;

    for (let i = 0; i < nums.length; i++) {
        // console.log({i, currNum, nums, longest,counter});
        if (nums[i] < currNum) {
            counter += 1;
            currNum = nums[i];
        } else {

            counter = 0;
            currNum = +Infinity;
            i--
        }
        longest = Math.max(longest, counter);
        // console.log("end", {i, currNum, nums, longest,counter});
    }

    return longest;
}


// PivotIndex
// Accepts an array of integers and returns the pivot index where the sum of the items
// on the left equal to the sum of the items on the right
// if there are more than one valid pivot index, return the smallest value

assert.equal(pivotIndex([1, 2, 1, 6, 3, 1]), 3);
assert.equal(pivotIndex([5, 2, 7]), -1);
assert.equal(pivotIndex([-1, 3, -3, 2]), 1);
assert.equal(pivotIndex([]), -1);

// Starting at index 1, loop through the array
// left side = arr[1] and right = sum of the remaining nums excluding the pivot point
// if left !== right, add the pivot num to left, subtract the first number of the right side
// check again
// if left reaches the end of the array, then return -1

function pivotIndex(nums) {
    // if (nums.length === 0) return -1;

    let left = nums[0];
    let right = nums.reduce((a, b) => a + b, 0) - left - nums[1];
    let pivot = 1;

    while (left < nums.length) {
        if (left === right) return pivot;
        else {
            left += nums[pivot];
            pivot += 1;
            right -= nums[pivot];
        }
    }
    return -1;
}


// longest commonPrefix

// given an array of strings,f ind the longest common prefix string
// if there is no common prefix return ''

assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), 'fl');
assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), '');


// Create a result variable '';
// loop through each word in the array. If the first letter of the array === add it to the 
// result variable

function longestCommonPrefix(strs) {
    let result = '';
    let shortestLength = Math.min(...strs.map(str => str.length));


    for (let i = 0; i < shortestLength; i++) {
        let currChar = strs[0][i];

        if (strs.every(str => str[i] === currChar)) {
            result += currChar;
        } else {
            break;
        }
    }
    return result;
}