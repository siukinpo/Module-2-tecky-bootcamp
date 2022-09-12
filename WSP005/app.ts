import express from "express";
import fs from "fs";
import { print } from "listening-on";
import path from "path";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import { on } from "events";

// console.log(express);

let app = express();
let count = 0;
//////////////////////////////////////////////////////////////////////

app.use((req, res, next) => {
  console.log(req.method, req.url);
  console.log("req.headers: ", req.headers);
  console.log("req.cookie: ", req.cookies);
  //   console.log("req.headers:", req.headers);
  //   console.log("req.cookies:", req.cookies);
  if (req.url.endsWith(".html")) {
    count++;
  }
  next();
});

app.use(cookieParser());
app.use(
  expressSession({
    secret: "tecky123",
    resave: true,
    saveUninitialized: true,
  })
);
declare module "express-session" {
  interface SessionData {
    name?: string;
  }
}

app.use((req, res, next) => {
  console.log("what about after applying cookieParser() as middleware");
  console.log("req.cookie: ", req.cookies);
  console.log("req.session: ", req.session);

  next();
});

app.get("/", (req, res) => {
  res.setHeader("content-Type", "text/html");
  res.write("<h1>Hellow from express.js</h1>");
  for (let i = 0; i < 10; i++) {
    res.write("hi x " + (i + 1) + "<br>");
  }
  res.write('<a href="about.html">about</a>');
  res.write("<br>");
  res.write('<a href="dice.html">Dice</a>');
  res.write("<br>");
  res.write('<a href="visitors.html">Visitors</a>');
  res.write("<br>");
  res.write('<a href="settings.html">Settings</a>');
  res.end();
});

app.get("/dice.html", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  let dice = Math.floor(Math.random() * 6 + 1);
  res.write("<p>Random result: " + dice + "</p>");
  res.write('<a href="dice.html">Retry</a>');
  res.end();
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.resolve("public", "about.html"));
});

app.get("/count", (req, res) => {
  res.write('<a href="/">Home</a>');
  res.write("<br>");
  res.end("count: " + count);
});

app.get("/visitors.html", (req, res) => {
  fs.readFile(path.join("public", "visitors.html"), (err, data) => {
    if (err) {
      res.write("Failed to load visitors.html");
      res.end();
      return;
    }
    let html = data.toString().replace("{count}", count.toLocaleString());
    res.write(html);
    res.end();
  });
});

///////////////////////////////////////////////////////////////////////////

app.get("/profile", (req, res) => {
  console.log(">> GET /profile <<");
  console.log("req.url", req.url);
  console.log("req.query", req.query);
  let lang = req.query.lang;
  res.header("Content-Type", "text/html; charset=utf-8");
  res.cookie("lang", lang);
  switch (lang) {
    case "en":
      res.write("Saved.");
      break;
    case "zh":
      res.write("已儲存");
      break;
    default:
      res.status(400);
      res.write("Invalid lang: " + lang);
  }
  res.write('<p><a href="/settings.html">Back</a></p>');
  res.end();
});

app.get("/login", (req, res) => {
  let name = req.query.name;
  if (!name) {
    res.status(400);
    res.end("missing name in req.query");
    return;
  }
  if (typeof name !== "string") {
    res.status(400);
    res.end("invalid name in req.query");
    return;
  }
  req.session.name = name;
  req.session.save();
  res.redirect("/settings.html");
});

app.get("/current-user", (req, res) => {
  res.end("current0user: " + req.session.name);
});

app.use(express.static("public"));
/////////////////////////////////////////////////////////////////
let enStatic = express.static(path.join("public", "en"));
let zhStatic = express.static(path.join("public", "zh"));

app.use((req, res, next) => {
  let lang = req.cookies.lang || "en";
  switch (lang) {
    case "en":
      enStatic(req, res, next);
      break;
    case "zh":
      zhStatic(req, res, next);
      break;
    default:
      next();
  }
});

/* fallback route handler*/
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.resolve("public/404.html"));
});

let port = 3000;
app.listen(port, () => {
  print(port);
});
