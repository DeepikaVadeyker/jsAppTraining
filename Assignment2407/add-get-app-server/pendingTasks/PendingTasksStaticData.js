// TaskService.js
class PendingTasksStaticData {
  constructor() {
    this.tasks = [
      { id: 1, projectName: 'genai', completionDate: '2025-06-01' },
      { id: 2, projectName: 'alpha', completionDate: '2025-04-15' },
      { id: 3, projectName: 'beta', completionDate: '2025-07-10' },
      { id: 4, projectName: 'genai-proj', completionDate: '2025-05-10' },
    ];
  }

  // Utility to calculate days difference
  getDaysDifference(dateString) {
    const today = new Date();
    const taskDate = new Date(dateString);
    const diffMs = today - taskDate;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  // Filter tasks based on daysPending or genai project
  searchTasks(daysPending) {
    return this.tasks.filter(task => {
      const daysOld = this.getDaysDifference(task.completionDate);
      const isOlderThan = daysOld > daysPending;
      const hasGenAiProject = task.projectName.toLowerCase().includes("genai");
      return isOlderThan || hasGenAiProject;
    });
  }

  // Return all tasks
  getAllTasks() {
    return this.tasks;
  }

  // Return tasks pending for 15 and 30 days
  getPendingTasks() {
    return {
      pending15: this.searchTasks(15),
      pending30: this.searchTasks(30)
    };
  }
}

module.exports = PendingTasksStaticData;
