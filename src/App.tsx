import React from 'react';
import './App.css';
import { CatList } from './Pages/CatList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <CatList />
        </>
      </header>
    </div>
  )
};

export default App;
