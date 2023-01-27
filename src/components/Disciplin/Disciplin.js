export const Disciplin = ({ disciplin, setDisciplin, id, setIdDisciplin }) => {
  return (
    <tr
      onClick={() => {
        setIdDisciplin(id);
        setDisciplin(disciplin);
      }}
    >
      {disciplin}
    </tr>
  );
};
