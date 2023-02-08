import React, { useEffect, useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes } from "react-router-dom";
import { fetchDisciplins } from "../../utils/MainApi";

const Main = () => {
  const [disciplins, setDisciplins] = useState([]);
  const [triangle, setTriangle] = useState(false);
  const fetchData = async () => {
    const { results } = await fetchDisciplins();
    setDisciplins([...results]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`main ${triangle ? "triangle" : ""}`}>
      <Menu disciplins={disciplins} />
      <Routes>
        <Route
          path=""
          element={<MainContent setTriangle={setTriangle} />}
        ></Route>
        <Route
          path="MainPageWorkPreview/:disciplin/:id/*"
          element={<MainPageWorkPreview setTriangle={setTriangle} />}
        ></Route>
      </Routes>
    </section>
  );
};

export default Main;
