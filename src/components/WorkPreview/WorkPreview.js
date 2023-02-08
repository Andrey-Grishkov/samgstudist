import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { numberPageLimit } from "../../utils/constants";
import { fetchWork } from "../../utils/MainApi";

export const WorkPreview = ({ numberPage }) => {
  const { id, workId } = useParams();

  const [text, setText] = useState("");

  const fetchData = async () => {
    const results = await fetchWork(id, workId);
    const text = results.paragraph_text
      .map(({ paragraph_text }) => paragraph_text)
      .join(" ")
      .split(/[.;]/);
    const brokenText = [""];
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
      if (brokenText[counter].length < 1000) {
        brokenText[counter] += `${text[i]}.`;
      } else {
        counter++;
        brokenText[counter] = `${text[i]}.`;
      }
    }
    numberPageLimit[0] = brokenText.length - 1;
    setText(brokenText);
  };

  useEffect(() => {
    fetchData();
  }, [workId]);

  return <span>{text[numberPage]}</span>;
};
