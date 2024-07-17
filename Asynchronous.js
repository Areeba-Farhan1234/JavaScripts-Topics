function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

async function fetchDataAndProcess() {
  try {
    console.log("Dear");

    // Await the fetchData function
    const data = await fetchData();

    console.log(data); // Output: 'Data fetched using Async/Await'
    console.log("Areeba");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAndProcess();














// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 2000);
//   });
// }

// async function fetchDataAndProcess() {
//   console.log("Fetching data...");

//   // Await the fetchData function
//   const data = await fetchData();

//   console.log(data); // Output: 'Data fetched'
//   console.log("Data processing complete.");
// }

// fetchDataAndProcess();
