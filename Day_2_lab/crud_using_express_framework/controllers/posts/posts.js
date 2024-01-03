const { v4: uuidv4 } = require("uuid");

let posts = [];

const createPost = (req, res) => {
  const post = { id: uuidv4(), timstamp: Date.now(), ...req.body };
  posts.push(post);
  res.json({ message: "post created successfully", data: post });
};

const getPosts = (req, res) => {
  res.json(posts);
};

const getAllPostsReversed = (req, res) => {
  let reversedArray = posts.slice().reverse();

  return res.json(reversedArray);
};

const updatePost = (req, res) => {
  // find the post by id
  const post = posts.find((post) => post.id === req.params.id);
  if (!post) {
    return res.status(404).json({ message: "post not found" });
  }
  // update the post
  const updatedPost = { ...post, ...req.body };
  const index = posts.indexOf(post);
  posts[index] = updatedPost;
  res.json({ message: "post updated successfully", data: updatedPost });
};

const deletePost = (req, res) => {
  // delete post by id
  let length_posts = posts.length;
  posts = posts.filter((post) => post.id !== req.params.id);
  if (posts.length === length_posts) {
    return res.status(404).json({ message: "post not found" });
  }

  res.json({ message: "post deleted successfully" });
};

const searchPost = (req, res) => {
  const post = posts.find((post) => post.id === req.params.id);
  if (!post) {
    return res.status(404).json({ message: "post not found" });
  }
  res.json(post);
};

module.exports = {
  createPost,
  getPosts,
  getAllPostsReversed,
  updatePost,
  deletePost,
  searchPost,
};
