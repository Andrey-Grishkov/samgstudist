import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWork } from "../../utils/MainApi";
import { setLimit } from "../../store/namberPageSlice";

export const WorkPreview = () => {
  const dispatch = useDispatch();
  const numberPage = useSelector((state) => state.namberPage.count);
  const { id, workId } = useParams();

  const [text, setText] = useState("");

  const fetchData = useCallback(async () => {
    const results = await fetchWork(id, workId);
    const paragraphTexts = results.paragraph_text
      .map(({ paragraph_text: paragraphText }) => paragraphText)
      .join(" ")
      .split(" ");
    const brokenText = [""];
    let counter = 0;
    for (let i = 0; i < paragraphTexts.length; i++) {
      if (brokenText[counter].length < 1800) {
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

  return <span>{text[numberPage]}</span>;
};
