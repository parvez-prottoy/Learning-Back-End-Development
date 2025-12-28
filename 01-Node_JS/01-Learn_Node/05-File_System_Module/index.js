console.log("File System Module");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

// sync way
if (!fs.existsSync("data")) {
  fs.mkdirSync(dataFolder);
}
const text1File = path.join(dataFolder, "text1.txt");

fs.writeFileSync(text1File, "this is the text 1 file.");

console.log(fs.readFileSync(text1File, "utf8"));

fs.appendFileSync(text1File, "\nThis is the new line of the text 1 file.");

console.log(fs.readFileSync(text1File, "utf8"));
