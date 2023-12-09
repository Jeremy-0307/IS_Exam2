const express = require('express');
const router = express.Router();
const WalletModel = require('../../models/walletModel/walletModel');
const CoffeServices = require('../coffeServices/coffeServices');
const CoffeModel = require('../../models/coffeModel/coffeModel');

async function getAll(req) {
  try {
    const wallet = await WalletModel.getAll();
    return wallet;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

async function calcChange(change) {
  const availableCoins = await WalletModel.getAll();
  let changeArray = [];
  for (let i = 0; i < availableCoins.length; ++i && change < 0) {
    let current = availableCoins[i];
    let coinChange = { coin: current.coin, quantity: 0 };
    for (let j = 0; j < current.available; ++j && change < 0) {
      if (change - current.coin < 0) {
        break;
      }
      change -= current.coin;
      coinChange.quantity++;
    }
    if (coinChange.quantity > 0) {
      changeArray.push(coinChange);
    }
  }
  return { change, changeArray };
}

async function checkPurchase(bill, change) {
  try {
    const isCoffeeAvailable = await CoffeServices.checkEnoughCoffee(bill);
    
    if (isCoffeeAvailable === true) {
      const moneyAvailable = await getAll();
      const isValidMoney = await calcChange(change, moneyAvailable);

      if (isValidMoney.change === 0) {
        await CoffeModel.update(bill);
        await WalletModel.update(isValidMoney.changeArray);
        return isValidMoney.changeArray;
      }
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}


module.exports = {
  checkPurchase,
  calcChange
};