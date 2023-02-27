import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

import HeaderNav from "../HeaderNav/HeaderNav";
import Logo from "../Logo/Logo";
import { useState } from "react";

const Header = ({ inputRef, setFullScreen, disciplins }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickOpen() {
    setIsOpen(true);
  }

  function handleClickClose() {
    setIsOpen(false);
  }

  const location = useLocation();
  let about_team;
  location.pathname === "/about-team"
    ? (about_team = true)
    : (about_team = false);

  return (
    <header className={`header ${about_team ? "header__team" : ""}`}>
      <Logo flag={true} />
      {about_team ? (
        <h1 className="header__title">О команде</h1>
      ) : (
        <HeaderNav inputRef={inputRef} onClick={handleClickOpen} />
      )}
      <Navigation
        isOpen={isOpen}
        onClick={handleClickClose}
        inputRef={inputRef}
        disciplins={disciplins}
      />
    </header>
  );
};

export default Header;
