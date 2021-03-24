import React, { useState } from "react";
import "./App.css";
import InputButton from "./Components/InputButton";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "buy Milk",
      status: "in progress",
    },
    {
      id: 1,
      text: "buy Chocolaty",
      status: "in progress",
    },
    {
      id: 2,
      text: "Code or Die",
      status: "in progress",
    },
  ]);

  const addNewTask = (text, id) => {
    const tasksAux = [
      ...tasks,
      {
        id: id,
        text: text,
        status: "in progress",
      },
    ];

    setTasks(tasksAux);
    // bla bla bla
  };

  const deleteTask = (id) => {
    const tasksAux = tasks.filter((task) => task.id !== id);
    setTasks(tasksAux);
  };

  const doneTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    const newTaskModified = { ...task, status: "done" };
    const tasksAux = tasks.filter((task) => task.id !== id);
    setTasks([...tasksAux, newTaskModified]);
    //const tasksAux;
  };

  return (
    <div className="App">
      <h1>To Do List Group 2 </h1>
      <InputButton tasks={tasks} addNewTask={addNewTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  );
}

export default App;
