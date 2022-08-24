"use strict";
// type Student = {
//   name: string;
//   age: number;
//   exercises?: Exercise[];
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = exports.hello = exports.greetStudent = exports.formatDate = void 0;
// type Exercise = {
//   score: number;
//   date: Date;
// };
function formatDate(date) {
    var newDate = new Date(date);
    return newDate.toLocaleString();
    //   console.log(date.toLocaleString);
    //   return date.toLocaleString();
    //   return 123
}
exports.formatDate = formatDate;
function greetStudent(student) {
    console.log("hi", student.name);
}
exports.greetStudent = greetStudent;
function hello() {
    console.log("hello");
}
exports.hello = hello;
exports.myName = "gordon";
exports.default = {
    formatDate: formatDate,
    hello: hello,
    myName: exports.myName,
    greetStudent: greetStudent,
};
//# sourceMappingURL=04-lib.js.map