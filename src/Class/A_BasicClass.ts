

class Person {
  public name: string;
  private age: number;     //only accessible in this class
  readonly id : number;
   

  constructor(name: string, age: number, id: number) {     // constructor runs when an object is created
    this.name = name;
    this.age = age;
    this.id = id;
  }
  // method
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const p1 = new Person("Akil", 22, 4);       // object p1 created with default constructor params 
p1.greet();                                 // console.log(p1.age) not accessible as private
