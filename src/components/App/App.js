import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
// import MainPageWorksList from "../MainPageWorksList/MainPageWorksList";
// import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";
import AboutTeam from "../AboutTeam/AboutTeam";
import Footer from "../Footer/Footer";

function App() {
  // const location = useLocation();

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/about-project" element={<AboutProject />}></Route>
        <Route exact path="/about-team" element={<AboutTeam />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
