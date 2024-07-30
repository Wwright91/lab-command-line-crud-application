const { nanoid } = require("nanoid");

function create(purchases, purchaseDetails) {
  console.log(purchaseDetails);
  const [name, amount] = purchaseDetails;
  const purchase = {
    id: nanoid(4),
    name: name,
    amount: +amount,
    donation: +(Math.ceil(amount) - amount).toFixed(2),
  };
  purchases.push(purchase);
  return purchases;
}

module.exports = { create };
