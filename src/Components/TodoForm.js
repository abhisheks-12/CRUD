import React from "react";

const TodoForm = ({ input, setInput, handelAdd }) => {
  return (
    <div className="todo_searchbox">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={handelAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
