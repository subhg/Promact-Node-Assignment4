const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const users = [];
app.get("/", (req, res) => {
  res.render("home");
});

app.post("/user", (req, res) => {
  const username = req.body.username;
  users.push(username);
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
