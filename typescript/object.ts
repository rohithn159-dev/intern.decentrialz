// object 

// object is a collection of key-value pairs where each key is a string (or symbol) and the value can be of any type. In TypeScript, you can define the shape of an object using interfaces or type aliases.

// Example of an object with a specific shape using an interface
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const person: Person = {
  name: "Rohit",
  age: 21,
  isStudent: true
};

console.log("Person Details:");
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Is Student: " + person.isStudent);


// STUDENT OBJECT PRACTICE


let student = {
    id: 101,
    name: "Rohit",
    age: 21,
    course: "BCA",
    college: "Bharathi Degree College",
    city: "Warangal",
    isPassed: true,
    cgpa: 8.2
};

// Print Complete Object
console.log("Student Details");
console.log(student);

console.log("--------------------------");

// Print Individual Properties
console.log("Student ID:", student.id);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Course:", student.course);
console.log("College:", student.college);
console.log("City:", student.city);
console.log("Passed:", student.isPassed);
console.log("CGPA:", student.cgpa);

console.log("--------------------------");

// Update Properties
student.age = 22;
student.city = "Hyderabad";
student.cgpa = 8.6;

console.log("After Updating Student Details");
console.log(student);

console.log("--------------------------");


// EMPLOYEE OBJECT


let employee = {
    empId: 201,
    empName: "Sameer",
    department: "Software",
    designation: "Frontend Developer",
    salary: 45000,
    experience: 2,
    isPermanent: false
};

console.log("Employee Details");
console.log(employee);

console.log("--------------------------");

console.log("Employee ID:", employee.empId);
console.log("Employee Name:", employee.empName);
console.log("Department:", employee.department);
console.log("Designation:", employee.designation);
console.log("Salary:", employee.salary);
console.log("Experience:", employee.experience);
console.log("Permanent Employee:", employee.isPermanent);

console.log("--------------------------");

// Update Employee Details
employee.salary = 50000;
employee.designation = "React Developer";
employee.isPermanent = true;

console.log("Updated Employee Details");
console.log(employee);

console.log("--------------------------");


// MOBILE OBJECT


let mobile = {
    brand: "Samsung",
    model: "Galaxy M35",
    color: "Blue",
    storage: "256GB",
    ram: "8GB",
    battery: "6000mAh",
    price: 25000,
    is5G: true
};

console.log("Mobile Details");
console.log(mobile);

console.log("--------------------------");

console.log("Brand:", mobile.brand);
console.log("Model:", mobile.model);
console.log("Color:", mobile.color);
console.log("Storage:", mobile.storage);
console.log("RAM:", mobile.ram);
console.log("Battery:", mobile.battery);
console.log("Price:", mobile.price);
console.log("5G Support:", mobile.is5G);

console.log("--------------------------");

// Update Mobile Details
mobile.price = 23000;
mobile.color = "Black";

console.log("Updated Mobile Details");
console.log(mobile);

console.log("--------------------------");


// BOOK OBJECT


let book = {
    title: "TypeScript Basics",
    author: "John",
    publisher: "ABC Publications",
    pages: 350,
    price: 699,
    language: "English",
    available: true
};

console.log("Book Details");
console.log(book);

console.log("--------------------------");

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Publisher:", book.publisher);
console.log("Pages:", book.pages);
console.log("Price:", book.price);
console.log("Language:", book.language);
console.log("Available:", book.available);

console.log("--------------------------");

// Update Book Details
book.price = 599;
book.available = false;

console.log("Updated Book Details");
console.log(book);
