import React from 'react';
import './HeaderNav.scss'
import {Link} from "react-router-dom";
import { ReactComponent as searchImg } from "../../images/search__img.svg"

function HeaderNav({inputRef}) {
  return (
    <div className='header__container'>
      <nav className='header__navigation'>
        <ul className='header__navigation_list'>
          <li className='header__link-container'>
            <Link className='header__link' to='/'>
              На главную
            </Link>
          </li>
          <li className='header__link-container'>
            <Link className='header__link' to='/about-project'>
              О проекте
            </Link>
          </li>
        </ul>
      </nav>
      <form className='search-form'>
        <button className='search-form__button' type='submit'></button>
        <input
          className='search-form__name'
          placeholder='Поиск по сайту'
          type='text'
          id='search-form'
          name='search-form'
          required
          ref={inputRef}
        ></input>
      </form>
    </div>
  );
}

export default HeaderNav;
