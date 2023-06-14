import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

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
      <AiOutlineSearch className="buttonSearch"></AiOutlineSearch>
    </span>
  );
};
