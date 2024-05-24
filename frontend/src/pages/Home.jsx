import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";

const Home = () => {
  return (
    <>
      <h1 className="text-6xl my-5">Home</h1>

      <ul className="flex justify-center items-center">
        <li className="border border-black rounded-md mx-2">
          <Link to="/books" className="text-1xl my-8 mx-8">
            Books
          </Link>
        </li>
        <li className="border border-black rounded-md mx-2">
          <Link to="/books/create" className="text-1xl my-8 mx-8">
            Add New Book
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
