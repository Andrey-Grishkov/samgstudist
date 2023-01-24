import React, { useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";

const Main = () => {
  const [mainContent, setMainContent] = useState("");
  return (
    <section className="main">
      <Menu setMainContent={setMainContent} />
      {!mainContent ? (
        <MainContent />
      ) : (
        <MainPageWorkPreview mainContent={mainContent} />
      )}
    </section>
  );
};

export default Main;
