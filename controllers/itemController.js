const Items = require('../models/itemModels');
const moment = require('moment');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Items.find();
       
        res.render('index', { items, moment });
    } catch (err) {
        console.log("error getting all items");
        res.status(400).json({ error: err.message});
    }
};

exports.createItem = async (req, res) => {
    try {
        console.log(req.body);
        const { name, category, quantity, price, description } = req.body;
        const item = new Items({ name, category, quantity, price, description });
        await item.save();
        res.redirect('/items?success=Item created successfully!');
           
    } catch (err) {
        console.log("error to");
        res.status(400).json({ error: err.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        console.log(req.params.id);
        const id = req.params.id;
        const { name, category, quantity, price, description } = req.body;
        const updateItem = await Items.findByIdAndUpdate(
            id,
            { name, category, quantity, price, description },
            { new: true, runValidators: true }
        );

        if (!updateItem) {
            return res.status(404).json({ message: 'Item not found', type: 'danger' });
        } 

        res.redirect('/items?success=Item updated successfully!');
        
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteItem = async (req, res) => {
    
    try {
        console.log(req.params.id);
        const id = req.params.id;


        const deleteItem = await Items.findByIdAndDelete(id);

        if (!deleteItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.redirect('/items?success=Item deleted successfully!');
        
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

