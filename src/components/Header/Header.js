import "./Header.scss"

import { useLocation, Link } from "react-router-dom"

import HeaderNav from "../HeaderNav/HeaderNav";
import Logo from "../Logo/Logo";

const Header = ({ inputRef, setFullScreen }) => {
  const location = useLocation();
  let about_team;
  location.pathname === '/about-team'
    ? (about_team = true)
    : (about_team = false);

  return (
    <header className={`header ${about_team ? 'header__team' : ''}`}>
        <Logo
          setFullScreen={setFullScreen}
        ></Logo>
      <div className='header__line'></div>
      {about_team ? (
        <h1 className='header__title'>О команде</h1>
      ) : (
       <HeaderNav
         inputRef={inputRef}
       />
      )}
    </header>
  );
};

export default Header;
