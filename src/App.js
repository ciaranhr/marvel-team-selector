import { useState } from "react";
import "./App.scss";
import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import SearchResults from "./components/SearchResults";
import CharacterSearchBar from "./components/CharacterSearchBar";
import CharacterIcon from "./components/CharacterIcon";


function App() {
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);
  const [results3, setResults3] = useState([]);
  const [results4, setResults4] = useState([]);
  const [results5, setResults5] = useState([]);

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player3, setPlayer3] = useState([]);
  const [player4, setPlayer4] = useState([]);
  const [player5, setPlayer5] = useState([]);

  
  return (
    <div className="container">
      <div className="introduction">
        <h1 className="title">Create Your Marvel Soccer Team</h1>
        <h2 className="subtitle">Choose your favourite Heroes</h2>
      </div>

      <div className="main-section">
        <div className="column">
          <div className="draft">
            <div><CharacterIcon player = {player1}/></div>
          </div>
        </div>
        <div className="column">
          <div className="title">
            <div className="title-item"></div>
            <div className="title-item"></div>
            <div className="title-item"></div>
          </div>
          <CharacterSearchBar setResults={setResults1} />
          <SearchResults results={results1} setPlayer={setPlayer1}/>
          <CharacterSearchBar setResults={setResults2} />
          <SearchResults results={results2} setPlayer={setPlayer2}/>
          <CharacterSearchBar setResults={setResults3} />
          <SearchResults results={results3} setPlayer={setPlayer3}/>
          <CharacterSearchBar setResults={setResults4} />
          <SearchResults results={results4} setPlayer={setPlayer4}/>
          <CharacterSearchBar setResults={setResults5} />
          <SearchResults results={results5} setPlayer={setPlayer5}/>
          </div>
        </div>
    </div>
  );
}

export default App;
