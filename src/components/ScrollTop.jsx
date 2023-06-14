import React from "react";
import ScrollToTop from "react-scroll-up";
import { FaAngleUp } from "react-icons/fa";

export const ScrollTop = () => {
  return (
    <ScrollToTop showUnder={160}>
      <span
        className="scrollTop"
        style={{ color: "white", fontSize: "xxx-large" }}
      >
        <FaAngleUp className="icon-position icon-style" />
      </span>
    </ScrollToTop>
  );
};
