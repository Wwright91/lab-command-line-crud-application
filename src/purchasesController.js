const { nanoid } = require("nanoid");
const chalk = require("chalk");

const inform = console.log;

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

function index(purchases) {
  return purchases
    .map((purchase) => purchase.id + " " + purchase.name)
    .join("\n");
}

function show(purchases, purchaseId) {
  const purchase = purchases.find((purchase) => purchase.id === purchaseId);
  return `${chalk.green("id")} ${purchase.id} ${chalk.green("name")} ${
    purchase.name
  } ${chalk.green("amount")} $ ${purchase.amount} ${chalk.green(
    "donation"
  )} ${chalk.yellow("$ " + purchase.donation)}`;
}

function edit(purchases, purchaseId, updatedPurchase) {
  console.log(updatedPurchase);
  const [name, amount] = updatedPurchase;
  const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
  if (index > -1) {
    purchases[index].id = purchaseId;
    purchases[index].name = name;
    purchases[index].amount = +amount;
    purchases[index].donation = +(Math.ceil(amount) - amount).toFixed(2);

    inform("purchase successfully updated");
    return purchases;
  } else {
    inform("purchase not found. No action taken");
    return purchases;
  }
}

function destroy(purchases, purchaseId) {
  const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
  if (index > -1) {
    purchases.splice(index, 1);
    inform("purchase successfully removed from collection");
  } else {
    inform("purchase not found. No action taken");
  }
  return purchases;
}

function total(purchases) {
  let sum = 0

  for (let i = 0; i < purchases.length; i++){
    sum += purchases[i].donation
  }

  return `${chalk.blue("Total donations:")} $ ${sum}` 
}

module.exports = { create, index, show, edit, destroy, total };
