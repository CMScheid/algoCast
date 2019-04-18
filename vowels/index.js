// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const checker = "aeiou";

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
    count++;
    }
  }
  return count;
}

vowels("Carla Montibeller Scheid")

module.exports = vowels;



// Mine solution:
// function vowels(str) {
//   const isVowel = ["a", "e", "i", "o", "u"];
//   let numberOfVowel = 0
//   let notAVowel = 0;
//
//      for (char l of str.toLowerCase().split("")) {
//        for (char v of isVowel) {
//          if (l === v) {
//           numberOfVowel += 1;
//          } else {
//           notAVowel += 1
//          }
//        }
//      }
//      console.log(numberOfVowel)
//   return numberOfVowel;
//
// }
