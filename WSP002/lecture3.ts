import { CodingStudent } from "./lecture2";

class TeckyStudent extends CodingStudent {
  discussWithBeeno(hours: number) {
    this.learn(hours, 10);
  }
  read(hours: number) {
    this.learn(hours, 1.2);
  }
}

export function main() {
  let oliver = new TeckyStudent("oliver", 20, ["html", "css"]);
  let markus = new TeckyStudent("markus", 20, ["html", "css"]);

  let getOliverName = oliver.getName;
  let getRealName = getOliverName.bind(markus);

  console.log(oliver.getName());
  console.log(
    "==================================1================================="
  );

  console.log(markus.getName());

  console.log(
    "==================================2================================="
  );

  console.log(getRealName());

  console.log(
    "==================================3================================="
  );

  oliver.discussWithBeeno(10);
  oliver.read(1);

  console.log(oliver);
}
main();
