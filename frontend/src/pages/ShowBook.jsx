import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const showBook = () => {
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
          <BackButton destination="/books" />
          <h1 className="text-2xl my-5 mx-5">Show Book</h1>
        </div>
        <div className="flex items-center ml-4">
          <Link
            to={`/books/edit/${book._id}`}
            className="text-3xl text-green-500 mx-4"
          >
            <AiOutlineEdit />
          </Link>
          <Link
            to={`/books/delete/${book._id}`}
            className="text-3xl text-red-500 mx-4"
          >
            <MdOutlineDelete />
          </Link>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-black-600 mx-2">
          <div className="my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Id :</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Name :</span>
            <span>{book.name}</span>
          </div>
          <div className="my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Author :</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Publish Year :</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Created At :</span>
            <span>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4 mx-8">
            <span className="text-2xl mr-4 text-gray-500">Updated At :</span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default showBook;
