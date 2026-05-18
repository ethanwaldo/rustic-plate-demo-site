const mongoose = require('mongoose');
const { MenuItem } = require('./schema');

const MONGO_URI = 'mongodb://localhost:27017/rustic_plate';

const menuItems = [
  {
    name: "Tofu Power Bowl",
    price: 14,
    description: "Crispy seasoned tofu cubes paired with fresh edamame, sweet corn, cherry tomatoes, cucumber, red cabbage, and boiled quail eggs.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Double Classic Cheeseburger",
    price: 18,
    description: "Two juicy beef patties stacked high with melted cheese, crisp lettuce, tomato, red onion, pickles, and our signature burger sauce on a toasted brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Beef & Spinach Fettuccine",
    price: 36,
    description: "Tender chunks of seasoned beef seared and tossed with fettuccine pasta, wilted spinach, and diced tomatoes.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Shrimp & Tomato Spaghetti",
    price: 24,
    description: "Plump, juicy shrimp pan-seared with cherry tomatoes and fresh herbs, served over a bed of al dente spaghetti.",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Mediterranean Chicken Skillet",
    price: 28,
    description: "Golden-brown diced chicken breast sautéed with sweet bell peppers and tomatoes, garnished with fresh basil leaves.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Raspberry Vanilla Layer Cake",
    price: 10,
    description: "A light and fluffy vanilla sponge cake layered with rich cream and studded with fresh, tart raspberries.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
  }
];

async function populateMenu() {
  await mongoose.connect(MONGO_URI);
  await MenuItem.deleteMany();
  await MenuItem.insertMany(menuItems);
  console.log('Populated 6 menu items into rustic_plate');
  await mongoose.disconnect();
}

populateMenu().catch(err => {
  console.error(err);
  process.exit(1);
});
