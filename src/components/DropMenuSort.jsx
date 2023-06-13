import React from "react";
import { handleSort } from "../handlers/handleSort";

export const DropMenuSort = ({ setAddTask }) => {
  return (
    <select
      className="dropdownmenuContent"
      onChange={(e) => handleSort(e, setAddTask)}
    >
      <option value={"TASK_DFLT"}>Default Sorting </option>
      <option value={"TASK_ASC"}>Sort By Task Name ASC.</option>
      <option value={"TASK_DESC"}>Sort By Task Name DESC.</option>
      <option value={"DATE_DESC"}>Sort By Last Created</option>
    </select>
  );
};
