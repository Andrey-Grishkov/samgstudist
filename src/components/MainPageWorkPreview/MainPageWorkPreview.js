import React, { useCallback, useEffect, useState } from "react";
import {connect} from 'react-redux'
import "./MainPageWorkPreview.scss";
import { fetchListOfWorks } from "../../utils/MainApi";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";
import { WorkPreview } from "../WorkPreview/WorkPreview";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, reset} from "../../store/namberPageSlice";
import {
  setImagesView,
  imagesDecrement,
  imagesIncrement, setImages, imagesReset,
} from "../../store/ illustrationSlice";
import {setSubjectTitle} from "../../store/actions";

const MainPageWorkPreview = ({ setTriangle, title, flag }) => {
  const imagesView = useSelector((state) => state.illustration.imagesView);
  const imagesCaunter = useSelector(
    (state) => state.illustration.imagesCaunter
  );
  const imagesLimit = useSelector((state) => state.illustration.imagaesLimit);
  const numberPageLimit = useSelector((state) => state.namberPage.limit);

  const numberPage = useSelector((state) => state.namberPage.counter);
  const dispatch = useDispatch();

  const {disciplin, id} = useParams();

  const [works, setWorks] = useState([]);
  const fetchData = useCallback(async () => {
    const { results } = await fetchListOfWorks(id);
    setWorks([...results]);

  }, [id, setWorks]);

  useEffect(() => {
    setTriangle(true);
    fetchData();
  }, [setTriangle, fetchData]);

  return (
    <div className="main-page-work">
      <div className="main-page-work__content">
        {/* <div className="main-page-work__content__commercial"></div> */}
        <h3 className="main-page-work__content__title">{title}</h3>
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
                      onClick={() => {
                        dispatch(setSubjectTitle(work.props.children));
                      }}
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
            onClick={() =>
              dispatch(imagesView ? imagesDecrement() : decrement())
            }
            className="nav-container__without-illustrations__btn"
          >
            <p className="btn-text">
              <span>←</span> Предыдущая страница
            </p>
          </button>
          <div className="nav-container__without-illustrations__page-number">
            {imagesView ? imagesCaunter + 1 : numberPage + 1}
          </div>

          <button
            onClick={() => {
              dispatch(imagesView ? imagesIncrement() : increment());
            }}
            className="nav-container__without-illustrations__btn"
          >
            <p className="btn-text">
              Следующая страница <span>→</span>
            </p>
          </button>
        </div>
        {![imagesLimit, numberPageLimit].includes(-1) && (
          <button
            onClick={() => dispatch(setImagesView())}
            className="nav-container__illustrations"
          >
            {imagesView ? `Вернуться к работе` : `Иллюстрации`}
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    title: state.title.title,
    flag: state.title.flag
  }
}

export default connect(mapStateToProps, null)(MainPageWorkPreview)
//export default MainPageWorkPreview;
