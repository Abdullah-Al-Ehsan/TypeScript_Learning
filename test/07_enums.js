"use strict";
var Day;
(function (Day) {
    Day[Day["Sunday"] = 10] = "Sunday";
    Day[Day["Monday"] = 11] = "Monday";
    Day[Day["Tuesday"] = 12] = "Tuesday";
    Day[Day["Wednesday"] = 13] = "Wednesday";
    Day[Day["Thursday"] = 14] = "Thursday";
    Day[Day["Friday"] = 15] = "Friday";
    Day[Day["Saturday"] = 16] = "Saturday";
})(Day || (Day = {}));
let today = Day.Friday;
console.log(today); //15
//example
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
let result = Status.Success;
console.log(result); // Output: 200
// use in function :
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function movePlayer(direction) {
    console.log("Player moves:", direction);
}
movePlayer(Direction.Left); //2
movePlayer(Direction.Down); //1
// Exanples :   Common in backend systems
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkAccess(role) {
    if (role === Role.Admin) {
        console.log("Full access");
    }
    else {
        console.log("Limited access");
    }
}
checkAccess(Role.Admin);
