// enum Direction {
//   East = "e",
//   South = "s",
//   West = "w",
//   North = "n",
// } the 0,1, 2,3, will disappear

enum Direction {
  East,
  South,
  West,
  North,
}

enum Kind {
  Diamond,
  Club,
  Heart,
  Spade,
}
console.log("=============================1==========================");
console.log(Direction);
console.log("=============================2==========================");
console.log(Direction[2]);

console.log("=============================3==========================");
enum Direction1 {
  East = "e",
  South = "s",
  West = "w",
  North = "n",
}

console.log(Direction1);

console.log("=============================4==========================");

// function turnTo(direction: Direction) {
//   if (direction == Direction.EAST) {
//     console.log("This is the direction East!");
//   }
//   return direction != Direction.EAST;
// }

// console.log(turnTo(Direction)));
