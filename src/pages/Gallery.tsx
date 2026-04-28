import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const images = [
  "https://images.unsplash.com/photo-1414235077428-338988a2e8c0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505826759037-1a69735a4840?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80"
];

function Gallery() {
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
        <h2 className="display-4 brand-font text-primary mb-3">Our Atmosphere</h2>
        <p className="lead text-muted max-w-75 mx-auto">
          Take a look inside The Rustic Plate. A perfect blend of comfort and elegance.
        </p>
      </div>

      <div className="row g-4">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="gallery-img-container h-100">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-100 h-100 object-fit-cover gallery-img" style={{ minHeight: '300px' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Gallery;
