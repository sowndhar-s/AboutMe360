import React from 'react';

function Header() {
  return (
    <header className="header-section fixed-top" style={{ backgroundColor: '#1a1a2e', color: '#ffffff', padding: '5px 0' }}>
      <div className="container">
        {/* Name/Introduction */}
        <div className="text-center mb-1">
          <h1 className="display-6 text-center" style={{ fontSize: '1.5rem', color: '#f9ed69', lineHeight: '1.2' }}>
            Hello, I’m <span style={{ color: '#ffcc29', fontWeight: 'bold' }}>Sowndhar!</span> 😄 
            <br />
            <span style={{ fontSize: '0.9rem', color: '#eaeaea', fontStyle: 'italic' }}>Welcome to my fun corner of the internet!</span>
          </h1>
        </div>

        {/* Bootstrap Navigation Bar */}
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#1a1a2e' }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ color: '#ffffff' }}></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {['About', 'Education', 'Works', 'Hobbies', 'Contact'].map((item) => (
                  <li className="nav-item mx-2" key={item}>
                    <a className="nav-link" href={`#${item.toLowerCase()}`} style={{ color: '#f9ed69', fontSize: '0.85rem' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
