// //Generators and Iterators Functions

// //Generators

// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = numberGenerator();

// console.log(iterator.next().value); // Output: 1
// console.log(iterator.next().value); // Output: 2
// console.log(iterator.next().value); // Output: 3
// console.log(iterator.next().value); // Output: undefined



// // Iterators
// const numbers = [1, 2, 3];

// const arrayIterator = {
//   index: 0,
//   next: function() {
//     if (this.index < numbers.length) {
//       return { value: numbers[this.index++], done: false };
//     } else {
//       return { value: undefined, done: true };
//     }
//   }
// };

// console.log(arrayIterator.next().value); // Output: 1
// console.log(arrayIterator.next().value); // Output: 2
// console.log(arrayIterator.next().value); // Output: 3
// console.log(arrayIterator.next().value); // Output: undefined





// // Generators and Iterators


// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = numberGenerator();

// for (const value of iterator) {
//   console.log(value); // Output: 1, 2, 3
// }
