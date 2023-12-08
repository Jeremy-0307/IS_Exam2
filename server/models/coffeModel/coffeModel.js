const fs = require('fs');
const path = require('path');

const databasePath = path.resolve(__dirname, '../../database/database.json');
const rawData = fs.readFileSync(databasePath, 'utf-8');
const database = JSON.parse(rawData);

//---C R U D---//

async function getAll(req) {
    try {
        console.log(database.coffe);
        return database.coffe;
    } catch (error) {
        console.error('Error: coffe', error);
        throw error;
    }
}

async function update(req) {
  console.log('req->',req.body);
  try {
    const coffeeToUpdate = database.coffees.find(coffee => coffee.name === req.body.name);
    if (coffeeToUpdate) {
      coffeeToUpdate.name = req.body.name;
      coffeeToUpdate.price = req.body.price;
      fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
      console.log('Error: coffe', error);
    } else {
      console.error('Error: coffe', error);
    }
  } catch (error) {
    console.error('Error: coffe', error);
    throw error;
  }
}

module.exports = {
  getAll,
  update
};