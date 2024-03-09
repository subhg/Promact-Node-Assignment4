// Import the Express framework
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Array to store user data
const users = [];

// Route for the home page
app.get("/", (req, res) => {
  res.render("home");
});

// Route for handling user creation via POST request
app.post("/user", (req, res) => {
  const username = req.body.username;
  users.push(username);
  res.redirect("/users");
});

// Route for displaying the list of users
app.get("/users", (req, res) => {
  res.render("users", { users });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
