import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "mongoose";
import configureDatabase from "./configs/mongoDB.config.js";
// Configure environment variables:
dotenv.config();
const _PORT = process.env.PORT || 5000;
const app = express();
const _MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// Configure routes:
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const startServer = async () => {
  try {
    app.listen(_PORT, () => {
      console.log(
        `Server is running on port: ${_PORT} http://localhost:${_PORT} `
      );
    });
    console.log("Starting server...");
    configureDatabase(_MONGO_DB_CONNECTION_STRING);
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
