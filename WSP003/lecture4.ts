// import os from "os";
import fs from "fs";

// let cpus = os.cpus();

// console.log(cpus);

// fs.readFile("tsconfig.json", (err, data) => {
// //   if (err) {
// //     console.log(data);
// //   }
// if(err) throw err
//   console.log(data.toString());
// });

fs.promises
  .readFile("tsconfig.json")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });

async function readFile(path: string) {
  let file = await fs.promises.readFile(path);
  console.log(file);

  return file;
}

async function main() {
  await readFile("tsconfig.json");
}

console.log(readFile("tsconfig.json"));

main();
