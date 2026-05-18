import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

export interface MenuItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface MenuProps {
  addToCart: (item: MenuItem) => void;
}

function Menu({ addToCart }: MenuProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load menu');
        return res.json();
      })
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      <div className="row g-4">
        {menuItems.map((item, index) => (
          <motion.div
            key={item._id}
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
