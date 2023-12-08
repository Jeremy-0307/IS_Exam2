const express = require('express');
const router = express.Router();

// Routes
//-----Coffe-----//
const CoffeRoutes = require('./coffeRoutes/coffeRoutes');
router.use('/coffe', CoffeRoutes);

//-----Purse-----//
const PurseRoutes = require('./purseRoutes/purseRoutes');
router.use('/Purse', PurseRoutes);

module.exports = router;