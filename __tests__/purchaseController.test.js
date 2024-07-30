const data = require("../data/mockPurchases.json");
const { create } = require("../src/purchasesController");

describe("Create", () => {
  it("should confirm all the correct fields exist when creating a new item", () => {
    const purchases = [];
    const purchaseDetails = ["bread", 2.77];
    const result = create(purchases, purchaseDetails);

    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("amount");
    expect(result[0]).toHaveProperty("donation");
  });

  it("should ensure the correct datatype is being inserted into each field", () => {
    const purchases = [];
    const purchaseDetails = ["soda", 1.7];
    const result = create(purchases, purchaseDetails);
    const purchase = result[0];

    expect(typeof purchase.id).toBe("string");
    expect(typeof purchase.name).toBe("string");
    expect(typeof purchase.amount).toBe("number");
    expect(typeof purchase.donation).toBe("number");
  });

  it("should throw an error if purchaseDetails length is not exactly 2", () => {
    const purchases = [];

    expect(() => {
      create(purchases, ["Coffee"]);
    }).toThrow("purchaseDetails must have exactly 2 elements");

    expect(() => {
      create(purchases, ["Coffee", 2.5, "Extra"]);
    }).toThrow("purchaseDetails must have exactly 2 elements");
  });

  it("should create a new purchase object and append to end of the purchase array", () => {
    const currentPurchase = create(data, ["vodka", 21.72]);
    data.push(currentPurchase);
    expect(currentPurchase).toBe(data);
  });
});
