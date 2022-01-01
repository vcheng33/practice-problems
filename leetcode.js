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

// capitalizeFirst
// given an array of strings, capitalize the first letter of each string in the array


const assert = require('assert');

assert.deepEqual(capitalizeFirst(['car', 'taco', 'banana']), ['Car', 'Taco', 'Banana']);

// function capitalizeFirst(strs){

//   let result = [];

//   if (strs.length === 0) return result;

//   result.push(strs[0].toUpperCase + strs.slice(1));

//   return result.concat(capitalizeFirst(strs.substring(1)));
// }

// function capitalizeFirst(strs){
//   let result = [];
//   if (strs.length === 0) return result;

//   let currWord = strs[0];
//   let capitalized = currWord[0].toUpperCase() + currWord.substring(1);
//   result.push(capitalized);
//   return result.concat(capitalizeFirst(strs.slice(1)));

// }

function capitalizeFirst(strs, result = []) {
    console.log({ strs, result });
    if (strs.length === 0) return result;

    result.push(strs[0][0].toUpperCase() + strs[0].substring(1));
    return capitalizeFirst(strs.slice(1), result);
}


const assert = require('assert');

// nestedEvenSum
// return the sum of all even numbers in an object which may contain nested objects

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

assert.equal(nestedEvenSum(obj1), 6);
assert.equal(nestedEvenSum(obj2), 10);


function nestedEvenSum(obj) {
    let sum = 0;
    for (let item in obj) {
        if (typeof obj[item] === 'object') {
            sum += nestedEvenSum(obj[item]);
        } else if (typeof obj[item] === 'number' && obj[item] % 2 === 0) {
            sum += obj[item]
        }
    }
    return sum;
}

const assert = require('assert');

// capitalizeWords
// given an array of words, return a new array containing each word capitalized


let words = ['i', 'am', 'learning', 'recursion'];
assert.deepEqual(capitalizeWords(words), ['I', 'AM', 'LEARNING', 'RECURSION']);

function capitalizeWords(words, result = []) {
    if (words.length === 0) return result;

    result.push(words[0].toUpperCase());
    return capitalizeWords(words.slice(1), result);
}

// stringify numbers
// takes in an object and finds all of the values which are numbers and converts them to strings

const assert = require('assert');

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


assert.deepEqual(stringifyNumbers(obj), {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
});

function stringifyNumbers(obj) {
    let newObj = {}
    for (let item in obj) {
        if (typeof obj[item] === 'number') {
            newObj[item] = obj[item].toString();
        } else if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
            newObj[item] = stringifyNumbers(obj[item]);
        } else {
            newObj[item] = obj[item];
        }
    }
    return newObj;
}

const assert = require('assert');

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

assert.deepEqual(collectStrings(obj), ["foo", "bar", "baz"]);

function collectStrings(obj) {
    let strs = [];

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            strs.push(...collectStrings(obj[key]));
        } else if (typeof obj[key] === 'string') {
            strs.push(obj[key]);
        }
    }
    return strs;
}

// binarySearch
// accepts a sorted array and a value and returns the index at which the value
// exists
// Otherwise return -1

const assert = require('assert');

assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
assert.equal(binarySearch([1, 2, 3, 4, 5], 3), 2);

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// anagrams
// given two strings, determine if the second string is an anagram of the first

const assert = require('assert');

assert.equal(validAnagram('', ''), true);
assert.equal(validAnagram('aaz', 'zza'), false);
assert.equal(validAnagram('anagram', 'nagaram'), true);
assert.equal(validAnagram('rat', 'car'), false);
assert.equal(validAnagram('awesome', 'awesom'), false);
assert.equal(validAnagram('qwerty', 'qeywrt'), true);
assert.equal(validAnagram('texttwisttime', 'timetwisttext'), true);

function validAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;

    let counter1 = {};
    let counter2 = {};

    for (let letter of str1) {
        counter1[letter] = (counter1[letter] || 0) + 1;
    }

    for (let char of str2) {
        counter2[char] = (counter2[char] || 0) + 1;
    }

    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) return false;
    }
    return true;
}

// averagePair
// given a SORTED array of integers and a target value
// determine if there is a pair of values in the array where the average of the pair
// equals the target average

const assert = require('assert');

assert.equal(averagePair([1, 2, 3], 2.5), true);
assert.equal(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), true);
assert.equal(averagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
assert.equal(averagePair([], 4), false);

function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let average = (nums[left] + nums[right]) / 2;

        if (average === target) return true;
        else if (average < target) left++;
        else right--;
    }
    return false;
}


// isSubsequence
// takes in two strings and checks whether the characters in the first string form
// a subsequence of the characters in the second string

const assert = require('assert');

assert.equal(isSubsequence('hello', 'hello world'), true);
assert.equal(isSubsequence('sing', 'sting'), true);
assert.equal(isSubsequence('abc', 'abracadabra'), true);
assert.equal(isSubsequence('abc', 'acb'), false);

function isSubsequence(str1, str2) {
    let pointer1 = 0;

    for (let pointer2 = 0; pointer2 < str2.length; pointer2++) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++
        }
    }

    return str1.length === pointer1;

}

// maxSubarraySum

// given an array of integers and a number
// finds the maximum sum of a subarray with the length of the number passed to the function

const assert = require('assert');

assert.equal(maxSubarraySum([100, 200, 300, 400], 2), 700);
assert.equal(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39);
assert.equal(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), 5);
assert.equal(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), 5);
assert.equal(maxSubarraySum([2, 3], 3), null);

function maxSubarraySum(nums, length) {
    if (length > nums.length) return null;

    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += nums[i]; // 1
    }

    let left = 0;
    let right = left + length; // 2
    let currSum = sum;

    while (right < nums.length) {
        currSum = currSum - nums[left] + nums[right]; // 1 +3 + 0 => 4 -4 -2 => -6
        sum = Math.max(sum, currSum); // 4
        left++; // 2
        right++; // 3
    }
    return sum;
}

// minSubArrayLen accepts an array of positive ints and a positive int

// function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed into the function
// if there isn't one return 0

const assert = require('assert');

assert.equal(minSubArrayLen([2, 3, 1, 2, 4, 3], 7), 2);
assert.equal(minSubArrayLen([2, 1, 6, 5, 4], 9), 2);
assert.equal(minSubArrayLen([2, 1, 6, 5, 4, 9], 9), 1);
assert.equal(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), 1);
assert.equal(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), 3);
assert.equal(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 5);
assert.equal(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), 2);
assert.equal(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), 0);

function minSubArrayLen(nums, target) {
    let start = 0;
    let end = 0;
    let minLen = +Infinity;
    let sum = 0;

    while (start < nums.length) {
        console.log({ sum, start, end, minLen, target });
        if (sum < target && end < nums.length) {
            sum += nums[end];
            end++;
        } else if (sum >= target) {
            minLen = Math.min(minLen, (end - start));
            sum -= nums[start];
            start++;
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

// findLongestSubstring

// accepts a string and returns the length of the longest substring with all distinct
// characters

const assert = require('assert');

assert.equal(findLongestSubstring(""), 0);
assert.equal(findLongestSubstring("rithmschool"), 7);
assert.equal(findLongestSubstring("thisisawesome"), 6);
assert.equal(findLongestSubstring("thecatinthehat"), 7);
assert.equal(findLongestSubstring("bbbbbb"), 1);
assert.equal(findLongestSubstring("longestsubstring"), 8);
assert.equal(findLongestSubstring("thisishowwedoit"), 6);

function findLongestSubstring(str) {
    let unique = new Map();
    let start = 0;
    let end = 0;
    let longest = 0;

    while (end < str.length) {
        if (!unique.has(str[end])) {
            unique.set(str[end], end);
            end++;
            longest = Math.max(longest, unique.size);
        } else {
            start = unique.get(str[end]) + 1;
            unique = new Map();
            unique.set(str[start], start);
            end = start + 1;
        }
    }
    return longest;
}

// countZeros
// given an array of 1,0 which has all 1's followed by all 0's
// return the number of 0's in the array

const assert = require('assert');

assert.equal(countZeroes([1, 1, 1, 1, 0, 0]), 2);
assert.equal(countZeroes([1, 0, 0, 0, 0]), 4);
assert.equal(countZeroes([0, 0, 0]), 3);
assert.equal(countZeroes([1, 1, 1, 1]), 0);

function countZeroes(nums) {
    let countOnes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) countOnes += 1;
    }
    return nums.length - countOnes;
}

// countZeros
// given an array of 1,0 which has all 1's followed by all 0's
// return the number of 0's in the array

const assert = require('assert');

assert.equal(countZeroes([1, 1, 1, 1, 0, 0]), 2);
assert.equal(countZeroes([1, 0, 0, 0, 0]), 4);
assert.equal(countZeroes([0, 0, 0]), 3);
assert.equal(countZeroes([1, 1, 1, 1]), 0);

// function countZeroes(nums) {
//   let countOnes = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) countOnes += 1;
//   }
//   return nums.length - countOnes;
// }

function countZeroes(nums) {
    let left = 0;
    let right = nums.length - 1;
    let lowestZero = +Infinity;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === 0) {
            lowestZero = Math.min(mid, lowestZero);
            right = mid - 1;
        } else if (nums[mid] === 1) {
            left = mid + 1;
        }
    }
    return lowestZero === Infinity ? 0 : nums.length - lowestZero;
}


// sortedFrequency
// given a sorted array and a number, return the occurrences of the number in the array;

const assert = require('assert');

assert.equal(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2), 4);
assert.equal(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3), 1);
assert.equal(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1), 2);
assert.equal(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4), -1);

function sortedFrequency(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let minTarget = +Infinity
    let maxTarget = -Infinity;

    // give minIdx of target
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            minTarget = Math.min(minTarget, mid);
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = minTarget || 0;
    right = nums.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            maxTarget = Math.max(maxTarget, mid);
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return (maxTarget === -Infinity && minTarget === +Infinity) ? -1 : maxTarget - minTarget + 1;
}

// constructNote
// accepts 2 strings, a message and some letters
// return true if the message can be built with the letters that you are given or it should return false

// assume only lowercase letters and no space or special characters in both the message and the letters

const assert = require('assert');

assert.equal(constructNote('aa', 'abc'), false);
assert.equal(constructNote('abc', 'dcba'), true);
assert.equal(constructNote('aabbcc', 'bcabcaddff'), true);

function constructNote(message, letters) {
    let letterCount = {}

    for (let l of letters) {
        letterCount[l] = (letterCount[l] || 0) + 1;
    }

    for (let m of message) {
        if (letterCount[m]) {
            letterCount[m]--;
        } else {
            return false;
        }
    }
    return true;
}

// findAllDuplicates
// array of positive integers
// some elements appear twice and others appear once
// find all the elements that appear twice in this array

const assert = require('assert');

assert.deepStrictEqual(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), [2, 3]);
assert.deepStrictEqual(findAllDuplicates([4, 3, 2, 1, 0]), []);
assert.deepStrictEqual(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]), [1, 2, 3]);

function findAllDuplicates(nums) {
    let counter = {};
    nums.forEach(num => counter[num] = (counter[num] || 0) + 1);

    let duplicates = [];
    for (let key in counter) {
        if (counter[key] === 2) duplicates.push(+key);
    }

    return duplicates;
}

// findPair
// given an UNSORTED array and a number , find if there exists a pair of elements in the array whose
// difference is n
// return true if the pair exists or false if it does not

const assert = require('assert');

assert.equal(findPair([6, 1, 4, 10, 2, 4], 2), true); // [1,2,4,4,6,10]
assert.equal(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1), true);
assert.equal(findPair([4, -2, 3, 10], -6), true); // [-2, 3, 4, 10]
assert.equal(findPair([6, 1, 4, 10, 2, 4], 22), false);
assert.equal(findPair([], 0), false);
assert.equal(findPair([5, 5], 0), true);
assert.equal(findPair([-4, 4], -8), true);
assert.equal(findPair([-4, 4], 8), true);
assert.equal(findPair([1, 3, 4, 6], -2), true);
assert.equal(findPair([0, 1, 3, 4, 6], -2), true);

function findPair(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] - nums[right] === target || nums[right] - nums[left] === target) {
            return true;
        } else if (nums[left] - nums[right]
  }

}

function findPair(nums, target) {
    let seen = new Set(nums);

    for (let num of nums) {
        let neededNum1 = target - num;
        let neededNum2 = num - target;
        if (seen.has(neededNum1) || seen.has(neededNum2)) return true;
    }
    return false;
}

// best time to buy and sell stock
// maximize profit by choosing a single day to buy one stock
// choosing a different to sell that stock
// return the maximum profit you can achieve from this transaction
// if no profit, return 0;

const assert = require('assert');

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);

function maxProfit(prices) {
    let min = +Infinity;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        console.log({ min, max }, 'prices[i]', prices[i]);
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);

    }
    return max;
}

const assert = require('assert');

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
    let fakeHead = new ListNode(-1);
    let prev = fakeHead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    prev.next = list1 || list2;
    return fakeHead.next;
}

const assert = require('assert');

assert.deepEqual(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]), ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"]);

assert.deepEqual(subdomainVisits(["9001 discuss.leetcode.com"]), ["9001 leetcode.com", "9001 discuss.leetcode.com", "9001 com"]);

// function subdomainVisits(domains) {
//   let counter = {};

//   for (let domain of domains) {
//     let [visits, subdomain] = domain.split(" ");
//     visits = Number(visits);
//     let [d1, d2, d3] = subdomain.split(".");
//     if (d3) {
//       counter[d3] = (counter[d3] || 0) + visits;
//       counter[`${d2}.${d3}`] = (counter[`${d2}.${d3}`] || 0) + visits;
//       counter[`${d1}.${d2}.${d3}`] = (counter[`${d1}.${d2}.${d3}`] || 0) + visits;    

//     }
//     if (!d3) {
//       counter[d2] = (counter[d2] || 0) + visits;
//       counter[`${d1}.${d2}`] = (counter[`${d1}.${d2}`] || 0) + visits;
//     }
//     console.log({counter});
//   }

//   let result = [];
//   for (let key in counter) {
//     let output = `${counter[key]} ${key}`;
//     result.push(output);
//   }
//   return result;
// }

function subdomainVisits(domains) {
    let counter = {};

    for (let domain of domains) {
        let [visits, subdomain] = domain.split(" ");
        visits = Number(visits);
        let subdomains = subdomain.split(".");

        while (subdomains.length) {
            let joined = subdomains.join(".");
            counter[joined] = (counter[joined] || 0) + visits;
            subdomains.shift();
        }
    }
    let result = [];

    for (let key in counter) {
        result.push(`${counter[key]} ${key}`);
    }
    return result;
}

const assert = require('assert');

assert.equal(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]), 1);

assert.equal(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]), 3);

function numIslands(island) {
    let count = 0;

    function findIsland(x, y) {
        if (island[x][y] === '1') {
            island[x][y] = '0';
        } else {
            return;
        }

        if (x < island.length - 1) {
            findIsland(x + 1, y);
        }

        if (y < island[x].length - 1) {
            findIsland(x, y + 1);
        }

        if (x > 0 && x < island.length) {
            findIsland(x - 1, y);
        }

        if (y > 0 && y < island[x].length) {
            findIsland(x, y - 1);
        }
    }

    for (let i = 0; i < island.length; i++) {
        for (let j = 0; j < island[i].length; j++) {
            if (island[i][j] === '1') {
                count++;
                findIsland(i, j);
            }
        }
    }
    return count;
}

// check the current coordinates to see if it's a 1, if so
// call the function again on the one below
// call the function on the left
// call the function on the right

const assert = require('assert');

const ALPHABET = new Set('abcdefghijklmnopqrstuvwxyz');

assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.equal(isPalindrome("race a car"), false);
assert.equal(isPalindrome(" "), true);



// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     let leftValidIndex = str[left].toLowerCase().charCodeAt() - 97 >= 0 && str[left].toLowerCase().charCodeAt() - 97 <= 26;
//     let rightValidIndex = str[right].toLowerCase().charCodeAt() - 97 >= 0 && str[right].toLowerCase().charCodeAt() - 97 <= 26
//     console.log({left, right, leftValidIndex, rightValidIndex});
//     if (!leftValidIndex) {
//       left++;
//     } else if (!rightValidIndex) {
//       right--;
//     } else if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//       return false;
//     } else {
//       left++;
//       right--;
//     }
//   }
//   return true;
// }

function isPalindrome(str) {
    // const ALPHABET = new Set ('abcdefghijklmnopqrstuvwxyz');

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (!ALPHABET.has(str[left].toLowerCase())) {
            left++;
        } else if (!ALPHABET.has(str[right].toLowerCase())) {
            right--
        } else if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

const assert = require('assert');

assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
assert.equal(lengthOfLongestSubstring("bbbbbb"), 1);
assert.equal(lengthOfLongestSubstring("pwwkew"), 3);

function lengthOfLongestSubstring(str) {
    let seen = {};
    let start = 0;
    let end = 0;
    let longest = 0;

    while (start < str.length && end < str.length) {

        if (seen[str[end]]) {
            longest = Math.max(longest, Object.keys(seen).length);
            start = seen[str[end]];
            end = start + 1;
            seen = {};
        } else {
            seen[str[end]] = end;
            end++;
        }
        console.log({ seen, start, end, longest });
    }
    return longest;
}

// mergeIntervals
// intervals[i] = [start, end];
// merge al overlapping intervals 
// return an array of the non-overlapping intervals that cover all of the intervals
// in the input

const assert = require('assert');

assert.deepEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
assert.deepEqual(merge([[1, 4], [4, 5]]), [[1, 5]]);
assert.deepEqual(merge([[1, 4], [2, 3]]), [[1, 4]]);

function merge(intervals) {
    if (intervals.length === 1) return intervals;

    let merged = [];
    intervals.sort((a, b) => a[0] - b[0]);

    for (let [start, end] of intervals) {
        if (merged.length === 0 || start > merged.at(-1)[1]) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1] = [merged.at(-1)[0], Math.max(end, merged.at(-1)[1])];
        }
    }
    return merged;
}

class TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);
    let newNode = new TreeNode(nums[mid]);
    newNode.left = sortedArrayToBST(nums.slice(0, mid));
    newNode.right = sortedArrayToBST(nums.slice(mid + 1));

    return newNode;
}

const assert = require('assert');

// assert.equal(climbStairs(3), 3);
// assert.equal(climbStairs(2), 2);
// assert.equal(climbStairs(5), 8);


// // function climbStairs(n) {
// //   let a = 1;
// //   let b = 1;
  
// //   while (n--) {
// //     // a = (b += a) - a;
// //     b += a;
// //     a = b - a;
// //   }
// //   return a;
// // }

// function climbStairs(n, memo = {}) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
  
//   if (memo[n]) return memo[n]
//   let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   memo[n] = res;
//   return res;

// }

const assert = require('assert');

assert.equal(subarraySum([1, 1, 1], 2), 2);
assert.equal(subarraySum([1, 2, 3], 3), 2);

function subarraySum(nums, target) {
    let counter = { 0: 1 };
    let sum = 0;
    let res = 0;

    for (let num of nums) {
        console.log({ num, counter, sum, res });
        sum += num;
        let neededNum = sum - target;
        res += counter[neededNum] || 0;

        counter[sum] = (counter[sum] || 0) + 1;

    }
    return res;
}

// 3Sum

const assert = require('assert');

assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
assert.deepEqual(threeSum([]), []);
assert.deepEqual(threeSum([0]), []);

function threeSum(nums) {
    let result = [];

    if (nums.length < 3) return result;
    nums.sort((a, b) => a - b);

    let target = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) break;

        if (i > 0 && nums[i - 1] === nums[i]) continue;
        let j = i + 1
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                j++;
                k++;
            } else if (sum < target) {
                j++;
            } else {
                k--
            }
        }
    }
    return result;
}