import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // using routers

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}>
        {/* First App Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => navigate("/first-app")} // router
            style={{ padding: "8px 12px" }}
          >
            Go to First App
          </button>
          <span style={{ fontSize: "14px", color: "#555" }}>
            View all items and products.
          </span>
        </div>

        {/* Pending Tasks Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => navigate("/pending-tasks")}
            style={{ padding: "8px 12px" }}
          >
            Go to Pending Tasks
          </button>
          <span style={{ fontSize: "14px", color: "#555" }}>
            Check tasks older than 15/30 days or with 'genai' tag.
          </span>
        </div>

        {/* Task Manager Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => navigate("/task-manager")}
            style={{ padding: "8px 12px" }}
          >
            Go to Task Manager
          </button>
          <span style={{ fontSize: "14px", color: "#555" }}>
            Manage all your tasks here (add, view, mark complete).
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
