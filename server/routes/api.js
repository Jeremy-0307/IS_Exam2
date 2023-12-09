const express = require('express');
const router = express.Router();

// Routes
//-----Coffee-----//
const CoffeeRoutes = require('./coffeeRoutes/coffeeRoutes');
router.use('/coffee', CoffeeRoutes);

//-----wallet-----//
const WalletRoutes = require('./walletRoutes/walletRoutes');
router.use('/wallet', WalletRoutes);

module.exports = router;