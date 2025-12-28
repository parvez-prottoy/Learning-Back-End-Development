console.log("Node Module System");
const { greet, sum, enterFavNumber } = require("./firstModule");

greet("Parvez");
sum(10, 20, 10);

try {
  enterFavNumber(10);
} catch (error) {
  console.log(error.message);
}
