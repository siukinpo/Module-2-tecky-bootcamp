// import fs from "fs";

// async function readQuotes() {
//   const data = await fs.promises.readFile("quotes.txt");
//   console.log(data.toString("utf8"));
// }

import fs from "fs";

async function readQuotes() {
  try {
    const data = await fs.promises.readFile("notExist.txt");
    console.log(data.toString("utf8"));
  } catch (err) {
    console.log(err);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

async function writeFile() {
  const dijkstraQuote1 =
    "Computer science is no more about computers than astronomy is about telescopes.\n";
  const dijkstraQuote2 = "Simplicity is prerequisite for reliability.\n";

  try {
    // Flag w overwrites the original content and create the if it does not exist
    await fs.promises.writeFile("quotes-dijkstra.txt", dijkstraQuote1, {
      flag: "w",
    });
    // Flag a+ appends to the content and create the file if it does not exist
    await fs.promises.writeFile("quotes-dijkstra.txt", dijkstraQuote2, {
      flag: "a+",
    });
  } catch (err) {
    console.log(err);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Step 1");
fs.promises
  .writeFile(
    "quotes-dijkstra.txt",
    "Simplicity is prerequisite for reliability.\n",
    { flag: "w" }
  )
  .then(function () {
    console.log("Step 3");
    console.log("Return the nothing from write");
    return 12345;
  })
  .then(function (returnValue) {
    console.log("Step 4");
    console.log("returnValue here same as return value of step 3 promise");
    return returnValue;
  })
  .catch(function (error) {
    console.log("Step 5");
    console.log(error);
  });
console.log("Step 2");

////////////////////////////////////////////////////////////////////////////////////////////////////

Promise.resolve(1234)
  .then(function (value) {
    console.log(value); // -> 1234
    throw new Error("This is an error");
  })
  .catch(function (err) {
    console.log(err); // Error("This is an error")
  });
////////////////////////////////////////////////////////////////////////////////////////////////////
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(5);

const promiseAll = Promise.all([promise1, promise2]);

promiseAll.then(function (values) {
  console.log(values[0]); // -> 3
  console.log(values[1]); // -> 5
});

//////////////////////////////////////////////////////////////////////////////////////////

async function asyncReadFile() {
  try {
    const data = await fs.promises.readFile("quotes-dijkstra.txt");
    console.log(data.toString("utf-8"));
    const data2 = await fs.promises.readFile("quotes.txt");
    console.log(data2.toString("utf-8"));
  } catch (err) {
    console.log(err);
  }
}
///////////////////////////////////////////////////////////////////////////////

// async function asyncReadFileParallel() {
//   try {
//     const [data, data2] = await Promise.all([
//       readFile("quotes-dijkstra.txt"),
//       readFile("quotes.txt"),
//     ]);
//     console.log(data.toString("utf-8"));
//     console.log(data2.toString("utf-8"));
//   } catch (err) {
//     console.log(err);
//   }
// }
