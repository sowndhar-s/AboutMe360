import React, { useState } from "react";
import profilePic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\MyPhoto.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [showInterests, setShowInterests] = useState(true);

  return (
    <section id="about" className="about-section py-5" style={{ backgroundColor: '#f0f8ff', fontFamily: 'Arial, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div className="animated-background"></div>
      <div className="container mt-5 pt-5">
        <motion.h2 
          className="section-title text-center mb-4" 
          style={{ color: '#ff6347', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px #ffa07a' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👋 A Bit About Me!
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="img-fluid rounded-circle profile-pic mb-3 shadow"
              style={{ 
                width: '250px', 
                height: '250px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                borderRadius: '50%',
                transition: 'transform 0.3s',
              }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            />
            <motion.p 
              className="fw-bold" 
              style={{ color: '#4682b4', fontSize: '1.2rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Passionate Coder & Problem Solver!
            </motion.p>
          </div>
          <div className="col-md-8">
            <motion.p 
              className="lead" 
              style={{ color: '#333', lineHeight: '1.6', fontSize: '1.1rem' }}
              animate={{ opacity: hovered ? 0.5 : 1 }}
            >
              I’m a Software Engineer, passionate about code, solving puzzles, and creating software that makes life a little easier!
            </motion.p>
            <motion.h3 
              style={{ color: '#ff6347', fontSize: '1.8rem', marginTop: '1.5rem', cursor: 'pointer' }} 
              onClick={() => setShowInterests(!showInterests)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              🎭 My Interests {showInterests ? '▲' : '▼'}
            </motion.h3>
            {showInterests && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p 
                  style={{ color: '#333', fontSize: '1rem' }}
                  whileHover={{ scale: 1.05 }}
                >
                  When I’m not coding, you can find me binge-watching movies or playing chess like it’s the World Championship!
                </motion.p>
                <motion.p 
                  style={{ color: '#333', fontSize: '1rem' }}
                  whileHover={{ scale: 1.05 }}
                >
                  As a die-hard Vijay fan, I often find myself in playful debates about his legendary status. 😄
                </motion.p>
                <motion.p 
                  style={{ color: '#333', fontSize: '1rem' }}
                  whileHover={{ scale: 1.05 }}
                >
                  I've been a cartoon lover since childhood, enjoying whimsical adventures that make me laugh!
                </motion.p>
                <motion.p 
                  style={{ color: '#333', fontSize: '1rem' }}
                  whileHover={{ scale: 1.05 }}
                >
                  I’ve got a travel bucket list that’s longer than a Vijay movie, filled with destinations waiting to be explored!
                </motion.p>
              </motion.div>
            )}
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
          background: linear-gradient(120deg, #f0f8ff, #ffa07a, #ff6347);
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

export default About;