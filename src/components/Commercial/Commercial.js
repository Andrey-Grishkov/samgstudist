import React from 'react'
import './Commercial.scss'
import commercial from '../../images/commertial__image.jpg'

const Commercial = () => {
  return (
    <div className='commercial'>
      <img
        className='commercial__image'
        src={commercial}
        alt='Здесь могла бы быть Ваша реклама'
      />
    </div>
  );
};

export default Commercial;
