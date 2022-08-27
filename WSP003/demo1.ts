export function createTask(name: string) {
  console.log("start running task:", name);
  setTimeout(function () {
    console.log("finsihed task: ", name);
  }, 1000);
}

async function main() {
  console.log("before start any tasks");
  await createTask("shake milk");
  await createTask("cut potato");
  await createTask("fry french fries");
  await createTask("cut potato");
  console.log("finished all tasks");
}
main();
