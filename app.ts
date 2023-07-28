import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import logger from "morgan";
import mongoose from "mongoose";

import productRouter from './routers/product.routes'
import salesRouter from './routers/sales.routes'
import usersRouter from  './routers/users.routes'
import capitalRouter from './routers/capital.routes'
const app: Express = express();

const PORT = process.env.PORT || process.env.PORT || 4312;

import db = mongoose.connection;

const url = "mongodb://127.0.0.1:27017/stock";
mongoose.connect(url);

db.on("error", (error: Error) => console.log(error));
db.once("open", () => console.log("DATABASE CONNECTED ⚡"));

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle the error
  console.error(err.message);

  return res.status(500).send({
    statusCode: "96",
    statusMessage: "Something went wrong",
    data: err.message,
  });
};
app.use(
  cors({
    origin: "*",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Methods",
      "Access-Control-Request-Headers",
      "Access-Control-Allow-Origin",
    ],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
    //   enablePreflight: false,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
  })
);

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use('/products', productRouter)
app.use('/users', usersRouter)
app.use('/sales', salesRouter)
app.use('/capital', capitalRouter)

app.listen(PORT, () => {
  console.log("listening on port");
});
