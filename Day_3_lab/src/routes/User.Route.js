import express from "express";
const route = express.Router();

// custom modules
import {
  createUserValidator,
  loginValidator,
} from "../middlewares/Validators/User.Validator.js";
import { createUser, login } from "../controllers/Auth.Controller.js";
import {
  updateUser,
  searchUser,
  getAllUsers,
} from "../controllers/User.Controller.js";
import { authorize } from "../middlewares/Auth/authorize.js";

// routes
route.get("/", getAllUsers);
route.post("/signup", createUserValidator, createUser);
route.post("/login", loginValidator, login);
route.post("/update", authorize, updateUser);
route.get("/search", searchUser);

export default route;
