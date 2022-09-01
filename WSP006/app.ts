import express, { urlencoded } from "express";
import { print } from "listening-on";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

type Student = {
  name: string;
};
let students: Student[] = [];

app.get("/students", (req, res) => {
  res.end(JSON.stringify(students));
  // res.json(students)
});

app.post("/students", (req, res) => {
  console.log("post /students , req.body: ", req.body);
  students.push(req.body);
});

let port = 8080;
app.listen(port, () => {
  print(port);
});
