const inform = console.log;

function run() {
  const action = process.argv[2];
  const purchase = process.argv[3];
  switch (action) {
    case "index":
      inform(action);
      break;
    case "create":
      inform(action, purchase);
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
}
run();