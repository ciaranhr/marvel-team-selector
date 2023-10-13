import React from "react";
import "../css/CharacterIcon.scss"

function CharacterIcon( {player} ) {
    
  const characterURL = player.thumbnail && player.thumbnail.path ? `${player.thumbnail.path}/portrait_small.jpg` : "";

  return(
  <div className="character-icon">
    <img src = {characterURL} alt={player.name}></img>
    
  </div>
  );
}

export default CharacterIcon;