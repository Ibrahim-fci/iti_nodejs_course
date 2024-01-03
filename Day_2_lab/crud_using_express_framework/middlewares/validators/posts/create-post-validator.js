const { check } = require("express-validator");
const validatorMiddeleware = require("../validationResult");

const createPostValidator = [
  check("title").notEmpty().withMessage("title is required"),
  check("content").notEmpty().withMessage("content  is required"),
  validatorMiddeleware,
];

module.exports = {
  createPostValidator,
};
