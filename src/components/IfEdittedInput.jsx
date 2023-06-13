import React from "react";
import { handleEditSubmit } from "../handlers/handleEditSubmit";

export const IfEdittedInput = ({
  id,
  edittedinput,
  setEdittedInput,
  setEditted,
  setAddTask,
  editted,
  setEdittedInputstatus,
}) => {
  return (
    <>
      <input
        className="edit-input"
        type="text"
        value={edittedinput}
        placeholder="Enter your editted  task"
        onChange={(e) => {
          setEdittedInput(e.target.value), setEditted(true);
        }}
        autoFocus
      />
      <button
        className="btn-save-edit"
        onClick={() =>
          handleEditSubmit(
            id,
            edittedinput,
            setAddTask,
            editted,
            setEdittedInputstatus
          )
        }
      >
        Save
      </button>
    </>
  );
};
