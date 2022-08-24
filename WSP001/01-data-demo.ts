let a: number | string = 123;

a = "dennis";

console.log(a);

let numArray: Array<string | number> = ["sdsafds", 1, 2, 3];

function formatDate(date: Date | string): String {
  let newDate = new Date(date);
  return newDate.toLocaleString();
  //   console.log(date.toLocaleString);
  //   return date.toLocaleString();
  //   return 123
}

console.log(formatDate(new Date()));

console.log(formatDate("2019-07-21"));

console.log(new Date());
console.log(new Date().toLocaleString);
////////////////////////////////////////////////////////////////////////////////////

type Teacher = {
  alias: string;
  age: number;
  students: Array<Student>;
};

export type Student = {
  name: string;
  age: number;
  exercises?: Exercise[];
};

export type Exercise = {
  score: number;
  date: Date;
};

const peter: Teacher = {
  alias: "Peter",
  age: 50,
  students: [
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};

function greetStudent(student: Student) {
  console.log("hi", student.name);
}

greetStudent(peter.students[0]);
