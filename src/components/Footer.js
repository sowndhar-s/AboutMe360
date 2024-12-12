import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="footer-section py-3"
      style={{
        backgroundColor: '#34495e', // Dark background color
        color: '#ecf0f1', // Light text color for contrast
        borderTop: '3px solid #e74c3c', // Top border for distinction
      }}
    >
      <div className="container text-center">
        <p>
          Thanks for stopping by! Feel free to connect with me or drop me a message anytime.
        </p>
        <div className="social-icons mb-3">
          <a href="https://linkedin.com/in/sowndhar-s-646412225" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#ecf0f1" /> {/* LinkedIn Icon */}
          </a>
          <a href="https://github.com/sowndhar-s" target="_blank" rel="noopener noreferrer" className="mx-3">
            <FaGithub size={30} color="#ecf0f1" /> {/* GitHub Icon */}
          </a>
          <a href="mailto:sowndharofficial99@gmail.com">
            <FaEnvelope size={30} color="#ecf0f1" /> {/* Email Icon */}
          </a>
        </div>
        <p className="mt-3">&copy; {new Date().getFullYear()} Sowndhar S. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

