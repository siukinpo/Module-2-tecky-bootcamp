import axios from "axios";
import fs from "fs";

import { lib } from "./lib";

console.log("=============================1==========================");
console.log(lib.someObject);
console.log(lib.someFunction());

///////////////////////////////////////////////////////////////////////////////////////

console.log("=============================2==========================");
import Cls from "./Cls";
console.log(Cls());

/////////////////////////////////////////////////

console.log("=============================3==========================");
import { func } from "./func";
console.log(func());
