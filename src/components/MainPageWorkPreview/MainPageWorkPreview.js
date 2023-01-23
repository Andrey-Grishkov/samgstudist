import React from 'react';
import './MainPageWorkPreview.scss'
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import wave from "../../images/main-page-work-preview__image-wave.svg";
import triangle from "../../images/main-page-work-preview__triangle.svg";
import triangle2 from "../../images/main-page-work-preview__triangle-2.svg";
import {theme} from '../../utils/constants'
import Commercial from "../Commercial/Commercial";

const MainPageWorkPreview = () => {

  return (
    <section className='main-page-work-preview'>
      <Menu/>
      <img className='main-page-work-preview__image-wave' src={wave} alt='волна'/>
      <img className='main-page-work-preview__triangle' src={triangle} alt='треугольники слева'/>
      <img className='main-page-work-preview__triangle-2' src={triangle2} alt='треугольники справа'/>
      <div className='main-page-work-preview__content-container'>
        <div className='main-page-work-preview__content'>
          <div className='main-page-work-preview__commercial-container'>
            <Commercial/>
          </div>
          <h3 className='main-page-work-preview__title'>{theme[0]}</h3>


        </div>

        <Footer/>
      </div>

    </section>
  );
}

export default MainPageWorkPreview;
