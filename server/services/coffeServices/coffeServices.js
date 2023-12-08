const express = require('express');
const router = express.Router();
const CoffeModel = require('../../models/coffeModel/coffeModel');

async function getAll(cedula) {
  try {
    const coffes = await CoffeModel.getAll();
    return coffes;
  } catch (error) {
    console.error("Error", error);
    return error;
  }
}

module.exports = {
  getAll
};