import React from "react";
import { handleRemoveAll } from "../handlers/handleRemoveAll";
export const RemoveAllBtn = ({
  setAddTask,
  setPoints,
  SetUserFom,
  setHideloginform,
  SetUserLogin,
  setFilterpriorityTaskStatus,
  setSwitchVal,
  setAddInput,
  setsearchQuery,
  setCompletionDays,
  setpriorityCheck,
  setUserSignupStatus,
  setSignUpdata,
  setUserSort,
}) => {
  return (
    <button
      className="btn-remove-all"
      onClick={() =>
        handleRemoveAll(
          setAddTask,
          setPoints,
          SetUserFom,
          setHideloginform,
          SetUserLogin,
          setFilterpriorityTaskStatus,
          setSwitchVal,
          setAddInput,
          setsearchQuery,
          setCompletionDays,
          setpriorityCheck,
          setUserSignupStatus,
          setSignUpdata,
          setUserSort
        )
      }
    >
      Remove All Data
    </button>
  );
};
