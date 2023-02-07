import React, { useEffect, useState } from "react";
import "./MainPageWorkPreview.scss";
import { fetchListOfWorks } from "../../utils/MainApi";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";
import { WorkPreview } from "../WorkPreview/WorkPreview";

const MainPageWorkPreview = () => {
  const { disciplin, id } = useParams();
  const [numberPage, setNumberPage] = useState(0);
  const [works, setWorks] = useState([]);
  const fetchData = async () => {
    const { results } = await fetchListOfWorks(id);

    setWorks([...results]);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="main-page-work">
      <div className="main-page-work__content">
        <div className="main-page-work__content__commercial"></div>
        <h3 className="main-page-work__content__title">{disciplin}</h3>
        <div className="main-page-work__content__preview">
          <Routes>
            <Route
              path={`/`}
              element={works.map(
                (work) =>
                  (work = (
                    <Link
                      to={`${replaceSpace(work.material_title)}/${work.id}`}
                    >
                      <div>{work.material_title}</div>
                    </Link>
                  ))
              )}
            ></Route>
            <Route
              path={`/:work/:workId`}
              element={<WorkPreview numberPage={numberPage} />}
            ></Route>
          </Routes>
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-container__without-illustrations">
          <button
            onClick={() => numberPage && setNumberPage(numberPage - 1)}
            className="nav-container__without-illustrations__btn"
          >
            <p className="btn-text">← Предыдущая страница</p>
          </button>
          <div className="nav-container__without-illustrations__page-number">
            {numberPage + 1}
          </div>

          <button
            onClick={() => setNumberPage(numberPage + 1)}
            className="nav-container__without-illustrations__btn"
          >
            <p className="btn-text">Следующая страница →</p>
          </button>
        </div>
        <button className="nav-container__illustrations">Иллюстрации</button>
      </div>
    </div>
  );
};

export default MainPageWorkPreview;
