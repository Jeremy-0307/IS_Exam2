const fs = require('fs');
const path = require('path');

async function getAll(req) {
  const databasePath = path.resolve(__dirname, '../../../database.json');
  const rawData = fs.readFileSync(databasePath, 'utf-8');
  const database = JSON.parse(rawData);

  try {
      return database.wallet;
  } catch (error) {
      console.error('Error: wallet', error);
      throw error;
  }
};

async function update(wallet) {
  const databasePath = path.resolve(__dirname, '../../../database.json');
  const rawData = fs.readFileSync(databasePath, 'utf-8');
  const database = JSON.parse(rawData);
  try {
    wallet.forEach((curr) => {
      const coinToUpdate = database.wallet.find((item) => item.coin === curr.coin);
      if (coinToUpdate) {
        console.log(coinToUpdate.available, curr.quantity);
        coinToUpdate.available -= curr.quantity;
      } else {
        console.error(`${curr.coin} not found`);
      }
    });
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return true;
  } catch (error) {
    console.error('Error: wallet', error);
    throw error;
  }
};


module.exports = {
  getAll,
  update
};