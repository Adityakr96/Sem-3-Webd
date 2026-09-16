const fs = require("fs");

// CREATE
fs.writeFileSync("student.txt", "Name: Aditya\nAge: 20");

console.log("File created.");

// READ
const data = fs.readFileSync("student.txt", "utf8");

console.log("\nFile content:");
console.log(data);

// UPDATE
fs.appendFileSync("student.txt", "\nCourse: B.Tech CSE");

console.log("\nFile updated.");

// READ again
const updatedData = fs.readFileSync("student.txt", "utf8");

console.log("\nUpdated file content:");
console.log(updatedData);

// DELETE
fs.unlinkSync("student.txt");

console.log("\nFile deleted.");
