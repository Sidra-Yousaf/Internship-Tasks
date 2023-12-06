const express = require('express');
const router = express.Router();
const GroceryItem = require('../models/groceryItem');

// GET all grocery items
router.get('/', async (req, res) => {
  try {
    const groceryItems = await GroceryItem.find();
    res.json(groceryItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new grocery item
router.post('/', async (req, res) => {
  const { name, category, price, quantity } = req.body;

  try {
    const groceryItem = new GroceryItem({
      name,
      category,
      price,
      quantity,
    });

    const newGroceryItem = await groceryItem.save();
    res.status(201).json(newGroceryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET a specific grocery item
router.get('/:id', getGroceryItem, (req, res) => {
  res.json(res.groceryItem);
});

// PUT (update) a specific grocery item
router.put('/:id', getGroceryItem, async (req, res) => {
  const { name, category, price, quantity } = req.body;
  
  if (name != null) {
    res.groceryItem.name = name;
  }
  if (category != null) {
    res.groceryItem.category = category;
  }
  if (price != null) {
    res.groceryItem.price = price;
  }
  if (quantity != null) {
    res.groceryItem.quantity = quantity;
  }

  try {
    const updatedGroceryItem = await res.groceryItem.save();
    res.json(updatedGroceryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a specific grocery item
router.delete('/:id', getGroceryItem, async (req, res) => {
  try {
    await res.groceryItem.remove();
    res.json({ message: 'Grocery item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getGroceryItem(req, res, next) {
  let groceryItem;

  try {
    groceryItem = await GroceryItem.findById(req.params.id);

    if (groceryItem == null) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.groceryItem = groceryItem;
  next();
}

module.exports = router;
