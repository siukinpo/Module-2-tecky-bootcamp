import { formatDate } from "./04-lib";
// import fetch from "node-fetch";
import lib from "./04-lib";

let date2 = "2019-08-31";

let dateStr2 = formatDate(date2);

console.log("=============================1==========================");
console.log(dateStr2);

console.log("=============================2==========================");
console.log(lib);

console.log("=============================3==========================");
lib.hello();

console.log(lib.myName);
