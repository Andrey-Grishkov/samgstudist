import React, { useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";

const Main = () => {
  const [mainContent, setMainContent] = useState("");
  return (
    <section className={`main`}>
      {mainContent && <div className="triangle"></div>}
      <Menu setMainContent={setMainContent} />
      {mainContent ? (
        <MainPageWorkPreview mainContent={mainContent} />
      ) : (
        <MainContent />
      )}
    </section>
  );
};

export default Main;
