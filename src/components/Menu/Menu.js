import React, { useState } from "react";
import "./Menu.scss";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";

const Menu = ({ disciplins }) => {
  return (
    <section className="menu">
      <div className="menu__table">
        {disciplins.map((disciplin) => (
          <Link
            to={`MainPageWorkPreview/${replaceSpace(disciplin.subject_title)}/${
              disciplin.id
            }`}
            className="menu__link"
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
