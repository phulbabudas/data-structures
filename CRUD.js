// Express CRUD Example Project
// File: server.js


const express = require('express');
const app = express();
const PORT = 3000;


// Middleware
app.use(express.json());


// Dummy Database (In-Memory)
let users = [
{ id: 1, name: "Rahul", email: "rahul@example.com" },
{ id: 2, name: "Sita", email: "sita@example.com" }
];


// CREATE User
app.post('/users', (req, res) => {
const { name, email } = req.body;
const newUser = {
id: users.length + 1,
name,
email
};
users.push(newUser);
res.status(201).json({ message: "User created", user: newUser });
});


// READ All Users
app.get('/users', (req, res) => {
res.json(users);
});


// READ Single User
app.get('/users/:id', (req, res) => {
const user = users.find(u => u.id === parseInt(req.params.id));
if (!user) return res.status(404).json({ message: "User not found" });
res.json(user);
});


// UPDATE User
app.put('/users/:id', (req, res) => {
const user = users.find(u => u.id === parseInt(req.params.id));
if (!user) return res.status(404).json({ message: "User not found" });


const { name, email } = req.body;
user.name = name || user.name;
user.email = email || user.email;


res.json({ message: "User updated", user });
});


// DELETE User
app.delete('/users/:id', (req, res) => {
users = users.filter(u => u.id !== parseInt(req.params.id));
res.json({ message: "User deleted" });
});


// Start Server
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});