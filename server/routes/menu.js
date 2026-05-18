const express = require('express');
const router = express.Router();
const { MenuItem } = require('../schema');

router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

module.exports = router;
