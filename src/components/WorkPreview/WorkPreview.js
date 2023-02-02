import { useEffect, useState } from 'react'
import { fetchWork } from '../../utils/MainApi'
import { Paragraph } from './Paragraph'

export const WorkPreview = ({ numberPage, listId, materialId }) => {
  const [workPreview, setWorkPreview] = useState();
  const fetchData = async () => {
    const results = await fetchWork(listId, materialId);
    setWorkPreview(results.paragraph_text);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
