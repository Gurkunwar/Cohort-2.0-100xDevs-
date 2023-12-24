// Async, Await and Promises

const fs = require("fs");   //file system module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

// using promise
// const fs = require("fs"); 
// function kunwarReadsFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data);
//         })
//     })
// }

// function onDone(value){
//     console.log(value);
// }

// kunwarReadsFile().then(onDone);

// promise using async, await

// function kunwarAsyncFunc(){
//     let p= new Promise(function(resolve){       
//         resolve("hi there")
//     });
//     return p;
// }

// async function main(){
//     let value = await kunwarAsyncFunc();
//     console.log(value);
// }

// main();

// console.log("uhfjfvfedfv")