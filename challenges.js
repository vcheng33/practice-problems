const assert = require('assert');

assert.equal(solution(["TYPE Code", "TYPE Signal", "MOVE_CURSOR -3", "SELECT 5 8", "TYPE ou", "UNDO", "TYPE nio"]), "CodeSignaniol");

function solution(operations) {
    let str = '';
    let cursorIdx = 0;
    let selectedText = [];
    let typeAndMove = [];

    function type(text) {
        str = str.substring(0, cursorIdx) + text + str.substring(cursorIdx);
        typeAndMove.push(['type', str, cursorIdx]);
        cursorIdx += text.length;
    }

    function moveCursor(offset) {
        typeAndMove.push(['move', cursorIdx]);
        let newPosition = cursorIdx + Number(offset);
        cursorIdx = newPosition > str.length ? str.length : newPosition;
    }

    function select(startIdx, endIdx) {
        let sub = str.substring(Number(startIdx), Number(endIdx) + 1);
        cursorIdx += sub.length;
        selectedText.push(sub);
    }

    function undo() {
        if (typeAndMove.length === 0) return;

        let lastOperation = typeAndMove.pop();
        if (lastOperation[0] === 'move') {
            cursorIdx = lastOperation[1];
        } else if (lastOperation[0] === 'type') {
            str = lastOperation[1];
            cursorIdx = lastOperation[2];
        }
    }


    for (let i = 0; i < operations.length; i++) {
        let [task, op1, op2] = operations[i].split(" ");

        if (task === 'TYPE') {
            type(op1);
            console.log({ task, str, cursorIdx, selectedText, typeAndMove });
        } else if (task === 'MOVE_CURSOR') {
            moveCursor(op1);
            console.log({ task, str, cursorIdx, selectedText, typeAndMove });
        } else if (task === 'UNDO') {
            undo();
            console.log({ task, str, cursorIdx, selectedText, typeAndMove });
        } else if (task === 'SELECT') {
            select(op1, op2);
            console.log('next operation', operations[i + 1].split(" ")[0]);
            if (operations[i + 1].split(" ")[0] !== 'TYPE') {
                console.log({ task, str, cursorIdx, selectedText, typeAndMove });
                selectedText.pop();
                console.log({ task, str, cursorIdx, selectedText, typeAndMove });
            } else {
                console.log('beginning', { task, str, cursorIdx, selectedText, typeAndMove });
                typeAndMove.push(['type', str, Number(op2) + 1]);
                selectedText.pop();
                // cursorIdx -= selected.length;
                let nextSub = operations[i + 1].split(" ")[1];
                str = str.substring(0, op1 + 1) + nextSub + str.substring(op2);

                cursorIdx = Number(op2) + 1;
                i++;
                console.log({ task, str, cursorIdx, selectedText, typeAndMove });
            }
        }


    }

    return str;
}

const assert = require('assert');

assert.equal(solution([25,35,872,228,53,278,872]),4);
assert.equal(solution([1000,1000,1001,1002,1003,101,100,10000,10001,10000]),2);

// function solution (arr) {
//   let count = 0;
//   let nums = {};
  
//   for (let num of arr) {
//     if (!nums[num]) {
//       let counter = digitCounter(num);
//       nums[num] = counter;
//     }
//   }
  
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i].toString().length !== arr[j].toString().length) continue;
//       else if (arr[i] === arr[j]) {
//         count++;
//         // console.log('arr[i]', arr[i], 'arr[j]', arr[j]);
//       } else if (nums[arr[i]].size !== nums[arr[j]].size) {
//         continue;
//       } else if (isSame(nums[arr[i]], nums[arr[j]]) === true) {
//         // console.log('inside isSame');
//         count++;
//         // console.log('arr[i]', arr[i], 'arr[j]', arr[j]);
//         // console.log('nums[arr[i]]', nums[arr[i]], 'nums[arr[j]]', nums[arr[j]]);
//       }
//     }
//   }

//   return count;
// }

// function digitCounter(num) {
//   let str = num.toString();
//   let counter = new Map();
  
//   for (let digit of str) {
//     counter.set(digit, (counter.get(digit) || 0) + 1);
//   }
  
//   return counter;
// }

// function isSame(obj1, obj2) {
//   for (let [key, value] of obj1) {
//     // console.log('obj2[key]', obj2.get(key), 'obj1[key]', obj1.get(key));
//     if (obj2.get(key) !== obj1.get(key)) return false;
//   }
  
//   return true;
// }

function solution (a) {
  let count = 0;
  let pairs = {};
  let confirmedAnagrams = {};
  
  for (let i = 0; i < a.length; i++) {
    let counter = countDigits(a[i]);
    pairs[a[i]] = counter;
  }
  
  for (let j = 0; j < a.length - 1; j++) {
    for (let k = j+1; k < a.length; k++) {
      if (confirmedAnagrams[a[j]] === a[k] || confirmedAnagrams[a[k]] === a[j]) count++;
      else if (a[j] === a[k]) {
        count++;
        confirmedAnagrams[a[j]] = a[k];
        confirmedAnagrams[a[k]] = a[j];
      } else if (isSame(pairs[a[j]], pairs[a[k]]) === true) {
        count++;
        confirmedAnagrams[a[j]] = a[k];
        confirmedAnagrams[a[k]] = a[j];
      }
    }
  }
  return count;
}

function countDigits(num) {
  let nums = num.toString();
  let counter = {};
  
  for (let digit of nums) {
    counter[digit] = (counter[digit] || 0) + 1;
  }
  return counter;
  
}


function isSame(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  } // {1: 1, 2: 2, 3:3} {1
  return true;
}

// function solution(a) {
//   let count = 0;
//   // sort the digits in the number
  
//   for (let i = 0; i < a.length; i++) {
//     a[i] = a[i].toString().split("").sort().join("");
//   }
//   // a.sort((a,b) => a - b);
//   console.log({a});
  
//   // let start = 0;
//   // let end = start + 1;
  
//   // while (start < a.length - 1) {
//   //   if (a[start] === a[end]) {
//   //     end++;
//   //     count++;
//   //   } else if (a[start] !== a[end]) {
//   //     start = end;
//   //     end++;
//   //   }
//   // }
  
//   for (let j = 0; j < a.length - 1; j++) {
//     for (let k = j + 1; k < a.length; k++) {
//       if (a[j] === a[k]) count++;
//     }
//   }
//   return count++;
// }

const assert = require('assert');

// assert.deepEqual(solution([25,2,3,57,38,41]), [2,3,5]);

// function solution(a) {
//   let counter = {};
//   let result = [];
  
//   for (let num of a) {
//     for (let digit of num.toString()) {
//       counter[digit] = (counter[digit] || 0) + 1;
//     }
//   }

//   let max = Math.max(...Object.values(counter));
//   console.log({max, counter});
  
//   for (let key in counter) {
//     if (counter[key] === max) {
//       result.push(key);
//     }
//   }
  
//   return result;
// }

// assert.deepEqual(solution([1,2,1,3,4]), [1,1,0]);
// assert.deepEqual(solution([1000000,1000000,1000000]),[0]);

// function solution(numbers) {
//   let result = [];
  
//   for (let i = 0; i < numbers.length - 2; i++) {
//     if ((numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]) ||
//         (numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2])) {
//       result.push(1);
//     } else {
//       result.push(0);
//     }
//   }
//   return result;
// }

// assert.deepEqual(solution(5, [4,0,1,-2,3]), [4,5,-1,2,1]);

// function solution(n, a) {
//   let b = [];
  
//   for (let i = 0; i < a.length; i++) {
//     b[i] = (a[i - 1] || 0) + (a[i]) + (a[i + 1] || 0);
//   }

//   return b;
// }

assert.equal(solution('aaabb'), 'ababa');
assert.equal(solution('aaabbbcc'), 'abcacba');
assert.equal(solution('aabbccddeeffgghhiijjkkllmmnnooppqqrr'), 'abcdefghijklmnopqrrqponmlkjihgfedcba');
assert.equal(solution('aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrr'), 'abcdefghijklmnopqrarqponmlkjihgfedcba');

function solution(str) {
  let counter = {};
  let left = [];
  let firstOdd;
  
  for (let char of str) {
    counter[char] = (counter[char] || 0) + 1; 
  }
  
  for (let letter in counter) {
    if (counter[letter] % 2 !== 0) {
      firstOdd = letter;
      break;
    }
  }
  
  for (let letter in counter) {
    console.log({letter}, counter[letter]);
    if (counter[letter] % 2 === 0) {
      let numToRepeat = counter[letter] / 2;
      left.push(letter.repeat(numToRepeat));
    } else {
        let numToRepeat = Math.floor(counter[letter] / 2);
        left.push(letter.repeat(numToRepeat));
    }
  }
  
  let finalString = left.join("") + (firstOdd || "") + left.reverse().join("");
  return finalString;
}

// function solution(str) {
//   let counter = {};
//   let left = [];
//   let right = [];
//   let firstOdd;
  
//   for (let char of str) {
//     counter[char] = (counter[char] || 0) + 1; 
//   }
  
//   for (let letter in counter) {
//     if (counter[letter] % 2 !== 0) {
//       firstOdd = letter;
//       break;
//     }
//   }
  
//   for (let letter in counter) {
//     console.log({letter}, counter[letter], {left, right});
//     if (counter[letter] % 2 === 0) {
//       let numToRepeat = counter[letter] / 2;
//       left.push(letter.repeat(numToRepeat));
//       right.push(letter.repeat(numToRepeat));
//     } else {
//         let numToRepeat = Math.floor(counter[letter] / 2);
//         left.push(letter.repeat(numToRepeat));
//         right.push(letter.repeat(numToRepeat));
//     }
//   }
//   let finalString = left.join("") + firstOdd + right.reverse().join("");
//   return finalString;
// }

const assert = require('assert');

// Non-Overlapping Ranges
assert.deepEqual(mergeRanges([
  { startTime: 2, endTime: 3 },
  { startTime: 6, endTime: 9 }
]), [
  { startTime: 2, endTime: 3 },
  { startTime: 6, endTime: 9 }
]);

// Non Ordered Ranges
assert.deepEqual(mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]), [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]);

// Edge Case of One starts when the other ends
assert.deepEqual(mergeRanges([
  { startTime: 1, endTime: 2 },
  { startTime: 2, endTime: 3 }
]), [
  { startTime: 1, endTime: 3 }
]);

// Edge Case, one range is within the other
assert.deepEqual(mergeRanges([
  { startTime: 1, endTime: 5 },
  { startTime: 2, endTime: 3 }
]), [
  { startTime: 1, endTime: 5 }
]);

// Edge Case, multiple merges into one range
assert.deepEqual(mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]), [
  { startTime: 1, endTime: 10 },
]);

function mergeRanges(meetings) {
  // console.log({meetings});
  meetings.sort((a, b) => a.startTime - b.startTime);
  console.log({ meetings });

  let result = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    let len = result.length - 1;
    console.log(result.length, result[len], meetings[i]);
    if (result[len].endTime >= meetings[i].startTime) {
      result[len].endTime = Math.max(result[len].endTime, meetings[i].endTime);
    } else {
      result.push(meetings[i]);
    }
  }
  console.log({ result });
  return result;
}















































