const express = require('express');
const router = express.Router();
const CoffeeController = require('../../controllers/coffeeController/coffeeController');

router.get('/', CoffeeController.getAllAvailable);

module.exports = router;
