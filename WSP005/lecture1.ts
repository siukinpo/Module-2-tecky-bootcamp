import express from "express";
import path from "path";
import { print } from "listening-on";

// console.log(express)

let app = express();

//middleware
app.use((req, res, next) => {
  console.log("Received request: ", req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Received request: ", req.url);
  next();
});

/* / stands for the default page, also called "home page" */

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.header("Content-Type"));
  console.log(req.header("User-Agent"));

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello from express.js</h1>");
  //for loop also dynamic
  for (let i = 0; i < 10; i++) {
    res.write("hi x " + (i + 1) + "<br>");
  }
  res.write('<a href="about.html">About</a>');
  res.write("<br>");
  res.write('<a href="dice.html">Dice</a>');
  res.end();
});

/* serve a virtual file */
//dynamic resources
app.get("/dice.html", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<p>Random result: " + Math.floor(Math.random() * 6 + 1) + "</p>");
  res.write('<a href="dice.html">Retry</a>');
  res.end();
});

/* serve a static file */
//static
app.get("/about.html", (req, res) => {
  res.sendFile(path.resolve("public/about.html"));
});

/* serve entire folder */
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.resolve("public/404.html"));
});

let port = 3000;
app.listen(port, () => {
  print(port);
});
