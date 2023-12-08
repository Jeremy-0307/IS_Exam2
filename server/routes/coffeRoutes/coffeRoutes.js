const express = require('express');
const router = express.Router();
const CoffeController = require('../../controllers/coffeController/coffeController');
// /home/jeremy/github/IS_Exam2/server/controllers/coffeController
// /home/jeremy/github/IS_Exam2/server/routes/coffeRoutes/coffeRoutes.js
router.get('/', CoffeController.getAll);

module.exports = router;
