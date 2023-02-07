import React, { useEffect, useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes, useParams } from "react-router-dom";
import { fetchDisciplins } from "../../utils/MainApi";

const Main = () => {
  const [disciplins, setDisciplins] = useState([]);
  const { disciplin } = useParams();
  const fetchData = async () => {
    const { results } = await fetchDisciplins();
    setDisciplins([...results]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`main ${disciplin ? "triangle" : ""}`}>
      <Menu disciplins={disciplins} />
      <Routes>
        <Route path="" element={<MainContent />}></Route>
        <Route
          path="MainPageWorkPreview/:disciplin/:id/*"
          element={<MainPageWorkPreview />}
        ></Route>
      </Routes>
    </section>
  );
};

export default Main;
