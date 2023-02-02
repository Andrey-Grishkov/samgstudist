import React, { useEffect, useState } from 'react'
import './MainPageWorkPreview.scss'
import { Work } from '../Work/Work'
import { fetchListOfWorks } from '../../utils/MainApi'
import { Link, Route, Routes } from 'react-router-dom'
import { replaceSpace } from '../../utils/functions'
import { WorkPreview } from '../WorkPreview/WorkPreview'

const MainPageWorkPreview = ({ disciplin }) => {
  const [numberPage, setNumberPage] = useState(0);
  const [works, setWorks] = useState([]);
  const [workLink, setWorkLink] = useState(' ');
  const [materialId, setMaterialId] = useState(NaN);
  const fetchData = async () => {
    const { results } = await fetchListOfWorks(disciplin.id);
    setWorks([...results]);
  };

  useEffect(() => {
    fetchData();
  }, [disciplin]);

  return (
    <div className='main-page-work'>
      <div className='main-page-work__content'>
        <div className='main-page-work__content__commercial'></div>
        <h3 className='main-page-work__content__title'>
          {disciplin.subject_title}
        </h3>
        <div className='main-page-work__content__preview'>
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
      </div>
      <div className='nav-container'>
        <div className='nav-container__without-illustrations'>
          <button
            onClick={() => numberPage && setNumberPage(numberPage - 1)}
            className='nav-container__without-illustrations__btn'
          >
            <p className='btn-text'>← Предыдущая страница</p>
          </button>
          <div className='nav-container__without-illustrations__page-number'>
            {numberPage + 1}
          </div>

          <button
            onClick={() => setNumberPage(numberPage + 1)}
            className='nav-container__without-illustrations__btn'
          >
            <p className='btn-text'>Следующая страница →</p>
          </button>
        </div>
        <button className='nav-container__illustrations'>Иллюстрации</button>
      </div>
    </div>
  );
};

export default MainPageWorkPreview;
