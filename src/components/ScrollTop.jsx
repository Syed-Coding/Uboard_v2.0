import React from "react";
import ScrollToTop from "react-scroll-up";

export const ScrollTop = () => {
  return (
    <ScrollToTop showUnder={160}>
      <span
        className="scrollTop"
        style={{ color: "white", fontSize: "xxx-large" }}
      >
        ↑
      </span>
    </ScrollToTop>
  );
};
