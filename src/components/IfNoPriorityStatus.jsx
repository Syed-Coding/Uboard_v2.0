import React from "react";
import { accesDateTime } from "../utils/accessDateTime";

export const IfNoPriorityStatus = ({
  task,
  delete_date_time,
  create_date_time,
  reCreated,
}) => {
  return (
    <h4>
      <span style={{ wordBreak: "break-word" }}>
        <h4>{task}</h4>
      </span>
      <span>
        {delete_date_time
          ? "Completed " + accesDateTime(delete_date_time)
          : "DIRECTLY COMTD. " + accesDateTime(create_date_time)}
      </span>
      {delete_date_time && (
        <>
          <span>{"Created " + accesDateTime(create_date_time)}</span>
          <span>{reCreated && "Recreated " + accesDateTime(reCreated)}</span>
        </>
      )}
    </h4>
  );
};
