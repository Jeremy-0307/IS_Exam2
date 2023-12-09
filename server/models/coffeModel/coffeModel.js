const fs = require('fs');
const path = require('path');

const databasePath = path.resolve(__dirname, '../../../database.json');
const rawData = fs.readFileSync(databasePath, 'utf-8');
const database = JSON.parse(rawData);

//---C R U D---//

async function getAll(req) {
  try {
      return database.coffe;
  } catch (error) {
      console.error('Error: coffe', error);
      throw error;
  }
};

async function update(bill) {
  try {
    console.log(bill.jeremy);
    bill.jeremy.forEach((coffee) => {
      const coffeeToUpdate = database.coffe.find((item) => item.name === coffee.name);
      if (coffeeToUpdate) {
        coffeeToUpdate.quantity -= coffee.quantity;
      } else {
        console.error(`${coffee.name} not found`);
      }
    });
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return true;
  } catch (error) {
    console.error('Error: coffe', error);
    throw error;
  }
};

module.exports = {
  getAll,
  update
};