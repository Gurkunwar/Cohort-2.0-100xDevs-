
using promise
const fs = require("fs"); 
function kunwarReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}