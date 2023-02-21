import { useDispatch } from "react-redux";
import { imagesReset } from "../../store/ illustrationSlice";
import { reset } from "../../store/namberPageSlice";
import "./Disciplin.scss";
import {setDisciplinTitle} from "../../store/actions";

export const Disciplin = ({ disciplin }) => {
  const dispatch = useDispatch();

  return (
    <p
      className="disciplin__cell"
      onClick={() => {
        dispatch(reset());
        dispatch(imagesReset());
        dispatch(setDisciplinTitle(disciplin.subject_title));
      }}
    >
      {disciplin.subject_title}
    </p>
  );
};
