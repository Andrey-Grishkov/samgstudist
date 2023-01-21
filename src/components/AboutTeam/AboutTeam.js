import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../images/cart_1.svg'
import Peoples from '../../images/peoples.svg'
import Arrow from '../../images/Arrow_3.svg'
import './AboutTeam.scss'

const AboutTeam = () => {

  const navigate = useNavigate();

  return (
    <section className='about-team'>
      <button className='about-team__button'>
        <Link className='about-team__link' to='/about-project'>
          <img className='about-team__arrow' src={Arrow} alt='стрелка' />
          <span className='about-team__subtitle'>
            О проекте
          </span>
        </Link>
      </button>
      <ul className='about-team__list'>
        <h2 className='about-team__list_title'>список команды</h2>
      </ul>
      <img className='about-team__img_cart' src={Cart} alt='тележка' />
      <img className='about-team__img_peoples' src={Peoples} alt='люди' />
    </section>
  );
}

export default AboutTeam;
