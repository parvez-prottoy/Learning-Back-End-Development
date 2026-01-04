function greetings(name, callbackFn) {
  callbackFn(name);
}

function name(name) {
  console.log(`Hello ${name}`);
}

greetings("Parvez", name);

const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error :", err);
  }
  console.log(data);
});
