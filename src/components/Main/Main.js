import React, { useEffect, useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes } from "react-router-dom";
import { fetchDisciplins } from "../../utils/MainApi";

const Main = () => {
  // const [mainContent, setMainContent] = useState("");
  const [disciplins, setDisciplins] = useState([]);
  const [disciplin, setDisciplin] = useState("");
  const [idDisciplin, setIdDisciplin] = useState(NaN);

  const fetchData = async () => {
    const { results, count } = await fetchDisciplins();
    setDisciplins(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`main`}>
      {disciplins && <div className="triangle"></div>}
      <Menu
        disciplins={disciplins}
        setDisciplins={setDisciplins}
        setDisciplin={setDisciplin}
        setIdDisciplin={setIdDisciplin}
      />
      <Routes>
        <Route path="" element={<MainContent />}></Route>
        <Route
          path="MainPageWorkPreview/*"
          element={
            <MainPageWorkPreview
              disciplin={disciplin}
              idDisciplin={idDisciplin}
            />
          }
        ></Route>
      </Routes>
    </section>
  );
};

export default Main;
