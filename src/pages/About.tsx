import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="container py-5 page-container"
    >
      <div className="row align-items-center py-5">
        <motion.div 
          className="col-lg-6 mb-5 mb-lg-0 pr-lg-5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="display-4 brand-font text-primary mb-4">Our Story</h2>
          <p className="lead text-muted mb-4">
            Founded in 2020, The Rustic Plate began with a simple idea: that food should be honest, delicious, and sourced responsibly. 
          </p>
          <p className="text-muted mb-4 fs-5">
            We partner with local farmers and artisans to ensure every ingredient that enters our kitchen meets our rigorous standards for quality and sustainability. Our chef, an award-winning culinary artist, crafts seasonal menus that celebrate the rich flavors of our region.
          </p>
          <p className="text-muted fs-5">
            Whether you are joining us for a casual lunch, a romantic dinner, or a celebration with friends, we promise an unforgettable dining experience in a warm, inviting atmosphere.
          </p>
        </motion.div>
        
        <motion.div 
          className="col-lg-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="about-image overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" 
              alt="Chef cooking" 
              className="w-100 img-fluid"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
