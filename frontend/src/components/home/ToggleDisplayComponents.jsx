import React from "react";

const ToggleDisplayComponents = ({ selectedType, booksDisplayType }) => {
  return (
    <div className="flex justify-center items-center m-2 gap-5">
      <button
        className={`text-lg text-gray-600 ${
          booksDisplayType === "table" ? "bg-green-200" : "bg-gray-200"
        }  hover:shadow-md rounded-lg px-4 py-2`}
        onClick={() => {
          selectedType("table");
        }}
      >
        Table
      </button>
      <button
        className={`text-lg text-gray-600 ${
          booksDisplayType === "table" ? "bg-gray-200" : "bg-green-200"
        }  hover:shadow-md rounded-lg px-4 py-2`}
        onClick={() => {
          selectedType("cards");
        }}
      >
        Cards
      </button>
    </div>
  );
};

export default ToggleDisplayComponents;
