//Access_Modifiers in TypeScript

//Access modifiers are keywords that determine the accessibility of class members (properties and methods) in TypeScript. They control whether a member can be accessed from outside the class or only within the class itself. TypeScript provides three access modifiers: public, private, and protected.

//1) public:- The public access modifier allows a class member to be accessed from anywhere, both inside and outside the class. By default, all class members are public if no access modifier is specified.

//Example 1:-  public 

class TV {
    public brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
}

let tv = new TV("Samsung");

console.log(tv.brand);

//Example 2:-
class Bike {
    public brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }   
}

let bike = new Bike("Yamaha");
console.log(bike.brand);

//2) private:- The private access modifier restricts the accessibility of a class member to within the class itself. Private members cannot be accessed from outside the class, including subclasses.

//Example 1:- private
class Emp {
    private empId: number;
    constructor(empId: number) {
        this.empId = empId;
    }
    getEmpId(): number {
        return this.empId;
    }
}

let emp = new Emp(101);
console.log(emp.getEmpId());


//Example 2:-
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let account = new BankAccount(50000);

account.showBalance();

//  Error
// console.log(account.balance);

//3) protected:- The protected access modifier allows a class member to be accessed within the class itself and its subclasses. It is similar to private, but it provides access to derived classes.

//Example 1:- protected
class Vehicle {
    protected brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    showBrand() {
        console.log(this.brand);
    }
}

let car = new Car("Toyota");

car.showBrand();

//  Error
// console.log(car.brand);

//Example 2:-
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    show() {
        console.log(this.name);
    }
}

let dog = new Dog("Tommy");

dog.show();