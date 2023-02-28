import { Link } from 'react-router-dom'
import Team from '../../images/about-team__team.svg'
import { ReactComponent as Logo } from '../../images/about-team__logo.svg'
//import Logo from '../../images/about-team__logo.svg'
// import Title from '../../images/about-team__SAMGTUDIST.svg'
import Arrow from '../../images/about-team__arrow.svg'
import { developers } from '../../utils/constants'
import './AboutTeam.scss'
import React from "react";

const AboutTeam = () => {

  return (
    <section className='about-team'>
      <Link className='' to='/'>
        <Logo className='about-team__logo' />
      </Link>
        {/*<img className='about-team__img_logo' src={Logo} alt='лого' />*/}
        {/*<img className='about-team__img_title' src={Title} alt='название' />*/}
      <button className='about-team__button'>
        <Link className='about-team__link' to='/about-project'>
          <img className='about-team__arrow' src={Arrow} alt='стрелка' />
          <span className='about-team__subtitle'>
            О проекте
          </span>
        </Link>
      </button>
      <div className='about-team__container'>
        <ul className='about-team__list'>
          <h3 className='about-team__title'>Команда:</h3>
          {
            developers.map(developer => {
              return (
                <p className='about-team__list_title'>
                  {developer.role}: {developer.name}
                </p>
              )
            })
          }
        </ul>
      </div>
      <img className='about-team__img' src={Team} alt='команда' />
      {/* <img className='about-team__img_peoples' src={Peoples} alt='люди' /> */}
    </section>
  );
}

export default AboutTeam;
