/////////////////////////////////////////////////////;
// 1. fs.promises.readdir
const fs = require("fs");
import path from "path";

// The process.cwd() gives current
// working directory

function listAllJs(_path: string) {
  fs.promises
    .readdir(_path)
    // If promise resolved and
    // data are fetched
    .then((filenames: string) => {
      for (let filename of filenames) {
        if (path.extname(filename) == ".js")
          console.log(path.join(_path, filename));
      }
    })

    // If promise is rejected
    .catch((err: string) => {
      console.log(err);
    });
}

listAllJs("/Users/siukinpo/Documents/Module-2-tecky-bootcamp/WSP003");

console.log("===============================================================");

// async function listAllJs(_path: string) {
//   let filenames = await fs.promises.readdir(_path);

//   console.log(Array.isArray(filenames));

//   for (let filename of filenames) {
//     console.log(path.join(_path, filename));
//   }
// }
// listAllJs("/Users/siukinpo/Documents/Module-2-tecky-bootcamp/WSP003");
