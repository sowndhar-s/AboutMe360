import React from 'react';
import CompanyPic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\bosch.jpg'

const Works = () => {
  return (
    <section id="works" className="work-section py-5" style={{ backgroundColor: '#e6f9ff' }}>
      <div className="container mt-5 pt-5">
        <h2 className="section-title text-center mb-4" style={{ color: '#007acc' }}>💼 My Work Adventures</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4">
            <img
              src={CompanyPic}
              alt="Work Experience"
              className="img-fluid rounded-circle work-pic shadow"
              style={{ border: '3px solid #007acc' }} // Border color to match section title
            />
            <p className="fw-bold mt-2" style={{ color: '#005f99' }}>Sipping, coding, and dreaming big since Year! ☕💻</p>
          </div>
          <div className="col-md-8">
            <h3 style={{ color: '#007acc' }}>Current Role: Software Engineer</h3>
            <p style={{ color: '#333' }}>
              I’m currently a Software Engineer at my first company, where I've been working for the past year. It’s been an incredible journey filled with learning, coding, and the occasional panic over a bug that just won't go away! 🐛
            </p>
            <p style={{ color: '#333' }}>
              Every day is an adventure as I tackle new challenges, collaborate with awesome teammates, and, of course, master the fine art of debugging and Googling! 🤓
            </p>
            <p style={{ color: '#333' }}>
              I code and work hard for five days, eagerly awaiting the weekend to recharge. It’s funny how quickly a year has flown by amidst all the hustle and bustle!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
