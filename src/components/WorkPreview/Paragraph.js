export const Paragraph = ({ workPreview, numberPage, id }) => {
  return (
    workPreview &&
    numberPage * 3 + id < workPreview.length && (
      <p>{workPreview[numberPage * 3 + id].paragraph_text}</p>
    )
  );
};
