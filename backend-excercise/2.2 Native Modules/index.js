const fs = require("node:fs");

fs.writeFile("temp.txt", "Hello from Node", (err)=>{
    if (err) throw err;
    console.log("Sucessfully saved file");
});

fs.readFile("temp.txt", "utf-8", (err, data)=>{
    if (err) throw err;
    console.log(data);
});