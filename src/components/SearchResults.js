import React from "react";
import "../css/SearchResults.scss";

const handleClick = (character, setPlayer) => {
  console.log(character.name);
  console.log(character);
  console.log("clicked");
  setPlayer(character);
}

function SearchItem({ character, setPlayer } ) {
  return <div className="search-item" onClick={() => handleClick(character, setPlayer)}>{character.name} </div>;
}

function SearchResults({ results, setPlayer }) {

  return (
    <div className="results-list">
      {results.map((character) => {
        return <SearchItem character={character} key={character.id} setPlayer = {setPlayer} />;
      })}
    </div>
  );
}

export default SearchResults;
