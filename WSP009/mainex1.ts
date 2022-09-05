import { Client } from "pg";
import dotenv from "dotenv";
// dotenv is a TS library
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
dotenv.config();
// this can help us 讀個.env 同埋將d野塞落去process.env到
// you can use process.env to access the value in the .env via the environment variables.
console.log(process.env.DB_name);

export const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

client.connect();
//connect()係會比翻一個promise你，你可以.then .catch去搵翻佢嗰value
