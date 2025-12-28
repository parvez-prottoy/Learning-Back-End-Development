// Variables
let name = "Node.js";
const version = 24;

// Function declaration
function greet(userName) {
  console.log(`Hello, ${userName}`);
}
greet("Developer");

// Arrow function (ES6+)
const add = (a, b) => a + b;
console.log(add(5, 3));

// Object
const user = {
  name: "Parvez",
  age: 25,
  greetPrint() {
    console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
  },
};

user.greetPrint();

// Array
const colors = ["red", "green", "blue"];

// Array methods (ES6+)

colors.forEach((color) => console.log(color));
const lengths = colors.map((color) => color.length);
console.log(lengths);

// Callbacks (traditional)
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

// Promises (ES6+)
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
  });
};

// Async/Await (ES8+)
async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}
getData();
