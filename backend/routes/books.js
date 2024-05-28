import express, { request } from "express";
import { Book } from "../models/book.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    if (!books) {
      return response.status(400).json({
        message: error.message,
      });
    }

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    if (!book) {
      return response.status(400).json({
        message: error.message,
      });
    }

    return response.status(200).json({
      data: book,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).json({
        message: "You must fill required fields !",
      });
    }

    const book = {
      name: request.body.name,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const result = await Book.create(book);

    if (!result) {
      return response.status(400).json({
        message: "New Book has not successfully added into database :( ...",
      });
    }
    return response.status(200).json({
      message: "New Book has been successfully added into database :) ...",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).json({
        message: "You must fill required fields !",
      });
    }

    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(400).json({
        message: "The book has not been successfully updated :( ...",
      });
    }
    return response.status(200).json({
      message: "New Book has been successfully updated:) ...",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return response.status(400).json({
        message: error.message,
      });
    }

    return response.status(200).json({
      message: `The book "${book.name}" has been deleted successfully ...`,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
});
export default router;
