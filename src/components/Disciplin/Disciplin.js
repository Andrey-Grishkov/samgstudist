export const Disciplin = ({ disciplin, setDisciplin }) => {
  return (
    <div
      onClick={() => {
        setDisciplin(disciplin);
      }}
      className="menu_table_column"
    >
      <span>{disciplin.subject_title}</span>
    </div>
  );
};
