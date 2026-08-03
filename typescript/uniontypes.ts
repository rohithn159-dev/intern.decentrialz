//union type

//Union types in TypeScript allow you to define a variable that can hold multiple types of values. This can be useful when you want to allow a variable to accept different types of data.
/*let value: string | number = "Hello, TypeScript!";
console.log(value);

//Example 2:-
let value2: string | number = 42;
console.log(value2);

//Example 3:-
let id: number | string;

id = 101;

console.log(id);

id = "EMP101";

console.log(id);*/


type Laptop = {
    laptopId: number | string;
    brand: string;
    processor: string;
    price: number | string;
};

var laptop:Laptop = {
    laptopId: 1,
    brand: "Dell",
    processor: "Intel i5",
    price: 65000
};

console.log(laptop);

console.log("-----------------------------");


type Mobile = {
    mobileId: number | string;
    brand: string;
    model: string;
    price: number | string;
};

var mobile: Mobile = {
    mobileId: 101,
    brand: "Samsung",
    model: "Galaxy M35",
    price: 22000
};

console.log(mobile);



console.log("-----------------------------");

type Hospital = {
    hospitalId: number | string;
    hospitalName: string;
    totalBeds: number;
    emergency: boolean;
};

var hospital: Hospital = {
    hospitalId: 500,
    hospitalName: "City Hospital",
    totalBeds: 250,
    emergency: true
};

console.log(hospital);



console.log("-----------------------------");

let mixedValues: (string | number)[] = [
    "Laptop",
    65000,
    "Mobile",
    22000,
    "Tablet",
    18000
];

console.log(mixedValues);