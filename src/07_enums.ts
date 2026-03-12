

enum Day {
  Sunday=10,    //usually start from 0;
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
let today: Day = Day.Friday;
console.log(today);          //15



//example
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

let result: Status = Status.Success;
console.log(result); // Output: 200





// use in function :

enum Direction {
  Up,
  Down,
  Left,
  Right
}

function movePlayer(direction: Direction) {
  console.log("Player moves:", direction);
}
movePlayer(Direction.Left);  //2
movePlayer(Direction.Down);  //1





// Exanples :   Common in backend systems

enum Role {
  Admin,
  User,
  Guest
}

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Full access");
  }
  else {
    console.log("Limited access");
  }
}

checkAccess(Role.Admin);