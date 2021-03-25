import React from "react";
import Task from "../Task";
import "./TaskList.css";
//
function TaskList({ tasks, deleteTask, doneTask, editTaskCall }) {
  return (
    <>
      <h2>Daily Stuff</h2>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            deleteTask={deleteTask}
            doneTask={doneTask}
            editTaskCall={editTaskCall}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
