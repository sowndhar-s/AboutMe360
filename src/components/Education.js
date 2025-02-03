import React from 'react';
import CollegePic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\Kct-college.jpg';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

function Education() {
  return (
    <section id="education" className="education-section py-5" style={{ backgroundColor: '#ffe6e6', fontFamily: 'Arial, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div className="animated-background"></div>
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-4" 
          style={{ color: '#ff4d4d', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px #ff9999' }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          📚 My Education Journey
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <motion.img
              src={CollegePic}
              alt="College"
              className="img-fluid rounded mb-3 shadow"
              style={{ 
                width: '100%', 
                height: 'auto',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                borderRadius: '15px',
                transition: 'transform 0.3s',
              }}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.p 
              className="fw-bold" 
              style={{ color: '#cc0000', fontSize: '1.2rem' }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Kumaraguru College of Technology
            </motion.p>
          </div>
          <div className="col-md-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h3 
                style={{ color: '#cc0000' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Bachelor of Engineering (B.E.)
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                I spent my college days at <strong>Kumaraguru College of Technology</strong>, where I enjoyed a unique blend of online learning and on-campus fun. The unforgettable memories I made during my time there, especially with friends, made it a truly special experience, even if the pandemic had us spending a couple of years at home! 🎓
              </motion.p>
              <motion.h3 
                style={{ color: '#cc0000' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                High School Adventures
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                My journey began at <strong>Kongu Matric. Hr. Sec School</strong> in Erode, where I honed my skills in dodging homework while still achieving top marks. Those were some wild times filled with sports, friends, and, of course, more homework!
              </motion.p>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Then, I moved on to <strong>Adharsh Vidhalaya Hr. Sec School</strong> in Anthiyur, Erode. I completed my time there in <em>2019</em>, finally earning my freedom! 😄
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
          background: linear-gradient(120deg, #ffe6e6, #ff9999, #ff4d4d);
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

export default Education;