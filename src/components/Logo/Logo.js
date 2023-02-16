import React from 'react'
import {Link} from "react-router-dom"
import './Logo.scss'
import { ReactComponent as LogoImg } from "../../images/header__logo.svg"
import { ReactComponent as LogoImgSmall } from "../../images/header__logo-small.svg"

function Logo() {

  return (
      <Link className='logo' to='/'>
        <LogoImgSmall
          className='logo__img logo__img_small-sized'
        />
        <LogoImg
          className='logo__img logo__img_big-sized'
        />
      </Link>
  );
}

export default Logo;

