import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { Navbar, Nav, Container, Badge, Button, Modal } from 'react-bootstrap';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: { name: string; price: number }) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter(i => i.name !== name);
      }
      return prev.map(i => i.name === name ? { ...i, quantity: i.quantity - 1 } : i);
    });
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation totalItems={totalItems} onShowCart={() => setShowCart(true)} />
        
        <main className="flex-grow-1" style={{ marginTop: '76px' }}>
          <AnimatedRoutes addToCart={addToCart} />
        </main>

        <Footer />

        <CartModal 
          show={showCart} 
          onHide={() => setShowCart(false)} 
          cart={cart} 
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          totalPrice={totalPrice}
        />
      </div>
    </Router>
  );
}

interface NavigationProps {
  totalItems: number;
  onShowCart: () => void;
}

function Navigation({ totalItems, onShowCart }: NavigationProps) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const getNavClass = (path: string) => {
    return location.pathname === path ? 'nav-link active fw-bold text-primary' : 'nav-link fw-semibold';
  };

  return (
    <Navbar expanded={expanded} expand="lg" bg="white" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold text-primary brand-font" onClick={() => setExpanded(false)}>
          The Rustic Plate
        </Navbar.Brand>
        <div className="d-flex align-items-center order-lg-last">
          <Button variant="link" className="position-relative text-dark p-2 mx-2" onClick={onShowCart}>
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                {totalItems}
              </Badge>
            )}
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} className="border-0">
            {expanded ? <X size={28} /> : <MenuIcon size={28} />}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={getNavClass('/')} onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className={getNavClass('/menu')} onClick={() => setExpanded(false)}>Menu</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className={getNavClass('/gallery')} onClick={() => setExpanded(false)}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/about" className={getNavClass('/about')} onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={getNavClass('/contact')} onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

interface AnimatedRoutesProps {
  addToCart: (item: { name: string; price: number }) => void;
}

function AnimatedRoutes({ addToCart }: AnimatedRoutesProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

interface CartModalProps {
  show: boolean;
  onHide: () => void;
  cart: CartItem[];
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

function CartModal({ show, onHide, cart, removeFromCart, clearCart, totalPrice }: CartModalProps) {
  return (
    <Modal show={show} onHide={onHide} placement="end" centered className="cart-modal">
      <Modal.Header closeButton className="border-bottom-0">
        <Modal.Title className="brand-font fs-3 text-primary">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p className="text-center text-muted my-5 fs-5">Your cart is empty.</p>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                <div>
                  <h6 className="mb-1 fw-bold">{item.name}</h6>
                  <div className="text-muted small">${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.name)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between border-top-0 bg-light rounded-bottom">
        <h5 className="mb-0 fw-bold">Total: ${totalPrice.toFixed(2)}</h5>
        <div>
          {cart.length > 0 && (
            <Button variant="outline-secondary" className="me-2" onClick={clearCart}>Clear</Button>
          )}
          <Button variant="primary" disabled={cart.length === 0}>Checkout</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="brand-font text-primary mb-3">The Rustic Plate</h3>
            <p className="text-light opacity-75">Farm-to-table excellence in every bite. Experience the finest ingredients prepared with passion.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Business Hours</h5>
            <ul className="list-unstyled text-light opacity-75">
              <li className="mb-2">Mon - Thu: 11:00 AM - 10:00 PM</li>
              <li className="mb-2">Fri - Sat: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light opacity-75 text-decoration-none hover-primary transition">Facebook</a>
              <a href="#" className="text-light opacity-75 text-decoration-none hover-primary transition">Instagram</a>
              <a href="#" className="text-light opacity-75 text-decoration-none hover-primary transition">Twitter</a>
            </div>
          </div>
        </div>
        <div className="text-center pt-3 border-top border-secondary">
          <p className="text-light opacity-50 small mb-0">&copy; 2026 The Rustic Plate. Practical Web Development Homework 1.</p>
        </div>
      </Container>
    </footer>
  );
}

export default App;
