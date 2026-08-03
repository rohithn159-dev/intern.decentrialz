//type-alias

//type-alias is a feature in TypeScript that allows you to create a new name for an existing type. This can be useful for improving code readability and maintainability.

//Example 1:-

// Type Alias for Student


type Student = {
    id: number;
    name: string;
    age: number;
    course: string;
    city: string;
    cgpa: number;
    isPassed: boolean;
};

let student1: Student = {
    id: 101,
    name: "Rohit",
    age: 21,
    course: "BCA",
    city: "Warangal",
    cgpa: 8.2,
    isPassed: true
};

let student2: Student = {
    id: 102,
    name: "Sameer",
    age: 22,
    course: "B.Sc",
    city: "Hyderabad",
    cgpa: 8.8,
    isPassed: true
};

console.log(" STUDENT 1");
console.log(student1);

console.log(" STUDENT 2");
console.log(student2);



// Type Alias for Employee


type Employee = {
    empId: number;
    empName: string;
    department: string;
    designation: string;
    salary: number;
};

let employee1: Employee = {
    empId: 201,
    empName: "Arun",
    department: "IT",
    designation: "Frontend Developer",
    salary: 45000
};

let employee2: Employee = {
    empId: 202,
    empName: "Priya",
    department: "HR",
    designation: "HR Executive",
    salary: 40000
};



// Type Alias for Product


type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 65000,
    stock: 15
};

console.log(product);

