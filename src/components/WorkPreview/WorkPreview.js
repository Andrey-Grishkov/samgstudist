import "./WorkPreview.scss";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWork } from "../../utils/MainApi";
import { setLimit } from "../../store/namberPageSlice";

import {
  setImages,
  setImagesLimit,
  setImagesView,
} from "../../store/ illustrationSlice";


export const WorkPreview = () => {
  const dispatch = useDispatch();
  const numberPage = useSelector((state) => state.namberPage.counter);
  const { id, workId } = useParams();
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);
  const [textLength, setTextLength] = useState(null);

  function handleQuantitySymbolsChange () {
    const quantityWorkPreviewText = rootStyles.getPropertyValue('--quantityWorkPreviewText');
    setTextLength(quantityWorkPreviewText);
  }

  useEffect(() => {
    handleQuantitySymbolsChange();

    window.addEventListener('resize', handleQuantitySymbolsChange);
    return () => {
      window.removeEventListener('resize', handleQuantitySymbolsChange);
    };
  }, [window.innerWidth]);

  const images = useSelector((state) => state.illustration.images);
  const imagesCaunter = useSelector(
    (state) => state.illustration.imagesCaunter
  );
  const imagesView = useSelector((state) => state.illustration.imagesView);

  const [text, setText] = useState([]);

  console.log(textLength, 'textLength')

  const handleCutText = (brokenText, paragraphTexts, textLength) => {

    let counter = 0;
    for (let i = 0; i < paragraphTexts.length; i++) {
      if (brokenText[counter].length < textLength) {
        brokenText[counter] += `${paragraphTexts[i]} `;
      } else {
        brokenText[counter] += "...";
        counter++;
        brokenText[counter] = `${paragraphTexts[i]} `;
      }
    }
    return brokenText
    }

  const fetchData = useCallback(async () => {
    const results = await fetchWork(id, workId);
    const paragraphTexts = results.paragraph_text
      .map(({ paragraph_text: paragraphText }) => paragraphText)
      .join(" ")
      .split(" ");

    const brokenText = [""];

    handleCutText(brokenText, paragraphTexts, textLength)

    const imagesMap = results.image.map(({ image }) => image);
    dispatch(setImages(imagesMap));
    dispatch(setImagesLimit(imagesMap.length - 1));
    setText(brokenText);
    if (brokenText[0] !== " ") {
      dispatch(setLimit(brokenText.length - 1));
      return;
    }

    dispatch(setImagesView(true));
  }, [textLength, id, workId, dispatch]);


  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {imagesView ? (
        <div
          className="illustration"
          style={{
            background: `url(${images[imagesCaunter]}) center/contain no-repeat`,
          }}
        ></div>
      ) : (
        <span>{text[numberPage]}</span>
      )}
    </>
  );

};
