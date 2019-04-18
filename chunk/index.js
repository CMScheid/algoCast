// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
const finalArray = [];
let i = 0;

    while(i < array.length) {
      finalArray.push(array.slice(i, i+size));
      i+=size;
    }
return finalArray;
}

chunk(['a','b','c',4,5,6,'vive',"la", "vie", "carla", "ama" , "luiz", 5, 6],3);

module.exports = chunk;


// My solution:
// function chunk(array, size) {
// let finalArray = [];
// let tempArray = []
//
//     for (let i = 0; i < array.length; i+=size) {
//       tempArray = array.slice(i, i+size);
//         if (tempArray.length === size){
//           finalArray.push(tempArray);
//         } else {
//           finalArray.push(tempArray)
//         }
//       tempArray = [];
//
//     }
// return finalArray;
// }

// Solution 1:
// Create an empty array to hold chunks "finalArray";
// for each element in the unchunked array (chunk)
// Retrieve the last element in "finalArray"
// IF last element doesn't exist OR IF its length is equal to 'chunk' size
// PUSH a new chunk (finalArray) with the element inside
// ELSE push/add the element into the finalArray.
// The first iteration will run throught the first hipothesis (!last)
// The second iteration will run throught ELSE hipothesis
// When subarray is completed, the last.length hipothesis will run and a new
// subarray will be created, if possible.

// function chunk(array, size) {
// const finalArray = [];
//
//       for (let element of array) {
//         const last = finalArray[finalArray.length - 1];
//         console.log(last);
//
//         if(!last || last.length === size){
//           finalArray.push([element]);
//         } else {
//             last.push(element);
//         }
//       }
// return finalArray;
// }
