import User from "../models/User.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: `Failed Can not find users!!! ${error}` });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = User(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: `Failed to create new user ${error}` });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = req.body;
    const { id: _id } = req.params;//_id :den vi skriver i websidan när vi uppdatera
    if (!mongoose.Types.ObjectId.isValid(_id))//isvalid 8letar efter) om det finns inte i database 
      return res
        .status(404)
        .json({ message: `Can't finde this user with that id:${_id}!!` });
    const updatedUser = await User.findByIdAndUpdate(_id, user);
    res.status(204).json(updatedUser);
  } catch (error) {
    res.status(409).json({ message: `Failed to update this user ${error}` });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res
        .status(404)
        .json({ message: `Can't delete this user with that id:${_id}!!` });
    await User.findByIdAndDelete(_id);
    res.status(200).json(_id);
  } catch (error) {
    res.status(500).json({ message: `Failed to delete this user ${error}` });
  }
};
