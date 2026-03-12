

// An interface always represents the structure of an object.

interface user {
   id: number;        
   name: string;      
   email: string;     
   readonly isAdmin: boolean;   // readonly prevent modification once created.
   age?: number;              // optional property
}

let obj: user = {          // here obj is an object, follows user interface.
    id : 1,
    name : 'ehsan',
    email : 'abc',
    isAdmin : true
}

function newUser(user2 : user){            // user2 is an object follows user. it can't change isAdmin now and
    user2.id = 10;                         // age is optional. but have to assign value in rest 3 
    user2.email = 'ehsan@gmail';
    user2.name = 'Ehsan';
}



// interface with function:

interface MathOps {
    (a: number, b: number, c:number) : number;         //This interface describes a function type.
}

const sum : MathOps = (n1,n2,n3) => {
    return n1+n2+n3;
}




// interface can extend another interface :
interface ful{
    flowerName : string;
    color : string;
}

interface newFul extends ful {
       smell : string;
}

let f1 : newFul = {
      flowerName : 'beli',
      color : 'white',
      smell : 'good'
}






// Interface with Class :

interface Animal{
    name : string;
    makeSound(): void;
}

class dog implements Animal {           // class must implement all properties of interface
   
    name = 'Tom';
    makeSound(): void {
        console.log("Bark");
    }
}