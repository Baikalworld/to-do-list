import React, { useRef } from "react";

// this is a component
// just to add Task
function InputButton({ addNewTask, tasks }) {
  const inputEl = useRef(null);

  const onClick = () => { 
    const id = tasks.length;       
    addNewTask(inputEl.current.value, id);
    inputEl.current.value = "";
  };

  return (
    <>
      <input ref={inputEl} type="text" className="InputButton" />
      <button onClick={onClick} className="add">
        Add
      </button>
    </>
  );
}

export default InputButton;
