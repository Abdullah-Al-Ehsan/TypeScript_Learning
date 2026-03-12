

// union :

let a : number | boolean | string;
a = 22;
a = true;
a = 'hello';


// union with typechecking :
function showValue(value: number | string) {

  if (typeof value === "number") {
    console.log(value * 2);
  } 
  else {
    console.log(value.toUpperCase());
  }

}






// Intersection Type (&) : combine multiple types together.

interface Person {
  name: string;
}
interface Employee {
  employeeId: number;
}

type Staff = Person & Employee;   // merged

const worker: Staff = {
  name: "Akil",
  employeeId: 101
};