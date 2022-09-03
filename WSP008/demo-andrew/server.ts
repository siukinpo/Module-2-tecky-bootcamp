/*
[*] Get All TODOs
[] Get a Memo
[*] Add a TODO
[] Edit a TODO
[] Delete a TODO 
*/
import express from 'express';

const app = express();
app.use(express.urlencoded());
app.use(express.json());

//query string: http://localhost:8080/memo?id=1&contain=hello
//param : http://localhost:8080/memo/hello
//RESTful -> method(GET,POST,PATCH,PUT,DELETE) + verbs
type TODO = {
    id:number,
    content:string,
    image:string
}
const memos:Array<TODO> = [
    {id:0,content:"TODO#1",image:""},
    {id:1,content:"TODO#2",image:""},
    {id:2,content:"TODO#3",image:""}
];

app.get("/memos",(req,res)=>{
    res.json(memos);
});

//query string: http://localhost:8080/memo?memo_id=1
app.get("/memo",(req,res)=>{
    //const memo_id = req.query.memo_id;
    const {memo_id} = req.query;
    res.json(memos[parseInt(memo_id as string)]);
    //res.redirect("/")
});

app.post("/memo",(req,res)=>{
    try{
    const {content} = req.body;
    //const content = req.body.content;
    //const image = req.body.image;
    memos.push({id:memos.length,content,image:""});
    res.json(
       {success:true}
    )}
    catch(ex){
        console.log(ex);
        res.json({
            success:false,
            msg:ex
        })
    }
});

//param : http://localhost:8080/memo/3
app.put("/memo/:id",(req,res)=>{
    try {
        const { id } = req.params; /*string*/
        const { content } = req.body;
        memos[parseInt(id)].content = content;
        res.json({ success: true });
    } catch (ex) {
        res.json({ success: false, msg: ex });
    }
});

app.use(express.static("public"));

app.listen(8080,()=>{
    console.log("Server are ready. Come Come");
});