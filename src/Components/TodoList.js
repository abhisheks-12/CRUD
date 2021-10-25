import React from "react";

const TodoList = ({ allLists, handelEdit, handelDelete }) => {
  return (
    <div className="list">
      {allLists.map((data) => (
        <div className="single_list" key={data.id}>
          <ul>
            <li>{data.input}</li>
            <div>
              <button onClick={() => handelEdit(data.id)}>Edit</button>
              <button onClick={() => handelDelete(data.id)}>Delete</button>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
