import express from "express";
import { print } from "listening-on";
import path from "path";
import jsonfile from "jsonfile";
import { stringify } from "querystring";
import { readdir } from "fs";

let app = express();

// TODO serve static files in the "public" folder

// TODO allow anyone to signup

// TODO allow user to login

// TODO allow user to publish blog

// TODO allow anyone to view all blog

type User = {
  username: string;
  password: string;
  email: string;
};
let usersFile = "users.json";
let users: User[] = jsonfile.readFileSync(usersFile);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("public", "index.html"));
// });

app.post("/signup", (req, res) => {
  console.log(req.body);

  let { username, password, re_password, email } = req.body;
  if (!username || typeof username !== "string") {
    res.status(400).end("Invalid username, expect non-empty string");
    return;
  }
  if (!password || typeof password !== "string") {
    res.status(400).end("Invalid password, expect non-empty string");
    return;
  }
  if (password != re_password) {
    res.status(400).end("Password doesn't match");
    return;
  }
  for (let user of users) {
    // console.log('check again user:', user)
    if (user.username == username) {
      res.status(400).end("This username has been registered");
      return;
    }
  }
  users.push({ username, password, email });
  jsonfile.writeFile(usersFile, users);

  res.json({ success: true });
  //object or Array
});

let port = 3000;
app.listen(port, () => {
  print(port);
});
