// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row = 0, stair = "") {

    if (n === row) {
    return;
    }

    if (stair.length === 2*n-1) {
    console.log(stair);
    pyramid(n, row + 1);
    return;
   }

   const midPoint = (2*n-1)/2;
   let add;
   if (midPoint - row <= stair.length && midPoint + row >= stair.length) {
     add += "#";
   } else {
     add += " ";
   }
   pyramid(n, row, stair + add)
};
pyramid(5)

module.exports = pyramid;


// function pyramid(n) {
//   const midPoint = Math.floor((2*n-1)/2);
//   const range = 2*n-1;
//
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//
//     for (let column = 0; column < range; column++) {
//       if(midPoint - row <= column && midPoint + row >= column) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//   console.log(stair);
//   }
// };
