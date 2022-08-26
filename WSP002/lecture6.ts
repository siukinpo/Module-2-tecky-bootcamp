let total = 9;
let alias = "beeno";

function deposit(this: any, amount: number) {
  this.total += amount;
  console.log(
    this
    // `Amount ${amount} is deposited to the account of ${this.performance.nodeTiming.name} and the total amount is ${this.total}`
  );
  return this.total;
}

deposit(1000);

let beeno = { name: "beeno", total: 1000000000000 };
// let dennis = { name: "dennis", total: 0 };

let depositToBeeno = deposit.bind(beeno);
depositToBeeno(1);
// let depositToDennis = deposit.bind(dennis);

// depositToBeeno(1000000000000);
// depositToDennis(1);

// console.log(beeno);
// console.log(global);
