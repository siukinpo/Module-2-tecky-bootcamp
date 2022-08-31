import express from "express";
import { print } from "listening-on";
import dayjs from "dayjs";
import path from "path";
import expressSession from "express-session";

let app = express();

app.use(
  expressSession({
    secret:
      Math.random().toString(36).slice(2) +
      Math.random().toString(36).slice(2) +
      Math.random().toString(36).slice(2),
    resave: true,
    saveUninitialized: true,
  })
);

declare module "express-session" {
  interface SessionData {
    counter?: number;
  }
}

app.use((req, res, next) => {
  let counter: number = req.session.counter || 0;
  counter++;
  req.session.counter = counter;
  req.session.save();
  next();
});

app.use((req, res, next) => {
  let time = dayjs().format("YYYY-MM-DD HH:mm:ss");
  let counter = req.session.counter;
  console.log(`[${time}] Request ${counter} ${req.url}`);
  next();
});

app.use(express.static("public-demo"));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.resolve("public-demo", "404.html"));
});

let port = 8080;
app.listen(port, () => {
  print(port);
});
