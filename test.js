// counter = {} 'h' => counter {h:1}
// counter = {h:1} 'e'
// counter = {h:1, e:1} 'l'
// counter = {h:1, e:1, l:1} 'l'
// return false

// counter = {} 'a'
// counter = {a:1} '3'
// counter = {a:1, 3:1} '6'
// counter = {a:1, 3:1, 6:1}
// counter = {a:1, 3:1, 6:1, w:1}
// return true

// this passes my tests. let me know if you have any feedback.
















//123
//_        _        _
//1*100 + 2*10 + 3*1

// 4 0
// 10 * 4 => 








// 1 0
// 0 1
// 16 ** 0 * 0 => 0
// 16 ** 1 * 1 => 16

// 20 => 32
// 0 2
// 16 ** 0 * 0 => 0
// 16 ** 1 * 2 => 32

// prev = a, curr = b, next = c
// next = d, b.next = a, prev = b, curr = c 
// next = e, c.next = b, prev = c, curr = d
// next = undefined, d.next = c, prev = d, curr = e;