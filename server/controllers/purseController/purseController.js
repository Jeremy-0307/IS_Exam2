const PurseServices = require('../../services/purseServices/purseServices');

async function getAll(req, res) {
  try {
    const coffesAvaible = await PurseServices.getAll();
    res.status(200).json('comadreja');
  } catch (error) {
    res.status(500).json('comadreja');
  }
}
