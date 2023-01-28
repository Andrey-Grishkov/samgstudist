import React, { useEffect, useState } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import { MainContent } from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
import { Route, Routes } from "react-router-dom";
import { fetchDisciplins } from "../../utils/MainApi";
import Wave from '../../images/main__image-wave.svg'

const Main = () => {
  const [disciplins, setDisciplins] = useState([]);
  const [disciplin, setDisciplin] = useState({});

  const fetchData = async () => {
    const { results, count } = await fetchDisciplins();
    setDisciplins(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`main`}>
      <img className='main__image-wave' src={Wave}/>
      {disciplins && <div className="triangle"></div>}
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
