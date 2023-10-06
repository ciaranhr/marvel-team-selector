import React from "react";
import "../App.scss";
import SearchItem from "./SearchItem";

function SearchResults({ results }) {
  return (
    <div className="results-list">
      {results.map((character) => {
        return <SearchItem character={character} key={character.id} />;
      })}
    </div>
  );
}

export default SearchResults;
