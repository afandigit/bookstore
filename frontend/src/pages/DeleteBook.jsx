import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinneer from "../components/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const deleteBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:7777/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/books");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <div className="flex items-center mr-4">
          <BackButton destination={`/books/details/${id}`} />
          <h1 className="text-2xl my-5 mx-5">Delete Book</h1>
        </div>
      </div>

      {loading ? (
        <Spinneer />
      ) : (
        <div className="grid justify-items-center p4 mx-auto w-[600px]">
          <p className="text-3xl">
            Are you sure you wanna `
            <strong className="text-red-900">DELETE</strong>` this book ?
          </p>
          <button
            className="text-xl text-red-700 bg-red-100 px-8 py-4 my-6 rounded-xl"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default deleteBook;
