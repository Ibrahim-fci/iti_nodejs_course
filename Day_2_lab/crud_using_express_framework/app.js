const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());

// routes

app.use("/posts", require("./routes/posts.route"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
