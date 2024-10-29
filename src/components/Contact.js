import React from 'react';
import ContactMePic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\ContactMe.jpg'

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-5"
      style={{
        backgroundColor: '#f0f4f8', // Light, mild background color
        color: '#2c3e50', // Darker text color for contrast
      }}
    >
      <div className="container mt-5 pt-5">
        <h2 className="section-title text-center mb-4">📬 Get in Touch!</h2>
        <div className="row align-items-center">
          <div className="col-md-4 mb-4">
            <img
              src={ContactMePic}
              alt="Contact"
              className="img-fluid rounded-circle contact-pic shadow"
              // style={{
              //   width: '150px', // Custom width for image
              //   height: '150px', // Custom height for image
              // }}
            />
          </div>
          <div className="col-md-8">
            <p>
              Have a burning question or just want to share a funny meme? Don’t be shy! I love connecting with fellow enthusiasts, whether it’s to geek out over the latest tech or swap stories about our favorite movies. Let's chat! 😄
            </p>
            <ul>
              <li>Email: <a href="mailto:sowndharofficial99@gmail.com">sowndharofficial99@gmail.com</a> 📧</li>
              <li>Instagram: <a href="https://instagram.com/sowndhar__s" target="_blank" rel="noopener noreferrer">@sowndhar__s</a> 📸</li>
              <li>X (formerly Twitter): <a href="https://x.com/Sowndhar__S" target="_blank" rel="noopener noreferrer">@Sowndhar__S</a> 🐦</li>
              <li>LinkedIn: <a href="https://linkedin.com/in/sowndhar-s-646412225" target="_blank" rel="noopener noreferrer">sowndhar-s</a> 💼</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
