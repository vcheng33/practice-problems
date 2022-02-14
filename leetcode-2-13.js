// Find the town Judge
const assert = require('assert');

assert.equal(findJudge(2, [[1, 2]]), 2);
assert.equal(findJudge(3, [[1, 3], [2, 3]]), 3);
assert.equal(findJudge(3, [[1, 3], [2, 3], [3, 1]]), -1);

function findJudge(n, trust) {
    let trusted = new Array(n + 1).fill(0);

    for (let [trustedBy, trustedPerson] of trust) {
        trusted[trustedPerson]++;
        trusted[trustedBy]--;
    }
    console.log({ trusted })
    for (let i = 0; i <= n; i++) {
        if (trusted[i] === n - 1) return i;
    }

    return -1;
}