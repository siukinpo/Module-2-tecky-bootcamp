// coding student

import { Student } from "./lecture1";

export class CodingStudent extends Student {
  skills: Array<string>;
  constructor(name: string, age: number, skills: string[]) {
    super(name, age);
    this.skills = skills;
  }
  code(hours: number) {
    // console.log("hello world");
    this.learn(hours, 1.5);
  }
}

let louis = new CodingStudent("louis", 30, ["typescript", "javacript"]);

export function main() {
  louis.read(10);
  louis.code(5);

  console.log(louis);
}
