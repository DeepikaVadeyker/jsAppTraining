import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PendingTasks() {
  const navigate = useNavigate();
  const [pending15, setPending15] = useState([]);
  const [pending30, setPending30] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("http://localhost:5000/pendingTasksApi/pendingTasks");
        const data = await response.json();
        setPending15(data.pending15);
        setPending30(data.pending30);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Task Search Screen</h1>
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        Home
      </button>

      <section>
        <h2>Tasks Pending More Than 15 Days or Project 'genai'</h2>
        <ul>
          {pending15.length > 0 ? (
            pending15.map(task => (
              <li key={task.id}>
                {task.projectName} - Completed: {task.completionDate}
              </li>
            ))
          ) : (
            <p>No tasks found.</p>
          )}
        </ul>
      </section>

      <section>
        <h2>Tasks Pending More Than 30 Days or Project 'genai'</h2>
        <ul>
          {pending30.length > 0 ? (
            pending30.map(task => (
              <li key={task.id}>
                {task.projectName} - Completed: {task.completionDate}
              </li>
            ))
          ) : (
            <p>No tasks found.</p>
          )}
        </ul>
      </section>
    </div>
  );
}

export default PendingTasks;
