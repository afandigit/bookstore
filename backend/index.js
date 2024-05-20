import express from "express";
import { PORT, mongooseURL } from "./config.js";
import cros from "cors";
import mongoose from "mongoose";
import booksRouter from "./routes/books.js"
const app = express();

// Middlewares
app.use(cros());
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(234).send("Welcome to MERN Stack BOOK STORE App ...");
});

app.use('/books', booksRouter);

mongoose
  .connect(mongooseURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGOOSE ERROR : ", error.message);
  });
