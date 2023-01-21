import React from 'react'
import './AboutProject.scss'
import Vector from '../../images/Vector.svg'
import Glass from '../../images/glass.svg'
import Group from '../../images/group.svg'

const AboutProject = () => {

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
            {/* <img src={Vector} alt='стрелка' className='project__img' /> */}
          </li>
          <li className='project__el'>
            <span className='project__text'>
              Для более удобного использования вы можете
              воспользоваться поиском
            </span>
            {/* <img src={Glass} alt='лупа' className='project__img' /> */}
          </li>
          <li className='project__el'>
            <span className='project__text'>
              Познакомиться с командой проекта
            </span>
            {/* <img src={Group} alt='команда' className='project__img' /> */}
          </li>
        </ul>

      </div>
    </section>
  );
}

export default AboutProject;
