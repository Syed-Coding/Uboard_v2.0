import React from "react";

export const OngoingTaskName = ({
  filterprioritytaskStatus,
  filteredOngoingArray,
}) => {
  return (
    <>
      <h3>
        {filterprioritytaskStatus ? "PRIORITIZED TASKS" : "ONGOING TASKS"}
      </h3>
      {!filteredOngoingArray[0] && (
        <ul>
          <div className="Task-manager-board-right-container">
            <h4>No Items In Ongoing Tasks</h4>
          </div>
        </ul>
      )}
    </>
  );
};
