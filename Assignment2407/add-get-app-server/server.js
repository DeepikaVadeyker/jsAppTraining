const express = require('express');
const cors = require('cors');
const TaskService = require('./taskService/TaskService');
const PendingTasksStaticData = require('./pendingTasks/PendingTasksStaticData'); // Import the class
const ItemsService = require('./firstApp/ItemsService');


const app = express();
const port = 5000;

const taskService = new TaskService();  // Single instance
const pendingTasksStaticData = new PendingTasksStaticData();
const itemsService = new ItemsService();

app.use(cors());
app.use(express.json());

// GET all Items
app.get('/api/items', (req, res) => {
    res.json(itemsService.getAllItems());
});

// GET all Products

app.get('/api/products', (req, res) => {
    res.json(itemsService.getAllProducts());
});
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

// Route: Get all tasks
app.get('/pendingTasksApi/getAllTasks', (req, res) => {
    res.json(pendingTasksStaticData.getAllTasks());
});

// Route: Get filtered pending tasks
app.get('/pendingTasksApi/pendingTasks', (req, res) => {
    res.json(pendingTasksStaticData.getPendingTasks());
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});