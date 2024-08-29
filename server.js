import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import helmet from "helmet";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(cookieParser());
app.use(express.json());
app.use(helmet());

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${port}...`);
});
