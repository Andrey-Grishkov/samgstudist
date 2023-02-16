import React, { useState, useRef, useEffect } from "react";
import "./App.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutProject from "../AboutProject/AboutProject";
import AboutTeam from "../AboutTeam/AboutTeam";
import Footer from "../Footer/Footer";
import { fetchDisciplins } from "../../utils/MainApi";


function App() {
  const location = useLocation();
  const [fullScreen, setFullScreen] = useState(false);
  const inputRef = useRef(null);
  const inputFocus = () => inputRef.current.focus();
  const [disciplins, setDisciplins] = useState([]);
  const fetchData = async () => {
    const { results } = await fetchDisciplins();
    setDisciplins([...results]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`page ${fullScreen ? "page_fullScreened" : ""}`}>
      <Header
        setFullScreen={setFullScreen}
        inputRef={inputRef}
        disciplins={disciplins}
        />
      <Routes>
        <Route path="/*" element={
          <Main
            disciplins={disciplins}
          />}></Route>
        <Route
          path="/about-project"
          element={<AboutProject
            inputFocus={inputFocus} />}
        ></Route>
        <Route path="/about-team"
               element={<AboutTeam />}></Route>
      </Routes>
      {location.pathname !== "/about-team" && <Footer />}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3213639437561510"
              crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
