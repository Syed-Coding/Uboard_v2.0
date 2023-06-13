import React from "react";
import { handlePriorityTasksFilter } from "../handlers/handlePriorityFilter.js";

export const FilterButton = ({ setFilterpriorityTaskStatus }) => {
  return (
    <button
      className="btn btn-delete prioritizeButton"
      onClick={() => handlePriorityTasksFilter(setFilterpriorityTaskStatus)}
    >
      Filter Prioritized Tasks
    </button>
  );
};
