"use strict";
class Person {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    // method
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}
const p1 = new Person("Akil", 22, 4); // object p1 created with default constructor params 
p1.greet(); // console.log(p1.age) not accessible as private
