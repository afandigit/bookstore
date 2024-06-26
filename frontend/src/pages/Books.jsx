import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";
import ToggleDisplayComponents from "../components/home/ToggleDisplayComponents.jsx";
import FilterItems from "../components/FilterItems.jsx";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [booksDisplayType, setBooksDisplayType] = useState("table");

  const selectedType = (type) => {
    setBooksDisplayType(type);
  };

  const getFiltredItems = (value) => {
    setsearchValue(value);
  };

  const filtredBooks = books.filter((item) => {
    return searchValue.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(searchValue);
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:7777/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BackButton />
            <h1 className="text-3xl my-8 mx-8">Books List</h1>
            <ToggleDisplayComponents
              selectedType={selectedType}
              booksDisplayType={booksDisplayType}
            />
          </div>
          <FilterItems retrieveSearchValue={getFiltredItems} />
          <Link to="/books/create">
            <MdOutlineAddBox className="text-3xl text-blue-800" />
          </Link>
        </div>

        {loading ? (
          <Spinner />
        ) : booksDisplayType === "table" ? (
          <BooksTable books={filtredBooks} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </>
  );
};

export default Books;
