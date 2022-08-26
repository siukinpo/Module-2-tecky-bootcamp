import { Human } from "./lecture4";

type StudentType = {
  name: number;
  age: number;
  //   knowledge: number;
  //   read: () => void;
};

let maggie = {
  name: "maggie",
  age: 50,
  knowledge: 0,
  //   read: () => {
  //     this.knowledge += 1;
  //   },
};

let lawerence = {
  name: "lawerence",
  age: 30,
  knowledge: 0,
  //   read: () => {
  //     this.knowledge += 1;
  //   },
};

abstract class TWCitizen {
  abstract commute(): void;
}

export class Student extends TWCitizen implements Human, HongKonger {
  private name: string;
  private age: number;
  private knowledge: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
    this.knowledge = 0;
  }
  commute() {
    console.log("i go to school by bus");
  }

  scanLeaveHomeSafe() {
    console.log("aiiiiiiiiiii");
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
  learn(gain: number, multiplier: number) {
    this.knowledge += gain * multiplier;
  }
  read(hours: number) {
    if (hours > 20) {
      throw new Error("life overload, you will die");
    }
    this.learn(hours, 1);
  }
}

function main() {}
let ivan = new Student("ivan", 20);

ivan.read(4);
ivan.read(5);
ivan.read(10);
ivan.read(18);

console.log(ivan);

let polly = new Student("polly", 18);
console.log(polly);
// the order follows the order of constructor

// ivan.knowledge = 100000000000;
// console.log(ivan.knowledge);
