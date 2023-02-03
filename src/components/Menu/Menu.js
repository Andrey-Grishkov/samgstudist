import React, { useState } from "react";
import "./Menu.scss";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";

const Menu = ({ disciplins, setDisciplin }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <section className="menu">
      <button
        onClick={() => setDropdown(!dropdown)}
        className="menu_dropdown_btn"
      >
        Дисциплины
      </button>
      <div className="menu_table">
        {disciplins.map((disciplin) => (
          <Link
            to={`MainPageWorkPreview/${replaceSpace(disciplin.subject_title)}`}
          >
            <Disciplin
              key={`disciplin-${disciplin.id}`}
              disciplin={disciplin}
              setDisciplin={setDisciplin}
            />
          </Link>
        ))}
        <div className="more-disciplin">
          {dropdown &&
            disciplins.map((disciplin) => (
              <Link
                to={`MainPageWorkPreview/${replaceSpace(
                  disciplin.subject_title
                )}`}
              >
                <Disciplin
                  key={`disciplin-${disciplin.id}`}
                  disciplin={disciplin}
                  setDisciplin={setDisciplin}
                ></Disciplin>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Menu;
