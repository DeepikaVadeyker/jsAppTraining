import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComp/Home";
import FirstApp from "./components/firstApp/FirstApp";
import TaskManager from "./components/TaskManagerComp/TaskManager";
import PendingTasks from "./components/PendingTaskComp/PendingTasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-app" element={<FirstApp />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/pending-tasks" element={<PendingTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
