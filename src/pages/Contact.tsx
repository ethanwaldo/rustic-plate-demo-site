import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

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
        <h2 className="display-4 brand-font text-primary mb-3">Get in Touch</h2>
        <p className="lead text-muted max-w-75 mx-auto">
          We'd love to hear from you or help you book a table.
        </p>
      </div>

      <div className="row g-5">
        <motion.div 
          className="col-lg-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-5 rounded-4 shadow-sm border border-light">
            <h3 className="brand-font mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input type="text" className="form-control form-control-lg bg-light border-0" id="name" placeholder="John Doe" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input type="email" className="form-control form-control-lg bg-light border-0" id="email" placeholder="john@example.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea className="form-control form-control-lg bg-light border-0" id="message" rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold">Send Message</button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          className="col-lg-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-100 rounded-4 overflow-hidden shadow-sm border border-light" style={{ minHeight: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175407399423!2d-73.98782008459415!3d40.74844047932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683832000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
