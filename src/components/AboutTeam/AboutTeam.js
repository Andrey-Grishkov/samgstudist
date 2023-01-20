import React from 'react'
import Cart from '../../images/cart_1.svg'
import Peoples from '../../images/peoples.svg'
import './AboutTeam.scss'

const AboutTeam = () => {

  return (
    <section className='about-team'>
      <div className='about-team__container'>
      </div>
        <ul className='about-team__list'>
          <h2 className='about-team__list_title'>список команды</h2>
        </ul>
        <img className='about-team__img_cart' src={Cart} alt='тележка' />
        <img className='about-team__img_peoples' src={Peoples} alt='люди' />
    </section>
  );
}

export default AboutTeam;
