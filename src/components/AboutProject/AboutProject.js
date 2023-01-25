import React from 'react'
import './AboutProject.scss'
import { Link } from 'react-router-dom'
import Vector from '../../images/Vector.svg'
import Glass from '../../images/glass.svg'
import Group from '../../images/group.svg'

const AboutProject = ({ inputFocus }) => {

  return (
    <section className='project'>
      <div className='project__container'>
        <h2 className='project__title'>Наша работа - Ваша работа!</h2>
        <ul className='project__list'>
          <li className='project__el'>
              <span className='project__text'>
                Вдохновившись примерами работ, представленных на сайте,
                вы сможете сделать свою работу еще лучше
              </span>
              <Link to='/works-list' className='project__link project__link_vector'>
                <img src={Vector} alt='стрелка' className='project__img' />
                <div className='project__circle vector'></div>
              </Link>
            
          </li>
          <li className='project__el' >
            <span className='project__text'>
              Для более удобного использования вы можете
              воспользоваться поиском
            </span>
            <div className='project__link'>
              <img src={Glass} alt='лупа' className='project__img' onClick={inputFocus} />
              <div className='project__circle glass'></div>
            </div>
          </li>
          <li className='project__el'>
            <span className='project__text'>
              Познакомиться с командой проекта
            </span>
            <Link to='/about-team' className='project__link'>
              <img src={Group} alt='команда' className='project__img' />
              <div className='project__circle'></div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
