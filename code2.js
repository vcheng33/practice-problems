// string: uses every letter in the alphabet at least once

'the quick fox jumps over the lazy brown something' //
// for testing purposes, make the alphabet shorter so that you can go through the entire test

function pangram(string) {
    let counter = new Set(string.toLowerCase());
    if (counter.has(' ')) return counter.size === 27;
    return counter.size === 26;
}


// print every other item in a linked list recursively. Assume you have a linked list class
// [a, b, c, d, e] => 'a', 'c', 'e'
// assume you have a node with  a val and next

function printEveryOther(node, counter = 0) {
    if (!node) return;
    if (counter % 2 === 0) console.log(node.val);
    printEveryOther(node.next, counter + 1);
}

// Takes [x,y] coordinate for king and queen
// return true/false if king is in check

// [ [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]], 
//   [[1,0],[1,1],queen[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]],
//   [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7]],
//  [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], ]

function kingInCheck(king, queen) {
    let [x,y] = king;
    let [w,z] = queen;

    let firstCoordinate = w >= x - 1 && w <= x + 1;
    let secondCoordinate = z >= y - 1 && z <= y + 1;

    return (firstCoordinate && secondCoordinate);
}





// string that's a hexadecimal and convert it in decimal
// 0123456789ABCDEF
            //10,11,12,13,14, 15

// 10 in hexadecimal to 16 in decimal
// 20 => 32

// 4    1    0
//      _    _
//16**2 16**1 16**0 
// F in hexadecimal to 15 in decimal

// assume always uppercase, always valid characters

// 2 ** 0 = 1       // 16 ** 0 = 1
// 2 ** 1 = 2       // 16 ** 1 = 16
// 2 ** 2 = 4       // 16 ** 2 = 256

// create some kind of global variable for hexadecimal

// function should take in a string and we loop through the characters in the string
// multiply it by 16
// We find that index in the global variable for hexidecimal and then add it to our sum variable
// at the end of the loop we'll return the sum

const HEXADECIMAL = '0123456789ABCDEF'; // Create an object 

function convertHexadecimalToDecimal(str) {
    let sum = 0;
    str = str.reverse();

    for (let i = 0; i < str.length; i++) {
        sum += 16 ** i * HEXADECIMAL.indexOf(str[i]); // *HEXADECIMAL.indexOf(str[i])
    }

    return sum;
}






// reverse a linkedlist in place
// [a, b, c] => [c,b,a]
// [a,b,c,d,e] => [e,d,c,b,a]
// prev = a, curr = b, next = c
// 

// create a curr node
// create a prev node
// create a next node

function reversedLinkedList(node) {
    let prev = node;
    let curr = prev.next;
    let next = curr.next;
    prev.next = null;

    while (!next) {
        next = curr.next.next;
        curr.next = prev;
        prev = curr;
        curr = curr.next;
    }
    return curr;
}

// 'hello$$joel', splitter $$, should return the array [hello, joel]

function split(str, splitter) {
    let result = [];

    for (let i = 0; i < splitter.length; i++) {
        let splitStr = '';
        for (let j = 0; j < str.length - splitter.length; j++) {
            if (str[j] !== splitter[i]) {
                splitStr += str[j];
            }
        }
    }
}

function split(str, splitter) {
    let result = [];

    while (str.includes(splitter)) {
        let splitterIdx = str.indexOf(splitter);
        result.push(str.substring(0, splitterIdx));
        str = str.substring(splitterIdx);
    }
    result.push(str);
    return result;
}