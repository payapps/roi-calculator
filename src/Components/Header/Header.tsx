import React from 'react'
import { logo } from '../../svgIcons'

const Header = () => {
  return (
    <section className='roi-header'>
      <a
        className="link"
        href="https://www.payapps.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="logo">
          {logo}
        </div>
      </a>

    </section>
  );
}

export default Header
