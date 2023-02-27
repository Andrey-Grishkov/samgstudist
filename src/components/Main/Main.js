import React, { useState, useEffect } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes } from "react-router-dom";
import { getWorksOfSearch } from "../../utils/MainApi";
// import { fetchDisciplins } from "../../utils/MainApi";

const Main = ({ disciplins }) => {
  const [triangle, setTriangle] = useState(false);
  //const [disciplins, setDisciplins] = useState([]);
  // const fetchData = async () => {
  //   const { results } = await fetchDisciplins();
  //   setDisciplins([...results]);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    getWorksOfSearch('Gum')
    .then(res => console.log(JSON.parse(res)));
  }, []);

  return (
    <section className={`main ${triangle ? "triangle" : ""}`}>
      <Menu disciplins={disciplins} flag={true} />
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
