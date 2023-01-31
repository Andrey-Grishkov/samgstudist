import React, { useEffect, useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes } from "react-router-dom";
import { fetchDisciplins } from "../../utils/MainApi";

const Main = () => {
  const [disciplins, setDisciplins] = useState([]);
  const [disciplin, setDisciplin] = useState({});

  const fetchData = async () => {
    const { results } = await fetchDisciplins();
    setDisciplins(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`main ${disciplin.subject_title ? "triangle" : ""}`}>
      <Menu
        disciplins={disciplins}
        setDisciplins={setDisciplins}
        setDisciplin={setDisciplin}
      />
      <Routes>
        <Route path="" element={<MainContent />}></Route>
        <Route
          path="MainPageWorkPreview/*"
          element={<MainPageWorkPreview disciplin={disciplin} />}
        ></Route>
      </Routes>
    </section>
  );
};

export default Main;
