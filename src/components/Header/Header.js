import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";

const Header = () => {

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Logo />
      </div>
      <nav>
        <ul className='header__navigation'>
          <li>
            <p>Предмет</p>
          </li>
          <li>
            <p>О проекте</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
