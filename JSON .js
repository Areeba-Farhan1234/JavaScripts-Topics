// JSON Functions 

//JSON Handling and Parsing

// JavaScript object
const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true
};


const jsonString = JSON.stringify(user);

console.log(jsonString);

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);
// Output: { name: 'John Doe', age: 30, email: 'john.doe@example.com', isAdmin: true }
