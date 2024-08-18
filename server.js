// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Dummy user data
const users = {
  testuser: "password123",
};

// Login Route
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password matches
  if (users[username] && users[username] === password) {
    // Generate a dummy token (in a real app, use JWT or similar)
    const authToken = "dummy-token";
    res.json({ token: authToken });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
