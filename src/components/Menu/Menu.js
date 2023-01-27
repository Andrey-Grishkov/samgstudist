import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { theme } from "../../utils/constants";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";
import { fetchDisciplins } from "../../utils/MainApi";

const Menu = ({ setMainContent }) => {
  const [dropdown, setDropdown] = useState(false);

  const [disciplins, setDisciplins] = useState([]);
  const fetchData = async () => {
    const { results, count } = await fetchDisciplins();
    // console.log(results);
    setDisciplins(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  key={`disciplin-${i}`}
                  disciplin={disciplin}
                  setMainContent={setMainContent}
                ></Disciplin>
              </Link>
            ))}
          </div>
          <div className="more-disciplin">
            {dropdown &&
              disciplins.map((disciplin, i) => (
                <Disciplin
                  key={`disciplin-${disciplin.id}`}
                  disciplin={disciplin.subject_title}
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
