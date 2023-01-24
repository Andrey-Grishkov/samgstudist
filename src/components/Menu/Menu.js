import React, { useState } from "react";
import "./Menu.scss";
import { theme } from "../../utils/constants";
import { Disciplin } from "../Disciplin/Disciplin";

const Menu = () => {
  const [dropdown, setDropdown] = useState(true);

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
          {dropdown &&
            theme.map((disciplin, i) => (
              <Disciplin key={i} disciplin={disciplin}></Disciplin>
            ))}
        </table>
      </div>
    </section>
  );
};
export default Menu;
