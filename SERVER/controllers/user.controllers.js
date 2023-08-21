import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    console.log("getAllUsers() called...");
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
