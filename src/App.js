import React from "react";
import "./App.css";
import InputButton from "./Components/InputButton";
import TaskList from "./Components/TaskList";

function App() {
  const tasks = [
    {
      text: "task",
      status: "in progress"
    },
    {
      text: "task 2",
      status: "in progress"
    }
  ];

  return (
    <div className="App">
      <h1>To Do List Group 2 </h1>
      <InputButton />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
