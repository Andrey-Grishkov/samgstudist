import React, { useCallback, useEffect, useState } from "react";
import "./MainPageWorkPreview.scss";
import { fetchListOfWorks } from "../../utils/MainApi";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";
import { WorkPreview } from "../WorkPreview/WorkPreview";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../store/namberPageSlice";
const MainPageWorkPreview = ({ setTriangle }) => {
  const numberPage = useSelector((state) => state.namberPage.counter);
  const dispatch = useDispatch();
  const { disciplin, id } = useParams();
  const [works, setWorks] = useState([]);
  const fetchData = useCallback(async () => {
    const { results } = await fetchListOfWorks(id);

    setWorks([...results]);
  }, [id, setWorks]);

  useEffect(() => {
    setTriangle(true);
    dispatch(reset());
    fetchData();
  }, [setTriangle, fetchData, dispatch]);

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
                (work, i) =>
                  (work = (
                    <Link
                      to={`${replaceSpace(work.material_title)}/${work.id}`}
                      key={`work${i}`}
                      className="main-page-work__content__link"
                    >
                      {work.material_title}
                    </Link>
                  ))
              )}
            ></Route>
            <Route path={`/:work/:workId`} element={<WorkPreview />}></Route>
          </Routes>
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-container__without-illustrations">
          <button
            onClick={() => dispatch(decrement())}
            className="nav-container__without-illustrations__btn"
          >
            <p className="btn-text">
              <span>←</span> Предыдущая страница
            </p>
          </button>
          <div className="nav-container__without-illustrations__page-number">
            {numberPage + 1}
          </div>

          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="nav-container__without-illustrations__btn"
          >
            <p className="btn-text">
              Следующая страница <span>→</span>
            </p>
          </button>
        </div>
        <button className="nav-container__illustrations">Иллюстрации</button>
      </div>
    </div>
  );
};

export default MainPageWorkPreview;
