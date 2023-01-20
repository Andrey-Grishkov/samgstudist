import React from 'react';
import './Main.scss'
import wave from "../../images/main__image-wave.svg";
import women from "../../images/main__image-women.svg";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const Main = () => {

  return (
    <section className='main'>
      <Menu/>
      <img className='main__image-wave' src={wave} alt='кнопка поиска'/>
      <img className='main__image-women' src={women} alt='кнопка поиска'/>
      <div className='main__content-container'>
        <div className='main__content'></div>
        <Footer/>
      </div>
    </section>
  );
}

export default Main;
