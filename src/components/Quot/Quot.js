import React, {useEffect, useState} from "react";
import "./Quot.scss";
import { Link } from "react-router-dom";
import {setDisciplinTitle} from "../../store/actions";
import {useDispatch} from "react-redux";

export const Quot = ({ text, title, link }) => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);
  const [textLength, setTextLength] = useState(null);
  const [titleLength, setTitleLength] = useState(null);
  const dispatch = useDispatch();

  function handleQuantitySymbolsChange () {
    const quantityQuotText = rootStyles.getPropertyValue('--quantityQuotText');
    const quantityQuotTitle = rootStyles.getPropertyValue('--quantityQuotTitle');
    setTextLength(quantityQuotText);
    setTitleLength(quantityQuotTitle);
  }

  useEffect(() => {
    handleQuantitySymbolsChange();
    window.addEventListener('resize', handleQuantitySymbolsChange);
    return () => {
      window.removeEventListener('resize', handleQuantitySymbolsChange);
    };
  }, [window.innerWidth]);

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
    <Link className="quot" to={`MainPageWorkPreview/${link}`
    }>
      <div className="quot__container"
           onClick={() => {
             dispatch(setDisciplinTitle(title));
           }}
      >
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
