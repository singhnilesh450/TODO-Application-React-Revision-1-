import "./App.css";
import React, { useState } from "react";

import TodoTable from "./components/TodoTable";
import AddToDoForm from "./components/AddToDoForm";

const App = () => {
  const [showAddToDoForm, setShowAddToDoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNum: 1, rowDesc: "Walk", rowAssign: "Abhilash" },
    { rowNum: 2, rowDesc: "Run", rowAssign: "Bipul" },
    { rowNum: 3, rowDesc: "Limp", rowAssign: "Atul" },
  ]);
  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNum + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNum: rowNumber,
      rowDesc: description,
      rowAssign: assigned,
    };
    setTodos(() => [...todos, newTodo]);
  };
  const deleteRow = (deleteRowNum: number) => {
    const filteredList = todos.filter((data) => {
      return data.rowNum !== deleteRowNum;
    });
    setTodos(filteredList);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>

        <div className="card-body">
          <TodoTable todos={todos} deleteRow={deleteRow} />;
          <button
            className="btn btn-primary"
            onClick={() => setShowAddToDoForm(!showAddToDoForm)}
          >
            {showAddToDoForm ? "Close New ToDo" : "New ToDo"}
          </button>
          {showAddToDoForm && <AddToDoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
};

export default App;
