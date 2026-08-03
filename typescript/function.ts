//Functions

// A function is a block of code that performs a specific task. In TypeScript, you can define functions with type annotations for parameters and return values, which helps catch errors at compile time.

//Syntax of a function in TypeScript:-

// function functionName(parameters): returnType {
    // code
//}

//Example 1: Function Without Parameters
function hello(): void {
    console.log("Welcome to TypeScript!");
}

hello();

//Example 2: Function With One Parameter
function greet(name: string): void {
    console.log("Hello, " + name + "!");
}

greet("Rohit");
hello();

//Example 3: Function With Multiple Parameters
function showLaptop(
    brand: string,
    model: string,
    price: number
): void {
    console.log("Brand:", brand);
    console.log("Model:", model);
    console.log("Price:", price);
}

showLaptop("Acer", "Inspiron", 65000);

//Example 4: Function With Return Type

// A function can also return a value. You can specify the return type of the function using the colon (:) followed by the type.

//Return type is specified after the parameter list and before the function body and it indicates the type of value that the function will return. If a function does not return any value, you can use the void type as the return type.
function add(num1: number, num2: number): number {
    return num1 + num2;
}

let result = add(20, 30);

console.log(result);

//Example 5: Function Returning a String
function getGreeting(name: string): string {
    return "Hello, " + name + "!";
}

let greeting = getGreeting("Rohit");
console.log(greeting);

//Example 6:- Arrow Function

// Arrow functions are a more concise way to write functions in TypeScript. They use the "=>" syntax and can be used for both named and anonymous functions.
const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 10));