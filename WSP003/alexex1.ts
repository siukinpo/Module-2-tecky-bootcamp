import fs from "fs";
import path from "path";

// listAllJS("/Users/pak/Documents/hk-map-21-may-22-kb-exercises/WEF000");
// .catch(
//   function (err) {
//     console.log(err);
//   }
// );

async function listAllJS(_path: string): Promise<void> {
  const files: string[] = await fs.promises.readdir(_path);

  for (const file of files) {
    // console.log(path.join(_path, file));

    try {
      const stat = await fs.promises.stat(path.join(_path, file));
      if (!stat.isDirectory() && file.endsWith(".js")) {
        console.log(path.join(_path, file));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

function listAllJSThen(path: string): Promise<void> {
  return fs.promises.readdir(path).then(function (files) {
    for (const file of files) {
      fs.promises
        .stat(path + "/" + file)
        .then(function (stat) {
          if (!stat.isDirectory() && file.endsWith(".js")) {
            console.log(file);
          }
        })
        .catch(function (e) {
          console.log(e);
        });
    }
  });
}
listAllJS("C:\\Users\\Siu Kin Po\\Desktop\\Module-2-tecky-bootcamp\\WSP003"); //windows
