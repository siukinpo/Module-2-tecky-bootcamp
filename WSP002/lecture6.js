function deposit(amount) {
  this.total += amount;
  console.log(
    `Amount ${amount} is deposited to the account of ${this.name} and the total amount is ${this.total}`
  );
  return this.total;
}

let beeno = { name: "beeno", total: 1000000000 };
let dennis = { name: "dennis", total: 0 };

let depositToBeeno = deposit.bind(beeno);
let depostitToDennis = deposit.bind(dennis);

depositToBeeno(100000000000);
depositToBeeno(100000000000);

depositToBeeno(100000000000);
depositToBeeno(100000000000);
depositToBeeno(100000000000);

depostitToDennis(1);
