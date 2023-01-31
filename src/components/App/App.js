import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";
import AboutTeam from "../AboutTeam/AboutTeam";
import Footer from "../Footer/Footer";
// import { useRef } from "react";

function App() {
  const location = useLocation();
  const [fullScreen, setFullScreen] = useState(false);
  // const inputRef = useRef(null);
  // const inputFocus = () => inputRef.current.focus();

  return (
    <div className={`page ${fullScreen ? "fullScreen" : ""}`}>
      <Header setFullScreen={setFullScreen} />
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/about-project" element={<AboutProject />}></Route>
        <Route path="/about-team" element={<AboutTeam />}></Route>
      </Routes>
      {location.pathname !== "/about-team" && <Footer />}
    </div>
  );
}

export default App;
