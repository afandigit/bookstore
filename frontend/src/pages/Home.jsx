import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/books">All books</Link>
        </li>
        <li>
          <Link to="/books/create">Add new books</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
