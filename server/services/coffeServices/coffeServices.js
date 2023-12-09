const express = require('express');
const router = express.Router();
const CoffeModel = require('../../models/coffeModel/coffeModel');

async function getAll(req) {
  try {
    const coffes = await CoffeModel.getAll();
    return coffes;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

async function getAllAvailable(req) {
  try {
    const coffes = await CoffeModel.getAll();
    const availableCoffees = coffes.filter((c) => c.available > 0);

    return availableCoffees;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

async function checkEnoughCoffee(bill) {
  const availableCoffees = await CoffeModel.getAll();
  let validBill = true;
  const notFound = undefined;
  if(bill !== undefined){
    for (const item of bill) {
      const coffee = availableCoffees.find((c) => c.name === item.name);
      if (coffee === notFound) {
        validBill = false;
        break;
      }
      if (coffee.available - item.quantity < 0 || item.quantity < 0) {
        validBill = false;
        break;
      }
    }
  } else{ validBill = false; }
  return validBill;
};

async function update(bill) {
  try {
    const coffes = await CoffeModel.update(bill);
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
  checkEnoughCoffee
};