////////////////////////////////////////////////////////////////////////
let startTime = Date.now();

function dateGirl(activity: string) {
  let endTime = Date.now();
  let usedTime = endTime - startTime;
  console.log(`${activity} used ${usedTime}ms`);
}

setTimeout(() => {
  dateGirl("傾下計");
  setTimeout(() => {
    dateGirl("追求");
    setTimeout(() => {
      dateGirl("求婚");
    }, 1000);
  }, 1000);
}, 1000);

// setTimeout(() => {
//   let endTime = Date.now();
//   let usedTime = endTime - startTime;
//   console.log(`追求 used ${usedTime}ms`);
// }, 1000);

// setTimeout(() => {
//   let endTime = Date.now();
//   let usedTime = endTime - startTime;
//   console.log(`求婚 used ${usedTime}ms`);
// }, 1000);
