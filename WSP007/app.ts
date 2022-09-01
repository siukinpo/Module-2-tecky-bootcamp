import express from "express";
import { print } from "listening-on";

let app = express();

app.use(req,res,next)=>{
    // console.log(req.method , );
    
}
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

type Memo = {
  content: string;
};

let memos: Memo[] = [];

app.post("/memos", (req, res) => {
  res.status(501);
  res.end("TODO");
});

app.get("/memos");

let port = 8080;
app.listen(port, () => {
  print(port);
});
