import express from "express";
import { client } from "./client";

export const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  console.log("getting user...");
  let result = await client.query("select * from students;");
  let students = result.rows;
  console.log(result);

  res.json({ students });
});

userRoutes.get("/info", (req, res) => {
  console.log("getting user info...");
  res.json({ info: "hi" });
});
