import React from 'react';
import './HeaderNav.scss'
import {Link} from "react-router-dom";
import { ReactComponent as searchImg } from "../../images/search__img.svg"
import Search from "../Search/Search";

function HeaderNav({inputRef, onClick, windowSmallSize}) {
  return (

    <div className='header-nav'>
      <nav className='header-nav__navigation'>
        <ul className='header-nav__navigation_list'>
          <li className='header-nav__link-container'>
            <Link className='header-nav__link' to='/'>
              На главную
            </Link>
          </li>
          <li className='header-nav__link-container'>
            <Link className='header-nav__link' to='/about-project'>
              О проекте
            </Link>
          </li>
        </ul>
        <button className='header-nav__menu-button' type='button' onClick={onClick}></button>
      </nav>
      {!windowSmallSize ?
      <Search
        inputRef={inputRef}
      /> : <></>}
    </div>
  );
}

export default HeaderNav;
