const express = require('express');
const cors = require('cors');
const TaskService = require('./TaskService');

const app = express();
const port = 5000;

const taskService = new TaskService();  // Single instance

app.use(cors());
app.use(express.json());

// GET all tasks
app.get('/api/tasks', (req, res) => {
    res.json(taskService.getTasks());
});

// GET a specific task by ID
app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = taskService.getTasks(id);
    if (task) res.json(task);
    else res.status(404).json({ error: 'Task not found' });
});

// POST (add) a new task
app.post('/api/tasks', (req, res) => {
    try {
        const { title, description } = req.body;
        const task = taskService.addTask(title, description);
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.patch('/api/tasks/:id/complete', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = taskService.completeTask(id);
    if (updatedTask) res.json(updatedTask);
    else res.status(404).json({ error: 'Task not found' });
});

// PATCH - mark task as incomplete
app.patch('/api/tasks/:id/uncomplete', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = taskService.uncompleteTask(id);
    if (updatedTask) res.json(updatedTask);
    else res.status(404).json({ error: 'Task not found' });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});