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