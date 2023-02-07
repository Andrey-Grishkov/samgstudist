import "./Disciplin.scss";

export const Disciplin = ({ disciplin, setDisciplin }) => {
  return (
    <p
      // onClick={() => {
      //   setDisciplin(disciplin);
      // }}
      className="disciplin__table"
    >
      <span>{disciplin.subject_title}</span>
    </p>
  );
};
