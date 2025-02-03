import React from 'react';
import HobbiesPic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\cricket.jpg';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies-section py-5" style={{ backgroundColor: '#ffe6e6', fontFamily: 'Arial, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div className="animated-background"></div>
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-4" 
          style={{ color: '#ff4d4d', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px #ff9999' }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          🎉 My Fun Zone
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4">
            <motion.img
              src={HobbiesPic}
              alt="Hobbies"
              className="img-fluid rounded-circle hobbies-pic shadow"
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
              style={{ color: '#cc0000', fontSize: '1.2rem' }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Cricket Enthusiast 🏏
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
                My Passion Projects and Pastimes
              </motion.h3>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                When I'm not deep in code, you can find me enjoying some of my favorite hobbies. 🎥 I'm a huge movie buff and can spend hours binge-watching everything from thrillers to comedies.
              </motion.p>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                I also love playing chess! There's nothing quite like the thrill of a late-night match, where a sneaky checkmate can turn the tide in the blink of an eye—call it my kind of crazy! ♟️
              </motion.p>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                And, of course, cricket! 🏏 I grew up loving the game and still enjoy watching matches or playing with friends whenever I get the chance. Maybe one day I'll be the next cricketing legend! (Or, at least, that's what I like to tell myself.) 😅
              </motion.p>
              <motion.p 
                style={{ color: '#333' }}
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                Recently, I've developed an interest in long-term investing. I'm diving into the world of stocks and funds, eager to learn how to make my money work for me. It’s a new adventure that keeps my analytical mind engaged! 📈
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

export default Hobbies;