"use strict";
// An interface always represents the structure of an object.
let obj = {
    id: 1,
    name: 'ehsan',
    email: 'abc',
    isAdmin: true
};
function newUser(user2) {
    user2.id = 10; // age is optional. but have to assign value in rest 3 
    user2.email = 'ehsan@gmail';
    user2.name = 'Ehsan';
}
const sum = (n1, n2, n3) => {
    return n1 + n2 + n3;
};
let f1 = {
    flowerName: 'beli',
    color: 'white',
    smell: 'good'
};
class dog {
    constructor() {
        this.name = 'Tom';
    }
    makeSound() {
        console.log("Bark");
    }
}
