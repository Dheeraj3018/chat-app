import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import conntectToDb from "./db/connectToDb.js";
import { app } from "./socket/socket.js";


dotenv.config();

const PORT = process.env.PORT
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("hello world");
// })
app.listen(PORT, () => {
  conntectToDb();
  console.log(`server is running on port ${PORT}`)
});




