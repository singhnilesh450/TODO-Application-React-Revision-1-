import React, { useState } from "react";

function AddToDoForm(props) {
  const [desc, setDesc] = useState("");
  const [assign, setAssign] = useState("");
  const onAssign = (event) => {
    setAssign(event.target.value);
  };
  const onDesc = (event) => {
    setDesc(event.target.value);
  };
  const submitToDo = () => {
    if (assign != null && desc != null) {
      props.addTodo(assign, desc);
      setAssign("");
      setDesc("");
    }
  };
  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={onDesc}
            value={desc}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <textarea
            className="form-control"
            onChange={onAssign}
            required
            value={assign}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={submitToDo}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddToDoForm;
