import React from "react";

const ToDoItem: React.FC<{
  rowNum: number;
  rowDesc: string;
  rowAssign: string;
  deleteRow: Function;
}> = (props) => {
  // const rowNum = 1;
  // const rowDesc = "Feed Animals";
  // const rowAssign = "Ankit";
  return (
    <tr onClick={() => props.deleteRow(props.rowNum)}>
      <th scope="row">{props.rowNum}</th>
      <td>{props.rowDesc}</td>
      <td>{props.rowAssign}</td>
    </tr>
  );
};

export default ToDoItem;
