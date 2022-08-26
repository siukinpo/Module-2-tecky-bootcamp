import { CodingStudent } from "./lecture2";

class TeckyStudent extends CodingStudent {
  discussWithBeeno(hours: number) {
    this.learn(hours, 10);
  }

  read(hours: number) {
    this.learn(hours, 1.2);
  }
}

let oliver = new TeckyStudent("Oliver", 20, ["html", "css"]);

oliver.discussWithBeeno(10);
oliver.read(1);

console.log(oliver);
