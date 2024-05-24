import React from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const editBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios(`http://localhost:7777/books/${id}`)
      .then((response) => {
        setBook(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <div className="flex items-center mr-4">
          <BackButton destination={`/books/details/${id}`} />
          <h1 className="text-2xl my-5 mx-5">Edit Book</h1>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-black-600 mx-2">
          <div className="flex flex-row my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Id :</span>
            <input
              type="text"
              className="ml-8 px-8 border-2 border-black-800 w-full"
              value={book._id}
              disabled
            />
          </div>
          <div className="flex flex-row my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Name :</span>
            <input
              type="text"
              value={book.name}
              className="ml-8 px-8 border-2 border-black-800 w-full"
            />
          </div>
          <div className="flex flex-row my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Author :</span>
            <input
              type="text"
              value={book.author}
              className="ml-8 px-8 border-2 border-black-800 w-full"
            />
          </div>
          <div className="flex flex-row my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Publish Year :</span>
            <input
              type="text"
              value={book.publishYear}
              className="ml-8 px-8 border-2 border-black-800 w-full"
            />
          </div>
          <div className="flex flex-row my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Created At :</span>
            <span className="ml-2 px-4 border-2 border-black-800 w-full">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-row my-4 mx-8 select-none">
            <span className="text-2xl mr-2 text-gray-500">Updated At :</span>
            <span className="ml-2 px-4 border-2 border-black-800 w-full">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default editBook;
