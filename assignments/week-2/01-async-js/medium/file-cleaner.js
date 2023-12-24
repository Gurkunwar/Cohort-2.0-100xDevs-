const fs = require("fs");
const filePath = "./file.txt";

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading to the file:", err);
//     return;
//   }

//   const cleanedData = data.replace(/\s+/g, " ");

//   fs.writeFile(filePath, cleanedData, "utf-8", (err) => {
//     if (err) {
//       console.error("Error writing to the file:", err);
//       return;
//     }

//     console.log("data successfully updated");
//   });
// });

// approach using promise

const readFile = (path) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

const removeExtraSpaces = function (content) {
  return content.replace(/\s+/g, " ");
};

const writeFile = (path, content) => {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, content, "utf-8", function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

readFile(filePath)
  .then(function (fileData) {
    const cleanedData = removeExtraSpaces(fileData);
    return writeFile(filePath, cleanedData);
  })
  .then(function () {
    console.log("file read and write successfull");
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });
