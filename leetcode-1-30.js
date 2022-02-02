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










