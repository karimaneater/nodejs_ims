const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to get all users
router.get('/', itemController.getAllItems);

// Route to create a user
router.post('/create', itemController.createItem);

module.exports = router;