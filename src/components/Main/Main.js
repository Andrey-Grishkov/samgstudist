import React, { useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  const [mainContent, setMainContent] = useState("");

  return (
    <section className={`main`}>
      {mainContent && <div className="triangle"></div>}
      <Menu setMainContent={setMainContent} />
      <Routes>
        <Route path="" element={<MainContent />}></Route>
        <Route
          path="MainPageWorkPreview/*"
          element={<MainPageWorkPreview mainContent={mainContent} />}
        ></Route>
      </Routes>
    </section>
  );
};

export default Main;
