import React from 'react'
import './Menu.scss'
import {theme} from '../../utils/constants'

const Menu = () => {

  function dropdown() {
    document.getElementById("myDropdown").classList.toggle("menu__dropdown-content-show");
  }
//выпадающее меню
  window.onclick = function(event) {
    if (!event.target.matches('.menu__dropdown_btn')) {
      const dropdowns = document.getElementsByClassName("menu__dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('menu__dropdown-content-show')) {
          openDropdown.classList.remove('menu__dropdown-content-show');
        }
      }
    }
  }

  return (
    <section className='menu'>
      <div className='menu__dropdown'>
        <button onClick={dropdown} className='menu__dropdown_btn'>Дисциплины</button>
        <div id="myDropdown" className='menu__dropdown-content'>
          <a href="#">{theme[0]}</a>
          <a href="#">{theme[1]}</a>
          <a href="#">{theme[2]}</a>
          <a href="#">{theme[3]}</a>
          <a href="#">{theme[4]}</a>
          <a href="#">{theme[5]}</a>
          <a href="#">{theme[6]}</a>
          <a href="#">{theme[7]}</a>
        </div>
      </div>
      <table className='menu__table'>
        <tr>
          <a href="#">{theme[0]}</a>
        </tr>
        <tr>
          <a href="#">{theme[1]}</a>
        </tr>
        <tr>
          <a href="#">{theme[2]}</a>
        </tr>
        <tr>
          <a href="#">{theme[3]}</a>
        </tr>
        <tr>
          <a href="#">{theme[4]}</a>
        </tr>
        <tr>
          <a href="#">{theme[5]}</a>
        </tr>
        <tr>
          <a href="#">{theme[6]}</a>
        </tr>
        <tr>
          <a href="#">{theme[7]}</a>
        </tr>
      </table>
    </section>
  );
}

export default Menu;
