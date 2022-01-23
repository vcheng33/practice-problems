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