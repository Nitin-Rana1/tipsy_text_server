// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Example map of username and password pairs
const userCredentials = new Map();
userCredentials.set("user1", "password123");
userCredentials.set("user2", "password456"); // Add more credentials as needed

// Routes
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Check if the username exists and the password matches
  if (
    userCredentials.has(username) &&
    userCredentials.get(username) === password
  ) {
    // Generate a token (in a real-world scenario, you should generate a JWT or similar)
    const token = "example-auth-token"; // Replace with actual token generation logic
    return res.json({ token: token });
  } else {
    return res.status(401).json({ error: "Invalid username or password" });
  }
});

// app.post('/messages/send', (req, res) => {
//     const { message } = req.body;

//     // Implement your message sending logic here
//     // For demo purposes, assume message is always sent successfully
//     if (message) {
//         res.json({ success: true, message: 'Message sent successfully' });
//     } else {
//         res.status(400).json({ error: 'Message cannot be empty' });
//     }
// });

// app.get('/messages/receive', (req, res) => {
//     const { userId } = req.query;

//     // Implement your message retrieval logic here
//     // For demo purposes, return a dummy message list
//     if (userId) {
//         res.json([
//             { id: 1, userId, text: 'Hello' },
//             { id: 2, userId, text: 'Hi there!' }
//         ]);
//     } else {
//         res.status(400).json({ error: 'User ID is required' });
//     }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
