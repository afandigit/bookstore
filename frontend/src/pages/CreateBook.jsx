import React from "react";
import BackButton from "../components/BackButton";
const CreateBook = () => {
  return (
    <>
      <div className="flex items-center m-4">
        <BackButton destination="/books" />
        <h1 className="text-2xl my-5 mx-5">Creat Book</h1>
      </div>
    </>
  );
};

export default CreateBook;
