import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/users.js";
import courseRoutes from "./routes/courses.js"
dotenv.config();

const server = express();

const port = process.env.PORT || 5000;

server.use(express.json({ limit: "30mb", extended: true }));
server.use(express.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

server.use("/users", userRoutes);
server.use("/courses",courseRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("Successful connection with database ^_^ "))
  .then(() =>
    server.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(`Failed conncetion with database :) `));
