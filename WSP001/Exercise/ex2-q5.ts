type Teacher = {
  name: string;
  age: number;
  students: Student[];
};
type Student = {
  name: string;
  age: number;
  exercises?: Exercise[];
};
type Exercise = {
  score: number;
  date: Date;
};

const peter: Teacher = {
  name: "Peter",
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

for (let student of peter.students) {
  if (student.exercises) {
    for (let exercise of student.exercises) {
      console.log(exercise);
    }
  }
  // @ts-expect-error
  for (let exercise of student.exercises) {
    console.log(exercise);
  }
  for (let exercise of student.exercises || []) {
    console.log(exercise);
  }
}
