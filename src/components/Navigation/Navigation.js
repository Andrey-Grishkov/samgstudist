import React from 'react';
import './Navigation.scss'
import close from "../../images/navigation__close.svg";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import {Link} from "react-router-dom";
import NavLogo from '../../images/gif-samgtudist.gif'

function Navigation({isOpen, onClick, inputRef, disciplins}) {
  return (
    <div className={isOpen ? `navigation navigation_is-opened` : `navigation`}>
      <div className='navigation__content'>
        <button className='navigation__close' type='button' onClick={onClick}>
          <img className='navigation__close-img' src={close} alt='закрыть'/>
        </button>
        <img src={NavLogo} className='navigation__logo' alt='Логотип'/>
        <ul className='navigation__links'>
          <li className="navigation__link-container">
            <Link className="navigation__link" to="/" onClick={onClick}>На главную</Link>
          </li>
          <li className="navigation__link-container">
            <Link className="navigation__link" to='/about-project' onClick={onClick}>О проекте</Link>
          </li>
        </ul>
        <Search
          inputRef={inputRef}
        />
        <Menu disciplins={disciplins} onClick={onClick}/>
      </div>
    </div>
  );
}

export default Navigation;
