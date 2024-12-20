const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to get all items
router.get('/', itemController.getAllItems);

// Route to create an item
router.post('/create', itemController.createItem);

// Route to view specific item
router.get('/:id', itemController.viewItem);

// Route to update an item
router.put('/:id', itemController.updateItem);

// Route to delete an item
router.delete('/:id', itemController.deleteItem);

module.exports = router;