// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// MEMOIZATION: Store the arguments of each function call along with the result.
// If the function is called again with same arguments, return the precomputed
// result, rather than running the function again.
// This is a helper function
function memoize(fn) {
  const cache = {};

  return function (...args) {

    if (cache[args]) {
    return cache[args]
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
};

// this is the recursive solution:
function fib(n) {
 if (n < 2) {
   return n
 }

 return fib(n-1) + fib(n-2);
}

fib = memoize(fib);
fib(14);
module.exports = fib;

// RUNTIME of fibonacci is exponential,
// because every time I increase n it would almost double time to execute the function


// First solution:
// function fib(n) {
//
//   const results = [0, 1];
//
//   for (let i=2; i<=n;i++) {
//    results.push(results[i-2]+results[i-1])
//   }
// console.log(results)
// return results[n];
// }

// Second solution:
// function fib(n) {
//
//   const results = [0, 1];
//
//   for (let i=2; i<=n;i++) {
//    const a = results[i-2];
//    const b = results[i-1];
//
//    results.push(a + b)
//   }
// console.log(results)
// return results[n];
// }
