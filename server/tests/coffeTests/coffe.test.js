const coffeServices = require('../../services/coffeServices/coffeServices');

test("Check for unimaginable amount of coffe", async () => {
  // Arrange
  const bill = [{ name: 'coffeeTest', quantity: 200 }];
  // Act 
  const coffeAssumption = await coffeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeAssumption).toEqual(false);
});

test("Check for available coffee in bill", async () => {
  // Arrange
  const bill = [{ name: 'coffeeTest', quantity: 2 }];
  // Act 
  const coffeAssumption = await coffeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeAssumption).toEqual(true);
});

test("Check for missing coffee in inventory", async () => {
  // Arrange
  const bill = [{ name: 'Jeremy', quantity: 5 }];
  // Act 
  const coffeAssumption = await coffeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeAssumption).toEqual(false);
});

test("Check with an empty bill", async () => {
  // Arrange
  const bill = [];
  // Act 
  const coffeAssumption = await coffeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeAssumption).toEqual(true);
});

test("Check with undefined bill", async () => {
  // Arrange
  const bill = undefined;
  // Act 
  const coffeAssumption = await coffeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeAssumption).toEqual(false);
});

test("Check with negative quantity", async () => {
  // Arrange
  const bill = [{ coffee: 'Latte', quantity: -10 }];
  // Act 
  const coffeAssumption = await coffeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeAssumption).toEqual(false);
});
