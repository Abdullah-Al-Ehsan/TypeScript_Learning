"use strict";
// ---------- Parent Class  ----------
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    get currentSpeed() {
        return this.speed;
    }
    set currentSpeed(value) {
        if (value >= 0) {
            this.speed = value;
        }
        else {
            console.log("Speed cannot be negative!");
        }
    }
    start() {
        console.log(`${this.brand} is starting`);
    }
}
// ---------- Subclass ----------
class Car extends Vehicle {
    constructor(brand, speed, fuel) {
        super(brand, speed);
        this.fuel = fuel;
    }
    get currentFuel() {
        return this.fuel;
    }
    set currentFuel(amount) {
        if (amount >= 0) {
            this.fuel = amount;
        }
        else {
            console.log("Fuel cannot be negative!");
        }
    }
}
// ---------- Usage ----------
const car1 = new Car("Toyota", 50, 10);
car1.start();
// Using getter and setter for speed
console.log("Speed:", car1.currentSpeed); // getter
car1.currentSpeed = 80; // setter
console.log("Speed after set:", car1.currentSpeed);
// Using getter and setter for fuel
console.log("Fuel:", car1.currentFuel); // getter
car1.currentFuel = 15; // setter
console.log("Fuel after set:", car1.currentFuel);
