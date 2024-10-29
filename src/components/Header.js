import React from 'react';

function Header() {
  return (
    <header className="header-section fixed-top" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
      <div className="container pt-2 pb-1 text-center">
        {/* Name/Introduction */}
        <h1 className="display-6" style={{ fontSize: '1.5rem', color: '#f9ed69', lineHeight: '1.2' }}>
          Hello, I’m <span style={{ color: '#ffcc29', fontWeight: 'bold' }}>Sowndhar!</span> 😄  
          <br />
          <span style={{ fontSize: '0.9rem', color: '#eaeaea', fontStyle: 'italic' }}>Welcome to my fun corner of the internet!</span>
        </h1>
      </div>

      {/* Bootstrap Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="container-fluid">
          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              {['About', 'Education', 'Works', 'Hobbies', 'Contact'].map((item) => (
                <li className="nav-item mx-3" key={item}>
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: '#f9ed69',
                      fontSize: '1rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
