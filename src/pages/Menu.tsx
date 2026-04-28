import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

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

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

interface MenuProps {
  addToCart: (item: MenuItem) => void;
}

function Menu({ addToCart }: MenuProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="container py-5 page-container"
    >
      <div className="text-center mb-5 pb-3">
        <h2 className="display-4 brand-font text-primary mb-3">Our Menu</h2>
        <p className="lead text-muted max-w-75 mx-auto">
          Fresh, locally sourced ingredients prepared with passion and served with love.
        </p>
      </div>

      <div className="row g-4">
        {menuItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="menu-card d-flex flex-column">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.name} className="w-100 menu-img" />
              </div>
              <div className="p-4 d-flex flex-column flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 border-light">
                  <h4 className="brand-font mb-0 fw-bold">{item.name}</h4>
                  <span className="menu-price">${item.price}</span>
                </div>
                <p className="text-muted mb-4 flex-grow-1">{item.description}</p>
                <button 
                  className="btn btn-outline-primary w-100 mt-auto rounded-pill fw-bold py-2"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu;
