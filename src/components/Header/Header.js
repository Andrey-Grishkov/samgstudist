import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import search from '../../images/search__img.svg'
import { useLocation, Link } from 'react-router-dom'

const Header = ({ inputRef }) => {

  const location = useLocation();
  let about_team;
  location.pathname === '/about-team' ? about_team = true : about_team = false;

  return (
    <header className={`header ${about_team ? 'header__team' : ''}`}>
      <div className='header__logo-container'>
        <Logo />
      </div>
      <div className='header__line'></div>
      {
        about_team ?
          <h1 className='header__title'>О команде</h1>
          :
          <div className='header__container'>
            <nav className='header__navigation'>
              <ul className='header__navigation_list'>
                <li className='header__link-container'>
                  <Link className='header__link' to='/'>Главная</Link>
                </li>
                <li className='header__link-container'>
                  <Link className='header__link' to='/about-project'>О проекте</Link>
                </li>
              </ul>
            </nav>
            <form className='header__search-form'>
              <button className='search__search-button' type='submit'>
                <img className='search__search-img' src={search} alt='кнопка поиска' />
              </button>
              <input
                className='search-form__name'
                placeholder='Поиск по сайту'
                type='text'
                id="search-form"
                name="search-form"
                required
                ref={inputRef}
              />
            </form>
          </div>
      }
    </header>
  );
}

export default Header;


// import React from 'react';
// import './Header.scss'
// import Logo from "../Logo/Logo";
// import search from "../../images/search__img.svg";
//
// const Header = () => {
//
//   return (
//     <header className='header'>
//       <div className='header__logo-container'>
//         <Logo />
//       </div>
//       <div className='header__line'></div>
//       <nav>
//         <ul className='header__navigation'>
//           <li className='header__link-container'>
//             <a className='header__link' href='/'>Главная</a>
//           </li>
//           <li className='header__link-container'>
//             <a className='header__link' href='/about-project'>О проекте</a>
//           </li>
//         </ul>
//       </nav>
//       <form className='header__search-form'>
//         <button className='search__search-button' type='submit'>
//           <img className='search__search-img' src={search} alt='кнопка поиска'/>
//         </button>
//         <input
//           className='search-form__name'
//           placeholder='Поиск по сайту'
//           type='text'
//           id="search-form"
//           name="search-form"
//           required
//         />
//       </form>
//     </header>
//   );
// }
//
// export default Header;
