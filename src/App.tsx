import React from 'react';
import './App.css';
import { CatFinder } from './Pages/CatFinder';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <CatFinder />
        </>
      </header>
    </div>
  )
};

export default App;
