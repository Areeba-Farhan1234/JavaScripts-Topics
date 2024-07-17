// Asynchronous Function

//Promisw

// function fetchData() {
//   return new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Error fetching data");
//       }
//     }, 2000);
//   });
// }


// fetchData()
//   .then((data) => {
//     console.log(data); 
//   })
//   .catch((error) => {
//     console.error(error); 
//   });



// Async / await 
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 2000);
//   });
// }

// async function fetchDataAndProcess() {
//   try {
//     console.log("Dear");

   
//     const data = await fetchData();

//     console.log(data); 
//     console.log("Areeba");
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchDataAndProcess();









