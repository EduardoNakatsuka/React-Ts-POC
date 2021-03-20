import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode,
};

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => (
  <button
    onClick={onClick}
    { ...rest }
  >
    { children }
  </button>
);

export default Button;