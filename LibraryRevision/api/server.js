import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { dbConfig } from "./src/dbConfig/dbConfig.js";

dotenv.config();

// import the database config

dbConfig();

const port = process.env.PORT || 6000;
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

import userRouter from "./src/routers/userRotuer.js";
app.use("/api/v1/user", userRouter);

app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "The page cannot be found",
  };

  next(error);
});

app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;

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

app.listen(port, (error) => {
  error
    ? console.log(error.message)
    : console.log(`The server is running at PORT http://localhost:${port}`);
});
