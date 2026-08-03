//class in typescript

// A class is a blueprint for creating objects with properties and methods. It encapsulates data and behavior related to a specific entity.

//Syntax of a class in TypeScript:-

/*class ClassName {
    property: type;

    constructor(property: type) {
        this.property = property;
    }

    method() {
         code
    }
}

class can have properties, constructor, and methods. The constructor is a special method that is called when an object of the class is created. It is used to initialize the properties of the class. The methods define the behavior of the class and can be called on objects of the class.

1) class creates a blueprint

class Book {

}

2) constructor is a special method that is called when an object of the class is created. It is used to initialize the properties of the class.

Simple:- Runs automatically when an object is created.

constructor(title: string) {
    this.title = title;
}

3) This keyword is used to refer to the current instance of the class. It is used to access the properties and methods of the class.

simple:- It refers to the current object of the class.

this.title = title;

Example:-

if you create like this:- let book1 = new Book("TypeScript Basics");

Then:-
this.book1.

4) new

create a new object.

Example:- 
let book = new Book("TypeScript", "Rohit", 2026);


Problems:-*/

class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    displayBook(): void {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    }
}

let book1 = new Book("TypeScript Basics", "Rohit", 2026);

book1.displayBook();

//Example 2:- Class with Methods and Properties

class Laptop {
    brand: string;
    model: string;
    price: number;
    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    displayLaptop(): void {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Price:", this.price);
    }
}

let laptop1 = new Laptop("Dell", "Inspiron", 65000);
laptop1.displayLaptop();


//Example 3:-

class Hotel {
    hotelName: string;
    city: string;
    rating: number;

    constructor(
        hotelName: string,
        city: string,
        rating: number
    ) {
        this.hotelName = hotelName;
        this.city = city;
        this.rating = rating;
    }

    display() {
        console.log("Hotel");
        console.log("Name:", this.hotelName);
        console.log("City:", this.city);
        console.log("Rating:", this.rating);
    }
}

let hotel1 = new Hotel(
    "Grand Palace",
    "Hyderabad",
    4.5
);

hotel1.display();
