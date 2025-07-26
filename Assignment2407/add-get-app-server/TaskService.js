class TaskService {
    constructor() {
        this.tasks = [];
        this.nextTaskId = 1;
    }

    addTask(title, description = '') {
        if (!title) throw new Error('Task title cannot be empty.');
        const newTask = {
            id: this.nextTaskId++,
            title,
            description,
            completed: false,
            createdAt: new Date(),
        };
        this.tasks.push(newTask);
        return newTask;
    }

    getTasks(id) {
        if (id) return this.tasks.find(task => task.id === id) || null;
        return [...this.tasks];
    }

    updateTask(id, updates) {
        const idx = this.tasks.findIndex(task => task.id === id);
        if (idx !== -1) {
            this.tasks[idx] = { ...this.tasks[idx], ...updates };
            return this.tasks[idx];
        }
        return null;
    }

    deleteTask(id) {
        const before = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks.length < before;
    }

    completeTask(id) {
        return this.updateTask(id, { completed: true });
    }

    uncompleteTask(id) {
        return this.updateTask(id, { completed: false });
    }
}

module.exports = TaskService;