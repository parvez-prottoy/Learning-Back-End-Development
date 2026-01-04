console.log("Path Module");

const path = require("path");

console.log("Directory name:", path.dirname(__filename));
console.log("Directory name:", __dirname);

console.log("File name:", path.basename(__filename));

console.log("File extension:", path.extname(__filename));

// join path
const newPath = path.join("/", "users", "login");
console.log("Join path:", newPath);

// Join path segments
const fullPath = path.join("/users", "docs", "file.txt");

console.log(fullPath);
