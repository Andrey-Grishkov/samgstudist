import { useDispatch } from "react-redux";
import { imagesReset } from "../../store/ illustrationSlice";
import { reset } from "../../store/namberPageSlice";
import "./Disciplin.scss";
import {setDisciplinTitle} from "../../store/actions";
import {Link} from "react-router-dom";
import {replaceSpace} from "../../utils/functions";

export const Disciplin = ({ disciplin, onClick }) => {
  const dispatch = useDispatch();

  return (

    <Link
      to={`MainPageWorkPreview/${replaceSpace(disciplin.subject_title)}/${
        disciplin.id
      }`}
      className="disciplin"
      key={`Link-${disciplin.id}`}
      onClick={onClick}
    >
      <img className='disciplin__img' src={disciplin.img} alt='disciplin image'/>
    <p
      className="disciplin__text"
      onClick={() => {
        dispatch(reset());
        dispatch(imagesReset());
        dispatch(setDisciplinTitle(disciplin.subject_title));
      }}
    >
      {disciplin.subject_title}
    </p>
    </Link>
  );
};
