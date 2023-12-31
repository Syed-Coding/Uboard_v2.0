import React from "react";
import { accesDateTime } from "../utils/accessDateTime";

export const IfNoEdittedInput = ({
  priority_status,
  edit_date_time,
  reCreated,
  create_date_time,
  editted,
  edittedinput,
  user_expected_task_completionDays,
}) => {
  return (
    <>
      {priority_status ? (
        <h4
          style={{
            color: "green",
            // style=" background: #09906c61; border-radius: 7px; padding: 12px 12px 0px 12px;"
          }}
        >
          <span style={{ wordBreak: "break-word" }}>
            <h4>{edittedinput}</h4>
          </span>

          <span style={{ color: "blue" }}>
            {user_expected_task_completionDays === "tdy" &&
              `Should be completed On Today`}
          </span>
          <span style={{ color: "blue" }}>
            {user_expected_task_completionDays !== "tdy" &&
              user_expected_task_completionDays !== 0 &&
              `Should be completed in ${user_expected_task_completionDays} day(s)`}
          </span>
          <span style={{ color: "blue" }}>
            {user_expected_task_completionDays === 0 &&
              `No Expt. Completion Days Provided`}
          </span>
          <span>
            {editted
              ? "Editted " + edit_date_time
              : reCreated
              ? "Recreated " + reCreated
              : "Created " + accesDateTime(create_date_time)}
          </span>
          <span>{reCreated && editted && "Recreated " + reCreated}</span>
        </h4>
      ) : (
        <h4>
          <span style={{ wordBreak: "break-word" }}>
            <h4>{edittedinput}</h4>
          </span>
          <span style={{ color: "blue" }}>
            {user_expected_task_completionDays === "tdy" &&
              `Should be completed On Today`}
          </span>
          <span style={{ color: "blue" }}>
            {user_expected_task_completionDays !== "tdy" &&
              user_expected_task_completionDays !== 0 &&
              `Should be completed in ${user_expected_task_completionDays} day(s)`}
          </span>
          <span style={{ color: "blue" }}>
            {user_expected_task_completionDays === 0 &&
              `No Expt. Completion Days Provided`}
          </span>
          <span>
            {editted
              ? "Editted " + edit_date_time
              : reCreated
              ? "Recreated " + reCreated
              : "Created " + accesDateTime(create_date_time)}
          </span>
          <span>{reCreated && editted && "Recreated " + reCreated}</span>
        </h4>
      )}
    </>
  );
};
