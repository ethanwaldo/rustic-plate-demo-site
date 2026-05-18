const express = require('express');
const router = express.Router();
const { Cart } = require('../schema');

async function getCart() {
  let cart = await Cart.findOne();
  if (!cart) cart = await Cart.create({ items: [] });
  return cart;
}

router.get('/', async (req, res) => {
  try {
    const cart = await getCart();
    res.json(cart.items);
  } catch {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

router.post('/add', async (req, res) => {
  try {
    const { name, price } = req.body;
    const cart = await getCart();
    const existing = cart.items.find(i => i.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.items.push({ name, price, quantity: 1 });
    }
    await cart.save();
    res.json(cart.items);
  } catch {
    res.status(500).json({ error: 'Failed to add item' });
  }
});

router.post('/remove', async (req, res) => {
  try {
    const { name } = req.body;
    const cart = await getCart();
    const existing = cart.items.find(i => i.name === name);
    if (existing) {
      if (existing.quantity === 1) {
        cart.items = cart.items.filter(i => i.name !== name);
      } else {
        existing.quantity -= 1;
      }
    }
    await cart.save();
    res.json(cart.items);
  } catch {
    res.status(500).json({ error: 'Failed to remove item' });
  }
});

router.delete('/', async (req, res) => {
  try {
    const cart = await getCart();
    cart.items = [];
    await cart.save();
    res.json([]);
  } catch {
    res.status(500).json({ error: 'Failed to clear cart' });
  }
});

module.exports = router;
