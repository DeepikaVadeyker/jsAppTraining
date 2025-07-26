import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = () => {
    fetch('http://localhost:5000/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  };

  const addTask = () => {
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask }),
    })
      .then((res) => {res.json()
        console.log("inside .then")
      })
      .then(() => {
        setNewTask('');
        fetchTasks(); // Refresh task list
      });
      console.log("inside function")

  };
  const markComplete = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}/complete`, {
      method: 'PATCH',
    })
      .then(() => fetchTasks());  // Refresh list
  };

  const markIncomplete = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}/uncomplete`, {
      method: 'PATCH',
    })
      .then(() => fetchTasks());  // Refresh list
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={newTask}
        placeholder="Enter task title"
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={fetchTasks} style={{ marginLeft: '10px' }}>
        Get Tasks
      </button>

      <h2>Task List</h2>
      <ul>
        {tasks.length ? (
          tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: '8px' }}>
              <strong>ID {task.id}:</strong> {task.title} (Completed:{" "}
              {task.completed ? "Yes" : "No"})
              {task.completed ? (
                <button onClick={() => markIncomplete(task.id)} style={{ marginLeft: '10px' }}>
                  Mark Incomplete
                </button>
              ) : (
                <button onClick={() => markComplete(task.id)} style={{ marginLeft: '10px' }}>
                  Mark Complete
                </button>
              )}
            </li>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
