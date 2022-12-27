let bill = 1000;
// let tip = 15 < bill < 300 ? bill * 0.15 : bill * 0.2; // Wrong, we have to use && operator
let tip = bill <= 300 && bill >= 15 ? bill * 0.15 : bill * 0.2;

let total = tip + bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}
`);
