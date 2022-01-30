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

















