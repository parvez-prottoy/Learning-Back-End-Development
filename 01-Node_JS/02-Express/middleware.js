const express = require("express");
const app = express();
const PORT = 8080;

// create a middleware
const globalMiddleWare = (req, res, next) => {
  console.log("This is the global middleware...");
  next();
};
app.use(globalMiddleWare);

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.get("/about", (req, res) => {
  res.send("Hello World!!!");
});
app.get("/contact", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
