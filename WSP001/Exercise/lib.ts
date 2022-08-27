// export const someObject = "Hello World";

// export function someFunction() {
//   return "Foobar";
// }
// export let lib = {
//   someObject,
//   someFunction,
// };

export let lib = {
  someObject: "Hello World",
  someFunction: function () {
    console.log("Foobar");
    return "Foobar";
  },
};
