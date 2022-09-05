import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
//you can use process.env to access the value in the .env via the environment variables.

export const client = new Client({
  database: process.env.B_NAME,
  user: process.env.DB_USERNAMDE,
  password: process.env.DB_PASSWORD,
});

client.connect();
//connect()係會比翻一個promise你，你可以.then .catch去搵翻佢嗰value
