import { useState } from "react";
import "./App.scss";
import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import SearchResults from "./components/SearchResults";
import CharacterSearchBar from "./components/CharacterSearchBar";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="container">
      <div className="introduction">
        <h1 className="title">Create Your Marvel Soccer Team</h1>
        <h2 className="subtitle">Choose your favourite Hero&apos;s</h2>
      </div>

      <div className="main-section">
        <div className="column"></div>
        <div className="draft"></div>
        <div className="column"></div>
        <div className="title">
          <div className="title-item"></div>
          <div className="title-item"></div>
          <div className="title-item"></div>
        </div>
        <CharacterSearchBar setResults={setResults} />
        <CharacterSearchBar setResults={setResults} />
        <CharacterSearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default App;
