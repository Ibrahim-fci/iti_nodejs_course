import User from "../models/User.models.js";
import { decryptText, encryptText } from "../utils/bcrypt.js";
import { generateToken } from "../utils/Jwt.js";

// Function to update a  user by id
export const updateUser = async (req, res) => {
  const data = req.body;
  const { _id } = req.user;

  try {
    // chek if user existes before with the same email
    const user = await User.findById({ _id: _id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // update user
    const updatedUser = await User.findOneAndUpdate(
      { _id: _id },
      {
        username: data.username ? data.username : user.username,
        gender: data.gender ? data.gender : user.gender,
        password: data.password ? encryptText(data.password) : user.password,
        phone: data.phone ? data.phone : user.phone,
      }
    ).select("-password");

    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Function to search for a user
export const searchUser = async (req, res) => {
  const data = req.query;

  try {
    // Check if user exists with the given email
    const users = await User.find({
      username: { $regex: data.username, $options: "i" },
      age: {
        $gte: parseInt(data.minAge) || 0,
        $lte: parseInt(data.maxAge) || 100,
      },
    }).select("-password");

    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Func to get all users
// Function to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .populate("posts", "-author");
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
