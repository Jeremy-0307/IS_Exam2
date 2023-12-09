const fs = require('fs');
const path = require('path');

async function getAll(req) {
  const databasePath = path.resolve(__dirname, '../../../database.json');
  const rawData = fs.readFileSync(databasePath, 'utf-8');
  const database = JSON.parse(rawData);
  try {
      return database.coffee;
  } catch (error) {
      console.error('Error: coffee', error);
      throw error;
  }
};

async function update(bill) {
  const databasePath = path.resolve(__dirname, '../../../database.json');
  const rawData = fs.readFileSync(databasePath, 'utf-8');
  const database = JSON.parse(rawData);
  
  try {
    bill.forEach((curr) => {
      const coffeeToUpdate = database.coffee.find((item) => item.name === curr.name);
      if (coffeeToUpdate) {
        console.log(coffeeToUpdate.name, coffeeToUpdate.available, curr.quantity);
        coffeeToUpdate.available -= curr.quantity;
      } else {
        console.error(`${curr.coin} not found`);
      }
    });
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return true;
  } catch (error) {
    console.error('Error: bill', error);
    throw error;
  }
};

module.exports = {
  getAll,
  update
};