import fs from "fs";
import path from "path";

listAllJS("/Users/pak/Documents/hk-map-21-may-22-kb-exercises/WEF000").catch(
  function (err) {
    console.log(err);
  }
);

async function listAllJS(path: string): Promise<void> {
  const files: string[] = await fs.promises.readdir(path);
  for (const file of files) {
    try {
      const stat = await fs.promises.stat(path + "/" + file);
      if (!stat.isDirectory() && file.endsWith(".js")) {
        console.log(file);
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
