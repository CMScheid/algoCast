// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

let chars = {};
let capsule = []
let mostFrequent;

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
console.log(chars);

// Now, we iterate 'in' chars, tha has already separated keys and values.
// We use in, when we iterate in objects.

  for (let char in chars) {
    if (chars[char] > capsule) {
       capsule = chars[char];
       mostFrequent = capsule
       // mostFrequent is the value (char)
    }
  }
  console.log(mostFrequent)
}
// console.log("The most frequent char in the string appears: " + capsule + " times.");
// console.log("The char is: " + mostFrequent)
//
// return mostFrequent;
//
// };
//
// maxChar("abcccccccd");

module.exports = maxChar;
maxChar("12343435")
