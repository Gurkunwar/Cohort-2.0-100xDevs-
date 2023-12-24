const fs = require("fs");   //file system module

fs.readFile("./sample.txt", "utf-8", function(err, data){
    console.log(data);
})

// for(let i=0; i<=100000000;i++){}