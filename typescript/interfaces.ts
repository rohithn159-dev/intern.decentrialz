//Interfaces

//Interfaces is a way to define the structure of an object in TypeScript. It allows you to specify the properties and their types that an object should have. Interfaces can be used to enforce type checking and provide better code organization.

// Example of an interface
interface studentDetails {
  name: string;
  age: number;
  isStudent: boolean;
}

interface projectDetails {
  projectName: string;
  projectCompletionDate: string;
  isCompleted: boolean;
}

let project: projectDetails = {
  projectName: "TypeScript Project",
  projectCompletionDate: "2026-12-31",
  isCompleted: false
};

let studentData: studentDetails = {
  name: "Rohit",
  age: 21,
  isStudent: true
};



console.log("StudentDetails:");
console.log("Name: " + studentData.name);
console.log("Age: " + studentData.age);
console.log("Is Student: " + studentData.isStudent);

console .log("\nProjectDetails:");
console.log("Project Name: " + project.projectName);
console.log("Project Completion Date: " + project.projectCompletionDate);
console.log("Is Completed: " + project.isCompleted);

