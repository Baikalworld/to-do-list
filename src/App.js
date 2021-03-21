import React from "react";
import "./App.css";
import InputButton from "./Components/InputButton";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>To Do List Group 2 </h1>
      <InputButton />
      <TaskList />
    </div>
  );
}

export default App;
