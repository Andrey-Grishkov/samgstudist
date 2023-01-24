import React from "react";
import "./MainPageWorkPreview.scss";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import wave from "../../images/main-page-work-preview__image-wave.svg";
import triangle from "../../images/main-page-work-preview__triangle.svg";
import triangle2 from "../../images/main-page-work-preview__triangle-2.svg";
import { theme } from "../../utils/constants";
import arrow from "../../images/main-page-work-preview__arrow.svg";
import Commercial from "../Commercial/Commercial";

const MainPageWorkPreview = () => {
  return (
    <section className="main-page-work-preview">
      <Menu />
      <img
        className="main-page-work-preview__image-wave"
        src={wave}
        alt="волна"
      />
      <img
        className="main-page-work-preview__triangle"
        src={triangle}
        alt="треугольники слева"
      />
      <img
        className="main-page-work-preview__triangle-2"
        src={triangle2}
        alt="треугольники справа"
      />
      <div className="main-page-work-preview__content-container">
        <div className="main-page-work-preview__content">
          <div className="main-page-work-preview__commercial-container">
            <Commercial />
          </div>
          <h3 className="main-page-work-preview__title">{theme[0]}</h3>
          <div className="main-page-work-preview__preview">preview</div>
          <div className="main-page-work-preview__nav-container">
            <div className="main-page-work-preview__page-btn-container">
              <button className="main-page-work-preview__btn">
                <img
                  className="main-page-work-preview__arrow"
                  src={arrow}
                  alt="стрелка"
                />
                <p className="main-page-work-preview__btn-text">
                  Предыдущая страница
                </p>
              </button>
              <div className="main-page-work-preview__page-number">4</div>
              <button className="main-page-work-preview__btn">
                <img
                  className="main-page-work-preview__arrow main-page-work-preview__arrow_reversed"
                  src={arrow}
                  alt="стрелка"
                />
                <p className="main-page-work-preview__btn-text main-page-work-preview__btn-text_reversed">
                  Следующая страница
                </p>
              </button>
            </div>
            <button className="main-page-work-preview__btn-toggle-view">
              Иллюстрации
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default MainPageWorkPreview;
