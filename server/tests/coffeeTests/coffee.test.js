const coffeeServices = require('../../services/coffeeServices/coffeeServices');

test("Check for unimaginable amount of coffee", async () => {
  // Arrange
  const bill = [{ name: 'coffeeTest', quantity: 200 }];
  // Act 
  const coffeeAssumption = await coffeeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeeAssumption).toEqual(false);
});

test("Check for available coffee in bill", async () => {
  // Arrange
  const bill = [{ name: 'Americano', quantity: 1 }];
  // Act 
  const coffeeAssumption = await coffeeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeeAssumption).toEqual(true);
});

test("Check for missing coffee in inventory", async () => {
  // Arrange
  const bill = [{ name: 'Jeremy', quantity: 5 }];
  // Act 
  const coffeeAssumption = await coffeeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeeAssumption).toEqual(false);
});

test("Check with an empty bill", async () => {
  // Arrange
  const bill = [];
  // Act 
  const coffeeAssumption = await coffeeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeeAssumption).toEqual(true);
});

test("Check with undefined bill", async () => {
  // Arrange
  const bill = undefined;
  // Act 
  const coffeeAssumption = await coffeeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeeAssumption).toEqual(false);
});

test("Check with negative quantity", async () => {
  // Arrange
  const bill = [{ coffee: 'Latte', quantity: -10 }];
  // Act 
  const coffeeAssumption = await coffeeServices.checkEnoughCoffee(bill);
  // Assert
  expect(coffeeAssumption).toEqual(false);
});
