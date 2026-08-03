//instersection types

//Intersection types in TypeScript allow you to combine multiple types into a single type. This can be useful when you want to create a new type that has all the properties of two or more existing types.

// Example 1:-(Book and Publisher)
type Book = {
    title: string;
    author: string;
};

type Publisher = {
    publisher: string;
    year: number;
};

type BookDetails = Book & Publisher;

let book: BookDetails = {
    title: "TypeScript Basics",
    author: "John",
    publisher: "ABC Publications",
    year: 2025
};

console.log(book);

// Example 2:-(Employee and Address)
type Employee = {
    empId: number;
    empName: string;
};

type Address = {
    street: string;
    city: string;
    zipCode: string;
};

type EmployeeAddress = Employee & Address;
let Emp: EmployeeAddress = {
    empId: 101,
    empName: "Rohit",
    street: "Ramannapet",
    city: "Warangal",
    zipCode: "506002"
};

console.log(Emp);

// Example 3:-(Car and Engine)
type Car = {
    make: string;
    model: string;
};

type Engine = {
    displacement: number;
    horsepower: number;
};

type CarEngine = Car & Engine;
let car: CarEngine = {
    make: "Toyota",
    model: "Camry",
    displacement: 2500,
    horsepower: 203
};
console.log(car);

// Example 4:-(Student and Course)
type Student = {
    id: number;
    name: string;
};
type Course = {
    courseName: string;
    duration: number;
};
type StudentCourse = Student & Course;
let student: StudentCourse = {
    id: 101,
    name: "Rohit",
    courseName: "BCA",
    duration: 3
};
console.log(student);