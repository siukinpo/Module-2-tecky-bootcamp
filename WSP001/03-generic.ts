function sum(nums: Array<number>) {
  //<--- Type error here if you write nums:Array
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

identity("wfdsfds");
identity(1234);
