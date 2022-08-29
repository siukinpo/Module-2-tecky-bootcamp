function test(): number {
  return 123;
}
let testStatus = true;
// function testPromise() {
//   return new Promise((resolve, reject) => {
//     if (testStatus) {
//       resolve(123);
//     }
//     reject("gg");
//   });
// }

type ResolveType = {
  name: string;
  func: () => void;
};

function testPromise() {
  return new Promise<ResolveType>((resolve, reject) => {
    if (testStatus) {
      resolve({
        name: "siukinpo",
        func: () => {
          console.log("hihi");
        },
      });
    }
    reject("gg");
  });
}

async function main() {
  console.log(
    await testPromise().then((res) => {
      res.func();
      return res.name;
    })
  );
}

main();

//   .then((name) => {
//     console.log(name);
//   });
