import React from "react";

// for changing task
// Just for one task
// task is Map Object
function Task({task}) {

  console.log(task);
  return (
    <li>
      {task.text}
      <button>Done</button>
      <button>Delete</button>
      <button>Edit</button>
    </li>
  );
}

export default Task;
