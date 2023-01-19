import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";
import search from "../../images/search__img.svg";

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
      <form className='header__search-form'>
        <button className='search__search-button' type='submit'>
          <img className='search__search-img' src={search} alt='кнопка поиска'/>
        </button>
        <input
          className='search-form__name'
          placeholder='Поиск по сайту'
          type='text'
          id="search-form"
          name="search-form"
          required
        />
      </form>
    </header>
  );
}

export default Header;
