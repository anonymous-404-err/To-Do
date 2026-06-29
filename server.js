const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Enable CORS so GitHub Pages can safely request data from Render
app.use(cors({
    origin: [
        "https://YOUR_GITHUB_USERNAME.github.io", 
        "http://localhost:3000" // Kept for local development testing
    ]
}));

let todos = [
    { id: 1, text: "Build an awesome To-Do app" },
    { id: 2, text: "Set up a CI/CD pipeline" }
];

// API Endpoints
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = { id: Date.now(), text: req.body.text };
    if (!newTodo.text) return res.status(400).json({ error: "Text is required" });
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.query.id || req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(200).json({ success: true });
});

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`));

module.exports = app;