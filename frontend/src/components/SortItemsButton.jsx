import React from "react";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";

const SortItemsButton = ({ itemsName }) => {
  return (
    <div className="flex flex-row items-center border-2 border-gray-500 gap-x-6 px-4 py-2 mx-3 my-2">
      <div className=" text-black">Sort {itemsName}</div>
      <FaSortAmountDown className=" text-gray-500 hover:text-2xl hover:border-2 hover:border-gray-100 hover:shadow-xl " />
      <FaSortAmountDownAlt className=" text-gray-500 hover:text-2xl hover:border-2 hover:border-gray-100 hover:shadow-xl " />
    </div>
  );
};

export default SortItemsButton;
