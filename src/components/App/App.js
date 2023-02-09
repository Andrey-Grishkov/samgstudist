import React, { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
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

  const [windowSmallSize, setSmallWindowSize] = useState(window.innerWidth < 320);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 320) {
      setSmallWindowSize(true);
    } else {
      setSmallWindowSize(false);
    }});


  return (
    <div className={`page ${fullScreen ? "page_fullScreened" : ""}`}>
      <Header setFullScreen={setFullScreen} inputRef={inputRef} disciplins={disciplins} windowSmallSize={windowSmallSize}/>
      <Routes>
        <Route path="/*" element={<Main disciplins={disciplins} windowSmallSize={windowSmallSize}/>}></Route>
        <Route
          path="/about-project"
          element={<AboutProject inputFocus={inputFocus} />}
        ></Route>
        <Route path="/about-team" element={<AboutTeam />}></Route>
      </Routes>
      {location.pathname !== "/about-team" && <Footer />}
    </div>
  );
}

export default App;
