// 1. define class
// 2. let it to be object

//define class通常都會用大階
class Student {
  /*Fields*/
  // name , age , learningLevel => properties
  name: string;
  age: number;
  learningLevel: number;

  /*Constructor*/
  //呢到有幾多parameter，就要係new一個新object嗰陣比幾多嗰parameter佢地
  //呢到set咗learningLevel一開始係0，所以正係入兩個para就得
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.learningLevel = 0;
  }

  /* Methods */
  learn(hourSpent: number) {
    this.learningLevel += hourSpent * 0.3;
  }

  slack(hourSpent: number) {
    this.learningLevel -= hourSpent * 0.1;
  }
}

// class 透過 new 變成object
//呢兩個student 係唔會干涉到對方，各自獨立
const student = new Student("Bob", 25);
const student2 = new Student("Annie", 35);
