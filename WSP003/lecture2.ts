//////////////////////////////////////////////////////////

let you = {
  isTall: true,
  isHandsome: false,
  isRich: true,
};

let testHeight = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    if (you.isTall) {
      resolve("ok!");
    } else {
      reject("farn uk kei la");
    }
  }, 1000);
});

let testHandsome = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    if (you.isHandsome) {
      resolve("jengggggggg!!!!!");
    } else {
      reject("farn uk kei la");
    }
  }, 2000);
});

let testRich = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    if (you.isRich) {
      resolve("marry me!");
    } else {
      reject("farn uk kei la");
    }
  }, 3000);
});

///////////////////////////////////////////////////////////////////////////////

// console.log(test);

testHeight
  .then((reply) => {
    console.log("here");
    console.log(reply);
    return testHandsome;
  })
  .then((answer) => {
    console.log(answer);
    return testRich;

    // console.log("HEREEEEEEEEEEE");
    // if (answer == "rich") {
    //   console.log("jenggg ah marry him");
    // }
  })
  .then((reply) => {
    console.log(reply);
  })
  .catch((e) => {
    // console.log("there");
    console.log(e);

    // console.log(reply);
  });

Promise.all([testHeight, testHandsome, testRich])
  .then(([height, handsome, rich]) => {
    console.log(height);
    console.log(handsome);
    console.log(rich);
    console.log({ height, handsome, rich });
    console.table({ height, handsome, rich });
  })
  .catch((e) => {
    console.log(e);
  });

///////////////////////////////////////////////////////////////////////////////////
// console.log(Promise);

// console.log(Array);
// let a = [1, 2, 3];
// a.filter((x) => x % 2 == 0).forEach((e) => {
//   console.log(e);
// });
