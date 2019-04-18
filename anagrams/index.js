// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
};


function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

console.log(anagrams("One oneol", "eleno eno"));
console.log(anagrams("BlA", "AlB"))
//console.log(anagrams("dadjaj", "audhaud"))

module.exports = anagrams;

// My solution:
//
// stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
// stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("");
// let objectA = {};
// let objectB = {};
//
// for (let i of stringA) {
//   if (objectA[i]) {
//     objectA[i]++;
//   } else {
//     objectA[i] = 1;
//   }
// }
// console.log(objectA);
//
// for (let j of stringB) {
//   if (objectB[j]) {
//     objectB[j]++;
//   } else {
//     objectB[j] = 1;
//   }
// }
// console.log(objectB);
// let isAnagram = false;
// const countA = Object.keys(objectA).length;
// const countB = Object.keys(objectB).length;
//
// if (countA !== countB) {
//   return false;
// };
//
// for (let a in objectA) {
//   for (let b in objectB) {
//
//     if (a === b) {
//       if (objectA[a] === objectB[b]) {
//         isAnagram = true;
//       } else {
//         isAnagram = false;
//         return false;
//       }
//     }
//   }
// }
// return isAnagram;

// Stephen Grider's solution: ver.. algo errado

// const aCharMap = buildCharMap(stringA);
// const bCharMap = buildCharMap(stringB);
//
// if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//   return false;
// }
// console.log(Object.keys(aCharMap).length);
// for (let char in aCharMap) {
//   if (aCharMap[char] !== bCharMap[char]) {
//     return false;
//   }
// }
//
// return true;
// };
//
// // We create a helper function to take out all of ponctuation and spaces of stringA
// // and stringB:
//
// function buildCharMap(str) {
// const charMap = {};
//
// for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
// charMap[char] = charMap[char] + 1 || 1;
// }
//
// return charMap;
// // if charMap[char] doesn't have the char element of str (first hipothesis),
// // then set charMap[char] to one [it will add the element in the empty charMap].
// // Otherwise, if it is already there, charMap[char]++:
