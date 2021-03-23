import React, { useState } from "react";
import "./App.css";
import InputButton from "./Components/InputButton";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        text: "task",
        status: "in progress",
      },
      {
        text: "task 2",
        status: "in progress",
      },
      {
        text: "task 3",
        status: "in progress",
      },
    ]
  );

  const addNewTask = (text) => {
    const tasksAux = [
      ...tasks,
      {
        text: text,
        status: "in progress"
      }
    ];

    setTasks(tasksAux);
    // bla bla bla
  };

  return (
    <div className="App">
      <h1>To Do List Group 2 </h1>
      <InputButton addNewTask={addNewTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
