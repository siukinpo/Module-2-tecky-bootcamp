import express from "express";
import { env } from "./env";
import { client } from "./client";
import { userRoutes } from "./user.routes";

const app = express();

client.connect((err) => {
  if (err) {
    console.log("fuck i cant connect db");
  }
  console.log("connected with db");
});

app.use("/user", userRoutes);

app.use(express.static("public"));

// app.get("/user", () => {
//   console.log("hi");
// });

app.listen(env.PORT, () => {
  console.log(`listening at http://localhost:${env.PORT}`);
});
