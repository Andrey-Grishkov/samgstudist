import "./Menu.scss";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";
const Menu = ({ disciplins, flag }) => {
  return (
    <section className={`menu ${flag ? "menu_hiden" : ""}`}>
      <div className="menu__table">
        {disciplins.map((disciplin) => (
          <Link
            to={`MainPageWorkPreview/${replaceSpace(disciplin.subject_title)}/${
              disciplin.id
            }`}
            className="menu__link"
            key={`Link-${disciplin.id}`}
          >
            <Disciplin
              key={`disciplin-${disciplin.id}`}
              disciplin={disciplin}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Menu;
