"use strict";
// union :
let a;
a = 22;
a = true;
a = 'hello';
// union with typechecking :
function showValue(value) {
    if (typeof value === "number") {
        console.log(value * 2);
    }
    else {
        console.log(value.toUpperCase());
    }
}
const worker = {
    pname: "Akil",
    employeeId: 101
};
