import "./MainContent.scss";
import { useCallback, useEffect, useState } from "react";
import { fetchWork } from "../../utils/MainApi";
import { Quot } from "../Quot/Quot";
import {mainQuotes} from '../../utils/constants'
import logoGif from '../../images/gif-samgtudist.gif'

export const MainContent = ({ setTriangle }) => {
  const [workPreview, setWorkPreview] = useState();

  const fetchData = useCallback(async () => {
    const results = await fetchWork(25, 14);
    setWorkPreview([...results.paragraph_text]);
  }, [setWorkPreview]);

  useEffect(() => {
    setTriangle(false);
    fetchData();
  }, [setTriangle, fetchData]);

  return (
    <div className="main-content">
      <div className="main-content__container">
        <h2 className="main-content__title">Наша работа - Ваша работа!</h2>
        <h3 className="main-content__greetings">
          Добро пожаловать на наш сайт! Здесь вы найдете примеры выполненных
          студенческих работ, которые помогут вам в реализации собственных
          проектов.
        </h3>
        <h3 className="main-content__quotes-title">Популярные работы</h3>
        <nav className="main-content__quotes-container">
          <ul className="main-content__quotes">
            {workPreview && (
              <>
                {mainQuotes.map((quotes) => (
                  <Quot
                    title={quotes.title}
                    text={quotes.work}
                    key={quotes.id}
                    link={quotes.link}
                  />

                  ))


                }
                {/*{[...Array(3)].map((_, i) => (*/}
                {/*  <Quot text={workPreview[i].paragraph_text} key={`link${i}`} />*/}

                {/*  // <Link*/}
                {/*  //   to={`MainPageWorkPreview/Гуманитарные/25/Гум/14`}*/}
                {/*  //   className="main-content__quot"*/}
                {/*  //   key={`link${i}`}*/}
                {/*  // >*/}
                {/*  //   {workPreview[i].paragraph_text}*/}
                {/*  // </Link>*/}
                {/*))}*/}
              </>
            )}
          </ul>
        </nav>
        {/*<img className="main-content__gif" src={logoGif}/>*/}
         {/*<div className="main-content__commercial-container"></div>*/}
      </div>
    </div>
  );
};
