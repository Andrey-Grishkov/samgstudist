import React, { useEffect, useState } from "react";
import "./MainPageWorkPreview.scss";
import Commercial from "../Commercial/Commercial";
import { Work } from "../Work/Work";
import { fetchListOfWorks } from "../../utils/MainApi";
import { Link, Route, Routes } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";
import { WorkPreview } from "../WorkPreview/WorkPreview";

const MainPageWorkPreview = ({ disciplin }) => {
  const [numberPage, setNumberPage] = useState(0);
  const [works, setWorks] = useState([]);
  const [workLink, setWorkLink] = useState(" ");
  const [materialId, setMaterialId] = useState(NaN);
  const fetchData = async () => {
    const { results, count } = await fetchListOfWorks(disciplin.id);

    setWorks(results);
  };

  useEffect(() => {
    fetchData();
  }, [disciplin]);

  return (
    <div className="main-page-work-preview__content-container">
      <div className="main-page-work-preview__content">
        <div className="main-page-work-preview__commercial-container">
          <Commercial />
        </div>
        <h3 className="main-page-work-preview__title">
          {disciplin.subject_title}
        </h3>
        <div className="main-page-work-preview__preview">
          <Routes>
            <Route
              path={replaceSpace(disciplin.subject_title)}
              element={works.map(
                (work) =>
                  (work = (
                    <Link to={replaceSpace(work.material_title)}>
                      <Work
                        key={`work${work.id}`}
                        work={work}
                        setWorkLink={setWorkLink}
                        setMaterialId={setMaterialId}
                      />
                    </Link>
                  ))
              )}
            ></Route>
            <Route
              path={`${replaceSpace(disciplin.subject_title)}/${workLink}/`}
              element={
                <WorkPreview
                  numberPage={numberPage}
                  listId={disciplin.id}
                  materialId={materialId}
                />
              }
            ></Route>
          </Routes>
        </div>
        <div className="main-page-work-preview__nav-container">
          <div className="main-page-work-preview__page-btn-container">
            <button
              onClick={() => numberPage && setNumberPage(numberPage - 1)}
              className="main-page-work-preview__btn"
            >
              <p className="main-page-work-preview__btn-text">
                ← Предыдущая страница
              </p>
            </button>
            <div className="main-page-work-preview__page-number">
              {numberPage + 1}
            </div>

            <button
              onClick={() => setNumberPage(numberPage + 1)}
              className="main-page-work-preview__btn"
            >
              <p className="main-page-work-preview__btn-text main-page-work-preview__btn-text_reversed">
                Следующая страница →
              </p>
            </button>
          </div>
          <button className="main-page-work-preview__btn-toggle-view">
            Иллюстрации
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPageWorkPreview;
