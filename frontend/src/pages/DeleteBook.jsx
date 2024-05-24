import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const deleteBook = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <div className="flex items-center mr-4">
          <BackButton destination={`/books/details/${id}`} />
          <h1 className="text-2xl my-5 mx-5">Delete Book</h1>
        </div>
      </div>
    </>
  );
};

export default deleteBook;
