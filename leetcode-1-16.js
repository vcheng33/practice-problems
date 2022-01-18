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

var isPalindrome = function (x) {
  if (x < 0) return false

  let rev = 0
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + i % 10;
  }
  return rev === x
};

const assert = require('assert');

assert.equal(addStrings('11', '123'), '134');
assert.equal(addStrings('456', '77'), '533');
assert.equal(addStrings('0', '0'), '0');

// create a sum 
// loop through the digits starting at the end and going forward
//

function addStrings(num1, num2) {
  let result = [];
  let sum = 0;
  let carryover = 0;
  let maxLength = Math.max(num1.length, num2.length);

  for (let i = 0; i < maxLength; i++) {
    if (num1[num1.length - i - 1]) sum += Number(num1[num1.length - i - 1]);
    if (num2[num2.length - i - 1]) sum += Number(num2[num2.length - i - 1]);

    if (sum >= 10) {
      sum -= 10;
      carryover = 1;
    }

    result.push(sum);
    sum = carryover;
    carryover = 0;
  }

  return result.reverse().join("");

}

const assert = require('assert');

class Counter {
  constructor() {
    this.counterNumber = 0;
  }

  generateNumber() {
    // this.counterNumber++;
    return this.counterNumber++;
  }
}

// assert.deepEqual(solution([
//   ["John","johnsmith@mail.com","john_newyork@mail.com"],
//   ["John","johnsmith@mail.com","john00@mail.com"],
//   ["Mary","mary@mail.com"],
//   ["John","johnnybravo@mail.com"]
// ]), [
//   ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
//   ["Mary","mary@mail.com"],
//   ["John","johnnybravo@mail.com"]
// ])

// assert.deepEqual(solution([["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]), [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]);

// assert.deepEqual(solution([
//   ["Kevin","Kevin1@m.co","Kevin5@m.co","Kevin2@m.co"], 
//   ["Bob","Bob3@m.co","Bob1@m.co","Bob2@m.co"],
//   ["Lily","Lily3@m.co","Lily2@m.co","Lily0@m.co"],
//   ["Gabe","Gabe2@m.co","Gabe0@m.co","Gabe2@m.co"],
//   ["Kevin","Kevin4@m.co","Kevin3@m.co","Kevin3@m.co"]
// ]),[
//   ["Lily","Lily0@m.co","Lily2@m.co","Lily3@m.co"],
//   ["Gabe","Gabe0@m.co","Gabe2@m.co"],
//   ["Kevin","Kevin1@m.co","Kevin2@m.co","Kevin5@m.co"],
//   ["Kevin","Kevin3@m.co","Kevin4@m.co"],
//   ["Bob","Bob1@m.co","Bob2@m.co","Bob3@m.co"]
// ]);

assert.deepEqual(solution([
  ["David", "David0@m.co", "David1@m.co"],
  ["David", "David3@m.co", "David4@m.co"],
  ["David", "David4@m.co", "David5@m.co"],
  ["David", "David2@m.co", "David3@m.co"],
  ["David", "David1@m.co", "David2@m.co"]]), [
  ["David", "David0@m.co", "David1@m.co", "David2@m.co", "David3@m.co", "David4@m.co", "David5@m.co"]
]);

// Create a counter object
// Loop through the given array
// if the person's name is not in the counter object, add the person's name
// as the key
// And add all the emails as a set in the values 

// if the person's name IS in the counter object, use .some to find if any of the 
// emails in the array are in the set. 
// If there are any overlaps, it is the same person and we can add the emails to the 
// set, maybe we push it into the the result array?

// We take the counter object and loop through to construct the formatted array with sorted emails
// At some point we need to sort the emails

// function solution(accounts) {
//   let counter = {};
//   let result = [];

//   for (let [name, ...emails] of accounts) {
//     // console.log({name, emails, counter});
//     if (counter[name]) {
//       if (emails.some(e => counter[name].has(e))) {
//         emails.forEach(e => counter[name].add(e));
//         // console.log({counter});
//       } else {
//         let uniqueEmails = new Set(emails.sort());
//         result.push([name, ...Array.from(uniqueEmails)]);
//       }
//     }
//     else {
//       counter[name] = new Set (emails);
//       // console.log(counter[name]);
//     }
//   }

//   for (let key in counter) {
//     let sorted = Array.from(counter[key]).sort();
//     result.push([key, ...sorted]);
//   }

//   return result;
// }




function solution(accounts) {
  let emailIdx = {};
  let groups = {};
  let counter = new Counter();

  for (let i = 0; i < accounts.length; i++) {
    let [name, ...emails] = accounts[i];

    for (let email of emails) {
      if (emailIdx[email]) {
        console.log('groups[i]', groups[i]);
        groups[i] = groups[emailIdx[email]];
        // console.log({groups});
      }
      // console.log({email}, emailIdx[email], {i});
      emailIdx[email] = emailIdx[email] !== undefined ? emailIdx[email] : i;
      // console.log({emailIdx});
    }
    groups[i] = groups[i] === undefined ? counter.generateNumber() : groups[i];
    console.log({ groups })
  }

  console.log({ emailIdx, groups });

}

const assert = require('assert');

assert.deepStrictEqual(solution([[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]), [[3, 4]]);
assert.deepStrictEqual(solution([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]]), [[5, 6], [7, 9]]);

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function solution(schedules) {
  schedules.flat();
  schedules.sort((a, b) => a.start - b.start);

  let busyTime = [schedules[0]];

  for (let i = 1; i < schedules.length; i++) {
    let last = busyTime.length - 1;

    if (busyTime[last].end >= schedules[i].start) {
      busyTime[last].end = Math.max(busyTime[last].end, schedules[i].end);
    } else {
      busyTime.push(schedules[i]);
    }
  }

  let freeTime = [];

  for (let j = 0; j < busyTime.length - 1; j++) {
    let freeStart = busyTime[j].end;
    let freeEnd = busyTime[j + 1].start;
    freeTime.push(new Interval(freeStart, freeEnd));
  }

  return freeTime
}

const assert = require('assert');

assert.deepStrictEqual(solution([[110, 5, 112, 113, 114], [210, 211, 5, 213, 214], [310, 311, 3, 313, 314], [410, 411, 412, 5, 414], [5, 1, 512, 3, 3], [610, 4, 1, 613, 614], [710, 1, 2, 713, 714], [810, 1, 2, 1, 1], [1, 1, 2, 2, 2], [4, 1, 4, 4, 1014]]), [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [110, 0, 0, 0, 114], [210, 0, 0, 0, 214], [310, 0, 0, 113, 314], [410, 0, 0, 213, 414], [610, 211, 112, 313, 614], [710, 311, 412, 613, 714], [810, 411, 512, 713, 1014]]);

assert.deepStrictEqual(solution([[1, 3, 5, 5, 2], [3, 4, 3, 3, 1], [3, 2, 4, 5, 2], [2, 4, 4, 5, 5], [1, 4, 4, 1, 1]]), [[1, 3, 0, 0, 0], [3, 4, 0, 5, 2], [3, 2, 0, 3, 1], [2, 4, 0, 5, 2], [1, 4, 3, 1, 1]]);

function solution(board) {
  // Create a done variable
  let done = true;

  // Check if there are three in a row
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length - 2; c++) {
      let first = Math.abs(board[r][c]);
      let second = Math.abs(board[r][c + 1]);
      let third = Math.abs(board[r][c + 2]);

      if (first === second && second === third && first !== 0) {
        board[r][c] = -first;
        board[r][c + 1] = -second;
        board[r][c + 2] = -third;

        done = false;
      }
    }
  }

  console.log({ board });
  // Check if there are three in a column
  for (let c = 0; c < board[0].length; c++) {
    for (let r = 0; r < board.length - 2; r++) {
      let first = Math.abs(board[r][c]);
      let second = Math.abs(board[r + 1][c]);
      let third = Math.abs(board[r + 2][c]);

      if (first === second && second === third && first !== 0) {
        board[r][c] = -first;
        board[r + 1][c] = -second;
        board[r + 2][c] = -third;

        done = false;
      }
    }
  }
  console.log({ board });
  // Move all the candies down
  if (!done) {
    for (let c = 0; c < board[0].length; c++) {
      let idx = board.length - 1;

      for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][c] > 0) {
          board[idx][c] = board[r][c];
          idx--;
        }
      }

      while (idx >= 0) {
        board[idx][c] = 0;
        idx--;
      }
    }

  }


  // return gameboard if it is stable, otherwise, call the fn again
  return done ? board : solution(board);
}

const assert = require('assert');

assert.equal(countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0);
assert.equal(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]), 3);

// 0 => circular sandwiches
// 1 => square sandwiches

// num students === num sandwiches
// if student[i] === sandwiches[last], pop the sandwich off
// dequeue the student
// if they are not equal, student dequeues and enqueues and sandwich stays the same

// continues until none of the queud students want to take the top sandwich and are thus unable to eat

// return the num students remaining

function countStudents(students, sandwiches) {
  let allStudentsVisited = false;

  while (!allStudentsVisited) {

    let currStudent = students[0];
    let currSandwich = sandwiches[0];

    // console.log({students, sandwiches, currStudent, currSandwich, allStudentsVisited});
    if (!students.includes(currSandwich) || sandwiches.length === 0) {
      allStudentsVisited = true;
    }

    if (currStudent === currSandwich) {
      students.shift();
      sandwiches.shift();
    } else {
      students.shift();
      students.push(currStudent);
    }


    // console.log({students, sandwiches, allStudentsVisited});
  }
  return students.length;

}

function rangeSumBST(root, low, high) {
  let sum = 0;
  let toVisitQueue = [root];

  while (toVisitQueue.length) {
    let curr = toVisitQueue.shift();

    if (curr.val >= low && curr.val <= high) {
      sum += curr.val;

    }
    if (curr.left) toVisitQueue.push(curr.left);
    if (curr.right) toVisitQueue.push(curr.right);
  }

  return sum;
}

const assert = require('assert');

assert.equal(solution("abcabcbb"), 3);
assert.equal(solution("bbbbb"), 1);
assert.equal(solution("pwwkew"), 3);

function solution(str) {
  let uniqueLetters = new Map();
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (!uniqueLetters.has(str[i])) uniqueLetters.set(str[i], i);
    else {
      i = uniqueLetters.get(str[i]);
      maxLength = Math.max(maxLength, uniqueLetters.size);
      uniqueLetters.clear();
    }
  }
  return maxLength;
}

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

function maxDepth(node) {
  if (!node) return 0;

  let toVisitStack = [[node, 0]];
  let max = 0;

  while (toVisitStack.length > 0) {
    let [curr, depth] = toVisitStack.pop();
    max = Math.max(max, depth);

    for (let child of curr.children) {
      toVisitStack.push([child, depth + 1]);
    }
  }

  return max;
}

function threeSumClosest(nums, target) {
  let minSum = +Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) return sum;
      else if (sum < target) j++;
      else k--;

      let currMinDist = Math.abs(target - minSum);
      let currDist = Math.abs(target - sum);
      minSum = currMinDist <= currDist ? minSum : sum;
    }
  }
  return minSum;
}

function threeSmallerSum (nums, target) {
  if (nums.length < 3) return 0;

  let countOfTriplets = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < target) {
        // MUST DO THE LINE BELOW to capture all of the iterations to the left
        countOfTriplets += k - j;
        j++;
      } else {
        k--;
      }
    }
  }
  return countOfTriplets;
};

const NUM_TO_LETTERS = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

function allIterations(str) {
  let uniqueCombos = new Set(NUM_TO_LETTERS[str[0]]); // {a, b, c}

  for (let i = 1; i < str.length; i++) {
    let newLetters = NUM_TO_LETTERS[str[i]]; // [g, h, i]
    let currCombos = []; // [ adg, adh, adi, aeg, aeh, aei, ae, bd, be, bf, cd, ce, cf]
    for (let substr of uniqueCombos) {
      for (let letter of newLetters) {
        currCombos.push(substr + letter);
      }
      // uniqueCombos.delete(substr);
    }
    uniqueCombos = new Set(currCombos); // {ad, ae, af, bd, be, bf, cd, ce, cf}
  }

  return Array.from(uniqueCombos);
}

console.log(allIterations('234'));