import "./Header.scss";
import { ReactComponent as Logo } from "../../images/header__logo.svg";
import { useLocation, Link } from "react-router-dom";

const Header = ({ inputRef, setFullScreen }) => {
  const location = useLocation();
  let about_team;
  location.pathname === "/about-team"
    ? (about_team = true)
    : (about_team = false);

  return (
    <header className={`header ${about_team ? "header__team" : ""}`}>
      <Link className="header__logo-link" to="/">
        <Logo
          onClick={() => {
            setFullScreen((switchScreen) => !switchScreen);
          }}
          className="header__logo-container"
        ></Logo>
      </Link>
      <div className="header__line"></div>
      {about_team ? (
        <h1 className="header__title">О команде</h1>
      ) : (
        <div className="header__container">
          <nav className="header__navigation">
            <ul className="header__navigation_list">
              <li className="header__link-container">
                <Link className="header__link" to="/">
                  На главную
                </Link>
              </li>
              <li className="header__link-container">
                <Link className="header__link" to="/about-project">
                  О проекте
                </Link>
              </li>
            </ul>
          </nav>
          <form className="search-form">
            <button className="search-form__button" type="submit"></button>
            <input
              className="search-form__name"
              placeholder="Поиск по сайту"
              type="text"
              id="search-form"
              name="search-form"
              required
              ref={inputRef}
            ></input>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
