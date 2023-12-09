const WalletService = require('../../services/walletServices/walletServices');

test("Calculate change for a specific wallet amount", async () => {
  // Arrange
  const wallet = 3000;
  // Act 
  const response = await WalletService.calcChange(wallet);
  // Assert
  expect(response.change).toEqual(0);
  expect(response.changeArray).toEqual([
    { coin: 500, quantity: 6 }
  ]);
});

// Mock WalletModel methods
jest.mock('../../models/walletModel/walletModel', () => ({
  getAll: jest.fn().mockReturnValue([
    { coin: 500, available: 20 },
    { coin: 100, available: 30 },
    { coin: 50, available: 50 },
    { coin: 25, available: 25 }
  ])
}));

test("Calculate change for a smaller wallet amount with available coins", async () => {
  // Arrange
  const wallet = 875;

  // Act 
  const response = await WalletService.calcChange(wallet);

  // Assert
  expect(response.change).toEqual(0); 
  expect(response.changeArray).toEqual([
    { coin: 500, quantity: 1 },
    { coin: 100, quantity: 3 },
    { coin: 50, quantity: 1 },
    { coin: 25, quantity: 1 }
  ]);
});

test("Calculate change for a smaller wallet amount with limited available coins", async () => {
  // Arrange
  const wallet = 10;
  // Act 
  const response = await WalletService.calcChange(wallet);
  // Assert
  expect(response.change).toEqual(10); 
  expect(response.changeArray).toEqual([]);
});

test("Calculate change for an empty wallet", async () => {
  // Arrange
  const wallet = 0; 
  // Act 
  const response = await WalletService.calcChange(wallet);
  // Assert
  expect(response.change).toEqual(0); 
  expect(response.changeArray).toEqual([]); 
});
