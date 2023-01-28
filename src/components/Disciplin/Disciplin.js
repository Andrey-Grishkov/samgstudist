export const Disciplin = ({ disciplin, setDisciplin }) => {
  return (
    <div
      onClick={() => {
        setDisciplin(disciplin);
      }}
      className='menu__table-column'
    >
      {disciplin.subject_title}
    </div>
  );
};
