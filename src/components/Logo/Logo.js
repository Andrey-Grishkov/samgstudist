import React, {useState} from 'react';
import './Logo.scss'
import { ReactComponent as LogoImg } from "../../images/header__logo.svg"
import { ReactComponent as LogoImgSmall } from "../../images/header__logo-small.svg"
import {Link} from "react-router-dom";

function Logo({setFullScreen, windowSmallSize}) {

  return (
    <Link className='logo' to='/'>
      {!windowSmallSize ?
        <LogoImg
          className='logo__img'
          onClick={() => {
            setFullScreen((switchScreen) => !switchScreen)
          }}
        /> :
        <LogoImgSmall
          className='logo__img'
          onClick={() => {
            setFullScreen((switchScreen) => !switchScreen)
          }}
        />
      }
    </Link>
  );
}

export default Logo;

