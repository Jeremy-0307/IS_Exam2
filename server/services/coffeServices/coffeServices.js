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

async function update(bill) {
  try {
    console.log(bill);
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
  getAllAvailable
};