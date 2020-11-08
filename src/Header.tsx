import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <a
      className="link"
      href="https://www.payapps.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} className="logo" alt="logo" />
    </a>
  );
}

export { Header };
