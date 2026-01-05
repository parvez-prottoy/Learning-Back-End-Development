const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page.");
});
// get all users
app.get("/users", (req, res) => {
  const data = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "D",
    },
  ];
  res.json(data);
});

// get single user
app.get("/users/:userId", (req, res) => {
  const id = parseInt(req.params.userId);
  console.log(req.params);
  const data = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "D",
    },
  ];
  const user = data.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Product is not found!!!");
  }
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
