import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-container"
    >
      <section className="hero-section">
        <div className="container px-4 px-lg-5 text-center">
          <motion.h1 
            className="display-2 fw-bold text-white mb-4 text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}
          >
            The Rustic Plate
          </motion.h1>
          <motion.p 
            className="lead text-white-50 mb-5 fs-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Authentic farm-to-table dining experience right in the heart of the city.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link to="/menu" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold fs-5 shadow-lg">
              View Our Menu
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="brand-font display-5 mb-4 text-primary">A Taste of Perfection</h2>
              <p className="lead text-muted">
                At The Rustic Plate, we believe in the power of fresh ingredients. 
                Our chefs work closely with local farmers to bring you the best 
                seasonal produce, carefully crafted into dishes that tell a story.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
