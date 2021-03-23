import React, { useRef } from "react";

// this is a component
// just to add Task
function InputButton({ addNewTask }) {
  const inputEl = useRef(null);

  const onClick = () => {    
    addNewTask(inputEl.current.value);
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
