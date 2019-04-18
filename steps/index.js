// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ATENTION: when string you cannot use push, when number don't need length...

function steps (n) {
for (let row = 0; row < n; row++) {
let stair = "";

   for (let column = 0; column < n; column++) {
     if(column <= row) {
       stair = stair + "#"
     } else {
       stair += " ";
     }
   }
console.log(stair);
}
};
steps(3);

module.exports = steps;

//let step = [];

// Steps:
// From 0 to n (iterate through rows)
// Create an empty string 'stair'
//   From 0 to n iterate through columns)
//   IF the current column is equal or less than the current row
//   Add a "#" to "stair"
//   ELSE
//   Add a 'space' to "stair"
// Console log stair

// Stephen Grider's first solution:
//
// function steps (n) {
// for (let row = 0; row < n; row++) {
// let stair = "";
//
//    for (let column = 0; column < n; column++) {
//      if(column <= row) {
//        stair = stair + "#"
//      } else {
//        stair += " ";
//      }
//    }
// console.log(stair);
// }
// };

// Recursion solution:

// function steps(n, row=0, stair="") {
//
//   if (n === row) {
//     return;
//   }
//
//   if (n === stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//     return;
//   }
//
//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }
//   steps(n, row, stair)
//   // or
//   // const add = stair.length <= row ? "#" : " ";
//   // steps (n, row, stair + add)
// };
