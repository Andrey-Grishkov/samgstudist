import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { numberPageLimit } from "../../utils/constants";
import { fetchWork } from "../../utils/MainApi";

export const WorkPreview = ({ numberPage }) => {
  const { id, workId } = useParams();

  const [text, setText] = useState("");

  const fetchData = useCallback(async () => {
    const results = await fetchWork(id, workId);
    const paragraphTexts = results.paragraph_text
      .map(({ paragraph_text: paragraphText }) => paragraphText)
      .join(" ")
      .split(/[.;]/); //надо подумать
    const brokenText = [""];
    let counter = 0;
    for (let i = 0; i < paragraphTexts.length; i++) {
      if (brokenText[counter].length < 1000) {
        brokenText[counter] += `${paragraphTexts[i]}.`;
      } else {
        counter++;
        brokenText[counter] = `${paragraphTexts[i]}.`;
      }
    }
    numberPageLimit[0] = brokenText.length - 1;
    setText(brokenText);
  }, [id, workId, setText]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <span>{text[numberPage]}</span>;
};
