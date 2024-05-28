import React from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:7777/books/${id}`)
      .then((response) => {
        setLoading(false);
        setName(response.data.data.name);
        setAuthor(response.data.data.author);
        setPublishYear(response.data.data.publishYear);
      })
      .catch(() => {
        setLoading(false);
        alert("Error: Check Your Console ...");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      name,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .put(`http://localhost:7777/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/books");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error: Check Your Console ...");
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex items-center m-4">
        <BackButton destination="/books" />
        <h1 className="text-2xl my-5 mx-5">Edit Book</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-black-500 rounded-xl p-4 w-[600px] mx-auto">
          <div className="my-2 flex">
            <label htmlFor="" className="text-2xl mr-4 text-gray-500 w-[200px]">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 px-4 w-full"
            />
          </div>
          <div className="my-2 flex">
            <label htmlFor="" className="text-2xl mr-4 text-gray-500 w-[200px]">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 w-full"
            />
          </div>
          <div className="my-2 flex">
            <label htmlFor="" className="text-2xl mr-4 text-gray-500 w-[200px]">
              Publish Year
            </label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 w-full"
            />
          </div>
          <button
            className="my-2 bg-blue-100 px-8 py-3 mx-auto rounded-xl text-xl text-blue-900"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default EditBook;
