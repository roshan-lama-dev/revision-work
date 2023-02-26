import express from "express";

import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// initialising dotenv
dotenv.config();

const app = express();

//initialisng middlewares
app.use(cors());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  res.json({
    message: "You do not have access here",
  });
});

app.use("*", (req, res, next, error) => {
  const obj = {
    status: "error",
    statusCode: 404,
    message: "Page not found",
  };

  next(error);
});

app.use((error, req, res, next) => {
  try {
    const errorCode = error.statusCode;
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
