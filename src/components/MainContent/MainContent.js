import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchWork } from "../../utils/MainApi";
// import Commercial from "../Commercial/Commercial";
export const MainContent = () => {
  const [workPreview, setWorkPreview] = useState();
  const fetchData = async () => {
    const results = await fetchWork(25, 14);
    setWorkPreview([...results.paragraph_text]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main__content-container">
      <div className="main__content">
        <div className="main__title">Наша работа - Ваша работа!</div>
        <div className="main__greetings">
          Добро пожаловать на наш сайт. Здесь вы найдете примеры выполненных
          студенческих работ, которые помогут вам в выполнении собственных работ
        </div>
        <div className="main__quotes-title">Популярные цитаты</div>
        <nav className="main__quotes-container">
          <ul className="main__quotes">
            {workPreview && (
              <nav className="main__quotes">
                {[...Array(3)].map((_, i) => (
                  <Link to="" className="main__quot">
                    {workPreview[i].paragraph_text}
                  </Link>
                ))}
              </nav>
            )}
          </ul>
        </nav>
        <div className="main__commercial-container"></div>
      </div>
    </div>
  );
};
