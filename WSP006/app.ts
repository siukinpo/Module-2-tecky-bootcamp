import express from "express";
import { print } from "listening-on";

let app = express();

app.use(express.json());

type Student = {
  id: number;
  name: string;
};

// let students: Student[] = [];
// name -> Student
let students = new Map<string, Student>();

app.get("/students", (req, res) => {
  // res.end(JSON.stringify(students));
  res.json(Array.from(students.values()));
});

app.post("/students", (req, res) => {
  console.log("post /students, req.body: ", req.body);
  let { name } = req.body;
  if (!name) {
    res.status(400);
    res.end("Missing name in req.body");
    return;
  }
  if (typeof name !== "string") {
    res.status(400);
    res.end("Invalid name , should be string");
    return;
  }
  if (students.has(name)) {
    res.status(409);
    res.end("Duplicated student name");
    return;
  }
  // students.push(name);
  let id = students.size + 1;
  students.set(name, { id, name });
  res.status(201);
  res.end("Student registrated successfully");
});

app.patch("/students:id", (req, res) => {
  console.log("patch /students, req.params: ", req.params);
});

let port = 8080;
app.listen(port, () => {
  print(port);
});
