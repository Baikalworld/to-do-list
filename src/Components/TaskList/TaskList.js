import React from "react";
import Task from "../Task/Task";

function TaskList() {
  return (
      <>
      <h2>Daily Stuff</h2>
      <ul className="TaskList">
        <Task />
      </ul>
    </>
  );
}

export default TaskList;
