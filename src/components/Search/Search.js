import React from "react";
import "./Search.scss";

function Search({ inputRef, flag }) {
  return (
    <form className={`search-form ${flag ? "search-form_hiden" : ""}`}>
      <button className="search-form__button" type="submit"></button>
      <input
        className="search-form__name"
        placeholder="Поиск по сайту"
        type="text"
        id="search-form"
        name="search-form"
        required
        ref={inputRef}
      ></input>
    </form>
  );
}

export default Search;
