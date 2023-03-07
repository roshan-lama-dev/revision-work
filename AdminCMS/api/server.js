import express from "express";

import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { dbConfig } from "./src/config/dbConfig.js";

// initialising dotenv
dotenv.config();

const app = express();

dbConfig();

//initialisng middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const PORT = process.env.PORT || 8000;

import adminRouter from "./src/routers/adminRouter.js";
app.use("/api/v1/admin", adminRouter);

app.use("/", (req, res, next) => {
  res.json({
    message: "You do not have access here",
  });
});

app.use((error, req, res, next) => {
  console.log(error.message, "===GlobalError====");
  const errorCode = error.errorCode || 404;
  res.status(errorCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
