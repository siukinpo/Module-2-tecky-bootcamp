import fs from "fs";
import path from "path";

//Windows
// listAllJSRecursive(
//   "C:\\Users\\Siu Kin Po\\Desktop\\Module-2-tecky-bootcamp\\WSP003"
// ).catch(function (err) {
//   console.log(err);
// });

//macbook
// listAllJSRecursive("/Users/pak/Documents/hk-map-21-may-22-kb-exercises").catch(
//   function (err) {
//     console.log(err);
//   }
// );

// async function listAllJSRecursive(_path: string): Promise<void> {
//   // bonus: change to Promise<string[]> (async await: ⭐️⭐️⭐️, .then(): ⭐️⭐️⭐️⭐️⭐️⭐️)
//   const files = await fs.promises.readdir(_path);
//   for (const file of files) {
//     try {
//       const stat = await fs.promises.stat(path.join(_path, file));
//       if (stat.isDirectory()) {
//         listAllJSRecursive(path.join(_path, file));
//       }
//       if (!stat.isDirectory() && file.endsWith(".js")) {
//         console.log(path.join(_path, file));
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

function listAllJSRecursiveThen(_path: string): Promise<void> {
  return fs.promises.readdir(_path).then(function (files) {
    for (const file of files) {
      fs.promises
        .stat(path.join(_path, file))
        .then(function (stat) {
          if (stat.isDirectory()) {
            listAllJSRecursiveThen(path.join(_path, file));
          }
          if (!stat.isDirectory() && file.endsWith(".js")) {
            console.log(path.join(_path, file));
          }
        })
        .catch(function (e) {
          console.log(e);
        });
    }
  });
}

//Windows
listAllJSRecursiveThen(
  "C:\\Users\\Siu Kin Po\\Desktop\\Module-2-tecky-bootcamp\\WSP003"
).catch(function (err) {
  console.log(err);
});
