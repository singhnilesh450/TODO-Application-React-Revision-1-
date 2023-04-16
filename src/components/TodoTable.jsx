import React from "react";
import ToDoItem from "./ToDoItem";
function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">Assign</th>
        </tr>
      </thead>

      <tbody>
        {props.todos.map((val) => {
          return (
            <ToDoItem
              key={val.rowNum}
              rowNum={val.rowNum}
              rowDesc={val.rowDesc}
              rowAssign={val.rowAssign}
              deleteRow={props.deleteRow}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoTable;
