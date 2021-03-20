import React, { useState } from 'react';
import './App.css';
import WaterStatus from './Components/WaterStatus';
import TemperatureInput from './Components/TemperatureInput';

const App: React.FC = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(0);
  const [type, setType] = useState<'c' | 'f'>('c');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);

    setCelsius(value);
    setFahrenheit(toFahrenheit(value));
    setType('c');
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);

    setFahrenheit(value);
    setCelsius(toCelsius(value));
    setType('f');
  };

  const toCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5 / 9;
  };

  const toFahrenheit = (celsius: number): number => {
    return (celsius * 9 / 5) + 32;
  };

  const isBoiling = (): Boolean => {
    let value = celsius;

    if (type === 'f') {
      value = toCelsius(fahrenheit);
    }

    return Math.round(value) >= 100;
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <>
          <TemperatureInput
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}
            type="number"
            label="Temperature in celsius"
          />
          <TemperatureInput
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
            type="number"
            label="Temperature in fahrenheit"
          />

          <WaterStatus isBoiling={isBoiling()}/>
        </>
      </header>
    </div>
  )
};

export default App;
