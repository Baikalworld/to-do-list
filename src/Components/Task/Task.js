import React from "react";
import "./Task.css";

// for changing task
// Just for one task
// task is Map Object
function Task({ task, deleteTask, doneTask }) {
  const onDelete = () => {
    deleteTask(task.id);
  };

  const onDone = () => {
    doneTask(task.id);
  };
  return (
    // comparation ? whenTrue : whenFalse;
    // task.status === 'done' ? 'task-done' : ''
    // if (task.status === 'done') return "task-done"
    <li>
      <span className={task.status === "done" ? "task-done" : ""}>
        {task.text}
      </span>
      <button onClick={onDone}>Done</button>
      <button onClick={onDelete}>Delete</button>
      <button>Edit</button>
    </li>
  );
}

export default Task;
