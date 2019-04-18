// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i -1];
  })
};

// accumulator:
// The accumulator accumulates the callback's return values; it is the accumulated
// value previously returned in the last
// invocation of the callback, or initialValue,
// if supplied (see below).

console.log(palindrome("abcdefgabcdefg"));
palindrome("abba");
module.exports = palindrome;

// Option 1 (split - reduce):
// function palindrome(str) {
//   const revWord = str.split("")
//                      .reduce((acc, cur) => cur + acc)
//     return str === revWord;
// };

// Option 2 (split_reverse_join):
// function palindrome(str) {
//   const revWord = str.split("")
//                      .reverse()
//                      .join();
//     if (str === revWord) {
//       return true;
//     } else {
//       return false
//     }
// };

// Option 3 (split_and_ every):
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length -i -1];
//   })
// };

// accumulator: accumulates the callback's return values;
// it is the accumulated value previously returned in the last
// invocation of the callback, or initialValue,
// if supplied.

// currentValue: The current element being processed in the array.

// The first time the callback is called,
// accumulator and currentValue can be one of two values.
// If initialValue is provided in the call to reduce(),
// then accumulator will be equal to initialValue,
// and currentValue will be equal to the first value in the array.
// If no initialValue is provided,
// then accumulator will be equal to the first value in the array,
// and currentValue will be equal to the second.
