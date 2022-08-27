////////////////////////////////////////////////////////////////
import fs from "fs";
import path from "path";

async function listAllJsRecursive(_path: string) {
  fs.promises
    .readdir(_path)
    // If promise resolved and
    // data are fetched
    .then(async (filenames: string[]) => {
      for (let filename of filenames) {
        const statFile = await fs.promises.stat(path.join(_path, filename));
        if (path.extname(filename) == ".js") {
          console.log(path.join(_path, filename));
        } else if (statFile.isDirectory()) {
          await listAllJsRecursive(path.join(_path, filename));
        }
      }
    })

    // If promise is rejected
    .catch((err: string) => {
      console.log(err);
    });
}

listAllJsRecursive("/Users/siukinpo/Documents/Module-2-tecky-bootcamp/WSP003");
