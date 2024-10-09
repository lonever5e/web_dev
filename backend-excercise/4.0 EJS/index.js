import { dirname } from "path";
import express from "express";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    const d = new Date();
    let day = d.getDay();
    let daysType = ["weekend", "weekday", "weekday", "weekday", "weekday", "weekday", "weekend"]
    let toDo = {"weekend": "have fun", "weekday": "work"};
    res.render("index.ejs",
        {dayType: daysType[day], action: toDo[daysType[day]]}
    );
});


app.listen(port, ()=>{
    console.log("Server is running");
})