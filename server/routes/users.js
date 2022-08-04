import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").patch(updateUser).delete(deleteUser);

export default router;
