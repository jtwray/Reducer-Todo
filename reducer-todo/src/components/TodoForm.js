import React, { useState } from "react";
export const TodoForm = ({ dispatch, state }) => {
  const [newTodo, setnewTodo] = useState("");

  const handleChanges = (e) => {
    setnewTodo(e.target.value);
  };

  return (
    <>
      <input name="newTodo" value={newTodo} onChange={handleChanges} />
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}>
        add task
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        clear completed
      </button>
    </>
  );
};
