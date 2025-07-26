const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const tasks = [
  { id: 1, projectName: 'genai', completionDate: '2025-05-01' }, // genai project (always included)
  { id: 2, projectName: 'alpha', completionDate: '2025-03-15' }, // > 120 days old
  { id: 3, projectName: 'beta', completionDate: '2025-06-10' },  // recent (will be excluded)
  { id: 4, projectName: 'genai-proj', completionDate: '2025-04-10' }, // genai project + old
];

// Utility to calculate days difference
function getDaysDifference(dateString) {
  const today = new Date();
  const taskDate = new Date(dateString);
  const diffMs = today - taskDate;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// Filter function
function searchTasks(daysPending) {
  return tasks.filter(task => {
    const daysOld = getDaysDifference(task.completionDate);
    const isOlderThan = daysOld > daysPending;
    const hasGenAiProject = task.projectName.toLowerCase().includes("genai");
    return isOlderThan || hasGenAiProject;
  });
}

// API: Get all tasks (unfiltered)
app.get('/getAllTasks', (req, res) => {
  res.json(tasks);
});

// API: Get filtered tasks (pending 15 and 30 days)
app.get('/pendingTasks', (req, res) => {
  const Pendingtasks15 = searchTasks(15);
  const Pendingtasks30 = searchTasks(30);

  res.json({
    pending15: Pendingtasks15,
    pending30: Pendingtasks30
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});