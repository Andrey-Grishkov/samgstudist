import './MainContent.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchWork } from '../../utils/MainApi'

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
    <div className='main-content'>
      <div className='main-content__container'>
        <h1 className='main-content__title'>Наша работа - Ваша работа!</h1>
        <h3 className='main-content__greetings'>
          Добро пожаловать на наш сайт. Здесь вы найдете примеры выполненных
          студенческих работ, которые помогут вам в выполнении собственных работ
        </h3>
        <h3 className='main-content__quotes-title'>Популярные цитаты</h3>
        <nav className='main-content__quotes-container'>
          <ul className='main-content__quotes'>
            {workPreview && (
              <>
                {[...Array(3)].map((_, i) => (
                  <Link to='' className='main-content__quot'>
                    {workPreview[i].paragraph_text}
                  </Link>
                ))}
              </>
            )}
          </ul>
        </nav>
        <div className='main-content__commercial-container'></div>
      </div>
    </div>
  );
};
