import "./Menu.scss";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";

const Menu = ({ disciplins, flag, onClick }) => {
  return (
    <section className={`menu ${flag ? "menu_hiden" : ""}`}>
      <h3 className="menu__title">Дисциплины</h3>
      <div className="menu__table">
        {disciplins.map((disciplin) => (
            <Disciplin
              key={`disciplin-${disciplin.id}`}
              disciplin={disciplin}
              onClick={onClick}
            />
        ))}
      </div>
    </section>
  );
};

export default Menu;
