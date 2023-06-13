import React from "react";

export const DeletedTaskName = ({
  filterprioritytaskStatus,
  filtereddeletedArray,
}) => {
  return (
    <>
      <h3>
        {filterprioritytaskStatus ? "PRIORITIZED TASKS" : "COMPLETED TASKS"}
      </h3>
      {!filtereddeletedArray[0] && (
        <ul>
          <div className="Task-manager-board-right-container">
            <h4>No Items In Deleted Tasks</h4>
          </div>
        </ul>
      )}
    </>
  );
};
