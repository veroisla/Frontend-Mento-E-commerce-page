import React from 'react';
import HamburguerNav from './HamburguerNav';
import Basket from './Basket';
//img
import Logo from '../images/logo.svg';
import Avatar from '../images/image-avatar.png';

//
import '../styles/components/Header.scss';

function Header() {
  return (
    <header className="header">
      <HamburguerNav />
      <img src={Logo} alt="Logo Sneakers" className="header__logo" />
      <Basket />
      <img src={Avatar} alt="Avatar" className="header__avatar" />
    </header>
  );
}

export default Header;
