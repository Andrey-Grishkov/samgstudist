import "./Disciplin.scss";

export const Disciplin = ({ disciplin, setDisciplin }) => {
  return (
    <p
      // onClick={() => {
      //   setDisciplin(disciplin);
      // }}
      className="disciplin__cell"
    >
      {disciplin.subject_title}
    </p>
  );
};
