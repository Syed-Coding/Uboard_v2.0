import React from "react";

export const Point = ({ points }) => {
  return (
    <span className="pointClass flex align-center justify-end">
      Points :&nbsp;🏆
      {points}
    </span>
  );
};
