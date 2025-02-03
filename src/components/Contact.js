import React from 'react';
import ContactMePic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\ContactMe.jpg';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-5"
      style={{
        backgroundColor: '#f0f4f8', // Light, mild background color
        color: '#2c3e50', // Darker text color for contrast
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="animated-background"></div>
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-4" 
          style={{ color: '#2c3e50', fontSize: '2.5rem', fontWeight: 'bold' }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          📬 Let's Connect!
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 text-center">
            <motion.img
              src={ContactMePic}
              alt="Contact"
              className="img-fluid rounded-circle contact-pic shadow"
              style={{ 
                width: '250px', 
                height: '250px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                borderRadius: '50%',
                transition: 'transform 0.3s',
              }}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.p 
              className="fw-bold mt-2" 
              style={{ color: '#2c3e50', fontSize: '1.2rem' }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Let's connect and share our stories!
            </motion.p>
          </div>
          <div className="col-md-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h3 
                style={{ color: '#2c3e50' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Email
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Drop me an email at <a href="mailto:sowndharofficial99@gmail.com">example@example.com</a> for any inquiries or just to say hello.
              </motion.p>
              <motion.h3 
                style={{ color: '#2c3e50' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Social Media
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Follow me on <a href="https://linkedin.com/in/sowndhar-s-646412225">LinkedIn</a> for professional updates or connect with me on <a href="https://x.com/Sowndhar__S">X (formerly Twitter)</a> for my latest thoughts and musings.
              </motion.p>
              <motion.h3 
                style={{ color: '#2c3e50' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Stay in Touch
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                I'm always looking to expand my network and meet new people. Let's stay connected and share our journeys!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, #f0f4f8, #d9e2ec, #bcccdc);
          background-size: 200% 200%;
          animation: gradientAnimation 10s ease infinite;
          z-index: -1;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

export default Contact;