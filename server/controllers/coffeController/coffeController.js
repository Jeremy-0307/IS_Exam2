const CoffeServices = require('../../services/coffeServices/coffeServices');

async function getAll(req, res) {
  try {
    const coffes = await CoffeServices.getAll();
    res.status(200).json(coffes);
  } catch (error) {
    res.status(500).json('Error: Coffe Maker not available');
  }
};

async function getAllAvailable(req, res) {
  try {
    const coffesAvaible = await CoffeServices.getAllAvailable();
    res.status(200).json(coffesAvaible);
  } catch (error) {
    res.status(500).json('Error: Coffe Maker not available');
  }
}

async function update(req, res) {
  try {
    const coffesAvaible = await CoffeServices.update(req.body);
    res.status(200).json('success');
  } catch (error) {
    res.status(500).json('Error: Coffe Maker not available');
  }
};

module.exports = {
  getAll,
  update,
  getAllAvailable
};