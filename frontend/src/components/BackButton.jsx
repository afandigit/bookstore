import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-gray-100 text-white px-4 py-1 rounded-lg w-fit hover:shadow-md"
      >
        <BsArrowLeft className="text-2xl text-black" />
      </Link>
    </div>
  );
};

export default BackButton;
