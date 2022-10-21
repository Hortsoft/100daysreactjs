import React from 'react'
import './header.css';
import logoUrl from '../../assets/100_Banner.svg';

 function Header() {
  return (
    <div className="Header">
    <img src={logoUrl} alt="100"/>
    100 Days</div>
  )
}

export default Header;