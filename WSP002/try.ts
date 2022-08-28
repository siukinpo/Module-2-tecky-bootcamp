export class Student {
  /*Fields*/
  name: string;
  age: number;
  learningLevel: number;

  /*Constructor*/
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
///////////////////////////////////////////////////////////////////////////////////////////
export class CodingStudent extends Student {
  constructor(name: string, age: number) {
    super(name, age);
    this.learningLevel = 10;
  }
  learn(hourSpent: number) {
    this.learningLevel += hourSpent * 0.5;
  }
  slack(hourSpent: number) {
    /*Calling slack(hourSpent) in Student*/
    super.slack(hourSpent);
    this.learningLevel -= hourSpent * 0.3;
  }

  /*It is also beneficial for CodingStudent to read Reddit*/
  readReddit(hourSpent: number) {
    this.learningLevel += hourSpent * 0.2;
  }
}
////////////////////////////////////////////////////////////////////////////
let james = new CodingStudent("James", 23);

james.slack(10);
james.slack(10);

console.log(james.learningLevel);
