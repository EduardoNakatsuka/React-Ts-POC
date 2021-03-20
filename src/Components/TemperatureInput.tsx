import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  temperature: Number, 
  onTemperatureChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TemperatureInput: React.FC<InputProps> = ({ label, temperature, onTemperatureChange, ...rest }) => (
  <>
    { label ? <label>{ label }</label> : null }

    <input
      value={temperature.toString()}
      onChange={onTemperatureChange}
      { ...rest }
    />
  </>
);

export default TemperatureInput;