import { useState } from 'react';
import './App.scss'
import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';

import CharacterSearchBar from './components/CharacterSearchBar';

function App() {

  return (
    <div className='container'>
      <div className = 'introducing-premise'></div>
      <div className = 'main-section'></div>
        <div className = 'column'></div>
        <div className= 'column'>
          <CharacterSearchBar />
        </div>
      <h1>Create Your Marvel Soccer Team</h1>
      
    </div>
  );
}

export default App;