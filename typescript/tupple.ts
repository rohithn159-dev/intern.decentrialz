//tupple

let interviewDetails: [string, number, boolean][] = [["Google", 21, true], ["Microsoft", 25, false], ["Amazon", 30, true]];
let [company, age, isInterviewed] = interviewDetails[0];
console.log("Company: " + company);
console.log("Age: " + age);
console.log("Is Interviewed: " + isInterviewed);

// Student Tuple
let stu: [number, string, number, boolean] = [
    101,
    "Rohit",
    8.2,
    true
];

console.log("STUDENT");
console.log(stu);
console.log(stu[0]);
console.log(stu[1]);
console.log(stu[2]);
console.log(stu[3]);

stu[2] = 8.8;
console.log("Updated Student:", stu);

// Employee Tuple
let emp: [number, string, string, number] = [
    201,
    "Rohit",
    "Frontend Developer",
    45000
];

console.log("EMPLOYEE");
console.log(emp);
console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);
console.log(emp[3]);

emp[3] = 50000;
console.log("Updated Employee:", emp);

// Laptop Tuple
let laptop: [string, string, string, number] = [
    "Dell",
    "Acer",
    "Intel i5",
    65000
];

console.log("LAPTOP");
console.log(laptop);

laptop[3] = 62000;
console.log("Updated Laptop:", laptop);
