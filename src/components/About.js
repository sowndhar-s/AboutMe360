import React from "react";

import profilePic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\MyPhoto.jpg'

function About() {
  return (
    <section id="about" className="about-section py-5" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="container mt-5 pt-5">
        <h2 className="section-title text-center mb-4" style={{ color: '#ff6347' }}>👋 A Bit About Me!</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={profilePic}
              alt="Profile"
              className="img-fluid rounded-circle profile-pic mb-3 shadow"
              style={{ border: '3px solid #ff6347',
                width: '300px', // Custom width for image
                height: '300px', // Custom height for image
               }} // Border color to match section title
            />
            <p className="fw-bold" style={{ color: '#4682b4' }}>Your friendly Software Engineer!</p>
          </div>
          <div className="col-md-8">
            <p className="lead" style={{ color: '#333' }}>
              I’m a Software Engineer, passionate about code, solving puzzles, and creating software that makes life a little easier!
            </p>
            <h3 style={{ color: '#ff6347' }}>🎭 My Interests</h3>
            <p style={{ color: '#333' }}>
              When I’m not coding, you can find me binge-watching movies or playing chess like it’s the World Championship!
            </p>
            <p style={{ color: '#333' }}>
              As a die-hard Vijay fan, I often find myself in playful debates about his legendary status. 😄
            </p>
            <p style={{ color: '#333' }}>
              I've been a cartoon lover since childhood, enjoying whimsical adventures that make me laugh!
            </p>
            <p style={{ color: '#333' }}>
              I’ve got a travel bucket list that’s longer than a Vijay movie, filled with destinations waiting to be explored!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
