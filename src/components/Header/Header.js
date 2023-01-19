import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";

const Header = () => {

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Logo />
      </div>
      <div className='header__line'></div>
      <nav>
        <ul className='header__navigation'>
          <li className='header__link-container'>
            <a className='header__link' href='/'>Главная</a>
          </li>
          <li className='header__link-container'>
            <a className='header__link' href='/about-project'>О проекте</a>
          </li>
        </ul>
      </nav>
      <div className='header__search'>
        <p>Поиск по сайту</p>
      </div>
    </header>
  );
}

export default Header;
