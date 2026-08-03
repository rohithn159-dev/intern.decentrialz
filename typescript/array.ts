//Array

let myskills: string[] = ["JavaScript", "TypeScript", "React", "Node.js"];
let mynumbers: number[] = [0,1, 2, 3, 4, 5];
let myskillsAndProficiency:any[]=[["JavaScript", 5], ["TypeScript", 4], ["React", 3], ["Node.js", 4]]
console.log("My skills are: " + myskills);
console.log("My numbers are: " + mynumbers);
console.log("My skills and proficiency are: " + myskillsAndProficiency);

myskills.push("HTML","CSS");
mynumbers.push(6,7,8);
mynumbers.pop();
myskillsAndProficiency.push(["HTML", 3], ["CSS", 4]);