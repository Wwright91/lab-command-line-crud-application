const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {
  create,
  index,
  show,
  edit,
  destroy,
  total,
} = require("./src/purchasesController");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const purchase = process.argv[3];
  let purchasedProducts = readJSONFile("./data", "purchases.json");
  let writeToFile = false;
  let updatedPurchasesList = [];

  switch (action) {
    case "index":
      inform(index(purchasedProducts));
      break;
    case "create":
      updatedPurchasesList = create(purchasedProducts, process.argv.slice(3));
      inform("Item created");
      writeToFile = true;
      break;
    case "show":
      inform(show(purchasedProducts, purchase));
      break;
    case "update":
      updatedPurchasesList = edit(
        purchasedProducts,
        purchase,
        process.argv.slice(4)
      );
      writeToFile = true;
      break;
    case "destroy":
      updatedPurchasesList = destroy(purchasedProducts, purchase);
      writeToFile = true;
      break;
    case "total":
      inform(total(purchasedProducts));
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("./data", "purchases.json", updatedPurchasesList);
  }
}
run();
