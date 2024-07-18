// IIFE Functions

//IIFE (Immediately Invoked Function Expressions)

const counters = (function() {
  let count = 0;

  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counters.increment()); // Output: 1
console.log(counters.increment()); // Output: 2
console.log(counters.decrement()); // Output: 1
console.log(counters.getCount());  // Output: 1
