import express from "express";
import path from "path";

const app = express();
const port = 8080;
let studentList = [{ name: "a" }, { name: "b" }, { name: "c" }];

app.use(express.json());

app.use((req, res, next) => {
  console.log(` ${req.method} ${req.url}`);
  next();
});

// app.get("/", (req, res) => {
//   res.end("hi");
// });

app.post("/students", (req, res) => {
  let student = req.body;
  console.log(student);

  studentList.push(student);
  res.json({ studentNo: studentList.length });
});

app.delete("/students/:id", (req, res) => {
  let id = parseInt(req.params.id);
  console.log(studentList.length);

  studentList.splice(id, 1);
  console.log(studentList.length);

  res.json({ message: "fuck off" });
});

app.get("/students", (req, res) => {
  res.json(studentList);
});

app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(path.resolve("public/404.html"));
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
