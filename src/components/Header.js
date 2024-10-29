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
    </header>
  );
}

export default Header;
