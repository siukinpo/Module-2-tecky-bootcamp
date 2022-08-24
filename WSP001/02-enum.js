// enum Direction {
//   East = "e",
//   South = "s",
//   West = "w",
//   North = "n",
// } the 0,1, 2,3, will disappear
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["North"] = 3] = "North";
})(Direction || (Direction = {}));
var Kind;
(function (Kind) {
    Kind[Kind["Diamond"] = 0] = "Diamond";
    Kind[Kind["Club"] = 1] = "Club";
    Kind[Kind["Heart"] = 2] = "Heart";
    Kind[Kind["Spade"] = 3] = "Spade";
})(Kind || (Kind = {}));
console.log(Direction);
function sum(nums) {
    //<--- Type error here if you write nums:Array
    var total = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        total += num;
    }
    return total;
}
function identity(arg) {
    return 123;
    return arg;
}
identity("wfdsfds");
identity(1234);
//# sourceMappingURL=02-enum.js.map