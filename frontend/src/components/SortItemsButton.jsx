import React from "react";
import { useState } from "react";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";

const SortItemsButton = ({ isActiveButton }) => {
  const [sortingOrder, setSortingOrder] = useState("asc");
  return (
    <div className="flex flex-row items-center gap-x-6 px-4 py-2 mx-3 my-2">
      <FaSortAmountDownAlt
        className={`text-${
          (sortingOrder === "asc") & isActiveButton ? "green" : "gray"
        }-500 hover:border-2 hover:border-gray-100 hover:shadow-xl`}
        onClick={() => setSortingOrder("asc")}
      />
      <FaSortAmountDown
        className={`text-${
          (sortingOrder === "desc") & isActiveButton ? "green" : "gray"
        }-500 hover:border-2 hover:border-gray-100 hover:shadow-xl`}
        onClick={() => setSortingOrder("desc")}
      />
    </div>
  );
};

export default SortItemsButton;
