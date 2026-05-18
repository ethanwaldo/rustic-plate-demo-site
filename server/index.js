const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = 3001;
const MONGO_URI = 'mongodb://localhost:27017/rustic_plate';

app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB: rustic_plate');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
