import { useState, useEffect } from 'react';
import myPhoto from './img/MyPhoto.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS styles component
const CustomStyles = () => (
  <style jsx global>{`
    :root {
      --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --secondary-gradient: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      --accent-gradient: linear-gradient(45deg, #4ecdc4, #45b7d1);
    }

    body {
      background: var(--primary-gradient);
      min-height: 100vh;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: white;
      overflow-x: hidden;
    }

    .hero-section {
      min-height: 100vh;
      background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
      position: relative;
    }

    .floating-orbs {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      filter: blur(1px);
      animation: float 6s ease-in-out infinite;
    }

    .orb:nth-child(1) { width: 100px; height: 100px; top: 20%; left: 10%; animation-delay: 0s; }
    .orb:nth-child(2) { width: 60px; height: 60px; top: 60%; left: 80%; animation-delay: 2s; }
    .orb:nth-child(3) { width: 80px; height: 80px; top: 80%; left: 20%; animation-delay: 4s; }
    .orb:nth-child(4) { width: 120px; height: 120px; top: 30%; left: 70%; animation-delay: 1s; }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    .gradient-text {
      background: linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4, #feca57);
      background-size: 300% 300%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 3s ease-in-out infinite;
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .glassmorphism {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
    }

    .glassmorphism:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .profile-photo {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      animation: photoGlow 3s ease-in-out infinite;
      background: linear-gradient(45deg, #4ecdc4, #45b7d1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
    }

    @keyframes photoGlow {
      0%, 100% { box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      50% { box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(78, 205, 196, 0.3); }
    }

    .skill-pill {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 25px;
      padding: 10px 20px;
      margin: 5px;
      display: inline-block;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .skill-pill:hover {
      background: rgba(78, 205, 196, 0.3);
      transform: scale(1.05);
      border-color: rgba(78, 205, 196, 0.5);
    }

    .skill-pill.clicked {
      background: linear-gradient(45deg, #4ecdc4, #45b7d1);
      color: white;
      transform: scale(1.1);
    }

    .social-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      margin: 0 10px;
    }

    .social-icon:hover {
      transform: translateY(-5px) rotate(360deg);
      background: rgba(78, 205, 196, 0.5);
      color: white;
      text-decoration: none;
    }

    .floating-action-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 1000;
    }

    .fab-main {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(45deg, #4ecdc4, #45b7d1);
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }

    .fab-main:hover {
      transform: scale(1.1);
      box-shadow: 0 15px 35px rgba(0,0,0,0.4);
    }

    .fab-menu {
      position: absolute;
      bottom: 70px;
      right: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fab-item {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .fab-item:hover {
      background: rgba(78, 205, 196, 0.5);
      transform: scale(1.1);
    }

    .fade-in-up {
      animation: fadeInUp 1s ease forwards;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .slide-in {
      animation: slideIn 0.6s ease forwards;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .company-badge {
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 30px;
      padding: 8px 16px;
      font-size: 0.9rem;
      display: inline-block;
      margin-top: 10px;
      backdrop-filter: blur(5px);
    }

    @media (max-width: 768px) {
      .profile-photo { width: 150px; height: 150px; }
      .gradient-text { font-size: 3rem !important; }
    }

    html { scroll-behavior: smooth; }
  `}</style>
);

// Experience Counter Component
const ExperienceCounter = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date('2023-07-03');
      const currentDate = new Date();

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      setExperience({ years, months });
    };

    calculateExperience();
    const interval = setInterval(calculateExperience, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatExperience = () => {
    if (experience.years === 0) {
      return `${experience.months} month${experience.months !== 1 ? 's' : ''}`;
    } else if (experience.months === 0) {
      return `${experience.years} year${experience.years !== 1 ? 's' : ''}`;
    } else {
      return `${experience.years} year${experience.years !== 1 ? 's' : ''} ${experience.months} month${experience.months !== 1 ? 's' : ''}`;
    }
  };

  return <span className="text-info fw-bold">{formatExperience()}</span>;
};

// Hero Section Component
const HeroSection = () => {
    const defaultPhoto = myPhoto;
  return (
    <section className="hero-section d-flex align-items-center justify-content-center position-relative">
      <div className="floating-orbs">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>

      <div className="container text-center position-relative" style={{zIndex: 10}}>
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              src={defaultPhoto} 
              alt="Profile" 
              className="profile-photo mb-4 fade-in-up mx-auto"
            />
            <h1 className="display-1 fw-bold gradient-text mb-3 fade-in-up">
              Sowndhar S
            </h1>
            <p className="lead mb-3 fade-in-up">
              Software Engineer • Problem Solver • Technology Enthusiast
            </p>
            <div className="company-badge fade-in-up">
              Currently Building @ Bosch Global Software Technologies
            </div>
            <p className="mb-4 fade-in-up mt-3">
              Professional Experience: <ExperienceCounter />
            </p>
            <a href="#about" className="btn btn-lg px-4 py-3 fade-in-up"
               style={{
                 background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
                 border: 'none',
                 borderRadius: '50px',
                 color: 'white',
                 textDecoration: 'none'
               }}>
              Explore My Journey ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const cards = [
    {
      icon: "🚀",
      title: "Who I Am",
      content: "I'm a dedicated software engineer with a passion for crafting elegant solutions to complex problems. My journey in tech is driven by curiosity and the constant pursuit of learning new technologies and methodologies."
    },
    {
      icon: "💡",
      title: "What I Do",
      content: "I specialize in full-stack development, focusing on creating scalable and efficient software solutions. I enjoy working with modern frameworks and staying updated with industry best practices and emerging technologies."
    },
    {
      icon: "🎯",
      title: "My Philosophy",
      content: "I believe in writing clean, maintainable code and building products that make a real difference. Every project is an opportunity to learn something new and push the boundaries of what's possible."
    }
  ];

  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="display-3 fw-bold text-center mb-5 gradient-text">About Me</h2>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-md-4">
              <div className="glassmorphism p-4 h-100 transition-all">
                <div className="display-6 mb-3">{card.icon}</div>
                <h3 className="h4 mb-3 text-info">{card.title}</h3>
                <p className="text-white-50">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Interests Section Component
const InterestsSection = () => {
  const interests = [
    {
      icon: "🏋️",
      title: "Fitness & Wellness",
      content:
        "Currently trying to transform from 'debug mode' to 'beast mode'. Gym sessions are my new therapy — except with more sweat and fewer semicolons.",
    },
    {
      icon: "🎬",
      title: "Cinema & Movies",
      content:
        "Movies are my escape hatch to other worlds. I can binge-watch everything from obscure indie films to explosive blockbusters — all in the name of 'research', of course.",
    },
    {
      icon: "🎮",
      title: "Mobile Gaming Madness",
      content:
        "I’m hooked on mobile games — fast, fun, and dangerously addictive. Whether I’m dominating in FireFire or rage-quitting after a close match, it’s all part of the thrill. Who needs a console when you’ve got thumbs of fury?",
    },
    {
      icon: "🌍",
      title: "Cultural Exploration",
      content:
        "Obsessed with learning how people eat, speak, and celebrate across the globe. Travel plans pending — but the passport is ready and the snacks are packed.",
    },
    {
      icon: "📈",
      title: "Investing",
      content:
        "From stocks to side-eyes at crypto, I'm always curious about where money grows (or disappears mysteriously overnight). Think of it as a game of Monopoly, but with real emotional damage.",
    },
  ];

  return (
    <section className="py-5 bg-dark bg-opacity-25">
      <div className="container">
        <h2 className="display-3 fw-bold text-center mb-5 gradient-text">Beyond Coding</h2>
        <div className="row g-4">
          {interests.map((interest, index) => (
            <div key={index} className="col-md-6">
              <div className="glassmorphism p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <span className="display-6 me-3">{interest.icon}</span>
                  <h3 className="h4 mb-0">{interest.title}</h3>
                </div>
                <p className="text-white-50">{interest.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const [clickedSkills, setClickedSkills] = useState(new Set());

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "Java", "Git",
    "Jenkins", "MongoDB", "SQL", "C", "Selenium", "Jest", "Agile",
    "Problem Solving", "System Design", "API Development",
    "Frontend Development", "Backend Development"
  ];

  const handleSkillClick = (skill) => {
    setClickedSkills(prev => new Set([...prev, skill]));
    setTimeout(() => {
      setClickedSkills(prev => {
        const newSet = new Set(prev);
        newSet.delete(skill);
        return newSet;
      });
    }, 2000);
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-3 fw-bold text-center mb-5 gradient-text">Technical Skills</h2>
        <div className="text-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              onClick={() => handleSkillClick(skill)}
              className={`skill-pill ${clickedSkills.has(skill) ? 'clicked' : ''}`}
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-center text-white-50 small mt-4">
          Click on any skill to see it highlighted • Always learning and expanding this list
        </p>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = () => {
  const educationData = [
    {
      icon: "🎓",
      institution: "Kumaraguru College of Technology",
      degree: "B.E - Computer Science and Engineering",
      period: "2019 - 2023",
      description: "Focused on software engineering fundamentals, data structures, algorithms, and modern development practices. Participated in coding competitions and collaborative projects that shaped my problem-solving approach.",
      type: "college"
    },
    {
      icon: "📚",
      institution: "Adharsh Vidhyalaya Matriculation Higher Secondary School", 
      degree: "Higher Secondary Education (11th & 12th Grade)",
      period: "2017 - 2019",
      description: "Specialized in Science stream with focus on Mathematics. This period sparked my initial interest in programming and logical thinking.",
      type: "school"
    },
    {
      icon: "🏫",
      institution: "Kongu Matriculation Higher Secondary School",
      degree: "Secondary Education (1st - 10th Grade)",
      period: "2007 - 2017", 
      description: "Built a strong foundation in core subjects and developed analytical thinking skills. Participated in various academic competitions and extracurricular activities.",
      type: "school"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-3 fw-bold text-center mb-5 gradient-text">Educational Journey</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="glassmorphism p-4 slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="row align-items-center">
                    <div className="col-md-1 text-center mb-3 mb-md-0">
                      <div className="display-5">{edu.icon}</div>
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="h4 text-info mb-1">{edu.institution}</h3>
                          <h4 className="h5 mb-2">{edu.degree}</h4>
                          <p className="text-white-50 mb-0">{edu.description}</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                          <span className="badge bg-secondary bg-opacity-50 px-3 py-2">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Live Stats Component
const LiveStats = () => {
  const [stats, setStats] = useState({
    linesOfCode: 0,
    projectsCompleted: 0,
    technologiesLearned: 0,
    problemsSolved: 0
  });

  useEffect(() => {
    const finalStats = {
      linesOfCode: 25000,
      projectsCompleted: 15,
      technologiesLearned: 20,
      problemsSolved: 500
    };

    const animateStats = () => {
      Object.keys(finalStats).forEach(key => {
        let current = 0;
        const increment = Math.ceil(finalStats[key] / 100);
        const timer = setInterval(() => {
          current += increment;
          if (current >= finalStats[key]) {
            current = finalStats[key];
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: current }));
        }, 50);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { label: 'Lines of Code', value: stats.linesOfCode, icon: '💻' },
    { label: 'Projects Completed', value: stats.projectsCompleted, icon: '🚀' },
    { label: 'Technologies Learned', value: stats.technologiesLearned, icon: '📚' },
    { label: 'Problems Solved', value: stats.problemsSolved, icon: '🧩' }
  ];

  return (
    <section id="stats-section" className="py-5 bg-dark bg-opacity-25">
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5 gradient-text">Journey So Far</h2>
        <div className="row g-4">
          {statsData.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="glassmorphism p-4 text-center h-100">
                <div className="display-6 mb-2">{stat.icon}</div>
                <div className="h2 fw-bold text-info mb-2">{stat.value.toLocaleString()}</div>
                <small className="text-white-50">{stat.label}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const socialLinks = [
    { icon: '📧', href: "mailto:sowndharmdk@gmail.com", label: "Email" },
    { icon: '💼', href: "https://linkedin.com/in/sowndhar-s", label: "LinkedIn" },
    { icon: '🐱', href: "https://github.com/sowndhar-s", label: "GitHub" },
    { icon: '🐦', href: "https://x.com/Sowndhar__S", label: "X" }
  ];

  return (
    <section className="py-5 bg-dark bg-opacity-25">
      <div className="container text-center">
        <h2 className="display-3 fw-bold mb-4 gradient-text">Let's Connect</h2>
        <p className="lead mb-5">
          Interested in collaborating on a project or just want to chat about technology? 
          I'm always open to new opportunities and meaningful conversations.
        </p>
        
        <div className="d-flex justify-content-center flex-wrap">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="mt-4">
          <p className="text-white-50">
            📍 Based in Coimbatore • Available for remote opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

// Floating Action Menu Component
const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sowndhar - Software Engineer',
        text: 'Check out my portfolio and professional journey',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Portfolio link copied to clipboard!');
    }
  };
  const actions = [
    { icon: '🔗', action: shareProfile, title: 'Share Profile' },
    { icon: '⬆️', action: scrollToTop, title: 'Back to Top' },
  ];

  return (
    <div className="floating-action-btn">
      {isOpen && (
        <div className="fab-menu">
          {actions.map((item, index) => (
            <button
              key={index}
              className="fab-item border-0"
              onClick={item.action}
              title={item.title}
            >
              {item.icon}
            </button>
          ))}
        </div>
      )}
      
      <button
        className="fab-main border-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '⚡'}
      </button>
    </div>
  );
};

// Copyright Footer Component
const CopyrightFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 bg-dark bg-opacity-50 border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">
              © {currentYear} Sowndhar. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-white-50">
              Designed & Developed with ❤️ by Sowndhar
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-center">
            <small className="text-white-50 opacity-75">
              This website and its content are protected by copyright law. 
              Unauthorized reproduction or distribution is prohibited.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const PersonalWebsite = () => {
  return (
    <>
      <CustomStyles />
      <div className="min-vh-100">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <InterestsSection />
        <SkillsSection />
        <LiveStats />
        <ContactSection />
        <CopyrightFooter />
        <FloatingActionMenu />
      </div>
    </>
  );
};

export default PersonalWebsite;