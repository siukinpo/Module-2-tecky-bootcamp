function deposit(this: any, amount: number) {
  this.total += amount;
  console.log(`Amount ${amount} is deposited to the account of ${this.name}`);
  return this.total;
}

deposit(1000);

function flyToAnywhere(this: any) {
  console.log(`${this.winner} can fly to ${this.destination}`);
}
let winnerInfo = { winner: "Sam", destination: "Buenos Aires" };
flyToAnywhere.bind(winnerInfo);
