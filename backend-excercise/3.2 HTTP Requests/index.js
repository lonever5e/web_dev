import express from "express";

const app = express();
let port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello</h1>");
});

app.listen(port, ()=>{
    console.log("Server up and running")
});