import React from "react";

export const UserCompletionDays = ({
  completionDays,
  setCompletionDays,
  switchVal,
}) => {
  return (
    <div className="priority">
      <label className="form-control | flex align-center gap-10">
        <input
          type="text"
          className="inputDays"
          value={completionDays}
          minLength={1}
          maxLength={4}
          onChange={(e) => {
            !switchVal &&
              setCompletionDays(e.target.value <= 0 ? 0 : e.target.value);
          }}
        />
        EXPTD. Day(s)
      </label>
    </div>
  );
};
