import React, { useState } from "react";
import "./Quot.scss";

import { Link } from "react-router-dom";

//import {textLength} from '../../utils/constants'

export const Quot = ({ text, title, link }) => {
  const [textLength, setTextLength] = useState(30);
  const [titleLength, setTitleLength] = useState(30);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1280 && window.innerWidth > 860) {
      setTextLength(80);
      setTitleLength (50)
    } else if (window.innerWidth < 860 && window.innerWidth > 320) {
      setTextLength(40);
    } else if (window.innerWidth < 320) {
      setTextLength(100);
    } else {
      setTextLength(120);
      setTitleLength (50)
    }
  });


  const handleCutText = (text, textLength) => {
    let splitMass = text.split("");
    let cutMass = [];
    for (let i = 0; i < textLength; i++) {
      cutMass.push(splitMass[i]);
    }

    let combMass = cutMass.join("") + "...";
    return combMass;
  };

  return (
    <Link className="quot" to={`MainPageWorkPreview/${link}`}>
      <div className="quot__container">
        <p className="quot__text">
        <span className="quot__title">
          {`${handleCutText(title, titleLength)} -`}
        </span>
          <br></br>
          {handleCutText(text, textLength)}
        </p>
      </div>

    </Link>
  );
};
