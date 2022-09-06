import { env } from "./env";

import { Client } from "pg";

const config = {
  user: env.DB_USER,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
};

export const client = new Client(config);
