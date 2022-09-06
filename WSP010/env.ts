import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: +process.env.PORT! || 8080,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
};
