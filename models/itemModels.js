const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true, default: 0 },
  description: { type: String, default: "" },
  createdAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Items', itemSchema);