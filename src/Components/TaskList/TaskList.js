import React from "react";
import Task from "../Task";

//
function TaskList({tasks}) {

  
  return (
    <>
      <h2>Daily Stuff</h2>
      <ul className="TaskList">
        {tasks.map((task, index) => 
          <Task task={task} key={index} />
        )}
      </ul>
    </>
  );
}

export default TaskList;
