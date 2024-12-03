const Items = require('../models/itemModels');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Items.find();
        res.render('index', { items });
    } catch (error) {
        res.json({ error: error});
    }
};

exports.createItem = async (req, res) => {
    try {
        console.log(req.body);
        const { name, category, quantity, price, description } = req.body;
        const item = new Items({ name, category, quantity, price, description });
        await item.save();
        res.redirect('/items');
    } catch (err) {
        console.log("error to");
        res.status(400).json({ error: err.message });
    }
};