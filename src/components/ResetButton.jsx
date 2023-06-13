import React from "react";

export const ResetButton = ({
  setAddTask,
  setFilterpriorityTaskStatus,
  setsearchQuery,
  addTask,
}) => {
  return (
    <button
      className="resetButton"
      onClick={() => {
        setAddTask(addTask);
        setsearchQuery("");
        setFilterpriorityTaskStatus(false);
      }}
    >
      Reset All Tasks
    </button>
  );
};
