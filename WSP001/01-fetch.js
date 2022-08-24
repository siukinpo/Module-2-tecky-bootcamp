const fetch = require("node-fetch");
const fs = require("fs");

console.log("start fetching");

fetch("https://github.com/")
  .then((response) => response.text())
  .then((text) => {
    fs.writeFile("index.html", text, () => {
      console.log("written to index.html");
    });
  });
