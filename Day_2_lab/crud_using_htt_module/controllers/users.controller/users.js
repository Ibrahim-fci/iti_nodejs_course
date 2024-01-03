const users = [];

const createUser = (data) => {
  // check the data is not empty
  console.log(data);
  if (
    !data ||
    !data.email ||
    data.email === "" ||
    !data.name ||
    data.name === ""
  ) {
    return { error: "you must insert name and email" };
  }

  // check if user already exists
  const userExists = users.some((user) => user.email === data.email);
  if (userExists) {
    return { error: "User already exists" };
  } else {
    users.push(data);
    return { success: "User created successfully" };
  }
};

const getAllUsers = () => {
  return { users: users };
};

const getAllUsersSorted = () => {
  // sort users array
  const sortedusers = users.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return { users: sortedusers };
};

const updateUser = (data) => {
  // update user name
  const user = users.find((user) => user.email === data.email);
  if (user) {
    user.name = data.name;
    return { success: "User updated successfully" };
  } else {
    return { error: "User not found" };
  }
};

const deleteUser = (data) => {
  // delete user
  const user = users.find((user) => user.email === data.email);
  if (user) {
    users.splice(users.indexOf(user), 1);
    return { success: "User deleted successfully" };
  } else {
    return { error: "User not found" };
  }
};

const searchUser = (data) => {
  // search user
  const user = users.find((user) => user.email === data.email);
  if (user) {
    return { user: user };
  } else {
    return { error: "User not found" };
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getAllUsersSorted,
  updateUser,
  deleteUser,
  searchUser,
};
