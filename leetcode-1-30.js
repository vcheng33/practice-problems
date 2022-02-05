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

function numIslands(grid) {
    let count = 0;

    function isIsland(x, y) {
        if (grid[x][y] === '0') return;

        grid[x][y] = '0';

        if (x < grid.length - 1) isIsland(x + 1, y);
        if (y < grid[x].length - 1) isIsland(x, y + 1);
        if (x > 0 && x < grid.length) isIsland(x - 1, y);
        if (y > 0 && y < grid[x].length) isIsland(x, y - 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                isIsland(i, j);
            }
        }
    }

    return count;
}

assert.equal(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]), 16);
assert.equal(islandPerimeter([[1]]), 4);
assert.equal(islandPerimeter([[1, 0]]), 4);

function islandPerimeter(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;

                if (i < grid.length - 1 && grid[i + 1][j]) perimeter--;
                if (j < grid[i].length - 1 && grid[i][j - 1]) perimeter--;
                if (i > 0 && grid[i - 1][j]) perimeter--;
                if (j > 0 && grid[i][j - 1]) perimeter--;
            }
        }
    }

    return perimeter;
}

assert.equal(maxArea([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]), 6);

assert.equal(maxArea([[0, 0, 0, 0, 0, 0, 0, 0]]), 0);

function maxArea(grid) {
    let max = 0;
    let currArea = 0;

    function isIsland(x, y) {
        if (!grid[x][y]) return;

        grid[x][y] = 0;
        currArea++;

        if (x < grid.length - 1) isIsland(x + 1, y);
        if (y < grid[x].length - 1) isIsland(x, y + 1);
        if (x > 0) isIsland(x - 1, y);
        if (y > 0) isIsland(x, y - 1);
        console.log({ currArea });
        return 1;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                isIsland(i, j);
                max = Math.max(max, currArea);
                currArea = 0;
            }
        }
    }
    return max;
}

assert.equal(maxYear([[1993, 1999], [2000, 2010]]), 1993);
assert.equal(maxYear([[1950, 1961], [1960, 1971], [1970, 1981]]), 1960);


function maxYear(logs) {
    let count = new Array(101).fill(0);

    // [40, 41, 42, 1, 44, 45, 46, 47, 48, -1
    //  1, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    // -1, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    // 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]

    // we add a one to all years that someone was born and -1 for years where a person
    // died. We subtract 1950 because know that none of the logs will have records of people
    // being alive before then so we don't need to waste extra memory for it.
    for (let [birth, death] of logs) {
        count[birth - 1950]++;
        count[death - 1950]--;
    }

    console.log({ count });

    let max = 0;

    // 101 is the max years between 1950 and 2050. We do not start at 0 because we are going to
    // use count[i - 1]
    for (let i = 1; i < 101; i++) {
        // We are adding together all the people that are alive in the previous year to the 
        // people who were born in the current year (i)
        count[i] += count[i - 1];

        // the number of people alive is greater than the last max number of people alive,
        // we update max to be i (the year that had the maximum number of people);
        if (count[i] > count[max]) max = i;
        console.log('count[i]', count[i], 'count[max]', count[max], { i, max });
    }

    return 1950 + max;
}


// floodFill
function floodFill(image, sr, sc, newColor) {
    let colorToReplace = image[sr][sc];
    if (newColor === colorToReplace) return image;

    function dfs(x, y) {
        if (image[x][y] !== colorToReplace) return;
        image[x][y] = newColor;

        if (x > 0) dfs(x - 1, y);
        if (y > 0) dfs(x, y - 1);
        if (x < image.length - 1) dfs(x + 1, y);
        if (y < image[x].length - 1) dfs(x, y + 1);
    }

    dfs(sr, sc);
    return image;
}

// maximumProduct of three nums
var maximumProduct = function (nums) {
    let min = +Infinity;
    let secondMin = +Infinity;
    let max = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= max) {
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        } else if (nums[i] >= secondMax && nums[i] < max) {
            thirdMax = secondMax;
            secondMax = nums[i]
        } else if (nums[i] > thirdMax) {
            thirdMax = nums[i];
        }

        if (nums[i] <= min) {
            secondMin = min;
            min = nums[i];
        } else if (nums[i] < secondMin) {
            secondMin = nums[i];
        }
    }
    return Math.max(min * secondMin * max, max * secondMax * thirdMax);
};

// replace elements with greatest element on right side

var replaceElements = function (arr) {
    let maxStack = [-1];

    for (let i = arr.length - 2; i >= 0; i--) {
        let max = Math.max(maxStack.slice(-1)[0], arr[i + 1]);
        console.log(maxStack.slice(-1)[0], arr[i], { max })
        maxStack.push(max);
    }

    return maxStack.reverse();
};

// two furthest houses with different colors
var maxDistance = function (colors) {
    let firstColorIdx = 0;
    let lastColorIdx = colors.length - 1;

    while (colors[lastColorIdx] === colors[firstColorIdx]) {
        lastColorIdx--;
    }

    let secondOption = 0;
    while (colors[secondOption] === colors[colors.length - 1]) {
        secondOption++;
    }

    return Math.max(lastColorIdx - firstColorIdx, colors.length - 1 - secondOption);
};

// maximumDifference between increasing elements
function maximumDifference(nums) {
    let maxDiff = -1;
    let min = +Infinity;

    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        if (nums[i] !== min) {
            maxDiff = Math.max(maxDiff, nums[i] - min);
        }

        // console.log({min}, nums[i], {maxDiff})
    }

    return maxDiff;
}

// richest customer wealth

function maximumWealth(accounts) {
    let max = 0;
    for (let account of accounts) {
        let wealth = sumAccounts(account);
        max = Math.max(max, wealth);
    }

    return max;
}

function sumAccounts(person) {
    let wealth = 0;

    for (let account of person) {
        wealth += account;
    }

    return wealth;
}

// check if N and its double exist
var checkIfExist = function (arr) {
    let indices = {};

    for (let i = 0; i < arr.length; i++) {
        let half = arr[i] / 2;
        let double = arr[i] * 2;
        console.log({ half, double, indices })
        if (indices[half] !== undefined || indices[double] !== undefined) return true;
        indices[arr[i]] = i;
    }
    return false;
};

// validMountain
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;

    let i = 1;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false;
        if (arr[i] < arr[i - 1]) break;
    }
    if (i === arr.length || i === 1) return false;

    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) return false;
        if (arr[i] < arr[i + 1]) return false;
        i++;
    }

    return true;
};

// sort even on left and odd on right
// An inPlace solution that uses O(n) runtime and O(1) additional space complexity
var sortArrayByParity = function (nums) {
    let leftLookingForOdd = 0;
    let rightLookingForEven = nums.length - 1;

    while (leftLookingForOdd < rightLookingForEven) {
        while (nums[leftLookingForOdd] % 2 === 0 && leftLookingForOdd < rightLookingForEven) leftLookingForOdd++;
        while (nums[rightLookingForEven] % 2 !== 0 && leftLookingForOdd < rightLookingForEven) rightLookingForEven--;

        [nums[leftLookingForOdd], nums[rightLookingForEven]] = [nums[rightLookingForEven], nums[leftLookingForOdd]];
        leftLookingForOdd++;
        rightLookingForEven--;
    }
    return nums;
};

// Pacific Atlantic Water Flows
function pacificAtlantic(heights) {
    let ROWS = heights.length;
    let COLS = heights[0].length;

    // Sets of coordinates that keeps track of whether that cell is accessible from the pacific or atlantic ocean
    let pacific = new Set();
    let atlantic = new Set();

    function dfs(r, c, visitedSet, prevHeight = heights[r][c]) {
        // check if the cell is within bounds or already visited and return
        let currCoord = [r, c].toString();
        if (visitedSet.has(currCoord) || r < 0 || c < 0 || r === ROWS || c === COLS || heights[r][c] < prevHeight) return;
        else visitedSet.add(currCoord);

        dfs(r + 1, c, visitedSet, heights[r][c]);
        dfs(r, c + 1, visitedSet, heights[r][c]);
        dfs(r - 1, c, visitedSet, heights[r][c]);
        dfs(r, c - 1, visitedSet, heights[r][c]);
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pacific, heights[0][c]);
        dfs(ROWS - 1, c, atlantic, heights[ROWS - 1][c]);
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pacific, heights[r][0]);
        dfs(r, COLS - 1, atlantic, heights[r][COLS - 1]);
    }
    console.log({ pacific, atlantic });

    let bothPacificAndAtlantic = [];
    for (let coord of pacific) {
        if (atlantic.has(coord)) {
            bothPacificAndAtlantic.push(coord.split(","));
        }
    }

    return bothPacificAndAtlantic;
}

// subtree of another tree
function isSubtree(root, subroot) {
    let toVisitQueue = [root];

    while (toVisitQueue.length) {
        let node = toVisitQueue.shift();

        if (node.val === subroot.val && isSame(node, subroot)) {
            return true;
        } else {
            if (node.left) toVisitQueue.push(node.left);
            if (node.right) toVisitQueue.push(node.right);
        }
    }
    return false;
};


function isSame(node1, node2) {
    let toVisit1 = [node1];
    let toVisit2 = [node2];

    while (toVisit1.length && toVisit2.length) {
        let curr1 = toVisit1.shift();
        let curr2 = toVisit2.shift();
        if (!curr1 && !curr2) continue;
        if (!curr1 || !curr2) return !curr1 && !curr2;
        if (curr1.val !== curr2.val) return false;
        toVisit1.push(curr1.left, curr1.right);
        toVisit2.push(curr2.left, curr2.right);
    }
    return toVisit1.length === toVisit2.length;
}

// Invert Binary Tree
function invertTree(root) {
    if (!root) return root;
    let toVisitStack = [root];

    while (toVisitStack.length) {
        let curr = toVisitStack.pop();
        [curr.left, curr.right] = [curr.right, curr.left];

        if (curr.left) toVisitStack.push(curr.left);
        if (curr.right) toVisitStack.push(curr.right);
    }

    return root;
}

// Construct Binary Tree from Preorder and Inorder Traversal
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    // We know that in PreOrder traversal, the first node in the array is ALWAYS the root node
    let root = new TreeNode(preorder[0]);

    // We need to find the idx of the root in the inorder array so that we know which values are on
    // the left and right sides
    let midIdx = inorder.indexOf(preorder[0]);

    // We call buildTree with the left subtree array 
    // (preorder: everything after the root and before the midIdx)
    // (inorder: everything before the midIdx)
    root.left = buildTree(preorder.slice(1, midIdx + 1), inorder.slice(0, midIdx));
    // We call buildTree with the right subtree array (everything to the right of the midIdx)
    root.right = buildTree(preorder.slice(midIdx + 1), inorder.slice(midIdx + 1));
    return root;
};

// Binary Tree Level Order Traversal
// BFS && you need to keep track of how many nodes are in each level

var levelOrder = function (root) {
    if (!root) return [];

    let toVisitQueue = [root];
    let output = [];

    while (toVisitQueue.length) {
        let currOutput = [];
        let levelLength = toVisitQueue.length;
        while (levelLength > 0) {
            let curr = toVisitQueue.shift();
            currOutput.push(curr.val);
            if (curr.left) toVisitQueue.push(curr.left);
            if (curr.right) toVisitQueue.push(curr.right);
            levelLength--;
        }
        output.push(currOutput);
    }
    return output;
};

// Validate Binary Search Tree
// DFS + Recursion
// Reminder, we need to check for examples of [5,1,4,null,null,3,6] where 3 is on the right side of the
// root node but is less than the root node val.

function isValidBST(root, lowerBound = -Infinity, upperBound = +Infinity) {
    if (!root) return true;
    if (root.val <= lowerBound || root.val >= upperBound) return false;

    return (isValidBST(root.left, lowerBound, root.val) && isValidBST(root.right, root.val, upperBound));
}

// Set Matrix Zeroes
function setZeroes(matrix) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let rowZeroes = false;

    // find all the 0's
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;

                if (i > 0) matrix[i][0] = 0;
                else rowZeroes = true;
            }
        }
    }

    // update the inner rows and columns
    for (let k = 1; k < ROWS; k++) {
        for (let l = 1; l < COLS; l++) {
            if (matrix[0][l] === 0 || matrix[k][0] === 0) {
                matrix[k][l] = 0;
            }
        }
    }

    // update the first column
    if (matrix[0][0] === 0) {
        for (let i = 0; i < ROWS; i++) {
            matrix[i][0] = 0;
        }
    }

    // update the first row
    if (rowZeroes) {
        for (let i = 0; i < COLS; i++) {
            matrix[0][i] = 0;
        }
    }

    return matrix;
}

// Spiral Matrix
// We create four boundaries: left, right, top and bottom
// Starting in the top left corner we copy the matrix values as we move from left to right
// We then go down, left and back up. We update the boundaries every time we finish a row/column

function spiralOrder(matrix) {
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;
    let spiral = [];

    while (left < right && top < bottom) {
        // going from left to right
        for (let i = left; i < right; i++) {
            spiral.push(matrix[top][i]);
        }
        top++;

        // going from top to bottom
        for (let j = top; j < bottom; j++) {
            spiral.push(matrix[j][right - 1]);
        }
        right--;

        // We need this break to stop duplicating some cells where left === right for example
        if (left >= right || top >= bottom) break;

        // going from right to left
        for (let k = right - 1; k >= left; k--) {
            spiral.push(matrix[bottom - 1][k]);
        }
        bottom--;

        // going from bottom to top
        for (let l = bottom - 1; l >= top; l--) {
            spiral.push(matrix[l][left]);
        }
        left++;

    }
    return spiral;
}

function findKClosestPoints(points, k) {
    // if (points.length === k) return points;

    let distances = [];

    for (let [x, y] of points) { //[-2, 2]
        let currDistance = Math.sqrt((x ** 2) + (y ** 2)); // 2
        let coord = [x, y].toString(); // '[1,3]'
        distances.push([currDistance, [x, y]]);// [{ [1,3] : 3 }, { [-2, 2] : 2}]
    }
    distances.sort((a, b) => a[0] - b[0]); // [{ [-2, 2] : 2}, { [1,3] : 3 }]

    return distances.slice(0, k).map(e => e[1]); // [-2,2]
}

// CHeck if Every Row and Column Contains All Numbers
var checkValid = function (matrix) {
    let length = matrix.length;

    //     function checkRow(r) {
    //         let nums = new Set ();

    //         for (let i = 0; i < length; i++) {
    //             if (nums.has(matrix[r][i])) return false;
    //             nums.add(matrix[r][i]);
    //         }
    //         return true;
    //     }

    function checkRow(r) {
        let nums = new Set(matrix[r]);
        return nums.size === length;
    }

    function checkCol(c) {
        let nums = new Set();

        for (let i = 0; i < length; i++) {
            if (nums.has(matrix[i][c])) return false;
            nums.add(matrix[i][c]);
        }
        return true;
    }

    for (let i = 0; i < length; i++) {
        if (!checkRow(i) || !checkCol(i)) return false;
    }

    return true;
};

// Matrix Diagonal Sum
var diagonalSum = function (mat) {
    let visited = new Set();
    let sum = 0;

    for (let i = 0; i < mat.length; i++) {
        let coord = [i, i].toString();
        if (!visited.has(coord)) {
            visited.add(coord);
            sum += mat[i][i];
        }
    }

    let row = mat.length - 1;
    let col = 0;
    while (col < mat.length) {
        let coord = [row, col].toString();
        if (!visited.has(coord)) {
            visited.add(coord);
            sum += mat[row][col];
        }
        row--;
        col++;
    }

    return sum;
};

// isValidSudoku
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        if (!checkRow(i)) return false;
    }

    for (let i = 0; i < board.length; i++) {
        if (!checkCol(i)) return false;
    }

    let squares = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') continue;
            let bigR = Math.floor(i / 3);
            let bigC = Math.floor(j / 3);
            let square = [bigR, bigC].toString();
            if (squares[square] === undefined) {
                squares[square] = new Set(board[i][j]);
            } else {
                if (squares[square].has(board[i][j])) return false;
                else (squares[square].add(board[i][j]));
            }
        }
    }


    function checkRow(r) {
        let nums = new Set();
        for (let i = 0; i < board.length; i++) {
            let currNum = board[r][i];
            if (currNum === '.') continue;
            if (!nums.has(currNum)) nums.add(currNum);
            else return false;
        }
        return true;
    }

    function checkCol(c) {
        let nums = new Set();
        for (let i = 0; i < board.length; i++) {
            let currNum = board[i][c];
            if (currNum === '.') continue;
            if (!nums.has(currNum)) nums.add(currNum);
            else return false;
        }
        return true;
    }

    return true;
};


// Word Search
// Backtracking & Recursion
function exist(board, word) {

    function findWord(x, y, letterSeekingIdx = 0) {
        // if this is not the letter that we're looking for, return false
        if (board[x][y] !== word[letterSeekingIdx]) return false;
        // if this letter matches the last letter in the word and we are at the end of our 
        // search then we can return true
        if (letterSeekingIdx === word.length - 1) return true;

        // We update the cell to something distinctly different so that we know that we have
        // already visited this cell
        board[x][y] = 1;

        // If x/y are within the constraints and if we call findWord with the updated constraints
        // if we find a solution by going down this path, we should return true, otherwise,
        // we keep searching through the other possibilities
        if (x < board.length - 1 && findWord(x + 1, y, letterSeekingIdx + 1)) return true;
        if (y < board[x].length - 1 && findWord(x, y + 1, letterSeekingIdx + 1)) return true;
        if (x > 0 && findWord(x - 1, y, letterSeekingIdx + 1)) return true;
        if (y > 0 && findWord(x, y - 1, letterSeekingIdx + 1)) return true;

        // If we have gone through all of the four steps above and have not returned true already
        // then we have not found the end of our word and we need to backtrack by resetting
        // board[x][y] so it can be revisited again later if needed. We also return false because
        // it was a dead end
        board[x][y] = word[letterSeekingIdx];
        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && findWord(i, j, 0)) return true;
        }
    }
    return false;
}

// Count Number of Pairs with Absolute Difference K
// Similar to TwoSum, we loop through the keys in the counter object to find
// the neededNum (in this case, it is key + k). 
// Instead of incrementing, we multiply the counts for the NeededNum and the Key
// This might be better implemented as a Map since we know that the ordering will be
// consistent
function countKDifference(nums, k) {
    let counter = {};
    let count = 0;

    for (let num of nums) {
        counter[num] = ++counter[num] || 1;
    }

    for (let key in counter) {
        let neededNum = Number(key) + k;
        if (counter[neededNum] !== undefined) {
            count += counter[neededNum] * counter[key];
        }
    }
    return count;
}

// Two Sum 2 - Input Array is Sorted
// Using a two pointer approach, we start on both ends and work our way in
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
}

// Two Sum Less than K
// Similar to Two Sum 2, we use two pointers to calculate the current sum
// If the sum is less than K, we find the maxSum and we increment left
// otherwise, we decrement right
// At the end, if we were unable to find any numbers return -1

function twoSumLessThanK(nums, k) {
    let maxSum = -Infinity;

    num.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum < k) {
            maxSum = Math.max(maxSum, sum);
            left++;
        } else {
            right--;
        }
    }

    return maxSum === -Infinity ? -1 : maxSum;
}

// Permutations
var permute = function (nums) {
    let result = [];
    // Create a base case when the nums array has only one element
    if (nums.length === 1) return [[...nums]] // [[1]]

    // We never do anything with i but we want to shift nums array num.length number of times
    // i.e. we want to remove the first element and then add it back to the end until we get 
    // back to the very first element
    for (let i = 0; i < nums.length; i++) {
        // We remove the first element in the array
        let numToAppend = nums.shift(); 
        // We call permute with the shortened nums array and save the results in a variable
        let permutations = permute(nums); // [[1],[2]]

        // We loop through the resulting permutations array and add numToAppend back to the end of
        // inner arrays [[1],[2]] => [[1,3], [2,3]]
        for (let perm of permutations) {
            perm.push(numToAppend); // [[1,3], [2,3]]
        }

        // We need to backtrack/reset nums by adding back the number we just shifted so that 
        // nums.length remains the same
        nums.push(numToAppend);

        // We push all the permutations that we just created into the results array which becomes
        // the permutations variable when we call the function
        result.push(...permutations);
    }

    return result;
};