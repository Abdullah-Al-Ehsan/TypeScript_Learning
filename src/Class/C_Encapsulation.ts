
// ---------- Parent Class  ----------
class Vehicle {
  protected speed: number;
  protected brand: string;

  constructor(brand: string, speed: number) {
    this.speed = speed;
    this.brand = brand;
  }

  public get currentSpeed(): number {   // getter 
    return this.speed;
  }
  public set currentSpeed(value: number) {   // setter 
    if (value >= 0) {
      this.speed = value;
    } 
    else {
      console.log("Speed cannot be negative!");
    }
  }

  public start(): void {
    console.log(`${this.brand} is starting`);
  }
}



// ---------- Subclass ----------
class Car extends Vehicle {
  private fuel: number;

  constructor(brand: string, speed: number, fuel: number) {
    super(brand, speed);
    this.fuel = fuel;
  }


  public get currentFuel(): number {          // getter
    return this.fuel;
  }
  public set currentFuel(amount: number) {     // setter 
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

console.log("Speed:", car1.currentSpeed); // getter
car1.currentSpeed = 80;                   // setter
console.log("Speed after set:", car1.currentSpeed);

// Using getter and setter for fuel
console.log("Fuel:", car1.currentFuel); // getter
car1.currentFuel = 15;                  // setter
console.log("Fuel after set:", car1.currentFuel);


// TypeScript does not allow a setter to take 2 arguments. Its limited to exactly 1 parameter.