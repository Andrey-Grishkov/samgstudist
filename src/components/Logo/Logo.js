import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.scss'
import logo from '../../images/header__logo.svg'

function Logo() {
  return (
    <Link to="/">
      <img className='header__logo' src={logo} alt='логотип samgstudist'/>
    </Link>
  );
}

export default Logo;
