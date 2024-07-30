const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create } = require("./src/purchasesController");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const purchase = process.argv[3];
  let purchasedProducts = readJSONFile("./data", "purchases.json");
  let writeToFile = false;
  let updatedPurchasesList = [];

  switch (action) {
    case "index":
      inform(action);
      break;
    case "create":
      updatedPurchasesList = create(purchasedProducts, process.argv.slice(3));
      inform("Item created");
      writeToFile = true;
      break;
    case "show":
      inform(action, purchase);
      break;
    case "update":
      inform(action, purchase);
      break;
    case "destroy":
      inform(action, purchase);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("./data", "purchases.json", updatedPurchasesList);
  }
}
run();
