import React from "react";
import { handleSort } from "../handlers/handleSort";

export const DropMenuSort = ({ setAddTask, setUserSort, usersort }) => {
  return (
    <select
      className="dropdownmenuContent"
      onClick={(e) => handleSort(e, setAddTask, setUserSort)}
    >
      <option disabled selected={usersort === "" ? true : false}>
        Select Your Sorting
      </option>
      <option
        value="TASK_DFLT"
        selected={usersort === "TASK_DFLT" ? true : false}
      >
        Default Sorting
      </option>
      <option
        value="TASK_ASC"
        selected={usersort === "TASK_ASC" ? true : false}
      >
        Sort By Task Name ASC.
      </option>
      <option
        value="TASK_DESC"
        selected={usersort === "TASK_DESC" ? true : false}
      >
        Sort By Task Name DESC.
      </option>
      <option
        value="DATE_DESC"
        selected={usersort === "DATE_DESC" ? true : false}
      >
        Sort By Last Created
      </option>
    </select>
  );
};
