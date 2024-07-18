// //High Order Functions 

// // Higher-order function

// function applyOperation(operation, a, b) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// const resultAdd = applyOperation(add, 5, 3); // Output: 8
// const resultSubtract = applyOperation(subtract, 5, 3); // Output: 2
// const resultMultiply = applyOperation(multiply, 5, 3); // Output: 15
// const resultDivide = applyOperation(divide, 10, 2); // Output: 5

// console.log(`Addition: ${resultAdd}`); // Output: Addition: 8
// console.log(`Subtraction: ${resultSubtract}`); // Output: Subtraction: 2
// console.log(`Multiplication: ${resultMultiply}`); // Output: Multiplication: 15
// console.log(`Division: ${resultDivide}`); // Output: Division: 5


// // Higher-Order Functions: map()
// const numbers1 = [1, 2, 3, 4, 5];

// function double(num) {
//   return num * 2;
// }

// const doubledNumbers = numbers1.map(double);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// // Higher-Order Functions: filter()
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers2.filter(num => num % 4 === 0);

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]






// // Higher-Order Functions: reduce()
// const numbers3 = [1, 2, 3, 4, 5];

// const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15
