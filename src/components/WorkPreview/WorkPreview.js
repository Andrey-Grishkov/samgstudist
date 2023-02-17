import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWork } from "../../utils/MainApi";
import { setLimit } from "../../store/namberPageSlice";
import "./WorkPreview.scss";

export const WorkPreview = () => {
  const dispatch = useDispatch();
  const numberPage = useSelector((state) => state.namberPage.counter);
  const { id, workId } = useParams();
  const [text, setText] = useState("");


  const [quantitySymbol, setQuantitySymbol] = useState(window.innerWidth < 721 ? 200 :
    (window.innerWidth < 1109 ? 1200 : 1300));

  window.addEventListener('resize', () => {
    if (window.innerWidth < 721) {
      setQuantitySymbol(200);
    } else if (window.innerWidth < 1109) {
      setQuantitySymbol(1200);
    } else {
      setQuantitySymbol(1300);
    }});

  const fetchData = useCallback(async () => {
    const results = await fetchWork(id, workId);
    const paragraphTexts = results.paragraph_text
      .map(({ paragraph_text: paragraphText }) => paragraphText)
      .join(" ")
      .split(" ");
    const brokenText = [""];
    let counter = 0;
    for (let i = 0; i < paragraphTexts.length; i++) {
      if (brokenText[counter].length < quantitySymbol) {
        brokenText[counter] += `${paragraphTexts[i]} `;
      } else {
        brokenText[counter] += "...";
        counter++;
        brokenText[counter] = `${paragraphTexts[i]} `;
      }
    }
    dispatch(setLimit(brokenText.length - 1));

    setText(brokenText);
  }, [id, workId, setText, dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <span className='work-preview'>{text[numberPage]}</span>;
};
