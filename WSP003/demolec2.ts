let you = {
  isTall: true,
  isHandsome: true,
  isRich: true,
};

export let testHeight = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    if (you.isTall) {
      resolve("ok!");
    } else {
      reject("farn uk kei la");
    }
  }, 500);
});

export function testHandsome(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (you.isHandsome) {
        resolve("jenggggggg!");
      } else {
        reject("farn uk kei la");
      }
    }, 1000);
  });
}

export function testRich() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (you.isRich) {
        resolve("marry me!");
      } else {
        reject("farn uk kei la");
      }
    }, 2000);
  });
}
// console.log(test);

// console.log(Promise);

// console.log(Array);
// let a = [1, 2, 3];
// a.filter((x) => x % 2 == 0).forEach((e) => {
//   console.log(e);
// });

export function test() {
  testHeight
    .then((reply) => {
      console.log("here");
      console.log(reply);
      return testHandsome();
    })
    .then((answer) => {
      console.log(answer);
      return testRich();
    })
    .then((reply) => {
      console.log(reply);
    })
    .catch((e) => {
      console.log(e);
    });

  Promise.all([testHeight, testHandsome(), testRich()]).then(
    ([height, handsome, rich]) => {
      console.log(height);
      console.log(handsome);
      console.log(rich);
      console.log({ height, handsome, rich });
      console.table({ height, handsome, rich });
    }
  );
}
