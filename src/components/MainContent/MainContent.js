import { qutes } from "../../utils/constants";
import Commercial from "../Commercial/Commercial";
export const MainContent = () => {





  return (
    <div className="main__content-container">
      <div className="main__content">
        <h2 className="main__title">Наша работа - Ваша работа!</h2>
        <h3 className="main__greetings">
          Добро пожаловать на наш сайт. Здесь вы найдете примеры выполненных
          студенческих работ, которые помогут вам в выполнении собственных работ
        </h3>
        <h4 className="main__quotes-title">Популярные цитаты</h4>
        <nav className="main__quotes-container">
          <ul className="main__quotes">
            <li className="main__quot">{qutes[0]}</li>
            <li className="main__quot">{qutes[1]}</li>
            <li className="main__quot">{qutes[2]}</li>
          </ul>
        </nav>
        <div className="main__commercial-container">
          <Commercial />
        </div>
      </div>
    </div>
  );
};
