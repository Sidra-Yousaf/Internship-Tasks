const mongoose = require('mongoose');

const groceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema);

module.exports = GroceryItem;
