import React, { useRef } from "react";

// this is a component
// just to add Task
function InputButton({ addNewTask, editTask, tasks, textForEdition, idForEdition }) {
  const inputEl = useRef(null);

  // we check the idForEdition recived
  if (idForEdition !== undefined) {
    inputEl.current.value = textForEdition;
  }

  const onClick = () => {
    if (idForEdition !== undefined) {
      editTask(idForEdition, inputEl.current.value);
    } else {
      const id = tasks.length;
      addNewTask(inputEl.current.value, id);
    }    
    inputEl.current.value = "";
  };

  return (
    <>
      <input ref={inputEl} type="text" className="InputButton" />
      <button onClick={onClick} className="add">
        Add / Save
      </button>
    </>
  );
}

export default InputButton;
