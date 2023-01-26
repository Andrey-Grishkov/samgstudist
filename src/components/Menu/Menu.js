import React, { useState } from "react";
import "./Menu.scss";
import { theme } from "../../utils/constants";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";

const Menu = ({ setMainContent }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <section className="menu">
      <div className="menu__dropdown">
        <button
          onClick={() => setDropdown(!dropdown)}
          className="menu__dropdown_btn"
        >
          Дисциплины
        </button>
        <table className="menu__table">
          <div>
            {theme.map((disciplin, i) => (
              <Link to={`MainPageWorkPreview/${disciplin}`}>
                <Disciplin
                  key={i}
                  disciplin={disciplin}
                  setMainContent={setMainContent}
                ></Disciplin>
              </Link>
            ))}
          </div>
          <div className="more-disciplin">
            {dropdown &&
              theme.map((disciplin, i) => (
                <Disciplin
                  key={i}
                  disciplin={"другая_дисциплина__" + i}
                  setMainContent={setMainContent}
                ></Disciplin>
              ))}
          </div>
        </table>
      </div>
    </section>
  );
};
export default Menu;
