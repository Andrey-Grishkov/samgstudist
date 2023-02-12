import React, {useState} from 'react'
import './Quot.scss'
import { useRef } from 'react'
import { replaceSpace } from '../../utils/functions'
import {Switch, Route, useNavigate, Link} from "react-router-dom";
import {MainContent} from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";

export const Quot = ({ text, workLink, workRef, work }) => {

  //to={link ? link : ''}


  const textLength =30;

  const handleCutText = (text) =>{
    let splitMass = text.split('');
    let cutMass = [];
    for (let i = 0; i < textLength; i++) {
      cutMass.push(splitMass[i])
    }

    let combMass = cutMass.join('') +'...'
    return combMass
  }

  return (
    <Link className='quot'
          to={{
            pathname: workLink,
            propsQuot: work
          }}
          ref={workRef}
    >
      {handleCutText(text)}
    </Link>
  );
};
