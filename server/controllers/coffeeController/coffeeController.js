const CoffeeServices = require('../../services/coffeeServices/coffeeServices');

async function getAll(req, res) {
  try {
    const coffees = await CoffeeServices.getAll();
    res.status(200).json(coffees);
  } catch (error) {
    res.status(500).json('Error: Coffee Maker not available');
  }
};

async function getAllAvailable(req, res) {
  try {
    const coffeesAvaible = await CoffeeServices.getAllAvailable();
    res.status(200).json(coffeesAvaible);
  } catch (error) {
    res.status(500).json('Error: Coffee Maker not available');
  }
}

async function update(req, res) {
  try {
    const coffeesAvaible = await CoffeeServices.update(req.body);
    res.status(200).json('success');
  } catch (error) {
    res.status(500).json('Error: Coffee Maker not available');
  }
};

module.exports = {
  getAll,
  update,
  getAllAvailable
};