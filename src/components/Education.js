import React from 'react';
import CollegePic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\Kct-college.jpg'; // Add your college picture in the appropriate folder

function Education() {
  return (
    <section id="education" className="education-section py-5" style={{ backgroundColor: '#ffe6e6' }}>
      <div className="container mt-5 pt-5">
        <h2 className="section-title text-center mb-4" style={{ color: '#ff4d4d' }}>📚 My Education Journey</h2>
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3 style={{ color: '#cc0000' }}>Bachelor of Engineering (B.E.)</h3>
            <p style={{ color: '#333' }}>
              I spent my college days at <strong>Kumaraguru College of Technology</strong>, where I enjoyed a unique blend of online learning and on-campus fun. The unforgettable memories I made during my time there, especially with friends, made it a truly special experience, even if the pandemic had us spending a couple of years at home! 🎓
            </p>
            <h3 style={{ color: '#cc0000' }}>High School Adventures</h3>
            <p style={{ color: '#333' }}>
              My journey began at <strong>Kongu Matric. Hr. Sec School</strong> in Erode, where I honed my skills in dodging homework while still achieving top marks. Those were some wild times filled with sports, friends, and, of course, more homework!
            </p>
            <p style={{ color: '#333' }}>
              Then, I moved on to <strong>Adharsh Vidhalaya Hr. Sec School</strong> in Anthiyur, Erode. I completed my time there in <em>2019</em>, finally earning my freedom! 😄
            </p>
          </div>
          <div className="col-md-4 text-center mb-4">
            <img
              src={CollegePic}
              alt="College"
              className="img-fluid rounded-circle profile-pic shadow"
              style={{ border: '3px solid #ff4d4d' }} // Border color to match section title
            />
            <p className="fw-bold mt-2" style={{ color: '#cc0000' }}>Where I learned to code and enjoy the thrill of learning! 😄</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
