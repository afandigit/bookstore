import React, { useState } from "react";

const FilterItems = ({ retrieveSearchValue }) => {
  return (
    <input
      type="text"
      className="border-2 rounded-xl py-2 px-8 hover:shadow-md hover:bg-gray-100"
      placeholder="Type to filter ..."
      onChange={(event) => {
        retrieveSearchValue(event.target.value);
      }}
    />
  );
};

export default FilterItems;
