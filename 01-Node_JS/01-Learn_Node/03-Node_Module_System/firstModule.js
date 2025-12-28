const greet = (name) => {
  console.log(`Hello, ${name} Welcome to Our Shop.`);
};
const sum = (...num) => {
  const result = num.reduce((prev, cur) => prev + cur, 0);
  console.log(result);
};

const enterFavNumber = (num) => {
  if (typeof num === "number") {
    console.log(`${num} is your fav number...`);
  } else {
    throw new Error("Please enter a number!!!");
  }
};

module.exports = {
  greet,
  sum,
  enterFavNumber,
};
