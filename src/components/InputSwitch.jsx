import React from "react";

export const InputSwitch = ({ switchVal, setSwitchVal }) => {
  return (
    <div style={{ display: "flex", padding: "15px" }}>
      <input type="checkbox" id="switch" style={{ display: "none" }} />
      <label
        className="switchLabel"
        htmlFor="switch"
        onClick={() => setSwitchVal(() => !switchVal)}
      />
      {switchVal ? (
        <span style={{ marginLeft: "10px", padding: "2px" }}>
          INPUT SWITCHED TO COMPLETED TASKS
        </span>
      ) : (
        <span style={{ marginLeft: "10px", padding: "2px" }}>
          Input Switch To Completed Tasks
        </span>
      )}
    </div>
  );
};
