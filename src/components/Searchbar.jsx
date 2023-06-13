import React from "react";
import { BiSearch } from "react-icons/Bi";

export const Searchbar = ({ query, setAddInput, setsearchQuery }) => {
  return (
    <span id="searchBar">
      <input
        id="search"
        type="text"
        name="search"
        value={query}
        placeholder="Search Tasks"
        onChange={(e) => {
          setAddInput(""),
            setsearchQuery(() => {
              return e.target.value;
            });
        }}
      />
      <BiSearch className="buttonSearch"></BiSearch>
    </span>
  );
};
