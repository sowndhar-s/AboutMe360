import React from 'react';
import CompanyPic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\bosch.jpg';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Works = () => {
  return (
    <section id="works" className="work-section py-5" style={{ backgroundColor: '#e6f9ff', fontFamily: 'Arial, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div className="animated-background"></div>
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-4" 
          style={{ color: '#007acc', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px #99ccff' }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          💼 My Work Adventures
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4">
            <motion.img
              src={CompanyPic}
              alt="Work Experience"
              className="img-fluid rounded-circle work-pic shadow"
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
              style={{ color: '#005f99', fontSize: '1.2rem' }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Sipping, coding, and dreaming big since Year! ☕💻
            </motion.p>
          </div>
          <div className="col-md-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h3 
                style={{ color: '#007acc' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Current Role: Software Engineer
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                I’m currently a Software Engineer at my first company, where I've been working for the past year. It’s been an incredible journey filled with learning, coding, and the occasional panic over a bug that just won't go away! 🐛
              </motion.p>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Every day is an adventure as I tackle new challenges, collaborate with awesome teammates, and, of course, master the fine art of debugging and Googling! 🤓
              </motion.p>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                I code and work hard for five days, eagerly awaiting the weekend to recharge. It’s funny how quickly a year has flown by amidst all the hustle and bustle!
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
          background: linear-gradient(120deg, #e6f9ff, #99ccff, #007acc);
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

export default Works;