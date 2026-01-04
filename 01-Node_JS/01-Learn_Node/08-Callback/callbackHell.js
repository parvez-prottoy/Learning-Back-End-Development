const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error from the read file :", err);
  }
  const modReadFile = data.toUpperCase();
  fs.writeFile("output.txt", modReadFile, (err, data) => {
    if (err) {
      console.log("Error from the write file :", err);
    }
    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error from the write file :", err);
      }
      console.log(data);
    });
  });
});
