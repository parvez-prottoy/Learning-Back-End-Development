// Using let (can be changed)
let score = 10;
score = 20; // This works
console.log(score); // 20

// Using const (cannot be reassigned)
const MAX_USERS = 100;
// MAX_USERS = 200; // Error! Can't change a constant

// Block scope with let
if (true) {
  let message = "Hello";
  console.log(message); // Works here
}
// console.log(message); // Error! message is not defined here

// Arrow Functions
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function (same as above)
const addArrow = (a, b) => a + b;

// Single parameter (no parentheses needed)
const double = (num) => num * 2;

// No parameters (parentheses needed)
const sayHello = () => "Hello!";

// Using with array methods
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Template Literals
// Basic string interpolation
const name = "Alice";
console.log(`Hello, ${name}!`);
// Multi-line string
const message = `
  This is a multi-line
  string in JavaScript.
`;
console.log(message);

// Simple expression
const price = 10;
const tax = 0.2;
console.log(`Total: $${price * (1 + tax)}`);

// Destructuring
// Basic object destructuring
const user = { userName: "Alice", age: 30, location: "New York" };
const { userName, age } = user;
console.log(userName, age);

// Spread and Rest Operators

// Array spread - combining arrays
const numbers2 = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combined = [...numbers2, ...moreNumbers];
console.log(combined);

// Array spread - converting string to array of characters
const chars = [..."hello"];
console.log(chars);

// Helper function to simulate an API call
function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data for ID ${id}`), 1000);
  });
}

// Sequential execution (~3 seconds total)
async function fetchSequential() {
  console.time("sequential");
  const data1 = await fetchData(1);
  const data2 = await fetchData(2);
  const data3 = await fetchData(3);
  console.timeEnd("sequential");
  return [data1, data2, data3];
}

// Run the sequential example
fetchSequential().then((results) => {
  console.log("Sequential results:", results);
});
