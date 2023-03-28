import React from 'react';
import Close from '../images/icon-close.svg';

function Nav() {
  return (
    <nav>
      <img src={Close} alt="Close menu" />
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
