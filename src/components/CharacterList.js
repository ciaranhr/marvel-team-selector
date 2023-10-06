import React, { useState, useEffect } from 'react';
import md5 from 'md5';
import axios from 'axios';
import '../App.scss';



function CharacterList() {
  const [marvelCharacters, setMarvelCharacters] = useState([]);
  const [offset, setOffset] = useState(0);
  const publicKey = '90007f0ce43678cfdb784e3113440869';
  const apiBaseURL = 'https://gateway.marvel.com/v1/public';
  const limit = 20; // Number of results per request

  // Creates a URL for searching Marvel API for characters
  function createURL(offset) {
    const ts = Date.now();
    const params = new URLSearchParams({
      ts: ts,
      apikey: publicKey,
      hash: md5(ts + process.env.REACT_APP_PRIVATE_KEY + publicKey ),
      limit: limit,
      offset: offset,
    });
    const endpoint = `${apiBaseURL}/characters?`;
    const url = endpoint + params;
    return url;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(createURL(offset));
        const newCharacters = response.data.data.results;
        setMarvelCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [offset]);
  
  return (
    <div className="character-list">
      <input type="text" className="form-control" placeholder="Character Search" aria-label="Character Search" aria-describedby="basic-addon1"></input>
      <ul>
        {marvelCharacters.map((character) => (
          <li className="list-item" key={character.id}>{character.name}</li>
        ))}
      </ul> 
      <button className="secondaryButton" onClick={() => setOffset((prevOffset) => prevOffset + limit)}>Load More</button>
    </div> 
  ) 
}

export default CharacterList;