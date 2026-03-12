
/*
  BASIC: Explicitly Typed Language.
 TypeScript checks types at compile time. No accidental type changes.
 In large projects, without types it becomes hard to know:
   - What type is this variable?
   - What should this function return?
*/



//Basic Types

let Age   : number = 23;
let Name  : string = "Ehsan";
let isTrue : boolean = true;




// ANY Type :

let value: any = "hello";    // start as string
value = 42;                  //  no error
value = true;                //  no error
value = [1, 2, 3];           //  no error

//When to use — you truly don't know the type yet
// e.g. data coming from an API or external source




// Unknown Type :  (recommened over any)

//unknown accepts any type value — but it forces you to check the type before using it.
let text: unknown = "hi";
text = 42;             //  no error
text = true;           //  no error

let b: unknown = "Ehsan"; 
// b.toUpperCase();   Error : must check type first (safe). 


//Correct way to use unknown :
let val: unknown = "Ehsan";
if (typeof val === "string") {
  console.log(val.toUpperCase());  
}


//annotation : 
let a : number | boolean | string;
a = 22;
a = true;
a = 'hello';