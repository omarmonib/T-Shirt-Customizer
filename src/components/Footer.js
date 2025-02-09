import React from 'react';
import './Footer.css';

const Footer = (className) => {
  return (
    <footer className={`footer ${className || ""}`}>
      <p>© 2025 All Rights Reserved By K & O</p>
    </footer>
  );
};

export default Footer;
