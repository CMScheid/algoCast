// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
// Solution by using recursion:
    if ( str.length <= 1 ) {
      return str;
    }
  return reverse( str.substring( 1 ) ) + str[ 0 ];
};

reverse("world");
console.log(reverse("world time"))

module.exports = reverse;



// Caso 1:
// 1. Turn string into an array
// 2. Call reverse method on the array
// 3. Join the array back into a string
// 4. return all this into a result:

// function reverse(str) {
//   const arr = str.split('')
//   arr.reverse()
//   return arr.join('');
// }
// OU:
// function reverse(str) {
//   return str
//   .split('')
//   .reverse()
//   .join('');
// }

// Caso 2:(loop)
// 1. Create an empty string called reversed
// 2. for Each character in the provided the string
// 3. Take the character and add it to the start of reversed
// 4. Return variable reversed:

// function reverse(str) {
//   let reversed = "";
//
//   for (let character of str) {
//     reversed = character + reversed;
//     console.log(reversed);
//   }
//
// Caso 3:
// 1. Turn string into array;
// 2. Use reduce() Method;

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
//   }
//
// reverse("world");

// Debug:
// Use "debugger" to stop running/executing;
// 1. Add a debugger statement in your function
// 2. Call the function manually
// 3. At the terminal use: node inspect index.js
// 4. To continue execution on the file, press c and then enter
// 5. To launch a repl session, type repl and then enter
// 6. To exit repl, press Ctrl+C

// Caso 4: Solution by using recursion:
// 1. Figure out the bare minimum pieces of information to represente your problem
// 2. Give reasonable defaults to bare minimum pieces of info
// 3. Check the base case. Is there any work left to do?
// 4. Do some work. Call your function again, making sure the arguments have changed in some fashion
// 5. In recursion we call the function itself to run eternally or until find a break
// 6. Substring returns a portion of the string, starting at the specified index
//    and extending for a given number of characters afterward.
//
// function reverse(str) {
//     if ( str.length <= 1 ) {
//       return str;
//     }
//   return reverse( str.substring( 1 ) ) + str[ 0 ];
// };
