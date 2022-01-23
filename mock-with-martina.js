// given a sorted array of distinct numbers, and I'll be given a target number
// return is the index of that number if it exists in the array and the index of where it WOULD be, if it is not in the array currently
// logn time

// [1, 2, 3, 4, 5, 6], 6 => 5 => mid = 2
// [1, 3, 4, 5, 6], 2 => 1 // 0, 4 => 1, 3 => 1 => 3, 1
// [1], 4 => 2
// [-10, [-9]-8, [-7]-5, -2], -3 => 3  // => 1 // -2 , -5

// binary search 

// creating a left and right pointer
// loop with a while loop (left <= right)
// then we'll find the midPoint between left & right
// we can check if the nums[midPoint] is the target number, if so, return midPoint
// otherwise, if nums[midPoint] is less than the target, we'll move left to midPoint + 1
// otherwise, right = midPoint - 1;

// if we get through the entire loop and we have not found the target number
// then if the target is greater than the last number that we looked at, then we should return the last midPoint + 1
// otherwise, if the target is less than the last number we looked at, then we should return the last midPoint - 1

function findIdx(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log({ left, right, mid }, 'left', nums[left], 'right', nums[right], 'mid', nums[mid]);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    // return target > nums[left] ? left + 1 : left;
    return left;
}

// console.log(findIdx([1, 2, 3, 4, 5, 6],6)); // 5
// console.log(findIdx([1, 3, 4, 5, 6],2)); // 1
// console.log(findIdx([-10, -8, -5, -2],-3)); //3


// permutations
// given an array of nums of distinct integers (can be positive or negative) and I need to return an array of arrays with all the permutations

// [1,2,3] => [[1,2,3], [2,1,3], [1,3,2], [2,3,1], [3,1,2], [3,2,1]];
// [1] => [[1]]
// length between 1 - 6

// [1, 2, 3] => [[1,2], [1,3], [2,1], [2,3], [1,2,3], [1,3,2], [2,1,3]... ]

// set for the original numbers so that I can access with O(1)
// create a result array []

// I'll loop through each element/array // [[1,2],[1,3],[2,1],[2,3]] // 1,2,3 
// in the next iteration              // temp array = [[1,2,3],...]


function permutations(nums) {
    let uniqueNums = new Set(nums);
    let result = [];
    let tempArr = [];

    for (let num of nums) {
        result.push([num]);
    }

    while (result[0].length < nums.length) {
        for (let num of result) { //[[1], [2], [3]] // [1,2], [1,3], [2,1], [2,3], [3, 1], [3,2]
            for (let uniqueNum of uniqueNums) { // 1, 2, 3
                if (!num.includes(uniqueNum)) {
                    tempArr.push([...num, uniqueNum]); //[1,2,3], [1,3,2], [2,1], [2,3], [3, 1], [3,2]
                }
            }
            // tempArr.push([num]);
        }

        result = [...tempArr];
        tempArr = [];
    }

    return result;
}

console.log(permutations([1, 2, 3]));
console.log(permutations([1]));

// opportunity to use recursion
//
































