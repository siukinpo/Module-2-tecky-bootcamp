// type Student = {
//   name: string;
//   age: number;
//   exercises?: Exercise[];
// };

import { Student } from "./01-data-demo";

// type Exercise = {
//   score: number;
//   date: Date;
// };

export function formatDate(date: Date | string): String {
  let newDate = new Date(date);
  return newDate.toLocaleString();
  //   console.log(date.toLocaleString);
  //   return date.toLocaleString();
  //   return 123
}

export function greetStudent(student: Student) {
  console.log("hi", student.name);
}

export function hello() {
  console.log("hello");
}

export const myName = "gordon";

export default {
  formatDate,
  hello,
  myName,
  greetStudent,
};
