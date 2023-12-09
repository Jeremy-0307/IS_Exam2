const fs = require('fs');
const path = require('path');

async function getAll(req) {
  const databasePath = path.resolve(__dirname, '../../../database.json');
  const rawData = fs.readFileSync(databasePath, 'utf-8');
  const database = JSON.parse(rawData);
  try {
      return database.coffe;
  } catch (error) {
      console.error('Error: coffe', error);
      throw error;
  }
};

async function update(bill) {
  const databasePath = path.resolve(__dirname, '../../../database.json');
  const rawData = fs.readFileSync(databasePath, 'utf-8');
  const database = JSON.parse(rawData);
  
  try {
    bill.forEach((curr) => {
      const coffeToUpdate = database.coffe.find((item) => item.name === curr.name);
      if (coffeToUpdate) {
        console.log(coffeToUpdate.name, coffeToUpdate.available, curr.quantity);
        coffeToUpdate.available -= curr.quantity;
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