// a string s of lowercase letters
// two adjacent and equal letters and removing them
// repeatedly make duplicate removals on s until we no longer can
// return the final string after all such duplicate removals have been made

// abbaca => 'ca'
// azxxzy => 'ay'

const assert = require('assert');

assert.equal(removeDuplicates('abbaca'), 'ca');
assert.equal(removeDuplicates('azxxzy'), 'ay');

function removeDuplicates(s) {
    let unmatched = [];

    for (let i = 0; i < s.length; i++) {
        if (unmatched[unmatched.length - 1] === s[i]) {
            unmatched.pop();
        } else {
            unmatched.push(s[i]);
        }
    }

    return unmatched.join("");
}

// add strings
// given two non-negative integers (num1, num2) which are represented as strings
// return the sum of num1 and num2 as a string
// do this without converting the inputs to integers directly

// create a sum variable starting at 0;
// create a carryover variable starting at 0;
// create a results array

// create an idx1 and idx2 that start at the end of each num
// loop through the nums using a while loop 
// sum the two digits 
// if the sum is greater than 9, we should subtract 10 and add one to the carryover
// we can then push sum to our results

const assert = require('assert');

assert.equal(addStrings('11', '123'), '134');
assert.equal(addStrings('456', '77'), '533');
assert.equal(addStrings('0', '0'), '0');

// function addStrings(num1, num2) {
//     let sum = 0;
//     let carryover = 0;
//     let results = [];
//     let maxLength = Math.max(num1.length, num2.length);

//     for (let i = 0; i < maxLength; i++) {
//         if (num1[num1.length - 1 - i]) sum += Number(num1[num1.length - 1 - i]);
//         if (num2[num2.length - 1 - i]) sum += Number(num2[num2.length - 1 - i]);

//         if (sum > 9) {
//             sum -= 10;
//             carryover = 1;
//         }

//         results.push(sum);
//         sum = carryover;
//         carryover = 0;
//     }

//     if (sum > 0) results.push(sum);

//     return results.reverse().join("");
// }

function addStrings(num1, num2) {
    let sum = 0;
    let carryover = 0;
    let results = [];
    let maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength; i++) {
        if (num1[num1.length - 1 - i]) sum += Number(num1[num1.length - 1 - i]);
        if (num2[num2.length - 1 - i]) sum += Number(num2[num2.length - 1 - i]);

        let value = sum % 10;
        carryover = Math.floor(sum / 10);
        results.push(value);
        sum = carryover;
        carryover = 0;
    }

    if (sum > 0) results.push(sum);

    return results.reverse().join("");

}

// firstUniqueCharacter 
// given s (string), find the first non-repeating character init and return it's index. If it does not exist, return -1;

const assert = require('assert');

assert.equal(firstUniqueCharacter('leetcode'), 0);
assert.equal(firstUniqueCharacter('loveleetcode'), 2);
assert.equal(firstUniqueCharacter('aabb'), -1);

// function firstUniqueCharacter(str) {
//   let chars = {};

//   for (let i = 0; i < str.length; i++) {
//     if (chars[str[i]] === undefined) {
//       chars[str[i]] = [i];
//     } else {
//       chars[str[i]].push(i);
//     }
//   }

//   return Object.values(chars).filter(arr => arr.length === 1)[0] || -1;
// }

// function firstUniqueCharacter(str) {
//   let counter = new Map();

//   for (let i = 0; i < str.length; i++) {
//     if (!counter.has(str[i])) {
//       counter.set(str[i], 1);
//     } else {
//       counter.set(str[i], counter.get(str[i]) + 1);
//     }
//   }

//   for (let j = 0; j < str.length; j++) {
//     if (counter.get(str[j]) === 1) return j;
//   }

//   return -1;
// }

function firstUniqueCharacter(str) {
    let counter = {};

    for (let char of str) {
        counter[char] = ++counter[char] || 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (counter[str[i]] === 1) return i;
    }

    return -1
}

// valid Palindrome

// converting all uppercase letters to lowercase
// removing all nonalphanumeric characters, it reads the same forward and backward

// given a string return true/false

// Create a left index and a right index

// loop through the string from both ends (i.e. while left < right)
// if the letter is not a letter between charCodeAt a and z then increment left or decrement right

// if they are two valid letters and they do not equal, return false
// continue looping until you get to the middle and return true

const assert = require('assert');

assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.equal(isPalindrome("race a car"), false);
assert.equal(isPalindrome(" "), true);

function isPalindrome(s) {
    const validChars = new Set('abcdefghijklmnopqrstuvwxyz0123456789');

    let left = 0;
    let right = s.length - 1;

    s = s.toLowerCase();

    while (left < right) {
        if (!validChars.has(s[left])) left++;
        else if (!validChars.has(s[right])) right--;
        else if (s[left] !== s[right]) return false;
        else {
            left++;
            right--;
        }
    }

    return true;
}

// fizzbuzz

const assert = require('assert');

assert.deepStrictEqual(fizzbuzz(3), ["1", "2", "Fizz"]);
assert.deepStrictEqual(fizzbuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
assert.deepStrictEqual(fizzbuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);

function fizzbuzz(n) {
    let answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) answer.push("FizzBuzz");
        else if (i % 3 === 0) answer.push("Fizz");
        else if (i % 5 === 0) answer.push("Buzz");
        else answer.push(i.toString());
    }
    return answer;
}

// given a date string in the form of date, month year

// day is a set
// month is in a set 
// year is in the range

// convert the date string to the format YYYY-MM-DD
// where YYYY denotes the 4 digit year
// MM denotes the 2 digit month
// DD denotes the 2 digit day

const assert = require('assert');

assert.equal(reformatDate("20th Oct 2052"), "2052-10-20");
assert.equal(reformatDate("6th Jun 1933"), "1933-06-06");
assert.equal(reformatDate("26th May 1960"), "1960-05-26");

function reformatDate(str) {
    let MONTHS = {
        "Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12'
    }
    let [day, month, year] = str.split(" ");

    day = parseInt(day).toString().length === 1 ? `0${parseInt(day)}` : parseInt(day).toString();

    return `${year}-${MONTHS[month]}-${day}`
}

// order of the alphabet is some permutation of lowercase letters
// given a sequence of words written in the alien language and the order of the alphabet
// return true if the given words are sorted lexigraphically in this alient langugage

const assert = require('assert');

assert.equal(valid(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"), true);
assert.equal(valid(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"), false);
assert.equal(valid(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"), false);



function valid(words, order) {
    let orderIdx = {};

    // Create a dictionary that will be easier to access with the index of each letter
    order.split("").forEach((l, i) => orderIdx[l] = i);

    // loop through each word in the words array
    for (let i = 0; i < words.length - 1; i++) {
        // loop through each letter in each word
        for (let j = 0; j < words[i].length; j++) {
            // if the next word is shorter than the current word, return false, this is the wrong order
            if (j >= words[i + 1].length) return false;

            // if the current word at j has a larger index than the next word at j, then it is in the wrong order
            if (orderIdx[words[i][j] > orderIdx[words[i + 1][j]]]) return false;

            // if the current word at j is smaller than the next word at j, then break this loop since we already know it is correct and we do not need to continue checking
            if (orderIdx[words[i][j] < orderIdx[words[i + 1][j]]]) break;
        }
    }
    return true;
}

const assert = require('assert');

assert.equal(converter('AAABBBBAABBBCCCCCCCDDAAAAAAAAAADEFGCC'), 'A 10');
assert.equal(converter('BBBA'), 'B 3');
assert.equal(converter('RUNDMC'), 'C 1');
assert.equal(converter('DDADDDADDDDA'), 'D 4');
assert.equal(converter('ABBA'), 'B 2');
assert.equal(converter('ZZTOP'), 'Z 2');
assert.equal(converter('MISSISSIPPI'), 'P 2');

function converter(str) {
    let currLetter = str[0];
    let maxLetter = str[0];
    let currCount = 1;
    let maxCount = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== currLetter) {
            if (currCount > maxCount) {
                maxCount = currCount;
                maxLetter = currLetter;
            } else if (currCount === maxCount) {
                maxLetter = maxLetter.charCodeAt() < currLetter.charCodeAt() ? maxLetter : currLetter;
            }
            currCount = 1;
            currLetter = str[i];
        } else {
            currCount++;
        }
    }

    if (currCount > maxCount) {
        maxCount = currCount;
        maxLetter = currLetter;
    } else if (currCount === maxCount) {
        maxLetter = maxLetter.charCodeAt() < currLetter.charCodeAt() ? maxLetter : currLetter;
    }

    return `${maxLetter} ${maxCount}`;
}

const assert = require('assert');

assert.equal(reverse("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
assert.equal(reverse("God Ding"), "doG gniD");

function reverse(str) {

    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let wordArr = words[i].split("");
        for (let j = 0; j < wordArr.length / 2; j++) {
            [wordArr[j], wordArr[wordArr.length - 1 - j]] = [wordArr[wordArr.length - 1 - j], wordArr[j]];
            // console.log({wordArr}, wordArr[j], wordArr[wordArr.length - 1 - j]);
        }
        // console.log({wordArr});
        words[i] = wordArr.join("");
    }

    return words.join(" ");
}

function reverse(str) {
    let reversedStr = '';
    let currWord = '';

    for (let char of str) {
        if (char === " ") {
            currWord += char;
            reversedStr += currWord;
            currWord = '';
        } else {
            currWord = char + currWord;
            console.log({ currWord })
        }
    }

    reversedStr += currWord;

    return reversedStr;
}


/*
  Args:
    pace: a number, the number of minutes it takes you per road.
    roads: a list of list of strings, ex [["F","A"],["A","B"],["B","Y"],["Y","H"]] 
           each list is the start/end of a road
           ex: ["A", "B"] is a road from A to B (roads are all two-way)
  Returns:
    A string, either "YOU WIN" if you make it home first, or "FRIEND WINS" if
    your friend makes it to your house first (or if it is a tie)
*/

function raceWinner(pace, roads) {
    let roadsObj = {};
    roads.forEach(r => {
        if (roadsObj[r[0]] === undefined) {
            roadsObj[r[0]] = [r[1]];
        } else if (roadsObj[r[0]]) {
            roadsObj[r[0]].push(r[1]);
        }

        if (roadsObj[r[1]] === undefined) {
            roadsObj[r[1]] = [r[0]];
        } else if (roadsObj[r[1]]) {
            roadsObj[r[1]].push(r[0]);
        }
    });

    let youTime = timeToHome(pace, roadsObj, 'Y');
    let friendTime = timeToHome(1, roadsObj, 'F');

    return friendTime <= youTime * pace ? "FRIEND WINS" : "YOU WIN";
}

/** 


*/
function timeToHome(pace, roadsObj, startLetter) {

    let visited = new Set();
    visited.add(startLetter);
    let toVisitQueue = [[startLetter, 0]];


    while (toVisitQueue.length) {
        let [start, time] = toVisitQueue.shift();


        let options = roadsObj[start];

        if (options === undefined) return time;
        if (options.includes('H')) return time + 1;
        else {
            for (let i = 0; i < options.length; i++) {

                if (!visited.has(options[i])) {
                    visited.add(options[i]);
                    toVisitQueue.push([options[i], time + 1]);
                }
            }
        }
    }
}
















// DO NOT MODIFY BELOW THIS LINE

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

var pace = -1;
var roads = [];
var break_line = false;

rl.on('line', (line) => {
    line = line.trim();
    if (line == '') {
        break_line = true;
        return;
    }
    if (break_line) {
        road = line.split(' ');
        roads.push(road);
    } else {
        pace = parseInt(line, 10);
    }
}).on('close', () => {
    console.log(raceWinner(pace, roads));
});

/*
  Args:
    pace: a number, the number of minutes it takes you per road.
    roads: a list of list of strings, ex [["F","A"],["A","B"],["B","Y"],["Y","H"]] 
           each list is the start/end of a road
           ex: ["A", "B"] is a road from A to B (roads are all two-way)
  Returns:
    A string, either "YOU WIN" if you make it home first, or "FRIEND WINS" if
    your friend makes it to your house first (or if it is a tie)
*/

function raceWinner(pace, roads) {
    let roadsObj = createRoadsObj(roads);

    let youBlocks = timeToHome(roadsObj, 'Y');
    let friendBlocks = timeToHome(roadsObj, 'F');

    return friendBlocks <= youBlocks * pace ? "FRIEND WINS" : "YOU WIN";
}

/*
  Args:
    roads: a list of list of strings, ex [["F","A"],["A","B"],["B","Y"],["Y","H"]] 
           each list is the start/end of a road
           ex: ["A", "B"] is a road from A to B (roads are all two-way)
  Returns:
    An object with all of the roads from a point 
    ex. { 'F' : ['A', 'B'], 'A' : ['B', 'F'], 'B': ['Y', 'A'], 'Y' : ['H', 'B'], 'H' : ['Y']}
*/

function createRoadsObj(roads) {
    let roadsObj = {};

    for (let [start, end] of roads) {
        if (roadsObj[start] === undefined) roadsObj[start] = [end];
        else roadsObj[start].push(end);

        if (roadsObj[end] === undefined) roadsObj[end] = [start];
        else roadsObj[end].push(start);
    }

    return roadsObj;
}


/** A breadth first search that starts at a person's letter (ex. 'Y' or 'F') and returns the    
    shortest number of blocks to 'H'.
    
    Args:
      roadsObj: an object with each starting point (ex. {'A' : 'B', 'B': 'C', 'C': 'H'})
      startingPoint: the point to start the search
   
    Returns:
      A number that represents the shortest number of blocks to get to 'H'
*/
function timeToHome(roadsObj, startingPoint) {

    let visited = new Set(startingPoint);
    let toVisitQueue = [[startingPoint, 0]];

    while (toVisitQueue.length) {
        let [start, numBlocks] = toVisitQueue.shift();

        let possiblePointsFromStart = roadsObj[start];

        for (let point of possiblePointsFromStart) {
            if (point === 'H') return numBlocks + 1;

            if (!visited.has(point)) {
                visited.add(point);
                toVisitQueue.push([point, numBlocks + 1]);
            }
        }
    }
}





// DO NOT MODIFY BELOW THIS LINE

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

var pace = -1;
var roads = [];
var break_line = false;

rl.on('line', (line) => {
    line = line.trim();
    if (line == '') {
        break_line = true;
        return;
    }
    if (break_line) {
        road = line.split(' ');
        roads.push(road);
    } else {
        pace = parseInt(line, 10);
    }
}).on('close', () => {
    console.log(raceWinner(pace, roads));
});

// longest substring without repeating characters

const assert = require('assert');

assert.equal(longestSubstring("abcabcbb"), 3);
assert.equal(longestSubstring("bbbbb"), 1);
assert.equal(longestSubstring("pwwkew"), 3);

function longestSubstring(str) {
    let seenLetters = new Map();
    let maxSubstring = 0;

    for (let i = 0; i < str.length; i++) {
        if (seenLetters.has(str[i])) {
            maxSubstring = Math.max(maxSubstring, seenLetters.size);
            i = seenLetters.get(str[i]);
            seenLetters = new Map();
        } else {
            seenLetters.set(str[i], i);
        }
    }
    return Math.max(maxSubstring, seenLetters.size);
}

// group anagrams

const assert = require('assert');
assert.deepStrictEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"].sort()), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]].sort());

assert.deepStrictEqual(groupAnagrams([""]), [[""]]);
assert.deepStrictEqual(groupAnagrams(["a"]), [["a"]]);

function groupAnagrams(strs) {
    let indices = new Map();

    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split("").sort().join("");

        if (!indices.has(sortedWord)) {
            indices.set(sortedWord, [i]);
        } else {
            let currIndices = indices.get(sortedWord);
            currIndices.push(i);
            indices.set(sortedWord, currIndices);
        }
    }

    let result = [];

    for (let [key, value] of indices) {
        let words = [];
        for (let index of value) {
            words.push(strs[index]);
        }
        result.push(words);
    }

    // console.log({result});
    return result;
}

// valid parentheses
// determine if the input string is valid

// open brackets must be closed by the same type of brackets
// open brackets must be closed in the correct order

const assert = require('assert');

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('(]'), false);

function isValid(parentheses) {
    const brackets = { '(': ')', '{': '}', '[': ']' };

    let stack = [];

    for (let char of parentheses) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            if (brackets[stack[stack.length - 1]] === char) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// valid palindrome

// after converting all uppercase letters to lowercase and removing all no-alphanumeric characters, it reads the same backward and forward

const assert = require('assert');

// assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
// assert.equal(isPalindrome("race a car"), false);
// assert.equal(isPalindrome(" "), true);
assert.equal(isPalindrome("0P"), false);

// console.log(isLetter('a'))

// make everything into a lower case string
// create a left point and a right pointer

// create a function to determine if the letter is between a and z (ie. it's not a symbol)

// loop through the string starting from left and right and working your way to the middle
// if left is not a letter, then increment left
// if right is not a letter, decrement right

// if there are two characters and they are equal, then increment left and decrement right
// if they are not the same return false

// when done through the loop, return true

function isPalindrome(str) {
    str = str.toLowerCase();

    let left = 0;
    let right = str.length - 1

    while (left < right) {
        let leftIsLetter = isLetter(str[left]);
        let rightIsLetter = isLetter(str[right]);
        console.log('left', str[left], 'right', str[right]);

        if (!leftIsLetter) left++;
        else if (!rightIsLetter) right--;
        else if (leftIsLetter && rightIsLetter) {
            if (str[left] === str[right]) {
                right--;
                left++;
            } else {
                return false;
            }
        }
    }
    console.log({ left, right })
    return true;
}

function isLetter(char) {
    let charCode = char.charCodeAt();
    let lowerBound = 'a'.charCodeAt();
    let upperBound = 'z'.charCodeAt();
    let numLowerBound = '0'.charCodeAt();
    let numUpperBound = '9'.charCodeAt();

    return ((charCode <= upperBound && charCode >= lowerBound)
        || (charCode <= numUpperBound && charCode >= numLowerBound));
}

// longest palindromic substring

const assert = require('assert');

// assert.equal(longestPalindrome('babad'), 'bab');
// assert.equal(longestPalindrome('cbbd'), 'bb');
assert.equal(longestPalindrome('bb'), 'bb');

// create a isPalindrome function

// loop through the string and create a nested loop starting at 1
// run the substring through the isPalindrome function

// if it is a palindrome, get the max length and store the word

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

function longestPalindrome(str) {
    let longest = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substr = str.substring(i, j);
            console.log({ substr })
            if (isPalindrome(substr)) {
                longest = longest.length >= substr.length ? longest : substr;
            }
        }
    }
    return longest;
}

const assert = require('assert');

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);

function maxProfit(prices) {
    let maxProfit = -Infinity;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

const assert = require('assert');

assert.equal(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.equal(maxSubarray([1]), 1);
assert.equal(maxSubarray([5, 4, -1, 7, 8]), 23);

function maxSubarray(nums) {
    let max = nums[0];
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }

        currSum += nums[i];
        max = Math.max(currSum, max);
    }

    return max;
}



