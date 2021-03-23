import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Provider store={store}>
            <div>
              <h1>Search for a Package</h1>
            </div>
          </Provider>
        </>
      </header>
    </div>
  )
};

export default App;
