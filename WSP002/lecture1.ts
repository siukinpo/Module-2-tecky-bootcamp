import { Human } from "./lecture4";
import { Hongkonger } from "./lecture5";

type StudentType = {
  name: number;
  age: number;
  knowledge: number;
};

let maggie = {
  name: "maggie",
  age: 50,
  knowledge: 0,
};

let lawerence = {
  name: "lawerence",
  age: 30,
  knowledge: 0,
};

abstract class TWCitizen {
  constructor(public name: string) {}
  abstract commute(): void;
}

export class Student extends TWCitizen implements Human, Hongkonger {
  private age: number;
  protected knowledge: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
    this.knowledge = 0;
  }
  commute() {
    console.log("i go to school by bus");
  }
  scanLeaveHomeSafe() {
    console.log("aiiiiiii");
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
      throw new Error("life overload, you will die soon");
    }
    this.learn(hours, 1);
  }
}

export function main() {
  // let dennis = new TWCitizen()
  let ivan = new Student("ivan", 20);
  let polly = new Student("polly", 18);

  ivan.read(4);
  ivan.read(5);
  ivan.read(10);
  ivan.commute();

  ivan.scanLeaveHomeSafe();
  // ivan.read(24);
  // polly.age
  console.log(polly.getAge());

  // ivan.knowledge = 1000000;
  // console.log(ivan.knowledge);

  console.log(ivan);
  console.log(polly);
}

main();
