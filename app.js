const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

const foods = [
  { id: 1, name: "Pizza", price: 199, image: "https://i.imgur.com/eVm7m1O.png" },
  { id: 2, name: "Burger", price: 99, image: "https://i.imgur.com/5Aqgz7o.png" },
  { id: 3, name: "Biryani", price: 249, image: "https://i.imgur.com/7YV1F3K.png" },
  { id: 4, name: "Pasta", price: 179, image: "https://i.imgur.com/dzGJZ5v.png" }
];

app.get("/api/foods", (req, res) => {
  res.json(foods);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
