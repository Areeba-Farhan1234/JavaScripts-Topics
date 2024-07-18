// // Promise and Promise Chaining Function

// //Promise
// const Promises = new Promise((resolve, reject) => {
  
//   let success = true; 

//   if (success) {
//     resolve('Operation succeeded!');
//   } else {
//     reject('Operation failed.');
//   }
// });

// Promises
//   .then((message) => {
//     console.log(message); // Output: Operation succeeded!
//   })
//   .catch((error) => {
//     console.log(error); // Output: Operation failed. (if success is false)
// });

// //Promise Chaining

// // First promise function
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data fetched');
//     }, 1000);
//   });
// }

// // Second promise function
// function processData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${data} and processed`);
//     }, 1000);
//   });
// }

// // Third promise function
// function saveData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${data} and saved`);
//     }, 1000);
//   });
// }

// // Chaining the promises
// fetchData()
//   .then((data) => {
//     console.log(data); 
//     return processData(data);
//   })
//   .then((processedData) => {
//     console.log(processedData);
//     return saveData(processedData);
//   })
//   .then((savedData) => {
//     console.log(savedData); 
//   })
//   .catch((error) => {
//     console.error(error);
//   });
