import React, { useState } from "react";
import "./MainPageWorkPreview.scss";
import Commercial from "../Commercial/Commercial";

const MainPageWorkPreview = ({ mainContent }) => {
  const [numberPage, setNumberPage] = useState(0);
  return (
    <div className="main-page-work-preview__content-container">
      <div className="main-page-work-preview__content">
        <div className="main-page-work-preview__commercial-container">
          <Commercial />
        </div>
        <h3 className="main-page-work-preview__title">{mainContent}</h3>
        <div className="main-page-work-preview__preview">preview</div>
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
