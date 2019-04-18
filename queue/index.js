// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
//   const q = new Queue();
//
//   q.unshift(1);
//   console.log(q);
//
//   q.pop()
// }

function sockMerchant(n, ar) {
   let obj = {}
   let pair = 0;

   for (let i of ar) {
      if (!obj[i]) {
      obj[i] = 1
      } else {
      obj[i]++
      }

   }

  for (let i in obj) {
    if (obj[i] >= 2 && obj[i]%2 === 0) {
      pair = (pair + 1) / 2
    } else {

    }
    console.log(pair)
    // console.log(pair)
  }
   return pair
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// module.exports = Queue;
