import { useEffect, useState } from "react";
import { fetchWork } from "../../utils/MainApi";

export const WorkPreview = ({ numberPage, listId, materialId }) => {
  const [workPreview, setWorkPreview] = useState([]);
  const fetchData = async () => {
    const results = await fetchWork(listId, materialId, numberPage);
    setWorkPreview(results.paragraph_text[numberPage].paragraph_text);
  };

  useEffect(() => {
    fetchData();
  }, [numberPage]);
  console.log(workPreview);
  return <p>{workPreview}</p>;
};
