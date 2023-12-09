const express = require('express');
const router = express.Router();

// Routes
//-----Coffe-----//
const CoffeRoutes = require('./coffeRoutes/coffeRoutes');
router.use('/coffe', CoffeRoutes);

//-----wallet-----//
const WalletRoutes = require('./walletRoutes/walletRoutes');
router.use('/wallet', WalletRoutes);

module.exports = router;