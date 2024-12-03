const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to get all items
router.get('/', itemController.getAllItems);

// Route to create an item
router.post('/create', itemController.createItem);

// Route to update an item
router.post('/:id', itemController.updateItem);

// Route to delete an item
router.get('/:id', itemController.deleteItem);

module.exports = router;