import { check } from "express-validator";
import validatorResultMiddeleware from "./Validation.Result.js";

export const createUserValidator = [
  check("email").isEmail().withMessage("Invalid email format"),
  check("username").notEmpty().withMessage("username is required"),
  check("password").notEmpty().withMessage("password is required"),
  check("gender").notEmpty().isIn(["male", "female"]),
  check("age").isNumeric().withMessage("age is required"),

  validatorResultMiddeleware,
];

export const loginValidator = [
  check("email").isEmail().withMessage("Invalid email format"),
  check("password").notEmpty().withMessage("password  is required"),

  validatorResultMiddeleware,
];
