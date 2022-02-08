// Meeting Rooms
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) return false;
    }

    return true;
}

// Merge Intervals
function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        let [lastStart, lastEnd] = merged[merged.length - 1];

        if (start <= lastEnd) {
            merged[merged.length - 1] = [lastStart, Math.max(end, lastEnd)];
        } else {
            merged.push(intervals[i]);
        }

    }
    return merged;
}

// Insert Interval
/*
Three cases:
1 - If we have already added newInterval or the current interval ends before the new one starts
2 - If newInterval ends before the current one starts
3 - If there is an overlap that requires a merge
*/
function insert(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    let merged = [];

    for (let [start, end] of intervals) {
        if (!newInterval || end < newInterval[0]) { // [1,5] and [6,7] => 5 < 6
            merged.push([start, end]);
        } else if (newInterval[1] < start) { //[0,0] and [1,5] => 0 < 1
            merged.push(newInterval, [start, end]);
            newInterval = null;
        } else { // start, end = [1, 9] new Interval = [4,7]
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }

    // If newInterval is not null, we know we still need to add it in
    if (newInterval) merged.push(newInterval);

    return merged;
}

// Minimum Number of Meeting Rooms Needed

function minMeetingRooms(intervals) {
    let starts = [];
    let ends = [];

    for (let [start, end] of intervals) {
        starts.push(start);
        ends.push(end);
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let startsPointer = 0;
    let endsPointer = 0;
    let currCount = 0;
    let maxCount = 0;

    while (startsPointer < starts.length) {
        if (starts[startsPointer] < ends[endsPointer]) {
            currCount++;
            startsPointer++;
        } else {
            currCount--;
            endsPointer++;
        }
        maxCount = Math.max(currCount, maxCount);
    }

    return maxCount;
}

// Sort Array by Parity 2
var sortArrayByParityII = function(nums) {
    let odds = [];
    let evens = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) evens.push(nums[i]);
        else odds.push(nums[i]);
    }

    let result = [];
    let idx = 0;

    while (idx < odds.length && idx < evens.length) {
        result.push(evens[idx], odds[idx]);
        idx++;
    }

    return result;
};

// Looping through only once, we create a new array and fill it with the even
// and odd numbers that we find
function sortArrayByParityII (nums) {
    let result = [];
    let odds = 1;
    let evens = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result[evens] = nums[i];
            evens += 2;
        } else {
            result[odds] = nums[i];
            odds += 2;
        }
    }

    return result;
}

// In Place Solution
function sortArrayByParityII(nums) {
    // We loop through the even indices in the nums array until we find a number that is odd
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] % 2 !== 0) {
            // We then loop through the odd indices until we find a number that is even
            for (let j = 1; j < nums.length; j += 2) {
                if (nums[j] % 2 === 0) {
                    // We swap the odd number that is at an even index with the even number that is at an odd index
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
            }
        }
    }
    return nums;
}
// Number of Connected Components in an Undirected Graph
function countComponents(n, edges) {
    let connections = {};
    let count = 0;

    // We create an adjacency list from the edges
    for (let [node1, node2] of edges) {
        connections[node1] ? connections[node1].push(node2) : connections[node1] = [node2];
        connections[node2] ? connections[node2].push(node1) : connections[node2] = [node1];
    }

    // We create a visited set that will allow us to keep track of the nodes that we have already
    // visited so that we do not visit them again
    let visited = new Set();

    /* We loop through each node from 0 to n and check if it has been visited already.
       If it hasn't, then we'll add the node to the visited set, increment our count
       and start out toVisitQueue with the current node in the queue. When we finish the
       bfs, we will have visited all of the nodes that are connected. 

       As we continue to loop through 0 to n, if there are any other nodes that are not 
       in the visited set, that means they were not connected in any previous nodes that 
       were visited so we can increment count++ and run bfs again.
    */
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++;
            let toVisitQueue = [i];
            visited.add(i);

            while (toVisitQueue.length) {
                let curr = toVisitQueue.shift();
                let neighbours = connections[curr];

                if (neighbours) {
                    for (let neighbour of connections[curr]) {
                        if (!visited.has(neighbour)) {
                            visited.add(neighbour);
                            toVisitQueue.push(neighbour);
                        }
                    }
                }

            }
        }
    }

    return count;
}

// Find the Celebrity

var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        let potentialCelebrity = 0;

        for (let i = 1; i < n; i++) {
            if (knows(potentialCelebrity, i)) {
                potentialCelebrity = i;
            }
        }

        for (let i = 0; i < n; i++) {
            if (i !== potentialCelebrity && knows(potentialCelebrity, i) || (!knows(i, potentialCelebrity))) return -1;
        }

        return potentialCelebrity;
    };
};

// Subsets
// Backtracking
var subsets = function (nums) {
    let results = [];
    let currentSubset = [];

    function dfs(i) {
        // Base Case, if we have reached nums.length, we can copy the current subset 
        // into the results array.
        if (i >= nums.length) {
            results.push([...currentSubset]);
            return;
        }
        
        // We add the current number into the current subset and call dfs on the next number
        currentSubset.push(nums[i]);
        dfs(i + 1);

        // We backtrack and remove the number we just added 
        currentSubset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return results;
};