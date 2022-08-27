console.log("=============================1==========================");

let user = { id: 1, name: "John" };

let id = user.id;
let name = user.name;

console.log("id: " + id);
console.log("name: " + name);

console.log("=============================2==========================");

let teacher = {
  subject: "English",
  students: [],
};

let { subject, students } = teacher;
console.log("subject: ", subject);
console.log("students: ", students);

console.log("=============================3==========================");

let a = 1;
let b = 2;
// let array = [a, b]
// let [c, d] = array
let [c, d] = [a, b];
console.log({ c, d });
console.log([c, d]);
[b, a] = [a, b];
console.log({ a, b });
console.log([a, b]);

console.log("=============================4==========================");
let lib = require("./bonus-export-demo");
console.log(lib);
console.log(lib.getDefault());
