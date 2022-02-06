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