const CoffeServices = require('../../services/coffeServices/coffeServices');

async function getAll(req, res) {
  try {
    const coffesAvaible = await CoffeServices.getAll();
    res.status(200).json(coffesAvaible);
  } catch (error) {
    res.status(500).json('Error: coffe');
  }
}

module.exports = {
  getAll
};