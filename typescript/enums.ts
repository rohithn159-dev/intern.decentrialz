//enums

//enums is a way to define a set of named constants in TypeScript. It allows you to create a collection of related values that can be used throughout your code. Enums can be numeric or string-based, and they provide a way to give more meaningful names to sets of values.

// Example of a numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Example of a string enum
enum HttpStatus {
  OK = "200",
  NotFound = "404",
  InternalServerError = "500"
}

console.log("Direction Up: " + Direction.Up); // Output: 0
console.log("Direction Down: " + Direction.Down); // Output: 1
console.log("Direction Left: " + Direction.Left); // Output: 2
console.log("Direction Right: " + Direction.Right); // Output: 3
console.log("HttpStatus OK: " + HttpStatus.OK);
console.log("HttpStatus NotFound: " + HttpStatus.NotFound);
console.log("HttpStatus InternalServerError: " + HttpStatus.InternalServerError);