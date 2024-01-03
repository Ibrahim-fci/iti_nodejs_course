const http = require("http");
const PORT = 3000;

// custom modules
const userController = require("./controllers/users.controller/users");

const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.end(JSON.stringify(userController.getAllUsers()));
  } else if (req.url == "/" && req.method == "POST") {
    req.on("data", (chunk) => {
      const response = userController.createUser(JSON.parse(chunk));
      res.end(JSON.stringify(response));
    });
  } else if (req.url == "/sorted-users" && req.method == "GET") {
    res.end(JSON.stringify(userController.getAllUsersSorted()));
  } else if (req.url == "/update" && req.method == "PUT") {
    req.on("data", (chunk) => {
      const response = userController.updateUser(JSON.parse(chunk));
      res.end(JSON.stringify(response));
    });
  } else if (req.url == "/delete" && req.method == "DELETE") {
    req.on("data", (chunk) => {
      const response = userController.deleteUser(JSON.parse(chunk));
      res.end(JSON.stringify(response));
    });
  } else if (req.url == "/search" && req.method == "POST") {
    req.on("data", (chunk) => {
      const response = userController.searchUser(JSON.parse(chunk));
      res.end(JSON.stringify(response));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
