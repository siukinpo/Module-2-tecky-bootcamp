import { testHandsome, testHeight, testRich } from "./demolec2";

// function test() {}

async function main() {
  try {
    console.log("step 1");

    let height = await testHeight;
    console.log(height);
    console.log("step 2");

    let handsome = await testHandsome();
    console.log(handsome);

    console.log("step 3");

    let rich = await testRich();
    console.log(rich);

    console.log("step 4");
  } catch (error) {
    console.log(error);
  }
}

main();
