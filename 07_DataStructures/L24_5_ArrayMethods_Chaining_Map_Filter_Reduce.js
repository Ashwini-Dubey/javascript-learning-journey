const orders = [
  { id: 1, amount: 120, status: "paid"    },
  { id: 2, amount: 80,  status: "pending" },
  { id: 3, amount: 200, status: "paid"    },
  { id: 4, amount: 50,  status: "pending" },
];

const totalPaid = orders
  .filter(order => order.status === "paid")  // keep paid only
  .map(order => order.amount)               // extract amounts
  .reduce((sum, amt) => sum + amt, 0);

console.log(totalPaid); // Output: 320

const totalPending = orders
  .filter(order => order.status === "pending")  // keep pending only
  .map(order => order.amount)                   // extract amounts
  .reduce((sum, amt) => sum + amt, 0);

console.log(totalPending); // Output: 130