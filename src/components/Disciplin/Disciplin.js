import { useDispatch } from "react-redux";
import { imagesReset } from "../../store/ illustrationSlice";
import { reset } from "../../store/namberPageSlice";
import "./Disciplin.scss";

export const Disciplin = ({ disciplin }) => {
  const dispatch = useDispatch();
  return (
    <p
      className="disciplin__cell"
      onClick={() => {
        dispatch(reset());
        dispatch(imagesReset());
      }}
    >
      {disciplin.subject_title}
    </p>
  );
};
