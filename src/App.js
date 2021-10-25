import "./App.css";
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [allLists, setAllLists] = useState([]);
  const [editId, setEditId] = useState(0);

  const handelAdd = (e) => {
    e.preventDefault();

    if (editId) {
      const editList = allLists.find((data) => data.id === editId);
      const updateList = allLists.map((data) =>
        data.id === editList.id
          ? (data = { id: data.id, input })
          : { id: data.id, input: data.input }
      );
      setAllLists(updateList);
      setEditId(0);
      setInput("");
      return;
    }

    setAllLists([{ id: `${Date.now() + ""}`, input }, ...allLists]);
    setInput("");
  };

  const handelDelete = (id) => {
    const deleteBtn = allLists.filter((data) => data.id !== id);
    setAllLists(deleteBtn);
  };

  const handelEdit = (id) => {
    const todos = allLists.find((data) => data.id === id);
    setInput(todos.input);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="todo_container">
        <div className="todo_border">
          <h1>Todo List</h1>
          <TodoForm input={input} setInput={setInput} handelAdd={handelAdd} />

          <TodoList
            allLists={allLists}
            handelEdit={handelEdit}
            handelDelete={handelDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
