import React, {useEffect, useState} from 'react'
import './Quot.scss'
import { useRef } from 'react'
import { replaceSpace } from '../../utils/functions'
import {Switch, Route, useNavigate, Link} from "react-router-dom";
import {MainContent} from "../MainContent/MainContent";
import MainPageWorkPreview from "../MainPageWorkPreview/MainPageWorkPreview";
//import {textLength} from '../../utils/constants'

export const Quot = ({ text, workLink, workRef, work }) => {
  const [textLength, setTextLength] = useState(30);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1280 && window.innerWidth > 860) {
      setTextLength (25);
    } else if (window.innerWidth < 860 && window.innerWidth > 320){
      setTextLength (40);
    } else if (window.innerWidth < 320){
      setTextLength (100);
    } else {
      setTextLength (30);
    }
  });



  console.log(textLength, "textLength")


  //const textLength =30;

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
          to={`MainPageWorkPreview/Гуманитарные/25/Гум/14`}
    >
      {handleCutText(text)}
    </Link>
  );
};
