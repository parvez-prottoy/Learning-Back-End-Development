console.log("File System Module");
const { error } = require("console");
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

//async way

const docFolder = path.join(__dirname, "docs");

if (!fs.existsSync("docs")) {
  fs.mkdirSync(docFolder);
}

const firstDoc = path.join(docFolder, "firstDoc.txt");

fs.writeFile(firstDoc, "This is the first doc file.", (err) => {
  if (err) throw err;
});

fs.readFile(firstDoc, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.appendFile(firstDoc, "\nThis is the new line of fist doc file.", (err) => {
  if (err) throw err;
});

fs.readFile(firstDoc, "utf8", (err, updatedData) => {
  if (err) throw err;
  console.log(updatedData);
});
