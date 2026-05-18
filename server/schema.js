const mongoose = require('mongoose');

// MenuItem
const menuItemSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  price:       { type: Number, required: true },
  description: { type: String, required: true },
  image:       { type: String, required: true }
});

// Cart
const cartItemSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  price:    { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema]
});

// Order
const orderItemSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  price:    { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  items:     { type: [orderItemSchema], required: true },
  total:     { type: Number, required: true },
  status:    { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = {
  MenuItem: mongoose.model('MenuItem', menuItemSchema),
  Cart:     mongoose.model('Cart', cartSchema),
  Order:    mongoose.model('Order', orderSchema)
};
