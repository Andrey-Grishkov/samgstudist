import React from 'react';
import './Logo.scss'
import LogoImg from "../../images/header__logo.svg"
import {Link} from "react-router-dom";

function Logo({setFullScreen}) {
  return (
    <Link className='logo' to='/'>
      <img
        className='logo__container'
        onClick={() => {setFullScreen((switchScreen) => !switchScreen)}}
        src={LogoImg}
        alt='Логотип'
      />
    </Link>
  );
}

export default Logo;

