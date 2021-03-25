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
  // we create two useState objects (hooks) with that we can send the new data to the other component
  const [textForEdition, setTextForEdition] = useState();
  const [idForEdition, setIdForEdition] = useState();

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

  const editTask = (id, text) => {
    const tasksAux = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          text: text,
          status: "in progress",
        };
      } else {
        return {
          id: task.id,
          text: task.text,
          status: task.status,
        };
      }
    });
    setTasks(tasksAux);
    setIdForEdition(undefined);
  };

  const editTaskCall = (id, text) => {
    setTextForEdition(text);
    setIdForEdition(id);
  };

  return (
    <div className="App">
      <h1>To Do List Group 2 </h1>
      <InputButton
        tasks={tasks}
        addNewTask={addNewTask}
        editTask={editTask}
        textForEdition={textForEdition}
        idForEdition={idForEdition}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        doneTask={doneTask}
        editTaskCall={editTaskCall}
      />
    </div>
  );
}

export default App;
