const express = require('express');
const router = express.Router();
const CoffeeModel = require('../../models/coffeeModel/coffeeModel');

async function getAll(req) {
  try {
    const coffees = await CoffeeModel.getAll();
    return coffees;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

async function getAllAvailable(req) {
  try {
    const coffees = await CoffeeModel.getAll();
    const availableCoffeees = coffees.filter((c) => c.available > 0);

    return availableCoffeees;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

async function checkEnoughCoffeee(bill) {
  const availableCoffeees = await CoffeeModel.getAll();
  let validBill = true;
  const notFound = undefined;
  if(bill !== undefined){
    for (const item of bill) {
      const coffeee = availableCoffeees.find((c) => c.name === item.name);
      if (coffeee === notFound) {
        validBill = false;
        break;
      }
      if (coffeee.available - item.quantity < 0 || item.quantity < 0) {
        validBill = false;
        break;
      }
    }
  } else{ validBill = false; }
  return validBill;
};

async function update(bill) {
  try {
    const coffees = await CoffeeModel.update(bill);
    return true;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

module.exports = {
  getAll,
  update,
  getAllAvailable,
  checkEnoughCoffeee
};