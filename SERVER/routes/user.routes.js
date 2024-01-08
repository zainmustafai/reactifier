import express from "express";
import { getAllUsers } from "../controllers/user.controllers.js";

export const userRouter = express.Router();
userRouter.get("/", getAllUsers);
