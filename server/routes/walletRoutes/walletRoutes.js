const express = require('express');
const router = express.Router();
const WalletController = require('../../controllers/walletController/walletController');

router.put('/', WalletController.purchase);

module.exports = router;
