import React from "react";
import "../App.scss";

function SearchItem({ character }) {
  return <div className="search-item">{character.name}</div>;
}

export default SearchItem;
