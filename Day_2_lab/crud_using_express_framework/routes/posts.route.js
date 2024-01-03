const express = require("express");
const route = express.Router();

const postController = require("../controllers/posts/posts");
const PostValidatorValidator = require("../middlewares/validators/posts/create-post-validator");

route.get("/", postController.getPosts);
route.post(
  "/",
  PostValidatorValidator.createPostValidator,
  postController.createPost
);

route.get("/reversed-posts", postController.getAllPostsReversed);
route.put("/:id", postController.updatePost);
route.delete("/:id", postController.deletePost);
route.get("/:id", postController.searchPost);

module.exports = route;
