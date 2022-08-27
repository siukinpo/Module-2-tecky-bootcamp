let startTime = Date.now();

setTimeout(() => {
  dateGirl("傾下計");
  setTimeout(() => {
    dateGirl("追求");
    setTimeout(() => {
      dateGirl("求婚");
    }, 1000);
  }, 1000);
}, 1000);

function dateGirl(activity: string) {
  let endTime = Date.now();
  let usedTime = endTime - startTime;
  console.log(`用左${usedTime}ms ${activity}`);
}
// setTimeout(() => {
//   let endTime = Date.now();
//   let usedTime = endTime - startTime;
//   console.log(`用左${usedTime}ms追求`);
// }, 1000);

// setTimeout(() => {
//   let endTime = Date.now();
//   let usedTime = endTime - startTime;
//   console.log(`用左${usedTime}ms求婚`);
// }, 1000);
