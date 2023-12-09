const WalletServices = require('../../services/walletServices/walletServices');

async function purchase(req, res) {
  console.log('controller wallet');
  try {
    const {bill, change} = req.body;
    const response = await WalletServices.checkPurchase(bill, change);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json('error');
  }
};

module.exports = {
  purchase
};
