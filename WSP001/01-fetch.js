import fetch from "node-fetch";
import fs from "fs";

console.log("start fetching");

fetch("https://github.com/")
  .then((response) => response.text())
  .then((text) => {
    console.log("done fetching...");
    fs.writeFile("index.html", text, () => {
      console.log("written to index.html");
    });
  });

console.log("doing others...");
