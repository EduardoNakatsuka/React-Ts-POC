import React from 'react';

interface WaterProps {
  isBoiling: Boolean,
}

const WaterStatus: React.FC<WaterProps> = ({ isBoiling }) => {
  return (
    <>
      { isBoiling ? 'Water is boiling' : 'Water is not boiling' }
    </>
  )
};

export default WaterStatus;