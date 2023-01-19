import React from 'react';
import './Main.css'
import wave from "../../images/main__image-wave.svg";
import women from "../../images/main__image-women.svg";
import Footer from "../Footer/Footer";

const Main = () => {

  return (
    <section className='main'>
      <p>Main</p>
      <img className='main__image-wave' src={wave} alt='кнопка поиска'/>
      <img className='main__image-women' src={women} alt='кнопка поиска'/>
      <Footer/>
    </section>
  );
}

export default Main;
