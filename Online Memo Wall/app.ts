import express from "express";
import { Request, Response } from "express";
import path from "path";
import jsonfile from "jsonfile";
import { print } from "listening-on";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.get("/", function (req: Request, res: Response) {
//   //   res.end("Hello World");
//   res.sendFile(path.resolve("public", "index.html"));
// });

app.post("/memoSubmit", async (req, res) => {
  //await jsonfile.writeFile()
  const memoMsg = req.body;
  console.log(memoMsg);

  let memoArray = await jsonfile.readFile("memo.json");
  //   console.log(memoArray);
  memoArray.push(memoMsg);

  await jsonfile.writeFile("memo.json", memoArray);
  res.redirect("./index.html");
});

let port = 3000;
app.listen(port, () => {
  print(port);
});
