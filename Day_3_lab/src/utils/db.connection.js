import mongoose from "mongoose";

export const dbConnetion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("invalid connection: ", error.message);
  }
};
