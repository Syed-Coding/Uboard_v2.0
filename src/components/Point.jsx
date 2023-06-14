import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

export const Point = ({ points, cele }) => {
  return (
    <span className="pointClass flex align-center justify-end">
      Points :&nbsp;🏆
      {points}
      {cele && (
        <ConfettiExplosion
          force={0.5}
          duration={3000}
          particleCount={100}
          width={1500}
        ></ConfettiExplosion>
      )}
    </span>
  );
};
