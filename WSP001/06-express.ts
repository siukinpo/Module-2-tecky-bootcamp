import express from "express";

console.log(express);

const app = express();

app.listen(() => {
  console.log("listening");
});

export const myName = "gordon";

// Default Export
export default function myDefaultFunction() {
  return "My Default Function";
}
