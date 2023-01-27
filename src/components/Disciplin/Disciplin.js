export const Disciplin = ({ disciplin, setDisciplin }) => {
  return (
    <tr
      onClick={() => {
        setDisciplin(disciplin);
      }}
    >
      {disciplin.subject_title}
    </tr>
  );
};
