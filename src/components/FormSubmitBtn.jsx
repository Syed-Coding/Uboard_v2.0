import React from "react";

export const FormSubmitBtn = ({ switchVal }) => {
  return (
    <button type="submit">
      {switchVal ? "Add to Completed" : "Add to Ongoing"}
    </button>
  );
};
