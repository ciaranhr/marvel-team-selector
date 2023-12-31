import React, { useState } from "react";
import md5 from "md5";
import axios from "axios";
import "../css/CharacterSearchBar.scss";


function CharacterSearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const privateKey = process.env.REACT_APP_PRIVATE_KEY;

  const publicKey = "90007f0ce43678cfdb784e3113440869";
  const apiBaseURL = "https://gateway.marvel.com/v1/public";
  const limit = 30; // Number of results per request


  // Creates a URL for searching Marvel API for characters that begin with "name"
  function createURL(input) {
    const ts = Date.now();
    const params = new URLSearchParams({
      ts: ts,
      apikey: publicKey,
      hash: md5(ts + privateKey + publicKey),
      limit: limit,
      nameStartsWith: input,
      orderBy: "name",
    });
    const endpoint = `${apiBaseURL}/characters?`;
    const url = endpoint + params;
    return url;
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  function clearResults() {
    setInput("");
    setResults([]);
  }


  const fetchData = async () => {
    if (input !== "") {
      try {
        const response = await axios.get(createURL(input));
        const newCharacters = response.data.data.results;
        setResults(newCharacters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <button type="submit">Search</button>
        <input
          placeholder="Search characters..."
          value={input}
          onChange={handleChange}
        />
        <button type="clear" onClick={clearResults}>x</button>
        
      </div>
    </form>
  );
}

export default CharacterSearchBar;
