import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWork } from "../../utils/MainApi";
import { Paragraph } from "./Paragraph";

export const WorkPreview = ({ numberPage }) => {
  const { id, workId } = useParams();

  const [workPreview, setWorkPreview] = useState();
  const fetchData = async () => {
    const results = await fetchWork(id, workId);
    setWorkPreview(results.paragraph_text);
  };

  useEffect(() => {
    fetchData();
  }, [workId]);

  return (
    <>
      {[...Array(3)].map((_, i) => (
        <Paragraph
          key={`paragraph${i}`}
          id={i}
          workPreview={workPreview}
          numberPage={numberPage}
        ></Paragraph>
      ))}
    </>
  );
};
